"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { projects } from "@/app/lib/projects";

// Show only first 2 on homepage
const featured = projects.slice(0, 2);

export default function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-end justify-between mb-16 gap-4"
        >
          <div>
            <p className="text-primary font-semibold text-sm mb-2">Projects</p>
            <h2 className="text-3xl md:text-4xl font-bold">Selected work</h2>
          </div>
          <Link
            href="/projects"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-divider text-text-secondary hover:border-primary hover:text-primary transition-all text-sm font-medium shrink-0"
          >
            View All
            <Icon icon="solar:arrow-right-linear" width={16} />
          </Link>
        </motion.div>

        {/* Project Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {featured.map((project, idx) => (
            <motion.a
              key={project.id}
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.5 }}
              className="group block rounded-2xl bg-bg-paper overflow-hidden shadow-card hover:shadow-dropdown transition-all duration-300"
            >
              {/* Preview area */}
              <div className="relative h-52 md:h-60 bg-bg-neutral overflow-hidden rounded-t-2xl">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto mb-3 rounded-2xl bg-primary-alpha flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Icon icon={project.icon} width={28} className="text-primary" />
                      </div>
                      <p className="text-xs font-semibold text-text-disabled uppercase tracking-wider">
                        {project.subtitle}
                      </p>
                    </div>
                  </div>
                )}
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-full text-sm font-semibold">
                    <Icon icon="solar:eye-bold" width={16} />
                    View Live
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className="p-6">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div>
                    <h3 className="text-xl font-bold text-text-primary group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs text-primary font-medium mt-0.5">{project.client}</p>
                  </div>
                  <Icon
                    icon="solar:arrow-right-up-linear"
                    width={18}
                    className="text-text-disabled group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 mt-1"
                  />
                </div>
                <p className="text-sm text-text-secondary leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 text-xs font-medium rounded-lg bg-bg-neutral text-text-secondary"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Mobile View All */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="sm:hidden mt-8 text-center"
        >
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-divider text-text-secondary hover:border-primary hover:text-primary transition-all text-sm font-medium"
          >
            View All Projects
            <Icon icon="solar:arrow-right-linear" width={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
