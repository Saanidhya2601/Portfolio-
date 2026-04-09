import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail, Heart } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: "https://github.com/Saanidhya2601", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com/", label: "Twitter" },
    { icon: Mail, href: "mailto:saanidhyachauhan35@gmail.com", label: "Email" },
  ];

  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center gap-6">
          <div className="flex items-center gap-6">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target={social.label === "Email" ? "_self" : "_blank"}
                rel={social.label === "Email" ? "" : "noreferrer"}
                aria-label={social.label}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>

          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              Designed & Built by{" "}
              <span className="text-primary font-medium">Saanidhya Chauhan</span>
            </p>
            <p className="text-xs text-muted-foreground mt-2 flex items-center justify-center gap-1">
              Made with <Heart className="w-3 h-3 text-red-500 fill-red-500" /> using React & Tailwind
            </p>
          </div>

          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;