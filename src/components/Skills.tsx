import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Code2, 
  Database, 
  Brain, 
  FileSpreadsheet, 
  Palette, 
  Monitor,
  Server,
  Layers
} from "lucide-react";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skills = [
    {
      icon: Code2,
      name: "Java",
      level: 85,
      description: "Core language for DSA & backend",
    },
    {
      icon: Database,
      name: "Data Structures & Algorithms",
      level: 80,
      description: "Problem solving & optimization",
    },
    {
      icon: Brain,
      name: "Artificial Intelligence",
      level: 60,
      description: "Foundational knowledge & concepts",
    },
    {
      icon: FileSpreadsheet,
      name: "Excel",
      level: 75,
      description: "Data handling & analysis",
    },
    {
      icon: Palette,
      name: "Web Design",
      level: 85,
      description: "UI/UX & visual aesthetics",
    },
    {
      icon: Monitor,
      name: "Frontend Development",
      level: 90,
      description: "React, TypeScript, Tailwind",
    },
    {
      icon: Server,
      name: "Backend Development",
      level: 65,
      description: "Node.js, APIs (actively learning)",
    },
    {
      icon: Layers,
      name: "Full-Stack Development",
      level: 75,
      description: "End-to-end application building",
    },
  ];

  const techStack = [
    "React", "TypeScript", "JavaScript", "HTML5", "CSS3", 
    "Tailwind CSS", "Node.js", "Git", "REST APIs", "MongoDB",
    "SQL", "Figma", "VS Code", "Linux"
  ];

  return (
    <section id="skills" className="py-24 relative" ref={ref}>
      <div className="absolute top-0 right-0 w-1/2 h-1/2 section-gradient opacity-30" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-mono text-primary mb-4">02. SKILLS</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold mb-6">
            My <span className="gradient-text">Expertise</span>
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A blend of technical skills and creative problem-solving abilities that I bring to every project.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.05 }}
              className="glass-card rounded-xl p-6 hover:border-primary/50 hover-glow transition-all duration-300 group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <skill.icon className="w-6 h-6 text-primary" />
                </div>
                <span className="text-2xl font-display font-bold text-primary">{skill.level}%</span>
              </div>
              
              <h4 className="font-display font-semibold text-foreground mb-2">{skill.name}</h4>
              <p className="text-sm text-muted-foreground mb-4">{skill.description}</p>
              
              {/* Progress bar */}
              <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${skill.level}%` } : {}}
                  transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                  className="h-full skill-bar rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <h4 className="text-lg font-display font-semibold text-foreground mb-6">Technologies I Work With</h4>
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.7 + index * 0.03 }}
                className="px-4 py-2 glass-card rounded-full text-sm text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300 cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;