# Design System: Madiment (Company Profile)

## 1. Visual Theme & Atmosphere
A clean, professional, and forward-thinking digital agency aesthetic. The atmosphere is balanced and confident (Density: 5) with a mix of predictable structural grids and engaging asymmetric elements in the Hero and About sections (Variance: 5). It feels like a premium, modern tech-driven design studio. The contrast between bright, airy, light sections and deep, structural dark sections creates a strong narrative rhythm.

## 2. Color Palette & Roles
- **Canvas White** (`#F9FAFB`) — Secondary background surface (used for subtle section contrast, e.g., Testimonials).
- **Pure Surface** (`#FFFFFF`) — Primary background and card fill for light sections.
- **Charcoal Ink** (`#18181B`) — Deep structural background for Stats, Pricing, and Footer sections.
- **Deep Slate** (`#27272A`) — Primary text and heading color on light backgrounds, and card backgrounds on dark sections.
- **Muted Steel** (`#71717A`) — Secondary text, descriptions, tags, and metadata.
- **Vibrant Coral** (`#FF7A50`) — Single accent color for primary CTAs, active states, and brand highlights. (Maximum 1 accent, no neon glows).
- **Whisper Border** (`rgba(226,232,240,0.5)`) — Card borders and structural 1px dividing lines.

## 3. Typography Rules
- **Display:** `Satoshi` or `Outfit` — Clean, modern, geometric sans-serif. High contrast in scale between sections. Headings are bold, track-tight, and confident.
- **Body:** `Satoshi` or `Outfit` — Relaxed leading (1.5 - 1.6), legible structure, maximum 65 character width for optimal reading. Muted Steel color for readability.
- **Mono:** `JetBrains Mono` — Only used for code, high-density metadata, or specific timestamps. Banned for general body text.
- **Banned:** `Inter`, generic serif fonts (`Times New Roman`, `Georgia`, `Garamond`). No serifs used anywhere in this UI. No cursive.

## 4. Component Stylings
* **Buttons:** Fully rounded (pill-shape). Primary CTAs use Vibrant Coral fill with white text. Secondary or header CTAs use Charcoal Ink fill with white text. Hover states use a tactile -1px translate, no outer glows.
* **Cards (Projects, Testimonials, Blogs):** Gently rounded corners (1rem). Clean Pure Surface fill on light sections with a very diffused whisper shadow. For image-led cards, the image fills the top edge-to-edge.
* **Services List:** Numbered, large typography list with 1px border-top dividers. Asymmetric layout where numbers and titles align cleanly. 
* **Pricing Cards:** Dark theme structure. Standard plans use Deep Slate (`#27272A`) fill with white text. The featured/growth plan uses Pure Surface (`#FFFFFF`) with Charcoal Ink text and a Vibrant Coral CTA for stark contrast.
* **Accordion (FAQ):** Minimalist list. Border-bottom dividers. Simple `+` and `-` icons for states. No bulky boxes.
* **Badges/Tags:** Pill-shaped, subtle borders or light muted fills, used for categories like "Design" or "Development".

## 5. Layout Principles
- **Grid Architecture:** 12-column foundation with a max-width container (e.g., 1200px - 1400px centered). Generous vertical section padding (`py-20` to `py-32`).
- **Alternating Rhythm:** Alternates between light airy sections (Hero, About, Services, Portfolio) and high-contrast dark sections (Stats, Pricing, Footer) to maintain visual momentum.
- **Hero Constraints:** Asymmetric split. Bold left-aligned typography with pill-shape CTA. The right side features an abstract graphical composition. No centered Hero sections here.
- **Section Headers:** Clean, simple left-aligned or center-aligned section titles (e.g., "Our Services", "Latest work") with generous spacing below before the content grid starts.
- **Mobile Responsive:** Strict single-column collapse below 768px. Multi-column grids gracefully stack. Touch targets must be a minimum of `44px`. No horizontal scrolling.

## 6. Motion & Interaction
- **Spring Physics:** `stiffness: 100, damping: 20` for all interactive elements to ensure a premium, weighty, non-linear feel.
- **Hover Effects:** Project cards and blog cards have a subtle lift/scale on hover. Services list items expand or reveal accompanying imagery on hover.
- **Scroll Reveals:** Staggered cascade reveals for grid items (Logos, Services, Portfolio cards) to create a smooth waterfall effect as they mount in the viewport.
- **Performance:** Animate exclusively via `transform` and `opacity`. Never animate `top`, `left`, `width`, or `height`.

## 7. Anti-Patterns (Banned)
- No emojis anywhere.
- No `Inter` or generic system fonts.
- No pure black (`#000000`) - always use Charcoal Ink (`#18181B`) for the darkest shades.
- No neon, outer glow shadows, or oversaturated purple/blue gradients.
- No generic "3 equal cards horizontally" for feature explanations (use the list style like the Services section instead). 3-columns are only permitted for structured content like Portfolio, Pricing, and Blogs.
- No overlapping elements - every element occupies its own clear spatial zone.
- No floating inputs - keep form labels explicit.
- No generic placeholder names ("John Doe", "Acme") or fake AI copywriting clichés.
