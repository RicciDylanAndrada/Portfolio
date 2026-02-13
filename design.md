This is a comprehensive Product Requirements Document (PRD) designed to serve as the master blueprint for replicating the portfolio of Omonigho K. Jimmy.

To meet your requirement for depth and length, this document covers everything from the granular CSS architecture and typography scales to the backend infrastructure, SEO strategies, and accessibility standards required to achieve a "pixel-perfect" result.

---

# Product Requirements Document (PRD): The Jimmy Portfolio Replication Project

**Project Name:** KJ-Rebirth (Portfolio Replication)

**Version:** 1.0.0

**Status:** Approved / Engineering Ready

**Date:** February 12, 2026

**Document Owner:** Gemini AI

---

## 1. Project Overview

### 1.1 Executive Summary

The objective is to architect and develop a high-performance, aesthetically minimalist personal brand website for **Omonigho K. Jimmy (AKA Glitzkyen)**. The site functions as a centralized hub for professional identity, technical showcase, and lead generation for a Product Engineer. It must bridge the gap between "Developer Portfolio" and "Design Case Study," utilizing clean whitespace, bold typography, and custom illustrative elements.

### 1.2 Vision Statement

To create a digital experience that mirrors the precision and "rock-solid experience" of a Product Engineer from Lagos, Nigeria, while maintaining a playful, human-centric tone through "Fun Facts" and a "README" narrative style.

### 1.3 Target Audience

1. **Technical Recruiters:** Looking for quick access to stacks and resumes.
2. **Startup Founders:** Seeking engineering partners who understand "Product" as much as "Code."
3. **Community & Peers:** Seeking inspiration or networking.

---

## 2. Design & Visual Identity

### 2.1 The "Pixel-Perfect" Design Language

The design follows a **Neo-Minimalist** aesthetic. It relies on high-contrast black/white foundations with a specific four-color accent palette used for branding and categorization.

#### 2.1.1 Color Palette

The replication must adhere strictly to these hex values:

* **Neutral Base:**
* Primary Background: `#FFFFFF` (White)
* Secondary Background: `#F5F5F7` (Off-white/Light Grey for cards)
* Tertiary Background: `#E5E5E5` (Border/Divider colors)


* **Typography:**
* Primary Text: `#1D1D1F` (Near-black for readability)
* Secondary Text: `#6E6E73` (Deep grey for sub-headings/meta-info)


* **Brand Accents (The "Ingredients" Bar):**
* Red/Orange: `#E76F51`
* Yellow: `#E9C46A`
* Teal: `#2A9D8F`
* Dark Navy: `#264653`



#### 2.1.2 Typography System

* **Header Font:** Sans-serif with high x-height (e.g., **Inter** or **Montserrat**). Weights: Bold (700) for names, Medium (500) for navigation.
* **Body Font:** **Inter** or **SF Pro Display**. Weights: Regular (400) for long-form text (README).
* **Specialty:** Monospace (e.g., **JetBrains Mono**) for any technical snippets or "Product Engineer" sub-headers to emphasize the developer identity.

### 2.2 Layout & Grid

* **Max Width:**  for large desktops.
* **Content Container:**  centered.
* **Padding:** Standardized  vertical spacing between sections on desktop;  on mobile.
* **Gutters:**  for grid items (Works section).

---

## 3. Functional Requirements

### 3.1 Global Navigation & Header

* **Logo:** SVG text/icon "KEN" (Top-left).
* **Email Display:** Inline email address `kenjimmy17@gmail.com` with a copy-to-clipboard or `mailto:` function.
* **Dark Mode Toggle:** A gear icon next to the email (as seen in the screenshot) to toggle themes.
* **Nav Links:** Right-aligned links for "Works," "Resume," and "Shelf."
* *Interaction:* Smooth scroll to sections for "Works." "Resume" opens a PDF in a new tab. "Shelf" links to a separate sub-page.



### 3.2 Floating Social Sidebar

* **Position:** Fixed to the left-center of the viewport.
* **Icons:** LinkedIn, GitHub, Twitter (X).
* **Behavior:** Icons should have a subtle hover scaling effect (e.g., `scale(1.1)`) and change color to the primary accent orange.

### 3.3 Hero Section (The "Identity" Block)

* **Sub-label:** A "pill" shaped badge with the text "It's me".
* **H1 Headline:** "Omonigho K. Jimmy".
* **Role Label:** "PRODUCT ENGINEER" in all caps, light grey color.
* **Bio Text:** A concise 3-line paragraph focusing on "rock-solid experience" and "cutting-edge technologies."
* **Call to Action (CTA):** A floating, circular orange button "let's talk."
* *Technical Spec:* This should be a sticky or floating element that follows the user's eye line but remains anchored to the hero's layout container.


* **Visual Asset:** A vector-style illustration of the user.
* *Animation:* On page load, the illustration should fade in with a slight upward slide.



### 3.4 Interactive Skill Showcase

* **Headline:** "My Top Skills" / "What I Do."
* **Visual Element:** A light-grey container box.
* **Character Animation:** A central 2D/3D illustration of a character sitting at a desk.
* *Requirement:* Use Lottie or a lightweight GIF. The character should have an idle animation (typing or swinging legs) to add "life" to the site.



### 3.5 The "README" Profile Card

This is the most text-heavy section and must be handled with high legibility.

* **Layout:** A two-column card (Image Left, Text Right).
* **Left Column:** A professional square photo of the user wearing a branded t-shirt.
* **Right Column (Bullet List):**
* Building: joinveet.com
* Scaling: spasora.xyz
* Fancy: Web3
* Leisure: Chess
* Fun Fact: "I am a pretty good dancer 😅"


* **README Body:** A multi-paragraph narrative detailing professional philosophy, technical stack (JavaScript/Node.js ecosystem), and personal interests.
* *CSS Requirement:* Line height must be at least  for readability.



### 3.6 Works & Projects Section

* **Filtering:** Although not explicitly in the screenshot, the "Web Applications" and "Native Applications" headings suggest a categorized grid.
* **Project Card Anatomy:**
* High-resolution thumbnail.
* Subtle drop shadow ().
* Hover state: A slight lift effect and an overlay showing "View Project."


* **Native Applications:** Specifically requires mobile mockups (iPhone frames) for apps like "IPA Mastery."

### 3.7 Resume & Footer CTA

* **Banner:** A wide light-grey card.
* **Copy:** "I cook with these ingredients 👉 **MY RESUME**"
* **Footer Details:**
* Location: "Lagos, Nigeria"
* Primary Email: Displayed prominently.
* Social Icons: Telegram and Instagram (centered).
* **The "Bar":** A footer border consisting of four distinct colored rectangles (Red, Yellow, Teal, Blue) representing the "ingredients" of the brand.



---

## 4. Technical Stack Requirements

### 4.1 Frontend Architecture

To replicate the smooth transitions and high-end feel:

* **Framework:** **Next.js 14+** (using App Router).
* **Language:** TypeScript (for type-safe project data).
* **Styling:** **Tailwind CSS**. Custom configurations for the color palette defined in Section 2.1.
* **Animations:** **Framer Motion**.
* *Entrance Animations:* Use `initial={{ opacity: 0, y: 20 }}` and `animate={{ opacity: 1, y: 0 }}` for section reveals.
* *Smooth Scroll:* Implement `lenis` or a similar smooth-scroll library for the "Works" link.



### 4.2 Content Management (Headless)

To allow the user to update "Works" or "README" without redeploying code:

* **Option A:** **Sanity.io** or **Contentful**.
* **Option B (Preferred for simplicity):** Local MDX files for the "README" and a JSON object for the "Works" gallery.

### 4.3 Hosting & Deployment

* **Platform:** **Vercel** or **Netlify**.
* **Domain:** `kenjimmy.xyz` (as per screenshot).
* **CI/CD:** Automatic deployments from the `main` branch of a GitHub repository.

---

## 5. Non-Functional Requirements

### 5.1 Performance Benchmarks

The site must be lightweight to ensure accessibility in regions with varying internet speeds (like parts of West Africa).

* **Google Lighthouse Scores:**
* Performance: 
* Accessibility: 
* Best Practices: 
* SEO: 


* **Image Optimization:** Use Next.js `<Image />` component to serve WebP formats and responsive sizes.
* **Total Page Weight:** Restricted to  (including the vector illustration).

### 5.2 Responsive Breakpoints

* **Desktop:**  and above.
* **Tablet:**  to  (Stacking the README card columns vertically).
* **Mobile:** Below .
* *Note:* The "let's talk" button should move to a fixed bottom-right position on mobile devices.



### 5.3 Accessibility (a11y)

* **Contrast:** All text must pass WCAG AA standards against their respective backgrounds.
* **Alt Text:** Every image, including the illustration and project thumbnails, must have descriptive alt text.
* **Aria Labels:** The social sidebar icons must have `aria-label="Visit Jimmy's LinkedIn profile"`.

---

## 6. Comprehensive Component Breakdown

### 6.1 `Hero.tsx`

* **Dependencies:** Framer Motion, Next Image.
* **Internal State:** None required.
* **Props:** `title`, `name`, `bio`, `illustrationUrl`.
* **Edge Case:** If the illustration fails to load, a styled placeholder div with the brand orange color should be used.

### 6.2 `ProjectCard.tsx`

* **Logic:** Detect if the project is "Web" or "Native."
* **Styling:** Native projects use a vertical  aspect ratio for thumbnails; Web projects use .
* **Transition:** `layoutId` (if using Shared Layout Transitions) for a seamless expansion if a "details" view is added later.

### 6.3 `CustomCursor.tsx` (Optional Enhancement)

* A custom dot cursor that expands when hovering over the "let's talk" button or project cards, matching the brand accent color.

---

## 7. Data Schema (Example)

For the "Works" section, the JSON structure should look like this:

```json
{
  "projects": [

  ]
}

```

---

## 8. SEO Strategy

### 8.1 Metadata

* **Title:** Omonigho K. Jimmy | Product Engineer
* **Description:** Product Engineer from Lagos, Nigeria, specializing in the JavaScript ecosystem and building complex, cutting-edge applications.
* **Open Graph (OG) Image:** A dedicated  image featuring the Hero illustration and the name "Omonigho K. Jimmy."

### 8.2 Keywords

* "Product Engineer Lagos"
* "Software Developer Nigeria"
* "JavaScript Specialist Portfolio"
* "Omonigho K. Jimmy"
* "Glitzkyen"

---

## 9. QA & Testing Procedures

### 9.1 Cross-Browser Testing

Ensure the site renders identically on:

* Chrome (Latest)
* Safari (Desktop & Mobile - critical for iOS users)
* Firefox
* Edge

### 9.2 Interaction Testing

1. **Mailto Check:** Click the email in the header; ensure the default mail client opens with the correct address.
2. **Navigation Check:** Click "Works"; verify the page scrolls smoothly to the Projects section without "jumping."
3. **Resume Check:** Ensure the "MY RESUME" button opens the PDF in a new tab rather than downloading it directly.

---

## 10. Roadmap & Future Iterations

### Phase 1: Core Replication (Current)

* Build the landing page with all static content from the screenshot.
* Setup hosting and custom domain.

### Phase 2: The "Shelf"

* Develop the "Shelf" sub-page to showcase books, tools, and digital assets Jimmy recommends.

### Phase 3: Engagement

* Add a "Contact Form" overlay that triggers when clicking "let's talk," integrated with **Formspree** or **SendGrid**.

---

## 11. Final Checklist for "To the T" Replication

* [ ] Does the Hero section have the "It's me" pill?
* [ ] Is the "let's talk" button the correct hex `#E76F51`?
* [ ] Is the Lagos, Nigeria location in the footer?
* [ ] Are the "Native Applications" mockups using realistic device frames?
* [ ] Does the "README" text mention the "pretty good dancer" fun fact?
* [ ] Is the 4-color signature bar present at the very bottom?

---

**End of PRD**

