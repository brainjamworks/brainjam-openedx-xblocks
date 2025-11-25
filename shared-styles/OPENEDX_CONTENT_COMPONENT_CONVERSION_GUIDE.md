# OpenEdX Content to Component Library Conversion Guide

## Critical Rules

### 1. ALWAYS Use Component Library First
**NEVER create custom HTML patterns without checking the component library first.**

Component Library Location: `/Users/brainjam/brainjam-openedx-xblocks/shared-styles/component-library.html`

Before converting any content:
1. Open the component library
2. Find the matching pattern
3. Copy the exact HTML structure
4. Only customize the content, not the structure

### 2. Standard Text Size
**ALL paragraph text must be 18px (1.125rem)**

```html
<!-- CORRECT -->
<p style="margin: 0 0 1rem 0; color: #333F48; font-size: 1.125rem; line-height: 1.6;">Your content...</p>

<!-- WRONG -->
<p style="font-size: 0.9rem;">Your content...</p>
<p style="font-size: 1rem;">Your content...</p>
```

**Exception:** Component library components have their own specific font sizes defined in the pattern. Do NOT override these.

### 3. Liverpool Brand Colors Only
**NEVER use Material Design or generic colors**

```css
Liverpool Blue: #212b58
Liverpool Teal: #00A689
Liverpool Pink: #EF426F
Liverpool Yellow: #FFD100
Liverpool Sky Blue: #009CDD

Text Colors:
- Primary: #333F48
- Secondary/Muted: #8d9695
- Border: #DBDBD3
- Light Background: #F8F9FA
```

---

## Component Library Patterns

### Evidence Summary (Literature Reviews, Citations)

**Use for:** Academic citations, research findings, literature reviews

**Component Library Pattern:**
```html
<div style="border: 1px solid #DBDBD3; border-top: 4px solid #212b58; border-radius: 16px; padding: 1.5rem; margin: 1rem 0; background: #FFFFFF; box-shadow: 0 4px 8px rgba(0,0,0,0.12);">
  <div style="color: #8d9695; font-size: 0.875rem; font-weight: 600; margin-bottom: 0.5rem; text-transform: uppercase;">📚 Evidence Summary</div>
  <h4 style="margin: 0 0 0.75rem 0; color: #212b58; font-size: 1.1rem;">Author, A. (2024)</h4>
  <p style="margin: 0 0 1rem 0; color: #333F48; font-size: 0.9rem;">Citation details and context...</p>
  <div style="padding-left: 1rem; border-left: 3px solid #00A689;">
    <div style="color: #00A689; font-weight: 600; font-size: 0.875rem; margin-bottom: 0.5rem;">Key Findings:</div>
    <ul style="margin: 0; padding-left: 1.5rem; color: #333F48;">
      <li>Finding one</li>
      <li>Finding two</li>
    </ul>
  </div>
</div>
```

**Key Features:**
- 4px Liverpool Blue top border (signature of evidence boxes)
- 📚 emoji with "EVIDENCE SUMMARY" label
- Citation in smaller font (0.9rem)
- Teal left border for findings section
- Do NOT bold individual list items unless specifically needed

---

### Case Study (SOAP Format or Field-Based)

**Use for:** Clinical cases, patient scenarios, diagnostic criteria

**Component Library Pattern (Field-Based):**
```html
<div style="border: 1px solid #DBDBD3; border-radius: 16px; padding: 2rem; margin: 1rem 0; background: #FFFFFF; box-shadow: 0 4px 8px rgba(0,0,0,0.12);">
  <h4 style="margin: 0 0 1.5rem 0; color: #212b58; font-size: 1.25rem; padding-bottom: 0.75rem; border-bottom: 2px solid #DBDBD3;">Case Title</h4>

  <!-- Section with badge -->
  <div style="margin-bottom: 2rem;">
    <div style="background: #212b58; color: white; padding: 0.5rem 1rem; border-radius: 4px; font-weight: 600; font-size: 0.875rem; display: inline-block; margin-bottom: 1rem;">Section Label</div>

    <!-- Field list -->
    <div style="border: 1px solid #DBDBD3; border-radius: 8px; overflow: hidden; background: white;">
      <div style="display: flex; gap: 1rem; padding: 0.75rem 1rem; border-bottom: 1px solid #DBDBD3;">
        <div style="min-width: 200px; font-weight: 600; color: #212b58; font-size: 0.875rem; flex-shrink: 0;">Field Label:</div>
        <div style="flex: 1; color: #333F48; font-size: 0.875rem;">Field value</div>
      </div>
      <!-- More fields... -->
    </div>
  </div>
</div>
```

**Key Features:**
- Small badge-style section labels (NOT full-width headers)
- Label: value pairs with `flex-shrink: 0` on labels
- Bordered field container with rounded corners
- `<details>` elements can be inline with field values for expandable images

---

### Callout Boxes (Info, Warning, Success)

**Use for:** Important notes, warnings, tips

**Component Library Pattern:**
```html
<div style="display: flex; gap: 1rem; padding: 1.25rem; background: rgba(33, 43, 88, 0.08); border-left: 4px solid #212b58; border-radius: 8px; margin: 1rem 0;">
  <div style="font-size: 1.5rem; flex-shrink: 0;">ℹ️</div>
  <div style="flex: 1;">
    <h5 style="margin: 0 0 0.5rem 0; color: #212b58; font-size: 1rem; font-weight: 700;">Heading</h5>
    <p style="margin: 0; color: #333F48; font-size: 0.9rem; line-height: 1.6;">Message...</p>
  </div>
</div>
```

**Background Colors (CRITICAL - Use Liverpool rgba, NOT Material Design):**
```css
Info (Blue): rgba(33, 43, 88, 0.08)   /* NOT #E3F2FD */
Warning (Orange): rgba(255, 152, 0, 0.08)
Success (Green): rgba(76, 175, 80, 0.08)
```

---

### Timeline (Treatment Steps, Procedure)

**Use for:** Sequential events, treatment progression, case progression

**Component Library Pattern:**
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

**Key Features:**
- `padding-left: 3rem` on container (NOT 2.5rem)
- `left: -3rem` on circles (NOT -2.5rem)
- **CRITICAL**: `top: 50%; transform: translateY(-50%);` centers circles vertically with cards
- `box-shadow: 0 0 0 3px white;` creates white ring around circle

---

### Image Grid (Square Images)

**Use for:** Clinical photos, anatomical images, case examples

**Component Library Pattern:**
```html
<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1.5rem;">
  <div style="border: 1px solid #DBDBD3; border-radius: 12px; overflow: hidden; background: white; box-shadow: 0 4px 8px rgba(0,0,0,0.12);">
    <img src="image1.jpg" alt="" style="width: 100%; aspect-ratio: 1 / 1; object-fit: cover; display: block;">
  </div>
  <div style="border: 1px solid #DBDBD3; border-radius: 12px; overflow: hidden; background: white; box-shadow: 0 4px 8px rgba(0,0,0,0.12);">
    <img src="image2.jpg" alt="" style="width: 100%; aspect-ratio: 1 / 1; object-fit: cover; display: block;">
  </div>
</div>
```

**Key Features:**
- `aspect-ratio: 1 / 1` forces square shape
- `object-fit: cover` crops image to fill
- Responsive grid adapts to screen size

---

### Complexity Chevron Flow

**Use for:** Classification scales, difficulty levels, progression systems

**Component Library Pattern:**
```html
<style>
  @media (min-width: 768px) {
    .chevron-clip-first {
      clip-path: polygon(0 0, calc(100% - 20px) 0, 100% 50%, calc(100% - 20px) 100%, 0 100%);
    }
    .chevron-clip-middle {
      clip-path: polygon(0 0, calc(100% - 20px) 0, 100% 50%, calc(100% - 20px) 100%, 0 100%, 20px 50%);
    }
    .chevron-clip-last {
      clip-path: polygon(0 0, calc(100% - 20px) 0, 100% 50%, calc(100% - 20px) 100%, 0 100%, 20px 50%);
    }
  }
</style>

<div style="display: flex; margin: 1rem 0;">
  <div class="chevron-clip-first" style="flex: 1; min-width: 200px; background: #00A689; color: white; padding: 1.5rem 2.5rem 1.5rem 1.5rem; text-align: center;">
    <div style="font-weight: 700; font-size: 1.25rem;">Class 1</div>
    <div style="font-size: 0.875rem;">Label</div>
  </div>
  <div class="chevron-clip-middle" style="flex: 1; min-width: 200px; background: #FFD100; color: #212b58; padding: 1.5rem 2.5rem; text-align: center; margin-left: -20px;">
    <div style="font-weight: 700; font-size: 1.25rem;">Class 2</div>
    <div style="font-size: 0.875rem;">Label</div>
  </div>
  <div class="chevron-clip-last" style="flex: 1; min-width: 200px; background: #EF426F; color: white; padding: 1.5rem 1.5rem 1.5rem 2.5rem; text-align: center; margin-left: -20px;">
    <div style="font-weight: 700; font-size: 1.25rem;">Class 3</div>
    <div style="font-size: 0.875rem;">Label</div>
  </div>
</div>
```

**Key Features:**
- Requires inline `<style>` block (CSS clip-path can't be inline)
- Last chevron HAS chevron point on right (not straight edge)
- Typical colors: Teal → Yellow → Pink for Class 1-2-3

---

## Typography Standards

### Headings
```html
<h3 style="margin: 2rem 0 1rem 0; color: #212b58; font-size: 1.75rem; font-weight: 600;">H3 Heading</h3>
<h4 style="margin: 1.5rem 0 1rem 0; color: #212b58; font-size: 1.25rem; font-weight: 700;">H4 Heading</h4>
<h5 style="margin: 1rem 0 0.5rem 0; color: #212b58; font-size: 1rem; font-weight: 700;">H5 Heading</h5>
```

### Body Text
```html
<!-- Standard paragraph - ALWAYS 18px -->
<p style="margin: 0 0 1rem 0; color: #333F48; font-size: 1.125rem; line-height: 1.6;">Body text...</p>

<!-- Small text (labels, captions) -->
<p style="font-size: 0.875rem; color: #8d9695;">Caption text...</p>
```

### Bold Key Terms
For educational content with narration, bold key terms for visual learners:

```html
<p style="margin: 0 0 1rem 0; color: #333F48; font-size: 1.125rem; line-height: 1.6;">
  These <strong>complexity factors</strong> should be assessed with a thorough <strong>history and examination</strong>.
</p>
```

---

## Spacing Standards

### Margins
```css
Small gap: 1rem
Medium gap: 1.5rem
Large gap: 2rem
Section margin: 2rem 0
```

### Padding
```css
Card padding: 2rem
Callout padding: 1.25rem
Field padding: 0.75rem 1rem
```

### Borders & Shadows
```css
Standard border: 1px solid #DBDBD3
Accent border (top): 4px solid [Liverpool color]
Border radius (cards): 16px
Border radius (callouts): 8px
Border radius (images): 12px
Card shadow: 0 4px 8px rgba(0,0,0,0.12)
Subtle shadow: 0 2px 4px rgba(0,0,0,0.1)
```

---

## Common Mistakes to Avoid

### ❌ WRONG: Creating custom patterns
```html
<div class="my-custom-box" style="...">
```
✅ **CORRECT:** Always use component library patterns

### ❌ WRONG: Using wrong font size for body text
```html
<p style="font-size: 0.9rem;">Text</p>
<p style="font-size: 1rem;">Text</p>
```
✅ **CORRECT:** Always use 1.125rem (18px)
```html
<p style="font-size: 1.125rem;">Text</p>
```

### ❌ WRONG: Using Material Design colors
```html
<div style="background: #E3F2FD;">
```
✅ **CORRECT:** Use Liverpool brand colors with rgba
```html
<div style="background: rgba(33, 43, 88, 0.08);">
```

### ❌ WRONG: Timeline circles not centered
```html
<div style="position: absolute; left: -2.5rem;">
```
✅ **CORRECT:** Proper spacing and vertical centering
```html
<div style="position: absolute; left: -3rem; top: 50%; transform: translateY(-50%);">
```

### ❌ WRONG: Images without square aspect ratio
```html
<img src="..." style="width: 100%;">
```
✅ **CORRECT:** Square images with object-fit
```html
<img src="..." style="width: 100%; aspect-ratio: 1 / 1; object-fit: cover;">
```

### ❌ WRONG: Full-width blue headers in case studies
```html
<div style="background: #212b58; width: 100%; padding: 1rem;">Header</div>
```
✅ **CORRECT:** Small badge-style labels
```html
<div style="background: #212b58; color: white; padding: 0.5rem 1rem; border-radius: 4px; font-weight: 600; font-size: 0.875rem; display: inline-block;">Label</div>
```

### ❌ WRONG: Grid images not aligned at top
```html
<div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 0.75rem;">
```
✅ **CORRECT:** Add align-items: start for different height images
```html
<div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 0.75rem; align-items: start;">
```

### ❌ WRONG: Portrait image with too-wide max-width
```html
<div style="max-width: 500px;">
  <img src="portrait.jpg" style="width: 100%; height: auto;" />
</div>
```
✅ **CORRECT:** Portrait images need narrower max-width and centering
```html
<div style="max-width: 350px; margin: 0 auto;">
  <img src="portrait.jpg" style="width: 100%; height: auto; display: block;" />
</div>
```

### ❌ WRONG: Creating custom yellow badges not in component library
```html
<div style="background: #FFD100; color: #212b58; padding: 0.5rem 1rem;">Test Cavity</div>
```
✅ **CORRECT:** Use existing component library patterns only (orange warning callout)
```html
<div style="display: flex; gap: 1rem; padding: 1.25rem; background: rgba(255, 152, 0, 0.08); border-left: 4px solid #FF9800; border-radius: 8px;">
  <div style="font-size: 1.5rem; flex-shrink: 0;">⚠️</div>
  <div style="flex: 1;">
    <h5 style="margin: 0 0 0.5rem 0; color: #FF9800; font-size: 1rem; font-weight: 700;">Test Cavity</h5>
    <p style="margin: 0; color: #333F48; font-size: 0.9rem;">Warning message...</p>
  </div>
</div>
```

---

## Troubleshooting Guide

### Images Not Aligning Properly in Grids

**Symptom**: Images in 2-column or 3-column grids appear misaligned or stretched when they have different heights

**Solution**:
```html
<!-- Add align-items: start to grid container -->
<div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 0.75rem; align-items: start;">
  <!-- Images here -->
</div>
```

**Why it works**: `align-items: start` aligns all grid items to the top instead of stretching them to match the tallest item.

### Portrait Image Has White Space Next to It

**Symptom**: Tall, narrow image appears with unwanted white space on the sides

**Solution**:
```html
<!-- Reduce max-width and center the image -->
<div style="max-width: 350px; margin: 0 auto;">
  <img src="portrait.jpg" style="width: 100%; height: auto; display: block;" />
</div>
```

**Guidelines**:
- Portrait images (height > width): `max-width: 350-400px`
- Landscape images (width > height): `max-width: 500px` or no constraint
- Always use `margin: 0 auto;` to center constrained images

### Missing Figure References

**Symptom**: User says "there are three figures for the hpj one" or "two images for ct0820"

**Solution**:
1. Carefully count images in the PowerPoint slide
2. Check transcript for image code references (IM4385, CT0820, HPJ2816, etc.)
3. Create proper figure numbering:
   - Single image: Figure 1
   - Two images: Figures 2a and 2b
   - Three images: Figures 3a, 3b, and 3c

**Figure Caption Pattern**:
```html
<figcaption style="margin: 0.5rem 0 0 0; color: #8d9695; font-size: 0.75rem; font-style: italic; text-align: center;">
  Figure 2a: Description (CT0820)
</figcaption>
```

### Wrong Background Color on Callout

**Symptom**: User asks "is that yellow from our component library"

**Solution**: Only use component library patterns:
- **Info (Blue)**: `background: rgba(33, 43, 88, 0.08); border-left: 4px solid #212b58;`
- **Warning (Orange)**: `background: rgba(255, 152, 0, 0.08); border-left: 4px solid #FF9800;`
- **Success (Green)**: `background: rgba(76, 175, 80, 0.08); border-left: 4px solid #4CAF50;`

**Never** create custom colors or badges not in component library.

### Content Missing When Asked to Refine

**Symptom**: User says "did you just remove stuff aswell when you gave me the improved component"

**Solution**:
- "Refine" or "make consistent" means **fix styling/formatting only**
- Never remove or paraphrase content - keep every word verbatim
- You can change bullet lists to paragraphs, but the actual words must stay the same
- When in doubt, include everything from the original transcript

### How to Decide Layout Pattern

**Question**: Should I use individual callout cards or narrative + grid?

**Decision Tree**:
1. **Multiple distinct concepts with details** → Individual callout cards
   - Example: Medical History with 4 different conditions (ASA, immunocompromised, MRONJ, LA issues)

2. **Single flowing concept with image comparisons** → Narrative + grid + risks box
   - Example: Position in Arch comparing anterior vs. molar teeth

3. **Complex relationships (measurements + images)** → Nested layouts
   - Example: Mouth opening with color-coded badges + clinical photo

**Rule of thumb**: If the content reads as one cohesive paragraph, use narrative flow. If it's a list of separate points, use individual cards.

---

## PowerPoint Slide Conversion Workflow

### Overview
This workflow documents the complete process for converting PowerPoint slides to OpenEdX content with ElevenLabs narration. **Two deliverables are required for each slide.**

### Input Required
1. **PowerPoint slide image** - Visual reference showing layout and content structure
2. **Raw transcript text** - Unformatted narration script from slide notes

### Output Deliverables

#### Deliverable 1: ElevenLabs Narration Script
Clean text-only format optimized for text-to-speech:

**Formatting Rules:**
- Spell out ALL acronyms letter-by-letter: "ASA" → "A-S-A", "CBT" → "C-B-T", "TMD" → "T-M-D"
- Replace abbreviations: "LA" → "local anaesthetic"
- Write out numbers: "35mm" → "thirty-five millimetres", "25-35mm" → "twenty-five to thirty-five millimetres"
- Add commas for natural pauses
- Include transition phrases: "Now let's look at...", "Firstly,", "Secondly,", "Finally,"
- Fix grammar and remove duplicate words
- NO HTML markup - plain text only
- Maintain all original content verbatim (don't shorten or paraphrase)

**Example:**
```
Physical and Psychological Limitations

When assessing the challenges of an endodontic case, we often rush to assess the tooth. However, there are various other factors that can increase treatment difficulty.

Firstly, patients often present with dental anxiety or phobia. Paediatric patients often fall under this category. It may only be related to needles, which can make local anaesthetic administration a challenge...
```

#### Deliverable 2: OpenEdX HTML Component
Creative visual component using component library patterns:

**Requirements:**
- H3 heading matching slide title (Liverpool Blue, 1.75rem, font-weight: 600)
- Narrative paragraphs at 1.125rem (18px) with **bold key terms**
- Creative use of callout cards with emojis for main points
- Two-column layouts where appropriate (text + images)
- ALL original content preserved verbatim
- Orange warning callout box for "Risks & Challenges" sections
- Liverpool brand colors only (rgba backgrounds, NOT Material Design)
- Component library patterns exclusively (NO custom HTML)

**Creative Patterns to Use:**

1. **Individual Callout Cards for List Items**
   - Instead of plain bullets, create separate info callout cards
   - Add contextual emojis (🏥 medical, 💊 medication, 📏 measurement, 😰 anxiety, etc.)
   - Use `rgba(33, 43, 88, 0.08)` background with `border-left: 4px solid #212b58`

2. **Nested Layouts**
   - Embed two-column layouts inside callout cards
   - Example: Measurement badges on left, clinical photo on right

3. **Color-Coded Badges**
   - Use Liverpool colors for classification levels
   - Teal (#00A689) for positive/normal
   - Yellow (#FFD100) for moderate/caution
   - Pink (#EF426F) for severe/warning

4. **Standard "Risks & Challenges" Box**
   - Always use orange warning callout: `rgba(255, 152, 0, 0.08)`
   - Border left: `4px solid #FF9800`
   - ⚠️ emoji
   - Bullet list of challenges
   - Summary paragraph at end

### Real-World Examples

#### Example 1: Medical History Slide

**Input Text:**
```
Medical History
The first stage of an assessment will begin during the history taking process. A comprehensive medical history is crucial in all aspects of dental treatment, but particularly so with endodontics.
There are many conditions that need to be considered when dealing with an endodontic case. These conditions could generally either increase the risk of treatment failure, or could lead to significant adverse consequences if the treatment were to fail.
The most common conditions to consider are:
- ASA III or IV category
- Immunocompromised patients
- MRONJ or Osteoradionecrosis Risk
- Local Anaesthetic Issues
```

**Creative Approach:**
✅ Four separate info callout cards with emojis (🏥💊🦴💉)
✅ Two-column layout: condition cards on left, clinical photo on right
✅ Orange warning box at end
✅ Bold key terms in narrative paragraphs

#### Example 2: Physical & Psychological Limitations Slide

**Input Text:**
```
Physical & Psychological Limitations
- Dental anxiety or phobia
- Limitations in reclining patient
- Mouth Opening (Normal: >35mm, Reduced: 25-35mm, Extremely Reduced: <25mm)
```

**Creative Approach:**
✅ Three separate callout cards (😰 anxiety, 🛏️ positioning, 📏 mouth opening)
✅ Nested two-column layout inside mouth opening card
✅ Color-coded measurement badges (Teal/Yellow/Pink)
✅ Clinical photo alongside measurements
✅ Orange warning box listing all challenges

### Critical Lessons Learned

#### 1. Content Completeness is Non-Negotiable
- **NEVER paraphrase or shorten the user's content** - every word from the transcript must appear in the final component
- If you think you should summarize or condense, you're wrong - keep it verbatim
- Don't remove sections like "Risks & Challenges" thinking they're redundant
- User will explicitly say: *"does that contain all the content... i didnt ask you to change the actual text"*

#### 2. Consistency Over Creativity
- **ALWAYS use component library patterns** - no custom colors, no custom badges, no "creative" variations
- If you create a yellow badge one time, that's a new pattern that will cause inconsistency across 50+ slides
- User will remind you: *"please try to stay consistent otherwise every one of these will be different"*
- When in doubt, ask which component library pattern to use rather than inventing something new

#### 3. Figure References Must Match Transcript
- If transcript says "this patient (IM4385)", that's Figure 1 with caption including "(IM4385)"
- If there are THREE images (2a, 2b, 2c), don't collapse them into one
- User will correct: *"there are three figures for the hpj one"*, *"two images for ct0820"*
- Count the images in the slide carefully before creating figure markup

#### 4. Aspect Ratios Matter
- Don't force images to fill width or set fixed dimensions
- Always use: `width: 100%; height: auto; display: block;`
- Portrait images need max-width constraints: `max-width: 400px; margin: 0 auto;`
- User will flag: *"the aspect ratios of the images you set dont match the images"*

#### 5. Component Library Patterns Are Sacred
- Orange warning: `rgba(255, 152, 0, 0.08)` with `border-left: 4px solid #FF9800`
- Info callout: `rgba(33, 43, 88, 0.08)` with `border-left: 4px solid #212b58`
- No yellow badges unless explicitly in component library
- User will ask: *"is that yellow from our component library"* - if answer is no, don't use it

#### 6. Figure Numbering in ElevenLabs Script
- When transcript mentions images: "as shown in Figure one", "Figures two A and two B"
- Spell out numbers: "Figure one", "Figure two A through two C"
- NOT: "Figure 1", "Figures 2a-2b" (those are for visual captions only)

#### 7. Don't Remove Content When Refining
- When asked to "refine" or "make consistent", that means fix styling/formatting only
- User will check: *"did you just remove stuff aswell when you gave me the improved component"*
- Bullet lists can become paragraphs, but the actual words must stay the same

#### 8. User Will Verify Your Understanding
- User asks: *"are you understanding the pattern of what i want done each time now"*
- User requests: *"what have you learnt so far about my requirements"*
- This is quality control - be prepared to articulate what you've learned
- Use these moments to document patterns in the guide

#### 9. Image Grid Alignment for Different Heights
- When using grid layouts with images of different heights or aspect ratios, **ALWAYS add `align-items: start;`** to the grid container
- Without this, images will stretch or misalign when they have different heights
- User will flag: *"some of the images need sorting they dont fit or they are not aligned"*
- **Standard pattern**: `display: grid; grid-template-columns: repeat(2, 1fr); gap: 0.75rem; align-items: start;`

#### 10. Aspect Ratio Guidelines for Different Orientations
- **Portrait images (height > width)**: `max-width: 350-400px; margin: 0 auto;`
- **Landscape images (width > height)**: `max-width: 500px;` or no constraint needed
- **Square images**: No max-width needed, grid handles sizing
- **ALWAYS include on `<img>` tags**: `width: 100%; height: auto; display: block;`
- User will correct: *"this one doesnt fit theres white space next to it"* if max-width is too wide for portrait images

#### 11. Layout Decision Patterns
- **Individual callout cards**: Use when slide has multiple distinct concepts, each with details/images (e.g., Medical History with 4 different conditions)
- **Narrative + grid + risks**: Use when slide has single flowing concept with image comparisons (e.g., Position in Arch comparing tooth types)
- **Nested layouts**: Use for complex relationships like measurements + images, or case examples with multiple data points
- Not every slide needs individual callout cards - simpler slides with one main concept can use cleaner narrative flow

### Step-by-Step Process

#### Step 1: Analyze Slide Structure
- How many main points are there?
- Is there a clinical photo or diagram? Count them carefully
- Are there measurements or classifications?
- Is there a "Risks & Challenges" section?
- Which images are referenced in the transcript? Note their codes (IM4385, CT0820, etc.)

#### Step 2: Create ElevenLabs Script
1. Copy raw transcript text
2. Spell out all acronyms (A-S-A, C-B-T, T-M-D, C-B-C-T)
3. Replace "LA" with "local anaesthetic"
4. Write out numbers ("thirty-five millimetres")
5. Add figure references: "as shown in Figure one", "Figures two A and two B"
6. Add transitions ("Firstly,", "Now let's look at...")
7. Add commas for natural pauses
8. Verify all content is included - every sentence from transcript

#### Step 3: Design Creative Layout
1. Open component library for reference (`/Users/brainjam/brainjam-openedx-xblocks/shared-styles/component-library.html`)
2. Choose appropriate callout card pattern - ONLY from component library
3. Decide on emoji for each main point (🏥💊📏😰🔍🔬)
4. Plan two-column layouts if applicable (measurements + images, conditions + photos)
5. Count images and plan figure numbers (1, 2a, 2b, 2c, etc.)
6. Always include orange warning callout if "Risks & Challenges" present

#### Step 4: Build OpenEdX Component
1. Start with H3 heading (Liverpool Blue, 1.75rem, font-weight: 600)
2. Add narrative paragraphs (1.125rem) with bold key terms
3. Create individual callout cards for each main point
4. Add figures with proper numbering and captions including image codes
5. Nest measurement badges or images where appropriate
6. Add orange warning callout at end if applicable
7. Verify all inline styles match component library exactly

#### Step 5: Verify Both Deliverables
- [ ] ElevenLabs script has all acronyms spelled out (A-S-A, C-B-C-T)
- [ ] ElevenLabs script has numbers written out ("thirty-five millimetres")
- [ ] ElevenLabs script has figure references ("Figure one", "Figures two A and two B")
- [ ] ElevenLabs script has no HTML markup
- [ ] OpenEdX component uses creative callout cards (not plain bullets)
- [ ] All narrative text is 1.125rem (18px)
- [ ] Bold applied to key terms in paragraphs
- [ ] Liverpool colors only (rgba backgrounds, no Material Design)
- [ ] Component library patterns used exclusively (no custom patterns)
- [ ] ALL original content preserved verbatim (not paraphrased or shortened)
- [ ] Correct number of figures with proper numbering (1, 2a, 2b, 2c)
- [ ] Figure captions include image codes (IM4385, CT0820, etc.)
- [ ] Images use `width: 100%; height: auto;` for proper aspect ratio
- [ ] Orange warning callout included if transcript mentions risks/challenges

---

## Standard Conversion Workflow

### Step 1: Identify Content Type
- Is it a citation/literature review? → Evidence Summary
- Is it a clinical case with fields? → Case Study (field-based)
- Is it a sequential process? → Timeline
- Is it an important note? → Callout
- Is it images in a grid? → Image Grid
- Is it a classification scale? → Complexity Chevron

### Step 2: Open Component Library
Always check: `/Users/brainjam/brainjam-openedx-xblocks/shared-styles/component-library.html`

### Step 3: Copy Exact Pattern
Copy the HTML structure from the component library's code section

### Step 4: Replace Content Only
- Keep all inline styles exactly as they are
- Only change the actual content (text, images, etc.)
- Do NOT modify colors, spacing, or structure

### Step 5: Adjust Body Text Size
Change any body paragraphs to `font-size: 1.125rem`

### Step 6: Add Bold to Key Terms (if narrated content)
Wrap important terms in `<strong>` tags for educational content

### Step 7: Verify
- [ ] All colors are Liverpool brand colors
- [ ] All body text is 1.125rem (18px)
- [ ] Structure matches component library exactly
- [ ] No custom classes or patterns created
- [ ] Spacing uses standard values (1rem, 1.5rem, 2rem)
- [ ] Border radius is correct (8px callouts, 16px cards, 12px images)

---

## Quick Reference: Content Type → Component

| Content Type | Component Library Pattern |
|--------------|--------------------------|
| Academic citation, literature review | Evidence Summary |
| Clinical case with fields | Case Study (field-based) |
| Patient history, SOAP notes | Case Study (SOAP format) |
| Treatment steps, timeline | Timeline |
| Important note, tip, warning | Callout (Info/Warning/Success) |
| Clinical photos, anatomy images | Image Grid (square) |
| Classification system, levels | Complexity Chevron Flow |
| Image with explanation | Media Object |
| Step-by-step procedure | Numbered circles (manual numbering) |

---

## Resources

- **Component Library**: `/Users/brainjam/brainjam-openedx-xblocks/shared-styles/component-library.html`
- **Migration Guide**: `/Users/brainjam/brainjam-openedx-xblocks/shared-styles/CONTENT_TEMPLATES_TO_COMPONENT_LIBRARY_MIGRATION_GUIDE.md`
- **Liverpool Design Language**: `/Users/brainjam/liverpool-dental-learning-hub/docs/LIVERPOOL_DESIGN_LANGUAGE.md`

---

## When in Doubt

1. **Check the component library first**
2. If pattern doesn't exist, ask before creating custom HTML
3. Always prioritize consistency over customization
4. Remember: Body text is ALWAYS 1.125rem (18px)
