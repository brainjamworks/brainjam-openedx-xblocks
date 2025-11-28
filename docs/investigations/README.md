# XBlock Investigations

This directory contains detailed technical investigations into the OpenEdX XBlock ecosystem, focusing on how our custom XBlocks integrate with the platform.

## Purpose

These investigations serve as:
- **Technical reference** for understanding system architecture
- **Decision documentation** for implementation choices
- **Onboarding material** for new developers
- **Troubleshooting guides** when issues arise

## Investigations

### 1. XBlock Modal Sizing (2025-11-28)

**Directory:** [`xblock-modal-sizing/`](./xblock-modal-sizing/)

**Problem:** Custom XBlock studio editors rendered in OpenEdX Studio modals with restrictive sizing (435px fixed height), making complex React-based editors difficult to use.

**Investigation Scope:**
- How edx-platform modal system works
- How frontend-app-authoring MFE handles XBlock editing
- Where Liverpool theme customizations apply
- Custom XBlock React architecture

**Key Findings:**
- Modal size controlled by CSS in `edx-platform/cms/static/sass/elements/_modal-window.scss`
- Default: 95% width, 435px content height
- Each modal gets `.modal-type-{category}` class for targeting
- Liverpool theme has 1,751 lines of modal styling but no sizing rules
- Design tokens available: `$liverpool-content-max-width-admin` (1400px)

**Recommended Solution:**
Add modal sizing CSS to Liverpool theme's `course-unit-mfe-iframe-bundle.scss`:
- Width: 90vw (max 1400px)
- Height: auto (min 600px, max 85vh)
- Use Liverpool design tokens for consistency

**Documents:**
- [`00-SUMMARY.md`](./xblock-modal-sizing/00-SUMMARY.md) - Executive summary and recommendations
- [`01-edx-platform-modal-system.md`](./xblock-modal-sizing/01-edx-platform-modal-system.md) - Deep dive into modal implementation
- [`02-frontend-app-authoring-mfe.md`](./xblock-modal-sizing/02-frontend-app-authoring-mfe.md) - MFE architecture analysis
- [`03-liverpool-theme-integration.md`](./xblock-modal-sizing/03-liverpool-theme-integration.md) - Theme structure and modal styling
- [`04-custom-xblock-architecture.md`](./xblock-modal-sizing/04-custom-xblock-architecture.md) - React studio editor architecture

**Status:** ✅ Investigation complete - Implementation pending

---

## How to Use These Documents

### For Implementation
1. Start with the `00-SUMMARY.md` in each investigation
2. Read the specific deep-dive documents for technical details
3. Follow the recommended solutions

### For Troubleshooting
1. Search for relevant keywords across all documents
2. Check file paths and line numbers (may need updating for new OpenEdX versions)
3. Use the architecture diagrams to understand data flow

### For Onboarding
1. Read `04-custom-xblock-architecture.md` to understand our XBlock structure
2. Review `01-edx-platform-modal-system.md` to understand platform integration
3. Check `03-liverpool-theme-integration.md` for theming guidelines

## Contributing New Investigations

When documenting a new investigation:

1. **Create a new directory** under `docs/investigations/`
   ```bash
   mkdir docs/investigations/{investigation-name}
   ```

2. **Follow the structure:**
   ```
   {investigation-name}/
   ├── 00-SUMMARY.md              # Executive summary
   ├── 01-{component-name}.md     # Detailed findings
   ├── 02-{component-name}.md     # More detailed findings
   └── ...
   ```

3. **Include in each document:**
   - Investigation date
   - Directories/files examined
   - Key findings with file paths and line numbers
   - Code examples
   - Recommendations

4. **Update this README** with:
   - Investigation title and date
   - Problem statement
   - Key findings (1-2 paragraphs)
   - Links to documents
   - Status

## Document Maintenance

### When to Update

Update investigation documents when:
- OpenEdX platform is upgraded
- File paths change
- APIs or interfaces change
- New insights are discovered

### Version Tracking

Each investigation includes:
- **Investigation Date** - When the research was conducted
- **File paths** - Specific locations examined
- **Line numbers** - Exact code references (may drift over time)

### Deprecation

Mark investigations as deprecated when:
- The investigated system is replaced
- The problem no longer exists
- A better solution is found

Add a deprecation notice at the top:
```markdown
> **⚠️ DEPRECATED:** This investigation is no longer relevant as of {date}.
> See {link-to-new-investigation} for current information.
```

## Related Documentation

- [Custom XBlock Development Guide](../development/) _(when created)_
- [Liverpool Theme Documentation](~/tutor-liverpool-dental-legacy/README.md)
- [OpenEdX Documentation](https://edx.readthedocs.io/)
- [XBlock API Reference](https://edx.readthedocs.io/projects/xblock/)

## Quick Reference: Key Repositories

| Repository | Purpose | Location |
|------------|---------|----------|
| **brainjam-openedx-xblocks** | Custom XBlocks with React editors | `/Users/brainjam/brainjam-openedx-xblocks` |
| **edx-platform** | Core OpenEdX platform | `/Users/brainjam/edx-platform` |
| **frontend-app-authoring** | Course authoring MFE | `/Users/brainjam/frontend-app-authoring` |
| **tutor-liverpool-dental-legacy** | Custom theme | `/Users/brainjam/tutor-liverpool-dental-legacy` |

## Investigation Index

| Investigation | Date | Status | Problem | Solution |
|--------------|------|--------|---------|----------|
| [XBlock Modal Sizing](./xblock-modal-sizing/) | 2025-11-28 | ✅ Complete | Studio editor modals too small (435px height) | Add CSS to Liverpool theme |

---

**Last Updated:** 2025-11-28
**Maintained By:** Development Team
