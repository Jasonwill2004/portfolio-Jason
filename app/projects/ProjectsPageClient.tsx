"use client"

import ProjectsGrid from "@/components/projects/projects-grid"
import AnimatedText from "@/components/animations/animated-text"
import { AnimatePresence } from "framer-motion"

export default function ProjectsPageClient() {
  return (
    <main className="container mx-auto px-4 py-24">
      <AnimatePresence mode="wait">
        <div className="mb-12 text-center">
          <AnimatedText text="My Projects" className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4" once={false} />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore my latest work showcasing creative development and design skills
          </p>
        </div>
        <ProjectsGrid />
      </AnimatePresence>
    </main>
  )
}
