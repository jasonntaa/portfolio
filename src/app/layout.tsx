import type { Metadata } from "next";
import { Mona_Sans } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";
import Preloader from "./section/PreLoader";
import SmoothScroller from "./components/SmoothScroller";
import Hero from "./section/Hero";
import Projects from "./section/Projects";
import TechSection from "./section/ProjectsPreload";
import AboutMe from "./section/AboutMe";
import Contact from "./section/Contact";
import Footer from "./section/Footer";

const monaSans = Mona_Sans({
  subsets: ["latin"],
  variable: "--font-mona",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Portfolio.",
  description: "Portfolio of Jason Ta.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={monaSans.variable}>
      <body className="bg-background">
        <Preloader />
        <NavBar />
        <div id="smooth-wrapper">
          <div id="smooth-content">
            <main>
              <Hero />
              <Projects />
              <TechSection />
              <AboutMe />
              <Contact />
              <Footer />
            </main>
          </div>
        </div>
        <SmoothScroller />
        {children}
      </body>
    </html>
  );
}
