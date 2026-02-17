'use client';

import { motion } from 'framer-motion';

export function ResumeBanner() {
  return (
    <section className="p-8 md:p-12 lg:p-16 border-t border-border">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="bg-secondary rounded-xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-lg md:text-xl text-foreground">
            I cook with these ingredients
          </p>
          <a
            href="/Ricci_Andrada_SWE_2026.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl md:text-2xl font-bold text-coral hover:underline"
          >
            MY RESUME
          </a>
        </div>
      </motion.div>
    </section>
  );
}
