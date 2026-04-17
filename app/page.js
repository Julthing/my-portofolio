import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Hero from "@/app/(home)/sections/Hero";
import About from "@/app/(home)/sections/About";
import Skills from "@/app/(home)/sections/Skills";
import Projects from "@/app/(home)/sections/Projects";
import Contact from "@/app/(home)/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
