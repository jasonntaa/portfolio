"use client";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  useGSAP(() => {
    gsap.from(".text", {
      y: 40,
      opacity: 0,
      delay: 4,
    });
  }, []);

  return (
    <section
      id="hero"
      className="text hero-text dark-section layout flex flex-col items-center justify-center h-[105vh] mt-[-60px] p-4 md:px-8 lg:px-20"
    >
      <h1 className="text hero-text text-[clamp(1.5rem,8vw,7rem)] text-center text-white whitespace-nowrap font-semibold">
        Front End Developer
      </h1>
      <h4 className="text hero-text text-white text-[clamp(1rem,3vw,2rem)] mb-40">
        Bringing creativity to scalable code
      </h4>

      <button className="text border-2 rounded-3xl text-white text-[clamp(0.8rem, 2.5vw, 1rem)] px-[clamp(1rem,3vw,2rem)] py-[clamp(0.5rem,1vw,0.5rem)] transition-colors duration-300 hover:bg-white hover:text-black">
        Let&apos;s connect
      </button>
    </section>
  );
}
