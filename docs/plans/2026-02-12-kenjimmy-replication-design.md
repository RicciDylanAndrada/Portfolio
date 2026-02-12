# Portfolio Replication Design - kenjimmy.xyz Style

**Date:** 2026-02-12
**Status:** Approved
**Goal:** Replicate kenjimmy.xyz layout and design using shadcn/ui while keeping personal content (Ricci Dylan Andrada)

---

## Color Palette

### Light Mode
| Role | Color | Hex |
|------|-------|-----|
| Primary Background | White | `#FFFFFF` |
| Secondary Background | Offwhite | `#F2F0EE` |
| Primary Text | Charcoal | `#2B2929` |
| Secondary Text | Muted Grey | `#6E6E73` |
| Accent | Coral | `#E45447` |
| Mocha | Warm Brown | `#8B7355` |
| Taupe | Light Brown | `#D8C7B8` |
| Gold | Amber | `#E29D51` |

### Dark Mode
| Role | Color | Hex |
|------|-------|-----|
| Background | Near Black | `#1A1A1A` |
| Cards | Dark Grey | `#2B2929` |
| Text | Offwhite | `#F2F0EE` |

### Footer Color Bar
Four rectangles spanning full width: Coral, Gold, Taupe, Mocha

---

## Typography

| Element | Font | Weight | Notes |
|---------|------|--------|-------|
| Headers | Inter | 700 (Bold) | Names, section titles |
| Navigation | Inter | 500 (Medium) | Nav links |
| Body | Inter | 400 (Regular) | Paragraphs, descriptions |
| Role Labels | JetBrains Mono | 400 | "SOFTWARE ENGINEER", monospace accent |

---

## Global Layout

### Header (Fixed Top)
- **Left:** Logo "ricci." with coral dot
- **Center:** Email with copy-to-clipboard functionality
- **Right:** Dark mode toggle (gear icon) + "Works" | "Resume" | "Shelf" links
- Blurred backdrop on scroll (`backdrop-blur-sm`)

### Floating Social Sidebar
- Position: Fixed left-center of viewport
- Icons: LinkedIn, GitHub, Twitter/X (vertical stack)
- Hover: `scale(1.1)` + coral color transition
- Mobile: Hidden (icons appear in footer instead)

### Floating "Let's Talk" Button
- Circular coral button
- Desktop: Near hero, sticky behavior
- Mobile: Fixed bottom-right corner

### Smooth Scroll
- Lenis library for smooth scrolling
- Nav links trigger smooth scroll to sections

---

## Page Sections

### 1. Hero Section

**Layout:** Two-column grid

**Left Column:**
- "It's me" pill badge (shadcn Badge)
- H1: "Ricci Dylan Andrada" (text-5xl to text-7xl, font-black)
- Role: "SOFTWARE ENGINEER" (JetBrains Mono, uppercase, letter-spaced, muted)
- Bio: 3-line paragraph about ADP, Georgia Tech

**Right Column:**
- Illustration placeholder (rounded container, gradient background)
- Animation: Fade-in + slide-up on load (Framer Motion)

### 2. README Profile Card

**Layout:** Full-width card, two columns

**Left (40%):**
- Square photo placeholder
- Gradient fallback background
- Rounded corners, shadow

**Right (60%):**
- Bullet list:
  - Building: [placeholder]
  - Scaling: [placeholder]
  - Interested in: [placeholder]
  - Leisure: [placeholder]
  - Fun Fact: [placeholder]

**Below Card:**
- Section title: "README.md" (styled like filename)
- Multi-paragraph bio (line-height: 1.75)
- Placeholder content for professional philosophy

### 3. Skills Section

**Header:** "My Top Skills" / "What I Do"

**Illustration Area:**
- Light grey container (centered)
- Placeholder for future Lottie/image

**Skills Display:**
- Categories: Backend / Frontend
- Pills with hover effect (border -> coral)
- Current skills: Node.js, C#, .NET, React, Next.js, TypeScript, etc.

**CTA:** "SEE MY WORKS →" (arrow animates on hover)

### 4. Works/Projects Section

**Header:** "My Works" with "Web Applications" subtitle

**Layout:** 2x2 grid

**Project Card Anatomy (shadcn Card):**
- Thumbnail area (gradient placeholder)
- Title (bold, hover -> coral)
- Description (muted text)
- Tech tags (shadcn Badge)
- Hover: lift effect (-translate-y-2) + shadow increase

**Projects:**
1. Hively - Multi-tenant SaaS
2. Tailored - AI resume optimizer
3. Hively Landing - Marketing site
4. NextJS + Go - Full-stack demo

### 5. Resume Banner

- Wide light-grey card
- Copy: "I cook with these ingredients 👉 MY RESUME"
- Link opens PDF in new tab

### 6. Footer

**Content:**
- Location: "New Jersey, USA"
- Email: Large, prominent, clickable
- Social icons: GitHub, LinkedIn, Resume (centered)
- Bottom row: Logo | Nav links | Copyright

**Color Bar:**
- 4 equal rectangles spanning full width
- Colors: Coral | Gold | Taupe | Mocha

---

## Shelf Page (`/shelf`)

- Same header/footer as main page
- Grid of placeholder cards
- Card structure: Title, description, category tag
- Placeholder content for books/tools/recommendations

---

## shadcn/ui Components

| Component | Usage |
|-----------|-------|
| Button | CTAs, nav buttons, floating talk button |
| Badge | "It's me" pill, tech tags, category labels |
| Card | Project cards, README card, Shelf items |
| Separator | Section dividers |
| Tooltip | Social icon hover labels |
| Toggle | Dark mode switch |

---

## Dependencies to Add

- `@studio-freight/lenis` - Smooth scrolling
- `next-themes` - Dark mode support
- shadcn/ui components (via CLI)
- `@fontsource/inter` - Inter font
- `@fontsource/jetbrains-mono` - Monospace font

---

## File Structure

```
app/
  layout.tsx        # Updated with fonts, theme provider
  page.tsx          # Main page
  globals.css       # Updated with CSS variables for themes
  shelf/
    page.tsx        # Shelf page

components/
  ui/               # shadcn components
  Navbar.tsx        # Updated header
  SocialSidebar.tsx # New floating sidebar
  FloatingCTA.tsx   # New floating button
  Hero.tsx          # New hero section
  ReadmeCard.tsx    # New README section
  Skills.tsx        # Updated
  Projects.tsx      # Updated with shadcn Card
  ResumeBanner.tsx  # New component
  Footer.tsx        # Updated (renamed from Contact)
  ColorBar.tsx      # New footer bar
  ThemeToggle.tsx   # New dark mode toggle
```

---

## Animations (Framer Motion)

- **Section entrance:** `initial={{ opacity: 0, y: 20 }}` → `animate={{ opacity: 1, y: 0 }}`
- **Stagger children:** 0.1s delay between items
- **Hover states:** Scale, color transitions
- **Floating button:** Subtle pulse or bounce

---

## Responsive Breakpoints

| Breakpoint | Behavior |
|------------|----------|
| Desktop (1280px+) | Full layout, floating sidebar visible |
| Tablet (768-1279px) | Stacked columns, sidebar hidden |
| Mobile (<768px) | Single column, floating CTA bottom-right |

---

## Decisions Made

1. Keep personal content (Ricci Dylan Andrada, ADP, Georgia Tech)
2. Use placeholders for README content
3. Floating social sidebar (left-center)
4. Floating "Let's Talk" button (sticky)
5. Add lenis smooth scroll
6. Skip custom cursor
7. Add dark mode with toggle
8. Use placeholder for skills illustration
9. Add Shelf page with placeholder content
10. Use own color palette with mocha accent for color bar
