"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { motion } from "framer-motion";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { X, ArrowUpRightIcon } from "@phosphor-icons/react";
import type { Project } from "@/constants/projects";

const MORPH_TRANSITION = {
  type: "spring" as const,
  stiffness: 280,
  damping: 32,
  mass: 0.6,
};

const CONTENT_TRANSITION = {
  delay: 0.12,
  duration: 0.25,
  ease: "easeOut" as const,
};

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const smoother = ScrollSmoother.get();
    if (smoother) {
      smoother.paused(true);
    }
    return () => {
      if (smoother) {
        smoother.paused(false);
      }
    };
  }, []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  if (!mounted) return null;

  return createPortal(
    <div className="fixed inset-0 z-[9999]">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        onClick={onClose}
        aria-hidden="true"
        className="absolute inset-0 bg-black/30"
      />
      <motion.div
        layoutId={`project-${project.slug}`}
        layoutRoot
        transition={MORPH_TRANSITION}
        role="dialog"
        aria-modal="true"
        aria-label={`${project.title}`}
        className="absolute inset-0 bg-[#0e0e0e] overflow-y-auto overscroll-contain shadow-[0_-30px_80px_rgba(0,0,0,0.6)] [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
      >
        <div className="sticky top-0 z-10 flex justify-between items-center px-6 md:px-16 pt-8 pb-6 bg-[#0e0e0e]/80 backdrop-blur-md border-b border-neutral-800/40">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
            {project.title}
          </span>
          <button
            onClick={onClose}
            aria-label="Close"
            className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-neutral-800/60 hover:bg-neutral-700 text-neutral-300 hover:text-white transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
          >
            <X size={16} weight="bold" />
          </button>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 8 }}
          transition={CONTENT_TRANSITION}
          className="flex flex-col px-6 md:px-16 py-12 md:py-20 w-full gap-12 md:gap-20 overscroll-contain"
        >
          {/* Title */}
          <div className="w-full flex justify-center md:justify-center">
            <h2 className="text-[clamp(3rem,7vw,7.5rem)] leading-[0.9] font-bold text-white uppercase tracking-tight text-center">
              {project.title}
            </h2>
          </div>

          {/* Two-column meta */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 border-t border-neutral-800/50 pt-10">
            
            {/* Left Col: Meta info (Technologies) */}
            <div className="md:col-span-5 lg:col-span-4 flex flex-col gap-4 border-b border-neutral-800/50 md:border-b-0 pb-10 md:pb-0">
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500 mb-3">
                Technologies
              </h3>
              <div className="flex flex-wrap gap-3">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="bg-neutral-800/50 text-neutral-300 text-xs font-medium px-4 py-2 rounded-full border border-neutral-700/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 mt-8">
                <a
                  href={project.liveSiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${project.title} live site (opens in a new tab)`}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold uppercase tracking-wider text-black bg-white rounded-xl hover:bg-neutral-200 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0e0e0e]"
                >
                  Live Site
                  <ArrowUpRightIcon size={16} weight="bold" />
                </a>
                <a
                  href={project.codeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.title} source code on GitHub (opens in a new tab)`}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold uppercase tracking-wider text-neutral-300 bg-transparent border border-neutral-700 rounded-xl hover:bg-neutral-800 hover:text-white hover:border-neutral-600 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0e0e0e]"
                >
                  View Code
                  <ArrowUpRightIcon size={16} weight="bold" />
                </a>
              </div>
            </div>

            {/* Right Col: Summary */}
            <div className="md:col-span-7 lg:col-span-8 flex flex-col gap-4">
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500 mb-2">
                Summary
              </h3>
              <p className="text-neutral-300 text-lg md:text-xl leading-relaxed font-light max-w-4xl">
                {project.description}
              </p>
            </div>

          </div>

          {/* Full-width hero image */}
          <div className="relative w-full overflow-hidden rounded-xl md:rounded-2xl bg-neutral-900 border border-neutral-800/50">
            <Image
              className="w-full h-auto block"
              src={project.image}
              alt={`${project.title} — project screenshot`}
              width={1920}
              height={1080}
              sizes="100vw"
              draggable={false}
              priority
            />
          </div>

        </motion.div>
      </motion.div>
    </div>,
    document.body
  );
};

export default ProjectModal;
