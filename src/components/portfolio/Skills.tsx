import { Code } from "lucide-react";
import { SkillCategory } from "@/components/SkillCategory";
import { skillCategories } from "@/data/portfolio";
import { Section, SectionHeader } from "./Section";

export function Skills() {
  return (
    <Section id="skills">
      <SectionHeader icon={<Code className="h-7 w-7 text-primary" />} title="Skills & Tech Stack" />
      <div className="grid gap-8 md:grid-cols-2">
        {skillCategories.map((category) => (
          <SkillCategory key={category.title} title={category.title} skills={category.skills} />
        ))}
      </div>
    </Section>
  );
}
