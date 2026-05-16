"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

import logoLight from "@/images/1.png";
import logoDark from "@/images/2.png";

export default function Header() {
  const [isDark, setIsDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    setIsDark(mediaQuery.matches);

    const handleChange = (event: MediaQueryListEvent) => {
      setIsDark(event.matches);
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  return (
    <header
      className="
        sticky top-0 z-50 w-full
        border-b border-slate-200
        bg-white/80 backdrop-blur-md
        transition-colors duration-300
        dark:border-slate-800 dark:bg-slate-950/80
      "
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        
        {/* Logo */}
        <Link href="/" className="shrink-0">
          <Image
            src={isDark ? logoDark : logoLight}
            alt="CHI Laboratory Logo"
            priority
            className="h-10 w-auto object-contain sm:h-12"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 text-sm font-semibold text-slate-700 dark:text-slate-200 md:flex">
          <Link href="/about" className="transition hover:opacity-70">
            About
          </Link>

          <Link href="/collaborators" className="transition hover:opacity-70">
            Collaborators
          </Link>

          <Link href="/outputs" className="transition hover:opacity-70">
            Outputs
          </Link>

          <Link href="/join" className="transition hover:opacity-70">
            Join
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="
            rounded-xl border border-slate-300
            p-2 text-slate-700 transition
            hover:bg-slate-100
            dark:border-slate-700 dark:text-slate-200
            dark:hover:bg-slate-800
            md:hidden
          "
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div
          className="
            border-t border-slate-200
            bg-white/95 backdrop-blur-xl
            dark:border-slate-800 dark:bg-slate-950/95
            md:hidden
          "
        >
          <nav className="flex flex-col px-4 py-4 text-sm font-semibold text-slate-700 dark:text-slate-200">
            
            <Link
              href="/about"
              className="rounded-xl px-4 py-3 transition hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              About
            </Link>

            <Link
              href="/collaborators"
              className="rounded-xl px-4 py-3 transition hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              Collaborators
            </Link>

            <Link
              href="/outputs"
              className="rounded-xl px-4 py-3 transition hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              Outputs
            </Link>

            <Link
              href="/join"
              className="rounded-xl px-4 py-3 transition hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              Join
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}