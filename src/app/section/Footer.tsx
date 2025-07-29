import Image from "next/image";

const Footer = () => {
  return (
    <section>
      <div className="icons flex justify-center gap-5">
        <Image
          className="w-10"
          src="/assets/git-button.svg"
          alt="git logo"
          width={40}
          height={40}
        />
        <Image
          className="w-10"
          src="/assets/email-button.svg"
          alt="email"
          width={40}
          height={40}
        />
        <Image
          className="w-10"
          src="/assets/linkedin-button.svg"
          alt="linkedin"
          width={40}
          height={40}
        />
        <Image
          className="w-10"
          src="/assets/youtube-button.svg"
          alt="youtube"
          width={40}
          height={40}
        />
      </div>
      <div className="text-white flex-end">Jason Ta 2025</div>
    </section>
  );
};

export default Footer;
