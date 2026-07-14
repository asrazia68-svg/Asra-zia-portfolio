"use client";

import { motion } from "framer-motion";

export default function SectionHeading({
  eyebrow,
  title,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  align?: "left" | "center";
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className={`mb-12 ${align === "center" ? "text-center" : ""}`}
    >
      <p className="font-mono text-sm text-accent-highlight tracking-widest uppercase mb-2">{eyebrow}</p>
      <h2 className="font-heading font-bold text-4xl md:text-5xl">{title}</h2>
    </motion.div>
  );
}
