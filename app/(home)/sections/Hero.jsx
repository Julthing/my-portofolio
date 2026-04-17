"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import HeroIllustration from "./HeroIllustration";
import Link from "next/link";

const roles = [
  "Frontend Developer",
  "Software Engineer",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout;

    if (!isDeleting && displayText === currentRole) {
      timeout = setTimeout(() => setIsDeleting(true), 2500);
    } else if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    } else {
      timeout = setTimeout(
        () => {
          setDisplayText(
            isDeleting
              ? currentRole.slice(0, displayText.length - 1)
              : currentRole.slice(0, displayText.length + 1)
          );
        },
        isDeleting ? 40 : 80
      );
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section id="home" className="relative min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto px-6 w-full py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-alpha border border-primary/20 mb-8">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-semibold text-primary">
                Available for work
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.15] mb-4">
              Hi, I&apos;m <span className="text-primary">Zuldika</span>
              <br />
              Putra
            </motion.h1>

            {/* Typing */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex items-center gap-2 mb-6">
              <Icon
                icon="solar:code-bold-duotone"
                width={20}
                className="text-primary"
              />
              <span className="text-base md:text-lg text-text-secondary font-mono">
                {displayText}
                <span className="animate-blink text-primary">|</span>
              </span>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="text-text-secondary leading-relaxed max-w-md mb-10">
              I build clean, modern, and responsive web interfaces with a focus
              on performance and beautiful user experiences.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="flex flex-wrap items-center gap-4">
              <Link
                href="/#projects"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary-dark text-white font-semibold rounded-xl transition-all hover:shadow-lg hover:shadow-primary/25">
                <Icon icon="solar:eye-bold" width={18} />
                View Projects
              </Link>
              <a
                href="mailto:zuldikaptr@gmail.com"
                className="inline-flex items-center gap-2 px-6 py-3 border border-divider text-text-primary font-semibold rounded-xl hover:border-primary hover:text-primary transition-all">
                <Icon icon="solar:letter-bold-duotone" width={18} />
                Say Hello
              </a>
            </motion.div>

            {/* Social */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              className="flex items-center gap-3 mt-10">
              {[
                {
                  icon: "mdi:github",
                  href: "https://github.com/Julthing",
                  label: "GitHub",
                },
                {
                  icon: "mdi:linkedin",
                  href: "https://www.linkedin.com/in/zuldika-putra-746495246/",
                  label: "LinkedIn",
                },
                {
                  icon: "mdi:instagram",
                  href: "https://www.instagram.com/zuldikaptr/",
                  label: "Instagram",
                },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-10 h-10 rounded-xl bg-bg-paper flex items-center justify-center text-text-disabled hover:text-primary hover:bg-primary-alpha transition-all">
                  <Icon icon={s.icon} width={20} />
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right: Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="hidden md:flex items-center justify-center">
            <HeroIllustration />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}>
          <Icon
            icon="solar:alt-arrow-down-linear"
            width={20}
            className="text-text-disabled"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
