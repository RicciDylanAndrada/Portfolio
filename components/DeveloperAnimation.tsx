'use client';

import { motion } from 'framer-motion';

export function DeveloperAnimation() {
  return (
    <div className="relative w-full h-[300px] flex items-center justify-center">
      {/* Desk */}
      <div className="absolute bottom-8 w-80 h-3 bg-taupe rounded-full" />

      {/* Monitor */}
      <motion.div
        className="absolute bottom-12 w-64 h-40 bg-charcoal rounded-xl border-4 border-charcoal overflow-hidden"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Screen */}
        <div className="w-full h-full bg-[#1e1e1e] p-3 font-mono text-xs">
          {/* Code lines animation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <motion.div
              className="flex gap-2 mb-1"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <span className="text-purple-400">const</span>
              <span className="text-blue-300">developer</span>
              <span className="text-white">=</span>
              <span className="text-yellow-300">{`{`}</span>
            </motion.div>

            <motion.div
              className="flex gap-2 mb-1 pl-4"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <span className="text-green-300">name:</span>
              <span className="text-coral">&quot;Dylan&quot;</span>
              <span className="text-white">,</span>
            </motion.div>

            <motion.div
              className="flex gap-2 mb-1 pl-4"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1.0 }}
            >
              <span className="text-green-300">role:</span>
              <span className="text-coral">&quot;SWE&quot;</span>
              <span className="text-white">,</span>
            </motion.div>

            <motion.div
              className="flex gap-2 mb-1 pl-4"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              <span className="text-green-300">coffee:</span>
              <span className="text-orange-300">true</span>
              <span className="text-white">,</span>
            </motion.div>

            <motion.div
              className="flex gap-2 mb-1"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1.4 }}
            >
              <span className="text-yellow-300">{`}`}</span>
              <span className="text-white">;</span>
            </motion.div>
          </motion.div>

          {/* Cursor blink */}
          <motion.div
            className="w-2 h-4 bg-coral"
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          />
        </div>
      </motion.div>

      {/* Monitor Stand */}
      <div className="absolute bottom-8 w-8 h-4 bg-charcoal" />
      <div className="absolute bottom-6 w-16 h-2 bg-charcoal rounded-full" />

      {/* Keyboard */}
      <motion.div
        className="absolute bottom-10 left-1/2 translate-x-8 w-24 h-8 bg-charcoal rounded-md"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        {/* Keys */}
        <div className="p-1.5 grid grid-cols-8 gap-0.5">
          {[...Array(16)].map((_, i) => (
            <motion.div
              key={i}
              className="w-2 h-2 bg-muted-grey/30 rounded-sm"
              animate={{
                backgroundColor: ['rgba(110,110,115,0.3)', 'rgba(244,162,97,0.5)', 'rgba(110,110,115,0.3)']
              }}
              transition={{
                duration: 0.3,
                delay: 1.5 + (Math.random() * 2),
                repeat: Infinity,
                repeatDelay: Math.random() * 3
              }}
            />
          ))}
        </div>
      </motion.div>

      {/* Coffee Cup */}
      <motion.div
        className="absolute bottom-10 right-1/4"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.4, type: 'spring' }}
      >
        <div className="w-6 h-8 bg-coral rounded-b-lg rounded-t-sm relative">
          {/* Handle */}
          <div className="absolute -right-2 top-1 w-3 h-4 border-2 border-coral rounded-r-full" />
          {/* Steam */}
          <motion.div
            className="absolute -top-3 left-1 w-1 h-3 bg-muted-grey/30 rounded-full"
            animate={{ y: [-2, -6], opacity: [0.5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
          <motion.div
            className="absolute -top-2 left-3 w-1 h-2 bg-muted-grey/30 rounded-full"
            animate={{ y: [-2, -5], opacity: [0.5, 0] }}
            transition={{ duration: 1.2, repeat: Infinity, delay: 0.3 }}
          />
        </div>
      </motion.div>

  
    </div>
  );
}
