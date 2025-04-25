import type { Metadata } from "next"
import AboutPageClient from "./AboutPageClient"

export const metadata: Metadata = {
  title: "About | Creative Developer Portfolio",
  description: "Learn more about my background, skills, and experience",
}

export default function AboutPage() {
  return <AboutPageClient />
}
