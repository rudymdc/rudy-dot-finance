// components/Sidebar.js
"use client";

import Link from "next/link";

export default function Sidebar() {
  return (
        <aside className="sidebar w-64 h-screen bg-[var(--background)] border-r border-gray-300 dark:border-gray-800 hidden md:flex flex-col">

          {/* Sticky Title */}
          <div className="sidebar-title sticky top-0 z-10 bg-[var(--background)] mx-6 py-4 border-b border-gray-300 dark:border-gray-800">
            <h1 className="flex font-semibold text-[var(--foreground)]">
              <Link href="/">
                <span className="text-base mr-2">📈</span>
                <span className="text-base">rudy.finance</span>
              </Link>
            </h1>
          </div>

          {/* Scrollable Content */}
          <div className="flex-1 overflow-y-auto scrollbar-hide">
            <div className="sidebar-container mb-18">

              {/* All your sidebar sections go here */}
              <div className="sidebar-section m-6 pb-6 border-b border-gray-300 dark:border-gray-800">
                <h2 className="font-semibold mb-2 text-[var(--foreground)]">About Me</h2>
                <div className="sidebar-content">
                  <p className="text-sm">
                    I&apos;m <Link href="/me" className="text-indigo-500 dark:text-indigo-400">Rudy</Link>, I build tools at the intersection of code and capital. This is my digital sandbox. 🏝️
                  </p>
                </div>
              </div>

              <div className="sidebar-section m-6 pb-6 border-b border-gray-300 dark:border-gray-800">
                <h2 className="font-semibold mb-2 text-[var(--foreground)]">Let&apos;s Connect</h2>
                <div className="sidebar-links">
                  <nav className="text-sm">
                    <Link href="" className="text-indigo-500 dark:text-indigo-400">Calendly</Link>
                    <Link href="https://www.linkedin.com/in/rudy-martin-del-campo/" target="_blank" className="text-indigo-500 dark:text-indigo-400">LinkedIn</Link>
                    <Link href="https://github.com/rudymdc" target="_blank" className="text-indigo-500 dark:text-indigo-400">Github</Link>
                  </nav>
                </div>
              </div>

              <div className="sidebar-section m-6 pb-6 border-b border-gray-300 dark:border-gray-800">
                <h2 className="font-semibold mb-2 text-[var(--foreground)]">Guides</h2>
                <div className="sidebar-menu">
                  <nav className="text-sm">
                    {/* <Link href="" className="text-gray-700 dark:text-gray-300 hover:bg-indigo-100 hover:text-indigo-900 hover:ring-indigo-200 dark:hover:bg-indigo-950 dark:hover:text-indigo-200 dark:hover:ring-indigo-900">AI for Finance</Link> */}
                    <Link href="/guides/findev-netsuite-1" className="text-gray-700 dark:text-gray-300 hover:bg-indigo-100 hover:text-indigo-900 hover:ring-indigo-200 dark:hover:bg-indigo-950 dark:hover:text-indigo-200 dark:hover:ring-indigo-900">FinDev for Netsuite: SQL</Link>
                    <Link href="/guides/findev-netsuite-1" className="text-gray-700 dark:text-gray-300 hover:bg-indigo-100 hover:text-indigo-900 hover:ring-indigo-200 dark:hover:bg-indigo-950 dark:hover:text-indigo-200 dark:hover:ring-indigo-900">FinDev for Netsuite: Python</Link>
                    <Link href="/" className="text-gray-700 dark:text-gray-300 hover:bg-indigo-100 hover:text-indigo-900 hover:ring-indigo-200 dark:hover:bg-indigo-950 dark:hover:text-indigo-200 dark:hover:ring-indigo-900">macOS Setup for FinDev</Link>
                    <Link href="/" className="text-gray-700 dark:text-gray-300 hover:bg-indigo-100 hover:text-indigo-900 hover:ring-indigo-200 dark:hover:bg-indigo-950 dark:hover:text-indigo-200 dark:hover:ring-indigo-900">Windows Setup for FinDev</Link>
                    {/* <Link href="" className="text-gray-700 dark:text-gray-300 hover:bg-indigo-100 hover:text-indigo-900 hover:ring-indigo-200 dark:hover:bg-indigo-950 dark:hover:text-indigo-200 dark:hover:ring-indigo-900">Python for Finance</Link> */}
                  </nav>
                </div>
              </div>

              <div className="sidebar-section m-6 pb-6 border-b border-gray-300 dark:border-gray-800">
                <h2 className="font-semibold mb-2 text-[var(--foreground)]">Case Studies</h2>
                <div className="sidebar-menu">
                  <nav className="text-sm">
                    <Link href="/" className="text-gray-700 dark:text-gray-300 hover:bg-indigo-100 hover:text-indigo-900 hover:ring-indigo-200 dark:hover:bg-indigo-950 dark:hover:text-indigo-200 dark:hover:ring-indigo-900">GTM & Growth Strategy</Link>
                    <Link href="/" className="text-gray-700 dark:text-gray-300 hover:bg-indigo-100 hover:text-indigo-900 hover:ring-indigo-200 dark:hover:bg-indigo-950 dark:hover:text-indigo-200 dark:hover:ring-indigo-900">Revenue Operations</Link>
                    <Link href="/" className="text-gray-700 dark:text-gray-300 hover:bg-indigo-100 hover:text-indigo-900 hover:ring-indigo-200 dark:hover:bg-indigo-950 dark:hover:text-indigo-200 dark:hover:ring-indigo-900">Product & Retention</Link>
                    <Link href="/" className="text-gray-700 dark:text-gray-300 hover:bg-indigo-100 hover:text-indigo-900 hover:ring-indigo-200 dark:hover:bg-indigo-950 dark:hover:text-indigo-200 dark:hover:ring-indigo-900">Data Engineering & KPIs</Link>
                    <Link href="/" className="text-gray-700 dark:text-gray-300 hover:bg-indigo-100 hover:text-indigo-900 hover:ring-indigo-200 dark:hover:bg-indigo-950 dark:hover:text-indigo-200 dark:hover:ring-indigo-900">Sales & Comp Planning</Link>
                    <Link href="/" className="text-gray-700 dark:text-gray-300 hover:bg-indigo-100 hover:text-indigo-900 hover:ring-indigo-200 dark:hover:bg-indigo-950 dark:hover:text-indigo-200 dark:hover:ring-indigo-900">G&A Budgeting</Link>
                  </nav>
                </div>
              </div>

              <div className="sidebar-section m-6 pb-6 border-b border-gray-300 dark:border-gray-800">
                <h2 className="font-semibold mb-2 text-[var(--foreground)]">Projects</h2>
                <div className="sidebar-menu">
                  <nav className="text-sm">
                    <Link href="/" className="text-gray-700 dark:text-gray-300 hover:bg-indigo-100 hover:text-indigo-900 hover:ring-indigo-200 dark:hover:bg-indigo-950 dark:hover:text-indigo-200 dark:hover:ring-indigo-900">LiquidLaunch Liquidity Sniper</Link>
                    <Link href="/" className="text-gray-700 dark:text-gray-300 hover:bg-indigo-100 hover:text-indigo-900 hover:ring-indigo-200 dark:hover:bg-indigo-950 dark:hover:text-indigo-200 dark:hover:ring-indigo-900">Telegram Chat Analytics</Link>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </aside>
    );
}