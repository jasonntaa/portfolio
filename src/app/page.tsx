import AboutMe from "./section/AboutMe";
import ContactForm from "./section/ContactForm";
import Experience from "./section/Experience";
import Footer from "./section/Footer";
import Hero from "./section/Hero";
import MyProjects from "./section/MyProjects";
import Projects from "./section/Projects";

export default function Home() {
  return (
    <>
      <Hero />
      <MyProjects />
      <Projects />
      <Experience />
      <Footer />
    </>
  );
}
