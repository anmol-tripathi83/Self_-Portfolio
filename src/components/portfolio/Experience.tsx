import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase } from "lucide-react";
import { Section, SectionHeader } from "./Section";

export function Experience() {
  return (
    <Section id="experience" muted>
      <div className="max-w-4xl mx-auto">
        <SectionHeader icon={<Briefcase className="h-7 w-7 text-primary" />} title="Experience" />
        <div className="flex gap-3">
          <Card className="border border-border/60 bg-card shadow-[var(--shadow-card)] hover:shadow-xl transition-all ring-1 ring-border/40">
            <CardHeader>
              <CardTitle className="text-xl">
                Full Stack Development Intern
              </CardTitle>
              <CardDescription className="text-base">
                  <span>Cyrostack [June 2026 – July 2026]</span>
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-4">
              <ul className="list-disc list-inside space-y-3 text-muted-foreground leading-relaxed">
                <li>
                  Developed and maintained full-stack web applications using the MERN stack,
                  focusing on building scalable, responsive, and production-ready solutions.
                </li>

                <li>
                  Built RESTful APIs, integrated backend services, and collaborated with
                  mentors to deliver high-quality features following industry best practices.
                </li>
              </ul>
            </CardContent>
          </Card>
          <Card className="border border-border/60 bg-card shadow-[var(--shadow-card)] hover:shadow-xl transition-all ring-1 ring-border/40">
            <CardHeader>
              <CardTitle className="text-xl">Open-Source Contributions</CardTitle>
              <CardDescription className="text-base">HacktoberFest 2024</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="list-disc list-inside space-y-3 text-muted-foreground leading-relaxed">
                <li>
                  Contributed 6+ merged pull requests to multiple open-source projects in Web
                  Development and Algorithms, improving functionality and code efficiency.
                </li>
                <li>
                  Enhanced project documentation and optimized algorithms, leading to cleaner, more
                  maintainable code for project collaborators.
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
        
      </div>
    </Section>
  );
}
