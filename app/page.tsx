import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="min-h-screen">
        <Hero />
        <About />
        <Experience />
        <Education />
        <Projects />
        <Certificates />
        <Skills />
        <Contact />
      </main>
    </>
  );
}
