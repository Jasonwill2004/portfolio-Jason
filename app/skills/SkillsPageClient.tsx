"use client"

import SkillsGrid from "@/components/skills/skills-grid"
import AnimatedText from "@/components/animations/animated-text"
import { AnimatePresence } from "framer-motion"

export default function SkillsPageClient() {
  return (
    <main className="container mx-auto px-4 py-24">
      <AnimatePresence mode="wait">
        <div key="skills-header" className="mb-12 text-center">
          <AnimatedText 
            text="My Skills" 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4" 
            once={false} 
          />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and expertise
          </p>
        </div>
        <div key="skills-grid">
          <SkillsGrid />
        </div>
      </AnimatePresence>
    </main>
  )
}