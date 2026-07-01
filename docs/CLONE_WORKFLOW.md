# Resend.com Clone Workflow

## Status: Phase 1 - Reconnaissance

Target: https://resend.com

## Phase 1: Data Extraction (Manual via Chrome MCP)

### Step 1: Navigate and Screenshot
1. Open https://resend.com in Chrome MCP
2. Take full-page screenshots at:
   - Desktop: 1440px width
   - Mobile: 390px width
3. Save to `docs/design-references/resend-desktop.png` and `resend-mobile.png`

### Step 2: Run Page Data Extraction
1. In Chrome MCP console, run the script from `scripts/extract-page-data.js`
2. Copy the JSON output
3. Save to `docs/research/page-data.json`

### Step 3: Interaction Sweep
**Scroll Sweep:**
- Scroll slowly from top to bottom
- Note any header changes (sticky, shrinking, shadow)
- Note any scroll-triggered animations
- Note any parallax effects
- Check for smooth scroll library (Lenis, Locomotive)

**Click Sweep:**
- Click every button, tab, nav item
- Note what changes (modals, dropdowns, content switches)
- For tabs: click each and note content per state

**Hover Sweep:**
- Hover over buttons, cards, links
- Note transitions (color, scale, shadow, etc.)

Document findings in `docs/research/BEHAVIORS.md`

### Step 4: Section-by-Section Extraction
For each major section (header, hero, features, pricing, footer, etc.):
1. Run `extractComponentStyles('SELECTOR')` from `scripts/extract-component-styles.js`
2. Save output to `docs/research/components/<section-name>-raw.json`
3. Screenshot the section in isolation
4. Extract all text content verbatim

### Step 5: Asset Download
Create a list of all image/video URLs, then download them to `public/images/`

## Phase 2: Foundation (Automated)
Once data is extracted, I will:
1. Update `src/app/globals.css` with Resend's design tokens
2. Configure fonts in `src/app/layout.tsx`
3. Extract SVG icons to `src/components/icons.tsx`
4. Create TypeScript types in `src/types/`

## Phase 3: Component Build (Parallel Agents)
For each section:
1. Write component spec file
2. Dispatch builder agent in worktree
3. Merge completed work

## Phase 4: Assembly
Wire all components together in `src/app/page.tsx`

## Phase 5: QA
Side-by-side visual comparison and behavior testing

---

## Next Action Required
Please use your Chrome MCP to:
1. Navigate to https://resend.com
2. Run the extraction script from `scripts/extract-page-data.js`
3. Provide the JSON output

Then I can proceed with automated processing.
