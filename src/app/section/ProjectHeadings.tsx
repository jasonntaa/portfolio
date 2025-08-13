"use client";

import { useGSAP } from "@gsap/react";
import React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const MyProjects = () => {
  useGSAP(() => {
    gsap.from("#playground", {
      scrollTrigger: {
        trigger: "#playground",
        start: "top center",
        end: "60px center",
        scrub: 1,
        pin: true,
        markers: true,
      },
      y: 30,
      opacity: 0,
      duration: 0.8,
    });
  });

  return (
    <section className="flex-center h-screen w-full bg-[#fafaf9] m-auto">
      <h2 className="projects text-black text-[clamp(1rem,3vw,4rem)]">
        Welcome To My Playground
      </h2>
    </section>
  );
};

export default MyProjects;
