"use client";

import { motion } from "framer-motion";
import { freelance } from "@/data/portfolio";
import { ArrowUpRight } from "lucide-react";

export default function Freelance() {
  if (!freelance.active) return null;

  return (
    <section className="py-16">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass rounded-card p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
        >
          <div>
            <p className="font-mono text-xs text-accent-highlight uppercase tracking-widest mb-2">Available for Freelance</p>
            <h3 className="font-heading font-semibold text-2xl mb-2">{freelance.services.join(" & ")}</h3>
            <p className="text-text-secondary text-sm">Open to freelance projects on Fiverr and Osdire.</p>
          </div>
          <div className="flex gap-3 shrink-0">
            {freelance.platforms.map((p) => (
              <a
                key={p.name}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary flex items-center gap-2 px-5 py-2.5 text-sm"
              >
                {p.name} <ArrowUpRight size={14} />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
