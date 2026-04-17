"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";
import { projects, categories } from "@/app/lib/projects";

export default function AllProjects() {
  const [active, setActive] = useState("all");

  const filtered =
    active === "all" ? projects : projects.filter((p) => p.category === active);

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Back link */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-primary transition-colors"
          >
            <Icon icon="solar:arrow-left-linear" width={16} />
            Back to Home
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="text-primary font-semibold text-sm mb-2">Portfolio</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">All Projects</h1>
          <p className="text-text-secondary max-w-xl">
            A collection of web applications and research projects I&apos;ve built
            as a frontend developer.
          </p>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap gap-2 mb-10"
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                active === cat.id
                  ? "bg-primary text-white shadow-lg shadow-primary/20"
                  : "bg-bg-paper text-text-secondary hover:text-text-primary hover:bg-bg-neutral border border-divider"
              }`}
            >
              <Icon icon={cat.icon} width={16} />
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.4 }}
                className="group rounded-2xl bg-bg-paper overflow-hidden shadow-card hover:shadow-dropdown transition-all duration-300 flex flex-col"
              >
                {/* Preview */}
                <div className="relative h-44 bg-bg-neutral overflow-hidden">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="w-14 h-14 rounded-2xl bg-primary-alpha flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Icon icon={project.icon} width={26} className="text-primary" />
                      </div>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300" />
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h3 className="text-lg font-bold text-text-primary group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <span className="text-xs text-text-disabled font-mono shrink-0 mt-1">
                      {project.year}
                    </span>
                  </div>
                  <p className="text-xs text-primary font-medium mb-3">{project.client}</p>
                  <p className="text-sm text-text-secondary leading-relaxed mb-4 flex-1">
                    {project.description}
                  </p>

                  {/* Tech */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 text-xs font-medium rounded-md bg-bg-neutral text-text-secondary"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-3 pt-4 border-t border-divider">
                    {project.liveUrl !== "#" ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline"
                      >
                        <Icon icon="solar:eye-bold" width={14} />
                        Live Demo
                      </a>
                    ) : (
                      <span className="flex items-center gap-1.5 text-xs font-medium text-text-disabled">
                        <Icon icon="solar:lock-bold" width={14} />
                        Private
                      </span>
                    )}
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs font-medium text-text-secondary hover:text-text-primary transition-colors ml-auto"
                    >
                      <Icon icon="mdi:github" width={14} />
                      Source
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
