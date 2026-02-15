import { Button } from "@/components/ui/button";
import { Linkedin, Github, Mail } from "lucide-react";
import { socialLinks } from "@/data/portfolio";

export function Hero() {
  return (
    <section className="relative pt-36 pb-28 px-4 overflow-hidden min-h-[85vh] flex items-center">
      {/* Background layers */}
      <div className="absolute inset-0 bg-[var(--gradient-mesh)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-15%,hsl(var(--primary)/0.18),transparent_55%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.04] via-transparent to-transparent" />
      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: "64px 64px",
        }}
      />
      <div className="container mx-auto text-center relative z-10">
        <div className="fade-in max-w-3xl mx-auto">
          <p className="text-sm font-medium tracking-widest uppercase text-primary/90 mb-4">
            Software Developer
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight text-balance">
            Hi, I'm <span className="gradient-text">Anmol Tripathi</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            Aspiring Software Development Engineer · Web Developer · Building scalable products
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button variant="hero" size="lg" className="shadow-lg shadow-primary/25" asChild>
              <a href={socialLinks.resume} target="_blank" rel="noopener noreferrer">
                View My Resume
              </a>
            </Button>
            <Button variant="outline" size="lg" className="border-2" asChild>
              <a href="#contact">Contact Me</a>
            </Button>
          </div>
          <div className="flex gap-3 justify-center mt-12">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full h-11 w-11 border border-border/60 hover:border-primary/30 hover:bg-primary/5 hover:text-primary transition-all"
              asChild
            >
              <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full h-11 w-11 border border-border/60 hover:border-primary/30 hover:bg-primary/5 hover:text-primary transition-all"
              asChild
            >
              <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full h-11 w-11 border border-border/60 hover:border-primary/30 hover:bg-primary/5 hover:text-primary transition-all"
              asChild
            >
              <a href={`mailto:${socialLinks.email}`} aria-label="Email">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
