"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Footer = () => {
  const [copied, setCopied] = useState(false);

  const handleEmailClick = async (e: React.MouseEvent) => {
    e.preventDefault();
    try {
      await navigator.clipboard.writeText("jasonntaa@gmail.com");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy", err);
    }
  };

  return (
    <section className="bg-black py-8 px-4">
      <div className="icons flex justify-center gap-5 mb-4 relative">
         <div className="relative flex flex-col items-center">
           <a 
             href="#" 
             onClick={handleEmailClick} 
             aria-label="Copy my email address"
             className="cursor-pointer block"
           >
            <Image
              className={`w-10 h-10 transition-all duration-300 ${copied ? "scale-90 opacity-60" : "hover:scale-110"}`}
              src="/assets/email-button.svg"
              alt="email"
              width={40}
              height={40}
              draggable={false}
            />
          </a>
          
          {copied && (
            <div className="absolute -top-10 bg-emerald-500 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full pointer-events-none whitespace-nowrap shadow-lg animate-in fade-in slide-in-from-bottom-2 duration-200">
              Copied!
            </div>
          )}
        </div>
        <Link
          href="https://github.com/jasonntaa"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit my GitHub profile (opens in a new tab)"
        >
          <Image
            className="w-10 h-10 transition-transform hover:scale-110"
            src="/assets/git-button.svg"
            alt="git logo"
            width={40}
            height={40}
            draggable={false}
          />
        </Link>
       
        <Link
          href="https://www.linkedin.com/in/jasontta/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit my LinkedIn profile (opens in a new tab)"
        >
          <Image
            className="w-10 h-10 transition-transform hover:scale-110"
            src="/assets/linkedin-button.svg"
            alt="linkedin"
            width={40}
            height={40}
            draggable={false}
          />
        </Link>
        <Link
          href="https://www.youtube.com/@JasonandJoey"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit my YouTube channel (opens in a new tab)"
        >
          <Image
            className="w-10 h-10 transition-transform hover:scale-110"
            src="/assets/youtube-button.svg"
            alt="youtube"
            width={40}
            height={40}
            draggable={false}
          />
        </Link>
      </div>
      <div className="text-white text-center text-sm">Jason Ta</div>
    </section>
  );
};

export default Footer;
