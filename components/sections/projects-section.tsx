"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import AnimatedSection from "@/components/animations/animated-section"
import ProjectCard from "@/components/projects/project-card"
import { projects } from "@/data/projects"

export default function ProjectsSection() {
  const [visibleProjects, setVisibleProjects] = useState(3)

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore my latest work showcasing creative development and design skills
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.slice(0, visibleProjects).map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          {visibleProjects < projects.length ? (
            <Button onClick={() => setVisibleProjects(projects.length)} variant="outline" size="lg">
              View All Projects
            </Button>
          ) : (
            <Button asChild variant="default" size="lg">
              <Link href="/projects">Explore Projects</Link>
            </Button>
          )}
        </motion.div>
      </div>
    </section>
  )
}
