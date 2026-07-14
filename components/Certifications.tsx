"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { certifications } from "@/data/portfolio";
import { Award } from "lucide-react";

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 md:py-32">
      <div className="section-container">
        <SectionHeading eyebrow="Certifications" title="Continued Learning" />

        <div className="grid md:grid-cols-2 gap-5">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="glass rounded-card p-6 flex gap-4"
            >
              <div className="w-11 h-11 shrink-0 rounded-btn bg-accent-highlight/10 flex items-center justify-center">
                <Award size={20} className="text-accent-highlight" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <p className="font-mono text-xs text-text-muted uppercase tracking-wide">{cert.category}</p>
                  {cert.status === "In Progress" && (
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-state-warning/15 text-state-warning font-mono">
                      In Progress
                    </span>
                  )}
                </div>
                <h3 className="font-heading font-semibold text-lg mb-1">{cert.title}</h3>
                <p className="text-text-secondary text-sm mb-1">{cert.org}</p>
                <p className="font-mono text-xs text-text-muted">{cert.duration}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
