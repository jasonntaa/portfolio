"use client";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects } from "@/constants/projects";
import ProjectCard from "../components/ProjectCard";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  useGSAP(() => {
    gsap.from(".project-text", {
      scrollTrigger: {
        trigger: ".project-text",
        start: "bottom bottom",
        end: "+=100px",
        toggleActions: "play none none reverse",
        markers: false,
      },
      y: 30,
      opacity: 0,
      ease: "power1.inOut",
    });
  });
  return (
    <section
      id="projects"
      className="projects flex flex-col w-full text-black bg-[#fafaf9] px-4 py-10 md:p-12 -mt-px"
    >
      <div className="flex dark-section justify-between mx-10">
        <h1 className="project-text text-[clamp(1.5rem,8vw,7rem)] font-bold">
          PROJECTS
        </h1>
        <h1 className="project-text text-[clamp(1.5rem,8vw,7rem)] font-bold">
          &#39;25
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
