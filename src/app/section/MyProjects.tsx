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
        start: "center center",
        end: "+=400px",
        scrub: 1,

        pinSpacing: false,
        markers: true,
      },
      y: 30,
      opacity: 0,
      duration: 0.8,
    });
  });

  return (
    <section className="flex-center h-screen w-full bg-[#fafaf9] m-auto">
      <div className="h-[2rem]">
        <h1 id="playground" className="text-black text-[clamp(1rem,8vw,2rem)]">
          Welcome To My Playground
        </h1>
      </div>
    </section>
  );
};

export default MyProjects;
