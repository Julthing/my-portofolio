"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

const contactLinks = [
  {
    icon: "solar:letter-bold-duotone",
    label: "Email",
    value: "zuldikaptr@gmail.com",
    href: "mailto:zuldikaptr@gmail.com",
    color: "text-red-400",
    bg: "bg-red-400/10",
  },
  {
    icon: "solar:phone-bold-duotone",
    label: "WhatsApp",
    value: "+62 853 3823 2141",
    href: "https://wa.me/6285338232141",
    color: "text-green-400",
    bg: "bg-green-400/10",
  },
  {
    icon: "solar:map-point-bold-duotone",
    label: "Location",
    value: "Indonesia",
    href: null,
    color: "text-blue-400",
    bg: "bg-blue-400/10",
  },
];

const socialLinks = [
  { icon: "mdi:github", href: "#", label: "GitHub" },
  { icon: "mdi:linkedin", href: "#", label: "LinkedIn" },
  { icon: "mdi:instagram", href: "#", label: "Instagram" },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-primary font-semibold text-sm mb-2">Contact</p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Let&apos;s work together
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-12 gap-10">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-5"
          >
            <p className="text-text-secondary leading-relaxed mb-8">
              Have a project in mind or want to collaborate?
              I&apos;d love to hear from you. Reach out through any channel below.
            </p>

            {/* Contact cards */}
            <div className="space-y-4 mb-8">
              {contactLinks.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="flex items-center gap-4 p-4 rounded-xl bg-bg-paper shadow-card hover:shadow-dropdown transition-all group"
                    >
                      <div className={`w-11 h-11 rounded-xl ${item.bg} flex items-center justify-center shrink-0`}>
                        <Icon icon={item.icon} width={22} className={item.color} />
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs text-text-disabled font-medium mb-0.5">{item.label}</p>
                        <p className="text-sm font-semibold text-text-primary group-hover:text-primary transition-colors truncate">
                          {item.value}
                        </p>
                      </div>
                      <Icon icon="solar:arrow-right-up-linear" width={16}
                        className="ml-auto text-text-disabled group-hover:text-primary transition-all shrink-0" />
                    </a>
                  ) : (
                    <div className="flex items-center gap-4 p-4 rounded-xl bg-bg-paper shadow-card">
                      <div className={`w-11 h-11 rounded-xl ${item.bg} flex items-center justify-center shrink-0`}>
                        <Icon icon={item.icon} width={22} className={item.color} />
                      </div>
                      <div>
                        <p className="text-xs text-text-disabled font-medium mb-0.5">{item.label}</p>
                        <p className="text-sm font-semibold text-text-primary">{item.value}</p>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Social */}
            <div>
              <p className="text-sm font-semibold text-text-primary mb-3">Follow me</p>
              <div className="flex gap-3">
                {socialLinks.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="w-10 h-10 rounded-xl bg-bg-paper shadow-card flex items-center justify-center text-text-disabled hover:text-primary hover:bg-primary-alpha transition-all"
                  >
                    <Icon icon={s.icon} width={20} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right - CTA Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-span-7 flex items-center"
          >
            <div className="w-full rounded-2xl bg-bg-paper p-10 md:p-14 shadow-card text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-primary-alpha flex items-center justify-center">
                <Icon icon="solar:chat-round-dots-bold-duotone" width={32} className="text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-text-primary mb-3">
                Got a project idea?
              </h3>
              <p className="text-text-secondary mb-8 max-w-sm mx-auto">
                I&apos;m always open to new opportunities. Send me an email and let&apos;s discuss how we can work together.
              </p>
              <a
                href="mailto:zuldikaptr@gmail.com"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary hover:bg-primary-dark text-white font-semibold rounded-xl transition-all hover:shadow-lg hover:shadow-primary/25"
              >
                <Icon icon="solar:letter-bold" width={18} />
                Send Email
              </a>
              <p className="mt-4 text-xs text-text-disabled">
                or message me on{" "}
                <a href="https://wa.me/6285338232141" target="_blank" rel="noopener noreferrer"
                  className="text-primary hover:underline font-medium">
                  WhatsApp
                </a>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
