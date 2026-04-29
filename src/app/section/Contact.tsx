"use client";

import { useState } from "react";
import { ArrowUpRight, Check } from "@phosphor-icons/react";
import Button from "../components/Button";

export default function Contact() {
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

  const socialLinks = [
    {
      label: "Email",
      href: "#",
      isEmail: true,
    },
    {
      label: "LinkedIn",
      href: "https://linkedin.com/in/jasontta",
      isEmail: false,
    },
    {
      label: "GitHub",
      href: "https://github.com/jasonntaa",
      isEmail: false,
    },
  ];

  return (
    <section
      id="contact"
      className="flex flex-col w-full bg-[#0e0e0e] text-[#fafaf9] px-6 md:px-16 pt-20 md:pt-32 pb-12 md:pb-20 scroll-mt-20 overflow-hidden"
      aria-labelledby="contact-heading"
    >
      <div className="w-full flex flex-col gap-16 md:gap-32">
        
        <div className="flex flex-col w-full">
          {/* Meta strip */}
          <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.25em] text-[#fafaf9]/50 border-b border-[#fafaf9]/20 pb-4 mb-12 md:mb-20">
            <span>Contact</span>
            <span>Lets Connect</span>
          </div>

          {/* Massive Title */}
          <div className="flex justify-start">
            <h2
              id="contact-heading"
              className="text-[clamp(3.5rem,10vw,12rem)] leading-[0.85] font-bold uppercase tracking-tight"
            >
              Let&apos;s Connect
            </h2>
          </div>
        </div>

        {/* Two Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-8 pt-8 border-t border-[#fafaf9]/20">
          
          {/* Left Column: Statement & Resume */}
          <div className="flex flex-col items-start gap-10">
            <p className="text-xl md:text-3xl font-light text-[#fafaf9]/70 leading-relaxed max-w-lg">
              Open to front-end developer roles where I can leverage my technical skills and leadership experience.
            </p>
            
            <Button href="/Jason_T_Resume.pdf" download="Jason_T_Resume.pdf" className="mt-4">
              Download Resume
            </Button>
          </div>

          {/* Right Column: Social Links */}
          <div className="flex flex-col items-start md:items-end gap-6 md:gap-8 w-full">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#fafaf9]/50 mb-2 md:text-right">
              Socials
            </p>
            <div className="flex flex-col gap-4 w-full md:items-end">
              {socialLinks.map((link) => {
                const isCopiedState = link.isEmail && copied;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={link.isEmail ? handleEmailClick : undefined}
                    target={link.isEmail ? undefined : "_blank"}
                    rel={link.isEmail ? undefined : "noopener noreferrer"}
                    className={`group flex items-center justify-between w-full md:w-auto md:justify-end gap-6 text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight transition-opacity ${isCopiedState ? "text-emerald-400" : "hover:opacity-60"}`}
                  >
                    <span className="md:hidden opacity-0 group-hover:opacity-100 transition-opacity">
                      {isCopiedState ? <Check size={32} weight="bold" /> : <ArrowUpRight size={32} weight="bold" />}
                    </span>
                    
                    {isCopiedState ? "Copied!" : link.label}

                    <span className={`hidden md:block transition-all duration-300 transform ${isCopiedState ? "opacity-100 translate-x-0" : "opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0"}`}>
                      {isCopiedState ? <Check size={48} weight="bold" /> : <ArrowUpRight size={48} weight="bold" />}
                    </span>
                  </a>
                );
              })}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
