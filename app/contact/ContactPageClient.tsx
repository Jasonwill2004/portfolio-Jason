"use client"

import ContactForm from "@/components/contact/contact-form"
import AnimatedText from "@/components/animations/animated-text"
import { AnimatePresence } from "framer-motion"
import AnimatedBackground from "@/components/animations/animated-background"

export default function ContactPageClient() {
  return (
    <main className="container mx-auto px-4 py-24 relative overflow-hidden">
      <AnimatedBackground />
      <AnimatePresence mode="wait">
        <div className="mb-12 text-center relative z-10">
          <AnimatedText text="Get in Touch" className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4" once={false} />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Let's talk!
          </p>
        </div>
        <div className="max-w-2xl mx-auto relative z-10">
          <ContactForm />
        </div>
      </AnimatePresence>
    </main>
  )
}
