import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface SkillCategoryProps {
  title: string;
  skills: string[];
}

export const SkillCategory = ({ title, skills }: SkillCategoryProps) => {
  return (
    <div className="space-y-4 p-5 rounded-2xl border border-border/50 bg-card/50 hover:bg-card/80 transition-colors ring-1 ring-border/30">
      <h3 className="text-lg font-semibold text-foreground">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <Tooltip key={skill}>
            <TooltipTrigger asChild>
              <span
                className="rounded-xl border border-border/60 bg-background/80 px-4 py-2 text-sm font-medium text-foreground/90 transition-all hover:border-primary/50 hover:bg-primary/5 hover:text-primary hover:shadow-sm cursor-default"
              >
                {skill}
              </span>
            </TooltipTrigger>
            <TooltipContent side="top" className="font-medium">
              {skill}
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </div>
  );
};
