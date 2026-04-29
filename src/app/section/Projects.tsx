"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AnimatePresence } from "framer-motion";
import { projects, type Project } from "@/constants/projects";
import ProjectCard from "../components/ProjectCard";
import ProjectModal from "../components/ProjectModal";

gsap.registerPlugin(ScrollTrigger);

const PROJECT_PATH = /^\/projects\/([^/]+)\/?$/;

const findProjectFromPath = (pathname: string): Project | null => {
  const match = pathname.match(PROJECT_PATH);
  if (!match) return null;
  return projects.find((p) => p.slug === match[1] && !p.isPlaceholder) ?? null;
};

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const pushedRef = useRef(false);

  useEffect(() => {
    setSelectedProject(findProjectFromPath(window.location.pathname));
  }, []);

  useEffect(() => {
    const handler = () => {
      setSelectedProject(findProjectFromPath(window.location.pathname));
    };
    window.addEventListener("popstate", handler);
    return () => window.removeEventListener("popstate", handler);
  }, []);

  const handleSelect = useCallback((project: Project) => {
    pushedRef.current = true;
    window.history.pushState(null, "", `/projects/${project.slug}`);
    setSelectedProject(project);
  }, []);

  const handleClose = useCallback(() => {
    if (pushedRef.current) {
      pushedRef.current = false;
      window.history.back();
    } else {
      window.history.replaceState(null, "", "/");
      setSelectedProject(null);
    }
  }, []);

  useGSAP(
    () => {
      // Heading entrance — triggers early so it's visible when user arrives
      gsap.from(".project-text", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 95%",
          toggleActions: "play none none reverse",
          markers: false,
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
      });

      // Horizontal scroll — md+ only
      const mm = gsap.matchMedia();

      mm.add("(min-width: 768px)", () => {
        const track = trackRef.current;
        const section = sectionRef.current;
        if (!track || !section) return;

        // Card entrance — staggered fade-up (Must be outside RAF so GSAP matchMedia can track and cleanup)
        gsap.from(".project-card", {
          opacity: 0,
          y: 60,
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: track,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });

        // Double RAF to ensure layout is fully settled
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            let scrollDistance = 0;
            let startBuffer = 0;
            let endBuffer = 0;
            let totalScroll = 0;
            let startRatio = 0;
            let endRatio = 0;

            const calculateBounds = () => {
              // Temporarily clear GSAP transform to get accurate native DOM measurements
              const currentX = gsap.getProperty(track, "x");
              gsap.set(track, { clearProps: "x" });

              const trackWidth = track.scrollWidth;
              const trackClientWidth = track.clientWidth;
              
              // Exactly how far the track needs to slide to perfectly align its right edge
              scrollDistance = Math.max(0, trackWidth - trackClientWidth);
              startBuffer = Math.round(window.innerHeight * 0.25);
              endBuffer = Math.round(window.innerHeight * 0.1);
              totalScroll = startBuffer + scrollDistance + endBuffer;
              
              if (totalScroll > 0) {
                startRatio = startBuffer / totalScroll;
                endRatio = (startBuffer + scrollDistance) / totalScroll;
              }

              // Restore GSAP transform immediately so there is no visual flicker
              if (currentX !== undefined && currentX !== 0) {
                gsap.set(track, { x: currentX });
              }
            };

            // Run once initially
            calculateBounds();

            if (scrollDistance <= 0) return;

            // Use ScrollTrigger.create (no tween) to avoid tween-vs-callback conflicts
            ScrollTrigger.create({
              trigger: section,
              start: "top top",
              end: () => `+=${totalScroll}`,
              pin: true,
              invalidateOnRefresh: true,
              anticipatePin: 1,
              markers: false,
              onRefresh: () => calculateBounds(),
              onUpdate: (self) => {
                const p = self.progress;

                if (p <= startRatio) {
                  // Start buffer — cards stay still
                  gsap.set(track, { x: 0 });
                } else if (p >= endRatio) {
                  // End buffer — cards already at final position, hold still
                  gsap.set(track, { x: -scrollDistance });
                } else {
                  // Active scrolling zone
                  const realProgress =
                    (p - startRatio) / (endRatio - startRatio);
                  gsap.set(track, { x: -scrollDistance * realProgress });
                }
              },
            });
          });
        });

        // Cleanup function for when matchMedia reverts (e.g. mobile breakpoint)
        return () => {
          gsap.set(track, { clearProps: "x" });
        };
      });

      // Mobile — vertical stack with per-card reveals
      mm.add("(max-width: 767px)", () => {
        gsap.utils.toArray<HTMLElement>(".project-card").forEach((card) => {
          gsap.from(card, {
            opacity: 0,
            y: 50,
            duration: 0.7,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          });
        });
      });
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="projects-section flex flex-col w-full text-black bg-[#fafaf9] -mt-px overflow-hidden"
      aria-labelledby="projects-heading"
    >
      {/* Meta strip */}
      <div className="project-text flex items-center justify-between text-xs font-semibold uppercase tracking-[0.25em] text-black/50 border-b border-black/10 pb-4 mx-6 md:mx-16 mt-10 md:mt-16 mb-4 md:mb-8">
        <span>Projects</span>
        <span>My Work</span>
      </div>

      {/* Section Heading */}
      <div className="flex justify-between items-baseline px-6 md:px-16 pb-8 md:pb-12">
        <h2
          id="projects-heading"
          className="project-text text-[clamp(1.5rem,8vw,7rem)] font-bold leading-none"
        >
          PROJECTS
        </h2>
        <span
          className="project-text text-[clamp(1.5rem,8vw,7rem)] font-bold leading-none"
          aria-hidden="true"
        >
          &#39;26
        </span>
      </div>

      {/* Cards track */}
      <div className="px-6 md:px-16 pb-10 md:pb-16">
        <div
          ref={trackRef}
          className="
            flex flex-col gap-6
            md:flex-row md:flex-nowrap md:gap-10
          "
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onSelect={handleSelect}
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            key={selectedProject.slug}
            project={selectedProject}
            onClose={handleClose}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
