import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Folder } from "lucide-react";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const featuredProjects = [
    {
      title: "Time-Champ",
      description: "Time-Champ: Reclaiming Focus in a Distracted World

The Vision: Time-Champ is a comprehensive productivity suite engineered to help users break free from procrastination and manage complex workflows with precision. Recognizing that modern work often spans multiple projects and deadlines, I set out to build an application that bridges the gap between high-level planning and day-to-day execution.

The Experience: At the core of the platform are highly intuitive, interactive dashboards designed for seamless task organization. Instead of rigid lists, users can interact with their data dynamically, categorizing tasks and setting priorities with zero friction.

The Insights: To ensure users aren't just "busy" but actually productive, the app features a robust real-time analytics engine. It processes user activity to generate rich visual insights—highlighting time allocation, identifying productivity bottlenecks, and revealing long-term work trends.

The Architecture: Built from the ground up with modern web technologies, the application prioritizes speed and responsiveness. By leveraging a modern React architecture, state management is handled efficiently, ensuring that interactions feel instantaneous and the user experience remains frictionless across all devices.",
      tech: ["React", "TypeScript", "Tailwind CSS", "Vite"],
      github: "https://github.com/Saanidhya2601", 
      live: "#",
      image: "/timechamp.png", 
    }
  ];

  const otherProjects = [
    {
      title: "Portfolio Template",
      description: "A customizable portfolio template for developers with smooth animations and dark mode.",
      tech: ["React", "TypeScript", "Tailwind"],
    }
  ];

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
              className="grid lg:grid-cols-2 gap-8 items-center"
            >
              {/* Project Image */}
              <div>
                <div className="aspect-video rounded-xl border border-white/10 overflow-hidden group hover-glow transition-all duration-500 bg-background/50">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Project Info */}
              <div className="lg:text-right">
                <p className="text-primary font-mono text-sm mb-2">Featured Project</p>
                <h4 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
                  {project.title}
                </h4>
                <div className="glass-card rounded-lg p-6 mb-4">
                  <p className="text-muted-foreground">{project.description}</p>
                </div>
                <div className="flex flex-wrap gap-3 mb-6 lg:justify-end">
                  {project.tech.map((tech) => (
                    <span key={tech} className="text-sm font-mono text-primary">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 lg:justify-end">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 text-muted-foreground hover:text-primary transition-colors"
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
            {otherProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                className="glass-card rounded-xl p-6 hover:border-primary/50 hover-glow transition-all duration-300 group h-full flex flex-col max-w-md mx-auto w-full"
              >
                <div className="flex items-center justify-between mb-6">
                  <Folder className="w-10 h-10 text-primary" />
                  <div className="flex gap-3">
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                      <Github className="w-5 h-5" />
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
