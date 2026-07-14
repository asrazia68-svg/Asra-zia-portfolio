"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/portfolio";

export default function ProjectCard({
  project,
  index,
  onOpen,
}: {
  project: Project;
  index: number;
  onOpen: (p: Project) => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group glass rounded-card p-7 flex flex-col hover:border-accent-primary/50 transition-colors"
    >
      <div className="flex items-start justify-between mb-4">
        <span className="text-3xl">{project.emoji}</span>
        <span className="font-mono text-xs text-text-muted">{project.year}</span>
      </div>

      <h3 className="font-heading font-semibold text-xl mb-2">{project.name}</h3>
      <p className="text-text-secondary text-sm leading-relaxed mb-5 flex-1">{project.shortDescription}</p>

      <div className="flex flex-wrap gap-2 mb-6">
        {project.tags.map((tag) => (
          <span key={tag} className="text-xs px-2.5 py-1 rounded-md bg-accent-primary/10 text-accent-highlight border border-accent-primary/20 font-mono">
            {tag}
          </span>
        ))}
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-border">
        <button
          onClick={() => onOpen(project)}
          className="text-sm text-accent-highlight hover:text-accent-secondary transition-colors flex items-center gap-1 font-medium"
        >
          Read case study <ArrowUpRight size={14} />
        </button>
        <div className="flex items-center gap-3">
          <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label={`${project.name} GitHub repository`} className="text-text-muted hover:text-text-primary transition-colors">
            <Github size={18} />
          </a>
          {project.liveDemo && (
            <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" aria-label={`${project.name} live demo`} className="text-text-muted hover:text-text-primary transition-colors">
              <ExternalLink size={18} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
