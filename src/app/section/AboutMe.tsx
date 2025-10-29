"use client";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".about-text",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".about-section",
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      }
    );
    gsap.fromTo(
      ".about-image",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".about-section",
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      }
    );
  });

  return (
    <section
      id="aboutme"
      className="about-section dark-section bg-secondary flex justify-center items-center flex-col py-20 -mt-px"
    >
      <div className="w-full flex flex-col items-center">
        <h2 className="about-text text-black text-center text-[clamp(3rem,6vw,6rem)] mb-12 tracking-wider uppercase font-semibold">
          About Me
        </h2>

        <div className="flex gap-8 flex-col justify-center items-center lg:flex-row lg:items-start pt-10 px-5 max-w-7xl">
          <div className="flex flex-col max-w-2xl items-start justify-start ">
            <h2 className="about-text text-black text-[clamp(2rem,6vw,3rem)] text-semibold text-bold text-left">
              Holistic Approach to Development
            </h2>
            <div className="about-text text-gray-700 text-lg text-left  leading-relaxed mt-8">
              <p>
                <strong>Background: </strong>I started my career in IT and
                product support, and eventually started leading teams, helping
                users solve technical problems across enterprise systems. That
                experience gave me a strong foundation in troubleshooting,
                communication, and understanding how products perform in
                real-world environments.
              </p>
              <br></br>
              <p>
                <strong>The Transition: </strong>
                After several years leading teams, I realized I wanted to create
                the tools I once helped maintain. That led me back to school to
                formally study web development and make the shift into software
                engineering.
              </p>
              <br></br>
              <p>
                <strong>What I Bring: </strong>An adaptable mindset and a broad
                view of how products come together. Having worked in support,
                leadership, and development, I understand how systems evolve and
                where they can fail. That experience helps me build software
                that&apos;s practical, reliable, and built for real users.
              </p>
            </div>
          </div>
          <div className="w-full flex justify-center lg:justify-start max-w-md">
            <div className="about-image rounded-2xl overflow-hidden relative">
              <Image
                src="/profile.jpg"
                alt="profile picture"
                width={450}
                height={1200}
                draggable={false}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
