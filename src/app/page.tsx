// import Hero from "@/components/Hero";
// import About from "@/components/About";
// import Experience from "@/components/Experience";
// import Education from "@/components/Education";
// import Skills from "@/components/Skills";
// import Contact from "@/components/Contact";

import About from "@/components/About";
import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="min-h-screen bg-dark-gold">
      <Hero />
      <About />
      <Experience />
      <Education />
      <Skills />
      <Gallery />
      <Contact />
    </main>
  );
}
