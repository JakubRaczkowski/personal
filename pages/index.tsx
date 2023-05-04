import Navbar from "../src/components/Navbar";
import Hero from "../src/components/Hero";
import About from "../src/components/About";
import Skills from "../src/components/Skills";
import Projects from "../src/components/Projects";
import Contact from "../src/components/Contact";
import Social from "../src/components/Social";
import Resume from "../src/components/Resume";
import Experience from "../src/components/Experience";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Social />
      <Resume />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />

    </>
  );
}
