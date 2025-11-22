# React XBlock Template

This template provides a **production-ready foundation** for building React-based XBlocks for OpenEdX. All architectural best practices and critical patterns are pre-configured.

## 🎯 What This Template Solves

This template includes solutions to all architectural issues identified in our React XBlock pattern:

✅ **jQuery unwrapping pattern** in bootstrap loaders
✅ **`process.env.NODE_ENV` definition** in Vite config
✅ **React 17 + Paragon 22.x** version locking
✅ **Minimal architecture** - based on proven xblock-accordion pattern
✅ **CSRF-protected API helper** for secure requests
✅ **TypeScript strict mode** configuration
✅ **Standard build scripts** and file structure
✅ **Deployment script** with validation

## 🚀 Quick Start

### 1. Copy the Template

```bash
cd brainjam-openedx-xblocks
cp -r react-xblock-template my-new-xblock
cd my-new-xblock
```

### 2. Find and Replace Placeholders

Use your editor's find-and-replace feature to replace these placeholders throughout all files:

| Placeholder | Example Replacement | Where Used |
|-------------|---------------------|------------|
| `{XBLOCK_NAME}` | `MY_WIDGET` | Python constants, JS function names |
| `{xblock_name}` | `my_widget` | Python module names, file names |
| `{XBlockName}` | `MyWidget` | Python class names, React component names |
| `{xblock-name}` | `my-widget` | Package names, URLs, display names |

**Example:**
- If you're building a "Quiz Timer" XBlock:
  - `{XBLOCK_NAME}` → `QUIZ_TIMER`
  - `{xblock_name}` → `quiz_timer`
  - `{XBlockName}` → `QuizTimer`
  - `{xblock-name}` → `quiz-timer`

### 3. Rename Directories

```bash
mv {xblock_name} quiz_timer  # Use your actual XBlock name
```

### 4. Install Dependencies

```bash
cd frontend
npm install
```

### 5. Build Frontend

```bash
npm run build
```

This creates:
- `quiz_timer/public/student-ui.js` - Student view bundle
- `quiz_timer/public/studio-ui.js` - Studio editor bundle

### 6. Deploy to Tutor

```bash
./deploy-dev.sh
```

### 7. Enable in OpenEdX

1. Open Studio: http://apps.local.openedx.io:2001
2. Go to Settings → Advanced Settings
3. Add `'quiz_timer'` to **Advanced Module List**
4. In a unit, click **Advanced** → Your XBlock name

## 📁 Template Structure

```
react-xblock-template/
├── README.md                      # This file
├── setup.py                       # Python package setup
├── {xblock_name}/                 # Python package (RENAME THIS)
│   ├── __init__.py               # Package init
│   ├── {xblock_name}.py          # Main XBlock class (RENAME THIS)
│   ├── static/                   # Bootstrap loaders (DON'T CHANGE)
│   │   ├── student.js            # ✅ jQuery unwrapping included
│   │   └── studio.js             # ✅ jQuery unwrapping included
│   └── public/                   # Build output (auto-generated)
│       ├── student-ui.js
│       ├── student-ui.css
│       ├── studio-ui.js
│       └── studio-ui.css
├── frontend/
│   ├── package.json              # ✅ React 17 + Paragon 22.x locked
│   ├── tsconfig.json             # ✅ TypeScript strict config
│   ├── vite.config.ts            # ✅ process.env.NODE_ENV defined
│   └── src/
│       ├── common/               # Shared utilities (DON'T CHANGE)
│       │   └── api.ts            # ✅ CSRF-protected fetch helper
│       ├── student-ui/           # Student view (CUSTOMIZE)
│       │   ├── index.tsx         # ✅ Minimal React render (matches xblock-accordion)
│       │   ├── StudentView.tsx   # Your component (CUSTOMIZE)
│       │   └── styles/
│       │       └── minimal-paragon.scss
│       └── studio-ui/            # Studio editor (CUSTOMIZE)
│           ├── index.tsx         # ✅ Minimal React render with runtime for save
│           ├── StudioView.tsx    # Your component (CUSTOMIZE)
│           └── styles/
│               └── minimal-paragon.scss
├── deploy-dev.sh                 # Deployment script (UPDATE paths)
└── .gitignore
```

## 🏗️ What's Architectural vs Implementation

### ✅ ARCHITECTURAL (DON'T CHANGE - Template Pattern)

These solve fundamental React XBlock challenges:

1. **Bootstrap loaders** (`{xblock_name}/static/*.js`)
   - jQuery unwrapping pattern
   - Error handling structure
   - *Only change function names during find-replace*

2. **Vite configuration** (`frontend/vite.config.ts`)
   - `process.env.NODE_ENV` definition (critical!)
   - Library mode setup
   - ES module format
   - *Only change XBlock name during find-replace*

3. **API helper** (`frontend/src/common/api.ts`)
   - CSRF token handling
   - Standard error handling
   - *Use as-is or extend*

4. **Package versions** (`frontend/package.json`)
   - React 17.0.2 (required for OpenEdX compatibility)
   - Paragon 22.5.1 (matches OpenEdX)
   - *Don't upgrade these*

5. **Entry points** (`frontend/src/*/index.tsx`)
   - Minimal React render structure (matches xblock-accordion)
   - ReactDOM.render() pattern (React 17)
   - Student view: no runtime parameter
   - Studio view: runtime parameter for save operations
   - *Keep structure, update component imports*

### ✏️ IMPLEMENTATION (CUSTOMIZE FOR YOUR XBLOCK)

These are unique to each XBlock:

1. **React Components** (`*View.tsx` files)
   - Your UI logic
   - State management
   - Event handlers
   - Customize completely

2. **Python XBlock Class** (`{xblock_name}/{xblock_name}.py`)
   - Fields and handlers
   - Business logic
   - Data validation
   - Add your XBlock's functionality

3. **Styles** (`frontend/src/*/styles/*.scss`)
   - Component-specific CSS
   - Custom layouts
   - Add your styling

4. **Tests** (you add these)
   - Unit tests for components
   - Integration tests for handlers
   - See Testing section below

## 🎨 Development Workflow

### Make Changes

1. Edit React components in `frontend/src/*/`
2. Edit Python logic in `{xblock_name}/{xblock_name}.py`

### Rebuild

```bash
cd frontend
npm run build
```

Or for faster development:

```bash
npm run build:student  # Only rebuild student view
npm run build:studio   # Only rebuild studio view
```

### Deploy

```bash
./deploy-dev.sh
```

### Test in Browser

1. Refresh Studio page
2. Changes should be visible immediately

## 🧪 Adding Tests

### Frontend Tests

1. Install testing dependencies (already in package.json):
```bash
cd frontend
npm install
```

2. Create test files next to components:
```
frontend/src/student-ui/
├── StudentView.tsx
└── StudentView.test.tsx  ← Add this
```

3. Run tests:
```bash
npm test
```

### Python Tests

Add tests in:
```
tests/
├── __init__.py
└── test_{xblock_name}.py
```

## 🔒 Security Best Practices

The template includes:

✅ **CSRF protection** - Use `xblockPost()` helper for all POST requests
✅ **TypeScript** - Catch type errors at compile time

**You must add** (if handling user HTML):

- **XSS protection**: Install and use DOMPurify if rendering HTML
- **Input validation**: Validate all user inputs in Python handlers
- **Sanitization**: Use `bleach` on backend for rich text

Example:
```bash
cd frontend && npm install dompurify @types/dompurify
```

```typescript
import DOMPurify from 'dompurify';

<div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(userContent) }} />
```

## 📚 Key Concepts

### Bootstrap Loader Pattern

The `static/*.js` files are small, cached files that dynamically load versioned React bundles:

```
Browser Cache: student.js (never changes)
              ↓ dynamically loads
Fresh Bundle: student-ui.js?v=abc123 (changes with each build)
```

This allows cache busting without clearing browser cache.

### Why React 17 (not 18)?

OpenEdX currently uses React 16.14.0. React 17 is compatible with React 16, but React 18 is not. Using React 17 ensures your XBlock works with OpenEdX's global React instance.

### Why Paragon 22.x (not 23+)?

Paragon 23+ requires React 18. We use Paragon 22.x to match OpenEdX's version and ensure compatibility.

## 🎨 Using Paragon Icons

Paragon Icons work perfectly with this minimal architecture. No IntlProvider or special wrappers needed.

### Direct Icon Usage

Use deep imports for better tree-shaking (smaller bundles):

```typescript
// ✅ CORRECT - Deep imports for optimal bundle size
import Icon from '@openedx/paragon/dist/Icon';
import KeyboardArrowDown from '@openedx/paragon/icons/es5/KeyboardArrowDown';
import KeyboardArrowUp from '@openedx/paragon/icons/es5/KeyboardArrowUp';

<Icon src={KeyboardArrowDown} />
<Icon src={KeyboardArrowUp} />
```

### Icons with Button Component

When using icons with Button's `iconBefore` or `iconAfter` props, pass the component reference directly:

```typescript
// ✅ CORRECT - Deep imports + direct reference
import Button from '@openedx/paragon/dist/Button';
import Icon from '@openedx/paragon/dist/Icon';
import ChevronLeft from '@openedx/paragon/icons/es5/ChevronLeft';
import ChevronRight from '@openedx/paragon/icons/es5/ChevronRight';

<Button iconBefore={ChevronLeft}>Previous</Button>
<Button iconAfter={ChevronRight}>Next</Button>

// ❌ WRONG - Don't wrap in Icon component (creates object, causes React #130 error)
<Button iconBefore={<Icon src={ChevronLeft} />}>Previous</Button>
```

### Import Pattern

**Always use deep imports** from `/dist/` for components and `/icons/es5/` for icons:

```typescript
// ✅ CORRECT - Deep imports (matches xblock-accordion pattern)
import Button from '@openedx/paragon/dist/Button';
import Icon from '@openedx/paragon/dist/Icon';
import ChevronLeft from '@openedx/paragon/icons/es5/ChevronLeft';
import Check from '@openedx/paragon/icons/es5/Check';

// ❌ AVOID - Barrel imports (larger bundles)
import { Button, Icon } from '@openedx/paragon';
import { ChevronLeft, Check } from '@openedx/paragon/icons';

// Available icons: https://paragon-openedx.netlify.app/?path=/docs/foundations-icons--page
```

### Why This Works

The xblock-accordion reference implementation (github.com/open-edx/xblock-accordion) proves that Paragon Icons work perfectly without:
- IntlProvider wrapper
- ErrorBoundary wrapper
- Special configuration

This template follows the same minimal pattern for maximum reliability.

## 🐛 Troubleshooting

### "process is not defined" Error

✅ **Fixed in template** - `vite.config.ts` includes:
```typescript
define: {'process.env.NODE_ENV': '"production"'},
```

### React Error #200: "Target container is not a DOM element"

✅ **Fixed in template** - Bootstrap loaders include:
```javascript
const domElement = element.get ? element.get(0) : element;
```

### Paragon styles not loading

Check that:
1. `minimal-paragon.scss` is imported in your component
2. Build completed successfully: `npm run build`
3. CSS files exist in `{xblock_name}/public/`

### XBlock not appearing in Studio

1. Check Advanced Module List includes your XBlock name
2. Restart CMS container: `docker restart tutor_dev-cms-1`
3. Check logs: `docker logs tutor_dev-cms-1 | grep {xblock_name}`

## 📖 Further Reading

- [Modern React XBlock Development Guide](../docs/MODERN_REACT_XBLOCK_GUIDE.md)
- [XBlock Development Guide](../docs/XBLOCK_DEVELOPMENT_GUIDE.md)
- [Paragon Documentation](https://paragon-openedx.netlify.app/)
- [XBlock API Reference](https://edx.readthedocs.io/projects/xblock/en/latest/)

## 🤝 Contributing

When improving this template:

1. Test with a fresh copy
2. Ensure all placeholders work with find-replace
3. Document any new architectural patterns
4. Update this README

## ✅ Checklist After Using Template

- [ ] Replaced all placeholders (`{XBLOCK_NAME}`, `{xblock_name}`, etc.)
- [ ] Renamed `{xblock_name}` directory
- [ ] Renamed `{xblock_name}.py` file
- [ ] Updated `deploy-dev.sh` with correct paths
- [ ] Ran `npm install` in `frontend/`
- [ ] Ran `npm run build` successfully
- [ ] Tested deployment with `./deploy-dev.sh`
- [ ] Added to Advanced Module List in Studio
- [ ] Verified XBlock loads in Studio
- [ ] Verified XBlock displays in LMS

---

**Template Version**: 1.0.0
**Last Updated**: October 18, 2025
**Based on**: text-card-xblock and xblock-accordion implementations
