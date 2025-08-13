"use client";

import { useGSAP } from "@gsap/react";
import React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TechStack from "./TechStack";

gsap.registerPlugin(ScrollTrigger);

const MyProjects = () => {
  useGSAP(() => {
    gsap.set(".title-main", { opacity: 0, y: 30 });
    gsap.set(".title-sub", { opacity: 0, y: 20 });
    gsap.set(".descriptor", { opacity: 0, y: 15 });

    const entranceTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".wrapper",
        start: "top 80%",
        end: "bottom bottom",
        toggleActions: "play none none reverse",
        markers: false,
      },
    });

    entranceTl
      .to(".title-main", {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
      })

      .to(
        ".descriptor",
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.2,
          ease: "power2.out",
        },
        "-=0.3"
      );
  });

  return (
    <section
      id="projects"
      className="flex-center justify-center items-center h-[75vh]  w-full bg-[#fafaf9] m-auto"
    >
      <div className="wrapper overflow-hidden flex flex-col mt-30 justify-center items-center py-8">
        <div className="text-center mb-6">
          <h1 className="title-main text-black text-[clamp(2rem,4vw,6rem)] tracking-wider uppercase font-semibold">
            Welcome To My Playground
          </h1>
        </div>

        <TechStack />
      </div>
    </section>
  );
};

export default MyProjects;
