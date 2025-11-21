"use client";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import Link from "next/link";

import React, { MouseEvent, useRef, useEffect } from "react";

gsap.registerPlugin(ScrollToPlugin);

interface NavOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const NavOverlay = ({ isOpen, onClose }: NavOverlayProps) => {
  const overlayRef = useRef(null);

  useGSAP(() => {
    gsap.to(overlayRef.current, {
      y: isOpen ? "0%" : "-100%",
      duration: 1,
      ease: "power2.inOut",
    });
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleScroll = () => {
      onClose();
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isOpen, onClose]);

  const handleLinkClick = (
    e: MouseEvent<HTMLAnchorElement>,
    href: string
  ): void => {
    e.preventDefault();
    onClose();
    gsap.to(window, {
      duration: 2,
      scrollTo: href,
      ease: "power2.inOut",
      delay: 0.75,
    });
  };

  return (
    <div
      ref={overlayRef}
      className={`fixed top-0 left-0 z-30 flex h-screen w-full flex-col justify-center gap-4 bg-secondary ${
        isOpen ? "pointer-events-auto" : "pointer-events-none"
      }`}
      style={{ transform: "translateY(-100%)" }}
    >
      <Link
        href="#hero"
        onClick={(e) => handleLinkClick(e, "#hero")}
        className="text-white nav-text text-[clamp(1rem,6vw,30rem)] flex items-center"
      >
        <svg
          width="clamp(1rem,6vw,40rem)"
          height="clamp(1rem,6vw,40rem)"
          viewBox="0 0 24 24"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          fill="#1a1a1a"
        >
          <path
            d="M11.9999,3 C12.5522,3 12.9999,3.44772 12.9999,4 L12.9999,10.268 L18.4281,7.13397 C18.9064,6.85783 19.518,7.02171 19.7942,7.5 C20.0703,7.97829 19.9064,8.58988 19.4281,8.86603 L13.9999,12 L19.4281,15.134 C19.9064,15.4101 20.0703,16.0217 19.7941,16.5 C19.518,16.9783 18.9064,17.1422 18.4281,16.866 L12.9999,13.7321 L12.9999,20 C12.9999,20.5523 12.5522,21 11.9999,21 C11.4476,21 10.9999,20.5523 10.9999,20 L10.9999,13.7321 L5.57174,16.866 C5.09345,17.1422 4.48186,16.9783 4.20571,16.5 C3.92957,16.0217 4.09345,15.4101 4.57174,15.134 L9.99992,12 L4.5717,8.86603 C4.09341,8.58988 3.92953,7.97829 4.20567,7.5 C4.48182,7.02171 5.09341,6.85783 5.5717,7.13397 L10.9999,10.268 L10.9999,4 C10.9999,3.44772 11.4476,3 11.9999,3 Z"
            id="路径"
            fill="#1a1a1a"
          ></path>
        </svg>

        <h2 className="text-primary ">Home</h2>
      </Link>
      <Link
        href="#aboutme"
        onClick={(e) => handleLinkClick(e, "#aboutme")}
        className="text-white text-[clamp(1rem,6vw,30rem)] nav-text flex items-center"
      >
        <svg
          width="clamp(1rem,6vw,40rem)"
          height="clamp(1rem,6vw,40rem)"
          viewBox="0 0 24 24"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          fill="#000000"
        >
          <path
            d="M11.9999,3 C12.5522,3 12.9999,3.44772 12.9999,4 L12.9999,10.268 L18.4281,7.13397 C18.9064,6.85783 19.518,7.02171 19.7942,7.5 C20.0703,7.97829 19.9064,8.58988 19.4281,8.86603 L13.9999,12 L19.4281,15.134 C19.9064,15.4101 20.0703,16.0217 19.7941,16.5 C19.518,16.9783 18.9064,17.1422 18.4281,16.866 L12.9999,13.7321 L12.9999,20 C12.9999,20.5523 12.5522,21 11.9999,21 C11.4476,21 10.9999,20.5523 10.9999,20 L10.9999,13.7321 L5.57174,16.866 C5.09345,17.1422 4.48186,16.9783 4.20571,16.5 C3.92957,16.0217 4.09345,15.4101 4.57174,15.134 L9.99992,12 L4.5717,8.86603 C4.09341,8.58988 3.92953,7.97829 4.20567,7.5 C4.48182,7.02171 5.09341,6.85783 5.5717,7.13397 L10.9999,10.268 L10.9999,4 C10.9999,3.44772 11.4476,3 11.9999,3 Z"
            id="路径"
            fill="#1a1a1a"
          ></path>
        </svg>

        <h2 className="text-primary">About Me</h2>
      </Link>
      <Link
        href="#projects"
        onClick={(e) => handleLinkClick(e, "#projects")}
        className="text-[clamp(1rem,6vw,30rem)] nav-text   flex items-center"
      >
        <svg
          width="clamp(1rem,6vw,40rem)"
          height="clamp(1rem,6vw,40rem)"
          viewBox="0 0 24 24"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          fill="#000000"
        >
          <path
            d="M11.9999,3 C12.5522,3 12.9999,3.44772 12.9999,4 L12.9999,10.268 L18.4281,7.13397 C18.9064,6.85783 19.518,7.02171 19.7942,7.5 C20.0703,7.97829 19.9064,8.58988 19.4281,8.86603 L13.9999,12 L19.4281,15.134 C19.9064,15.4101 20.0703,16.0217 19.7941,16.5 C19.518,16.9783 18.9064,17.1422 18.4281,16.866 L12.9999,13.7321 L12.9999,20 C12.9999,20.5523 12.5522,21 11.9999,21 C11.4476,21 10.9999,20.5523 10.9999,20 L10.9999,13.7321 L5.57174,16.866 C5.09345,17.1422 4.48186,16.9783 4.20571,16.5 C3.92957,16.0217 4.09345,15.4101 4.57174,15.134 L9.99992,12 L4.5717,8.86603 C4.09341,8.58988 3.92953,7.97829 4.20567,7.5 C4.48182,7.02171 5.09341,6.85783 5.5717,7.13397 L10.9999,10.268 L10.9999,4 C10.9999,3.44772 11.4476,3 11.9999,3 Z"
            id="路径"
            fill="#1a1a1a"
          ></path>
        </svg>

        <h2 className="text-primary ">Projects</h2>
      </Link>
    </div>
  );
};

export default NavOverlay;
