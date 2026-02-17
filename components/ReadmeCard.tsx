'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const readmeItems = [
  { label: 'Building', value: 'Abide - a Christian-based mood journaling app' },
  { label: 'Scaling', value: 'Hively' },
  { label: 'Interested in', value: 'Enhancing workflows with AI & curating agentic systems' },
  { label: 'Leisure', value: 'Fitness, reading, videography & photography' },
  { label: 'Fun Fact', value: 'I have a golden retriever named Nala 🐕' },
];

export function ReadmeCard() {
  return (
    <section className="p-8 md:p-12 lg:p-16 border-t border-border">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="font-mono text-sm text-muted-foreground mb-8">
          README.md
        </h2>

        <div className="grid md:grid-cols-5 gap-8">
          {/* Left - Pixel Art Portrait */}
          <div className="md:col-span-2 flex items-start justify-center">
            <div className="relative w-48 h-48 rounded-2xl overflow-hidden bg-white border-2 border-border">
              <Image 
                src="/pixel-portrait.png" 
                alt="Dylan pixel art portrait"
                width={192}
                height={192}
                className="object-contain"
                style={{ imageRendering: 'pixelated' }}
              />
            </div>
          </div>

          {/* Right - Info */}
          <div className="md:col-span-3">
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

        {/* README Body */}
        <div className="mt-12 max-w-3xl space-y-6 text-muted-foreground leading-relaxed">
          <p>
            Software engineer at ADP, grad student at Georgia Tech. I like building products that solve real problems and shipping things that work.
          </p>
          <p>
            Outside of work, I spend time at the gym, reading, and messing around with photography and video. Nala keeps me company.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
