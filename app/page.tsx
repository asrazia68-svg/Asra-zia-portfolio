import BackgroundEffects from "@/components/BackgroundEffects";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Certifications from "@/components/Certifications";
import Freelance from "@/components/Freelance";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import AIWelcomeWidget from "@/components/AIWelcomeWidget";

export default function Home() {
  return (
    <>
      <BackgroundEffects />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <Freelance />
        <Contact />
      </main>
      <Footer />
      <AIWelcomeWidget />
    </>
  );
}
