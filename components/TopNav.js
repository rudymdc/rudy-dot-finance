// components/TopNav.js
"use client";
import React, { useState } from 'react';
import Link from "next/link";
import useTheme from "@/lib/useTheme";
import { Moon, Sun, Github, Linkedin, Calendar, Menu, X } from "lucide-react";

export default function TopNav() {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  if (!theme) return null;

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="w-full bg-[var(--background)] z-30 h-[60px]">
      <div className="flex flex-row h-[60px]">
        
        {/* Sidebar-aligned logo */}
        <div className="logo w-64 bg-[var(--background)] md:border-r md:border-gray-300 md:dark:border-gray-800 h-[60px]">
          <div className="md:mx-6 md:px-0 px-6 py-4 border-b border-gray-300 dark:border-gray-800 h-[60px]">
            <Link href="/" className="font-semibold text-[var(--foreground)] flex items-center">
              <span className="text-base mr-2">📈</span>
              <span className="text-base">rudy.finance</span>
            </Link>
          </div>
        </div>

        {/* Main nav aligned with content */}
        <div className="flex-1 flex h-[60px] justify-end md:justify-between items-center px-6 xl:px-0 max-w-3xl w-full mx-auto py-4 border-b border-gray-300 dark:border-gray-800">
          <nav className="space-x-6 hidden md:block">
            <Link href="/guides" className="text-[var(--foreground)] hover:text-accent">Guides</Link>
            <Link href="/projects" className="text-[var(--foreground)] hover:text-accent">Projects</Link>
            <Link href="/me" className="text-[var(--foreground)] hover:text-accent">About</Link>
          </nav>
          <div className="flex items-center space-x-4">
            <button onClick={toggleTheme} className="text-indigo-500 dark:text-yellow-400 text-[var(--foreground)] hover:text-accent">
              {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            <Link href="https://calendly.com/hello-rudy/30min" target="_blank" className="text-[var(--foreground)] hover:text-accent">
              <Calendar size={16} />
            </Link>
            <Link href="https://github.com/rudymdc" target="_blank" className="text-[var(--foreground)] hover:text-accent">
              <Github size={16} />
            </Link>
            <Link href="https://linkedin.com/in/rudy-martin-del-campo" target="_blank" className="text-[var(--foreground)] hover:text-accent">
              <Linkedin size={16} />
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile nav menu */}
      {isOpen && (
        <div className="block md:hidden px-6 pt-2 pb-4 bg-gray-50 dark:bg-gray-950">
          <nav>
            <p className="mb-2"><Link onClick={handleClick} href="/guides" className="text-[var(--foreground)] hover:text-accent">Guides</Link></p>
            <p className="mb-2"><Link onClick={handleClick} href="/projects" className="text-[var(--foreground)] hover:text-accent">Projects</Link></p>
            <p className="mb-2"><Link onClick={handleClick} href="/me" className="text-[var(--foreground)] hover:text-accent">About</Link></p>
          </nav>
        </div>
      )}
    </header>  );
}