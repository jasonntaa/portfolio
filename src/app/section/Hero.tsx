"use client";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  useGSAP(() => {
    gsap.from(".text", {
      y: 40,
      opacity: 0,
      delay: 4,
    });
    gsap.to(".scroll-indicator", {
      y: 10,
      duration: 1.5,
      ease: "power2.inOut",
      repeat: -1,
      yoyo: true,
      delay: 5,
    });
  }, []);

  const scrollToNext = () => {
    gsap.to(window, {
      duration: 1,
      scrollTo: "#projects",
    });
  };

  return (
    <section
      id="hero"
      className="relative overflow-hidden text hero-text dark-section layout flex flex-col items-center justify-center h-screen pt-[60px] p-4 md:px-8 lg:px-20"
    >
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        aria-hidden="true"
      >
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500 dark:bg-blue-400 rounded-full blur-3xl opacity-10 dark:opacity-5 transition-opacity duration-300" />
      </div>
      <p className="text text-sm tracking-[0.2em] uppercase text-white/50">
        Front-end developer
      </p>
      <h1 className="text uppercase hero-text text-[clamp(1.5rem,8vw,5rem)] text-center text-white whitespace-nowrap  leading-30 font-medium">
        From leading teams
      </h1>
      <h1 className="text uppercase hero-text text-[clamp(1.5rem,8vw,5rem)] text-center text-white leading-none whitespace-nowrap font-medium">
        to leading code
      </h1>
      <h4 className="text hero-text text-center leading- mt-6 text-white/70 text-[clamp(1rem,3vw,1.4rem)]">
        Leveraging 6 years within tech and leadership to build exceptional user
        <br></br>
        experience with React, Next.js and Typescript.
      </h4>
      <Link
        href="https://www.linkedin.com/in/jasontta/"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8"
      >
        <button className="text border-2 rounded-3xl text-black bg-white text-[clamp(0.8rem, 2.5vw, 1rem)] px-[clamp(1rem,3vw,2rem)] py-[clamp(0.5rem,1vw,0.5rem)] transition-colors pointer mt-20 duration-300 hover:font-medium">
          Let&apos;s connect
        </button>
      </Link>
      <div
        className="scroll-indicator absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={scrollToNext}
      >
        <div className="flex flex-col items-center text-white/70 hover:text-white transition-colors">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className="animate-bounce"
          >
            <path
              d="M7 10L12 15L17 10"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
