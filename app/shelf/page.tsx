'use client';

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
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b border-border/50">
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-24 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-foreground">
            dylan<span className="text-coral">.</span>
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
              dylan<span className="text-coral">.</span>
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
