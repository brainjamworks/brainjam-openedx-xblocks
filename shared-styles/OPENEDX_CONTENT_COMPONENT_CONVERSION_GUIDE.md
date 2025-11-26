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

## Content Relationship Analysis for Course Design

**Think like a course designer, not just a converter.** Before choosing which component library patterns to use, analyze the content relationships and design creative solutions.

### 1. Identify Relationships First

Look for connections between pieces of content:

- **Claim → Evidence** (CBCT recommendation → research showing effectiveness)
- **Problem → Solution** (diagnostic challenge → CBCT solves it)
- **Concept → Examples** (treatment approach → multiple case studies)
- **Sequence/Progression** (stage 1 → stage 2 → stage 3)
- **Comparison/Contrast** (Method A vs Method B)
- **Category/Hierarchy** (main concept → subcategories)

### 2. Design Creative Visual Solutions

Once you identify a relationship, **think creatively about how to express it** using component library patterns:

**Examples of Creative Solutions:**
- **Claim-Evidence relationship**: Could nest evidence box inside callout, OR use two-column layout (claim left, evidence right), OR use sequential callouts with visual connectors
- **Multiple related examples**: Could use grid layout, OR timeline pattern, OR separate callouts with consistent color coding
- **Hierarchical concepts**: Could use nested structure, OR vertical decision tree, OR chevron flow showing progression

### 3. Mix and Match Components

The component library is your **toolkit** - combine patterns creatively:

- Callout containing technique badges + inline reference
- Evidence box followed by image grid
- Timeline with nested callouts at each stage
- Two-column layout with callout on left, figures on right
- Info callout with nested white background evidence box (teal left border)

**Example: CBCT Diagnostic Investigation**
```html
<!-- Main claim in callout -->
<div style="display: flex; gap: 1rem; padding: 1.25rem; background: rgba(33, 43, 88, 0.08); border-left: 4px solid #212b58; border-radius: 8px;">
  <div style="font-size: 1.5rem;">🏥</div>
  <div style="flex: 1;">
    <h5>CBCT may be required</h5>
    <p>Some cases need specialized equipment...</p>

    <!-- Nested evidence showing WHY -->
    <div style="background: white; padding: 1rem; border-radius: 8px; border-left: 3px solid #00A689;">
      <div style="color: #00A689; font-weight: 600;">📊 Research Evidence</div>
      <p>CBCT detects 30% more lesions than plain film...</p>
    </div>
  </div>
</div>

<!-- Visual proof follows -->
<div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem;">
  <figure><!-- CBCT image 1 --></figure>
  <figure><!-- CBCT image 2 --></figure>
</div>
```

This creates the flow: **Claim → Evidence → Visual Proof**

### 4. Key Principle: Form Follows Function

**Don't ask**: "Which component should I use?"
**Ask**: "What relationship am I trying to show, and which combination of components best expresses that?"

The "right" pattern is the one that makes the **content relationship immediately clear** to the learner.

### 5. Think Like a Learner

After designing your layout, validate with these questions:

- ✅ "Does this visual structure help me understand how these pieces connect?"
- ✅ "Would I naturally follow this flow?"
- ✅ "Does the layout match how I'd explain this concept verbally?"
- ✅ "If I saw this for the first time, would the relationship be obvious?"

### Common Relationship Patterns

| Content Relationship | Visual Solutions to Consider |
|---------------------|------------------------------|
| Claim needs immediate justification | Nest evidence inside callout |
| Multiple steps in sequence | Timeline, Numbered procedure, or Chevron flow |
| Comparing alternatives | Two-column grid, or side-by-side callouts |
| Main concept + supporting cases | Main callout followed by case study grid |
| Evidence with visual proof | Evidence box → Image grid showing the findings |
| Hierarchical classification | Vertical decision tree or Chevron flow |

**Remember:** These are **starting points for creative thinking**, not rigid rules. The best solution depends on the specific content and learning objectives.

---

## Component Selection Strategy: Advanced Principles

### The Callout Overuse Problem

**WARNING: Callouts are not a universal solution.** Just because content is "important" doesn't mean it needs a callout.

**Common mistakes:**
- ❌ Using callouts for simple definitions
- ❌ Using callouts for statistical data that could be narrative
- ❌ Creating 5+ callouts in a single section (information overload)
- ❌ Defaulting to callouts when other patterns would be more appropriate

**When callouts ARE appropriate:**
- ✅ Actual warnings or cautions (orange warning callout)
- ✅ Important tips or advice (info callout)
- ✅ Success criteria or completion notes (success callout)
- ✅ Quick reference information that needs visual separation

**When callouts are NOT appropriate:**
- ❌ Presenting structured requirements/standards → Use Case Study field-based pattern
- ❌ Showing statistical data with visuals → Use Media Object
- ❌ Explaining definitions or classifications → Use narrative paragraphs with bold terms
- ❌ Listing sequential benefits → Use Timeline pattern

**Key principle:** Restraint is a design skill. Over-emphasis dilutes emphasis.

---

### Data Type → Component Mapping

**Think about WHAT the data IS, then choose the pattern that best represents that type of information.**

| Data Type | Best Component Pattern | Why | Example Use Case |
|-----------|----------------------|-----|------------------|
| **Statistical facts with visuals** | Media Object (image + text) | Pairs visual data with numerical impact | "20% of litigation" + litigation graph |
| **Definitions or classifications** | Narrative paragraph with bold terms | Don't over-emphasize basics | "Complexity is determined by three factors: **experience**, **time**, **risks**" |
| **Structured requirements/standards** | Case Study field-based pattern | Reveals inherent structure, scannable | GDC learning outcomes (1.14.9, 1.14.10) |
| **Academic evidence** | Evidence Summary | Appropriate for research citations | Essam 2022 study with key findings |
| **Sequential outcomes/benefits** | Timeline with checkmarks | Shows progression clearly | "Improve outcomes → Improve access → Increase availability" |
| **Warning or caution** | Orange warning callout | Visual emphasis for safety/risk | Litigation risks, complication warnings |
| **Tips or important notes** | Info callout (blue) | Helpful contextual information | Usage tips, best practices |
| **Multiple techniques/methods** | Technique Badges (flexible pills) | Shows related options at a glance | "Distraction, Salt, Hypnotherapy, Local Anaesthesia" |
| **Clinical photos/images** | Image Grid with square aspect ratio | Consistent visual presentation | Complication images, case examples |
| **Hierarchical classification** | Complexity Chevron Flow | Shows progression across levels | Class 1 → Class 2 → Class 3 complexity |
| **Step-by-step procedure** | Timeline OR numbered circles | Clear sequential flow | Treatment stages, diagnostic steps |
| **Comparison data** | Two-column grid or side-by-side | Enables direct comparison | Anterior vs. molar access comparison |

**Decision framework:**
1. **Identify the data type** - Is it a definition? A statistic? A standard? A warning?
2. **Consider the learning goal** - What does the learner need to understand?
3. **Choose the pattern that reveals the structure** - Match form to function
4. **Avoid the default** - Don't just use callouts because they're familiar

---

### Information Architecture Principles

**One massive section = information overload.** Break content into logical sections with clear progression.

#### Section Break Guidelines

**When to break into multiple sections:**
- ✅ Content exceeds 800-1000 words in one block
- ✅ Natural topic shifts occur (Problem → Framework → Solution)
- ✅ You have 5+ components in a single section
- ✅ Learner needs "cognitive breathing room"

**Effective section progression patterns:**
- **Problem → Evidence → Solution**
- **Overview → Details → Application**
- **What → Why → How**
- **Definition → Standards → Benefits**

**Example:** "Why Assess Complexity" was ONE section with 5 callouts (overwhelming). Breaking into THREE sections created:
- Section 1: Why Assess Endodontic Complexity? (The Problem)
- Section 2: Assessing Complexity: Framework and Standards (The Framework)
- Section 3: The Benefits of Appropriate Case Management (The Solution)

**Result:** Clear learning progression, reduced cognitive load, better retention.

---

### Component Variety for Engagement

**Using the same pattern repeatedly = monotonous learning experience.**

**Before rework:**
- 5 info callouts in one section
- Repetitive visual structure
- Learner fatigue

**After rework:**
- 6 different patterns across 3 sections
- Narrative + Image Grid + Media Object + Evidence Summary + Case Study field-based + Timeline
- Varied, engaging learning experience

**Guideline:** Aim for 3-5 different component types within a complete learning module. The component library is a **toolkit** - use the full range.

**Mix patterns to:**
- ✅ Maintain learner attention
- ✅ Signal different types of information visually
- ✅ Create rhythm and pacing in the content
- ✅ Support different learning preferences

---

### Technical Precision Checklist

Even with excellent design choices, implementation details can break the learning experience.

**Figure Captions:**
- ✅ Caption must be positioned **directly under the specific image**
- ✅ Caption must be **inside the image container** (not after the entire component)
- ✅ Caption needs **width constraint** to wrap properly (match image width)
- ❌ Don't place caption after an entire media object or multi-column layout

**Example - Media Object with caption:**
```html
<div style="display: flex; gap: 1.5rem; align-items: flex-start;">
  <div style="width: 250px; flex-shrink: 0;">
    <div style="overflow: hidden; border-radius: 16px; border: 1px solid #DBDBD3;">
      <img src="..." style="width: 100%; display: block;">
    </div>
    <p style="margin: 0.5rem 0 0 0; color: #8d9695; font-size: 0.875rem; font-style: italic; text-align: center;">
      Figure 2: Caption text here
    </p>
  </div>
  <div style="flex: 1;">
    <!-- Text content here -->
  </div>
</div>
```

**Links:**
- ✅ ALL external links must open in new tabs: `target="_blank"`
- ✅ Include on ALL `<a>` tags for external resources (GDC, DDU, research papers)

**Width Constraints:**
- ✅ Long captions need width constraints to wrap (match parent container width)
- ✅ Portrait images need `max-width: 350-400px; margin: 0 auto;`
- ✅ Media object image columns need explicit width (e.g., `width: 250px;`)

---

### The "Less is More" Principle

**Reducing emphasis can increase effectiveness.**

**Case study from rework:**
- **Before:** 5 callouts in one section (everything emphasized)
- **After:** 0 callouts in Section 1 (selective emphasis)
- **Result:** Content became MORE effective, not less

**Why this works:**
- Over-emphasis dilutes emphasis
- When everything is "important," nothing stands out
- Learners tune out visual noise
- Clean presentation increases comprehension

**Application:**
- Don't add callouts just because you can
- Use narrative paragraphs with bold key terms as default
- Reserve callouts for content that truly needs visual separation
- Trust the typography hierarchy (H3 → H4 → H5 → body)

**Question to ask:** "Would this content work as a simple paragraph with bold terms?" If yes, don't use a callout.

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

### Technique Badges (Flexible Pills)

**Use for:** Displaying multiple related techniques, methods, or management options

**Component Library Pattern:**
```html
<div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
  <div style="background: #00A689; color: white; padding: 0.5rem 0.75rem; border-radius: 6px; font-size: 0.875rem; font-weight: 600;">Technique 1</div>
  <div style="background: #00A689; color: white; padding: 0.5rem 0.75rem; border-radius: 6px; font-size: 0.875rem; font-weight: 600;">Technique 2</div>
  <div style="background: #00A689; color: white; padding: 0.5rem 0.75rem; border-radius: 6px; font-size: 0.875rem; font-weight: 600;">Technique 3</div>
</div>
```

**Key Features:**
- Standard color: Liverpool Teal (#00A689)
- Can use other Liverpool colors for categorization (Blue, Pink, Yellow, Sky Blue)
- Wraps responsively with `flex-wrap: wrap`
- Typically placed inside info callout cards below descriptive text
- Use for listing management techniques, treatment methods, or related options

**Example Use Cases:**
- Gag reflex management techniques: "Distraction Methods", "Salt", "Hypnotherapy", "Local Anaesthesia", "Acupuncture"
- Treatment options for a condition
- Diagnostic methods or imaging modalities
- Medication categories or drug names

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
- **CRITICAL**: When transcript has image codes in parentheses (FO0571), (SP5043), (JM5177), you MUST add figure references at those exact points
- Image code in transcript = insert figure reference: "(FO0571)" → "as shown in Figure one"
- Spell out numbers: "Figure one", "Figure two A through two C"
- NOT: "Figure 1", "Figures 2a-2b" (those are for visual captions only)
- **NEVER skip figure references** - if there are image codes in the transcript, they MUST become figure references in the ElevenLabs script
- User will correct: *"why have you not referred to figures in the transcript"* - avoid this by always converting image codes to figure references

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

#### 12. Always Check the Images Folder First
- **NEVER guess how many figures there are** - always check the actual images folder
- User will provide path like `/Users/brainjam/Downloads/Images/8. Extra-coronal Restorations`
- Use `ls -la` to see exactly how many images exist and their filenames
- Some image codes have folders with multiple images (e.g., JO4711 folder with 5 images)
- Count carefully: subfolders may contain multiple images for one figure set
- User will correct: *"there are 5 figures for JO4711"* - avoid this by checking first

#### 13. Image Sizing Must Be Responsive
- **NEVER use fixed width/height attributes** on `<img>` tags (e.g., `width="1280" height="864"`)
- **ALWAYS use**: `style="width: 100%; height: auto; display: block;"`
- Small/square images: Add `max-width: 200-250px; margin: 0 auto;` to wrapper div
- Portrait images in grids: Add `max-width: 350px; margin: 0 auto;` to wrapper div
- This prevents images from breaking layout on different screen sizes

#### 14. Progressive Revelation for Multiple Concepts
- When user says "each bullet appear one at a time with its associated image"
- **Interleave components with their associated images** - don't dump all components first, then all images
- Be creative with component library patterns - use callouts, evidence boxes, timelines, case studies, etc.
- Choose the component that best fits the content type (not just callouts by default)
- Example pattern: Taurodontism callout → Figures 1a-1b → Microdontia callout → Figure 2
- Could also be: Timeline item → Images → Next timeline item → Images
- Or: Evidence summary → Images → Case study section → Images
- User will specify: *"don't start with all 5"* - means interleave, don't batch
- Think creatively about which component library pattern best represents each concept

#### 15. ALWAYS Check for Flowcharts and Diagrams in Slides
- **NEVER skip flowcharts, decision trees, or classification diagrams** shown in the slide images
- User will immediately ask: *"what did you do with the flowchart"* if you ignore it
- **Process**: When you see a diagram in the slide image, STOP and check component library for matching pattern
- Common diagram types and their component library patterns:
  - **Hierarchical flowcharts** (e.g., Root Resorption: Internal/External) → **Vertical Decision Tree**
  - **Classification scales** (e.g., Class 1-2-3 complexity) → **Complexity Chevron Flow**
  - **Sequential processes** (e.g., treatment steps) → **Timeline**
- **Where to place diagram**: Usually at the START after intro paragraph, before detailed callouts/images
- Diagrams provide essential educational structure - they are NOT optional decoration
- If unsure which pattern matches, search component library HTML for "decision-tree", "chevron", "timeline"

#### 16. Combining Multiple Slides into One Component
- **When to combine**: When multiple slides tell ONE cohesive educational story
- **Indicators for combining**:
  - Slide 1 shows overview/classification, Slides 2-4 show detailed methods/examples
  - Slides build on each other sequentially (e.g., Curvature overview → Methods → Specific method → Application)
  - All slides relate to same H3 topic
- **When to separate**: Each slide covers distinctly different topics with different H3 headings
- **Flow pattern for combined slides**:
  1. H3 heading (covers all slides)
  2. Intro paragraph from Slide 1
  3. Visual diagram (if present)
  4. Progressive examples from Slide 1
  5. Evidence box (if reference in Slide 2)
  6. Comparison/methods section from Slide 2
  7. Detailed explanation from Slides 3-4
  8. Application notes
  9. Risks & Challenges
- **Narrative construction**: Build logical transitions between slide content - add phrases like "One of the simplest is...", "In cases where...", etc.
- **Figure numbering**: Sequential across ALL combined slides (Figures 1-12, not restarting at each slide)

#### 17. Always Use Placeholders for Missing Images
- **CRITICAL**: If transcript or slide mentions an image code, create a figure placeholder even if image doesn't exist in folder
- **NEVER substitute** with different images or skip figures
- User says: *"lets not substitute we should put placeholders in for all images referred to in the transcript and on the slides"*
- **Process**:
  1. Check images folder with `ls -la` to see what exists
  2. Note which images are missing
  3. Create figure markup for ALL images (existing + missing)
  4. Use standard placeholder format: `<img src="/asset-v1:University_of_Liverpool+ENDO101+Self-Paced+type@asset+block@IMAGE_CODE.png"`
- **Benefits**:
  - Complete figure numbering system
  - User can upload correct images later without restructuring
  - ElevenLabs script references all figures correctly
  - No confusion about missing content
- **Example**: Transcript mentions CA4621, AJ4228, NC0063 but only EM7484 exists → Create placeholders for all 4

### Step-by-Step Process

#### Step 1: Analyze Slide Structure
- How many main points are there?
- **CRITICAL: Is there a flowchart, decision tree, or classification diagram in the slide?**
  - If YES: Check component library for matching pattern (Vertical Decision Tree, Complexity Chevron, etc.)
  - **NEVER skip or ignore diagrams** - they provide essential educational structure
  - User will ask: *"what did you do with the flowchart"* if you miss it
- Is there a clinical photo or diagram? Count them carefully
- Are there measurements or classifications?
- Is there a "Risks & Challenges" section?
- Which images are referenced in the transcript? Note their codes (IM4385, CT0820, etc.)

#### Step 2: Create ElevenLabs Script
1. Copy raw transcript text
2. **FIRST: Identify all image codes in parentheses** - (FO0571), (SP5043), (JM5177), etc.
3. **Convert EVERY image code to a figure reference** at that exact location in the text
4. Spell out all acronyms (A-S-A, C-B-T, T-M-D, C-B-C-T)
5. Replace "LA" with "local anaesthetic"
6. Write out numbers ("thirty-five millimetres")
7. Add transitions ("Firstly,", "Now let's look at...")
8. Add commas for natural pauses
9. Verify all content is included - every sentence from transcript
10. **VERIFY: Every image code has been converted to "as shown in Figure X"**

#### Step 3: Design Creative Layout
1. Open component library for reference (`/Users/brainjam/brainjam-openedx-xblocks/shared-styles/component-library.html`)
2. **If slide has flowchart/diagram: Find matching component library pattern FIRST**
   - Flowcharts/hierarchies → Vertical Decision Tree
   - Classification scales → Complexity Chevron Flow
   - Sequential processes → Timeline
3. Choose appropriate callout card pattern - ONLY from component library
4. Decide on emoji for each main point (🏥💊📏😰🔍🔬)
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
- [ ] **CRITICAL: Every image code in transcript has become a figure reference in ElevenLabs script**
- [ ] **CRITICAL: Any flowchart/diagram in slide has been converted to component library pattern**
- [ ] ElevenLabs script has all acronyms spelled out (A-S-A, C-B-C-T)
- [ ] ElevenLabs script has numbers written out ("thirty-five millimetres")
- [ ] ElevenLabs script has figure references at correct locations ("as shown in Figure one")
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
| Multiple techniques/methods/options | Technique Badges (Flexible Pills) |
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
