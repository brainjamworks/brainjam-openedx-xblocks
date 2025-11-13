#!/bin/bash
# Auto-sync XBlock bundles to containers during development
#
# Usage: ./watch-sync.sh
#
# This script watches for changes to built bundles and automatically
# copies them to the running Tutor containers. No container restart needed!

set -e

XBLOCK_NAME="drag_drop_matching"
XBLOCK_DIR="$(cd "$(dirname "$0")" && pwd)"
PUBLIC_DIR="$XBLOCK_DIR/$XBLOCK_NAME/public"

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}🔄 Starting XBlock bundle auto-sync...${NC}"
echo ""
echo "Watching: $PUBLIC_DIR"
echo ""
echo -e "${GREEN}✨ Start Vite watch mode in another terminal:${NC}"
echo "   cd $XBLOCK_DIR/frontend && npm run watch"
echo ""
echo "Press Ctrl+C to stop"
echo ""

# Check if fswatch is installed
if ! command -v fswatch &> /dev/null; then
    echo "❌ fswatch is not installed"
    echo ""
    echo "Install with:"
    echo "  macOS: brew install fswatch"
    echo "  Linux: apt-get install fswatch (or use inotify-tools)"
    exit 1
fi

# Check if containers are running
if ! docker ps | grep -q tutor_dev-cms-1; then
    echo "❌ tutor_dev-cms-1 container is not running"
    echo "   Start with: tutor dev start -d"
    exit 1
fi

# Find where XBlock is installed in containers
echo "🔍 Finding XBlock installation path in containers..."
INSTALL_PATH=$(docker exec tutor_dev-cms-1 pip show drag-drop-matching-xblock 2>/dev/null | grep "Location:" | awk '{print $2}')

if [ -z "$INSTALL_PATH" ]; then
    echo "❌ XBlock not found in containers"
    echo "   Run ./deploy-dev.sh first to install the XBlock"
    exit 1
fi

echo -e "${GREEN}✅ Found XBlock at: $INSTALL_PATH${NC}"
echo ""

# Function to sync files
sync_files() {
    echo -e "${BLUE}[$(date +%H:%M:%S)]${NC} Syncing bundles..."

    # Sync to CMS (Studio editor)
    if [ -f "$PUBLIC_DIR/studio-ui.js" ]; then
        docker cp "$PUBLIC_DIR/studio-ui.js" "tutor_dev-cms-1:$INSTALL_PATH/drag-drop-matching-xblock/$XBLOCK_NAME/public/"
    fi
    if [ -f "$PUBLIC_DIR/studio-ui.css" ]; then
        docker cp "$PUBLIC_DIR/studio-ui.css" "tutor_dev-cms-1:$INSTALL_PATH/drag-drop-matching-xblock/$XBLOCK_NAME/public/"
    fi

    # Sync to LMS (Student view)
    if [ -f "$PUBLIC_DIR/student-ui.js" ]; then
        docker cp "$PUBLIC_DIR/student-ui.js" "tutor_dev-lms-1:$INSTALL_PATH/drag-drop-matching-xblock/$XBLOCK_NAME/public/"
    fi
    if [ -f "$PUBLIC_DIR/student-ui.css" ]; then
        docker cp "$PUBLIC_DIR/student-ui.css" "tutor_dev-lms-1:$INSTALL_PATH/drag-drop-matching-xblock/$XBLOCK_NAME/public/"
    fi

    echo -e "${GREEN}   ✓ Synced to containers - refresh browser to see changes${NC}"
}

# Initial sync
sync_files

# Watch for changes
echo ""
echo -e "${BLUE}👀 Watching for changes...${NC}"
echo ""

fswatch -0 -r "$PUBLIC_DIR" | while IFS= read -r -d '' file; do
    # Only sync if it's a .js or .css file
    if [[ "$file" =~ \.(js|css)$ ]]; then
        sync_files
    fi
done
