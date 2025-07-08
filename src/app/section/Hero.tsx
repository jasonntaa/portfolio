import TechStack from "../components/TechStack";

export default function Hero() {
  return (
    <section className="hero-layout flex flex-col justify-center items-center h-screen m-12 mb-0">
      <header>
        <h1 className="hero-text text-6xl text-center text-white mt-120">
          Building accessible, responsive interfaces with clean, scalable code.
        </h1>
      </header>
      <div className="flex justify-center items-center mt-100">
        <TechStack />
      </div>
    </section>
  );
}
