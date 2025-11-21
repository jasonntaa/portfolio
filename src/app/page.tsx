import AboutMe from "./section/AboutMe";

import Footer from "./section/Footer";
import Hero from "./section/Hero";
import MyProjects from "./section/ProjectsPreload";
import Projects from "./section/Projects";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutMe />
      <MyProjects />
      <Projects />
      <Footer />
    </>
  );
}
