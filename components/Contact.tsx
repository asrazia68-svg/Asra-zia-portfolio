"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { personal, socials } from "@/data/portfolio";
import { Mail, Github, Linkedin, Send, CheckCircle2 } from "lucide-react";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // NOTE: Wire this up to Formspree or EmailJS — see README "Contact Form" section.
    // Using a placeholder success state so the UI is complete and demonstrable.
    setStatus("sent");
  }

  return (
    <section id="contact" className="py-24 md:py-32 bg-bg-secondary/40">
      <div className="section-container">
        <SectionHeading eyebrow="Get In Touch" title="Contact Me" align="center" />

        <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-center gap-5"
          >
            <p className="text-text-secondary leading-relaxed">
              Have a project in mind, an internship opportunity, or just want to talk about AI? My inbox is open.
            </p>
            <a href={socials.email} className="flex items-center gap-3 text-text-secondary hover:text-accent-highlight transition-colors">
              <Mail size={18} /> {personal.email}
            </a>
            <a href={socials.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-text-secondary hover:text-accent-highlight transition-colors">
              <Github size={18} /> GitHub
            </a>
            <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-text-secondary hover:text-accent-highlight transition-colors">
              <Linkedin size={18} /> LinkedIn
            </a>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            onSubmit={handleSubmit}
            className="glass rounded-card p-6 flex flex-col gap-4"
          >
            <div>
              <label htmlFor="name" className="block text-sm text-text-secondary mb-1.5">
                Name
              </label>
              <input
                id="name"
                required
                type="text"
                className="w-full bg-white/5 border border-border rounded-btn px-4 py-2.5 text-sm focus:border-accent-primary/50 outline-none transition-colors"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm text-text-secondary mb-1.5">
                Email
              </label>
              <input
                id="email"
                required
                type="email"
                className="w-full bg-white/5 border border-border rounded-btn px-4 py-2.5 text-sm focus:border-accent-primary/50 outline-none transition-colors"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm text-text-secondary mb-1.5">
                Message
              </label>
              <textarea
                id="message"
                required
                rows={4}
                className="w-full bg-white/5 border border-border rounded-btn px-4 py-2.5 text-sm focus:border-accent-primary/50 outline-none transition-colors resize-none"
              />
            </div>
            <button type="submit" className="btn-primary flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium text-white mt-2">
              {status === "sent" ? (
                <>
                  <CheckCircle2 size={16} /> Message Sent
                </>
              ) : (
                <>
                  <Send size={16} /> Send Message
                </>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
