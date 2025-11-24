# Content Templates to Component Library Migration Guide

## Overview
This guide documents the systematic migration from content-templates CSS classes to inline-styled component library patterns. The goal is to remove dependencies on `.content-*` classes while maintaining visual consistency with Liverpool brand colors.

## Core Principles

### 1. Liverpool Brand Colors (Always Use These)
```css
Liverpool Blue: #212b58
Liverpool Teal: #00A689
Liverpool Pink: #EF426F
Liverpool Yellow: #FFD100
Liverpool Sky Blue: #009CDD

Neutral Colors:
- Dark text: #333F48
- Gray text: #8d9695
- Border: #DBDBD3
- Light background: #F8F9FA
```

### 2. Component Library vs Content Templates

**Key Difference**: Component library uses **inline styles only**, no CSS classes except for special cases like counters.

**Verified Pattern**: When in doubt, check the component library at:
`/Users/brainjam/brainjam-openedx-xblocks/shared-styles/component-library.html`

### 3. Typography Standards
```css
H3 Heading: font-size: 1.75rem; color: #212b58; font-weight: 600;
H4 Heading: font-size: 1.25rem; color: #212b58; font-weight: 700;
H5 Heading: font-size: 1rem; color: #212b58; font-weight: 700;
Body text: font-size: 0.9rem; color: #333F48; line-height: 1.6;
Small text: font-size: 0.875rem; color: #333F48;
```

---

## Component Migration Patterns

### 1. Three Column Image Grid (Square Images)

**Old (Content Templates):**
```html
<div class="content-card-grid">
  <div class="content-card">
    <img src="image1.jpg" alt="" />
  </div>
  <div class="content-card">
    <img src="image2.jpg" alt="" />
  </div>
  <div class="content-card">
    <img src="image3.jpg" alt="" />
  </div>
</div>
```

**New (Component Library):**
```html
<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1.5rem;">
  <div style="border: 1px solid #DBDBD3; border-radius: 12px; overflow: hidden; background: white; box-shadow: 0 4px 8px rgba(0,0,0,0.12);">
    <img src="image1.jpg" alt="" style="width: 100%; aspect-ratio: 1 / 1; object-fit: cover; display: block;">
  </div>
  <div style="border: 1px solid #DBDBD3; border-radius: 12px; overflow: hidden; background: white; box-shadow: 0 4px 8px rgba(0,0,0,0.12);">
    <img src="image2.jpg" alt="" style="width: 100%; aspect-ratio: 1 / 1; object-fit: cover; display: block;">
  </div>
  <div style="border: 1px solid #DBDBD3; border-radius: 12px; overflow: hidden; background: white; box-shadow: 0 4px 8px rgba(0,0,0,0.12);">
    <img src="image3.jpg" alt="" style="width: 100%; aspect-ratio: 1 / 1; object-fit: cover; display: block;">
  </div>
</div>
```

**Key Points:**
- ✅ `aspect-ratio: 1 / 1` forces square shape
- ✅ `object-fit: cover` crops image to fill
- ✅ Responsive grid adapts to screen size

---

### 2. Step-by-Step Procedure (Numbered List)

**Old (Content Templates):**
```html
<div class="content-procedure">
  <div class="procedure-step">
    <div class="procedure-number"></div>
    <div class="procedure-content">
      <h5>Step Title</h5>
      <p>Instructions...</p>
    </div>
  </div>
</div>
```

**New (Component Library):**
```html
<div style="margin: 2rem 0; counter-reset: procedure-counter;">
  <div style="display: flex; gap: 1.5rem; margin-bottom: 1.5rem; padding-bottom: 1.5rem; border-bottom: 1px solid #DBDBD3;">
    <div style="flex-shrink: 0; counter-increment: procedure-counter; width: 40px; height: 40px; background: #212b58; color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 1rem;">
      <span style="display: block;">1</span>
    </div>
    <div style="flex: 1;">
      <h5 style="margin: 0 0 0.5rem 0; color: #212b58; font-size: 1rem; font-weight: 700;">Step Title</h5>
      <p style="margin: 0; color: #333F48; font-size: 0.9rem; line-height: 1.6;">Instructions...</p>
    </div>
  </div>
</div>
```

**Key Points:**
- ⚠️ CSS counters can't be replicated with inline styles - use manual numbering (1, 2, 3)
- ✅ Last item has no `border-bottom`
- ✅ Liverpool Blue circles with white text

---

### 3. Evidence Summary Box

**Old (Content Templates):**
```html
<div class="content-evidence">
  <div class="evidence-header">
    <div class="evidence-icon">📚</div>
    <div class="evidence-citation">Citation text...</div>
  </div>
  <div class="evidence-label">Key Findings</div>
  <ul class="evidence-findings">
    <li>Finding 1</li>
    <li>Finding 2</li>
  </ul>
</div>
```

**New (Component Library):**
```html
<div style="border: 1px solid #DBDBD3; border-top: 4px solid #212b58; border-radius: 16px; padding: 1.5rem; margin: 1rem 0; background: #FFFFFF; box-shadow: 0 4px 8px rgba(0,0,0,0.12);">
  <div style="color: #8d9695; font-size: 0.875rem; font-weight: 600; margin-bottom: 0.5rem; text-transform: uppercase;">📚 Evidence Summary</div>
  <p style="margin: 0 0 1rem 0; color: #8d9695; font-size: 0.875rem; font-style: italic; line-height: 1.5;">
    Citation text...
  </p>
  <div style="padding-left: 1rem; border-left: 3px solid #00A689;">
    <div style="color: #00A689; font-weight: 600; font-size: 0.875rem; margin-bottom: 0.5rem;">Key Findings:</div>
    <ul style="margin: 0; padding-left: 1.5rem; color: #333F48; line-height: 1.7;">
      <li style="margin-bottom: 0.5rem;">Finding 1</li>
      <li>Finding 2</li>
    </ul>
  </div>
</div>
```

**Key Points:**
- ✅ 4px Liverpool Blue top border (signature of evidence boxes)
- ✅ Teal left border and label for findings section
- ✅ Icon + "EVIDENCE SUMMARY" label at top
- ✅ Border radius: 16px (component library standard)

---

### 4. Info Callout Box

**Old (Content Templates):**
```html
<div class="content-callout callout-info">
  <div class="callout-icon">ℹ️</div>
  <div class="callout-content">
    <h5>Heading</h5>
    <p>Message...</p>
  </div>
</div>
```

**New (Component Library):**
```html
<div style="display: flex; gap: 1rem; padding: 1.25rem; background: rgba(33, 43, 88, 0.08); border-left: 4px solid #212b58; border-radius: 8px; margin: 1rem 0;">
  <div style="font-size: 1.5rem; flex-shrink: 0;">ℹ️</div>
  <div style="flex: 1;">
    <h5 style="margin: 0 0 0.5rem 0; color: #212b58; font-size: 1rem; font-weight: 700;">Heading</h5>
    <p style="margin: 0; color: #333F48; font-size: 0.9rem; line-height: 1.6;">Message...</p>
  </div>
</div>
```

**CRITICAL - Background Colors (Fixed in Component Library):**
```css
Info (Blue): rgba(33, 43, 88, 0.08)   /* Liverpool Blue at 8% opacity */
Warning (Orange): rgba(255, 152, 0, 0.08)
Success (Green): rgba(76, 175, 80, 0.08)
```

**Key Points:**
- ✅ Use `rgba()` with 8% opacity, NOT Material Design hex colors
- ✅ Border radius: 8px for callouts (not 16px)
- ✅ Icon is 1.5rem font-size

---

### 5. Media Object (Image + Text Side-by-Side)

**Old (Content Templates):**
```html
<div class="content-media-object">
  <div class="content-media-figure">
    <img src="image.jpg" alt="" />
  </div>
  <div class="content-media-body">
    <p>Text content...</p>
  </div>
</div>
```

**New (Component Library):**
```html
<div style="display: flex; gap: 1.5rem; align-items: flex-start; margin: 1rem 0;">
  <div style="width: 250px; flex-shrink: 0; overflow: hidden; border-radius: 16px; border: 1px solid #DBDBD3;">
    <img src="image.jpg" alt="" style="width: 100%; height: 100%; object-fit: cover; display: block;">
  </div>
  <div style="flex: 1;">
    <p style="margin: 0 0 1rem 0; color: #333F48; font-size: 0.9rem; line-height: 1.6;">Text content...</p>
  </div>
</div>
```

**Key Points:**
- ✅ Fixed width image container (250px)
- ✅ Rounded corners on image container (16px)
- ✅ `object-fit: cover` for image
- ✅ Text section uses `flex: 1` to fill remaining space

---

### 6. Treatment Timeline (Vertical with Cards)

**Old (Content Templates):**
```html
<div class="content-timeline">
  <div class="timeline-item">
    <div class="timeline-marker timeline-marker-complete"></div>
    <div class="timeline-content">
      <h5>Event Title</h5>
      <p>Description...</p>
    </div>
  </div>
</div>
```

**New (Component Library - FIXED):**
```html
<div style="position: relative; padding-left: 3rem; margin: 1rem 0;">
  <div style="position: absolute; left: 20px; top: 20px; bottom: 20px; width: 2px; background: #DBDBD3;"></div>

  <div style="position: relative; margin-bottom: 2rem;">
    <div style="position: absolute; left: -3rem; top: 50%; transform: translateY(-50%); width: 40px; height: 40px; background: #212b58; color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; box-shadow: 0 0 0 3px white;">✓</div>
    <div style="background: white; padding: 1rem; border: 1px solid #DBDBD3; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
      <h4 style="margin: 0 0 0.5rem 0; color: #212b58; font-size: 1.1rem; font-weight: 700;">Event Title</h4>
      <p style="margin: 0; color: #333F48; font-size: 0.875rem; line-height: 1.6;">Description...</p>
    </div>
  </div>
</div>
```

**CRITICAL - Circle Positioning (Fixed Issue):**
- ✅ `padding-left: 3rem` (was 2.5rem - not enough space)
- ✅ `left: -3rem` on circle (was -2.5rem)
- ✅ **`top: 50%; transform: translateY(-50%);`** - Centers circle vertically with card
- ✅ `box-shadow: 0 0 0 3px white;` - White ring around circle (simplified)

**Optional "COMPLETED" Badge:**
```html
<div style="color: #00A689; font-size: 0.75rem; font-weight: 600; margin-bottom: 0.25rem;">COMPLETED</div>
```

---

## Common Patterns & Best Practices

### Spacing
```css
Small gap: 1rem
Medium gap: 1.5rem
Large gap: 2rem
Section margin: 2rem 0
Card padding: 1rem
Callout padding: 1.25rem
```

### Borders & Shadows
```css
Standard border: 1px solid #DBDBD3
Accent border: 4px solid [Liverpool color]
Border radius (cards): 16px
Border radius (callouts): 8px
Card shadow: 0 4px 8px rgba(0,0,0,0.12)
Subtle shadow: 0 2px 4px rgba(0,0,0,0.1)
```

### Responsive Grid
```css
/* Always use this for multi-column layouts */
display: grid;
grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
gap: 1.5rem;
```

---

## Migration Checklist

For each content block, verify:

- [ ] All `.content-*` classes removed
- [ ] All inline styles use Liverpool brand colors (not Material Design colors)
- [ ] Typography matches component library standards
- [ ] Spacing/margins use consistent values (1rem, 1.5rem, 2rem)
- [ ] Border radius is correct (8px callouts, 16px cards)
- [ ] Images have proper `object-fit` if needed
- [ ] Timeline circles are vertically centered with cards
- [ ] No hardcoded font families (except for inline code: 'Courier New')

---

## Quick Reference: Content Templates → Component Library

| Content Template Class | Component Library Pattern |
|------------------------|---------------------------|
| `.content-card-grid` | `display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));` |
| `.content-procedure` | Numbered circles with manual numbers (1, 2, 3) |
| `.content-evidence` | Border-top accent + teal findings section |
| `.content-callout` | Flexbox with icon, rgba background |
| `.content-media-object` | Flexbox with 250px fixed-width image |
| `.content-timeline` | Absolute positioned circles with `top: 50%` centering |

---

## Debugging Tips

### Timeline circles not centered?
- Check: `top: 50%; transform: translateY(-50%);` on circle
- Check: `padding-left: 3rem;` on container (not 2.5rem)

### Images not cropping correctly?
- Check: `aspect-ratio: 1 / 1; object-fit: cover;` on `<img>`

### Wrong background color on callout?
- Check: Using `rgba(33, 43, 88, 0.08)` NOT `#E3F2FD`

### Border radius inconsistent?
- Cards: 16px
- Callouts: 8px
- Buttons/badges: 4px-6px

---

## Testing
After migration, verify in browser:
1. Layout matches original visually
2. Responsive behavior works (resize browser)
3. Colors match Liverpool brand palette
4. Typography is consistent across components
5. Spacing feels balanced and professional

---

## Future Reference
Component library location: `/Users/brainjam/brainjam-openedx-xblocks/shared-styles/component-library.html`

When in doubt, **always check the component library first** for the most up-to-date patterns.
