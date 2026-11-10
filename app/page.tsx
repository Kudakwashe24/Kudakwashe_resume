import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { SelectedWork } from "@/components/SelectedWork";
import { About } from "@/components/About";
import { Capabilities } from "@/components/Capabilities";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main id="top">
        <Hero />
        <SelectedWork />
        <About />
        <Capabilities />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
