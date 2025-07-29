"use client";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  useGSAP(() => {
    gsap.to(".text", {
      scrollTrigger: {
        trigger: ".text",
        start: "center center",
        end: "+=300px",
        markers: true,
        scrub: 2,
        pin: ".text",
        pinSpacing: false,
      },
      y: -80,
      opacity: 0,
    });
  }, []);

  return (
    <section
      id="hero"
      className="text hero-layout flex flex-col items-start justify-center h-screen mt-[-60px] p-4 md:px-8 lg:px-20"
    >
      <h1 className="text text-[clamp(1.5rem,8vw,8rem)] text-center text-white whitespace-nowrap">
        Front End Developer
      </h1>
      <h4 className="text text-white text-[clamp(1rem,4vw,4rem)] mb-40">
        Bringing creativity to scalable code
      </h4>
      <button className="text border-2 rounded-3xl text-[clamp(0.8rem, 2.5vw, 1.25rem)] px-[clamp(1rem,3vw,2rem)] py-[clamp(0.5rem,1.5vw,1rem)]">
        Let's connect
      </button>
    </section>
  );
}
