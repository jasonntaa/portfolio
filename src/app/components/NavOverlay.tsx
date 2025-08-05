"use client";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import React, { useEffect, useState } from "react";
gsap.registerPlugin(ScrollTrigger);

interface NavOverlayProps {
  onScroll: () => void;
}

const NavOverlay = () => {
  useGSAP(() => {
    const navClose = gsap.to(".overlay", {
      yPercent: -100,
      paused: true,
      duration: 0.5,
      ease: "power1.inOut",
    });
    ScrollTrigger.create({
      start: "top top",
      end: "bottom",
      onUpdate: (self) => {
        if (self.scroll()) {
          navClose.play();
        }
      },
    });
  });

  return (
    <div className="overlay text-white flex flex-col justify-center z-500 gap-15 w-full h-screen leading-25">
      <Link
        href="#hero"
        className="text-white text-[clamp(1rem,6vw,30rem)] flex items-center"
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
            fill="#ffffff"
          ></path>
        </svg>

        <h2 className="text-white ">Home</h2>
      </Link>

      <Link
        href="#projects"
        className="text-[clamp(1rem,6vw,30rem)]  flex items-center"
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
            fill="#ffffff"
          ></path>
        </svg>

        <h2 className="text-white ">Projects</h2>
      </Link>
      <Link
        href="#journey"
        className="text-white text-[clamp(1rem,6vw,30rem)] flex items-center"
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
            fill="#ffffff"
          ></path>
        </svg>

        <h2 className="text-white  ">Journey</h2>
      </Link>
      <Link
        href="#aboutme"
        className="text-white text-[clamp(1rem,6vw,30rem)] flex items-center"
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
            fill="#ffffff"
          ></path>
        </svg>

        <h2 className="text-white ">About Me</h2>
      </Link>
    </div>
  );
};

export default NavOverlay;
