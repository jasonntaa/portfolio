import TechStack from "./components/TechStack";
import ContactForm from "./section/ContactForm";
import Hero from "./section/Hero";
import Projects from "./section/Projects";
import Timeline from "./section/Timeline";

export default function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <Timeline />
      <ContactForm />
    </>
  );
}
