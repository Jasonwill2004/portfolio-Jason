import type { Project } from "@/types/project"

export const projects: Project[] = [
  {
    id: "1",
    title: "Welth-Finance Management",
    description:
      "Developed Welth, a finance management platform that enables users to track expenses, manage budgets, and receive budget alerts. The platform supports features like receipt scanning, recurring transactions, and email notifications to enhance financial planning.",
    image: "/welth1.png?height=300&width=500",
    technologies: ["Next.js", "React", "Tailwind CSS", "Node.js", "Prisma", "PostgreSQL"],
    category: "fullstack",
    liveUrl: "https://welth-finance-chi.vercel.app/",
    githubUrl: "https://github.com/Jasonwill2004/Walleta",
  },
  {
    id: "2",
    title: "Trackit Website",
    description:
      "The Trackit is a web application designed to provide users with information about the highest, lowest, and average prices of any product linked from any platform. Whether you're a savvy shopper looking for the best deal or a seller trying to gauge market trends, this tool can help you make informed decisions.",
    image: "/trackit.png?height=300&width=500",
    technologies: ["Next.js", "Nodemailer","Cronjobs", "Tailwind CSS", "TypeScript"],
    category: "frontend",
    liveUrl: "https://track-it-up.vercel.app/",
    githubUrl: "https://github.com/harsha-1807/Trackit",
  },
  {
    id: "3",
    title: "BookReview-Book Summarization",
    description:
      "Developed BookReview, a web application as a capstone that uses innovative summarization techniques to deliver key concepts from books in just 10 minutes. This user-friendly platform caters to busy individuals and those new to reading, offering personalized recommendations and a curated library",
    image: "/book1.png?height=300&width=500",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Socket.io"],
    category: "fullstack",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/kalviumcommunity/S53_JasonWilliam_Capstone_BookReview",
  },
]
//   {
//     id: "4",
//     title: "Weather Dashboard",
//     description:
//       "A weather dashboard that displays current weather conditions and forecasts for multiple locations. Features include interactive maps, charts, and location search.",
//     image: "/placeholder.svg?height=300&width=500",
//     technologies: ["React", "Chart.js", "OpenWeather API", "Mapbox"],
//     category: "frontend",
//     liveUrl: "https://example.com",
//     githubUrl: "https://github.com",
//   },
//   {
//     id: "5",
//     title: "Content Management System",
//     description:
//       "A headless CMS built with Node.js and GraphQL. Allows content creators to manage and publish content across multiple platforms with a user-friendly interface.",
//     image: "/placeholder.svg?height=300&width=500",
//     technologies: ["Node.js", "GraphQL", "MongoDB", "React", "Apollo"],
//     category: "backend",
//     liveUrl: "https://example.com",
//     githubUrl: "https://github.com",
//   },
//   {
//     id: "6",
//     title: "Social Media Dashboard",
//     description:
//       "A comprehensive dashboard for social media management with analytics, scheduling, and content planning features. Integrates with multiple social platforms.",
//     image: "/placeholder.svg?height=300&width=500",
//     technologies: ["React", "Redux", "Express", "PostgreSQL", "Chart.js"],
//     category: "fullstack",
//     liveUrl: "https://example.com",
//     githubUrl: "https://github.com",
//   },
// ]
