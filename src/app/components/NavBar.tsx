"use client";

import Link from "next/link";
import { useState, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import NavOverlay from "./NavOverlay";
gsap.registerPlugin(ScrollTrigger);

const NavBar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const onClose = () => setNavOpen(false);

  return (
    <header className="sticky z-30 flex flex-col w-full p-4 m-auto">
      <nav className="flex justify-between w-full items-center">
        <p>Jason</p>
        <button
          id="menu"
          className="cursor-pointer bg-transparent border-none flex flex-col gap-2"
          onClick={() => {
            setNavOpen(!navOpen);
          }}
        >
          <span className="bg-white w-[50px] h-[1px]"></span>
          <span className="bg-white w-[50px] h-[1px]"></span>
        </button>
      </nav>
      {navOpen ? <NavOverlay /> : null}
    </header>
  );
};

export default NavBar;
