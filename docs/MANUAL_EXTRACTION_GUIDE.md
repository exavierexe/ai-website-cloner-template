# Manual Extraction Guide for Resend.com

Since automated browser extraction isn't available in this session, follow these steps using your Chrome MCP:

## Step 1: Navigate and Capture
1. Open https://resend.com in Chrome MCP
2. Set viewport to 1440px width
3. Take a full-page screenshot → save as `docs/design-references/resend-desktop-full.png`
4. Set viewport to 390px width  
5. Take a full-page screenshot → save as `docs/design-references/resend-mobile-full.png`

## Step 2: Extract Page Data
Run this in Chrome MCP console on https://resend.com:

```javascript
// Copy the entire script from scripts/extract-page-data.js
// Paste it in the console and press Enter
// Copy the JSON output
```

Save the output to: `docs/research/resend-page-data.json`

## Step 3: Identify Sections
Scroll through the page and list every major section. For each section, note:
- Working name (e.g., "Hero", "Features", "Pricing", "Footer")
- Approximate position on page (top, middle, bottom)
- Whether it's static, has animations, or is interactive

Save this list to: `docs/research/sections-list.md`

## Step 4: Extract Each Section
For each section you identified:

1. Scroll to the section
2. Find the section's container selector (right-click → Inspect, note the class/id)
3. Run in console:
```javascript
extractComponentStyles('YOUR_SELECTOR_HERE')
```
4. Save output to: `docs/research/components/<section-name>-raw.json`
5. Screenshot just that section → save as `docs/design-references/<section-name>.png`

## Step 5: Interaction Testing
- Scroll slowly and note any animations
- Hover over buttons/cards and note hover states
- Click any tabs/toggles and note what changes
- Check if there's smooth scrolling (Lenis library)

Document findings in: `docs/research/behaviors.md`

## Step 6: Asset Collection
Create a list of all image URLs you see, then I'll create a download script.

---

## Alternative: Quick Start
If you want to skip manual extraction, just provide me with:
1. A screenshot of the homepage (desktop)
2. A rough description of the sections you see
3. Any specific sections you want to prioritize

I can build a close approximation and we can refine from there.
