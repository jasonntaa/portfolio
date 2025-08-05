import Image from "next/image";

const Projects = () => {
  return (
    <section
      id="projects"
      className="projects flex justify-center items-center overflow-x-scroll h-screen w-full text-black bg-[#fafaf9]"
    >
      <article className="projects">
        <span className="relative rounded-2xl h-screen w-full ">
          <Image
            src="/images/Travel Placeholder.webp"
            alt="Travino App"
            height={500}
            width={500}
          ></Image>

          <div className="absolute bottom-0 left-0 p-6">
            <h2 className="text-3xl">Travino</h2>
            <p>Travel admin dashboard to book your next holiday getaway!</p>
          </div>
        </span>
      </article>

      <article className="projects">
        <span className="relative rounded-2xl h-screen w-full ">
          <div>
            <Image
              className="object-cover object-top rounded-2xl"
              src="/images/B-Log.png"
              alt="B-Log Movie App"
              height={500}
              width={500}
            ></Image>
          </div>

          <div className="absolute bottom-0 left-0 p-6">
            <h2 className="text-xl">B-Log</h2>
          </div>
        </span>
      </article>

      <article className="projects">
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
      </article>
    </section>
  );
};

export default Projects;
