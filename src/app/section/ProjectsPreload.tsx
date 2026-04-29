"use client";

import { useGSAP } from "@gsap/react";
import React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TechStack from "./TechStack";

gsap.registerPlugin(ScrollTrigger);

const TechSection = () => {
  useGSAP(() => {
    gsap.set(".tech-meta", { opacity: 0, y: 20 });
    gsap.set(".title-main", { opacity: 0, y: 30 });
    gsap.set(".title-sub", { opacity: 0, y: 20 });
    gsap.set(".descriptor", { opacity: 0, y: 15 });

    const entranceTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".wrapper",
        start: "top 85%",
        end: "bottom bottom",
        toggleActions: "play none none reverse",
        markers: false,
      },
    });

    entranceTl
      .to(".tech-meta", {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out",
      })
      .to(".title-main", {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
      }, "-=0.3")
      .to(
        ".descriptor",
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.2,
          ease: "power2.out",
        },
        "-=0.3",
      );
  });

  return (
    <section
      id="projects-preload"
      className="flex flex-col justify-center items-center min-h-[90vh] w-full bg-[#fafaf9] m-auto -mt-px px-6 md:px-16 pt-16 pb-12"
    >
      <div className="wrapper overflow-hidden flex flex-col justify-center items-center w-full">
        
        {/* Meta strip */}
        <div className="tech-meta w-full flex items-center justify-between text-xs font-semibold uppercase tracking-[0.25em] text-black/50 border-b border-black/10 pb-4 mb-10 md:mb-16">
          <span>Capabilities</span>
          <span>Tech Stack</span>
        </div>

        <div className="text-center mb-6 w-full flex justify-center">
          <h1 className="title-main text-black text-[clamp(2rem,6vw,12rem)] tracking-wider uppercase font-semibold">
            MODERN TECHSTACK
          </h1>
        </div>

        <TechStack />
      </div>
    </section>
  );
};

export default TechSection;
