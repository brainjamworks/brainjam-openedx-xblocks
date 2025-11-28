#!/bin/bash
# ARCHITECTURAL: Deployment script for ImageAnnotation to Tutor dev
#
# DON'T CHANGE: The validation and deployment logic
# IMPLEMENTATION: Update XBLOCK_DIR and XBLOCK_NAME after copying template

set -e  # Exit on error

# IMPLEMENTATION: Update these paths after copying template
XBLOCK_DIR="/Users/brainjam/brainjam-openedx-xblocks/xblocks/image-annotation-xblock"
XBLOCK_NAME="image_annotation"

echo "🚀 Deploying ImageAnnotation to Tutor dev..."
echo ""

# ARCHITECTURAL: Step 1 - Verify build exists
# DON'T CHANGE: This validation prevents incomplete deployments
echo "✅ Step 1: Checking for built React bundles..."
if [ ! -f "$XBLOCK_DIR/$XBLOCK_NAME/public/student-ui.js" ]; then
    echo "❌ ERROR: student-ui.js not found!"
    echo "   Run 'cd $XBLOCK_DIR/frontend && npm run build' first"
    exit 1
fi

if [ ! -f "$XBLOCK_DIR/$XBLOCK_NAME/public/studio-ui.js" ]; then
    echo "❌ ERROR: studio-ui.js not found!"
    echo "   Run 'cd $XBLOCK_DIR/frontend && npm run build' first"
    exit 1
fi

echo "   ✓ student-ui.js ($(ls -lh $XBLOCK_DIR/$XBLOCK_NAME/public/student-ui.js | awk '{print $5}'))"
echo "   ✓ studio-ui.js ($(ls -lh $XBLOCK_DIR/$XBLOCK_NAME/public/studio-ui.js | awk '{print $5}'))"
[ -f "$XBLOCK_DIR/$XBLOCK_NAME/public/student-ui.css" ] && echo "   ✓ student-ui.css ($(ls -lh $XBLOCK_DIR/$XBLOCK_NAME/public/student-ui.css | awk '{print $5}'))"
echo ""

# ARCHITECTURAL: Step 2 - Create temporary deployment directory
# DON'T CHANGE: Excludes frontend source files for security
echo "📦 Step 2: Creating deployment package..."
TEMP_DIR=$(mktemp -d)
mkdir -p "$TEMP_DIR/image-annotation-xblock"

# Copy only what's needed (exclude frontend/ directory entirely)
cp "$XBLOCK_DIR/setup.py" "$TEMP_DIR/image-annotation-xblock/"
[ -f "$XBLOCK_DIR/MANIFEST.in" ] && cp "$XBLOCK_DIR/MANIFEST.in" "$TEMP_DIR/image-annotation-xblock/"
cp -r "$XBLOCK_DIR/$XBLOCK_NAME" "$TEMP_DIR/image-annotation-xblock/"

# Remove frontend source directory (we only need public/ with built bundles)
rm -rf "$TEMP_DIR/image-annotation-xblock/$XBLOCK_NAME/frontend"

echo "   ✓ Created clean deployment package"
echo "   ✓ Included: setup.py, $XBLOCK_NAME/*.py, $XBLOCK_NAME/public/*.js"
echo ""

# ARCHITECTURAL: Step 3 - Copy to containers
# DON'T CHANGE: This pattern works with standard Tutor dev setup
echo "📤 Step 3: Copying to containers..."
docker cp "$TEMP_DIR/image-annotation-xblock" tutor_dev-cms-1:/tmp/
docker cp "$TEMP_DIR/image-annotation-xblock" tutor_dev-lms-1:/tmp/
rm -rf "$TEMP_DIR"
echo "   ✓ Copied to both CMS and LMS containers"
echo ""

# ARCHITECTURAL: Step 4 - Install in containers
# DON'T CHANGE: The pip install pattern
echo "🔧 Step 4: Installing XBlock in containers..."
docker exec tutor_dev-cms-1 bash -c "cd /tmp/image-annotation-xblock && pip install -e . --force-reinstall --no-deps"
docker exec tutor_dev-lms-1 bash -c "cd /tmp/image-annotation-xblock && pip install -e . --force-reinstall --no-deps"
echo "   ✓ Installed in both containers"
echo ""

# ARCHITECTURAL: Step 5 - Restart containers
# DON'T CHANGE: Required for Python changes to take effect
echo "🔄 Step 5: Restarting containers..."
docker restart tutor_dev-cms-1 tutor_dev-lms-1
echo "   ✓ Containers restarting..."
echo ""

echo "✨ Deployment complete!"
echo ""
echo "⏳ Wait ~60 seconds for services to start, then:"
echo "   1. Open Studio: http://apps.local.openedx.io:2001"
echo "   2. Go to Settings → Advanced Settings"
echo "   3. Add '$XBLOCK_NAME' to Advanced Module List"
echo "   4. Add the XBlock to a unit: Advanced → ImageAnnotation"
echo ""
echo "📝 To check logs:"
echo "   docker logs -f tutor_dev-lms-1 | grep $XBLOCK_NAME"
echo ""
echo "🔧 Development workflow:"
echo "   1. Make changes to React components in frontend/src/"
echo "   2. Rebuild: cd frontend && npm run build"
echo "   3. Deploy: ./deploy-dev.sh"
echo ""
