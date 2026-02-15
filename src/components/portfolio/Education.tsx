import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, BookOpen, School } from "lucide-react";
import { education } from "@/data/portfolio";
import type { EducationItem } from "@/data/types";
import { Section, SectionHeader } from "./Section";

const iconMap = {
  graduation: GraduationCap,
  book: BookOpen,
  school: School,
};

function EducationCard({ item }: { item: EducationItem }) {
  const Icon = iconMap[item.icon];
  return (
    <Card className="group border border-border/60 bg-card hover:bg-card/95 shadow-[var(--shadow-card)] hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 h-full ring-1 ring-border/30 hover:ring-primary/20">
      <CardHeader className="pb-4">
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2.5 bg-primary/10 rounded-xl group-hover:bg-primary/15 transition-colors">
            <Icon className="h-5 w-5 text-primary" />
          </div>
          <CardTitle className="text-xl">{item.title}</CardTitle>
        </div>
        <CardDescription className="text-base font-medium text-muted-foreground">
          {item.institution}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold text-primary">{item.score}</span>
          <span className="text-sm text-muted-foreground">{item.scoreLabel}</span>
        </div>
        <p className="mt-2 text-sm text-muted-foreground">{item.period}</p>
      </CardContent>
    </Card>
  );
}

export function Education() {
  return (
    <Section id="education" muted>
      <SectionHeader
        icon={<GraduationCap className="h-7 w-7 text-primary" />}
        title="Education"
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {education.map((item) => (
          <EducationCard key={item.title} item={item} />
        ))}
      </div>
    </Section>
  );
}
