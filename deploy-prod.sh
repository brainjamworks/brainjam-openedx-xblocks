#!/bin/bash
# Production deployment script for BrainJam OpenEdX XBlocks
#
# This script builds and packages XBlocks for production deployment.
# It creates distribution packages that can be installed on production servers.

set -e  # Exit on error

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Configuration
REPO_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
DIST_DIR="$REPO_ROOT/dist"
BUILD_DIR="$REPO_ROOT/build"

# Available XBlocks
XBLOCKS=(
    "accordion"
    "flashcards"
    "tabs"
    "drag-drop-matching-xblock"
    "image-hotspot-xblock"
    "image-commentary-xblock"
)

# Print with color
print_step() {
    echo -e "${BLUE}▶${NC} $1"
}

print_success() {
    echo -e "${GREEN}✓${NC} $1"
}

print_error() {
    echo -e "${RED}✗${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}⚠${NC} $1"
}

# Usage information
usage() {
    cat << EOF
Usage: $0 [OPTIONS] [XBLOCK_NAME]

Build and package XBlocks for production deployment.

OPTIONS:
    -a, --all           Build all XBlocks
    -l, --list          List available XBlocks
    -c, --clean         Clean build artifacts before building
    -v, --version VER   Set version number (default: from setup.py)
    -o, --output DIR    Output directory for packages (default: ./dist)
    -h, --help          Show this help message

XBLOCK_NAME:
    Name of specific XBlock to build (e.g., accordion, flashcards)
    If not specified and --all not used, will prompt for selection.

EXAMPLES:
    $0 --all                    # Build all XBlocks
    $0 accordion                # Build only accordion XBlock
    $0 --clean --all            # Clean and build all
    $0 -v 1.2.0 flashcards      # Build flashcards with version 1.2.0

PRODUCTION DEPLOYMENT:
    1. Build packages: $0 --all
    2. Copy to production server: scp dist/*.tar.gz server:/path/
    3. Install on server: pip install xblock-name-1.0.0.tar.gz
    4. Restart OpenEdX services

EOF
}

# List available XBlocks
list_xblocks() {
    echo "Available XBlocks:"
    echo ""
    for xblock in "${XBLOCKS[@]}"; do
        if [ -d "$REPO_ROOT/xblocks/$xblock" ]; then
            echo "  • $xblock"
        fi
    done
    echo ""
}

# Clean build artifacts
clean_build() {
    print_step "Cleaning build artifacts..."

    rm -rf "$DIST_DIR"
    rm -rf "$BUILD_DIR"

    # Clean individual XBlock build artifacts
    for xblock in "${XBLOCKS[@]}"; do
        if [ -d "$REPO_ROOT/xblocks/$xblock" ]; then
            cd "$REPO_ROOT/xblocks/$xblock"
            rm -rf build/ dist/ *.egg-info/
            find . -type d -name __pycache__ -exec rm -rf {} + 2>/dev/null || true
        fi
    done

    print_success "Build artifacts cleaned"
    echo ""
}

# Build frontend for an XBlock
build_frontend() {
    local xblock=$1
    local xblock_dir="$REPO_ROOT/xblocks/$xblock"

    if [ ! -d "$xblock_dir/frontend" ]; then
        print_warning "No frontend directory for $xblock, skipping frontend build"
        return 0
    fi

    print_step "Building frontend for $xblock..."

    cd "$xblock_dir/frontend"

    # Check if node_modules exists
    if [ ! -d "node_modules" ]; then
        print_step "Installing npm dependencies..."
        npm install
    fi

    # Build frontend
    npm run build

    # Verify build outputs exist
    local python_pkg_name
    case $xblock in
        "drag-drop-matching-xblock")
            python_pkg_name="drag_drop_matching"
            ;;
        "image-hotspot-xblock")
            python_pkg_name="image_hotspot"
            ;;
        "image-commentary-xblock")
            python_pkg_name="image_commentary"
            ;;
        *)
            python_pkg_name="$xblock"
            ;;
    esac

    if [ ! -f "$xblock_dir/$python_pkg_name/public/student-ui.js" ]; then
        print_error "Frontend build failed: student-ui.js not found"
        return 1
    fi

    if [ ! -f "$xblock_dir/$python_pkg_name/public/studio-ui.js" ]; then
        print_error "Frontend build failed: studio-ui.js not found"
        return 1
    fi

    print_success "Frontend built successfully"
    return 0
}

# Build Python package for an XBlock
build_package() {
    local xblock=$1
    local xblock_dir="$REPO_ROOT/xblocks/$xblock"
    local version=$2

    print_step "Building Python package for $xblock..."

    cd "$xblock_dir"

    # Update version if specified
    if [ -n "$version" ]; then
        print_step "Setting version to $version..."
        # This is a simple sed replacement - adjust based on your setup.py format
        sed -i.bak "s/version='[^']*'/version='$version'/" setup.py
        rm -f setup.py.bak
    fi

    # Create source distribution
    python setup.py sdist

    # Verify package was created
    if [ ! -d "$xblock_dir/dist" ] || [ -z "$(ls -A $xblock_dir/dist)" ]; then
        print_error "Package build failed: no dist files created"
        return 1
    fi

    # Copy to main dist directory
    mkdir -p "$DIST_DIR"
    cp -v "$xblock_dir/dist"/*.tar.gz "$DIST_DIR/"

    print_success "Package built: $(ls $xblock_dir/dist/*.tar.gz | xargs basename)"
    return 0
}

# Build a single XBlock
build_xblock() {
    local xblock=$1
    local version=$2

    echo ""
    echo "════════════════════════════════════════════════════════════"
    print_step "Building: $xblock"
    echo "════════════════════════════════════════════════════════════"
    echo ""

    local xblock_dir="$REPO_ROOT/xblocks/$xblock"

    # Check if XBlock exists
    if [ ! -d "$xblock_dir" ]; then
        print_error "XBlock not found: $xblock"
        return 1
    fi

    # Build frontend
    if ! build_frontend "$xblock"; then
        print_error "Frontend build failed for $xblock"
        return 1
    fi

    echo ""

    # Build package
    if ! build_package "$xblock" "$version"; then
        print_error "Package build failed for $xblock"
        return 1
    fi

    echo ""
    print_success "Successfully built $xblock"
    echo ""

    return 0
}

# Main script
main() {
    local build_all=false
    local do_clean=false
    local version=""
    local xblock_name=""

    # Parse arguments
    while [[ $# -gt 0 ]]; do
        case $1 in
            -a|--all)
                build_all=true
                shift
                ;;
            -l|--list)
                list_xblocks
                exit 0
                ;;
            -c|--clean)
                do_clean=true
                shift
                ;;
            -v|--version)
                version="$2"
                shift 2
                ;;
            -o|--output)
                DIST_DIR="$2"
                shift 2
                ;;
            -h|--help)
                usage
                exit 0
                ;;
            -*)
                print_error "Unknown option: $1"
                usage
                exit 1
                ;;
            *)
                xblock_name="$1"
                shift
                ;;
        esac
    done

    # Banner
    echo ""
    echo "╔═══════════════════════════════════════════════════════════╗"
    echo "║  BrainJam OpenEdX XBlocks - Production Build Script      ║"
    echo "╚═══════════════════════════════════════════════════════════╝"
    echo ""

    # Clean if requested
    if [ "$do_clean" = true ]; then
        clean_build
    fi

    # Determine what to build
    local xblocks_to_build=()

    if [ "$build_all" = true ]; then
        xblocks_to_build=("${XBLOCKS[@]}")
        print_step "Building all XBlocks..."
    elif [ -n "$xblock_name" ]; then
        xblocks_to_build=("$xblock_name")
    else
        # Interactive selection
        echo "Select XBlock to build:"
        echo ""
        list_xblocks
        read -p "Enter XBlock name (or 'all' for all XBlocks): " selection

        if [ "$selection" = "all" ]; then
            xblocks_to_build=("${XBLOCKS[@]}")
        else
            xblocks_to_build=("$selection")
        fi
    fi

    echo ""

    # Build XBlocks
    local success_count=0
    local fail_count=0
    local failed_xblocks=()

    for xblock in "${xblocks_to_build[@]}"; do
        if build_xblock "$xblock" "$version"; then
            ((success_count++))
        else
            ((fail_count++))
            failed_xblocks+=("$xblock")
        fi
    done

    # Summary
    echo ""
    echo "════════════════════════════════════════════════════════════"
    echo "Build Summary"
    echo "════════════════════════════════════════════════════════════"
    echo ""
    print_success "Successfully built: $success_count XBlock(s)"

    if [ $fail_count -gt 0 ]; then
        print_error "Failed to build: $fail_count XBlock(s)"
        for xblock in "${failed_xblocks[@]}"; do
            echo "  • $xblock"
        done
        echo ""
    fi

    if [ $success_count -gt 0 ]; then
        echo ""
        echo "📦 Distribution packages created in:"
        echo "   $DIST_DIR"
        echo ""
        echo "📋 Built packages:"
        ls -lh "$DIST_DIR"/*.tar.gz 2>/dev/null | awk '{print "   • " $9 " (" $5 ")"}'
        echo ""
        echo "🚀 Next steps for production deployment:"
        echo ""
        echo "   1. Test the packages in a staging environment:"
        echo "      pip install dist/xblock-name-*.tar.gz"
        echo ""
        echo "   2. Copy to production server:"
        echo "      scp dist/*.tar.gz user@server:/path/to/xblocks/"
        echo ""
        echo "   3. Install on production OpenEdX instance:"
        echo "      pip install /path/to/xblocks/xblock-name-*.tar.gz"
        echo ""
        echo "   4. Restart OpenEdX services:"
        echo "      sudo systemctl restart edxapp"
        echo "      # or for Tutor:"
        echo "      tutor local restart"
        echo ""
        echo "   5. Enable XBlock in Studio:"
        echo "      Settings → Advanced Settings → Advanced Module List"
        echo ""
    fi

    # Exit with appropriate code
    if [ $fail_count -gt 0 ]; then
        exit 1
    fi

    exit 0
}

# Run main function
main "$@"
