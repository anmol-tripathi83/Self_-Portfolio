export function Footer() {
  return (
    <footer className="border-t border-border/50 py-10 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl text-center">
        <p className="text-muted-foreground text-sm">
          © {new Date().getFullYear()} Anmol Tripathi. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
