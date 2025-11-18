import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ProjectCard } from "@/components/ProjectCard";
import { SkillCategory } from "@/components/SkillCategory";
import { Mail, Phone, BookOpen, School, Linkedin, Github, ExternalLink, GraduationCap, Code, Award, Briefcase } from "lucide-react";
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
      liveLink: "https://chat-app-fndy.onrender.com/",
    },
    {
      title: "Pizza App – Full-Stack E-Commerce Platform",
      description: "Fully responsive ordering app with secure payments via Razorpay. Role-based access for users and admins.",
      technologies: ["React", "Node.js", "MongoDB", "JWT", "Razorpay"],
      githubLink: "https://github.com/anmol-tripathi83/Pizza_App",
    },
    {
      title: "AI-Powered Website Builder",
      description: "AI-based tool that generates complete HTML, CSS, and JavaScript websites using real-time code creation, live previews, and automated bundling through the Gemini API.",
      technologies: ["Node.js", "Gemini API", "HTML", "CSS", "JavaScript"],
      githubLink: "https://github.com/your-repo-link",
    },
    {
      title: "AI-Powered DSA Instructor",
      description: "AI-driven assistant for DSA learning that provides step-by-step explanations, validates logic, and gives structured hints while enforcing strict DSA-focused responses.",
      technologies: ["Node.js", "Gemini API", "REST APIs", "HTML", "CSS", "JS"],
      githubLink: "https://github.com/anmol-tripathi83/DSA_INSTRUCTOR",
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
      skills: ["Node.js", "Next.js", "Express.js", "REST APIs", "MongoDB", "SQL", "PostgreSQL"],
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
      title: "Tools & ORM",
      skills: ["VS Code", "Git", "GitHub", "Postman", "Microsoft SQL Server", "Prisma", "Cursor"],
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
            Hi, I'm <span className="gradient-text">Anmol Tripathi</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Aspiring Software Engineer | Web Developer
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button variant="hero" size="lg" asChild>
              <a href="https://drive.google.com/file/d/1nMMe5_SPV7W3zVd2q-Tv8bzQdUpqQB14/view?usp=sharing">View My Resume</a>
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
              <a href="https://github.com/anmol-tripathi83" target="_blank" rel="noopener noreferrer">
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
        <div className="container mx-auto max-w-6xl fade-in">
          <div className="flex items-center gap-3 mb-12">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Code className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              About Me
            </h2>
          </div>
          
          <Card className="border-border/50 bg-gradient-to-br from-card to-card/80 shadow-xl hover:shadow-2xl transition-all duration-500 group">
            <CardContent className="p-8 lg:p-10">
              <div className="flex flex-col lg:flex-row items-center gap-10">
                {/* Text Content */}
                <div className="flex-1 space-y-6">
                  <div className="space-y-4">
                    <p className="text-lg leading-relaxed text-muted-foreground">
                      I am a Computer Science student at IIIT Sonepat (CGPA: 9.3/10) with a strong passion for building 
                      real-world, scalable products. I love creating full-stack web applications, exploring deep concepts 
                      in Data Structures & Algorithms, and contributing to open-source communities. Along with continuous 
                      learning, I enjoy diving into advanced technologies like AI/ML and Blockchain to expand 
                      my problem-solving toolkit and push my technical boundaries.
                    </p>
                  </div>
                  
                  {/* Enhanced Stats */}
                  <div className="flex flex-wrap gap-6 pt-6 border-t border-border/30">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary bg-primary/10 px-4 py-2 rounded-xl shadow-sm">9.3/10</div>
                      <div className="text-sm text-muted-foreground mt-2 font-medium">CGPA</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary bg-primary/10 px-4 py-2 rounded-xl shadow-sm">600+</div>
                      <div className="text-sm text-muted-foreground mt-2 font-medium">DSA Solved</div>
                    </div>
                  </div>
                </div>
                
                {/* Enhanced Profile Picture */}
                <div className="flex-shrink-0">
                  <div className="relative group">
                    <div className="w-56 h-56 rounded-2xl overflow-hidden border-4 border-primary/20 shadow-2xl group-hover:shadow-3xl transition-all duration-500">
                      <img 
                        src="/profile_photo.jpg" 
                        alt="Anmol Tripathi"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                    </div>
                    {/* Animated border effect */}
                    <div className="absolute inset-0 rounded-2xl border-2 border-primary/10 group-hover:border-primary/30 transition-all duration-500 -z-10 group-hover:scale-105"></div>
                    {/* Floating elements */}
                    <div className="absolute -top-3 -right-3 w-6 h-6 bg-primary/20 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                    <div className="absolute -bottom-3 -left-3 w-4 h-4 bg-primary/10 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl fade-in">
          <div className="flex items-center gap-3 mb-12">
            <div className="p-2 bg-primary/10 rounded-lg">
              <GraduationCap className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              Education
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* B.Tech Card */}
            <Card className="border-border/50 bg-card hover:bg-card/90 shadow-lg hover:shadow-xl transition-all duration-300 group hover-lift">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <GraduationCap className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="text-xl">B.Tech in Computer Science</CardTitle>
                </div>
                <CardDescription className="text-base font-medium">
                  Indian Institute of Information Technology, Sonepat
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2">
                  <div className="text-2xl font-bold text-primary">9.3/10</div>
                  <span className="text-sm text-muted-foreground">CGPA</span>
                </div>
                <div className="mt-2 text-sm text-muted-foreground">2023 – 2027</div>
              </CardContent>
            </Card>

            {/* Higher Secondary Card */}
            <Card className="border-border/50 bg-card hover:bg-card/90 shadow-lg hover:shadow-xl transition-all duration-300 group hover-lift">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <BookOpen className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="text-xl">Higher Secondary Education</CardTitle>
                </div>
                <CardDescription className="text-base font-medium">
                  Dr. Rizvi Springfield School
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2">
                  <div className="text-2xl font-bold text-primary">93.8%</div>
                  <span className="text-sm text-muted-foreground">Percentage</span>
                </div>
                <div className="mt-2 text-sm text-muted-foreground">2021 – 2023</div>
              </CardContent>
            </Card>

            {/* Secondary Education Card */}
            <Card className="border-border/50 bg-card hover:bg-card/90 shadow-lg hover:shadow-xl transition-all duration-300 group hover-lift">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <School className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="text-xl">Secondary Education</CardTitle>
                </div>
                <CardDescription className="text-base font-medium">
                  BP Public School
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2">
                  <div className="text-2xl font-bold text-primary">91.4%</div>
                  <span className="text-sm text-muted-foreground">Percentage</span>
                </div>
                <div className="mt-2 text-sm text-muted-foreground">2019 – 2021</div>
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
          
          {/* Horizontal scroll container */}
          <div className="relative">
            <div className="flex overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide gap-6">
              {projects.map((project) => (
                <div key={project.title} className="flex-shrink-0 w-[85vw] md:w-[400px] snap-start">
                  <ProjectCard {...project} />
                </div>
              ))}
            </div>
            
            {/* Optional: Scroll gradient indicators */}
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent pointer-events-none"></div>
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent pointer-events-none"></div>
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
                <p className="text-muted-foreground">450+ problems solved</p>
                <Button variant="link" className="p-0 h-auto" asChild>
                  <a href="https://leetcode.com/u/anmoltripathi8303/" target="_blank" rel="noopener noreferrer">
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
                <p className="text-muted-foreground">2★ Coder (max rating 1527+)</p>
                <Button variant="link" className="p-0 h-auto" asChild>
                  <a href="https://www.codechef.com/users/anmoltripathi8" target="_blank" rel="noopener noreferrer">
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
                  <li>Solved 600+ coding problems across multiple platforms</li>
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
                  <a href="https://github.com/anmol-tripathi83" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
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
