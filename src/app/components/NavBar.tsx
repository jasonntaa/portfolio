"use client";

import Link from "next/link";
import { useState, useRef, MouseEvent } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import NavOverlay from "./NavOverlay";
gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

const NavLinks = ({
  onLinkClick,
  activeSection,
}: {
  onLinkClick: (e: MouseEvent<HTMLAnchorElement>, href: string) => void;
  activeSection: string;
}) => {
  const links = [
    { href: "#hero", label: "Home" },
    { href: "#projects", label: "Projects" },
    { href: "#aboutme", label: "About Me" },
  ];

  return (
    <div className="relative flex gap-10">
      {links.map(({ href, label }) => (
        <Link
          key={href}
          className={`nav-link group relative px-4 py-2 transition-colors duration-300 ${
            activeSection === href
              ? "text-white font-semibold"
              : "text-white hover:text-white"
          }`}
          href={href}
          onClick={(e) => onLinkClick(e, href)}
        >
          {label}
        </Link>
      ))}
    </div>
  );
};

const NavBar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#hero");
  const isScrolling = useRef(false);
  const headerRef = useRef(null);

  const toggleNav = () => setNavOpen(!navOpen);

  const closeNav = () => setNavOpen(false);

  const handleDesktopLinkClick = (
    e: MouseEvent<HTMLAnchorElement>,
    href: string
  ): void => {
    e.preventDefault();
    setActiveSection(href);
    isScrolling.current = true;

    gsap.to(window, {
      duration: 1,
      scrollTo: { y: href, autoKill: false },
      ease: "power2.inOut",
      onComplete: () => {
        isScrolling.current = false;
      },
    });
  };

  useGSAP(
    () => {
      const initScrollTriggers = () => {
        const sections = ["#hero", "#projects", "#aboutme"];
        sections.forEach((section) => {
          ScrollTrigger.create({
            trigger: section,
            start: "top center",
            end: "bottom center",
            onToggle: (self) => {
              if (self.isActive && !isScrolling.current) {
                setActiveSection(section);
              }
            },
          });
        });
      };

      const timer = setTimeout(initScrollTriggers, 100);

      return () => clearTimeout(timer);
    },
    { scope: headerRef }
  );

  return (
    <>
      <header
        ref={headerRef}
        className="fixed top-0 z-40 flex justify-around items-center w-full p-4 m-auto bg-[#1a1a1a]/40 backdrop-blur-xl border-b border-gray-500"
      >
        <nav className="flex top-0 left-0 right-0 justify-between w-[80vw] items-center">
          <p className="flex-start text-white">Jason</p>
          <div className="hidden md:hidden lg:flex">
            <NavLinks
              onLinkClick={handleDesktopLinkClick}
              activeSection={activeSection}
            />
          </div>
          <button
            id="menu"
            className="flex md:flex lg:hidden cursor-pointer bg-transparent border-none flex-col gap-2"
            onClick={toggleNav}
          >
            <span className="block w-[40px] h-[1px] bg-white"></span>
            <span className="block w-[40px] h-[1px] bg-white"></span>
          </button>
        </nav>
      </header>
      <NavOverlay isOpen={navOpen} onClose={closeNav} />
    </>
  );
};

export default NavBar;
