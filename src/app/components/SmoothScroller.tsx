"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollSmoother, ScrollTrigger);

const SmoothScroller = () => {
  useEffect(() => {
    let smoother: ScrollSmoother;

    const initSmoother = () => {
      smoother = ScrollSmoother.create({
        wrapper: "#smooth-wrapper",
        content: "#smooth-content",
        smooth: 1, // Smoothness level (0-3)
        effects: true, // Enable data-speed effects
        normalizeScroll: true, // Handle mobile scrolling
      });
    };

    // Small delay to ensure DOM is ready
    const timer = setTimeout(initSmoother, 100);

    return () => {
      clearTimeout(timer);
      if (smoother) {
        smoother.kill();
      }
    };
  }, []);

  return null;
};

export default SmoothScroller;
