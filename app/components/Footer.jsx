"use client";

import { Icon } from "@iconify/react";

export default function Footer() {
  return (
    <footer className="border-t border-divider">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="text-sm text-text-disabled">
            © {new Date().getFullYear()} Zuldika Putra
          </span>
        </div>
        <p className="text-sm text-text-disabled flex items-center gap-1.5">
          using Next.js & Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
