// components/Footer.js
"use client";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-gray-200 dark:border-gray-800 py-6 text-sm text-gray-500 dark:text-gray-400">
      <div className="text-left max-w-3xl mx-auto">
        <div className="space-x-4 mb-3">
          <a
              href="https://nextjs.org"
              className="text-indigo-500 hover:underline dark:text-indigo-400"
              target="_blank" rel="noopener noreferrer"
            >
              Email
            </a>
            <a
              href="https://nextjs.org"
              className="text-indigo-500 hover:underline dark:text-indigo-400"
              target="_blank" rel="noopener noreferrer"
            >
              Resume
            </a>
            <a
              href="https://nextjs.org"
              className="text-indigo-500 hover:underline dark:text-indigo-400"
              target="_blank" rel="noopener noreferrer"
            >
              Let&apos;s Chat
            </a>
            <a
              href="https://nextjs.org"
              className="text-indigo-500 hover:underline dark:text-indigo-400"
              target="_blank" rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://nextjs.org"
              className="text-indigo-500 hover:underline dark:text-indigo-400"
              target="_blank" rel="noopener noreferrer"
            >
              Github
            </a>
        </div>
        <p className="mb-3">
          Built with&nbsp;
          <a
            href="https://nextjs.org"
            className="text-indigo-500 hover:underline dark:text-indigo-400"
            target="_blank" rel="noopener noreferrer"
          >
            Next.js
          </a>
          &nbsp;and&nbsp;
          <a
            href="https://tailwindcss.com"
            className="text-indigo-500 hover:underline dark:text-indigo-400"
            target="_blank" rel="noopener noreferrer"
          >
            Tailwind CSS
          </a>
          .
        </p>
        <p>
          Made with ❤️ by Rudy Martin Del Campo
        </p>
      </div>
    </footer>
  );
}