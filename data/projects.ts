import type { Project } from "@/types/project"

export const projects: Project[] = [
  {
    id: "1",
    title: "Welth-Finance Management",
    description:
      "Developed Welth, a finance management platform that enables users to track expenses, manage budgets, and receive budget alerts. The platform supports features like receipt scanning, recurring transactions, and email notifications to enhance financial planning.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["Next.js", "React", "Tailwind CSS", "Node.js", "Prisma", "PostgreSQL"],
    category: "fullstack",
    liveUrl: "https://welth-finance-chi.vercel.app/",
    githubUrl: "https://github.com/Jasonwill2004/Walleta",
  },
  {
    id: "2",
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates. Users can create projects, assign tasks, set deadlines, and track progress with interactive charts.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Socket.io"],
    category: "fullstack",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    id: "3",
    title: "Portfolio Website",
    description:
      "A creative developer portfolio showcasing projects and skills with beautiful animations and interactions using Framer Motion.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["Next.js", "Framer Motion", "Tailwind CSS", "TypeScript"],
    category: "frontend",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    id: "4",
    title: "Weather Dashboard",
    description:
      "A weather dashboard that displays current weather conditions and forecasts for multiple locations. Features include interactive maps, charts, and location search.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["React", "Chart.js", "OpenWeather API", "Mapbox"],
    category: "frontend",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    id: "5",
    title: "Content Management System",
    description:
      "A headless CMS built with Node.js and GraphQL. Allows content creators to manage and publish content across multiple platforms with a user-friendly interface.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["Node.js", "GraphQL", "MongoDB", "React", "Apollo"],
    category: "backend",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    id: "6",
    title: "Social Media Dashboard",
    description:
      "A comprehensive dashboard for social media management with analytics, scheduling, and content planning features. Integrates with multiple social platforms.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["React", "Redux", "Express", "PostgreSQL", "Chart.js"],
    category: "fullstack",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
]
