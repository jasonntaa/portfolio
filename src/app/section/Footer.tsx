import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <section className="bg-black py-8 px-4">
      <div className="icons flex justify-center gap-5 mb-4">
        <Link
          href="https://github.com/jasonntaa"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit my GitHub profile (opens in a new tab)"
        >
          <Image
            className="w-10 h-10 transition-transform hover:scale-110"
            src="/assets/git-button.svg"
            alt="git logo"
            width={40}
            height={40}
            draggable={false}
          />
        </Link>
        <Link href="mailto:jasonntaa@gmail.com" aria-label="Send me an email">
          <Image
            className="w-10 h-10 transition-transform hover:scale-110"
            src="/assets/email-button.svg"
            alt="email"
            width={40}
            height={40}
            draggable={false}
          />
        </Link>
        <Link
          href="https://www.linkedin.com/in/jasontta/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit my LinkedIn profile (opens in a new tab)"
        >
          <Image
            className="w-10 h-10 transition-transform hover:scale-110"
            src="/assets/linkedin-button.svg"
            alt="linkedin"
            width={40}
            height={40}
            draggable={false}
          />
        </Link>
        <Link
          href="https://www.youtube.com/@JasonandJoey"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit my YouTube channel (opens in a new tab)"
        >
          <Image
            className="w-10 h-10 transition-transform hover:scale-110"
            src="/assets/youtube-button.svg"
            alt="youtube"
            width={40}
            height={40}
            draggable={false}
          />
        </Link>
      </div>
      <div className="text-white text-center text-sm">Jason Ta 2025</div>
    </section>
  );
};

export default Footer;
