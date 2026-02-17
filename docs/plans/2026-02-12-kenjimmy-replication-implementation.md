# Kenjimmy.xyz Portfolio Replication - Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Replicate the kenjimmy.xyz portfolio design using shadcn/ui while keeping personal content (Ricci Dylan Andrada).

**Architecture:** Next.js 14 App Router with shadcn/ui components, Framer Motion animations, lenis smooth scroll, and next-themes for dark mode. Single-page portfolio with separate /shelf route.

**Tech Stack:** Next.js, TypeScript, Tailwind CSS, shadcn/ui, Framer Motion, lenis, next-themes, Inter + JetBrains Mono fonts

---

## Phase 1: Foundation Setup

### Task 1: Install Dependencies

**Files:**
- Modify: `package.json`

**Step 1: Install core dependencies**

Run:
```bash
npm install @studio-freight/lenis next-themes
```

**Step 2: Install fonts**

Run:
```bash
npm install @fontsource/inter @fontsource-variable/jetbrains-mono
```

**Step 3: Initialize shadcn/ui**

Run:
```bash
npx shadcn@latest init
```

When prompted:
- Style: Default
- Base color: Neutral
- CSS variables: Yes

**Step 4: Install shadcn components**

Run:
```bash
npx shadcn@latest add button badge card separator tooltip
```

**Step 5: Verify installation**

Run:
```bash
npm run build
```
Expected: Build succeeds without errors

---

### Task 2: Configure Tailwind Theme

**Files:**
- Modify: `tailwind.config.js`

**Step 1: Update tailwind config with design system**

Replace entire file:

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono Variable', 'monospace'],
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        coral: '#E45447',
        charcoal: '#2B2929',
        offwhite: '#F2F0EE',
        taupe: '#D8C7B8',
        gold: '#E29D51',
        mocha: '#8B7355',
        'muted-grey': '#6E6E73',
      },
      boxShadow: {
        'card': '0 12px 80px rgba(0,0,0,0.09)',
        'card-hover': '0 20px 100px rgba(0,0,0,0.15)',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
```

**Step 2: Verify build**

Run:
```bash
npm run build
```
Expected: Build succeeds

---

### Task 3: Setup Global Styles & Theme Provider

**Files:**
- Modify: `app/globals.css`
- Modify: `app/layout.tsx`

**Step 1: Update globals.css with CSS variables**

Replace entire file:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 20 5% 16%;
    --card: 30 14% 94%;
    --card-foreground: 20 5% 16%;
    --primary: 4 75% 59%;
    --primary-foreground: 0 0% 100%;
    --secondary: 30 14% 94%;
    --secondary-foreground: 20 5% 16%;
    --muted: 30 14% 94%;
    --muted-foreground: 240 4% 46%;
    --accent: 30 14% 94%;
    --accent-foreground: 20 5% 16%;
    --border: 30 14% 90%;
    --input: 30 14% 90%;
    --ring: 4 75% 59%;
    --radius: 0.75rem;
  }

  .dark {
    --background: 0 0% 10%;
    --foreground: 30 14% 94%;
    --card: 20 5% 16%;
    --card-foreground: 30 14% 94%;
    --primary: 4 75% 59%;
    --primary-foreground: 0 0% 100%;
    --secondary: 20 5% 20%;
    --secondary-foreground: 30 14% 94%;
    --muted: 20 5% 20%;
    --muted-foreground: 240 4% 65%;
    --accent: 20 5% 20%;
    --accent-foreground: 30 14% 94%;
    --border: 20 5% 25%;
    --input: 20 5% 25%;
    --ring: 4 75% 59%;
  }
}

@layer base {
  * {
    @apply border-border;
  }
  body {
    @apply bg-background text-foreground;
  }
  html {
    scroll-behavior: auto; /* lenis handles this */
  }
}
```

**Step 2: Create theme provider component**

Create file `components/ThemeProvider.tsx`:

```tsx
'use client';

import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { type ThemeProviderProps } from 'next-themes';

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
```

**Step 3: Create smooth scroll provider**

Create file `components/SmoothScrollProvider.tsx`:

```tsx
'use client';

import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
```

**Step 4: Update layout.tsx with providers and fonts**

Replace entire file:

```tsx
import type { Metadata } from 'next';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/700.css';
import '@fontsource-variable/jetbrains-mono';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';
import { SmoothScrollProvider } from '@/components/SmoothScrollProvider';

export const metadata: Metadata = {
  title: 'Ricci Dylan Andrada | Software Engineer',
  description: 'Software Engineer at ADP, MS CS Student at Georgia Tech. Building scalable products with React, TypeScript, and Node.js.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <SmoothScrollProvider>
            {children}
          </SmoothScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
```

**Step 5: Verify build and dev server**

Run:
```bash
npm run dev
```
Expected: Dev server starts, page loads without errors

---

## Phase 2: Core UI Components

### Task 4: Create Theme Toggle Component

**Files:**
- Create: `components/ThemeToggle.tsx`

**Step 1: Create the component**

```tsx
'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button className="w-9 h-9 flex items-center justify-center rounded-full bg-secondary">
        <span className="sr-only">Toggle theme</span>
      </button>
    );
  }

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="w-9 h-9 flex items-center justify-center rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ) : (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      )}
    </button>
  );
}
```

---

### Task 5: Create Floating Social Sidebar

**Files:**
- Create: `components/SocialSidebar.tsx`

**Step 1: Create the component**

```tsx
'use client';

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

const socials = [
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/riccidylan',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
      </svg>
    ),
  },
  {
    name: 'GitHub',
    href: 'https://github.com/RicciDylanAndrada',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
      </svg>
    ),
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
  },
];

export function SocialSidebar() {
  return (
    <TooltipProvider>
      <aside className="fixed left-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-4">
        {socials.map((social) => (
          <Tooltip key={social.name}>
            <TooltipTrigger asChild>
              <a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-coral hover:scale-110 transition-all duration-200"
                aria-label={`Visit ${social.name}`}
              >
                {social.icon}
              </a>
            </TooltipTrigger>
            <TooltipContent side="right">
              <p>{social.name}</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </aside>
    </TooltipProvider>
  );
}
```

---

### Task 6: Create Floating CTA Button

**Files:**
- Create: `components/FloatingCTA.tsx`

**Step 1: Create the component**

```tsx
'use client';

import { motion } from 'framer-motion';

interface FloatingCTAProps {
  onClick?: () => void;
}

export function FloatingCTA({ onClick }: FloatingCTAProps) {
  return (
    <motion.a
      href="mailto:andradariccidylan@gmail.com"
      onClick={onClick}
      className="fixed z-50 lg:bottom-auto lg:right-12 lg:top-1/2 lg:-translate-y-1/2 bottom-6 right-6 w-24 h-24 lg:w-28 lg:h-28 rounded-full bg-coral text-white flex items-center justify-center text-center font-medium text-sm shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.5, type: 'spring', stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      let&apos;s
      <br />
      talk
    </motion.a>
  );
}
```

---

### Task 7: Update Navbar Component

**Files:**
- Modify: `components/Navbar.tsx`

**Step 1: Replace with new navbar design**

```tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ThemeToggle } from './ThemeToggle';

interface NavbarProps {
  scrollToProjects: () => void;
}

export default function Navbar({ scrollToProjects }: NavbarProps) {
  const [copied, setCopied] = useState(false);
  const email = 'andradariccidylan@gmail.com';

  const copyEmail = async () => {
    await navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b border-border/50">
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-24 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-foreground">
          ricci<span className="text-coral">.</span>
        </Link>

        {/* Center - Email */}
        <button
          onClick={copyEmail}
          className="hidden md:flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <span>{email}</span>
          <span className="text-xs px-2 py-0.5 rounded bg-secondary">
            {copied ? 'Copied!' : 'Copy'}
          </span>
        </button>

        {/* Right side */}
        <div className="flex items-center gap-4 md:gap-6">
          <ThemeToggle />
          <button
            onClick={scrollToProjects}
            className="text-foreground font-medium hover:text-coral transition-colors"
          >
            works
          </button>
          <a
            href="/Ricci_Andrada_SWE_2026.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground font-medium hover:text-coral transition-colors"
          >
            resume
          </a>
          <Link
            href="/shelf"
            className="text-foreground font-medium hover:text-coral transition-colors"
          >
            shelf
          </Link>
        </div>
      </div>
    </nav>
  );
}
```

---

### Task 8: Create Color Bar Component

**Files:**
- Create: `components/ColorBar.tsx`

**Step 1: Create the component**

```tsx
export function ColorBar() {
  return (
    <div className="flex w-full h-2">
      <div className="flex-1 bg-coral" />
      <div className="flex-1 bg-gold" />
      <div className="flex-1 bg-taupe" />
      <div className="flex-1 bg-mocha" />
    </div>
  );
}
```

---

## Phase 3: Page Sections

### Task 9: Create Hero Section

**Files:**
- Create: `components/Hero.tsx`

**Step 1: Create the component**

```tsx
'use client';

import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';

export function Hero() {
  return (
    <section className="pt-32 pb-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge variant="secondary" className="mb-4 text-sm">
              It&apos;s me
            </Badge>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-4">
              Ricci Dylan
              <br />
              Andrada
            </h1>
            <p className="font-mono text-muted-foreground text-sm tracking-widest uppercase mb-6">
              Software Engineer
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-md">
              Building scalable web applications and microservices at ADP.
              Currently pursuing MS in Computer Science at Georgia Tech.
              Passionate about creating products that solve real problems.
            </p>
          </motion.div>

          {/* Right - Illustration Placeholder */}
          <motion.div
            className="flex justify-center md:justify-end"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative">
              <div className="w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-3xl overflow-hidden shadow-card bg-gradient-to-br from-coral/20 to-gold/20 flex items-center justify-center border border-border">
                <span className="text-6xl md:text-7xl font-bold text-coral/30">
                  RD
                </span>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-taupe/30 rounded-2xl -z-10" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
```

---

### Task 10: Create README Card Section

**Files:**
- Create: `components/ReadmeCard.tsx`

**Step 1: Create the component**

```tsx
'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

const readmeItems = [
  { label: 'Building', value: '[Your current project]' },
  { label: 'Scaling', value: '[Project you\'re growing]' },
  { label: 'Interested in', value: '[Tech interest]' },
  { label: 'Leisure', value: '[Hobby]' },
  { label: 'Fun Fact', value: '[Something personal]' },
];

export function ReadmeCard() {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="font-mono text-sm text-muted-foreground mb-8">
            README.md
          </h2>

          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-5 gap-0">
                {/* Left - Photo Placeholder */}
                <div className="md:col-span-2 bg-gradient-to-br from-coral/10 to-gold/10 flex items-center justify-center min-h-[300px]">
                  <div className="w-48 h-48 rounded-2xl bg-secondary flex items-center justify-center">
                    <span className="text-4xl font-bold text-muted-foreground/30">
                      Photo
                    </span>
                  </div>
                </div>

                {/* Right - Info */}
                <div className="md:col-span-3 p-8">
                  <ul className="space-y-4">
                    {readmeItems.map((item) => (
                      <li key={item.label} className="flex gap-3">
                        <span className="text-coral font-medium min-w-[120px]">
                          {item.label}:
                        </span>
                        <span className="text-muted-foreground">
                          {item.value}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* README Body */}
          <div className="mt-12 max-w-3xl space-y-6 text-muted-foreground leading-relaxed">
            <p>
              [Placeholder paragraph about professional philosophy. This section should describe your approach to building software, your values as an engineer, and what drives you.]
            </p>
            <p>
              [Placeholder paragraph about technical expertise. Mention your primary tech stack, areas of specialization, and the types of problems you enjoy solving.]
            </p>
            <p>
              [Placeholder paragraph about personal interests and what you do outside of coding. This humanizes the profile and makes it more relatable.]
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
```

---

### Task 11: Update Skills Section

**Files:**
- Modify: `components/Skills.tsx`

**Step 1: Replace with new design**

```tsx
'use client';

import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';

interface SkillsProps {
  scrollToProjects: () => void;
}

const backendSkills = ['Node.js', 'C#', '.NET', 'Python', 'Go', 'PostgreSQL', 'MongoDB', 'REST APIs', 'Docker', 'AWS'];
const frontendSkills = ['React', 'Next.js', 'TypeScript', 'JavaScript', 'TailwindCSS', 'HTML/CSS', 'Framer Motion'];

export default function Skills({ scrollToProjects }: SkillsProps) {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 bg-card" id="skills">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {/* Section Header */}
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            My Top Skills
          </h2>
          <p className="text-muted-foreground mb-12">What I Do</p>

          {/* Illustration Placeholder */}
          <div className="bg-secondary/50 rounded-2xl p-12 mb-12 flex items-center justify-center min-h-[200px]">
            <span className="text-muted-foreground/50 text-lg">
              [Character illustration placeholder]
            </span>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            {/* Backend */}
            <div>
              <h3 className="text-coral font-semibold text-lg mb-4">Backend</h3>
              <div className="flex flex-wrap gap-3">
                {backendSkills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="outline"
                    className="px-4 py-2 text-sm font-medium hover:border-coral hover:text-coral transition-colors cursor-default"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Frontend */}
            <div>
              <h3 className="text-coral font-semibold text-lg mb-4">Frontend</h3>
              <div className="flex flex-wrap gap-3">
                {frontendSkills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="outline"
                    className="px-4 py-2 text-sm font-medium hover:border-coral hover:text-coral transition-colors cursor-default"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* CTA Link */}
          <button
            onClick={scrollToProjects}
            className="inline-flex items-center gap-2 text-coral font-semibold text-lg hover:gap-4 transition-all group"
          >
            SEE MY WORKS
            <span className="group-hover:translate-x-2 transition-transform">→</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
```

---

### Task 12: Update Projects Section

**Files:**
- Modify: `components/Projects.tsx`

**Step 1: Replace with shadcn Card design**

```tsx
'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string;
  gradient: string;
}

const projects: Project[] = [
  {
    title: 'Hively',
    description: 'Multi-tenant SaaS platform for service vendors with booking, payments, and lead management.',
    tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'Stripe'],
    github: 'https://github.com/RicciDylanAndrada/Hively',
    gradient: 'from-coral to-gold',
  },
  {
    title: 'Tailored',
    description: 'AI-powered resume optimizer that tailors your experience to match job descriptions.',
    tech: ['Next.js', 'TypeScript', 'AI/ML'],
    github: 'https://github.com/RicciDylanAndrada/tailored-',
    gradient: 'from-muted-grey to-charcoal',
  },
  {
    title: 'Hively Landing',
    description: 'Marketing website for Hively with modern design and clear call-to-actions.',
    tech: ['Next.js', 'TypeScript', 'Tailwind'],
    github: 'https://github.com/RicciDylanAndrada/Hively-Landing-Page',
    gradient: 'from-taupe to-coral',
  },
  {
    title: 'NextJS + Go',
    description: 'Full-stack application with Go backend and Next.js frontend demonstrating modern architecture.',
    tech: ['Next.js', 'Go', 'REST API'],
    github: 'https://github.com/RicciDylanAndrada/NextJSGo',
    gradient: 'from-charcoal to-muted-grey',
  },
];

export default function Projects() {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 bg-background" id="works">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {/* Section Header */}
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            My Works
          </h2>
          <p className="text-muted-foreground mb-12">Web Applications</p>

          {/* Project Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.a
                key={project.title}
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="overflow-hidden shadow-card hover:shadow-card-hover hover:-translate-y-2 transition-all duration-300">
                  {/* Thumbnail */}
                  <div className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
                    <span className="text-4xl font-bold text-white/90 group-hover:scale-110 transition-transform">
                      {project.title}
                    </span>
                  </div>

                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-coral transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
```

---

### Task 13: Create Resume Banner Component

**Files:**
- Create: `components/ResumeBanner.tsx`

**Step 1: Create the component**

```tsx
'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

export function ResumeBanner() {
  return (
    <section className="py-12 px-6 md:px-12 lg:px-24 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Card className="bg-secondary">
            <CardContent className="p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-lg md:text-xl text-foreground">
                I cook with these ingredients 👉
              </p>
              <a
                href="/Ricci_Andrada_SWE_2026.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl md:text-2xl font-bold text-coral hover:underline"
              >
                MY RESUME
              </a>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
```

---

### Task 14: Update Footer Component

**Files:**
- Modify: `components/Contact.tsx` → Rename to `components/Footer.tsx`

**Step 1: Delete old Contact.tsx and create Footer.tsx**

```tsx
'use client';

import Link from 'next/link';
import { ColorBar } from './ColorBar';

export function Footer() {
  return (
    <footer className="bg-charcoal" id="contact">
      <div className="py-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">
          {/* Main Contact Area */}
          <div className="text-center mb-16">
            <p className="text-taupe mb-4">📍 New Jersey, USA</p>
            <a
              href="mailto:andradariccidylan@gmail.com"
              className="text-2xl md:text-3xl font-bold text-white hover:text-coral transition-colors"
            >
              andradariccidylan@gmail.com
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-12">
            <a
              href="https://github.com/RicciDylanAndrada"
              target="_blank"
              rel="noopener noreferrer"
              className="text-taupe hover:text-coral hover:scale-110 transition-all"
              aria-label="GitHub"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a
              href="https://linkedin.com/in/riccidylan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-taupe hover:text-coral hover:scale-110 transition-all"
              aria-label="LinkedIn"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-taupe hover:text-coral hover:scale-110 transition-all lg:hidden"
              aria-label="Twitter"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Logo */}
            <div className="text-xl font-bold text-white">
              ricci<span className="text-coral">.</span>
            </div>

            {/* Nav Links */}
            <div className="flex gap-6 text-taupe text-sm">
              <a href="#works" className="hover:text-coral transition-colors">works</a>
              <a href="/Ricci_Andrada_SWE_2026.pdf" target="_blank" className="hover:text-coral transition-colors">resume</a>
              <Link href="/shelf" className="hover:text-coral transition-colors">shelf</Link>
            </div>

            {/* Copyright */}
            <p className="text-taupe/60 text-sm">
              © 2026 Ricci Dylan Andrada
            </p>
          </div>
        </div>
      </div>

      {/* Color Bar */}
      <ColorBar />
    </footer>
  );
}
```

---

### Task 15: Update Main Home Component

**Files:**
- Modify: `components/Home.tsx`

**Step 1: Replace with new structure**

```tsx
'use client';

import { useRef } from 'react';
import Navbar from './Navbar';
import { SocialSidebar } from './SocialSidebar';
import { FloatingCTA } from './FloatingCTA';
import { Hero } from './Hero';
import { ReadmeCard } from './ReadmeCard';
import Skills from './Skills';
import Projects from './Projects';
import { ResumeBanner } from './ResumeBanner';
import { Footer } from './Footer';

export default function Home() {
  const projectsRef = useRef<HTMLDivElement>(null);

  const scrollToProjects = () => {
    projectsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar scrollToProjects={scrollToProjects} />
      <SocialSidebar />
      <FloatingCTA />

      <Hero />
      <ReadmeCard />
      <Skills scrollToProjects={scrollToProjects} />
      <div ref={projectsRef}>
        <Projects />
      </div>
      <ResumeBanner />
      <Footer />
    </div>
  );
}
```

---

## Phase 4: Shelf Page

### Task 16: Create Shelf Page

**Files:**
- Create: `app/shelf/page.tsx`

**Step 1: Create the shelf page**

```tsx
'use client';

import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ThemeToggle } from '@/components/ThemeToggle';
import { ColorBar } from '@/components/ColorBar';
import Link from 'next/link';

const shelfItems = [
  {
    title: '[Book Title]',
    description: 'Placeholder description for a recommended book.',
    category: 'Book',
  },
  {
    title: '[Tool Name]',
    description: 'Placeholder description for a useful tool.',
    category: 'Tool',
  },
  {
    title: '[Course Title]',
    description: 'Placeholder description for an online course.',
    category: 'Course',
  },
  {
    title: '[Resource Name]',
    description: 'Placeholder description for a helpful resource.',
    category: 'Resource',
  },
];

export default function ShelfPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b border-border/50">
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-24 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-foreground">
            ricci<span className="text-coral">.</span>
          </Link>
          <div className="flex items-center gap-4 md:gap-6">
            <ThemeToggle />
            <Link href="/#works" className="text-foreground font-medium hover:text-coral transition-colors">
              works
            </Link>
            <a
              href="/Ricci_Andrada_SWE_2026.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground font-medium hover:text-coral transition-colors"
            >
              resume
            </a>
            <span className="text-coral font-medium">shelf</span>
          </div>
        </div>
      </nav>

      {/* Content */}
      <main className="pt-32 pb-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              My Shelf
            </h1>
            <p className="text-muted-foreground text-lg mb-12 max-w-2xl">
              A collection of books, tools, courses, and resources that have shaped my thinking and helped me grow as an engineer.
            </p>

            {/* Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {shelfItems.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300">
                    <CardContent className="p-6">
                      <Badge variant="outline" className="mb-4 text-coral border-coral">
                        {item.category}
                      </Badge>
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-charcoal">
        <div className="py-8 px-6 md:px-12 lg:px-24">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <Link href="/" className="text-xl font-bold text-white">
              ricci<span className="text-coral">.</span>
            </Link>
            <p className="text-taupe/60 text-sm">
              © 2026 Ricci Dylan Andrada
            </p>
          </div>
        </div>
        <ColorBar />
      </footer>
    </div>
  );
}
```

---

## Phase 5: Cleanup & Verification

### Task 17: Delete Old Contact Component

**Files:**
- Delete: `components/Contact.tsx`

**Step 1: Remove the file**

Run:
```bash
rm components/Contact.tsx
```

---

### Task 18: Final Build Verification

**Step 1: Run build**

Run:
```bash
npm run build
```
Expected: Build succeeds with no errors

**Step 2: Run dev server and verify**

Run:
```bash
npm run dev
```

Verify:
- [ ] Homepage loads with new design
- [ ] Dark mode toggle works
- [ ] Social sidebar visible on desktop
- [ ] Floating CTA button positioned correctly
- [ ] All sections render (Hero, README, Skills, Projects, Resume Banner, Footer)
- [ ] Color bar appears at bottom
- [ ] Shelf page accessible at /shelf
- [ ] Smooth scroll works on nav links
- [ ] All links work (resume PDF, GitHub, LinkedIn)

---

## Summary

**Total Tasks:** 18
**Estimated Components:** 12 new/modified
**New Dependencies:** 4 (@studio-freight/lenis, next-themes, @fontsource/inter, @fontsource-variable/jetbrains-mono)
**New Pages:** 1 (/shelf)
