import Image from "next/image";

const Projects = () => {
  return (
    <section className="projects flex flex-col justify-center items-center  text-white bg-[#fafaf9]">
      <div className="project-containers grid grid-cols-1 lg:grid-cols-3 lg:grid-rows-2 h-[70vh] w-full gap-10 justify-center max-w-7xl mt-10 p-6">
        <article className="lg:col-span-2 lg:row-span-2 justify-center ">
          <div className="relative rounded-2xl h-full w-full overflow-hidden">
            <Image
              src="/images/Travel Placeholder.webp"
              alt="Travino App"
              fill
              className=" object-cover"
            ></Image>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6">
              <h2 className="text-3xl">Travino</h2>
              <p>Travel admin dashboard to book your next holiday getaway!</p>
            </div>
          </div>
        </article>

        <article className="lg:col-span-1 relative lg:row-span-1 justify-center">
          <div className="relative rounded-2xl h-full w-full overflow-hidden">
            <Image
              className="object-cover object-top rounded-2xl"
              src="/images/B-Log.png"
              alt="B-Log Movie App"
              fill
            ></Image>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
          <div className="absolute bottom-0 left-0 p-6">
            <h2 className="text-xl">B-Log</h2>
          </div>
        </article>

        <article className="lg:col-span-1 lg:row-span-1 relative justify-center">
          <div className="relative rounded-2xl h-full w-full overflow-hidden">
            <Image
              className="object-cover"
              src="/images/FrontEndMentor.webp"
              alt="FrontEnd Mentor"
              fill
            ></Image>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
          <div className="absolute bottom-0 left-0 p-6">
            <h2 className="text-xl">FrontEnd Mentor</h2>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Projects;
