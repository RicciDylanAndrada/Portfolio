'use client';

import { motion } from 'framer-motion';

export function FloatingCTA() {
  return (
    <motion.a
      href="mailto:andradariccidylan@gmail.com"
      className="fixed z-50 lg:bottom-auto lg:right-12 lg:top-1/2 lg:-translate-y-1/2 bottom-6 right-6 w-24 h-24 lg:w-28 lg:h-28 rounded-full bg-coral text-white flex items-center justify-center text-center font-medium text-sm shadow-lg hover:shadow-xl transition-all duration-300"
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
