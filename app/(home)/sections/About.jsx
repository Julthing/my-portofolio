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
                icon: "solar:calendar-bold-duotone",
                label: "Education",
                value: "Information Systems & Technology",
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
              href="#"
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
                an enthusiastic and detail-oriented software developer hailing from West Sumbawa,
                West Nusa Tenggara (NTB). I am currently in my final year majoring in Information
                Systems and Technology at Universitas Muhammadiyah Mataram. My journey in technology
                is driven by a deep-seated passion for creating impactful web and mobile applications
                that bridge the gap between complex functionality and seamless user experience.
              </p>

              <p>
                I recently completed an enriching internship at{" "}
                <span className="text-primary font-medium">PT Begawe Inti Media</span> as a Frontend
                Developer. During this time, I honed my skills in translating design concepts into
                interactive, responsive, and user-friendly digital interfaces. This professional
                experience not only solidified my core web development abilities but also gave me
                hands-on exposure to collaborative, industry-standard workflows.
              </p>

              <p>
                Beyond traditional frontend development, I am highly driven by the intersection of
                web technologies and artificial intelligence. Through my current undergraduate thesis,
                I am exploring how to integrate machine learning models into web-based systems. This
                continuous exploration challenges me to build platforms that are not only visually
                appealing and interactive but also technologically advanced and secure.
              </p>

              <p>
                I believe that great software is born from a balance of logical rigor, continuous
                learning, and creative design. Whether I am debugging a complex system or refining a
                user interface, I approach every task with focus and dedication. When I am not writing
                code, I find that stepping away to enjoy a quiet moment with a good book in nature
                helps me maintain a clear perspective and return to my work with fresh ideas.
              </p>

              <p>
                I am always eager to learn emerging technologies, embrace challenging projects, and
                collaborate with innovative teams. I look forward to bringing my blend of{" "}
                <span className="text-text-primary font-medium">frontend expertise</span> and{" "}
                <span className="text-text-primary font-medium">analytical problem-solving skills</span>{" "}
                to forward-thinking companies.
              </p>
            </div>

            {/* Internship highlight card */}
            <div className="mt-8 p-5 rounded-xl bg-primary-alpha border border-primary/20">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center shrink-0">
                  <Icon icon="solar:case-round-bold-duotone" width={20} className="text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-text-primary mb-0.5">
                    Frontend Developer Intern
                  </p>
                  <p className="text-sm text-primary">PT Begawe Inti Media</p>
                  <p className="text-xs text-text-disabled mt-1">
                    Responsive UI development · Design-to-code · Industry workflow
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
