"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="text-primary font-semibold text-sm mb-2">About Me</p>
          <h2 className="text-3xl md:text-4xl font-bold">Get to know me</h2>
        </motion.div>

        <div className="grid md:grid-cols-12 gap-10 md:gap-16">
          {/* Left: Quick info cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-4 space-y-4"
          >
            {[
              {
                icon: "solar:user-bold-duotone",
                label: "Name",
                value: "Zuldika Putra",
                highlight: false,
              },
              {
                icon: "solar:map-point-bold-duotone",
                label: "Origin",
                value: "West Sumbawa, NTB",
                highlight: false,
              },
              {
                icon: "solar:square-academic-cap-bold-duotone",
                label: "Education",
                value: "S1 Information Systems & Technology",
                highlight: false,
              },
              {
                icon: "solar:buildings-bold-duotone",
                label: "University",
                value: "Universitas Muhammadiyah Mataram",
                highlight: false,
              },
              {
                icon: "solar:letter-bold-duotone",
                label: "Email",
                value: "zuldikaptr@gmail.com",
                highlight: false,
              },
              {
                icon: "solar:check-circle-bold-duotone",
                label: "Status",
                value: "Available for Work",
                highlight: true,
              },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-start gap-3 p-3.5 rounded-xl bg-bg-paper"
              >
                <Icon
                  icon={item.icon}
                  width={20}
                  className={`mt-0.5 shrink-0 ${item.highlight ? "text-primary" : "text-text-disabled"}`}
                />
                <div className="min-w-0">
                  <p className="text-[11px] text-text-disabled font-medium uppercase tracking-wider">
                    {item.label}
                  </p>
                  <p className={`text-sm font-medium truncate ${item.highlight ? "text-primary" : "text-text-primary"}`}>
                    {item.value}
                  </p>
                </div>
              </div>
            ))}

            <a
              href="/CV-ZULDIKA_PUTRA.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-divider text-text-primary font-semibold text-sm hover:border-primary hover:text-primary transition-all w-full justify-center mt-2"
            >
              <Icon icon="solar:download-minimalistic-bold-duotone" width={18} />
              Download Resume
            </a>
          </motion.div>

          {/* Right: Bio text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="md:col-span-8"
          >
            <div className="space-y-5 text-text-secondary leading-relaxed">
              <p>
                Hello, I&apos;m{" "}
                <span className="text-text-primary font-semibold">Zuldika Putra</span>,
                a passionate software developer from West Sumbawa, West Nusa Tenggara (NTB).
                I hold a Bachelor&apos;s degree (S1) in Information Systems and Technology from
                Universitas Muhammadiyah Mataram. My journey in tech is driven by a deep passion
                for building impactful web applications that blend complex functionality with
                seamless user experiences.
              </p>

              <p>
                I gained professional experience as a Web Developer Intern at{" "}
                <span className="text-primary font-medium">PT Begawe Inti Media</span>, where I built
                responsive and interactive UIs using Vue.js, Laravel, and MySQL for the TekaDesa project.
                I also served as a{" "}
                <span className="text-primary font-medium">Teaching Assistant</span> at Universitas
                Muhammadiyah Mataram for two years, teaching Database Programming, Web Programming,
                and Computer Networks.
              </p>

              <p>
                For my undergraduate thesis, I developed a{" "}
                <span className="text-text-primary font-semibold">web-based deepfake video detection system</span>{" "}
                powered by EfficientNet-B0 and deployed it to production. This project combined my web
                development skills with AI/ML, using React.js, Flask, TensorFlow/Keras, and MTCNN for
                face detection — solidifying my ability to build technologically advanced platforms.
              </p>

              <p>
                I believe great software is born from logical rigor, continuous learning, and creative
                design. Whether debugging a complex system or crafting a user interface, I approach every
                challenge with focus and dedication. When I&apos;m not writing code, I enjoy stepping away
                to recharge with a good book in nature.
              </p>

              <p>
                I am eager to learn emerging technologies, tackle challenging projects, and collaborate
                with innovative teams. I look forward to bringing my blend of{" "}
                <span className="text-text-primary font-medium">web development expertise</span> and{" "}
                <span className="text-text-primary font-medium">analytical problem-solving skills</span>{" "}
                to forward-thinking companies as a Junior Software Engineer or Web Developer.
              </p>
            </div>

            {/* Experience highlight cards */}
            <div className="mt-8 space-y-3">
              <div className="p-5 rounded-xl bg-primary-alpha border border-primary/20">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center shrink-0">
                    <Icon icon="solar:case-round-bold-duotone" width={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-text-primary mb-0.5">
                      Web Developer Intern
                    </p>
                    <p className="text-sm text-primary">PT Begawe Inti Media · 2025</p>
                    <p className="text-xs text-text-disabled mt-1">
                      Vue.js · Laravel · MySQL · Responsive UI · Design-to-code
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-5 rounded-xl bg-primary-alpha border border-primary/20">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center shrink-0">
                    <Icon icon="solar:square-academic-cap-bold-duotone" width={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-text-primary mb-0.5">
                      Teaching Assistant
                    </p>
                    <p className="text-sm text-primary">Universitas Muhammadiyah Mataram · 2024–2025</p>
                    <p className="text-xs text-text-disabled mt-1">
                      Database Programming · Web Programming · Computer Networks
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
