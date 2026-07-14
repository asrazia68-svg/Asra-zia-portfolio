"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X, Github, ExternalLink } from "lucide-react";
import type { Project } from "@/data/portfolio";
import { useEffect } from "react";

export default function ProjectModal({ project, onClose }: { project: Project | null; onClose: () => void }) {
  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
      const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
      window.addEventListener("keydown", onKey);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", onKey);
      };
    }
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-start md:items-center justify-center p-4 md:p-8 overflow-y-auto"
        >
          <motion.div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden
          />
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{ duration: 0.25 }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            className="relative bg-bg-card border border-border rounded-card max-w-3xl w-full my-8 p-6 md:p-10"
          >
            <button
              onClick={onClose}
              aria-label="Close case study"
              className="absolute top-5 right-5 w-9 h-9 rounded-full glass flex items-center justify-center text-text-secondary hover:text-text-primary"
            >
              <X size={18} />
            </button>

            <div className="flex items-center gap-3 mb-2">
              <span className="text-3xl">{project.emoji}</span>
              <span className="font-mono text-xs text-text-muted">{project.year}</span>
            </div>
            <h3 id="project-modal-title" className="font-heading font-bold text-2xl md:text-3xl mb-4">
              {project.name}
            </h3>

            <div className="flex flex-wrap gap-2 mb-8">
              {project.tags.map((tag) => (
                <span key={tag} className="text-xs px-2.5 py-1 rounded-md bg-accent-primary/10 text-accent-highlight border border-accent-primary/20 font-mono">
                  {tag}
                </span>
              ))}
            </div>

            <ModalSection title="Overview">
              <p className="text-text-secondary leading-relaxed">{project.overview}</p>
            </ModalSection>

            <ModalSection title="Features">
              <ul className="space-y-2">
                {project.features.map((f) => (
                  <li key={f} className="text-text-secondary text-sm flex gap-2">
                    <span className="text-accent-highlight mt-1">▸</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </ModalSection>

            <ModalSection title="Tech Stack">
              <div className="grid sm:grid-cols-2 gap-3">
                {project.techStack.map((group) => (
                  <div key={group.category} className="text-sm">
                    <span className="text-text-muted font-mono text-xs uppercase">{group.category}</span>
                    <p className="text-text-secondary">{group.items.join(", ")}</p>
                  </div>
                ))}
              </div>
            </ModalSection>

            <ModalSection title="How It Works">
              <ol className="space-y-2">
                {project.pipeline.map((step, i) => (
                  <li key={step} className="text-sm text-text-secondary flex gap-3">
                    <span className="font-mono text-accent-highlight shrink-0">{String(i + 1).padStart(2, "0")}</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </ModalSection>

            <ModalSection title="Challenge">
              <p className="text-text-secondary leading-relaxed text-sm">{project.challenge}</p>
            </ModalSection>

            <ModalSection title="Lessons Learned">
              <p className="text-text-secondary leading-relaxed text-sm">{project.lessons}</p>
            </ModalSection>

            <div className="flex flex-wrap gap-3 pt-4 border-t border-border mt-8">
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-secondary flex items-center gap-2 px-5 py-2.5 text-sm">
                <Github size={16} /> View Code
              </a>
              {project.liveDemo && (
                <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="btn-primary flex items-center gap-2 px-5 py-2.5 text-sm text-white">
                  <ExternalLink size={16} /> Live Demo
                </a>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function ModalSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-7">
      <h4 className="font-heading font-semibold text-sm text-accent-highlight uppercase tracking-wide mb-3">{title}</h4>
      {children}
    </div>
  );
}
