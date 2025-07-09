import React from "react";

const TechStack = () => {
  return (
    <section className="flex justify-center items-center">
      <ul className=" flex gap-6 text-white border-2 border-white rounded-xl p-5">
        <li>
          <img className="w-10" src="/assets/git 1.svg" alt="icon" />
        </li>
        <li>
          <img className="w-10" src="/assets/css.svg" alt="git icon" />
        </li>
        <li>
          <img className="w-6" src="/assets/figma.svg" alt="icon" />
        </li>
        <li>
          <img className="w-12" src="/assets/tailwind.svg" alt="icon" />
        </li>
        <li>
          <img className="w-10" src="/assets/react 1.svg" alt="icon" />
        </li>
        <li>
          <img className="w-8" src="/assets/html.svg" alt="icon" />
        </li>
        <li>
          <img className="w-9" src="/assets/nextjs.svg" alt="icon" />
        </li>
        <li>
          <img className="w-8" src="/assets/typescript.svg" alt="icon" />
        </li>
      </ul>
    </section>
  );
};

export default TechStack;
