import { About } from "@/pages/About";
import { AIShowcase } from "@/pages/AIShowcase";
import { AITechnology } from "@/pages/AITechnology";
import { CTA } from "@/pages/CTA";
import { Header } from "@/pages/Header";
import { Hero } from "@/pages/Home";
import { Projects } from "@/pages/Projects";
import { Services } from "@/pages/Services";
import { MessageCircle } from "lucide-react";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-sky-50 to-white">
      <Header />
      {/* <div id="home">
        <Hero />
      </div>
      <div id="about">
        <About />
      </div>
      <AIShowcase />
      <AITechnology />
      <div id="projects">
        <Projects />
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="contact">
        <CTA />
      </div> */}

      <div id="home">
        <Hero />
      </div>
      <div id="about">
        <About />
      </div>
      <AIShowcase />
      <AITechnology />
      <div id="projects">
        <Projects />
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="contact">
        <CTA />
      </div>

      <a
        href="https://wa.me/966504576354"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center rounded-full bg-green-500 p-4 text-white shadow-lg shadow-green-500/40 transition hover:bg-green-600"
        aria-label="Chat with us on WhatsApp"
      >
        <MessageCircle className="h-5 w-5" />
      </a>
    </div>
  );
};

export default LandingPage;
