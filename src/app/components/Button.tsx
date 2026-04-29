"use client";

import Link from "next/link";
import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  href: string;
  className?: string;
  download?: boolean | string;
  variant?: "dark" | "light";
}

export default function Button({
  children,
  href,
  className = "",
  download,
}: ButtonProps) {
  return (
    <Link
      href={href}
      target={download ? undefined : "_blank"}
      rel={download ? undefined : "noopener noreferrer"}
      className={`group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full font-bold text-sm tracking-[0.1em] uppercase transition-all duration-500 overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 border border-[#fafaf9] bg-transparent text-[#0e0e0e] ${className}`}
      download={download}
    >
      {/* Default background (white) - we use an absolute div so we can transition it if we want, or just let it sit. Actually, to do a slide effect, we can have the white bg be static, and a dark bg slide over it. */}
      <div className="absolute inset-0 w-full h-full bg-[#fafaf9] transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]" />

      {/* Hover background (dark) slides up */}
      <div className="absolute inset-0 w-full h-full bg-[#0e0e0e] transform translate-y-full transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:translate-y-0" />

      <span className="relative z-10 flex items-center gap-2 transition-colors duration-500 text-[#0e0e0e] group-hover:text-[#fafaf9]">
        {children}
        <svg
          className="w-4 h-4 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:translate-x-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          />
        </svg>
      </span>
    </Link>
  );
}
