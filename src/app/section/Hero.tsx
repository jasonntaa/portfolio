import TechStack from "../components/TechStack";
import Projects from "./Projects";

export default function Hero() {
  return (
    <section className="hero-layout flex flex-col justify-center items-center h-screen m-12 gap-50 mt-40">
      <h1 className="hero-text text-6xl text-center text-white">
        Building accessible, responsive interfaces with clean, scalable code.
      </h1>
      <div className="techstack-container">
        <TechStack />
      </div>
    </section>
  );
}
