// components/Footer.js
"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-gray-200 dark:border-gray-800 py-6 text-sm text-gray-500 dark:text-gray-400">
      <div className="text-left max-w-3xl mx-auto px-6 xl:px-0">
        <div className="space-x-4 mb-3">
          <Link
              href="mailto:hello@rudy.finance"
              className="text-indigo-500 hover:underline dark:text-indigo-400"
              target="_blank" rel="noopener noreferrer"
            >
              Email
            </Link>
            <Link
              href="https://calendly.com/hello-rudy/30min"
              className="text-indigo-500 hover:underline dark:text-indigo-400"
              target="_blank" rel="noopener noreferrer"
            >
              Calendly
            </Link>
            <Link
              href="https://linkedin.com/in/rudy-martin-del-campo"
              className="text-indigo-500 hover:underline dark:text-indigo-400"
              target="_blank" rel="noopener noreferrer"
            >
              LinkedIn
            </Link>
            <Link
              href="https://github.com/rudymdc"
              className="text-indigo-500 hover:underline dark:text-indigo-400"
              target="_blank" rel="noopener noreferrer"
            >
              Github
            </Link>
        </div>
        <p className="mb-3">
          Built with&nbsp;
          <Link
            href="https://nextjs.org"
            className="text-indigo-500 hover:underline dark:text-indigo-400"
            target="_blank" rel="noopener noreferrer"
          >
            Next.js
          </Link>
          &nbsp;and&nbsp;
          <Link
            href="https://tailwindcss.com"
            className="text-indigo-500 hover:underline dark:text-indigo-400"
            target="_blank" rel="noopener noreferrer"
          >
            Tailwind CSS
          </Link>
          .
        </p>
        <p>
          Made with ❤️ by Rudy Martin Del Campo
        </p>
      </div>
    </footer>
  );
}