"use client";
import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

const TechStack = () => {
  const highlightRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const techItems = gsap.utils.toArray(".tech-item");
    const highlight = highlightRef.current;

    gsap.set(highlight, {
      opacity: 0,
      scale: 0.8,
    });

    techItems.forEach((item: any) => {
      const icon = item.querySelector("svg");

      // Mouse enter animation
      item.addEventListener("mouseenter", () => {
        const rect = item.getBoundingClientRect();
        const containerRect = containerRef.current?.getBoundingClientRect();

        if (containerRect && highlight) {
          // Calculate position relative to container
          const x = rect.left - containerRect.left;
          const y = rect.top - containerRect.top;

          // Animate highlight to new position
          gsap.to(highlight, {
            x: x,
            y: y,
            width: rect.width,
            height: rect.height,
            opacity: 1,
            scale: 1,
            duration: 0.3,
            ease: "power2.out",
          });
        }

        // Scale icon on hover
        gsap.to(icon, {
          scale: 1.1,
          duration: 0.3,
          ease: "power2.out",
        });
      });

      // Mouse leave animation
      item.addEventListener("mouseleave", () => {
        gsap.to(icon, {
          scale: 1,
          duration: 0.3,
          ease: "power2.out",
        });
      });
    });

    // Hide highlight when leaving container
    containerRef.current?.addEventListener("mouseleave", () => {
      gsap.to(highlight, {
        opacity: 0,
        scale: 0.8,
        duration: 0.3,
        ease: "power2.out",
      });
    });
  }, []);

  return (
    <section className="bg-[#fafaf9] relative py-20 ">
      <div className="text-center mb-6">
        <h1 className="title-main text-black text-[clamp(2rem,8vw,4rem)] tracking-wider uppercase">
          MY TECHSTACK
        </h1>
      </div>
      <div ref={containerRef} className="relative max-w-6xl mx-auto mt-10">
        {/* Moving highlight overlay */}
        <div
          ref={highlightRef}
          className="absolute top-0 left-0 bg-black/10 rounded-xl pointer-events-none z-0 backdrop-blur-sm border border-black/5"
          style={{ willChange: "transform" }}
        />

        {/* Desktop Grid */}
        <div className="hidden lg:block">
          {/* Top Row - 3 columns */}
          <div className="grid grid-cols-3 border-b border-neutral-300">
            {/* React */}
            <div
              rel="noopener noreferrer"
              className="tech-item flex items-center justify-center border-r border-neutral-300 group cursor-pointer h-[clamp(200px,20vw,300px)] relative z-10"
            >
              <svg
                fill="#000"
                width="90px"
                height="90px"
                viewBox="0 0 24 24"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                className="transition-all duration-300"
              >
                <title>React icon</title>
                <path d="M12 9.861A2.139 2.139 0 1 0 12 14.139 2.139 2.139 0 1 0 12 9.861zM6.008 16.255l-.472-.12C2.018 15.246 0 13.737 0 11.996s2.018-3.25 5.536-4.139l.472-.119.133.468a23.53 23.53 0 0 0 1.363 3.578l.101.213-.101.213a23.307 23.307 0 0 0-1.363 3.578l-.133.467zM5.317 8.95c-2.674.751-4.315 1.9-4.315 3.046 0 1.145 1.641 2.294 4.315 3.046a24.95 24.95 0 0 1 1.182-3.046A24.752 24.752 0 0 1 5.317 8.95zM17.992 16.255l-.133-.469a23.357 23.357 0 0 0-1.364-3.577l-.101-.213.101-.213a23.42 23.42 0 0 0 1.364-3.578l.133-.468.473.119c3.517.889 5.535 2.398 5.535 4.14s-2.018 3.25-5.535 4.139l-.473.12zm-.491-4.259c.48 1.039.877 2.06 1.182 3.046 2.675-.752 4.315-1.901 4.315-3.046 0-1.146-1.641-2.294-4.315-3.046a24.788 24.788 0 0 1-1.182 3.046zM5.31 8.945l-.133-.467C4.188 4.992 4.488 2.494 6 1.622c1.483-.856 3.864.155 6.359 2.716l.34.349-.34.349a23.552 23.552 0 0 0-2.422 2.967l-.135.193-.235.02a23.657 23.657 0 0 0-3.785.61l-.472.119zm1.896-6.63c-.268 0-.505.058-.705.173-.994.573-1.17 2.565-.485 5.253a25.122 25.122 0 0 1 3.233-.501 24.847 24.847 0 0 1 2.052-2.544c-1.56-1.519-3.037-2.381-4.095-2.381zM16.795 22.677c-.001 0-.001 0 0 0-1.425 0-3.255-1.073-5.154-3.023l-.34-.349.34-.349a23.53 23.53 0 0 0 2.421-2.968l.135-.193.234-.02a23.63 23.63 0 0 0 3.787-.609l.472-.119.134.468c.987 3.484.688 5.983-.824 6.854a2.38 2.38 0 0 1-1.205.308zm-4.096-3.381c1.56 1.519 3.037 2.381 4.095 2.381h.001c.267 0 .505-.058.704-.173.994-.573 1.171-2.566.485-5.254a25.02 25.02 0 0 1-3.234.501 24.674 24.674 0 0 1-2.051 2.545zM18.69 8.945l-.472-.119a23.479 23.479 0 0 0-3.787-.61l-.234-.02-.135-.193a23.414 23.414 0 0 0-2.421-2.967l-.34-.349.34-.349C14.135 1.778 16.515.767 18 1.622c1.512.872 1.812 3.37.824 6.855l-.134.468zM14.75 7.24c1.142.104 2.227.273 3.234.501.686-2.688.509-4.68-.485-5.253-.988-.571-2.845.304-4.8 2.208A24.849 24.849 0 0 1 14.75 7.24zM7.206 22.677A2.38 2.38 0 0 1 6 22.369c-1.512-.871-1.812-3.369-.823-6.854l.132-.468.472.119c1.155.291 2.429.496 3.785.609l.235.02.134.193a23.596 23.596 0 0 0 2.422 2.968l.34.349-.34.349c-1.898 1.95-3.728 3.023-5.151 3.023zm-1.19-6.427c-.686 2.688-.509 4.681.485 5.254.987.563 2.843-.305 4.8-2.208a24.998 24.998 0 0 1-2.052-2.545 24.976 24.976 0 0 1-3.233-.501zM12 16.878c-.823 0-1.669-.036-2.516-.106l-.235-.02-.135-.193a30.388 30.388 0 0 1-1.35-2.122 30.354 30.354 0 0 1-1.166-2.228l-.1-.213.1-.213a30.3 30.3 0 0 1 1.166-2.228c.414-.716.869-1.43 1.35-2.122l.135-.193.235-.02a29.785 29.785 0 0 1 5.033 0l.234.02.134.193a30.006 30.006 0 0 1 2.517 4.35l.101.213-.101.213a29.6 29.6 0 0 1-2.517 4.35l-.134.193-.234.02c-.847.07-1.694.106-2.517.106zm-2.197-1.084c1.48.111 2.914.111 4.395 0a29.006 29.006 0 0 0 2.196-3.798 28.585 28.585 0 0 0-2.197-3.798 29.031 29.031 0 0 0-4.394 0 28.477 28.477 0 0 0-2.197 3.798 29.114 29.114 0 0 0 2.197 3.798z" />
              </svg>
            </div>

            {/* Next.js */}
            <div
              rel="noopener noreferrer"
              className="tech-item flex items-center justify-center border-r border-neutral-300 group cursor-pointer h-[clamp(200px,20vw,300px)] relative z-10"
              aria-label="Visit Next.js website"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 394 80"
                width="120px"
                height="120px"
                className="transition-all duration-300"
              >
                <title>NextJS icon</title>
                <path
                  fill="#000"
                  d="M262 0h68.5v12.7h-27.2v66.6h-13.6V12.7H262V0ZM149 0v12.7H94v20.4h44.3v12.6H94v21h55v12.6H80.5V0h68.7zm34.3 0h-17.8l63.8 79.4h17.9l-32-39.7 32-39.6h-17.9l-23 28.6-23-28.6zm18.3 56.7-9-11-27.1 33.7h17.8l18.3-22.7z"
                />
                <path
                  fill="#000"
                  d="M81 79.3 17 0H0v79.3h13.6V17l50.2 62.3H81Zm252.6-.4c-1 0-1.8-.4-2.5-1s-1.1-1.6-1.1-2.6.3-1.8 1-2.5 1.6-1 2.6-1 1.8.3 2.5 1a3.4 3.4 0 0 1 .6 4.3 3.7 3.7 0 0 1-3 1.8zm23.2-33.5h6v23.3c0 2.1-.4 4-1.3 5.5a9.1 9.1 0 0 1-3.8 3.5c-1.6.8-3.5 1.3-5.7 1.3-2 0-3.7-.4-5.3-1s-2.8-1.8-3.7-3.2c-.9-1.3-1.4-3-1.4-5h6c.1.8.3 1.6.7 2.2s1 1.2 1.6 1.5c.7.4 1.5.5 2.4.5 1 0 1.8-.2 2.4-.6a4 4 0 0 0 1.6-1.8c.3-.8.5-1.8.5-3V45.5zm30.9 9.1a4.4 4.4 0 0 0-2-3.3 7.5 7.5 0 0 0-4.3-1.1c-1.3 0-2.4.2-3.3.5-.9.4-1.6 1-2 1.6a3.5 3.5 0 0 0-.3 4c.3.5.7.9 1.3 1.2l1.8 1 2 .5 3.2.8c1.3.3 2.5.7 3.7 1.2a13 13 0 0 1 3.2 1.8 8.1 8.1 0 0 1 3 6.5c0 2-.5 3.7-1.5 5.1a10 10 0 0 1-4.4 3.5c-1.8.8-4.1 1.2-6.8 1.2-2.6 0-4.9-.4-6.8-1.2-2-.8-3.4-2-4.5-3.5a10 10 0 0 1-1.7-5.6h6a5 5 0 0 0 3.5 4.6c1 .4 2.2.6 3.4.6 1.3 0 2.5-.2 3.5-.6 1-.4 1.8-1 2.4-1.7a4 4 0 0 0 .8-2.4c0-.9-.2-1.6-.7-2.2a11 11 0 0 0-2.1-1.4l-3.2-1-3.8-1c-2.8-.7-5-1.7-6.6-3.2a7.2 7.2 0 0 1-2.4-5.7 8 8 0 0 1 1.7-5 10 10 0 0 1 4.3-3.5c2-.8 4-1.2 6.4-1.2 2.3 0 4.4.4 6.2 1.2 1.8.8 3.2 2 4.3 3.4 1 1.4 1.5 3 1.5 5h-5.8z"
                />
              </svg>
            </div>

            {/* TypeScript */}
            <div
              rel="noopener noreferrer"
              className="tech-item flex items-center justify-center group cursor-pointer h-[clamp(200px,20vw,300px)] relative z-10"
              aria-label="Visit TypeScript website"
            >
              <svg
                width="80px"
                height="80px"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="transition-all duration-300"
              >
                <title>TypeScript Icon</title>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0 0H15V15H0V0ZM10 6C8.89543 6 8 6.89543 8 8C8 9.10457 8.89543 10 10 10H11C11.5523 10 12 10.4477 12 11C12 11.5523 11.5523 12 11 12H10C9.44772 12 9 11.5523 9 11H8C8 12.1046 8.89543 13 10 13H11C12.1046 13 13 12.1046 13 11C13 9.89543 12.1046 9 11 9H10C9.44772 9 9 8.55228 9 8C9 7.44772 9.44772 7 10 7H11.1667C11.6269 7 12 7.3731 12 7.83333V8H13V7.83333C13 6.82081 12.1792 6 11.1667 6H10ZM3 6H8V7H6V13H5V7H3V6Z"
                  fill="#000000"
                />
              </svg>
            </div>
          </div>

          {/* Bottom Row - 4 columns */}
          <div className="grid grid-cols-4">
            {/* CSS */}
            <div className="tech-item flex items-center justify-center border-r border-neutral-300 group cursor-pointer h-[clamp(200px,15vw,250px)] relative z-10">
              <svg
                width="80px"
                height="80px"
                viewBox="0 0 48 48"
                xmlns="http://www.w3.org/2000/svg"
                className="transition-all duration-300"
              >
                <title>CSS Icon</title>
                <g id="Layer_2" data-name="Layer 2">
                  <g id="invisible_box" data-name="invisible box">
                    <rect width="48" height="48" fill="none" />
                  </g>
                  <g id="Q3_icons" data-name="Q3 icons">
                    <path d="M24,46,8.3,41.7,5,4H43L39.7,41.7ZM12,38.6l12,3.3,12-3.3L38.6,8H9.4Z" />
                    <path d="M14,13H34L32.2,34.3,23.9,37l-8.4-2.1-.9-7.2h4.5v3.6l4.8.9,4.4-.9V25.9H14.6l-.3-4.5a2.3,2.3,0,0,1,1.5-.6c6.9,0,12.5.6,12.5.6V17.8H14.6Z" />
                  </g>
                </g>
              </svg>
            </div>

            {/* Tailwind */}
            <div
              rel="noopener noreferrer"
              className="tech-item flex items-center justify-center border-r border-neutral-300 group cursor-pointer h-[clamp(200px,15vw,250px)] relative z-10"
              aria-label="Visit TailwindCSS website"
            >
              <svg
                width="80px"
                height="80px"
                viewBox="0 0 61 37"
                fill="0000"
                xmlns="http://www.w3.org/2000/svg"
                className="transition-all duration-300"
              >
                <title>Tailwind Icon</title>
                <path
                  d="M30.52 0.279907C22.6053 0.279907 17.6586 4.26185 15.68 12.2257C18.648 8.2438 22.1106 6.75135 26.068 7.7459C28.3261 8.3135 29.94 9.9628 31.7269 11.7876C34.6356 14.7588 38.003 18.1993 45.36 18.1993C53.2746 18.1993 58.2213 14.2173 60.2 6.2522C57.232 10.2341 53.7693 11.7278 49.812 10.7333C47.555 10.1657 45.9412 8.5164 44.1542 6.6916C41.2443 3.71914 37.8757 0.279907 30.52 0.279907ZM15.68 18.1993C7.7653 18.1993 2.81863 22.1812 0.839966 30.1464C3.80797 26.1644 7.27063 24.6707 11.228 25.6665C13.4849 26.2354 15.0987 27.8834 16.8857 29.707C19.7956 32.6794 23.1643 36.1199 30.52 36.1199C38.4346 36.1199 43.3813 32.138 45.36 24.1728C42.392 28.1548 38.9293 29.6485 34.972 28.6527C32.7138 28.0851 31.1 26.4358 29.313 24.6122C26.4043 21.6398 23.0369 18.1993 15.68 18.1993Z"
                  fill="#000"
                />
              </svg>
            </div>

            {/* Supabase */}
            <div
              rel="noopener noreferrer"
              className="tech-item flex items-center justify-center border-r border-neutral-300 group cursor-pointer h-[clamp(200px,15vw,250px)] relative z-10"
              aria-label="Visit Supabase website"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                width="70px"
                height="70px"
                className="transition-all duration-300"
              >
                <title>SupaBase Icon</title>
                <path d="M45.1,23.7l-16.8,21c-0.7,0.8-1.7,1.3-2.7,1.3c-0.4,0-0.8-0.1-1.2-0.2C22.9,45.3,22,44,22,42.5V32H6.1 c-1.5,0-2.9-0.9-3.6-2.3c-0.7-1.4-0.5-3.1,0.4-4.4l16-21c0.9-1.2,2.4-1.6,3.8-1.2C24.1,3.7,25,5,25,6.5V17h16.8 c1.6,0,3.1,0.9,3.8,2.3C46.3,20.8,46.1,22.4,45.1,23.7z" />
              </svg>
            </div>

            {/* Figma */}
            <div
              rel="noopener noreferrer"
              className="tech-item flex items-center justify-center group cursor-pointer h-[clamp(200px,15vw,250px)] relative z-10"
              aria-label="Visit Figma website"
            >
              <svg
                width="60px"
                height="60px"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="transition-all duration-300"
              >
                <title>Figma Icon</title>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7.00005 2.04999H5.52505C4.71043 2.04999 4.05005 2.71037 4.05005 3.52499C4.05005 4.33961 4.71043 4.99999 5.52505 4.99999H7.00005V2.04999ZM7.00005 1.04999H8.00005H9.47505C10.842 1.04999 11.95 2.15808 11.95 3.52499C11.95 4.33163 11.5642 5.04815 10.9669 5.49999C11.5642 5.95184 11.95 6.66836 11.95 7.475C11.95 8.8419 10.842 9.95 9.47505 9.95C8.92236 9.95 8.41198 9.76884 8.00005 9.46266V9.95L8.00005 11.425C8.00005 12.7919 6.89195 13.9 5.52505 13.9C4.15814 13.9 3.05005 12.7919 3.05005 11.425C3.05005 10.6183 3.43593 9.90184 4.03317 9.44999C3.43593 8.99814 3.05005 8.28163 3.05005 7.475C3.05005 6.66836 3.43594 5.95184 4.03319 5.5C3.43594 5.04815 3.05005 4.33163 3.05005 3.52499C3.05005 2.15808 4.15814 1.04999 5.52505 1.04999H7.00005ZM8.00005 2.04999V4.99999H9.47505C10.2897 4.99999 10.95 4.33961 10.95 3.52499C10.95 2.71037 10.2897 2.04999 9.47505 2.04999H8.00005ZM5.52505 8.94998H7.00005L7.00005 7.4788L7.00005 7.475L7.00005 7.4712V6H5.52505C4.71043 6 4.05005 6.66038 4.05005 7.475C4.05005 8.28767 4.70727 8.94684 5.5192 8.94999L5.52505 8.94998ZM4.05005 11.425C4.05005 10.6123 4.70727 9.95315 5.5192 9.94999L5.52505 9.95H7.00005L7.00005 11.425C7.00005 12.2396 6.33967 12.9 5.52505 12.9C4.71043 12.9 4.05005 12.2396 4.05005 11.425ZM8.00005 7.47206C8.00164 6.65879 8.66141 6 9.47505 6C10.2897 6 10.95 6.66038 10.95 7.475C10.95 8.28962 10.2897 8.95 9.47505 8.95C8.66141 8.95 8.00164 8.29121 8.00005 7.47794V7.47206Z"
                  fill="#000000"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Mobile Grid - 2 columns */}
        <div className="grid grid-cols-2 lg:hidden gap-0">
          {/* Mobile items with same structure but simplified layout */}
          <div className="tech-item flex items-center justify-center border-r border-b border-neutral-300 group cursor-pointer h-[clamp(150px,25vw,200px)] relative z-10">
            <svg
              fill="#000"
              width="60px"
              height="60px"
              viewBox="0 0 24 24"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              className="transition-all duration-300"
            >
              <title>React icon</title>
              <path d="M12 9.861A2.139 2.139 0 1 0 12 14.139 2.139 2.139 0 1 0 12 9.861zM6.008 16.255l-.472-.12C2.018 15.246 0 13.737 0 11.996s2.018-3.25 5.536-4.139l.472-.119.133.468a23.53 23.53 0 0 0 1.363 3.578l.101.213-.101.213a23.307 23.307 0 0 0-1.363 3.578l-.133.467zM5.317 8.95c-2.674.751-4.315 1.9-4.315 3.046 0 1.145 1.641 2.294 4.315 3.046a24.95 24.95 0 0 1 1.182-3.046A24.752 24.752 0 0 1 5.317 8.95zM17.992 16.255l-.133-.469a23.357 23.357 0 0 0-1.364-3.577l-.101-.213.101-.213a23.42 23.42 0 0 0 1.364-3.578l.133-.468.473.119c3.517.889 5.535 2.398 5.535 4.14s-2.018 3.25-5.535 4.139l-.473.12zm-.491-4.259c.48 1.039.877 2.06 1.182 3.046 2.675-.752 4.315-1.901 4.315-3.046 0-1.146-1.641-2.294-4.315-3.046a24.788 24.788 0 0 1-1.182 3.046zM5.31 8.945l-.133-.467C4.188 4.992 4.488 2.494 6 1.622c1.483-.856 3.864.155 6.359 2.716l.34.349-.34.349a23.552 23.552 0 0 0-2.422 2.967l-.135.193-.235.02a23.657 23.657 0 0 0-3.785.61l-.472.119zm1.896-6.63c-.268 0-.505.058-.705.173-.994.573-1.17 2.565-.485 5.253a25.122 25.122 0 0 1 3.233-.501 24.847 24.847 0 0 1 2.052-2.544c-1.56-1.519-3.037-2.381-4.095-2.381zM16.795 22.677c-.001 0-.001 0 0 0-1.425 0-3.255-1.073-5.154-3.023l-.34-.349.34-.349a23.53 23.53 0 0 0 2.421-2.968l.135-.193.234-.02a23.63 23.63 0 0 0 3.787-.609l.472-.119.134.468c.987 3.484.688 5.983-.824 6.854a2.38 2.38 0 0 1-1.205.308zm-4.096-3.381c1.56 1.519 3.037 2.381 4.095 2.381h.001c.267 0 .505-.058.704-.173.994-.573 1.171-2.566.485-5.254a25.02 25.02 0 0 1-3.234.501 24.674 24.674 0 0 1-2.051 2.545zM18.69 8.945l-.472-.119a23.479 23.479 0 0 0-3.787-.61l-.234-.02-.135-.193a23.414 23.414 0 0 0-2.421-2.967l-.34-.349.34-.349C14.135 1.778 16.515.767 18 1.622c1.512.872 1.812 3.37.824 6.855l-.134.468zM14.75 7.24c1.142.104 2.227.273 3.234.501.686-2.688.509-4.68-.485-5.253-.988-.571-2.845.304-4.8 2.208A24.849 24.849 0 0 1 14.75 7.24zM7.206 22.677A2.38 2.38 0 0 1 6 22.369c-1.512-.871-1.812-3.369-.823-6.854l.132-.468.472.119c1.155.291 2.429.496 3.785.609l.235.02.134.193a23.596 23.596 0 0 0 2.422 2.968l.34.349-.34.349c-1.898 1.95-3.728 3.023-5.151 3.023zm-1.19-6.427c-.686 2.688-.509 4.681.485 5.254.987.563 2.843-.305 4.8-2.208a24.998 24.998 0 0 1-2.052-2.545 24.976 24.976 0 0 1-3.233-.501zM12 16.878c-.823 0-1.669-.036-2.516-.106l-.235-.02-.135-.193a30.388 30.388 0 0 1-1.35-2.122 30.354 30.354 0 0 1-1.166-2.228l-.1-.213.1-.213a30.3 30.3 0 0 1 1.166-2.228c.414-.716.869-1.43 1.35-2.122l.135-.193.235-.02a29.785 29.785 0 0 1 5.033 0l.234.02.134.193a30.006 30.006 0 0 1 2.517 4.35l.101.213-.101.213a29.6 29.6 0 0 1-2.517 4.35l-.134.193-.234.02c-.847.07-1.694.106-2.517.106zm-2.197-1.084c1.48.111 2.914.111 4.395 0a29.006 29.006 0 0 0 2.196-3.798 28.585 28.585 0 0 0-2.197-3.798 29.031 29.031 0 0 0-4.394 0 28.477 28.477 0 0 0-2.197 3.798 29.114 29.114 0 0 0 2.197 3.798z" />
            </svg>
          </div>
          {/* Add more mobile items as needed */}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
