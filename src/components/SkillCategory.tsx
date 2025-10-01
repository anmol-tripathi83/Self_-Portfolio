interface SkillCategoryProps {
  title: string;
  skills: string[];
}

export const SkillCategory = ({ title, skills }: SkillCategoryProps) => {
  return (
    <div className="space-y-3">
      <h3 className="text-lg font-semibold text-foreground">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="rounded-lg border border-border bg-card px-4 py-2 text-sm font-medium text-card-foreground transition-all hover:border-primary hover:shadow-md"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};
