"use client";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const Preloader = () => {
  useGSAP(() => {
    gsap.from("#text", {
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: "power2.inOut",
      delay: 0.5,
    });
  }, []);

  useGSAP(() => {
    gsap.from("#loader", {
      width: 0,
      duration: 2,
      ease: "power4.inOut",
      delay: 1,
    });
  }, []);

  useGSAP(() => {
    gsap.to("#preloader", {
      top: "-100%",
      duration: 2,
      ease: "power4.inOut",
      delay: 3,
    });
  }, []);

  return (
    <div
      id="preloader"
      className="fixed top-0 w-full h-screen bg-[#f8f8f8] flex flex-col justify-center items-center text-black z-300"
    >
      <h4 id="text" className="text-3xl">
        Hi! I&apos;m Jason 👋
      </h4>
      <div id="loader" className="w-100 h-[2px] bg-black mt-4"></div>
    </div>
  );
};

export default Preloader;
