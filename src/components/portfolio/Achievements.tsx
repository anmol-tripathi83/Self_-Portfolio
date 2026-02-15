import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award, ExternalLink } from "lucide-react";
import { achievements, otherAchievementsList } from "@/data/portfolio";
import { Section, SectionHeader } from "./Section";

export function Achievements() {
  return (
    <Section id="achievements" muted>
      <div className="max-w-4xl mx-auto">
        <SectionHeader icon={<Award className="h-7 w-7 text-primary" />} title="Achievements" />
        <div className="grid gap-4 md:grid-cols-2">
          {achievements.slice(0, 2).map((item) => (
            <Card
              key={item.title}
              className="border border-border/60 bg-card shadow-[var(--shadow-card)] hover:shadow-xl transition-all hover:-translate-y-1 ring-1 ring-border/30 hover:ring-primary/20"
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <ExternalLink className="h-5 w-5 text-primary shrink-0" />
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-muted-foreground">{item.description}</p>
                {item.link && (
                  <Button variant="link" className="p-0 h-auto font-medium" asChild>
                    <a href={item.link} target="_blank" rel="noopener noreferrer">
                      {item.linkLabel}
                    </a>
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
          <Card className="border border-border/60 bg-card shadow-[var(--shadow-card)] hover:shadow-xl transition-all hover:-translate-y-1 md:col-span-2 ring-1 ring-border/30">
            <CardHeader>
              <CardTitle>{achievements[2].title}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground leading-relaxed">
                {otherAchievementsList.map((line, i) => (
                  <li key={i}>{line}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </Section>
  );
}
