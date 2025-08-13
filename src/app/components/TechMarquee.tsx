import React from "react";

interface TechMarqueeProps {
  items: string[];
}

const TechMarquee: React.FC<TechMarqueeProps> = ({ items }) => {
  return (
    <div className="relative flex overflow-x-hidden group w-full">
      <div className="flex flex-shrink-0 animate-marquee group-hover:[animation-play-state:paused]">
        <ul className="flex items-center justify-center md:justify-start [&_li]:mx-4 whitespace-nowrap">
          {items.map((item, index) => (
            <li
              key={index}
              className="text-sm uppercase tracking-widest text-neutral-400"
            >
              {item}
            </li>
          ))}
        </ul>
        <ul
          className="flex items-center justify-center md:justify-start [&_li]:mx-4 whitespace-nowrap"
          aria-hidden="true"
        >
          {items.map((item, index) => (
            <li
              key={index}
              className="text-sm uppercase tracking-widest text-neutral-400"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TechMarquee;
