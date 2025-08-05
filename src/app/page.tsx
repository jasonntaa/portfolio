import AboutMe from "./section/AboutMe";
import Experience from "./section/Experience";
import Footer from "./section/Footer";
import Hero from "./section/Hero";
import MyProjects from "./section/ProjectsPreload";
import Projects from "./section/Projects";
import JourneyPreload from "./section/JourneyPreload";
import NavOverlay from "./components/NavOverlay";

export default function Home() {
  return (
    <>
      <Hero />
      <MyProjects />
      <Projects />
      <JourneyPreload />
      <Experience />
      <Footer />
    </>
  );
}
