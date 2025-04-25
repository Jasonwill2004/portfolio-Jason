import type { Metadata } from "next"
import HeroSection from "@/components/sections/hero-section"
import ProjectsSection from "@/components/sections/projects-section"
import SkillsSection from "@/components/sections/skills-section"
import ContactSection from "@/components/sections/contact-section"
import AnimatedCursor from "@/components/animations/animated-cursor"

export const metadata: Metadata = {
  title: "Portfolio | Creative Developer",
  description: "A creative developer portfolio showcasing projects and skills with beautiful animations",
}

export default function Home() {
  return (
    <main className="relative">
      <AnimatedCursor />
      <HeroSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
    </main>
  )
}
