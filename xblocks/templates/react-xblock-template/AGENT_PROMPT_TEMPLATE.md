# Agent Prompt Template for React XBlock Implementation

Copy this prompt and add your XBlock specification at the end. Give it to an AI agent to implement a new XBlock using the react-xblock-template.

---

## YOUR TASK: Implement a React XBlock Using the Template

You are implementing a new OpenEdX XBlock using the **react-xblock-template**. This template has already solved all architectural issues - your job is to implement the specific XBlock functionality.

### 📍 Template Location
```
/Users/brainjam/liverpool-dental-learning-hub/brainjam-openedx-xblocks/react-xblock-template/
```

### 🎯 Your Implementation Process

Follow these steps **in order**:

#### Step 0: MANDATORY VERIFICATION - Confirm You've Read the Documentation

**🛑 STOP! Before proceeding, you MUST:**

1. **Read `/Users/brainjam/liverpool-dental-learning-hub/brainjam-openedx-xblocks/react-xblock-template/PARAGON_PATTERNS.md`**
   - Use the Read tool to read this file completely
   - This is CRITICAL and non-negotiable
   - Contains patterns that WILL break your build if ignored

2. **Read `/Users/brainjam/liverpool-dental-learning-hub/brainjam-openedx-xblocks/react-xblock-template/README.md`**
   - Use the Read tool to read the ARCHITECTURAL vs IMPLEMENTATION section
   - Understand what you can and cannot change

**After reading both files, respond with:**
```
✅ I have read PARAGON_PATTERNS.md completely
✅ I have read README.md completely
✅ I understand the correct Paragon import patterns
✅ I understand what is ARCHITECTURAL (don't change) vs IMPLEMENTATION (customize)
```

**If you proceed without reading these files, your implementation WILL fail.**

---

#### Step 1: Confirm Key Patterns You Just Learned

To verify you read PARAGON_PATTERNS.md, answer these questions:

1. **What is the correct way to import a Paragon Button component?**
   - Your answer: _____

2. **What prefix is required for SCSS imports from Paragon?**
   - Your answer: _____

3. **Should you ever remove the Paragon SCSS imports from the template?**
   - Your answer: _____

**Expected answers:**
1. `import Button from '@openedx/paragon/dist/Button';`
2. The `~` prefix (tilde)
3. **NO - NEVER remove Paragon SCSS imports**

---

#### Step 2: Understand ARCHITECTURAL vs IMPLEMENTATION

The template uses two types of comments throughout:

```python
# ARCHITECTURAL: jQuery unwrapping pattern
# DON'T CHANGE: This is required for React integration
```
**Meaning**: This is part of the React XBlock pattern. Leave it exactly as-is.

```python
# IMPLEMENTATION: Define your XBlock's fields
# CUSTOMIZE: Add the fields your XBlock needs
```
**Meaning**: This is where you add your XBlock-specific logic.

**RULE**: Never change ARCHITECTURAL sections. Only modify IMPLEMENTATION sections.

---

#### Step 3: Copy Template to New Directory

```bash
cd /Users/brainjam/liverpool-dental-learning-hub/brainjam-openedx-xblocks/
cp -r react-xblock-template/ {xblock-name}/
cd {xblock-name}
```

Replace `{xblock-name}` with your XBlock's kebab-case name (e.g., `text-card-xblock`).

---

#### Step 4: Find-Replace Template Placeholders

The template uses placeholders that need to be replaced. Here's the exact pattern:

| Placeholder | Replace With | Example |
|-------------|--------------|---------|
| `{XBlockName}` | PascalCase name | `TextCard` |
| `{xblock_name}` | snake_case name | `text_card` |
| `{xblock-name}` | kebab-case name | `text-card-xblock` |

**Files to update**:
- [ ] `{xblock_name}/{xblock_name}.py` → Rename file and update placeholders
- [ ] `{xblock_name}/static/student.js` → Update function names
- [ ] `{xblock_name}/static/studio.js` → Update function names
- [ ] `frontend/package.json` → Update name field
- [ ] `frontend/vite.config.ts` → Update libName and outDir
- [ ] `frontend/src/student-ui/*` → Update component names
- [ ] `frontend/src/studio-ui/*` → Update component names
- [ ] `deploy-dev.sh` → Update XBLOCK_DIR and XBLOCK_NAME
- [ ] `setup.py` → Update all metadata

**Use find-replace in your editor** - don't manually update each file.

---

#### Step 5: Install Dependencies

```bash
cd frontend
npm install
```

**IMPORTANT**: Do NOT modify `package.json` dependencies unless absolutely necessary. The versions are locked for compatibility:
- React 17.0.2 (matches OpenEdX)
- Paragon 22.5.1 (compatible version)

---

#### Step 6: Implement Your XBlock Features

Now implement the XBlock specification (provided below). Follow these guidelines:

##### A. Python XBlock Class (`{xblock_name}/{xblock_name}.py`)

**Add your fields** in the IMPLEMENTATION section:
```python
class MyXBlock(XBlock):
    # IMPLEMENTATION: Define your XBlock's fields
    my_field = String(
        display_name="My Field",
        default="default value",
        scope=Scope.content,
        help="Field description"
    )
```

**Add handler methods** for API endpoints:
```python
@XBlock.json_handler
def save_data(self, data, suffix=''):
    """
    IMPLEMENTATION: Handle save requests from studio editor
    """
    self.my_field = data.get('my_field', '')
    return {'success': True}
```

**DO NOT CHANGE**:
- `resource_string()` helper method
- Bootstrap loader loading pattern
- `initialize_js()` structure

##### B. React Components

**Student View** (`frontend/src/student-ui/StudentView.tsx`):
- Implement the student-facing UI
- Use Paragon components following PARAGON_PATTERNS.md
- Keep components focused and simple

**Studio View** (`frontend/src/studio-ui/StudioView.tsx`):
- Implement the editor interface
- Use `xblockPost()` helper for saving data
- Include validation and error handling

**CRITICAL - Paragon Imports**:
```typescript
// ✅ CORRECT - Use this pattern ALWAYS
import Button from '@openedx/paragon/dist/Button';
import Card from '@openedx/paragon/dist/Card';
import Form from '@openedx/paragon/dist/Form';

// ❌ WRONG - This will break your build
import { Button, Card } from '@openedx/paragon';  // NO!
```

**CRITICAL - CSS Imports**:
```typescript
// ❌ WRONG - Don't do this
import '@openedx/paragon/dist/paragon.css';  // NO!

// ✅ CORRECT - Use SCSS
import './styles/main.scss';  // YES!
```

**CRITICAL - SCSS Files**:
```scss
// ✅ CORRECT - Tilde prefix is required
@import '~@openedx/paragon/scss/core/core';
@import '~@openedx/paragon/src/Button/index.scss';
@import '~@openedx/paragon/src/Form/index.scss';
@import '~@openedx/paragon/src/Alert/index.scss';
// Import SCSS for each Paragon component you use

// ❌ WRONG - No tilde will fail
@import '@openedx/paragon/scss/core/core';  // NO!
```

**🚨 CRITICAL WARNING - DO NOT REMOVE SCSS IMPORTS**:
- **NEVER** remove the Paragon SCSS imports from `minimal-paragon.scss` files
- **NEVER** replace them with inline styles or styled-jsx
- Paragon components **REQUIRE** their SCSS to style correctly
- If you get SCSS import errors, **FIX THE PATH** - don't remove the imports
- Empty CSS files (0 bytes) after build means you removed the imports - **this is wrong**

**If you encounter SCSS import errors**:
1. ✅ Check the tilde `~` prefix is present
2. ✅ Verify the path matches the Paragon package structure
3. ✅ Check `vite.config.ts` has the `~` alias configured
4. ❌ DO NOT remove the imports as a "fix"
5. ❌ DO NOT use inline styles or styled-jsx instead

**CRITICAL - Icon Component Usage**:

Paragon's Icon component has a specific usage pattern:

```typescript
// ✅ CORRECT - Import icon components from /icons/es5/
import Icon from '@openedx/paragon/dist/Icon';
import Edit from '@openedx/paragon/icons/es5/Edit';
import Delete from '@openedx/paragon/icons/es5/Delete';
import Add from '@openedx/paragon/icons/es5/Add';

// ✅ CORRECT - Use src={IconComponent}
<Icon src={Edit} />
<Icon src={Delete} />

// ❌ WRONG - Don't use icon="string" (requires IntlProvider config)
<Icon icon="edit" />  // NO!
<Icon icon="delete" />  // NO!
```

**Why**: The `icon="string"` API requires additional IntlProvider configuration. The `src={IconComponent}` API works with the template's IntlProvider setup.

**Finding icon names**: Check `node_modules/@openedx/paragon/icons/es5/` for available icons.

**CRITICAL - IntlProvider Wrapper**:

The template includes `<IntlProvider locale="en">` wrapper in both `index.tsx` files. This is **ARCHITECTURAL** and required:

```typescript
// ✅ CORRECT - Template structure (DON'T CHANGE)
<IntlProvider locale="en">
  <ErrorBoundary>
    <YourComponent />
  </ErrorBoundary>
</IntlProvider>

// ❌ WRONG - Don't remove IntlProvider
<ErrorBoundary>
  <YourComponent />
</ErrorBoundary>
```

**Why**: Paragon components (Button, Icon, Form, Alert, etc.) require react-intl context. Without IntlProvider, you'll get:
```
Error: [React Intl] Could not find required `intl` object
```

##### C. TypeScript Types

Define proper types for your data:
```typescript
interface MyXBlockData {
  runtime: XBlockRuntime;
  myField: string;
}

interface MyXBlockFields {
  my_field: string;
}
```

---

#### Step 7: Build the XBlock

```bash
cd frontend
npm run build
```

This builds both student-ui and studio-ui bundles to `{xblock_name}/public/`.

**Expected output**:
```
✓ built in 2.5s
{xblock_name}/public/student-ui.js
{xblock_name}/public/studio-ui.js
{xblock_name}/public/student-ui.css (if you have styles)
```

**Common build errors and fixes**:

1. **"Module not found: @openedx/paragon"**
   → You used wrong import pattern. Check PARAGON_PATTERNS.md
   → Fix: Use `import Button from '@openedx/paragon/dist/Button';`

2. **"process is not defined"**
   → Don't change vite.config.ts `define` section
   → The template has this configured correctly - leave it alone

3. **"Can't find stylesheet to import"** or **"expected '{'"**
   → Missing `~` prefix in SCSS imports
   → Fix: Add `~` before `@openedx` in all SCSS imports
   → Example: `@import '~@openedx/paragon/scss/core/core';`
   → **DO NOT** remove the imports as a solution!

4. **Empty CSS files (0 bytes) generated**
   → You removed the Paragon SCSS imports
   → Fix: Restore the imports from the template
   → Your components WILL look broken without proper styles

---

#### Step 8: Test Deployment

```bash
# Update deploy-dev.sh with your paths
./deploy-dev.sh
```

Wait ~60 seconds for containers to restart, then test in Studio.

---

### 🚨 Common Mistakes to Avoid

Based on previous implementations, these mistakes WILL break your XBlock:

1. **❌ Using named exports from Paragon**
   ```typescript
   import { Accordion } from '@openedx/paragon';  // BREAKS!
   ```
   **Fix**: `import Accordion from '@openedx/paragon/dist/Accordion';`

2. **❌ Removing tilde from SCSS imports**
   ```scss
   @import '@openedx/paragon/scss/core/core';  // BREAKS!
   ```
   **Fix**: `@import '~@openedx/paragon/scss/core/core';`

3. **❌ Removing Paragon SCSS imports entirely** 🚨 **MOST COMMON MISTAKE**
   ```scss
   // Empty - all styles are inline in the component  // WRONG! WRONG! WRONG!
   ```
   **This will cause**:
   - Empty CSS files (0 bytes)
   - Unstyled Paragon components
   - Broken layout in OpenEdX

   **Fix**: Keep the imports from template:
   ```scss
   @import '~@openedx/paragon/scss/core/core';
   @import '~@openedx/paragon/src/Button/index.scss';
   // etc.
   ```

4. **❌ Using Icon with icon="string" instead of src={Component}**
   ```typescript
   <Icon icon="edit" />  // BREAKS! Requires extra IntlProvider config
   ```
   **Fix**: Import and use icon components:
   ```typescript
   import Edit from '@openedx/paragon/icons/es5/Edit';
   <Icon src={Edit} />  // CORRECT
   ```

5. **❌ Removing IntlProvider wrapper**
   ```typescript
   // Don't remove IntlProvider from index.tsx!
   <ErrorBoundary>...</ErrorBoundary>  // BREAKS!
   ```
   **Fix**: Keep the IntlProvider wrapper from template:
   ```typescript
   <IntlProvider locale="en">
     <ErrorBoundary>...</ErrorBoundary>
   </IntlProvider>
   ```

6. **❌ Importing Paragon CSS directly**
   ```typescript
   import '@openedx/paragon/dist/paragon.css';  // BREAKS!
   ```
   **Fix**: Use SCSS imports instead

7. **❌ Changing ARCHITECTURAL sections**
   - Don't modify bootstrap loaders
   - Don't change vite.config.ts structure
   - Don't remove ErrorBoundary or IntlProvider wrappers

8. **❌ Not reading PARAGON_PATTERNS.md first**
   - This is the #1 cause of build failures
   - Read it completely before starting
   - If you skip this step, you WILL make mistakes

---

### ✅ Implementation Checklist

Before you say you're done, verify:

- [ ] Read PARAGON_PATTERNS.md completely (Step 0)
- [ ] Read README.md sections on ARCHITECTURAL vs IMPLEMENTATION (Step 0)
- [ ] Answered the verification questions correctly (Step 1)
- [ ] All placeholders replaced ({XBlockName}, {xblock_name}, {xblock-name})
- [ ] All Paragon component imports use `/dist/Component` pattern
- [ ] All Icon imports use `/icons/es5/IconName` pattern (if using Icon component)
- [ ] All `<Icon>` usages use `src={IconComponent}`, NOT `icon="string"`
- [ ] IntlProvider wrapper is STILL in both index.tsx files (not removed)
- [ ] All SCSS imports have `~` prefix
- [ ] Paragon SCSS imports are STILL IN THE FILES (not removed)
- [ ] No direct CSS imports from Paragon
- [ ] `npm run build` completes successfully
- [ ] Both student-ui.js and studio-ui.js generated
- [ ] **CSS files are NOT empty (should have content, not 0 bytes)**
- [ ] No ARCHITECTURAL sections modified (bootstrap loaders, IntlProvider, ErrorBoundary)
- [ ] Python XBlock class has proper fields and handlers
- [ ] Studio editor can save data
- [ ] Student view displays correctly

**Final verification command:**
```bash
ls -lh flash_cards/public/
```
If you see `0B` for CSS files, you removed the SCSS imports - **go back and fix it**.

---

### 📚 Reference Files in Template

- `PARAGON_PATTERNS.md` - **CRITICAL**: Correct Paragon usage patterns
- `README.md` - Template usage guide
- `.gitignore` - Standard exclusions (don't commit node_modules or public/)
- `deploy-dev.sh` - Deployment script template
- `frontend/vite.config.ts` - Build configuration (ARCHITECTURAL)
- `frontend/package.json` - Dependencies (locked versions)
- `frontend/src/common/ErrorBoundary.tsx` - Error isolation (ARCHITECTURAL)
- `frontend/src/common/api.ts` - CSRF helpers (ARCHITECTURAL)

---

### 🔍 When You're Stuck

1. **Build failing?**
   → Re-read PARAGON_PATTERNS.md, verify import patterns

2. **React not rendering?**
   → Check browser console, likely jQuery unwrapping issue (don't change bootstrap loaders)

3. **Save not working?**
   → Use `xblockPost()` helper from `common/api.ts`

4. **Styles not applying?**
   → Check SCSS imports have `~` prefix

---

## XBlock Specification

[PASTE YOUR XBLOCK SPECIFICATION HERE]

### Example Format:

**Name**: Text Card XBlock

**Purpose**: Display formatted text content in a card layout

**Student View Requirements**:
- Display title from XBlock field
- Display body text from XBlock field
- Use Paragon Card component
- Responsive design

**Studio View Requirements**:
- Text input for title
- Textarea for body content
- Save button that persists to XBlock
- Cancel button that reverts changes
- Validation: title required

**XBlock Fields**:
- `display_name` (String, Scope.settings) - Card title
- `body_text` (String, Scope.content) - Card body content

**Paragon Components to Use**:
- Card (for layout)
- Form (for editor)
- Button (for save/cancel)
- Alert (for success/error messages)

---

**Now implement the XBlock following the steps above. Report any issues or questions as you go.**
