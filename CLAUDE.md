# Change Risk Analyzer — Homepage

ServiceNow CoE Summit 2026 · UK Hackathon project. This is the **marketing homepage** for the Change Risk Analyzer app, embedded and served inside ServiceNow.

## Team
- Ahmad Khdeir — ServiceNow Developer
- Karl Gatzemeier — ServiceNow Developer
- Leonard Haus — Senior ServiceNow Consultant

## Stack
- React + TypeScript + Vite
- Deployed as a ServiceNow UI component
- Live at: `dev355708.service-now.com` → `/x_488299_change_ri_dashboard.do`

## Key Files
| File | Purpose |
|------|---------|
| `src/client/app.tsx` | Main component, all sections |
| `src/client/app.css` | All styles |
| `src/client/index.html` | ServiceNow overrides (`!important` duplicates of every CSS rule) |
| `src/client/riskPreview.ts` | Animated preview widget (self-contained HTML/CSS/JS string) |

## Page Sections (top → bottom)
1. **Hero** — badge, h1, tagline, long description, CTA button, 3 pitch stat cards
2. **Compare** — "Without CRA" (red) vs "With CRA" (green), scroll-triggered stagger animation
3. **What it does** — 3 feature cards + "How It Works" 3-step cards
4. **Team** — 3 avatars (ahmad.jpg, karl.jpg, leo.jpg)
5. **Footer** — "Explore the App" button

## Branding
```
Font:       "Segoe UI", Inter, system-ui, sans-serif
Background: #ffffff + radial-gradient dot grid rgba(36,73,145,0.04)
Text:       #1a2238 (dark navy)
Blue dark:  #244991
Blue light: #2D9EDF
Gradient:   linear-gradient(135deg, #244991, #2D9EDF)
Red:        #e5534b
Green:      #2da44e
Card bg:    #f4f8fd  hover: #f0f7fc
```

## Critical: ServiceNow CSS Rules
ServiceNow injects global styles that override everything. Two things are always required:

1. **Every CSS rule in `app.css` must be duplicated in `index.html`** inside the `<style>` block with `!important` on every property.

2. **`.summit-root * { color: #1a2238 !important }`** is intentional — it overrides ServiceNow's theme bleeding into child elements. Elements that need different colors have explicit overrides below it.

## Critical: Script Execution
React's `dangerouslySetInnerHTML` does NOT execute `<script>` tags. The preview widget is injected via `useEffect` by re-creating script elements manually:
```ts
el.querySelectorAll("script").forEach(old => {
  const s = document.createElement("script");
  s.textContent = old.textContent;
  old.replaceWith(s);
});
```

## Critical: Animations in ServiceNow
`IntersectionObserver` can be unreliable inside ServiceNow. Use a scroll event listener with `getBoundingClientRect()` instead. Animation CSS must be in `index.html` with `!important`.

## Related Project
The actual ServiceNow app lives at `/Users/ahmad/Desktop/sn-change-risk-analyzer`.
- Dashboard hero background: `#e6eef8` (changed from dark navy in `Dashboard.css`)
- 6 analysis checks: Read → Scan tables → Eval rules → Check ACLs → Calculate score → Classify
