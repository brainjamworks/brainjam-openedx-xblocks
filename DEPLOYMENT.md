# Deployment Guide

This guide covers deploying BrainJam OpenEdX XBlocks to development and production environments.

## Table of Contents

- [Development Deployment](#development-deployment)
- [Production Deployment](#production-deployment)
- [Version Management](#version-management)
- [Troubleshooting](#troubleshooting)

---

## Development Deployment

Development deployment uses Docker containers with Tutor for local testing.

### Prerequisites

- Tutor OpenEdX development environment running
- Docker containers: `tutor_dev-cms-1` and `tutor_dev-lms-1`
- Node.js 18+ and npm installed

### Deploy Single XBlock

```bash
# Navigate to XBlock directory
cd xblocks/accordion

# Install dependencies (first time only)
cd frontend
npm install

# Build frontend
npm run build

# Deploy to local Tutor
cd ..
./deploy-dev.sh
```

### Development Workflow

1. **Make changes** to React components in `frontend/src/`
2. **Rebuild** frontend:
   ```bash
   cd frontend
   npm run build
   ```
3. **Deploy** to containers:
   ```bash
   ./deploy-dev.sh
   ```
4. **Refresh** Studio/LMS page to see changes

### Watch Mode (Auto-rebuild)

Some XBlocks include watch scripts for automatic rebuilding:

```bash
./watch-sync.sh
```

This watches for file changes and automatically rebuilds + deploys.

---

## Production Deployment

Production deployment creates distributable Python packages that can be installed on production servers.

### Build Script Usage

The repository includes a production deployment script: `deploy-prod.sh`

#### Build All XBlocks

```bash
./deploy-prod.sh --all
```

This will:
1. Build frontend assets for each XBlock
2. Create Python source distributions (.tar.gz)
3. Place packages in `./dist/` directory

#### Build Single XBlock

```bash
./deploy-prod.sh accordion
```

#### Build with Version Number

```bash
./deploy-prod.sh -v 1.2.0 --all
```

#### Clean Build (Recommended)

```bash
./deploy-prod.sh --clean --all
```

Removes all build artifacts before building.

#### List Available XBlocks

```bash
./deploy-prod.sh --list
```

### Script Options

```
-a, --all           Build all XBlocks
-l, --list          List available XBlocks
-c, --clean         Clean build artifacts before building
-v, --version VER   Set version number
-o, --output DIR    Output directory for packages
-h, --help          Show help message
```

### Production Deployment Steps

#### 1. Build Packages

```bash
# Clean build recommended for production
./deploy-prod.sh --clean --all
```

Packages will be created in `./dist/`:
- `accordion-1.0.0.tar.gz`
- `flashcards-1.0.0.tar.gz`
- `tabs-1.0.0.tar.gz`
- `drag-drop-matching-xblock-1.0.0.tar.gz`
- `image-hotspot-xblock-1.0.0.tar.gz`
- `image-commentary-xblock-1.0.0.tar.gz`

#### 2. Test in Staging

**ALWAYS test packages in staging before production!**

```bash
# Copy to staging server
scp dist/*.tar.gz user@staging-server:/tmp/

# SSH to staging
ssh user@staging-server

# Install XBlocks
pip install /tmp/accordion-1.0.0.tar.gz
pip install /tmp/flashcards-1.0.0.tar.gz
# ... etc

# Restart OpenEdX services (Tutor)
tutor local restart

# Or for native installations
sudo systemctl restart edxapp
sudo systemctl restart edxapp_workers
```

#### 3. Verify in Staging

1. Open Studio on staging
2. Go to **Settings → Advanced Settings**
3. Add XBlocks to **Advanced Module List**:
   ```json
   ["accordion", "flashcards", "tabs", "drag_drop_matching", "image_hotspot", "image_commentary"]
   ```
4. Create test course unit
5. Add each XBlock and verify functionality
6. Test student view in LMS
7. Test grading (for problem XBlocks)

#### 4. Deploy to Production

Once verified in staging:

```bash
# Copy packages to production
scp dist/*.tar.gz user@prod-server:/var/xblocks/

# SSH to production
ssh user@prod-server

# Backup current XBlocks (optional but recommended)
pip freeze | grep -E "(accordion|flashcards|tabs|drag_drop_matching|image_hotspot|image_commentary)" > xblock-versions-backup.txt

# Install new versions
pip install /var/xblocks/accordion-1.0.0.tar.gz --upgrade
pip install /var/xblocks/flashcards-1.0.0.tar.gz --upgrade
# ... etc

# Restart services
tutor local restart

# Or for native installations
sudo systemctl restart edxapp
sudo systemctl restart edxapp_workers
```

#### 5. Verify in Production

1. Check logs for errors:
   ```bash
   # Tutor
   tutor local logs -f

   # Native installation
   sudo tail -f /edx/var/log/lms/edx.log
   sudo tail -f /edx/var/log/cms/edx.log
   ```

2. Test in Studio/LMS
3. Monitor for any issues

### Rollback Procedure

If issues arise:

```bash
# Reinstall previous version
pip install accordion==<previous-version>

# Or from backup list
pip install -r xblock-versions-backup.txt

# Restart services
tutor local restart
```

---

## Version Management

### Version Number Format

Follow semantic versioning: `MAJOR.MINOR.PATCH`

- **MAJOR**: Breaking changes (e.g., 1.0.0 → 2.0.0)
- **MINOR**: New features, backwards compatible (e.g., 1.0.0 → 1.1.0)
- **PATCH**: Bug fixes (e.g., 1.0.0 → 1.0.1)

### Updating Version Numbers

Version numbers are defined in each XBlock's `setup.py`:

```python
setup(
    name='accordion-xblock',
    version='1.0.0',  # Update this
    # ...
)
```

### Automated Version Update

Use the build script with `-v` flag:

```bash
./deploy-prod.sh -v 1.2.0 --all
```

This updates version in `setup.py` before building.

### Git Tagging

Tag releases in git:

```bash
git tag -a v1.0.0 -m "Release version 1.0.0"
git push origin v1.0.0
```

---

## Troubleshooting

### Frontend Build Fails

**Symptom**: `npm run build` fails with errors

**Solutions**:
1. Delete `node_modules` and reinstall:
   ```bash
   rm -rf frontend/node_modules
   cd frontend && npm install
   ```

2. Check Node version:
   ```bash
   node --version  # Should be 18+
   ```

3. Clear npm cache:
   ```bash
   npm cache clean --force
   ```

### XBlock Not Appearing in Studio

**Symptom**: XBlock doesn't show in Advanced components

**Solutions**:
1. Check Advanced Module List includes XBlock name
2. Restart CMS container:
   ```bash
   docker restart tutor_dev-cms-1
   # Wait 60 seconds for restart
   ```
3. Check logs for errors:
   ```bash
   docker logs tutor_dev-cms-1 | grep accordion
   ```

### Build Artifacts Missing

**Symptom**: `deploy-prod.sh` fails with "not found" errors

**Solution**: Ensure frontend was built before running script:
```bash
cd xblocks/accordion/frontend
npm run build
```

Or use the script which builds automatically:
```bash
./deploy-prod.sh accordion
```

### Permission Errors in Production

**Symptom**: Cannot install packages in production

**Solutions**:
1. Use `sudo` for system-wide installation
2. Or activate virtualenv:
   ```bash
   source /edx/app/edxapp/venv/bin/activate
   pip install xblock-package.tar.gz
   ```

### Version Conflicts

**Symptom**: Dependency version conflicts during install

**Solutions**:
1. Check Python version compatibility
2. Review `setup.py` dependencies
3. Install with `--force-reinstall` flag:
   ```bash
   pip install xblock-package.tar.gz --force-reinstall
   ```

### Frontend Assets Not Loading

**Symptom**: XBlock appears but no styling or interactivity

**Solutions**:
1. Verify build outputs exist:
   ```bash
   ls -lh xblock_name/public/
   # Should see student-ui.js, studio-ui.js, and CSS files
   ```

2. Check browser console for 404 errors
3. Ensure `public/` directory is included in package:
   ```bash
   # Check MANIFEST.in includes:
   recursive-include xblock_name/public *
   ```

4. Rebuild and redeploy:
   ```bash
   cd frontend && npm run build
   cd .. && ./deploy-dev.sh
   ```

---

## Quick Reference

### Common Commands

```bash
# Development
cd xblocks/accordion/frontend && npm run build && cd .. && ./deploy-dev.sh

# Production build all
./deploy-prod.sh --clean --all

# Production build single
./deploy-prod.sh accordion

# Production with version
./deploy-prod.sh -v 1.2.0 --all

# List XBlocks
./deploy-prod.sh --list

# Help
./deploy-prod.sh --help
```

### File Locations

- **Development XBlocks**: `xblocks/*/`
- **Built packages**: `dist/`
- **Frontend source**: `xblocks/*/frontend/src/`
- **Built assets**: `xblocks/*/xblock_name/public/`

### Important Files

- `setup.py` - Python package configuration, version number
- `deploy-dev.sh` - Development deployment (per XBlock)
- `deploy-prod.sh` - Production build script (repository root)
- `frontend/package.json` - Frontend dependencies
- `frontend/vite.config.ts` - Build configuration

---

## Support

For deployment issues:

1. Check this guide
2. Review XBlock-specific README
3. Check OpenEdX XBlock docs: https://edx.readthedocs.io/projects/xblock/
4. Review Tutor documentation: https://docs.tutor.edly.io/

---

**Last Updated**: November 2025
**Deployment Script Version**: 1.0.0
