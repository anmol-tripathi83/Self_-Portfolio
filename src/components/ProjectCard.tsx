import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  liveLink?: string;
  githubLink?: string;
}

export const ProjectCard = ({ title, description, technologies, liveLink, githubLink }: ProjectCardProps) => {
  return (
    <Card className="hover-lift overflow-hidden border-border/50 bg-card">
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-foreground">{title}</CardTitle>
        <CardDescription className="text-muted-foreground">{description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-2">
          {liveLink && (
            <Button variant="default" size="sm" asChild>
              <a href={liveLink} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4" />
                Live Demo
              </a>
            </Button>
          )}
          {githubLink && (
            <Button variant="outline" size="sm" asChild>
              <a href={githubLink} target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" />
                GitHub
              </a>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};
