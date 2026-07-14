"use client";

import { personal, nav, socials, footerTagline } from "@/data/portfolio";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="section-container flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="text-center md:text-left">
          <p className="font-heading font-bold text-lg mb-1">
            {personal.fullName}
            <span className="text-accent-primary">.</span>
          </p>
          <p className="text-sm text-text-muted">{footerTagline}</p>
        </div>

        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="text-sm text-text-secondary hover:text-text-primary transition-colors">
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a href={socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="w-9 h-9 rounded-full glass flex items-center justify-center text-text-secondary hover:text-accent-highlight">
            <Github size={16} />
          </a>
          <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-9 h-9 rounded-full glass flex items-center justify-center text-text-secondary hover:text-accent-highlight">
            <Linkedin size={16} />
          </a>
          <a href={socials.email} aria-label="Email" className="w-9 h-9 rounded-full glass flex items-center justify-center text-text-secondary hover:text-accent-highlight">
            <Mail size={16} />
          </a>
          <a href="#home" aria-label="Back to top" className="w-9 h-9 rounded-full glass flex items-center justify-center text-text-secondary hover:text-accent-highlight">
            <ArrowUp size={16} />
          </a>
        </div>
      </div>

      <p className="text-center text-xs text-text-muted mt-8">
        © {new Date().getFullYear()} {personal.fullName}. All rights reserved.
      </p>
    </footer>
  );
}
