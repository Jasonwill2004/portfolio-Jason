"use client"

import ProjectsGrid from "@/components/projects/projects-grid"
import AnimatedText from "@/components/animations/animated-text"
import { AnimatePresence, motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function ProjectsPageClient() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <main className="container mx-auto px-4 py-24">
      <AnimatePresence mode="wait">
        {isVisible && (
          <motion.div
            key="content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-12 text-center">
              <AnimatedText 
                text="My Projects" 
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4" 
                once={false} 
              />
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Explore my latest work showcasing creative development and design skills
              </p>
            </div>
            <ProjectsGrid />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}