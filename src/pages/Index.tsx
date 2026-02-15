import {
  Navbar,
  Hero,
  About,
  Education,
  Skills,
  Experience,
  Projects,
  Achievements,
  Contact,
  Footer,
} from "@/components/portfolio";
import { useActiveSection } from "@/hooks/useActiveSection";
import { sectionIds } from "@/data/portfolio";

const Index = () => {
  const activeSection = useActiveSection(sectionIds);

  return (
  <div className="min-h-screen bg-background antialiased">
    <Navbar activeSection={activeSection} />
    <main>
      <Hero />
      <About />
      <Education />
      <Skills />
      <Experience />
      <Projects />
      <Achievements />
      <Contact />
    </main>
    <Footer />
  </div>
  );
};

export default Index;
