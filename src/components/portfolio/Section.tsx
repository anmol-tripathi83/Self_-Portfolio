import { cn } from "@/lib/utils";

interface SectionProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
  muted?: boolean;
}

export function Section({ id, children, className, muted }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "py-24 px-4 scroll-mt-20 relative",
        muted && "bg-muted/25",
        className
      )}
    >
      <div className="container mx-auto max-w-6xl relative">{children}</div>
    </section>
  );
}

interface SectionHeaderProps {
  icon: React.ReactNode;
  title: string;
  className?: string;
}

export function SectionHeader({ icon, title, className }: SectionHeaderProps) {
  return (
    <div className={cn("flex items-center gap-4 mb-12 md:mb-14", className)}>
      <div className="p-3 bg-primary/10 rounded-2xl shadow-sm ring-1 ring-primary/10">
        {icon}
      </div>
      <div>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
          {title}
        </h2>
        <div className="mt-2 h-1 w-16 rounded-full bg-gradient-to-r from-primary to-accent" />
      </div>
    </div>
  );
}
