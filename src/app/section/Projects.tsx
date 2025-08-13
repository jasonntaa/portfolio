"use client";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TechMarquee from "../components/TechMarquee";
gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  useGSAP(() => {
    gsap.from(".project-text", {
      scrollTrigger: {
        trigger: ".project-text",
        start: "bottom bottom",
        end: "+=100px",
        toggleActions: "play none none reverse",
        markers: true,
      },
      y: 30,
      opacity: 0,
      ease: "power1.inOut",
    });
  });
  return (
    <section
      id="projects"
      className="projects flex flex-col  w-full text-black bg-[#fafaf9] px-4 py-10 md:p-12 -mt-px"
    >
      <div className="flex dark-section justify-between mx-10">
        <h1 className="project-text text-[clamp(1.5rem,8vw,7rem)] font-bold">
          PROJECTS
        </h1>
        <h1 className="project-text text-[clamp(1.5rem,8vw,7rem)] font-bold">
          &#39;25
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full">
        <article className="projects">
          <Dialog>
            <DialogTrigger asChild>
              <div className="project-card mt-2 full bg-black p-10 rounded-4xl">
                <div className="w-full overflow-hidden">
                  <Image
                    className="rounded-2xl object-cover "
                    src="/images/Travel Placeholder.webp"
                    alt="Travino App"
                    height={1400}
                    width={1400}
                  ></Image>
                </div>
                <div className="mt-4">
                  <h3 className="text-white text-3xl mt-2">Travelo</h3>
                  <div className="w-full mt-4">
                    <TechMarquee
                      items={[
                        "NextJS",
                        "Tailwind CSS",
                        "TypeScript",
                        "Vercel",
                        "UX/UI",
                        "Figma",
                      ]}
                    />
                  </div>
                </div>
              </div>
            </DialogTrigger>
            <DialogContent
              style={{ maxWidth: "90vw", width: "100%" }}
              className="h-auto max-h-[90vh] bg-[#1a1a1a] border-neutral-800 text-white p-0 overflow-y-auto"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
                <div className="w-full h-full rounded-lg overflow-hidden">
                  <Image
                    className="object-cover w-full h-full"
                    src="/images/Travel Placeholder.webp"
                    alt="Travino App"
                    width={800}
                    height={800}
                  />
                </div>

                <div className="flex flex-col gap-4">
                  <DialogHeader>
                    <DialogTitle className="text-4xl font-bold">
                      Travino
                    </DialogTitle>
                    <DialogDescription className="text-neutral-400">
                      A modern solution for planning and booking your next
                      adventure.
                    </DialogDescription>
                  </DialogHeader>

                  <div className="text-neutral-300 leading-relaxed">
                    <p>
                      Travino is a full-stack web application designed to
                      simplify the travel planning process. It features an
                      intuitive user interface for searching destinations,
                      managing itineraries, and discovering local attractions,
                      all in one place.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-2">
                      Technologies Used
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "NextJS",
                        "Tailwind CSS",
                        "TypeScript",
                        "Vercel",
                        "UX/UI",
                        "Figma",
                      ].map((tech) => (
                        <span
                          key={tech}
                          className="bg-neutral-700 text-neutral-300 text-xs font-medium px-2.5 py-1 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4 mt-4">
                    <a
                      href="https://travino-app.vercel.app" // Placeholder Live Site URL
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-black bg-white rounded-lg hover:bg-neutral-200 transition-colors"
                    >
                      Live Site
                    </a>
                    <a
                      href="https://github.com/jasonntaa?tab=repositories" // Add your GitHub repo link here
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-transparent border-2 border-neutral-600 rounded-lg hover:bg-neutral-800 transition-colors"
                    >
                      View Code
                    </a>
                  </div>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </article>

        <article className="projects">
          <Dialog>
            <DialogTrigger asChild>
              <div className="project-card mt-2 full bg-black p-10 rounded-4xl">
                <Image
                  className="rounded-2xl pb-4"
                  src="/images/B-Log.png"
                  alt="B-Log Movie App"
                  height={1200}
                  width={1500}
                ></Image>
                <div className="mt-4">
                  <h3 className="text-white text-3xl mt-2">MovieApp</h3>
                  <div className="w-full mt-4">
                    <TechMarquee
                      items={[
                        "NextJS",
                        "Tailwind CSS",
                        "TypeScript",
                        "Vercel",
                        "UX/UI",
                        "Figma",
                        "AppWrite",
                        "NodeJS",
                        "Express",
                      ]}
                    />
                  </div>
                </div>
              </div>
            </DialogTrigger>
            <DialogContent
              style={{ maxWidth: "90vw", width: "100%" }}
              className="h-auto max-h-[90vh] bg-[#1a1a1a] border-neutral-800 text-white p-0 overflow-y-auto"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
                <div className="w-full h-full rounded-lg overflow-hidden">
                  <Image
                    className="object-cover w-full h-full"
                    src="/images/B-Log.png"
                    alt="B-Log Movie App"
                    width={800}
                    height={800}
                  />
                </div>
                {/* Right Column: Details */}
                <div className="flex flex-col gap-4">
                  <DialogHeader>
                    <DialogTitle className="text-4xl font-bold">
                      B-Log Movie App
                    </DialogTitle>
                    <DialogDescription className="text-neutral-400">
                      Discover and track trending movies and TV shows.
                    </DialogDescription>
                  </DialogHeader>

                  <div className="text-neutral-300 leading-relaxed">
                    <p>
                      B-Log is a dynamic movie discovery platform that leverages
                      the TMDB API to provide users with up-to-date information
                      on trending, popular, and upcoming films. It includes user
                      authentication and watchlist functionality.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-2">
                      Technologies Used
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "NextJS",
                        "Tailwind CSS",
                        "TypeScript",
                        "AppWrite",
                        "NodeJS",
                        "Express",
                      ].map((tech) => (
                        <span
                          key={tech}
                          className="bg-neutral-700 text-neutral-300 text-xs font-medium px-2.5 py-1 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4 mt-4">
                    <a
                      href="https://b-log-app.vercel.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-black bg-white rounded-lg hover:bg-neutral-200 transition-colors"
                    >
                      Live Site
                    </a>
                    <a
                      href="https://github.com/jasonntaa/Movie-Project"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-transparent border-2 border-neutral-600 rounded-lg hover:bg-neutral-800 transition-colors"
                    >
                      View Code
                    </a>
                  </div>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </article>
      </div>
    </section>
  );
};

export default Projects;
