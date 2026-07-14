"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { personal, socials } from "@/data/portfolio";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: "easeOut" as const },
  }),
};

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-16">
      <div className="section-container grid md:grid-cols-2 gap-12 items-center">
        <div>
          <motion.p
            custom={0}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="font-mono text-sm text-accent-highlight mb-4 tracking-wide"
          >
            Hi, I&apos;m
          </motion.p>
          <motion.h1
            custom={1}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="font-heading font-bold text-5xl md:text-7xl leading-[1.05] mb-6"
          >
            {personal.fullName}
          </motion.h1>
          <motion.h2
            custom={2}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="font-heading text-xl md:text-2xl gradient-text font-semibold mb-6"
          >
            {personal.headline}
          </motion.h2>
          <motion.p
            custom={3}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="text-text-secondary text-lg max-w-xl mb-10 leading-relaxed"
          >
            {personal.intro}
          </motion.p>

          <motion.div custom={4} initial="hidden" animate="visible" variants={fadeUp} className="flex flex-wrap gap-4 mb-10">
            <a href="#projects" className="btn-primary px-6 py-3 font-medium text-white">
              View Projects
            </a>
            <a href="#contact" className="btn-secondary px-6 py-3 font-medium text-text-primary">
              Contact Me
            </a>
          </motion.div>

          <motion.div custom={5} initial="hidden" animate="visible" variants={fadeUp} className="flex gap-4">
            {[
              { icon: Github, href: socials.github, label: "GitHub" },
              { icon: Linkedin, href: socials.linkedin, label: "LinkedIn" },
              { icon: Mail, href: socials.email, label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                aria-label={label}
                className="w-11 h-11 rounded-full glass flex items-center justify-center text-text-secondary hover:text-accent-highlight hover:border-accent-primary/50 transition-colors"
              >
                <Icon size={18} />
              </a>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative flex justify-center"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 animate-floatY">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent-primary to-accent-highlight blur-2xl opacity-30" />
            <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-accent-primary/40 glass">
              <Image src={personal.photo} alt={personal.fullName} fill className="object-cover" priority sizes="320px" />
            </div>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll to About section"
        className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-text-muted"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity }}
      >
        <span className="text-xs font-mono">Scroll</span>
        <ArrowDown size={16} />
      </motion.a>
    </section>
  );
}
