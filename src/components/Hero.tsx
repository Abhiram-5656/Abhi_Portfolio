import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { SiLeetcode } from "react-icons/si";
import { useTypedText } from "../hooks/useTypedText";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

export default function Hero() {
  const typed = useTypedText([
    "Software Engineer",
    "Java Backend Developer",
    "MERN Stack Developer",
  ]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-32 pb-20 px-6"
    >
      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-[1.2fr,0.8fr] gap-14 items-center">
        <motion.div
          initial="hidden"
          animate="show"
          transition={{ staggerChildren: 0.12 }}
        >
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="statusbar mb-6"
          >
            <span className="dot-pulse" />
            ~/n-abhiram/portfolio <span className="text-accent">main</span> ●
            status: open to work
          </motion.div>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="text-muted font-mono text-sm mb-4"
          >
            Hi, my name is
          </motion.p>

          <motion.h1
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="font-heading font-extrabold text-4xl sm:text-5xl md:text-6xl leading-tight mb-4"
          >
            I'm N. <span className="grad-text">Abhiram.</span>
          </motion.h1>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="font-heading font-semibold text-xl sm:text-2xl text-muted mb-6 h-8"
          >
            <span>{typed}</span>
            <span className="inline-block w-[2px] ml-1 bg-accent animate-blink">
              &nbsp;
            </span>
          </motion.div>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="text-muted max-w-xl leading-relaxed mb-8"
          >
            Final-year B.Tech CSE student who likes making backends that don't
            fall over. I build with Java, Spring Boot, Node.js and the MERN
            stack — and I spend my free time breaking down DSA problems until
            they stop being scary.
          </motion.p>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap items-center gap-4 mb-8"
          >
            <a
              href="#resume"
              className="btn-primary rounded-xl px-6 py-3 font-semibold text-sm"
            >
              Download Resume
            </a>
            <a
              href="#contact"
              className="btn-outline rounded-xl px-6 py-3 font-semibold text-sm"
            >
              Contact Me
            </a>
          </motion.div>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-5 text-muted"
          >
            <a
              href="https://github.com/Abhiram-5656"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:text-accent transition-colors"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/nalla-abhiram-806381266/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-accent transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:abhiram@example.com"
              aria-label="Email"
              className="hover:text-accent transition-colors"
            >
              <Mail size={20} />
            </a>
            <a
              href="https://leetcode.com/u/2200031123/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LeetCode"
              className="hover:text-accent transition-colors"
            >
              <SiLeetcode size={20} />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="relative flex justify-center"
        >
          <div className="absolute -top-8 -left-6 w-14 h-14 glass rounded-2xl flex items-center justify-center text-accent font-mono text-xs animate-floaty-slow">
            Java
          </div>
          <div className="absolute -bottom-4 -right-2 w-14 h-14 glass rounded-2xl flex items-center justify-center text-secondary font-mono text-xs animate-floaty">
            {"{ }"}
          </div>
          <div
            className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full glass flex items-center justify-center overflow-hidden"
            style={{ boxShadow: "0 0 80px -10px rgba(59,130,246,.35)" }}
          >
           <img
  src="/profile abhi.png"
  alt="N. Abhiram"
  className="w-full h-full object-cover object-[center_15%]"
/>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
