'use client';

import { motion } from 'framer-motion';
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
    description: 'Marketing website for Hively.',
    tech: ['Next.js', 'TypeScript', 'Tailwind'],
    github: 'https://github.com/RicciDylanAndrada/Hively-Landing-Page',
    gradient: 'from-taupe to-coral',
  },
  {
    title: 'AI Transcribe',
    description: 'Audio transcription app powered by AI for Clinicians to transcribe patient notes.',
    tech: ['Next.js', 'TypeScript', 'AI/ML'],
    github: 'https://github.gatech.edu/randrada3/Ai-Transcription',
    gradient: 'from-charcoal to-muted-grey',
  },
];

export default function Projects() {
  return (
    <section className="p-8 md:p-12 lg:p-16 border-t border-border" id="works">
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
              className="group block rounded-xl overflow-hidden border border-border hover:shadow-card-hover hover:-translate-y-2 transition-all duration-300"
            >
              {/* Thumbnail */}
              <div className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
                <span className="text-4xl font-bold text-white/90 group-hover:scale-110 transition-transform">
                  {project.title}
                </span>
              </div>

              <div className="p-6 bg-card">
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
              </div>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
