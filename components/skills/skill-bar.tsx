"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Info } from "lucide-react"
import type { Skill } from "@/types/skill"

interface SkillBarProps {
  skill: Skill
  index: number
}

export default function SkillBar({ skill, index }: SkillBarProps) {
  const [showInfo, setShowInfo] = useState(false)

  // Function to determine level text
  const getLevelText = (level: number) => {
    if (level >= 90) return "Advanced"
    if (level >= 70) return "Intermediate"
    return "Beginner"
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      viewport={{ once: true }}
      className="relative"
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center">
          <h3 className="font-medium">{skill.name}</h3>
          <button
            className="ml-2 text-muted-foreground hover:text-foreground transition-colors"
            onClick={() => setShowInfo(!showInfo)}
            aria-label={`Show more information about ${skill.name}`}
          >
            <Info className="h-4 w-4" />
          </button>
        </div>
        <span className="text-sm text-muted-foreground">{getLevelText(skill.level)}</span>
      </div>

      <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-primary"
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          transition={{ duration: 1, delay: 0.2 + index * 0.05 }}
          viewport={{ once: true }}
        />
      </div>

      <AnimatePresence>
        {showInfo && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-2 text-sm text-muted-foreground bg-muted/50 p-3 rounded-md"
          >
            {skill.description}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
