"use client";

import Link from "next/link";
import { useState, useRef, MouseEvent } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import NavOverlay from "./NavOverlay";
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const NavLinks = ({
  onLinkClick,
}: {
  onLinkClick: (e: MouseEvent<HTMLAnchorElement>, href: string) => void;
}) => {
  return (
    <div className="flex gap-10">
      <Link
        className="nav-text px-4 py-2 rounded-full transition-colors duration-300"
        href="#hero"
        onClick={(e) => onLinkClick(e, "#hero")}
      >
        Home
      </Link>
      <Link
        className="nav-text px-4 py-2 rounded-full transition-colors duration-300"
        href="#projects"
        onClick={(e) => onLinkClick(e, "#projects")}
      >
        Projects
      </Link>
      <Link
        className="nav-text px-4 py-2 rounded-full transition-colors duration-300"
        href="#aboutme"
        onClick={(e) => onLinkClick(e, "#aboutme")}
      >
        About Me
      </Link>
    </div>
  );
};
const NavBar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const headerRef = useRef(null);

  const toggleNav = () => setNavOpen(!navOpen);
  const closeNav = () => setNavOpen(false);

  const handleDesktopLinkClick = (
    e: MouseEvent<HTMLAnchorElement>,
    href: string
  ): void => {
    e.preventDefault();
    gsap.to(window, {
      duration: 1,
      scrollTo: { y: href, autoKill: false },
      ease: "power2.inOut",
    });
  };

  useGSAP(() => {
    const darkSections = gsap.utils.toArray(".dark-section");

    const triggers = darkSections.map((section) => {
      return ScrollTrigger.create({
        scroller: "#smooth-wrapper",
        trigger: section as Element,
        start: "top center",
        end: "bottom center",
        toggleClass: {
          targets: headerRef.current,
          className: "nav-theme-dark",
        },
      });
    });

    return () => {
      triggers.forEach((trigger) => trigger.kill());
    };
  }, []);
  return (
    <>
      <header
        ref={headerRef}
        className="fixed top-0 z-40 flex justify-around items-center w-full p-4 m-auto bg-transparent transition-colors duration-300"
      >
        <nav className="flex top-0 left-0 right-0 justify-between w-[80vw] items-center">
          <p className="flex-start nav-logo">Jason</p>{" "}
          <div className="hidden md:hidden lg:flex">
            <NavLinks onLinkClick={handleDesktopLinkClick} />
          </div>
          <button
            id="menu"
            className="flex md:flex lg:hidden cursor-pointer bg-transparent border-none flex-col gap-2"
            onClick={toggleNav}
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>
        </nav>
      </header>
      <NavOverlay isOpen={navOpen} onClose={closeNav} />
    </>
  );
};

export default NavBar;
