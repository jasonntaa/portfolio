import Image from "next/image";

const Footer = () => {
  return (
    <section>
      <div className="icons flex justify-center gap-5">
        <Image src="/assets/git-button.svg" alt="git logo" />
        <Image src="/assets/email-button.svg" alt="email" />
        <Image src="/assets/linkedin-button.svg" alt="linkedin" />
        <Image src="/assets/youtube-button.svg" alt="youtube" />
      </div>
      <div className="text-white flex-end">Jason Ta 2025</div>
    </section>
  );
};

export default Footer;
