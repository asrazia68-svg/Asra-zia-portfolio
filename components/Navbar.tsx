"use client";

import { useEffect, useState } from "react";
import { nav, personal } from "@/data/portfolio";
import { Menu, X, Download } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
        scrolled ? "glass shadow-lg shadow-black/20" : "bg-transparent"
      }`}
    >
      <nav className="section-container flex items-center justify-between h-16 md:h-20">
        <a href="#home" className="font-heading font-bold text-lg tracking-tight">
          Asra<span className="text-accent-primary">.</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-text-secondary hover:text-text-primary transition-colors relative group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent-highlight transition-all group-hover:w-full" />
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a
            href={personal.resumeUrl}
            download
            className="btn-secondary flex items-center gap-2 px-4 py-2 text-sm text-text-primary"
          >
            <Download size={14} /> Resume
          </a>
        </div>

        <button
          className="md:hidden text-text-primary"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden glass border-t border-border">
          <div className="flex flex-col p-6 gap-4">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-text-secondary hover:text-text-primary"
              >
                {item.label}
              </a>
            ))}
            <a
              href={personal.resumeUrl}
              download
              className="btn-secondary flex items-center justify-center gap-2 px-4 py-2 text-sm mt-2"
            >
              <Download size={14} /> Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
