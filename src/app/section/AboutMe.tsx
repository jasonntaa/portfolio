"use client";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const ABOUT_ROWS = [
  {
    number: "01",
    title: "Background",
    description:
      "Started in IT and product support, eventually leading teams across enterprise systems. Built a strong foundation in troubleshooting, communication, and how products perform in the real world.",
    tags: ["IT Support", "Team Lead", "Enterprise"],
  },
  {
    number: "02",
    title: "The Transition",
    description:
      "After several years leading teams, I went back to school to formally study web development and shift into software engineering — building the tools I once helped maintain.",
    tags: ["Web Dev", "Self-Taught", "CS Foundations"],
  },
  {
    number: "03",
    title: "What I Bring",
    description:
      "An adaptable mindset and a broad view of how products come together. Having worked across support, leadership, and development, I build software that's practical, reliable, and made for real users.",
    tags: ["Adaptable", "Systems Thinking", "User-First"],
  },
] as const;

const About = () => {
  const container = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".about-text-reveal",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: container.current,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        },
      );
    },
    { scope: container },
  );

  return (
    <section
      ref={container}
      id="aboutme"
      className="relative bg-secondary text-primary py-24 md:py-32 overflow-hidden"
    >
      <div className="w-full px-6 md:px-16">
        {/* Meta strip */}
        <div className="about-text-reveal flex items-center justify-between text-xs font-semibold uppercase tracking-[0.25em] text-black/50 border-b border-black/10 pb-4 mb-12 md:mb-16">
          <span>The Journey</span>
          <span>About Me</span>
        </div>

        {/* Intro hook */}
        <h2 className="about-text-reveal text-[clamp(2.5rem,5.5vw,4.75rem)] leading-[1.05] font-bold uppercase text-black mb-20 md:mb-28">
          Holistic approach to building practical, reliable tools for real
          users.
        </h2>

        {/* Numbered rows */}
        <div className="flex flex-col">
          {ABOUT_ROWS.map((row) => (
            <article
              key={row.number}
              className="about-text-reveal grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 py-10 md:py-12 border-t border-black/10"
            >
              <div className="md:col-span-1">
                <span className="text-xs font-mono text-black/50 tracking-wider">
                  {row.number}
                </span>
              </div>

              <div className="md:col-span-4">
                <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-tight text-black">
                  {row.title}
                </h3>
              </div>

              <div className="md:col-span-7 flex flex-col gap-5">
                <p className="text-base md:text-lg leading-relaxed text-black/70 max-w-prose">
                  {row.description}
                </p>
                <div
                  className="flex flex-wrap gap-1.5"
                  role="list"
                  aria-label={`${row.title} themes`}
                >
                  {row.tags.map((tag) => (
                    <span
                      key={tag}
                      role="listitem"
                      className="text-[10px] sm:text-xs font-medium uppercase tracking-wider bg-black/5 text-black/70 px-2.5 py-1 rounded-full border border-black/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
          <div className="border-t border-black/10" />
        </div>
      </div>
    </section>
  );
};

export default About;
