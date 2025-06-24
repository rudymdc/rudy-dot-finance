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

  //Handles the opening and closing of our nav
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="sticky top-0 z-20 w-full bg-[var(--background)]">
      <div className="max-w-3xl mx-auto flex justify-between items-center border-b border-gray-200 dark:border-gray-700 py-4 px-6 xl:px-0 text-m">
        <Link href="/" className="font-semibold text-[var(--foreground)] inline md:hidden">
          <span className="text-base mr-2">📈</span>
          <span className="text-base">rudy.finance</span>
        </Link>
        <nav className="space-x-6 hidden md:block">
          <Link href="/guides" className="text-[var(--foreground)] hover:text-accent">Guides</Link>
          <Link href="/case-studies" className="text-[var(--foreground)] hover:text-accent">Case Studies</Link>
          <Link href="/projects" className="text-[var(--foreground)] hover:text-accent">Projects</Link>
          <Link href="/me" className="text-[var(--foreground)] hover:text-accent">About</Link>
        </nav>
        <div className="flex items-center space-x-4">
          <button onClick={handleClick} className="text-[var(--foreground)] hover:text-accent inline md:hidden">
            {isOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
          <button onClick={toggleTheme} className="text-indigo-500 dark:text-yellow-400 text-[var(--foreground)] hover:text-accent">
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <Link href="https://twitter.com/yourhandle" target="_blank" className="text-[var(--foreground)] hover:text-accent">
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
      {!isOpen ? <></> : 
      <div className="max-w-3xl mx-auto flex justify-between items-center py-4 px-6 xl:px-0 text-m bg-gray-50 dark:bg-gray-950">
          <nav className="block md:hidden">
            <p className='mb-2'><Link onClick={handleClick} href="/guides" className="text-[var(--foreground)] hover:text-accent">Guides</Link></p>
            <p className='mb-2'><Link onClick={handleClick} href="/case-studies" className="text-[var(--foreground)] hover:text-accent">Case Studies</Link></p>
            <p className='mb-2'><Link onClick={handleClick} href="/projects" className="text-[var(--foreground)] hover:text-accent">Projects</Link></p>
            <p className='mb-2'><Link onClick={handleClick} href="/me" className="text-[var(--foreground)] hover:text-accent">About</Link></p>
          </nav>
      </div>    
      }      
   </header>
  );
}