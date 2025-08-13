import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <section className="bg-[#1a1a1a] py-8 px-4">
      <div className="icons flex justify-center gap-5 mb-4">
        <Link
          href="https://github.com/jasonntaa"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            className="w-10 h-10 transition-transform hover:scale-110"
            src="/assets/git-button.svg"
            alt="git logo"
            width={40}
            height={40}
          />
        </Link>
        <Link href="mailto:jason.t.ta@outlook.com">
          <Image
            className="w-10 h-10 transition-transform hover:scale-110"
            src="/assets/email-button.svg"
            alt="email"
            width={40}
            height={40}
          />
        </Link>
        <Link
          href="https://www.linkedin.com/in/jasontta/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            className="w-10 h-10 transition-transform hover:scale-110"
            src="/assets/linkedin-button.svg"
            alt="linkedin"
            width={40}
            height={40}
          />
        </Link>
        <Link
          href="https://www.youtube.com/@JasonandJoey"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            className="w-10 h-10 transition-transform hover:scale-110"
            src="/assets/youtube-button.svg"
            alt="youtube"
            width={40}
            height={40}
          />
        </Link>
      </div>
      <div className="text-white text-center text-sm">Jason Ta 2025</div>
    </section>
  );
};

export default Footer;
