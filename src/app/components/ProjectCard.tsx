"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "@phosphor-icons/react";
import type { MouseEvent } from "react";
import type { Project } from "@/constants/projects";

const MORPH_TRANSITION = {
  type: "spring" as const,
  stiffness: 280,
  damping: 32,
  mass: 0.6,
};

interface ProjectCardProps {
  project: Project;
  index: number;
  onSelect: (project: Project) => void;
}

const ProjectCard = ({ project, index, onSelect }: ProjectCardProps) => {
  const projectNumber = String(index + 1).padStart(2, "0");

  if (project.isPlaceholder) {
    return (
      <article className="project-card h-full shrink-0 w-full md:w-[calc(55vw-5rem)]">
        <div className="group flex flex-col h-full bg-[#111111] border border-neutral-800/60 p-4 md:p-6 rounded-2xl md:rounded-3xl text-left w-full relative overflow-hidden">
          <div className="absolute inset-0 rounded-2xl md:rounded-3xl opacity-30 pointer-events-none coming-soon-glow" />

          <div className="relative w-full aspect-[4/3] md:aspect-video overflow-hidden rounded-xl bg-neutral-900 mb-5">
            <Image
              className="object-cover object-left md:object-center opacity-40 blur-[2px] scale-105"
              src={project.image}
              alt="Coming soon project preview"
              fill
              sizes="(max-width: 768px) 100vw, 45vw"
              draggable={false}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-950/40 via-transparent to-teal-950/30" />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
              <div className="w-12 h-12 rounded-full border-2 border-emerald-500/50 flex items-center justify-center coming-soon-pulse">
                <div className="w-3 h-3 rounded-full bg-emerald-400" />
              </div>
              <span className="text-sm font-semibold uppercase tracking-[0.3em] text-neutral-300">
                In Development
              </span>
            </div>
            <div className="absolute inset-0 ring-1 ring-inset ring-white/5 rounded-xl pointer-events-none" />
          </div>

          <div className="flex-1 flex flex-col w-full">
            <div className="flex items-baseline gap-4 mb-2">
              <span className="text-xs font-mono text-emerald-500/70 tracking-wider">
                {projectNumber}
              </span>
              <h3 className="text-xl md:text-2xl font-bold text-white uppercase tracking-wide">
                {project.title}
              </h3>
            </div>
            <p className="text-sm text-neutral-500 leading-relaxed mb-4">
              {project.shortDescription}
            </p>
            <div className="flex flex-wrap gap-1.5 mt-auto" role="list" aria-label="Technology stack">
              {project.tech.slice(0, 4).map((techItem, i) => (
                <span
                  key={i}
                  role="listitem"
                  className="text-[10px] sm:text-xs font-medium uppercase tracking-wider bg-emerald-950/40 text-emerald-400/70 px-2.5 py-1 rounded-full border border-emerald-800/30"
                >
                  {techItem}
                </span>
              ))}
              {project.tech.length > 4 && (
                <span className="text-[10px] sm:text-xs font-medium uppercase tracking-wider bg-neutral-800/50 text-neutral-500 px-2.5 py-1 rounded-full">
                  +{project.tech.length - 4}
                </span>
              )}
            </div>
          </div>
        </div>
      </article>
    );
  }

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) {
      return;
    }
    e.preventDefault();
    onSelect(project);
  };

  return (
    <motion.article
      layoutId={`project-${project.slug}`}
      transition={MORPH_TRANSITION}
      className="project-card h-full shrink-0 w-full md:w-[calc(55vw-5rem)]"
    >
      <a
        href={`/projects/${project.slug}`}
        onClick={handleClick}
        className="group flex flex-col h-full bg-[#111111] border border-neutral-800/60 p-4 md:p-6 rounded-2xl md:rounded-3xl cursor-pointer text-left w-full transition-all duration-500 hover:border-neutral-700/80 hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#fafaf9]"
        aria-label={`View case study for ${project.title}. ${project.shortDescription}`}
      >
        <div className="relative w-full aspect-[4/3] md:aspect-video overflow-hidden rounded-xl bg-neutral-900 mb-5">
          <Image
            className="object-cover object-left md:object-center transition-transform duration-700 ease-out group-hover:scale-[1.04]"
            src={project.image}
            alt={`${project.title} — ${project.shortDescription}`}
            fill
            sizes="(max-width: 768px) 100vw, 45vw"
            draggable={false}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute inset-0 ring-1 ring-inset ring-white/5 rounded-xl pointer-events-none" />
          <div className="absolute bottom-4 right-4 flex items-center gap-2 bg-white text-black text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-400 ease-out">
            <span>View Project</span>
            <ArrowUpRight size={14} weight="bold" className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        </div>

        <div className="flex-1 flex flex-col w-full">
          <div className="flex items-baseline gap-4 mb-2">
            <span className="text-xs font-mono text-neutral-600 tracking-wider">
              {projectNumber}
            </span>
            <h3 className="text-xl md:text-2xl font-bold text-white uppercase tracking-wide group-hover:text-neutral-300 transition-colors duration-300">
              {project.title}
            </h3>
          </div>
          <p className="text-sm text-neutral-500 leading-relaxed mb-4 group-hover:text-neutral-400 transition-colors duration-300">
            {project.shortDescription}
          </p>
          <div className="flex flex-wrap gap-2 mt-auto" role="list" aria-label="Technology stack">
            {project.tech.slice(0, 4).map((techItem, i) => (
              <span
                key={i}
                role="listitem"
                className="text-[10px] sm:text-xs font-medium uppercase tracking-wider bg-neutral-800/60 text-neutral-400 px-3 py-1.5 rounded-full border border-neutral-700/40"
              >
                {techItem}
              </span>
            ))}
            {project.tech.length > 4 && (
              <span className="text-[10px] sm:text-xs font-medium uppercase tracking-wider bg-neutral-800/50 text-neutral-500 px-2.5 py-1 rounded-full">
                +{project.tech.length - 4}
              </span>
            )}
          </div>
        </div>
      </a>
    </motion.article>
  );
};

export default ProjectCard;
