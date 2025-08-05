"use client";
import Image from "next/image";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";

const Projects = () => {
  return (
    <section
      id="projects"
      className="projects flex justify-center items-center overflow-x-scroll h-screen w-full text-black bg-[#fafaf9]"
    >
      <article className="projects">
        <Dialog>
          <DialogTrigger asChild>
            <div className="h-screen w-full py-6">
              <Image
                className="rounded-2xl"
                src="/images/Travel Placeholder.webp"
                alt="Travino App"
                height={1350}
                width={1360}
              ></Image>
            </div>
          </DialogTrigger>
          <DialogContent className="h-11/12 min-w-11/12 w-full border-none flex flex-col bg-[#1a1a1a]">
            <DialogTitle>Travino</DialogTitle>
            <DialogDescription>Travelling made easy</DialogDescription>
            <DialogClose>Close</DialogClose>
          </DialogContent>
        </Dialog>

        {/* <div className="absolute bottom-0 left-0 p-6">
          <h2 className="text-3xl">Travino</h2>
          <p>Travel admin dashboard to book your next holiday getaway!</p>
        </div> */}
      </article>

      <article className="projects">
        <Dialog>
          <DialogTrigger asChild>
            <div className="h-screen w-full py-6">
              <Image
                className="rounded-2xl"
                src="/images/B-Log.png"
                alt="B-Log Movie App"
                height={1400}
                width={1400}
              ></Image>
            </div>
          </DialogTrigger>
          <DialogContent className="h-11/12 min-w-11/12 w-full border-none flex flex-col bg-[#1a1a1a]">
            <DialogTitle>Movie App</DialogTitle>
            <DialogDescription>Explore trending movies</DialogDescription>
            <DialogClose>Close</DialogClose>
          </DialogContent>
        </Dialog>

        {/* <div className="absolute bottom-0 left-0 p-6">
          <h2 className="text-xl">B-Log</h2>
        </div> */}
      </article>

      {/* <article className="projects">
        <span className="relative rounded-2xl h-screen w-full ">
          <div>
            <Image
              className="object-cover"
              src="/images/FrontEndMentor.webp"
              alt="FrontEnd Mentor"
              height={500}
              width={500}
            ></Image>
          </div>

          <div className="absolute bottom-0 left-0 p-6">
            <h2 className="text-xl">FrontEnd Mentor</h2>
          </div>
        </span>
      </article> */}
    </section>
  );
};

export default Projects;
