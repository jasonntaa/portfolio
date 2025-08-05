"use client";

import { useGSAP } from "@gsap/react";
import React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const JourneyPreload = () => {
  useGSAP(() => {
    gsap.set(".journey-title", { opacity: 0, y: 30 });

    const entranceTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".journey-wrapper",
        start: "top 80%",
        end: "center center",
        toggleActions: "play none none reverse",
        markers: true,
      },
    });

    entranceTl.to(".journey-title", {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power2.out",
    });

    gsap.to(".journey-wrapper", {
      y: -50,
      opacity: 0,
      scrollTrigger: {
        trigger: ".journey-wrapper",
        start: "center center",
        end: "+=200px",
        scrub: 2,
        markers: true,
      },
    });
  });

  return (
    <section className="flex-center justify-center items-center h-screen w-full bg-[##1a1a1a] m-auto">
      <div className="journey-wrapper overflow-hidden flex flex-col justify-center items-center py-8">
        <div className="text-center mb-6">
          <h1
            id="journey"
            className="journey-title text-white text-[clamp(1rem,8vw,4rem)] font-light uppercase tracking-wider"
          >
            My Journey
          </h1>
        </div>
      </div>
    </section>
  );
};

export default JourneyPreload;
