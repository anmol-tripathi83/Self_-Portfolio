import { useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/data/portfolio";
import { ToggleTheme } from "@/components/ToggleTheme";
import { cn } from "@/lib/utils";

interface NavbarProps {
  activeSection?: string | null;
}

export function Navbar({ activeSection = null }: NavbarProps) {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/90 backdrop-blur-xl shadow-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <a href="#" className="text-xl font-bold gradient-text tracking-tight">
          AT
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-0.5">
          <ToggleTheme className="mr-2" />
          {navLinks.map(({ href, label }) => {
            const sectionId = href.slice(1);
            const isActive = activeSection === sectionId;
            return (
              <a
                key={href}
                href={href}
                className={cn(
                  "relative px-4 py-3 text-sm font-medium rounded-lg transition-colors",
                  isActive
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                )}
              >
                {label}
                {isActive && (
                  <span
                    className="absolute bottom-0 left-4 right-4 h-0.5 rounded-full bg-primary"
                    aria-hidden
                  />
                )}
              </a>
            );
          })}
        </div>

        <div className="flex items-center gap-1 md:hidden">
          <ToggleTheme />
          <button
            type="button"
            className="p-2 rounded-lg hover:bg-muted text-foreground"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "md:hidden border-t border-border/40 bg-background/95 backdrop-blur-xl overflow-hidden transition-all duration-200",
          open ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="container mx-auto py-4 px-4 flex flex-col gap-1">
          {navLinks.map(({ href, label }) => {
            const sectionId = href.slice(1);
            const isActive = activeSection === sectionId;
            return (
              <a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className={cn(
                  "px-4 py-3 text-sm font-medium rounded-lg transition-colors border-l-2 -ml-px pl-4",
                  isActive
                    ? "text-foreground border-primary bg-primary/5"
                    : "border-transparent text-muted-foreground hover:text-foreground hover:bg-muted/50"
                )}
              >
                {label}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
