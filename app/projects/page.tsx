import type { Metadata } from "next"
import ProjectsPageClient from "./ProjectsPageClient"

export const metadata: Metadata = {
  title: "Projects | Jason William",
  description: "Explore my creative development projects with interactive animations",
}

export default function ProjectsPage() {
  return <ProjectsPageClient />
}
