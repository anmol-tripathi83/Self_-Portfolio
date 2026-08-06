import { Card, CardContent } from "@/components/ui/card";
import { Code } from "lucide-react";
import { Section, SectionHeader } from "./Section";

export function About() {
  return (
    <Section id="about">
      <SectionHeader icon={<Code className="h-7 w-7 text-primary" />} title="About Me" />
      <Card className="border border-border/60 bg-card/95 shadow-[var(--shadow-card)] hover:shadow-xl transition-all duration-500 overflow-hidden ring-1 ring-border/40">
        <CardContent className="p-8 lg:p-12">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 space-y-6">
              <p className="text-lg leading-relaxed text-muted-foreground max-w-xl">
                I am a Computer Science student at IIIT Sonepat (CGPA: 9.06/10) with a strong
                passion for building real-world, scalable products. I love creating full-stack
                web applications, exploring deep concepts in Data Structures & Algorithms, and
                contributing to open-source communities. Along with continuous learning, I enjoy
                diving into advanced technologies like AI/ML and Blockchain to expand my
                problem-solving toolkit and push my technical boundaries.
              </p>
              <div className="flex flex-wrap gap-6 pt-8 border-t border-border/50">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary bg-gradient-to-br from-primary/15 to-primary/5 px-5 py-3 rounded-2xl shadow-sm inline-block border border-primary/10">
                    9.06/10
                  </div>
                  <div className="text-sm text-muted-foreground mt-2 font-medium">CGPA</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary bg-gradient-to-br from-primary/15 to-primary/5 px-5 py-3 rounded-2xl shadow-sm inline-block border border-primary/10">
                    800+
                  </div>
                  <div className="text-sm text-muted-foreground mt-2 font-medium">DSA Problem Solved</div>
                </div>
              </div>
            </div>
            <div className="flex-shrink-0">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 to-accent/30 rounded-3xl blur-lg opacity-40 group-hover:opacity-60 transition-opacity" />
                <div className="relative w-52 h-52 md:w-60 md:h-60 rounded-2xl overflow-hidden border-2 border-border/60 shadow-xl ring-2 ring-primary/10 transition-all duration-500 group-hover:scale-[1.02] group-hover:ring-primary/20">
                  <img
                    src="/profile_photo.jpg"
                    alt="Anmol Tripathi"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </Section>
  );
}
