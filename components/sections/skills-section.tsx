"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import AnimatedSection from "@/components/animations/animated-section"
import SkillBar from "@/components/skills/skill-bar"
import { skills } from "@/data/skills"

export default function SkillsSection() {
  const [activeTab, setActiveTab] = useState("all")

  const filteredSkills = activeTab === "all" ? skills : skills.filter((skill) => skill.category === activeTab)

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and expertise
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2} className="mb-12">
          <Tabs defaultValue="all" className="w-full max-w-3xl mx-auto">
            <TabsList className="grid grid-cols-4 mb-8">
              <TabsTrigger value="all" onClick={() => setActiveTab("all")}>
                All
              </TabsTrigger>
              <TabsTrigger value="frontend" onClick={() => setActiveTab("frontend")}>
                Frontend
              </TabsTrigger>
              <TabsTrigger value="backend" onClick={() => setActiveTab("backend")}>
                Backend
              </TabsTrigger>
              <TabsTrigger value="tools" onClick={() => setActiveTab("tools")}>
                Tools
              </TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="space-y-4">
              <motion.div layout className="space-y-4">
                {filteredSkills.map((skill, index) => (
                  <SkillBar key={skill.name} skill={skill} index={index} />
                ))}
              </motion.div>
            </TabsContent>

            <TabsContent value="frontend" className="space-y-4">
              <motion.div layout className="space-y-4">
                {filteredSkills.map((skill, index) => (
                  <SkillBar key={skill.name} skill={skill} index={index} />
                ))}
              </motion.div>
            </TabsContent>

            <TabsContent value="backend" className="space-y-4">
              <motion.div layout className="space-y-4">
                {filteredSkills.map((skill, index) => (
                  <SkillBar key={skill.name} skill={skill} index={index} />
                ))}
              </motion.div>
            </TabsContent>

            <TabsContent value="tools" className="space-y-4">
              <motion.div layout className="space-y-4">
                {filteredSkills.map((skill, index) => (
                  <SkillBar key={skill.name} skill={skill} index={index} />
                ))}
              </motion.div>
            </TabsContent>
          </Tabs>
        </AnimatedSection>
      </div>
    </section>
  )
}
