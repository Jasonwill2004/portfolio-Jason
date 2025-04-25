"use client"

import { useRef,useMemo,useState,useEffect } from "react"
import { motion, useScroll, useTransform, useMotionTemplate } from "framer-motion"
import Link from "next/link"
import { ArrowDown, Github, Linkedin, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import AnimatedText from "@/components/animations/animated-text"

export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  const circles = useMemo(() => {
    return Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      width: 50 + ((i * 47) % 300),
      height: 50 + ((i * 73) % 300),
      top: (i * 17) % 100,
      left: (i * 23) % 100,
      animateX: ((i * 37) % 100) - 50,
      animateY: ((i * 41) % 100) - 50,
      duration: 10 + (i % 10)
    }))
  }, [])

  const socialLinks = [
    { name: "GitHub", url: "https://github.com" },
    { name: "LinkedIn", url: "https://linkedin.com" },
    { name: "Twitter", url: "https://twitter.com" },
  ]

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      const x = (clientX / window.innerWidth) * 100
      const y = (clientY / window.innerHeight) * 100
      setMousePosition({ x, y })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const mouseX = useMotionTemplate`${mousePosition.x}%`
  const mouseY = useMotionTemplate`${mousePosition.y}%`

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background -z-20" />
      
      {/* Radial gradient that follows mouse */}
      <div 
        className="absolute inset-0 bg-gradient-radial from-primary/5 to-transparent opacity-50 -z-10"
        style={{
          background: `radial-gradient(600px circle at ${mouseX} ${mouseY}, var(--primary)/5%, transparent 40%)`
        }}
      />

      {/* Animated circles background */}
      <div className="absolute inset-0 -z-10">
        {circles.map((circle) => (
          <motion.div
            key={circle.id}
            className="absolute rounded-full bg-primary/5 backdrop-blur-[1px]"
            style={{
              width: `${circle.width}px`,
              height: `${circle.height}px`,
              top: `${circle.top}%`,
              left: `${circle.left}%`,
            }}
            animate={{
              x: [0, circle.animateX, 0],
              y: [0, circle.animateY, 0],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: circle.duration,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <motion.div className="container mx-auto px-4 text-center z-10" style={{ y, opacity }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <span className="inline-flex items-center px-4 py-2 text-sm bg-primary/10 text-primary rounded-full mb-4 backdrop-blur-sm border border-primary/20 shadow-lg shadow-primary/5 hover:shadow-primary/10 transition-all duration-300">
            <span className="relative flex h-2 w-2 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Full-Stack Developer
          </span>
        </motion.div>

        <AnimatedText
          text="Jason William"
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 mx-auto bg-gradient-to-r from-foreground via-primary/50 to-foreground bg-clip-text text-transparent flex items-center justify-center"
          staggerChildren={0.05}
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8 p-4 "
        >
          A passionate B. Tech CSE student with expertise in Full-Stack Development and problem-solving using Python.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <Button 
            asChild 
            size="lg"
            className="relative group overflow-hidden bg-gradient-to-r from-primary to-primary/80 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-primary/25"
          >
            <Link href="/projects">
              View Projects
              <motion.div
                className="absolute inset-0 bg-primary/20"
                initial={{ x: "100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </Link>
          </Button>
          <Button 
            asChild 
            variant="outline" 
            size="lg"
            className="group hover:scale-105 transition-all duration-300 border-primary/20 hover:border-primary/40 shadow-lg hover:shadow-primary/20"
          >
            <Link href="/contact" className="relative">
              Contact Me
              <span className="absolute -bottom-px left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
            </Link>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="flex justify-center gap-6"
        >
          {socialLinks.map((link, index) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 1 + index * 0.1 }}
              whileHover={{ y: -5, scale: 1.1 }}
              className="p-3 rounded-full bg-foreground/5 backdrop-blur-sm hover:bg-primary/10 transition-all duration-300 border border-foreground/10 hover:border-primary/20"
            >
              <Link
                href={link.url}
                className="text-muted-foreground hover:text-primary transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.name === "GitHub" && <Github className="w-5 h-5" />}
                {link.name === "LinkedIn" && <Linkedin className="w-5 h-5" />}
                {link.name === "Twitter" && <Twitter className="w-5 h-5" />}
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div 
          animate={{ y: [0, 10, 0] }} 
          transition={{ duration: 1.5, repeat: Infinity }}
          className="p-3 rounded-full bg-foreground/5 backdrop-blur-sm hover:bg-primary/10 transition-colors border border-foreground/10 hover:border-primary/20 cursor-pointer"
          whileHover={{ scale: 1.1 }}
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        >
          <ArrowDown className="h-6 w-6 text-primary" />
        </motion.div>
      </motion.div>
    </section>
  )
}
