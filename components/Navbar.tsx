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
          dylan<span className="text-coral">.</span>
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
