import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Folder } from "lucide-react";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const featuredProjects = [
    {
      title: "E-Commerce Platform",
      description: "A full-featured e-commerce application with product management, cart functionality, user authentication, and payment integration. Built with modern React patterns and responsive design.",
      tech: ["React", "TypeScript", "Node.js", "MongoDB", "Tailwind CSS"],
      github: "#",
      live: "#",
      image: "gradient-1",
    },
    {
      title: "Task Management Dashboard",
      description: "An intuitive task management system with drag-and-drop functionality, team collaboration features, and real-time updates. Designed for productivity and ease of use.",
      tech: ["React", "Redux", "Firebase", "Framer Motion", "Styled Components"],
      github: "#",
      live: "#",
      image: "gradient-2",
    },
    {
      title: "AI-Powered Study Assistant",
      description: "A web application that uses AI to help students organize notes, generate flashcards, and create study schedules. Features intelligent content summarization.",
      tech: ["Next.js", "OpenAI API", "PostgreSQL", "Prisma", "Vercel"],
      github: "#",
      live: "#",
      image: "gradient-3",
    },
  ];

  const otherProjects = [
    {
      title: "Weather Dashboard",
      description: "Real-time weather application with location-based forecasts and beautiful data visualizations.",
      tech: ["React", "Weather API", "Chart.js"],
    },
    {
      title: "Portfolio Template",
      description: "A customizable portfolio template for developers with smooth animations and dark mode.",
      tech: ["HTML", "CSS", "JavaScript"],
    },
    {
      title: "Blog Platform",
      description: "A markdown-based blogging platform with SEO optimization and social sharing features.",
      tech: ["Next.js", "MDX", "Tailwind"],
    },
    {
      title: "Expense Tracker",
      description: "Personal finance management app with budgeting features and spending analytics.",
      tech: ["React", "Node.js", "MongoDB"],
    },
  ];

  const gradients = {
    "gradient-1": "from-primary/20 to-accent/20",
    "gradient-2": "from-accent/20 to-primary/20",
    "gradient-3": "from-primary/30 to-accent/10",
  };

  return (
    <section id="projects" className="py-24 relative" ref={ref}>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 section-gradient opacity-30" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-mono text-primary mb-4">03. PROJECTS</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Featured <span className="gradient-text">Work</span>
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of projects that showcase my skills and passion for building great software.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="space-y-24 mb-24">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className={`grid lg:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
            >
              {/* Project Image */}
              <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
                <div className={`aspect-video rounded-xl bg-gradient-to-br ${gradients[project.image as keyof typeof gradients]} glass-card overflow-hidden group hover-glow transition-all duration-500`}>
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-6xl font-display font-bold text-primary/30 group-hover:text-primary/50 transition-colors">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className={`${index % 2 === 1 ? "lg:order-1 lg:text-right" : ""}`}>
                <p className="text-primary font-mono text-sm mb-2">Featured Project</p>
                <h4 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
                  {project.title}
                </h4>
                <div className="glass-card rounded-lg p-6 mb-4">
                  <p className="text-muted-foreground">{project.description}</p>
                </div>
                <div className={`flex flex-wrap gap-3 mb-6 ${index % 2 === 1 ? "lg:justify-end" : ""}`}>
                  {project.tech.map((tech) => (
                    <span key={tech} className="text-sm font-mono text-primary">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className={`flex gap-4 ${index % 2 === 1 ? "lg:justify-end" : ""}`}>
                  <a
                    href={project.github}
                    className="p-2 text-muted-foreground hover:text-primary transition-colors"
                    aria-label="View GitHub"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href={project.live}
                    className="p-2 text-muted-foreground hover:text-primary transition-colors"
                    aria-label="View Live"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h4 className="text-2xl font-display font-bold text-center mb-12">
            Other Noteworthy Projects
          </h4>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {otherProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                className="glass-card rounded-xl p-6 hover:border-primary/50 hover-glow transition-all duration-300 group h-full flex flex-col"
              >
                <div className="flex items-center justify-between mb-6">
                  <Folder className="w-10 h-10 text-primary" />
                  <div className="flex gap-3">
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                      <Github className="w-5 h-5" />
                    </a>
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>
                <h5 className="text-lg font-display font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h5>
                <p className="text-sm text-muted-foreground mb-4 flex-grow">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((tech) => (
                    <span key={tech} className="text-xs font-mono text-muted-foreground">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
