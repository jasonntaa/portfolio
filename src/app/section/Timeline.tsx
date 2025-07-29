"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const Timeline = () => {
  useGSAP(() => {
    gsap.to("#timeline", {
      transformOrigin: "bottom bottom",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#timeline",
        start: "top center",
        end: "70% center",
      },
    });
  }, []);

  return (
    <section>
      <div className="flex flex-col justify-center items-center text-white mt-40">
        <h1 className="text-5xl">My Journey</h1>
        <br />
        <h2 className="text-xl text-center mx-30">
          I like bringing ideas to life—whether it&apos;s through code, videos,
          or food! I&apos;m drawn to projects that mix creativity with tech, and
          I&apos;m always up for connecting over shared curiosities, good
          design, or great food.
        </h2>
      </div>
      <div className="grid-container grid grid-cols-1 grid-rows-4 lg:grid-cols-3 text-white mt-30">
        <div className=" col-span-1 col-start-1 row-start-2 row-span-1 mt-15">
          <h1>Production Support Manager</h1>
          <h2>June 2020 - December 2023</h2>
          <p>
            Led technical investigations and root cause analysis for production
            issues, collaborating cross-functionally to deliver fast,
            user-focused solutions. Created and optimized internal dashboards,
            documentation, and tools to improve team workflows and incident
            visibility. Partnered closely with development teams to test,
            validate, and deploy application fixes—ensuring a seamless
            experience for end users.
          </p>
        </div>
        <div className="relative flex justify-center row-span-4 col-span-1 col-start-2">
          <Image
            id="timeline"
            src="/assets/timeline.svg"
            alt="timeline picture"
            fill
          ></Image>
        </div>
        <div className="col-start-3 text-white mt-5">
          <h1>Frontend Student</h1>
          <h2>January 2023 - Present</h2>
          <p>
            Building a strong foundation in modern web technologies and design
            principles. Gaining hands-on experience with HTML, CSS, JavaScript,
            TypeScript, React, Next.js, and Figma through coursework and
            practical projects. Developing responsive, accessible, and
            user-focused web applications while collaborating in team-based
            learning environments.
          </p>
        </div>
        <div className="col-start-3 row-start-3 text-white mt-20">
          <h1>Service Desk Specialist</h1>
          <h2>March 2019 - May 2020</h2>
          <p>
            Resolved a high volume of technical issues across multiple
            platforms, demonstrating strong troubleshooting and problem-solving
            skills. Authored and maintained clear technical documentation,
            improving team efficiency and supporting user self-service.
            Supported digital collaboration tools and AV systems, ensuring
            smooth user experiences and effective communication.
          </p>
        </div>
        <div className="col-start-1 row-start-4 text-white mt-35">
          <h1 className="text-4xl">Download my Resume</h1>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
