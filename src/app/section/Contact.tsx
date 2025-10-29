"use client";

import { useState } from "react";

export function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("marcus.chen@email.com");
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } catch (err) {
      console.error("Failed to copy email:", err);
    }
  };

  const socialLinks = [
    {
      icon: LinkedinIcon,
      label: "LinkedIn",
      href: "https://linkedin.com/in/jasontta",
      username: "Connect on LinkedIn",
    },
    {
      icon: GithubIcon,
      label: "GitHub",
      href: "https://github.com/jasonntaa",
      username: "View my code",
    },
  ];

  return (
    <section
      id="contact"
      className="py-24 sm:py-32 px-6 bg-black dark:bg-white text-white dark:text-black scroll-mt-20 transition-colors duration-300"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-7xl mx-auto">
        <div className="max-w-4xl">
          <p className="text-sm tracking-[0.2em] uppercase text-white/60 dark:text-black/60 mb-6 transition-colors duration-300">
            Contact
          </p>

          <h2
            id="contact-heading"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight mb-8 sm:mb-12 leading-[1.1] text-white dark:text-black transition-colors duration-300"
          >
            Let&apos;s talk
          </h2>

          <p className="text-lg sm:text-xl md:text-2xl text-white/70 dark:text-black/70 mb-12 sm:mb-16 leading-[1.3] max-w-2xl transition-colors duration-300">
            Open to front-end developer roles where I can leverage my technical
            skills and leadership experience.
          </p>

          {/* Email Section */}
          <div className="mb-12 sm:mb-16">
            <p className="text-sm text-white/50 dark:text-black/50 mb-4 transition-colors duration-300">
              Email
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 group">
              <a
                href="mailto:marcus.chen@email.com"
                className="text-xl sm:text-2xl md:text-3xl text-white dark:text-black hover:text-white/70 dark:hover:text-black/70 transition-colors break-all focus:outline-none focus:ring-2 focus:ring-white dark:focus:ring-black focus:ring-offset-2 focus:ring-offset-black dark:focus:ring-offset-white rounded-lg px-2 py-1"
              >
                jasonntaa@gmail.com
              </a>
              <button
                onClick={copyEmail}
                className="flex items-center gap-2 px-4 py-2 bg-white/10 dark:bg-black/10 hover:bg-white/20 dark:hover:bg-black/20 rounded-full transition-all text-sm focus:outline-none focus:ring-2 focus:ring-white dark:focus:ring-black focus:ring-offset-2 focus:ring-offset-black dark:focus:ring-offset-white active:scale-95"
                aria-label={copiedEmail ? "Email copied" : "Copy email address"}
              >
                {copiedEmail ? (
                  <>
                    <CheckIcon className="h-4 w-4" />
                    Copied!
                  </>
                ) : (
                  <>
                    <CopyIcon className="h-4 w-4" />
                    Copy
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-6 mb-16">
            <p className="text-sm text-white/50 dark:text-black/50 transition-colors duration-300">
              Connect
            </p>
            <div className="grid sm:grid-cols-3 gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="group/social flex flex-col gap-4 p-6 bg-white/5 dark:bg-black/5 hover:bg-white/10 dark:hover:bg-black/10 rounded-2xl transition-all border border-white/10 dark:border-black/10 hover:border-white/20 dark:hover:border-black/20 focus:outline-none focus:ring-2 focus:ring-white dark:focus:ring-black focus:ring-offset-2 focus:ring-offset-black dark:focus:ring-offset-white"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit my ${social.label} profile`}
                >
                  <div className="flex items-center justify-between">
                    <social.icon className="h-6 w-6 text-white/40 dark:text-black/40 group-hover/social:text-white dark:group-hover/social:text-black transition-colors" />
                    <ArrowUpRight className="h-4 w-4 text-white/30 dark:text-black/30 group-hover/social:text-white/50 dark:group-hover/social:text-black/50 transition-colors" />
                  </div>
                  <div>
                    <p className="text-sm text-white/50 dark:text-black/50 mb-1 transition-colors duration-300">
                      {social.label}
                    </p>
                    <p className="text-white dark:text-black group-hover/social:text-white/80 dark:group-hover/social:text-black/80 transition-colors">
                      {social.username}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Decorative gradient orbs */}
        <div
          className="absolute inset-0 overflow-hidden pointer-events-none"
          aria-hidden="true"
        >
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500 dark:bg-blue-400 rounded-full blur-3xl opacity-10 dark:opacity-5 transition-opacity duration-300" />
        </div>
      </div>
    </section>
  );
}

// Hard-coded icon components
function ArrowUpRight({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M7 7h10v10" />
      <path d="M7 17 17 7" />
    </svg>
  );
}

function CopyIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
      <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
    </svg>
  );
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}
