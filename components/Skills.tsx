"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { skills } from "@/data/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 bg-bg-secondary/40">
      <div className="section-container">
        <SectionHeading eyebrow="Tech Stack" title="Skills & Tools" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skills).map(([category, items], i) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="glass rounded-card p-6 hover:border-accent-primary/40 transition-colors"
            >
              <p className="font-mono text-xs text-accent-highlight uppercase tracking-widest mb-4">{category}</p>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="text-sm px-3 py-1.5 rounded-md bg-white/5 border border-border text-text-secondary"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
