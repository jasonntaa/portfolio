"use client";

import Link from "next/link";
import { useState, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState("false");
  const navRef = useRef(null);

  useGSAP(() => {
    // Hero section - black background
    gsap.to(navRef.current, {
      backgroundColor: "#000000",
      textColor: "white",
      scrollTrigger: {
        trigger: "#hero", // Your hero section ID
        start: "top bottom",
        end: "bottom top",
        toggleActions: "play none none reverse",
      },
    });

    // About section - light background
    gsap.to(navRef.current, {
      backgroundColor: "#fafaf9", // Match your AboutMe bg
      textColor: "black",
      scrollTrigger: {
        trigger: "#about", // Your about section ID
        start: "top center",
        end: "bottom center",
        toggleActions: "play none none reverse",
      },
    });

    // Experience section - different color
    gsap.to(navRef.current, {
      backgroundColor: "#ffffff",
      textColor: "black",
      scrollTrigger: {
        trigger: "#experience", // Your experience section ID
        start: "top center",
        end: "bottom center",
        toggleActions: "play none none reverse",
      },
    });

    // Contact section - another color
    gsap.to(navRef.current, {
      backgroundColor: "#1f2937",
      textColor: "white",
      scrollTrigger: {
        trigger: "#contact", // Your contact section ID
        start: "top center",
        end: "bottom center",
        toggleActions: "play none none reverse",
      },
    });
  }, []);
  return (
    <header className="sticky top-0 z-30 flex justify-center w-full p-4 m-auto">
      <nav className=" nav-container flex justify-center items-center rounded-xl mt-6 gap-60 p-6">
        <ul className="text-white flex justify-center z-10 gap-15 w-full ">
          <Link href="">Home</Link>
          <Link href="">Projects</Link>
          <Link href="">Journey</Link>
          <Link href="">Contact</Link>
        </ul>
        <div>
          <button className="flex justify-end text-white">Switch</button>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
