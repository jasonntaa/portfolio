"use client";
import gsap from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

import { expCards } from "@/constants";

import { useState } from "react";

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  const [activeTab, setActiveTab] = useState("work");
  const workCards = expCards.filter(
    (card) => card.type === "work" || !card.type
  );
  const educationCards = expCards.filter((card) => card.type === "education");

  const currentCards = activeTab === "work" ? workCards : educationCards;

  return (
    <section
      id="experience"
      className="flex-center md:mt-40 mt-20 section-padding xl:px-0 bg-[#1a1a1a]"
    >
      <div className="w-[60vw] md:px-20 px-5 border-solid sticky">
        <div className="mt-32 relative">
          <div className="mb-8">
            <div className="flex items-center justify-center rounded-lg bg-gray-800/50 p-1 mb-4 max-w-md mx-auto">
              <button
                onClick={() => setActiveTab("work")}
                className={`flex-1 px-6 py-3 text-sm font-medium rounded-md transition-all duration-200 ${
                  activeTab === "work"
                    ? "bg-white text-gray-900 shadow-lg"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                Work Experience
              </button>
              <button
                onClick={() => setActiveTab("education")}
                className={`flex-1 px-6 py-3 text-sm font-medium rounded-md transition-all duration-200 ${
                  activeTab === "education"
                    ? "bg-white text-gray-900 shadow-lg"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                Education
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-xl border border-gray-700 bg-gray-900/50 shadow-xl">
              <div className="p-0">
                <ul className="ml-10 border-l border-gray-600">
                  {currentCards.map((card, index) => (
                    <li
                      key={card.title}
                      className="relative ml-10 py-6 first:pt-6 last:pb-6"
                    >
                      <div className="absolute -left-16 top-6 flex items-center justify-center ">
                        <div className="relative flex shrink-0 overflow-hidden rounded-full w-12 h-12 border mt-3">
                          <img
                            className="aspect-square h-full w-full object-contain"
                            alt={card.title}
                            src={card.logoPath}
                          />
                        </div>
                      </div>

                      <div className="flex flex-1 flex-col justify-start gap-2">
                        <time className="text-xs text-gray-400">
                          {card.date}
                        </time>

                        <h2 className="font-semibold text-xl text-white leading-tight">
                          {card.company}
                        </h2>

                        <div className="mb-4">
                          <p className="text-white italic text-sm mb-3">
                            {card.title}
                          </p>
                          <ul className="ml-4 list-outside list-disc space-y-2">
                            {card.description.map((description, descIndex) => (
                              <li
                                key={descIndex}
                                className="text-sm text-gray-300 leading-relaxed"
                              >
                                {description}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
