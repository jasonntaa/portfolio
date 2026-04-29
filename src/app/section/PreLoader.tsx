"use client";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const Preloader = () => {
  useGSAP(() => {
    const jEl = document.querySelector(".intro-J") as HTMLElement;
    const tEl = document.querySelector(".intro-T") as HTMLElement;
    if (!jEl || !tEl) return;

    const jRect = jEl.getBoundingClientRect();
    const tRect = tEl.getBoundingClientRect();
    // J lives bottom-left in DOM; start it visually next to T (J right edge = T left edge)
    const offsetX = tRect.left - jRect.right;

    gsap.set(".intro-J", { x: offsetX, y: 80, opacity: 0 });
    gsap.set(".intro-T", { y: 80, opacity: 0 });

    const tl = gsap.timeline();

    // Step 1: JT slide up together at bottom-right
    tl.to([".intro-J", ".intro-T"], {
      y: 0,
      opacity: 1,
      duration: 0.7,
      ease: "power3.out",
    })
      // Step 2: J splits to the left (x back to its natural DOM position)
      .to(".intro-J", { x: 0, duration: 0.8, ease: "power4.inOut" }, "+=0.3")
      // Step 3: ASON chars reveal from below (translate-y-full → y:0, same as Hero pattern)
      .to(
        ".intro-ASON-char",
        { y: 0, stagger: 0.06, duration: 0.6, ease: "power4.out" },
        "-=0.2",
      )
      // Step 4: A char reveals next to T
      .to(".intro-A-char", { y: 0, duration: 0.5, ease: "power4.out" }, "<")
      // Step 5: Horizontal split
      .to(
        "#preloader-top",
        { yPercent: -100, duration: 0.8, ease: "power4.inOut" },
        "+=0.4",
      )
      .to(
        "#preloader-bottom",
        { yPercent: 100, duration: 0.8, ease: "power4.inOut" },
        "<",
      );
  }, []);

  return (
    <div id="preloader" className="fixed inset-0 z-[300] pointer-events-none">
      <div
        id="preloader-top"
        className="absolute top-0 left-0 w-full h-1/2 bg-[#f8f8f8]"
      />

      <div
        id="preloader-bottom"
        className="absolute bottom-0 left-0 w-full h-1/2 bg-[#f8f8f8]"
      >
        {/* J + ASON — J starts next to T via GSAP offset, slides to bottom-left */}
        <div className="absolute bottom-8 left-8 flex items-baseline">
          {/* J: pre-hidden via inline style (opacity+y) so no flash before GSAP fires */}
          <span
            className="intro-J inline-block text-[clamp(3.5rem,1rem+15vw,25rem)] font-bold tracking-tight text-black"
            style={{ opacity: 0, transform: "translateY(80px)" }}
          >
            J
          </span>

          {"ASON".split("").map((char, i) => (
            <span
              key={i}
              className="inline-block overflow-hidden leading-none pb-[0.15em] -mb-[0.15em]"
            >
              <span className="intro-ASON-char inline-block translate-y-full text-[clamp(3.5rem,1rem+15vw,25rem)] font-bold tracking-tight text-black">
                {char}
              </span>
            </span>
          ))}
        </div>

        {/* T + A — T anchors bottom-right, A reveals after J leaves */}
        <div className="absolute bottom-8 right-8 flex items-baseline">
          <span
            className="intro-T inline-block text-[clamp(3.5rem,1rem+15vw,25rem)] font-bold tracking-tight text-black"
            style={{ opacity: 0, transform: "translateY(80px)" }}
          >
            T
          </span>
          <span className="inline-block overflow-hidden leading-none pb-[0.15em] -mb-[0.15em]">
            <span className="intro-A-char inline-block translate-y-full text-[clamp(3.5rem,1rem+15vw,25rem)] font-bold tracking-tight text-black">
              A
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
