"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Mail, MessageSquare, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import AnimatedSection from "@/components/animations/animated-section"
import ContactForm from "@/components/contact/contact-form"

export default function ContactSection() {
  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      value: "hello@example.com",
      link: "mailto:hello@example.com",
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      value: "+1 (555) 123-4567",
      link: "tel:+15551234567",
    },
    {
      icon: <MessageSquare className="h-6 w-6" />,
      title: "Social",
      value: "Connect on LinkedIn",
      link: "https://linkedin.com",
    },
  ]

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Let's talk!
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection direction="left" className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Contact Information</h3>
              <p className="text-muted-foreground">
                Feel free to reach out through any of these channels. I'm always open to discussing new projects,
                creative ideas, or opportunities.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-4"
                >
                  <div className="p-3 rounded-full bg-primary/10 text-primary">{item.icon}</div>
                  <div>
                    <h4 className="font-medium">{item.title}</h4>
                    <Link href={item.link} className="text-muted-foreground hover:text-primary transition-colors">
                      {item.value}
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="pt-4">
              <Button asChild size="lg">
                <Link href="/contact">Contact Page</Link>
              </Button>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right" delay={0.2} className="bg-card rounded-lg p-6 shadow-lg">
            <ContactForm />
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
