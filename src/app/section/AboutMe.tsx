"use client";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Experience from "./Experience";

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
  });

  return (
    <section
      id="aboutme"
      className="about-section dark-section bg-[#1a1a1a] flex justify-center items-center flex-col py-20 px-4"
    >
      <div className="w-full max-w-4xl mx-auto mt-10">
        <h2 className="about-text text-white text-center text-[clamp(2rem,6vw,6rem)] mb-12 tracking-wider uppercase font-semibold">
          About Me
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-10 mb-20">
          <div className="w-full md:w-1/3 flex justify-center">
            <div className="rounded-2xl overflow-hidden w-[300px] h-[375px] relative">
              <Image
                src="/images/profile.jpeg"
                alt="profile headshot"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>

          <div className="w-full md:w-2/3">
            <h2 className="about-text text-gray-300 text-3xl text-left leading-relaxed">
              Hey! I&apos;m Jason!
            </h2>
            <p className="about-text text-gray-300 text-xl text-left leading-relaxed mt-4">
              I am a front-end developer from Toronto with previous management
              experience. I strive to bring creativity to development while
              keeping it scalable, responsive and accessible. When I&apos;m not
              coding, you&apos;ll find me exploring new pizza places, travelling
              or editing YouTube videos!
            </p>
          </div>
        </div>

        <div className="w-full">
          <Experience />
        </div>
      </div>
    </section>
  );
};

export default About;
