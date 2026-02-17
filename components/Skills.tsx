'use client';

import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { DeveloperAnimation } from './DeveloperAnimation';

interface SkillsProps {
  scrollToProjects: () => void;
}

const backendSkills = ['Node.js', 'C#', '.NET', 'Python', 'Go', 'PostgreSQL', 'MongoDB', 'REST APIs', 'Docker', 'AWS'];
const frontendSkills = ['React', 'Next.js', 'TypeScript', 'JavaScript', 'TailwindCSS', 'HTML/CSS', 'Framer Motion'];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.8 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
    },
  },
};

const sectionVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      stiffness: 80,
      damping: 15,
    },
  },
};

export default function Skills({ scrollToProjects }: SkillsProps) {
  return (
    <section className="p-8 md:p-12 lg:p-16 border-t border-border" id="skills">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Section Header */}
        <motion.div variants={sectionVariants}>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            My Top Skills
          </h2>
          <p className="text-muted-foreground mb-8">What I Do</p>
        </motion.div>

        {/* Developer Animation */}
        <motion.div
          variants={sectionVariants}
          className="mb-12"
        >
          <DeveloperAnimation />
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {/* Backend */}
          <motion.div
            variants={sectionVariants}
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h3
              className="text-coral font-semibold text-lg mb-4 flex items-center gap-2"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <motion.span
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              >
                ⚙️
              </motion.span>
              Backend
            </motion.h3>
            <motion.div
              className="flex flex-wrap gap-3"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {backendSkills.map((skill) => (
                <motion.div key={skill} variants={itemVariants}>
                  <Badge
                    variant="outline"
                    className="px-4 py-2 text-sm font-medium hover:border-coral hover:text-coral hover:scale-110 transition-all cursor-default"
                  >
                    {skill}
                  </Badge>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Frontend */}
          <motion.div
            variants={sectionVariants}
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <motion.h3
              className="text-coral font-semibold text-lg mb-4 flex items-center gap-2"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
              >
                🎨
              </motion.span>
              Frontend
            </motion.h3>
            <motion.div
              className="flex flex-wrap gap-3"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {frontendSkills.map((skill) => (
                <motion.div key={skill} variants={itemVariants}>
                  <Badge
                    variant="outline"
                    className="px-4 py-2 text-sm font-medium hover:border-coral hover:text-coral hover:scale-110 transition-all cursor-default"
                  >
                    {skill}
                  </Badge>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* CTA Link */}
        <motion.button
          onClick={scrollToProjects}
          className="inline-flex items-center gap-2 text-coral font-semibold text-lg group"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{ x: 10 }}
          transition={{ type: 'spring', stiffness: 200 }}
        >
          SEE MY WORKS
          <motion.span
            animate={{ x: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            →
          </motion.span>
        </motion.button>
      </motion.div>
    </section>
  );
}
