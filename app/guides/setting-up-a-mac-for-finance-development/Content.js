// app/guides/setting-up-a-mac-for-finance-development/Content.js
"use client";

import Image from "next/image";
import Link from "next/link";

export default function Content() {
  return (
    <article className="prose prose-indigo dark:prose-invert max-w-none">
      <h1 className="text-4xl font-bold mb-2 text-[var(--foreground)]">How to Set up a Mac for Finance Development</h1>
      <h2 className="text-2xl mb-8 text-indigo-500">Get Your Mac Ready for Data + Finance Workflows</h2>
      <div className="flex items-center gap-4 mb-8">
        <Image width="450" height="450" className="w-12 h-12 rounded-full ring-2 ring-zinc-300 dark:ring-zinc-500" src="/images/profile-2.jpeg" alt="" />
        <div className="font-medium dark:text-white">
            <div>Rudy Martin Del Campo</div>
            <div className="text-sm text-zinc-500 dark:text-zinc-400">January 8, 2025</div>
        </div>
      </div>

      <blockquote className="border-l-4 border-indigo-500 px-6 py-2 mb-12">Whether you&apos;re just getting started or rebuilding a clean machine, this guide walks through the tools and packages you&apos;ll want on your Mac to support SQL, Python, and data analysis workflows as a finance professional.</blockquote>
      {/* <p className="border-b-1 border-zinc-200 dark:border-zinc-700 mb-12"></p> */}

      {/* ─────────────────────────────────── */}
      <h2 className="text-3xl font-bold mb-4 text-[var(--foreground)]">Command Line Tooling (via Terminal)</h2>
      <p className="text-md mb-6">These are the building blocks for everything else. Open the Terminal app and start with:</p>

      <h3 className="text-1xl font-semibold mb-2 text-[var(--foreground)]">1. Install Homebrew</h3>
      <p className="text-md mb-2">Homebrew is the package manager that makes it easy to install everything else.</p>
      <div className="block shadow-sm bg-zinc-800 border border-zinc-600 rounded-lg mb-6">
        <div className="bg-zinc-700 rounded-t-lg border-b border-zinc-600 pt-3 pb-2 px-4">
          <span className="text-sm font-medium text-zinc-50">
            command line
          </span>
        </div>
        <div className="text-zinc-50">
          <pre className="p-4 overflow-y-auto scroll-color">
            <p>/bin/bash -c <span className="text-lime-300">&quot;</span><span className="text-rose-400">$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)</span><span className="text-lime-300">&quot;</span></p>
          </pre>
        </div>
      </div>

      <p className="text-md mb-2">Test with:</p>
      <div className="block shadow-sm bg-zinc-800 border border-zinc-600 rounded-lg mb-12">
        <div className="bg-zinc-700 rounded-t-lg border-b border-zinc-600 pt-3 pb-2 px-4">
          <span className="text-sm font-medium text-zinc-50">
            command line
          </span>
        </div>
        <div className="text-zinc-50">
          <pre className="p-4 overflow-y-auto scroll-color">
            <p>brew --version</p>
          </pre>
        </div>
      </div>


      <h3 className="text-1xl font-semibold mb-2 text-[var(--foreground)]">2. Install Git (via Homebrew)</h3>
      <p className="text-md mb-2">Git is a version control system — it lets you track changes, collaborate, and manage versions of your code and analysis scripts.</p>
      <div className="block shadow-sm bg-zinc-800 border border-zinc-600 rounded-lg mb-6">
        <div className="bg-zinc-700 rounded-t-lg border-b border-zinc-600 pt-3 pb-2 px-4">
          <span className="text-sm font-medium text-zinc-50">
            command line
          </span>
        </div>
        <div className="text-zinc-50">
          <pre className="p-4 overflow-y-auto scroll-color">
            <p>brew install git</p>
          </pre>
        </div>
      </div>

      <p className="text-md mb-2">Check version:</p>
      <div className="block shadow-sm bg-zinc-800 border border-zinc-600 rounded-lg mb-12">
        <div className="bg-zinc-700 rounded-t-lg border-b border-zinc-600 pt-3 pb-2 px-4">
          <span className="text-sm font-medium text-zinc-50">
            command line
          </span>
        </div>
        <div className="text-zinc-50">
          <pre className="p-4 overflow-y-auto scroll-color">
            <p>git --version</p>
          </pre>
        </div>
      </div>

      <h3 className="text-1xl font-semibold mb-2 text-[var(--foreground)]">3. Install Python 3 (Latest)</h3>
      <p className="text-md mb-2">Python is the core language for scripting, data analysis, and automation. We&apos;ll use it throughout the FinDev guides.</p>
      <div className="block shadow-sm bg-zinc-800 border border-zinc-600 rounded-lg mb-6">
        <div className="bg-zinc-700 rounded-t-lg border-b border-zinc-600 pt-3 pb-2 px-4">
          <span className="text-sm font-medium text-zinc-50">
            command line
          </span>
        </div>
        <div className="text-zinc-50">
          <pre className="p-4 overflow-y-auto scroll-color">
            <p>brew install python</p>
          </pre>
        </div>
      </div>

      <p className="text-md mb-2">Confirm install:</p>
      <div className="block shadow-sm bg-zinc-800 border border-zinc-600 rounded-lg mb-12">
        <div className="bg-zinc-700 rounded-t-lg border-b border-zinc-600 pt-3 pb-2 px-4">
          <span className="text-sm font-medium text-zinc-50">
            command line
          </span>
        </div>
        <div className="text-zinc-50">
          <pre className="p-4 overflow-y-auto scroll-color">
            <p>python3 --version</p>
          </pre>
        </div>
      </div>

      <h3 className="text-1xl font-semibold mb-2 text-[var(--foreground)]">4. Install Node.js</h3>
      <p className="text-md mb-2">Node.js lets you run JavaScript from the command line. It’s useful for front-end tooling and advanced scripting if you expand into web or CLI projects.</p>
      <div className="block shadow-sm bg-zinc-800 border border-zinc-600 rounded-lg mb-6">
        <div className="bg-zinc-700 rounded-t-lg border-b border-zinc-600 pt-3 pb-2 px-4">
          <span className="text-sm font-medium text-zinc-50">
            command line
          </span>
        </div>
        <div className="text-zinc-50">
          <pre className="p-4 overflow-y-auto scroll-color">
            <p>brew install node</p>
          </pre>
        </div>
      </div>

      <p className="text-md mb-2">Test:</p>
      <div className="block shadow-sm bg-zinc-800 border border-zinc-600 rounded-lg mb-12">
        <div className="bg-zinc-700 rounded-t-lg border-b border-zinc-600 pt-3 pb-2 px-4">
          <span className="text-sm font-medium text-zinc-50">
            command line
          </span>
        </div>
        <div className="text-zinc-50">
          <pre className="p-4 overflow-y-auto scroll-color">
            <p>node -v</p>
          </pre>
        </div>
      </div>

      <h3 className="text-1xl font-semibold mb-2 text-[var(--foreground)]">5. Install wget</h3>
      <p className="text-md mb-2">wget is a command-line tool for downloading files from the web — useful for pulling CSVs, datasets, and scripts directly into your project folders.</p>
      <div className="block shadow-sm bg-zinc-800 border border-zinc-600 rounded-lg mb-24">
        <div className="bg-zinc-700 rounded-t-lg border-b border-zinc-600 pt-3 pb-2 px-4">
          <span className="text-sm font-medium text-zinc-50">
            command line
          </span>
        </div>
        <div className="text-zinc-50">
          <pre className="p-4 overflow-y-auto scroll-color">
            <p>brew install wget</p>
          </pre>
        </div>
      </div>

      {/* ─────────────────────────────────── */}
      <h2 className="text-3xl font-bold mb-4 text-[var(--foreground)]">Desktop Apps (Recommended Installs)</h2>
      <p className="text-md mb-6">These tools make it easier to work with code, databases, and the web.</p>

      <h3 className="text-1xl font-semibold mb-2 text-[var(--foreground)]">Developer & Data Tools</h3>
      <ol className="list-disc list-inside mb-6 overflow-y-auto">
        <li><Link className="text-indigo-500 dark:text-indigo-400 hover:underline font-semibold" href="https://code.visualstudio.com/" target="_blank">Visual Studio Code</Link> – lightweight, extensible code editor</li>
        <li><Link className="text-indigo-500 dark:text-indigo-400 hover:underline font-semibold" href="https://dbeaver.io/download/" target="_blank">DBeaver CE</Link> – SQL client for working with NetSuite and other DBs</li>
        <li><Link className="text-indigo-500 dark:text-indigo-400 hover:underline font-semibold" href="https://www.postman.com/downloads/" target="_blank">Postman</Link> – test and explore APIs (great for NetSuite REST)</li>
        <li><Link className="text-indigo-500 dark:text-indigo-400 hover:underline font-semibold" href="https://iterm2.com/" target="_blank">iTerm2</Link> – enhanced Terminal app</li>
      </ol>

      <h3 className="text-1xl font-semibold mb-2 text-[var(--foreground)]">Browsers & Extensions</h3>
      <ol className="list-disc list-inside mb-24 overflow-y-auto">
        <li><Link className="text-indigo-500 dark:text-indigo-400 hover:underline font-semibold" href="https://www.google.com/chrome/" target="_blank">Google Chrome</Link> – great for DevTools and extensions</li>
        <li><Link className="text-indigo-500 dark:text-indigo-400 hover:underline font-semibold" href="https://www.mozilla.org/en-US/products/" target="_blank">Firefox</Link> – alternative browser with powerful debugging</li>
        <li>Recommended Extensions:</li>
        <ol className="list-disc list-inside pl-6">
          <li>JSON Viewer (for pretty-printing API responses)</li>
          <li>uBlock Origin (to reduce distraction)</li>
        </ol>      
      </ol>
      
      {/* ─────────────────────────────────── */}
      <h2 className="text-3xl font-bold mb-4 text-[var(--foreground)]">Python Ecosystem Setup</h2>

      <p className="text-md mb-2">Once Python is installed, install some essential libraries for finance/data analysis:</p>
      <div className="block shadow-sm bg-zinc-800 border border-zinc-600 rounded-lg mb-6">
        <div className="bg-zinc-700 rounded-t-lg border-b border-zinc-600 pt-3 pb-2 px-4">
          <span className="text-sm font-medium text-zinc-50">
            command line
          </span>
        </div>
        <div className="text-zinc-50">
          <pre className="p-4 overflow-y-auto scroll-color">
            <p>pip3 install pandas matplotlib openpyxl requests jupyterlab</p>
          </pre>
        </div>
      </div>

      <p className="text-md mb-2">Optional for working with NetSuite API:</p>
      <div className="block shadow-sm bg-zinc-800 border border-zinc-600 rounded-lg mb-6">
        <div className="bg-zinc-700 rounded-t-lg border-b border-zinc-600 pt-3 pb-2 px-4">
          <span className="text-sm font-medium text-zinc-50">
            command line
          </span>
        </div>
        <div className="text-zinc-50">
          <pre className="p-4 overflow-y-auto scroll-color">
            <p>pip3 install netsuite-rest</p>
          </pre>
        </div>
      </div>

      <p className="text-md mb-2">To open Jupyter Lab (browser-based notebooks):</p>
      <div className="block shadow-sm bg-zinc-800 border border-zinc-600 rounded-lg mb-24">
        <div className="bg-zinc-700 rounded-t-lg border-b border-zinc-600 pt-3 pb-2 px-4">
          <span className="text-sm font-medium text-zinc-50">
            command line
          </span>
        </div>
        <div className="text-zinc-50">
          <pre className="p-4 overflow-y-auto scroll-color">
            <p>jupyter lab</p>
          </pre>
        </div>
      </div>

      {/* ─────────────────────────────────── */}
      <h2 className="text-3xl font-bold mb-4 text-[var(--foreground)]">Organize Your Workspace</h2>

      <p className="text-md mb-2">Create a <code className="bg-zinc-100 dark:bg-zinc-700 px-1 rounded-xs">~/projects/</code> folder to store all your FinDev work:</p>
      <div className="block shadow-sm bg-zinc-800 border border-zinc-600 rounded-lg mb-6">
        <div className="bg-zinc-700 rounded-t-lg border-b border-zinc-600 pt-3 pb-2 px-4">
          <span className="text-sm font-medium text-zinc-50">
            command line
          </span>
        </div>
        <div className="text-zinc-50">
          <pre className="p-4 overflow-y-auto scroll-color">
            <p>mkdir ~/projects</p>
            <p>cd ~/projects</p>
          </pre>
        </div>
      </div>

      <p className="text-md mb-2">Configure Git (replace with your info):</p>
      <div className="block shadow-sm bg-zinc-800 border border-zinc-600 rounded-lg mb-6">
        <div className="bg-zinc-700 rounded-t-lg border-b border-zinc-600 pt-3 pb-2 px-4">
          <span className="text-sm font-medium text-zinc-50">
            command line
          </span>
        </div>
        <div className="text-zinc-50">
          <pre className="p-4 overflow-y-auto scroll-color">
            <p>git config --global user.name <span className="text-lime-300">&quot;Your Name&quot;</span></p>
            <p>git config --global user.email <span className="text-lime-300">&quot;you@example.com&quot;</span></p>
          </pre>
        </div>
      </div>

      <p className="text-md mb-2">Install VS Code extensions:</p>
      <ol className="list-disc list-inside mb-24 overflow-y-auto">
        <li>Python (Microsoft)</li>
        <li>Jupyter</li>
        <li>GitLens</li>
        <li>SQLTools</li>
      </ol>

      {/* ─────────────────────────────────── */}
      <h2 className="text-3xl font-bold mb-4 text-[var(--foreground)]">🎉 You&apos;re Ready</h2>
      <p className="text-md mb-4">You now have a clean, modern FinDev setup on macOS ready to:</p>
      <ol className="list-disc list-inside mb-6 overflow-y-auto">
        <li>Run SQL queries with DBeaver</li>
        <li>Build analysis scripts in Python</li>
        <li>Visualize data in notebooks or Excel</li>
        <li>Connect to NetSuite via REST or JDBC</li>
      </ol>
      <p className="text-md mb-12"><span className="font-bold">Next up:</span> let&apos;s jump into some code — try <Link className="text-indigo-500 hover:underline" href="/guides/findev-netsuite-1">FinDev for Netsuite: SQL</Link>.</p>
    </article>
  );
}


