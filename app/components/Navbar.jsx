"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";
import { useTheme } from "./ThemeProvider";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "About", href: "/#about" },
  { name: "Skills", href: "/#skills" },
  { name: "Projects", href: "/#projects" },
  { name: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const themeCtx = useTheme();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const currentTheme = themeCtx?.theme || "dark";
  const toggle = themeCtx?.toggleTheme || (() => {
    const html = document.documentElement;
    const next = html.getAttribute("data-theme") === "dark" ? "light" : "dark";
    html.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
    window.location.reload();
  });

  const isHome = pathname === "/";

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled || !isHome
            ? "bg-bg-default/80 backdrop-blur-xl shadow-card"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 text-text-primary font-bold text-lg"
          >
            <span className="hidden sm:inline">Zuldika Putra</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`px-4 py-2 text-sm font-medium rounded-lg hover:bg-bg-neutral transition-all ${
                  pathname === link.href ? "text-primary bg-primary-alpha" : "text-text-secondary hover:text-text-primary"
                }`}
              >
                {link.name}
              </Link>
            ))}

            {/* Theme toggle */}
            <button
              onClick={toggle}
              className="ml-2 p-2.5 rounded-lg text-text-secondary hover:text-text-primary hover:bg-bg-neutral transition-all"
              aria-label="Toggle theme"
            >
              <Icon
                icon={currentTheme === "dark" ? "solar:sun-bold-duotone" : "solar:moon-bold-duotone"}
                width={20}
              />
            </button>
          </div>

          {/* Mobile */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={toggle}
              className="p-2 rounded-lg text-text-secondary hover:bg-bg-neutral"
              aria-label="Toggle theme"
            >
              <Icon
                icon={currentTheme === "dark" ? "solar:sun-bold-duotone" : "solar:moon-bold-duotone"}
                width={20}
              />
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 rounded-lg text-text-primary hover:bg-bg-neutral"
              aria-label="Menu"
            >
              <Icon
                icon={mobileOpen ? "solar:close-circle-bold-duotone" : "solar:hamburger-menu-bold-duotone"}
                width={22}
              />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed inset-0 z-40 bg-bg-default/95 backdrop-blur-xl flex flex-col items-center justify-center gap-4 md:hidden"
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                onClick={() => setMobileOpen(false)}
              >
                <Link
                  href={link.href}
                  className="text-xl font-medium text-text-secondary hover:text-primary transition-colors px-6 py-3"
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
