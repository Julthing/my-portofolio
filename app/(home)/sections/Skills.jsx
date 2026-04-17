"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

const skills = [
  { name: "HTML5", icon: "logos:html-5" },
  { name: "CSS3", icon: "logos:css-3" },
  { name: "JavaScript", icon: "logos:javascript" },
  { name: "TypeScript", icon: "logos:typescript-icon" },
  { name: "React", icon: "logos:react" },
  { name: "Next.js", icon: "logos:nextjs-icon" },
  { name: "Bootstrap", icon: "logos:bootstrap" },
  { name: "Laravel", icon: "logos:laravel" },
  { name: "CodeIgniter", icon: "logos:codeigniter" },
  { name: "PHP", icon: "logos:php" },
  { name: "Node.js", icon: "logos:nodejs-icon" },
  { name: "Python", icon: "logos:python" },
  { name: "C++", icon: "logos:c-plusplus" },
  { name: "Git", icon: "logos:git-icon" },
  { name: "VS Code", icon: "logos:visual-studio-code" },
  { name: "Figma", icon: "logos:figma" },
  { name: "npm", icon: "logos:npm-icon" },
  { name: "Vercel", icon: "logos:vercel-icon" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-primary font-semibold text-sm mb-2">Skills</p>
          <h2 className="text-3xl md:text-4xl font-bold">My tech stack</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl bg-bg-paper shadow-card p-8"
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {skills.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04, duration: 0.3 }}
                className="group flex flex-col items-center gap-2.5 p-4 rounded-xl hover:bg-bg-neutral border border-transparent hover:border-divider transition-all duration-300 cursor-default"
              >
                <Icon
                  icon={skill.icon}
                  width={26}
                  className="opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                />
                <span className="text-xs font-medium text-center text-text-secondary group-hover:text-text-primary transition-colors duration-300 leading-tight">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
