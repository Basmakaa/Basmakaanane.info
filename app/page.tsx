import Hero from "@/components/Hero";
import About from "@/components/About";
import SelectedWork from "@/components/SelectedWork";
import SpeakingBand from "@/components/SpeakingBand";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main id="content">
      <Hero />
      <About />
      <SelectedWork />
      <SpeakingBand />
      <Contact />
    </main>
  );
}
