"use client";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "../components/Button";

gsap.registerPlugin(ScrollTrigger);

// Helper function to split text into words for staggered animation
const SplitText = ({ text }: { text: string }) => {
  return (
    <>
      {text.split(" ").map((word, index) => (
        <span key={index} className="inline-block overflow-hidden mr-[0.3em] pb-[0.2em] -mt-[0.2em]">
          <span className="hero-word inline-block transform translate-y-full tracking-tight">
            {word}
          </span>
        </span>
      ))}
    </>
  );
};

export default function Hero() {

  useGSAP(() => {
    // Stagger clip-path text reveal
    gsap.to(".hero-word", {
      y: 0,
      duration: 1.2,
      stagger: 0.1,
      ease: "power4.out",
      delay: 2.6,
    });

    gsap.from(".hero-element", {
      y: 30,
      opacity: 0,
      duration: 1,
      stagger: 0.15,
      ease: "power3.out",
      delay: 3.2,
    });
  }, []);

  return (
    <section
      id="hero"
      className="relative bg-[#0e0e0e] min-h-[100svh] flex flex-col justify-between pt-[120px] pb-12 overflow-hidden"
    >

      {/* Main Typography Area */}
      <div className="w-full px-6 md:px-16 z-10 flex flex-col justify-center flex-grow mt-10 md:mt-0">
        <div className="flex justify-start w-full">
          <h1 className="text-clampHero1 leading-[0.9] mb-2 font-bold uppercase text-[#fafaf9]">
            <SplitText text="From leading teams" />
          </h1>
        </div>
        <div className="flex justify-end w-full mt-2 md:mt-6">
          <h1 className="text-clampHero1 leading-[0.9] font-bold uppercase text-[#fafaf9]/40 text-right">
            <SplitText text="to leading code." />
          </h1>
        </div>
      </div>

      {/* Bottom Information Area */}
      <div className="w-full px-6 md:px-16 z-10 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-10 items-end mt-16 md:mt-24">
        <p className="hero-element text-left text-[#fafaf9]/70 font-medium text-lg md:text-xl max-w-lg leading-relaxed">
          Leveraging 6 years within tech and leadership to architect exceptional digital experiences with React, Next.js, and TypeScript.
        </p>

        <div className="flex md:justify-end hero-element">
          <Button href="https://www.linkedin.com/in/jasontta/">
            Let&apos;s Connect
          </Button>
        </div>
      </div>

      <style jsx global>{`
        .text-clampHero1 {
          font-size: clamp(3rem, 7vw, 7.5rem);
        }
      `}</style>
    </section>
  );
}
