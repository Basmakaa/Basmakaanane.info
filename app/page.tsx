import Scene from "@/components/three/Scene";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Featured from "@/components/Featured";
import Projects from "@/components/Projects";
import Highlights from "@/components/Highlights";
import Passions from "@/components/Passions";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Scene />
      <Navbar />
      <main className="relative">
        <Hero />
        <About />
        <Experience />
        <Featured />
        <Projects />
        <Highlights />
        <Passions />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
