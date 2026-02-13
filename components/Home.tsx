'use client';

import { useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import Navbar from './Navbar';
import { SocialSidebar } from './SocialSidebar';
import { FloatingCTA } from './FloatingCTA';
import { Hero } from './Hero';
import { ReadmeCard } from './ReadmeCard';
import Skills from './Skills';
import Projects from './Projects';
import { Footer } from './Footer';

export default function Home() {
  const projectsRef = useRef<HTMLDivElement>(null);

  const scrollToProjects = () => {
    projectsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-offwhite dark:bg-background">
      <Navbar scrollToProjects={scrollToProjects} />
      <SocialSidebar />
      <FloatingCTA />

      {/* Main Content Card */}
      <main className="pt-24 pb-12 px-4 md:px-8 lg:px-16">
        <Card className="max-w-6xl mx-auto shadow-card">
          <CardContent className="p-0">
            <Hero />
            <ReadmeCard />
            <Skills scrollToProjects={scrollToProjects} />
            <div ref={projectsRef}>
              <Projects />
            </div>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  );
}
