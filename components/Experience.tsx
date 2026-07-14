"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { experience } from "@/data/portfolio";
import { Briefcase } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32 bg-bg-secondary/40">
      <div className="section-container">
        <SectionHeading eyebrow="Journey" title="Experience" />

        <div className="relative max-w-2xl">
          <div className="absolute left-5 top-2 bottom-2 w-px bg-border" />
          <div className="space-y-10">
            {experience.map((exp, i) => (
              <motion.div
                key={exp.role + exp.org}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative pl-16"
              >
                <div className="absolute left-0 top-0 w-11 h-11 rounded-full glass border-accent-primary/40 flex items-center justify-center">
                  <Briefcase size={18} className="text-accent-highlight" />
                </div>
                <div className="glass rounded-card p-6">
                  <h3 className="font-heading font-semibold text-lg mb-1">{exp.role}</h3>
                  <p className="text-accent-highlight text-sm mb-1">{exp.org}</p>
                  <p className="font-mono text-xs text-text-muted mb-4">{exp.duration}</p>
                  <ul className="space-y-1.5">
                    {exp.points.map((p) => (
                      <li key={p} className="text-sm text-text-secondary flex gap-2">
                        <span className="text-accent-highlight mt-1">▸</span>
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
