import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  liveLink?: string;
  githubLink?: string;
  thumbnail?: string;
  featured?: boolean;
}

const DEFAULT_THUMBNAIL =
  "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=450&fit=crop";

export const ProjectCard = ({
  title,
  description,
  technologies,
  liveLink,
  githubLink,
  thumbnail,
  featured = false,
}: ProjectCardProps) => {
  const imgSrc = thumbnail || DEFAULT_THUMBNAIL;

  return (
    <Card
      className={cn(
        "group relative h-full flex flex-col overflow-hidden",
        "border border-border/60 bg-card/95 backdrop-blur-sm",
        "shadow-[var(--shadow-card)] hover:shadow-xl hover:shadow-primary/5",
        "transition-all duration-300 hover:-translate-y-1.5",
        "ring-1 ring-border/30 hover:ring-primary/20",
        "dark:bg-card/90"
      )}
    >
      {/* Thumbnail - YouTube style */}
      <a
        href={liveLink || githubLink || "#"}
        target={liveLink || githubLink ? "_blank" : undefined}
        rel={liveLink || githubLink ? "noopener noreferrer" : undefined}
        className="block aspect-video w-full overflow-hidden bg-muted"
      >
        <img
          src={imgSrc}
          alt={title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </a>

      {/* Content below thumbnail */}
      <CardContent className="flex flex-col flex-1 p-4 sm:p-5 space-y-3">
        {/* Title */}
        <h3
          className={cn(
            "font-semibold text-foreground leading-tight group-hover:text-primary transition-colors",
            featured ? "text-lg sm:text-xl line-clamp-2" : "text-base sm:text-lg line-clamp-2"
          )}
        >
          {title}
        </h3>

        {/* Description */}
        <p
          className={cn(
            "text-muted-foreground leading-relaxed flex-1",
            featured ? "line-clamp-3 text-sm" : "line-clamp-2 text-sm"
          )}
        >
          {description}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5">
          {technologies.slice(0, featured ? 8 : 5).map((tech) => (
            <span
              key={tech}
              className="rounded-md bg-primary/10 text-primary px-2 py-0.5 text-xs font-medium border border-primary/10 dark:bg-primary/20 dark:border-primary/20"
            >
              {tech}
            </span>
          ))}
          {technologies.length > (featured ? 8 : 5) && (
            <span className="rounded-md bg-muted text-muted-foreground px-2 py-0.5 text-xs">
              +{technologies.length - (featured ? 8 : 5)}
            </span>
          )}
        </div>

        {/* Actions */}
        <div className="flex flex-wrap gap-2 pt-1">
          {liveLink && (
            <Button variant="default" size="sm" className="shadow-sm" asChild>
              <a href={liveLink} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-3.5 w-3.5" />
                Live Demo
              </a>
            </Button>
          )}
          {githubLink && (
            <Button variant="outline" size="sm" asChild>
              <a href={githubLink} target="_blank" rel="noopener noreferrer">
                <Github className="h-3.5 w-3.5" />
                GitHub
              </a>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};
