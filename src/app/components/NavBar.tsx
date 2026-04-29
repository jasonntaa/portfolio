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

    { href: "#projects", label: "Projects" },
        { href: "#aboutme", label: "The Journey" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <div className="relative flex gap-10">
      {links.map(({ href, label }) => (
        <Link
          key={href}
          className={`nav-link group relative px-4 py-2 transition-colors duration-300 text-xs font-bold uppercase tracking-[0.15em] ${
            activeSection === href
              ? "text-[#fafaf9]"
              : "text-[#fafaf9]/50 hover:text-[#fafaf9]"
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
    href: string,
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

        // Hide navbar as soon as user starts scrolling, reveal when back at top
        ScrollTrigger.create({
          trigger: "#hero",
          start: "top top+=1",
          onLeave: () => {
            gsap.to(headerRef.current, {
              yPercent: -100,
              duration: 0.35,
              ease: "power2.inOut",
            });
          },
          onEnterBack: () => {
            gsap.to(headerRef.current, {
              yPercent: 0,
              duration: 0.35,
              ease: "power2.out",
            });
          },
        });
      };

      const timer = setTimeout(initScrollTriggers, 100);

      return () => clearTimeout(timer);
    },
    { scope: headerRef },
  );

  return (
    <>
      <header
        ref={headerRef}
        className="fixed top-0 z-50 flex items-center w-full px-6 md:px-16 py-4 bg-[#0e0e0e]"
      >
        <nav className="flex w-full justify-end items-center">
          
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
            aria-label={
              navOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={navOpen}
            aria-controls="nav-overlay"
          >
            <span className="block w-[40px] h-[1px] bg-[#fafaf9]"></span>
            <span className="block w-[40px] h-[1px] bg-[#fafaf9]"></span>
          </button>
        </nav>
      </header>
      <NavOverlay isOpen={navOpen} onClose={closeNav} />
    </>
  );
};

export default NavBar;
