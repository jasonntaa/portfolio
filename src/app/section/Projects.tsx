const Projects = () => {
  return (
    <section className="projects flex-col justify-center items-center text-white">
      <h1 className="projects justify-self-center text-4xl">Projects</h1>
      <div className="project-containers grid grid-cols-1 lg:grid-cols-3 lg:grid-rows-2 gap-10 h-[100vh]] mx-40 mt-10">
        <div className="lg:col-span-2 lg:row-span-2 justify-center rounded-2xl">
          <img
            className="rounded-2xl"
            src="/images/Travel Placeholder.webp"
            alt="Travino App"
          ></img>
          <div className="project-name mt-4">
            <h1 className="text-3xl">Travino</h1>
            <h3>Travel admin dashboard to book your next holiday getaway!</h3>
          </div>
        </div>
        <div className="lg:col-span-1 lg:row-span-1 justify-center justify rounded-2xl">
          <img
            className="object-fill rounded-2xl"
            src="/images/B-Log.png"
            alt="B-Log Movie App"
          ></img>
          <div className="project-name mt-4">
            <h2 className="text-xl">B-Log</h2>
          </div>
        </div>
        <div className="lg:col-span-1 lg:row-span-1  justify-center rounded-2xl">
          <img
            className="rounded-2xl"
            src="/images/FrontEndMentor.webp"
            alt="FrontEnd Mentor"
          ></img>
          <div className="project-name mt-4">
            <h2 className="text-xl">FrontEnd Mentor</h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
