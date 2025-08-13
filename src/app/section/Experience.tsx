"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { expCards } from "@/constants";
import { useState } from "react";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  const [activeTab, setActiveTab] = useState("work");
  const workCards = expCards.filter(
    (card) => card.type === "work" || !card.type
  );
  const educationCards = expCards.filter((card) => card.type === "education");

  const currentCards = activeTab === "work" ? workCards : educationCards;

  return (
    <div
      id="experience"
      className="flex flex-col justify-center items-center w-full"
    >
      <div className="w-full max-w-4xl mx-auto bg-[#2e2e2e] p-[clamp(1rem,5vw,2rem)] rounded-2xl">
        <div className="flex items-center justify-center rounded-lg mb-10 border border-neutral-700 bg-neutral-800/50 p-1 max-w-md mx-auto">
          <button
            onClick={() => setActiveTab("work")}
            className={`flex-1 px-4 py-2 text-sm font-medium rounded-md transition-colors duration-300 ease-in-out ${
              activeTab === "work"
                ? "bg-neutral-700 text-white"
                : "text-neutral-400 hover:text-white"
            }`}
          >
            Work Experience
          </button>
          <button
            onClick={() => setActiveTab("education")}
            className={`flex-1 px-4 py-2 text-sm font-medium rounded-md transition-colors duration-300 ease-in-out ${
              activeTab === "education"
                ? "bg-neutral-700 text-white"
                : "text-neutral-400 hover:text-white"
            }`}
          >
            Education
          </button>
        </div>

        <div className="relative">
          <ul className="relative border-l border-neutral-600 ml-6">
            {currentCards.map((card) => (
              <li
                key={card.title}
                className="relative pl-10 py-8 first:pt-0 last:pb-0"
              >
                <div className="absolute -left-6 top-8 flex items-center justify-center">
                  <div className="relative flex shrink-0 overflow-hidden rounded-full w-12 h-12 p-1 bg-[#2e2e2e]">
                    <Image
                      className="object-contain"
                      alt={card.title}
                      src={card.logoPath}
                      fill
                      sizes="3rem"
                    />
                  </div>
                </div>

                <div className="flex flex-1 flex-col justify-start gap-1">
                  <time className="text-xs text-neutral-400">{card.date}</time>
                  <h3 className="font-semibold text-xl text-white leading-tight">
                    {card.company}
                  </h3>
                  <p className="text-neutral-300 italic text-sm mb-3">
                    {card.title}
                  </p>
                  <ul className="ml-4 list-outside list-disc space-y-2">
                    {card.description.map((description, descIndex) => (
                      <li
                        key={descIndex}
                        className="text-sm text-neutral-400 leading-relaxed"
                      >
                        {description}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Experience;
