"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { personal, education } from "@/data/portfolio";
import { GraduationCap } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="section-container">
        <SectionHeading eyebrow="About" title="Who I Am" />

        <div className="grid md:grid-cols-5 gap-12">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-3 text-lg md:text-xl text-text-secondary leading-relaxed"
          >
            {personal.bio}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="md:col-span-2"
          >
            {education.map((edu) => (
              <div key={edu.university} className="glass rounded-card p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-btn bg-accent-primary/15 flex items-center justify-center">
                    <GraduationCap size={20} className="text-accent-highlight" />
                  </div>
                  <p className="font-mono text-xs text-text-muted uppercase tracking-wide">Education</p>
                </div>
                <h3 className="font-heading font-semibold text-lg mb-1">{edu.degree}</h3>
                <p className="text-text-secondary text-sm mb-3">{edu.university}</p>
                <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-text-muted">
                  <span>{edu.duration}</span>
                  <span>·</span>
                  <span>{edu.detail}</span>
                  <span>·</span>
                  <span>CGPA {edu.gpa}</span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
