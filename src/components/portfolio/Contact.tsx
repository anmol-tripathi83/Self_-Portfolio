import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, Linkedin, Github, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { submitContactForm } from "@/lib/contact";
import { socialLinks } from "@/data/portfolio";
import { Section, SectionHeader } from "./Section";

const initialForm = { name: "", email: "", message: "" };

export function Contact() {
  const [formData, setFormData] = useState(initialForm);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const result = await submitContactForm(formData);
    setLoading(false);

    if (result.ok) {
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      setFormData(initialForm);
    } else {
      toast({
        variant: "destructive",
        title: "Couldn't send message",
        description: result.error,
      });
    }
  };

  return (
    <Section id="contact">
      <div className="max-w-4xl mx-auto">
        <SectionHeader icon={<Mail className="h-7 w-7 text-primary" />} title="Get In Touch" />
        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-4">
            <Card className="border border-border/60 bg-card/95 shadow-[var(--shadow-card)] ring-1 ring-border/40">
              <CardContent className="pt-6 space-y-6">
                <a
                  href={`mailto:${socialLinks.email}`}
                  className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group p-2 rounded-xl hover:bg-muted/50"
                >
                  <Mail className="h-5 w-5 shrink-0 text-primary/80 group-hover:text-primary transition-colors" />
                  <span className="text-sm font-medium">{socialLinks.email}</span>
                </a>
                <a
                  href="tel:+918303054580"
                  className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group p-2 rounded-xl hover:bg-muted/50"
                >
                  <Phone className="h-5 w-5 shrink-0 text-primary/80 group-hover:text-primary transition-colors" />
                  <span className="text-sm font-medium">+91-8303054580</span>
                </a>
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group p-2 rounded-xl hover:bg-muted/50"
                >
                  <Linkedin className="h-5 w-5 shrink-0 text-primary/80 group-hover:text-primary transition-colors" />
                  <span className="text-sm font-medium">linkedin.com/in/anmoltripathi25</span>
                </a>
                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group p-2 rounded-xl hover:bg-muted/50"
                >
                  <Github className="h-5 w-5 shrink-0 text-primary/80 group-hover:text-primary transition-colors" />
                  <span className="text-sm font-medium">github.com/anmol-tripathi83</span>
                </a>
              </CardContent>
            </Card>
          </div>
          <Card className="border border-border/60 bg-card/95 shadow-[var(--shadow-card)] ring-1 ring-border/40">
            <CardHeader>
              <CardTitle className="text-xl">Send a Message</CardTitle>
              <p className="text-sm text-muted-foreground">
                Fill out the form and I'll reply to your email.
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="contact-name" className="text-foreground font-medium">
                    Your Name
                  </Label>
                  <Input
                    id="contact-name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    disabled={loading}
                    className="bg-background border-border/60 focus:ring-2 focus:ring-primary/20"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contact-email" className="text-foreground font-medium">
                    Your Email
                  </Label>
                  <Input
                    id="contact-email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    disabled={loading}
                    className="bg-background border-border/60 focus:ring-2 focus:ring-primary/20"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contact-message" className="text-foreground font-medium">
                    Message
                  </Label>
                  <Textarea
                    id="contact-message"
                    placeholder="Your message..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={4}
                    disabled={loading}
                    className="bg-background resize-none border-border/60 focus:ring-2 focus:ring-primary/20"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full shadow-lg shadow-primary/20"
                  variant="hero"
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </Section>
  );
}
