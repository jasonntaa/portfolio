"use client";

import { useGSAP } from "@gsap/react";
import React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const MyProjects = () => {
  useGSAP(() => {
    // Set initial states for all text elements
    gsap.set(".title-main", { opacity: 0, y: 30 });
    gsap.set(".title-sub", { opacity: 0, y: 20 });
    gsap.set(".descriptor", { opacity: 0, y: 15 });

    // Create entrance timeline
    const entranceTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".wrapper",
        start: "top 80%",
        end: "center center",
        toggleActions: "play none none reverse",
        markers: true,
      },
    });

    // Staggered entrance animation
    entranceTl
      .to(".title-main", {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
      })

      .to(
        ".descriptor",
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.2,
          ease: "power2.out",
        },
        "-=0.3"
      );

    // Exit animation on scroll
    gsap.to(".wrapper", {
      y: -50,
      opacity: 0,
      scrollTrigger: {
        trigger: ".wrapper",
        start: "center center",
        end: "+=200px",
        scrub: 2,
        markers: true,
      },
    });
  });

  return (
    <section className="flex-center justify-center items-center h-screen w-full bg-[#fafaf9] m-auto">
      <div className="wrapper overflow-hidden flex flex-col justify-center items-center py-8">
        {/* Hidden title section - similar to Framer example */}
        <div className="text-center mb-6">
          <h1 className="title-main text-black text-[clamp(2rem,8vw,4rem)] font-light tracking-wider uppercase">
            Welcome To My Playground
          </h1>
        </div>

        {/* Descriptive words - similar to the visible section in Framer */}
        <div className="text-center space-y-2">
          <p className="descriptor text-black text-[clamp(0.8rem,3vw,1.2rem)] uppercase tracking-wide">
            Code · Creativity
          </p>
          <p className="descriptor text-black text-[clamp(0.8rem,3vw,1.2rem)] uppercase tracking-wide">
            Innovation · Design
          </p>
          <p className="descriptor text-black text-[clamp(0.8rem,3vw,1.2rem)] uppercase tracking-wide">
            Experience · Quality
          </p>
        </div>
      </div>
    </section>
  );
};

export default MyProjects;
// "use client";

// import { useGSAP } from "@gsap/react";
// import React from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const MyProjects = () => {
//   useGSAP(() => {
//     gsap.fromTo(
//       ".wrapper",
//       { y: 0, opacity: 1 },
//       {
//         y: -50,
//         opacity: 0,
//         scrollTrigger: {
//           trigger: ".wrapper",
//           start: "center center",
//           end: "+=200px",
//           scrub: 3,
//           pin: true,

//           markers: true,
//         },
//       }
//     );
//   });

//   return (
//     <section className="flex-center justify-center items-center h-screen w-full bg-[#fafaf9] m-auto">
//       <div className="wrapper overflow-hidden flex justify-center items-center h-[5rem]">
//         <h2 id="playground" className="text-black text-[clamp(1rem,8vw,2rem)]">
//           Welcome To My Playground
//         </h2>
//       </div>
//     </section>
//   );
// };

// export default MyProjects;
