import AboutMe from "./section/AboutMe";
import Experience from "./section/Experience";
import Footer from "./section/Footer";
import Hero from "./section/Hero";
import MyProjects from "./section/ProjectsPreload";
import Projects from "./section/Projects";
import JourneyPreload from "./section/JourneyPreload";
import NavOverlay from "./components/NavOverlay";
import TechStack from "./section/TechStack";

export default function Home() {
  return (
    <>
      <Hero />
      <MyProjects />
      <Projects />
      <TechStack />
      <JourneyPreload />
      <Experience />
      <Footer />
    </>
  );
}
