# Resend.com Extraction Checklist

## ✅ Step-by-Step Instructions

### 1. Initial Setup
- [ ] Open https://resend.com in Chrome MCP
- [ ] Ensure you're on the homepage (not /docs or /pricing)
- [ ] Wait for page to fully load (all animations complete)

### 2. Screenshots (Desktop)
- [ ] Set viewport width to 1440px
- [ ] Take full-page screenshot
- [ ] Save to: `docs/design-references/resend-desktop-full.png`

### 3. Screenshots (Mobile)
- [ ] Set viewport width to 390px
- [ ] Take full-page screenshot
- [ ] Save to: `docs/design-references/resend-mobile-full.png`

### 4. Run Page Data Extraction
- [ ] Open Chrome DevTools Console (F12)
- [ ] Copy entire contents of `scripts/extract-page-data.js`
- [ ] Paste into console and press Enter
- [ ] Copy the JSON output
- [ ] Save to: `docs/research/resend-page-data.json`

### 5. Identify All Sections
Scroll through the page and create a list. For each section, note:
- Section name (e.g., "Hero", "Features Grid", "Code Example", "Pricing CTA", "Footer")
- CSS selector (right-click → Inspect, copy the main container's class or ID)

Save this list to: `docs/research/sections-list.md` in this format:
```
1. Hero - selector: header or .hero or main > section:first-child
2. Features - selector: .features or section.features
3. Code Demo - selector: .code-section
... etc
```

### 6. Extract Each Section's Styles
For EACH section you identified:
- [ ] Scroll to the section
- [ ] Open console
- [ ] Run: `extractComponentStyles('PASTE_SELECTOR_HERE')`
  - Example: `extractComponentStyles('header')`
  - Example: `extractComponentStyles('.features')`
- [ ] Copy the JSON output
- [ ] Save to: `docs/research/components/<section-name>-raw.json`
  - Example: `docs/research/components/hero-raw.json`
  - Example: `docs/research/components/features-raw.json`

### 7. Section Screenshots
For each section:
- [ ] Scroll to the section
- [ ] Take a screenshot of just that section
- [ ] Save to: `docs/design-references/<section-name>.png`

### 8. Interaction Testing
Document in `docs/research/behaviors.md`:

**Scroll Behaviors:**
- [ ] Does the header change when scrolling? (sticky, shrinking, shadow, etc.)
- [ ] Do elements fade/slide in when scrolling? Which ones?
- [ ] Is there parallax scrolling?
- [ ] Is there smooth scrolling (feels different from default)?

**Click Behaviors:**
- [ ] Are there tabs or toggles? Click each one and note what changes
- [ ] Are there dropdowns or modals?
- [ ] Are there expandable sections?

**Hover Behaviors:**
- [ ] Hover over buttons - what changes? (color, scale, shadow, etc.)
- [ ] Hover over cards - what changes?
- [ ] Hover over links - what changes?

### 9. Asset URLs
In console, run:
```javascript
[...document.querySelectorAll('img')].map(img => img.src)
```
Copy the output and save to: `docs/research/image-urls.json`

---

## 📤 What to Send Me

Once you've completed the checklist, send me:
1. The contents of `docs/research/resend-page-data.json`
2. The contents of `docs/research/sections-list.md`
3. The contents of ALL `docs/research/components/*-raw.json` files
4. The contents of `docs/research/behaviors.md`
5. The contents of `docs/research/image-urls.json`

You can paste them one by one or zip the `docs/research/` folder.

---

## 🚀 Quick Start (Minimum Viable)

If you want to start faster, just give me:
1. `resend-page-data.json` (Step 4)
2. `sections-list.md` (Step 5)
3. Screenshots (Steps 2-3)

I can work with that and we'll refine iteratively.
