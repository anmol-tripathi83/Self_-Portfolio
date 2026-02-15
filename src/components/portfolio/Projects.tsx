import { Code } from "lucide-react";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/portfolio";
import { Section, SectionHeader } from "./Section";

export function Projects() {
  return (
    <Section id="projects">
      <SectionHeader icon={<Code className="h-7 w-7 text-primary" />} title="Featured Projects" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {projects.map((project, index) => (
          <div
            key={project.title}
          >
            <ProjectCard {...project} featured={index === 0} />
          </div>
        ))}
      </div>
    </Section>
  );
}
