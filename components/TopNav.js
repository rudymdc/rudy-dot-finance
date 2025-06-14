// components/TopNav.js
"use client";

import Link from "next/link";
import useTheme from "@/lib/useTheme";
import { Moon, Sun, Github, Linkedin, Twitter } from "lucide-react";


export default function TopNav() {
  const { theme, toggleTheme } = useTheme();
  if (!theme) return null;

  return (
    <header className="sticky top-0 z-20 w-full bg-[var(--background)]">
      <div className="max-w-3xl mx-auto flex justify-between items-center border-b border-gray-200 dark:border-gray-700 py-4 px-6 xl:px-0 text-m">
        <nav className="space-x-6">
          <Link href="/guides" className="text-[var(--foreground)] hover:text-accent">Guides</Link>
          <Link href="/case-studies" className="text-[var(--foreground)] hover:text-accent">Case Studies</Link>
          <Link href="/projects" className="text-[var(--foreground)] hover:text-accent">Projects</Link>
          <Link href="/me" className="text-[var(--foreground)] hover:text-accent">About</Link>
        </nav>
        <div className="flex items-center space-x-4">
          <button onClick={toggleTheme} className="text-indigo-500 dark:text-yellow-400 text-[var(--foreground)] hover:text-accent">
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <Link href="https://github.com/rudy" className="text-[var(--foreground)] hover:text-accent">
            <Github size={16} />
          </Link>
          <Link href="https://linkedin.com/in/rudy-martin-del-campo" className="text-[var(--foreground)] hover:text-accent">
            <Linkedin size={16} />
          </Link>
          <Link href="https://twitter.com/yourhandle" className="text-[var(--foreground)] hover:text-accent">
            <Twitter size={16} />
          </Link>
        </div>
      </div>
    </header>
  );
}