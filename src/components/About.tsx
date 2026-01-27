import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Lightbulb, Target, Rocket } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    {
      icon: GraduationCap,
      title: "4th Year B.Tech",
      description: "Computer Science Student",
    },
    {
      icon: Lightbulb,
      title: "Problem Solver",
      description: "Analytical thinking & creative solutions",
    },
    {
      icon: Target,
      title: "Goal-Oriented",
      description: "Focused on delivering quality results",
    },
    {
      icon: Rocket,
      title: "Always Learning",
      description: "Embracing new technologies daily",
    },
  ];

  return (
    <section id="about" className="py-24 relative" ref={ref}>
      <div className="absolute inset-0 section-gradient opacity-50" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-mono text-primary mb-4">01. ABOUT ME</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Who I <span className="gradient-text">Am</span>
          </h3>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a <span className="text-foreground font-medium">4th-year B.Tech Computer Science student</span> with 
              an unwavering passion for creating exceptional digital experiences. My journey in tech has been 
              driven by curiosity and a relentless desire to solve problems through code.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              As a <span className="text-primary font-medium">frontend-focused full-stack developer</span>, I specialize 
              in crafting intuitive user interfaces while actively expanding my expertise in backend technologies. 
              I believe in writing clean, maintainable code that stands the test of time.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              When I'm not coding, you'll find me exploring new frameworks, contributing to open-source projects, 
              or diving deep into the latest tech trends. I'm always ready for the next challenge that pushes 
              my boundaries.
            </p>

            <div className="pt-4">
              <p className="text-primary font-mono text-sm mb-3">Currently focused on:</p>
              <div className="flex flex-wrap gap-3">
                {["React", "TypeScript", "Node.js", "System Design"].map((item) => (
                  <span
                    key={item}
                    className="px-4 py-2 glass-card rounded-full text-sm text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Highlight cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="glass-card rounded-xl p-6 hover:border-primary/50 hover-glow transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-display font-semibold text-foreground mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;