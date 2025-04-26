"use client";

import Image from "next/image";
import AnimatedText from "@/components/animations/animated-text";
import { AnimatePresence, motion } from "framer-motion";
import AnimatedSection from "@/components/animations/animated-section";

export default function AboutPageClient() {
  return (
    <main className="container mx-auto px-4 py-24">
      <AnimatePresence>
        <motion.div
          key="about-page"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="mb-12 text-center">
            <AnimatedText
              text="About Me"
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
              once={false}
            />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Get to know more about my journey, skills, and passion for
              development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <AnimatedSection className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden">
              <Image
                src="/jason2.png?height=500&width=500"
                alt="Profile"
                fill
                className="object-cover"
              />
            </AnimatedSection>

            <AnimatedSection delay={0.2} className="space-y-6">
              <h2 className="text-2xl font-bold">Jason William</h2>
              <p className="text-muted-foreground">
                A passionate B. Tech CSE student with expertise and a
                demonstrated ability to solve problems using Python. Proven
                track record in creating interactive applications, showcasing
                strong Full-Stack Development skills as well as teamwork skills
                by actively participating in hackathons and contributing to
                Open-Source projects.
              </p>
              <p className="text-muted-foreground">
                My approach combines technical expertise with creative
                problem-solving to deliver solutions that are not only
                functional but also visually stunning and engaging.
              </p>
              <p className="text-muted-foreground">
                When I'm not coding, you can find me exploring new technologies,
                participating in hackathons, and contributing to open-source
                projects to further enhance my skills and give back to the
                community.
              </p>
            </AnimatedSection>
          </div>
        </motion.div>
      </AnimatePresence>
    </main>
  );
}
