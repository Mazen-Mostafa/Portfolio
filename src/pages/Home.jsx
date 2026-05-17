import { AboutSection } from "../components/AboutSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";
import { HeroSection } from "../components/HeroSection";
import { Navbar } from "../components/Navbar";
import { ProjectsSection } from "../components/ProjectsSection";
import { SkillsSection } from "../components/SkillsSection";
import { StarBackground } from "../components/StartBackground";
import { ThemeToggle } from "../components/ThemeToggle";

const Home = () => {
  return (
    <div>
      {/*Theme toggle */}
      {/*bg effects */}
      <StarBackground />
      {/*Navbar */}
      <Navbar />

      {/*main content */}
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      {/*footer */}
      <Footer />
    </div>
  );
};

export default Home;
