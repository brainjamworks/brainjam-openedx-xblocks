# Paragon Usage Patterns - DO NOT DEVIATE

## ✅ CORRECT Patterns (Used in Production XBlocks)

### TypeScript/TSX Imports

```typescript
// ✅ CORRECT - Individual component imports
import Card from '@openedx/paragon/dist/Card';
import Button from '@openedx/paragon/dist/Button';
import Form from '@openedx/paragon/dist/Form';
import Alert from '@openedx/paragon/dist/Alert';

// ❌ WRONG - Named exports (doesn't work!)
import { Card, Button } from '@openedx/paragon';  // FAILS!
```

**Why**: Paragon's build structure requires the `/dist/Component` path. The package doesn't expose named exports at the root level.

### SCSS Imports

```scss
// ✅ CORRECT - Tilde prefix for node_modules resolution
@import '~@openedx/paragon/scss/core/core';
@import '~@openedx/paragon/src/Button/index.scss';

// ❌ WRONG - Without tilde
@import '@openedx/paragon/scss/core/core';  // FAILS!
```

**Why**: The `~` tells Sass to resolve from `node_modules`. This is configured in `vite.config.ts`:

```typescript
resolve: {
  alias: {
    '~': resolve(__dirname, 'node_modules'),
  },
},
```

### CSS Imports

```typescript
// ❌ WRONG - Don't do this!
import '@openedx/paragon/dist/paragon.css';  // NO!

// ✅ CORRECT - Use SCSS imports instead
import './styles/minimal-paragon.scss';  // YES!
```

**Why**: We handle Paragon styles through SCSS for better control and smaller bundles.

---

## 📚 Real Examples from Working XBlocks

### text-card-xblock (Verified Working)

```typescript
// frontend/src/studio-ui/StudioView.tsx
import Button from '@openedx/paragon/dist/Button';
import Form from '@openedx/paragon/dist/Form';
import Alert from '@openedx/paragon/dist/Alert';
```

### xblock-accordion (Verified Working)

```typescript
// frontend/src/student-ui/student-ui.tsx
import Button from '@openedx/paragon/dist/Button';
import Icon from '@openedx/paragon/dist/Icon';
import CollapsibleAdvanced from '@openedx/paragon/dist/Collapsible/CollapsibleAdvanced';
```

```scss
// frontend/src/student-ui/style.scss
@import "~@openedx/paragon/scss/core/_functions.scss";
@import "~@openedx/paragon/scss/core/_variables.scss";
@import "~@openedx/paragon/src/Button/index.scss";
```

---

## 🚨 Common Mistakes to Avoid

### Mistake #1: Using Named Exports
```typescript
// ❌ This will cause build errors!
import { Accordion } from '@openedx/paragon';
```

**Error you'll see**:
```
Module not found: Error: Can't resolve '@openedx/paragon'
```

**Fix**:
```typescript
// ✅ Use this instead
import Accordion from '@openedx/paragon/dist/Accordion';
```

### Mistake #2: Removing Tilde from SCSS
```scss
// ❌ This will cause SCSS compilation errors!
@import '@openedx/paragon/scss/core/core';
```

**Error you'll see**:
```
Can't find stylesheet to import
```

**Fix**:
```scss
// ✅ Keep the tilde!
@import '~@openedx/paragon/scss/core/core';
```

### Mistake #3: Importing Paragon CSS Directly
```typescript
// ❌ This causes style conflicts and bloat!
import '@openedx/paragon/dist/paragon.css';
```

**Problems**:
- Imports ALL Paragon styles (huge bundle)
- Conflicts with OpenEdX platform styles
- Can't customize or tree-shake

**Fix**:
```typescript
// ✅ Use SCSS imports instead
import './styles/minimal-paragon.scss';
```

Then in your SCSS file, import only what you need:
```scss
@import '~@openedx/paragon/scss/core/core';
@import '~@openedx/paragon/src/Button/index.scss';
@import '~@openedx/paragon/src/Form/index.scss';
// Only import components you actually use!
```

---

## 🔍 How to Find the Correct Import Path

1. **For Components**: Look in `node_modules/@openedx/paragon/dist/`
   ```bash
   ls node_modules/@openedx/paragon/dist/
   # Output: Accordion.js, Alert.js, Button.js, Card.js, ...
   ```

2. **For SCSS**: Look in `node_modules/@openedx/paragon/src/` or `scss/`
   ```bash
   ls node_modules/@openedx/paragon/src/Button/
   # Output: index.scss, Button.tsx, ...
   ```

3. **Pattern**:
   - Component: `import ComponentName from '@openedx/paragon/dist/ComponentName';`
   - SCSS: `@import '~@openedx/paragon/src/ComponentName/index.scss';`

---

## ✅ Template Verification Checklist

Before building, verify these patterns in your code:

- [ ] All Paragon components use `/dist/Component` imports
- [ ] NO `import { Component } from '@openedx/paragon'` patterns
- [ ] SCSS imports use `~` prefix
- [ ] NO direct CSS imports from Paragon
- [ ] Vite config has `~` alias configured
- [ ] Only import Paragon components you actually use

---

## 🎯 Quick Reference

| What | Correct Pattern | Wrong Pattern |
|------|----------------|---------------|
| Component import | `import Button from '@openedx/paragon/dist/Button';` | `import { Button } from '@openedx/paragon';` |
| SCSS import | `@import '~@openedx/paragon/scss/core/core';` | `@import '@openedx/paragon/scss/core/core';` |
| Styles | `import './styles/minimal-paragon.scss';` | `import '@openedx/paragon/dist/paragon.css';` |
| Vite alias | `'~': resolve(__dirname, 'node_modules')` | No alias configured |

---

## 📖 Why These Patterns?

### Historical Context
Paragon was built for OpenEdX's specific build system (Webpack-based). The package structure reflects this:
- Individual component bundles in `/dist/`
- SCSS source files in `/src/` and `/scss/`
- No ES6 module exports at package root

### Compatibility
- OpenEdX uses React 16.14.0
- Paragon 22.x is designed for this environment
- These import patterns ensure compatibility

### Performance
- Importing from `/dist/` allows tree-shaking
- SCSS imports let you cherry-pick only needed styles
- Keeps bundle sizes minimal

---

## 🔧 If You're Still Having Issues

1. **Clear your build cache**:
   ```bash
   rm -rf ../xblock_name/public/*
   rm -rf node_modules/.vite
   ```

2. **Verify Paragon version**:
   ```bash
   npm list @openedx/paragon
   # Should show: @openedx/paragon@22.5.1
   ```

3. **Check vite.config.ts has the define**:
   ```typescript
   define: {'process.env.NODE_ENV': '"production"'},
   ```

4. **Ensure Node modules are installed**:
   ```bash
   npm install
   ```

5. **Build fresh**:
   ```bash
   npm run build:student
   npm run build:studio
   ```

---

**Last Updated**: October 18, 2025
**Verified Against**: xblock-accordion, text-card-xblock
**Paragon Version**: 22.5.1
**React Version**: 17.0.2
