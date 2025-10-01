import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ProjectCard } from "@/components/ProjectCard";
import { SkillCategory } from "@/components/SkillCategory";
import { Mail, Phone, Linkedin, Github, ExternalLink, GraduationCap, Code, Award, Briefcase } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const projects = [
    {
      title: "Real-Time Chat App",
      description: "Secure JWT authentication, real-time WebSocket messaging, scalable to 500+ users. Features themes and online/offline status for improved UX.",
      technologies: ["React", "Node.js", "Express", "Socket.io", "WebRTC", "MongoDB"],
      liveLink: "#",
    },
    {
      title: "Pizza App – Full-Stack E-Commerce Platform",
      description: "Fully responsive ordering app with secure payments via Razorpay. Role-based access for users and admins.",
      technologies: ["React", "Node.js", "MongoDB", "JWT", "Razorpay"],
      githubLink: "#",
    },
    {
      title: "AI-Powered DSA Instructor",
      description: "Interactive chat app for DSA explanations with AI-driven guidance and strict DSA-only rules.",
      technologies: ["Node.js", "Gemini API", "REST APIs"],
      githubLink: "#",
    },
  ];

  const skillCategories = [
    {
      title: "Languages",
      skills: ["C", "C++", "Java", "Python", "JavaScript", "TypeScript"],
    },
    {
      title: "Frontend",
      skills: ["React.js", "Tailwind CSS", "HTML", "CSS", "Redux"],
    },
    {
      title: "Backend & Database",
      skills: ["Node.js", "Next.js", "Express.js", "REST APIs", "MongoDB", "SQL"],
    },
    {
      title: "AI/ML & Emerging Tech",
      skills: ["GenAI", "RAG", "Vector Databases", "Pinecone", "Weaviate", "Blockchain"],
    },
    {
      title: "Concepts",
      skills: ["OOPs", "DSA", "System Design", "OS", "DBMS", "CN", "Compiler Design"],
    },
    {
      title: "Tools",
      skills: ["VS Code", "Git", "Postman", "Microsoft SQL Server"],
    },
    {
      title: "Soft Skills",
      skills: ["Problem-Solving", "Leadership", "Teamwork", "Adaptability", "Communication"],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-lg">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <span className="text-xl font-bold gradient-text">AT</span>
          <div className="hidden md:flex gap-6">
            <a href="#about" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">About</a>
            <a href="#education" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Education</a>
            <a href="#skills" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Skills</a>
            <a href="#experience" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Experience</a>
            <a href="#projects" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Projects</a>
            <a href="#achievements" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Achievements</a>
            <a href="#contact" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-transparent"></div>
        <div className="container mx-auto text-center relative z-10 fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Hi, I'm <span className="gradient-text">Anmol Tripathi</span> 👋
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Aspiring Software Engineer | Web Developer | Problem Solver
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button variant="hero" size="lg" asChild>
              <a href="#contact">View My Resume</a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#contact">Contact Me</a>
            </Button>
          </div>
          <div className="flex gap-4 justify-center mt-8">
            <Button variant="ghost" size="icon" asChild>
              <a href="https://linkedin.com/in/anmoltripathi25" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="https://github.com/anmoltripathi83" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="mailto:anmoltripathi8303@gmail.com">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl fade-in">
          <div className="flex items-center gap-3 mb-8">
            <Code className="h-8 w-8 text-primary" />
            <h2 className="text-4xl font-bold">About Me</h2>
          </div>
          <Card className="border-border/50">
            <CardContent className="pt-6">
              <p className="text-lg leading-relaxed text-muted-foreground">
                I am a passionate Computer Science student at IIIT Sonepat with a CGPA of 9.3/10. 
                I enjoy solving real-world problems with technology, contributing to open-source projects, 
                and continuously learning new skills. My interests include Web Development, Data Structures & Algorithms, 
                and exploring advanced areas like AI/ML, Kubernetes, and Blockchain.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl fade-in">
          <div className="flex items-center gap-3 mb-8">
            <GraduationCap className="h-8 w-8 text-primary" />
            <h2 className="text-4xl font-bold">Education</h2>
          </div>
          <div className="space-y-4">
            <Card className="border-border/50 hover-lift">
              <CardHeader>
                <CardTitle>B.Tech in Computer Science</CardTitle>
                <CardDescription>Indian Institute of Information Technology, Sonepat</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold text-primary">CGPA: 9.3/10</p>
              </CardContent>
            </Card>
            <Card className="border-border/50 hover-lift">
              <CardHeader>
                <CardTitle>Higher Secondary Education</CardTitle>
                <CardDescription>Dr. Rizvi Springfield School</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold text-primary">91.4%</p>
              </CardContent>
            </Card>
            <Card className="border-border/50 hover-lift">
              <CardHeader>
                <CardTitle>Secondary Education</CardTitle>
                <CardDescription>BP Public School</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold text-primary">93.8%</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl fade-in">
          <div className="flex items-center gap-3 mb-8">
            <Code className="h-8 w-8 text-primary" />
            <h2 className="text-4xl font-bold">Skills & Tech Stack</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {skillCategories.map((category) => (
              <SkillCategory key={category.title} title={category.title} skills={category.skills} />
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl fade-in">
          <div className="flex items-center gap-3 mb-8">
            <Briefcase className="h-8 w-8 text-primary" />
            <h2 className="text-4xl font-bold">Experience</h2>
          </div>
          <Card className="border-border/50">
            <CardHeader>
              <CardTitle>Open-Source Contributions</CardTitle>
              <CardDescription>HacktoberFest 2024</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>7+ merged PRs across collaborative repositories</li>
                <li>Enhanced web development projects with features and optimizations</li>
                <li>Implemented algorithms improving scalability and performance</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl fade-in">
          <div className="flex items-center gap-3 mb-8">
            <Code className="h-8 w-8 text-primary" />
            <h2 className="text-4xl font-bold">Featured Projects</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl fade-in">
          <div className="flex items-center gap-3 mb-8">
            <Award className="h-8 w-8 text-primary" />
            <h2 className="text-4xl font-bold">Achievements</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <Card className="border-border/50 hover-lift">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ExternalLink className="h-5 w-5 text-primary" />
                  LeetCode
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">300+ problems solved</p>
                <Button variant="link" className="p-0 h-auto" asChild>
                  <a href="https://leetcode.com/anmoltripathi25" target="_blank" rel="noopener noreferrer">
                    View Profile
                  </a>
                </Button>
              </CardContent>
            </Card>
            <Card className="border-border/50 hover-lift">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ExternalLink className="h-5 w-5 text-primary" />
                  CodeChef
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">2★ Coder (max rating 1400+)</p>
                <Button variant="link" className="p-0 h-auto" asChild>
                  <a href="https://www.codechef.com/users/anmoltripathi25" target="_blank" rel="noopener noreferrer">
                    View Profile
                  </a>
                </Button>
              </CardContent>
            </Card>
            <Card className="border-border/50 hover-lift md:col-span-2">
              <CardHeader>
                <CardTitle>Other Achievements</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Solved 500+ coding problems across multiple platforms</li>
                  <li>Top 10% of 50,000 applicants in Reliance Foundation Scholarship</li>
                  <li>Active hackathon participant & open-source contributor</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl fade-in">
          <div className="flex items-center gap-3 mb-8">
            <Mail className="h-8 w-8 text-primary" />
            <h2 className="text-4xl font-bold">Get In Touch</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-4">
              <Card className="border-border/50">
                <CardContent className="pt-6 space-y-4">
                  <a href="mailto:anmoltripathi8303@gmail.com" className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
                    <Mail className="h-5 w-5" />
                    anmoltripathi8303@gmail.com
                  </a>
                  <a href="tel:+918303054580" className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
                    <Phone className="h-5 w-5" />
                    +91-8303054580
                  </a>
                  <a href="https://linkedin.com/in/anmoltripathi25" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
                    <Linkedin className="h-5 w-5" />
                    linkedin.com/in/anmoltripathi25
                  </a>
                  <a href="https://github.com/anmoltripathi83" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
                    <Github className="h-5 w-5" />
                    github.com/anmoltripathi83
                  </a>
                </CardContent>
              </Card>
            </div>
            <Card className="border-border/50">
              <CardHeader>
                <CardTitle>Send a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <Input
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                  <Input
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                  <Textarea
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={4}
                  />
                  <Button type="submit" className="w-full" variant="hero">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/40 py-8 px-4">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>© 2025 Anmol Tripathi. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
