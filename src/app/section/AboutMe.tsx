import TechBadge from "@/components/ui/techbadge";
import { techstack } from "@/constants";
import Image from "next/image";

const AboutMe = () => {
  return (
    <section className="flex w-full p-4 md:px-8 lg:px-20 bg-[#fafaf9] ">
      <div className="border-2 justify-center items-center flex flex-1 ">
        <Image
          src="/images/starterpack.png"
          width={500}
          height={400}
          alt="Jason starter pack"
        />
      </div>
      <div className="flex flex-1 flex-col border-2">
        <h3>Jason Ta</h3>
        <h4>Frontend Developer</h4>
        <h2>Focused on creating accessible, scalable and creative designs</h2>
        <h2>I love learning, solving problems, and creating!</h2>
        <h3>Expertise</h3>
        <div>
          {techstack.map((item, index) => (
            <TechBadge key={index} tech={item.tech} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
