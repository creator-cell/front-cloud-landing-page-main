import { About } from "@/pages/About";
import { AIShowcase } from "@/pages/AIShowcase";
import { AITechnology } from "@/pages/AITechnology";
import { AIUseCases } from "@/pages/AIUseCases";
import { CTA } from "@/pages/CTA";
import { Header } from "@/pages/Header";
import { Hero } from "@/pages/Home";
import { Projects } from "@/pages/Projects";
import { Services } from "@/pages/Services";

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
      <AIUseCases />
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
      <AIUseCases />
      <div id="projects">
        <Projects />
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="contact">
        <CTA />
      </div>
    </div>
  );
};

export default LandingPage;
