import type { Metadata } from "next"
import SkillsPageClient from "./SkillsPageClient"

export const metadata: Metadata = {
  title: "Skills | Creative Developer Portfolio",
  description: "Explore my technical skills and expertise in web development",
}

export default function SkillsPage() {
  return <SkillsPageClient />
}
