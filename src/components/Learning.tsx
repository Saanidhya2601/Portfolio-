import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { TrendingUp, BookOpen, Zap, Target } from "lucide-react";

const Learning = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const learningAreas = [
    {
      icon: TrendingUp,
      title: "Backend Mastery",
      description: "Deepening my understanding of Node.js, Express, and database optimization to become a well-rounded full-stack developer.",
      status: "In Progress",
      progress: 65,
    },
    {
      icon: BookOpen,
      title: "System Design",
      description: "Learning scalable architecture patterns, microservices, and distributed systems for building enterprise-grade applications.",
      status: "Exploring",
      progress: 40,
    },
    {
      icon: Zap,
      title: "Cloud Technologies",
      description: "Getting hands-on with AWS, Docker, and CI/CD pipelines to deploy and manage applications at scale.",
      status: "In Progress",
      progress: 50,
    },
    {
      icon: Target,
      title: "Advanced React Patterns",
      description: "Mastering advanced patterns like compound components, render props, and custom hooks for better code organization.",
      status: "Advanced",
      progress: 80,
    },
  ];

  return (
    <section id="learning" className="py-24 relative" ref={ref}>
      <div className="absolute inset-0 section-gradient opacity-30" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-mono text-primary mb-4">04. GROWTH</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Learning <span className="gradient-text">Journey</span>
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Technology evolves rapidly, and so do I. Here's what I'm currently focusing on to expand my skill set.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {learningAreas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="glass-card rounded-xl p-8 hover:border-primary/50 hover-glow transition-all duration-300 group"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <area.icon className="w-7 h-7 text-primary" />
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-mono ${
                  area.status === "Advanced" ? "bg-primary/20 text-primary" :
                  area.status === "In Progress" ? "bg-accent/20 text-accent" :
                  "bg-secondary text-muted-foreground"
                }`}>
                  {area.status}
                </span>
              </div>
              
              <h4 className="text-xl font-display font-semibold text-foreground mb-3">
                {area.title}
              </h4>
              <p className="text-muted-foreground mb-6">
                {area.description}
              </p>
              
              {/* Progress indicator */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Progress</span>
                  <span className="text-primary font-mono">{area.progress}%</span>
                </div>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${area.progress}%` } : {}}
                    transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                    className="h-full skill-bar rounded-full"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quote section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-16 text-center"
        >
          <blockquote className="text-2xl md:text-3xl font-display text-foreground italic max-w-3xl mx-auto">
            "The only way to do great work is to love what you do."
          </blockquote>
          <p className="text-primary font-mono mt-4">— Steve Jobs</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Learning;