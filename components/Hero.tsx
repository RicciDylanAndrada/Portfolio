'use client';

import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';

export function Hero() {
  return (
    <section className="p-8 md:p-12 lg:p-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="w-full">
          <Badge variant="secondary" className="mb-4 text-sm">
            It&apos;s me
          </Badge>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-4">
            Ricci Dylan Andrada
          </h1>
          <p className="font-mono text-muted-foreground text-sm tracking-widest uppercase mb-6">
            Software Engineer
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl">
            Building scalable web applications and microservices at ADP.
            Currently pursuing MS in Computer Science at Georgia Tech.
            Passionate about creating products that solve real problems.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
