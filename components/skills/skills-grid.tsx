"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import SkillBar from "@/components/skills/skill-bar"
import { skills } from "@/data/skills"

export default function SkillsGrid() {
  const [activeTab, setActiveTab] = useState("all")

  const filteredSkills = activeTab === "all" ? skills : skills.filter((skill) => skill.category === activeTab)

  return (
    <Tabs defaultValue="all" className="w-full max-w-4xl mx-auto">
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
  )
}
