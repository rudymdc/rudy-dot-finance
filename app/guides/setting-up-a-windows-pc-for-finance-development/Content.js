// app/guides/setting-up-a-windows-pc-for-finance-development/Content.js
"use client";

import Image from "next/image";
import Link from "next/link";

export default function Content() {
  return (
    <article className="prose prose-indigo dark:prose-invert max-w-none">
      <h1 className="text-4xl font-bold mb-2 text-[var(--foreground)]">How to Set up a Windows PC for Finance Development</h1>
      <h2 className="text-2xl mb-8 text-indigo-500">Get Your Windows Machine Ready for Data + Finance Workflows</h2>
      <div className="flex items-center gap-4 mb-8">
        <Image width="450" height="450" className="w-12 h-12 rounded-full ring-2 ring-zinc-300 dark:ring-zinc-500" src="/images/profile.jpeg" alt="" />
        <div className="font-medium dark:text-white">
            <div>Rudy Martin Del Campo</div>
            <div className="text-sm text-zinc-500 dark:text-zinc-400">January 10, 2025</div>
        </div>
      </div>

      <blockquote className="border-l-4 border-indigo-500 px-6 py-2 mb-8">Whether you&apos;re just getting started or refreshing your setup, this guide walks through the tools and packages you&apos;ll want on your Windows machine to support SQL, Python, and data analysis workflows as a finance professional.</blockquote>
      <p className="border-b-1 border-zinc-200 dark:border-zinc-700 mb-12"></p>

      {/* ─────────────────────────────────── */}
      <h2 className="text-3xl font-bold mb-4 text-[var(--foreground)]">🧰 System Tools & Package Managers</h2>
      <p className="text-md mb-6">Start by installing the tools needed to manage and run your data projects.</p>

      <h3 className="text-1xl font-semibold mb-2 text-[var(--foreground)]">1. Install Windows Terminal (Optional but Recommended)</h3>
      <p className="text-md mb-2">A modern terminal app for running PowerShell, WSL, and more.</p>
      <ol className="list-disc list-inside mb-6 overflow-y-auto">
        <li>Get from Microsoft Store: <Link className="text-indigo-500 dark:text-indigo-400 hover:underline" href="https://learn.microsoft.com/en-us/windows/terminal/" target="_blank">Windows Terminal</Link></li>
      </ol>

      <h3 className="text-1xl font-semibold mb-2 text-[var(--foreground)]">2. Install Git for Windows</h3>
      <p className="text-md mb-2">Git is a version control system — it lets you track changes, collaborate, and manage versions of your code and analysis scripts.</p>
      <ol className="list-disc list-inside mb-6 overflow-y-auto">
        <li>Download from: <Link className="text-indigo-500 dark:text-indigo-400 hover:underline" href="https://git-scm.com/download/win" target="_blank">https://git-scm.com/download/win</Link></li>
        <li>During install, enable &quot;Git from the command line and also from 3rd-party software&quot;</li>
      </ol>

      <h3 className="text-1xl font-semibold mb-2 text-[var(--foreground)]">3. Install Python 3</h3>
      <p className="text-md mb-2">Python is the core language for scripting, data analysis, and automation. We&apos;ll use it throughout the FinDev guides.</p>
      <ol className="list-disc list-inside mb-6 overflow-y-auto">
        <li>Download from: <Link className="text-indigo-500 dark:text-indigo-400 hover:underline" href="https://www.python.org/downloads/windows/" target="_blank">https://www.python.org/downloads/windows/</Link></li>
        <li>Make sure to check <span className="font-semibold">&quot;Add Python to PATH&quot;</span> during installation</li>
      </ol>
      
      <h3 className="text-1xl font-semibold mb-2 text-[var(--foreground)]">4. Install Node.js (Optional for future web tools)</h3>
      <p className="text-md mb-2">Node.js lets you run JavaScript from the command line. It’s useful for front-end tooling and advanced scripting if you expand into web or CLI projects.</p>
      <ol className="list-disc list-inside mb-6 overflow-y-auto">
        <li>Download from: <Link className="text-indigo-500 dark:text-indigo-400 hover:underline" href="https://nodejs.org" target="_blank">https://nodejs.org</Link></li>
        <li>Choose LTS version</li>
      </ol>

      <h3 className="text-1xl font-semibold mb-2 text-[var(--foreground)]">5. Install Chocolatey (Optional Package Manager)</h3>
      <p className="text-md mb-2">A handy package manager for Windows to install other tools easily.</p>
      <ol className="list-disc list-inside mb-6 overflow-y-auto">
        <li>Documentation and installation guide: <Link className="text-indigo-500 dark:text-indigo-400 hover:underline" href="https://chocolatey.org/install" target="_blank">https://chocolatey.org/install</Link></li>
      </ol>
      <div className="block shadow-sm bg-zinc-800 border border-zinc-600 rounded-lg mb-6">
        <div className="bg-zinc-700 rounded-t-lg border-b border-zinc-600 pt-3 pb-2 px-4">
          <span className="text-sm font-medium text-zinc-50">
            command line
          </span>
        </div>
        <div className="text-zinc-50">
          <pre className="p-4 overflow-y-auto scroll-color">
            <p>Set-ExecutionPolicy Bypass <span className="text-cyan-400">-Scope</span> <span className="text-purple-300">Process</span> <span className="text-cyan-400">-Force</span>; \</p>
            <p>[<span className="text-amber-400">System.Net.ServicePointManager</span>]::SecurityProtocol = [<span className="text-amber-400">System.Net.ServicePointManager</span>]::SecurityProtocol <span className="text-cyan-400">-bor</span> <span className="text-rose-400">3072</span>; \</p>
            <p>iwr https://community.chocolatey.org/install.ps1 <span className="text-cyan-400">-UseBasicParsing</span> | iex</p>
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
            <p>choco --version</p>
          </pre>
        </div>
      </div>

      <p className="border-b-1 border-zinc-200 dark:border-zinc-700 mb-12"></p>

      {/* ─────────────────────────────────── */}
      <h2 className="text-3xl font-bold mb-4 text-[var(--foreground)]">💻 Desktop Applications</h2>
      <p className="text-md mb-6">These tools make it easier to work with code, databases, and the web.</p>

      <h3 className="text-1xl font-semibold mb-2 text-[var(--foreground)]">Developer & Data Tools</h3>
      <ol className="list-disc list-inside mb-6 overflow-y-auto">
        <li><Link className="text-indigo-500 dark:text-indigo-400 hover:underline font-semibold" href="https://code.visualstudio.com/" target="_blank">Visual Studio Code</Link> – lightweight, extensible code editor</li>
        <li><Link className="text-indigo-500 dark:text-indigo-400 hover:underline font-semibold" href="https://dbeaver.io/download/" target="_blank">DBeaver CE</Link> – SQL client for working with NetSuite and other DBs</li>
        <li><Link className="text-indigo-500 dark:text-indigo-400 hover:underline font-semibold" href="https://www.postman.com/downloads/" target="_blank">Postman</Link> – test and explore APIs (great for NetSuite REST)</li>
        <li><Link className="text-indigo-500 dark:text-indigo-400 hover:underline font-semibold" href="https://www.microsoft.com/en-us/power-platform/products/power-bi/desktop" target="_blank">Power BI Desktop</Link> – If you&apos;re interested in building internal dashboards</li>
      </ol>

      <h3 className="text-1xl font-semibold mb-2 text-[var(--foreground)]">Browsers & Extensions</h3>
      <ol className="list-disc list-inside mb-12 overflow-y-auto">
        <li><Link className="text-indigo-500 dark:text-indigo-400 hover:underline font-semibold" href="https://www.google.com/chrome/" target="_blank">Google Chrome</Link> – great for DevTools and extensions</li>
        <li><Link className="text-indigo-500 dark:text-indigo-400 hover:underline font-semibold" href="https://www.mozilla.org/en-US/products/" target="_blank">Firefox</Link> – alternative browser with powerful debugging</li>
        <li>Recommended Extensions:</li>
        <ol className="list-disc list-inside pl-6">
          <li>JSON Viewer (for pretty-printing API responses)</li>
          <li>uBlock Origin (to reduce distraction)</li>
        </ol>      
      </ol>
      
      <p className="border-b-1 border-zinc-200 dark:border-zinc-700 mb-12"></p>

      {/* ─────────────────────────────────── */}
      <h2 className="text-3xl font-bold mb-4 text-[var(--foreground)]">📦 Python Environment Setup</h2>

      <p className="text-md mb-2">Open PowerShell or Windows Terminal and install packages:</p>
      <div className="block shadow-sm bg-zinc-800 border border-zinc-600 rounded-lg mb-6">
        <div className="bg-zinc-700 rounded-t-lg border-b border-zinc-600 pt-3 pb-2 px-4">
          <span className="text-sm font-medium text-zinc-50">
            command line
          </span>
        </div>
        <div className="text-zinc-50">
          <pre className="p-4 overflow-y-auto scroll-color">
            <p>pip install pandas matplotlib openpyxl requests jupyterlab</p>
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
            <p>pip install netsuite-rest</p>
          </pre>
        </div>
      </div>

      <p className="text-md mb-2">To open Jupyter Lab (browser-based notebooks):</p>
      <div className="block shadow-sm bg-zinc-800 border border-zinc-600 rounded-lg mb-12">
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

      <p className="border-b-1 border-zinc-200 dark:border-zinc-700 mb-12"></p>

      {/* ─────────────────────────────────── */}
      <h2 className="text-3xl font-bold mb-4 text-[var(--foreground)]">🗂️ Organize Your Workspace</h2>

      <p className="text-md mb-2">Create a project folder for your analysis work (replace with your directory path):</p>
      <div className="block shadow-sm bg-zinc-800 border border-zinc-600 rounded-lg mb-6">
        <div className="bg-zinc-700 rounded-t-lg border-b border-zinc-600 pt-3 pb-2 px-4">
          <span className="text-sm font-medium text-zinc-50">
            command line
          </span>
        </div>
        <div className="text-zinc-50">
          <pre className="p-4 overflow-y-auto scroll-color">
            <p>mkdir <span className="text-lime-300">&quot;C:\Users\YourName\Documents\projects&quot;</span></p>
            <p>cd <span className="text-lime-300">&quot;C:\Users\YourName\Documents\projects&quot;</span></p>
          </pre>
        </div>
      </div>

      <p className="text-md mb-2">Set up Git for version control (replace with your info):</p>
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
      <ol className="list-disc list-inside mb-12 overflow-y-auto">
        <li>Python</li>
        <li>Jupyter</li>
        <li>GitLens</li>
        <li>SQLTools</li>
      </ol>

      <p className="border-b-1 border-zinc-200 dark:border-zinc-700 mb-12"></p>


      {/* ─────────────────────────────────── */}
      <h2 className="text-3xl font-bold mb-4 text-[var(--foreground)]">✅ Test Your Setup</h2>
      <table className="w-full mb-12 text-sm text-left rtl:text-right text-zinc-500 dark:text-zinc-400">
        <thead className="text-xs text-zinc-700 uppercase bg-indigo-50 dark:bg-indigo-900 dark:text-zinc-400">
          <tr>
            <th scope="col" className="px-6 py-3">Tool</th>
            <th scope="col" className="px-6 py-3">Command</th>
            <th scope="col" className="px-6 py-3">Expected Output</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b dark:bg-indigo-950 dark:border-indigo-700 border-indigo-200">
            <td scope="row" className="px-6 py-4 font-medium text-zinc-900 whitespace-nowrap dark:text-white">Python</td>
            <td className="px-6 py-4"><code className="bg-zinc-100 dark:bg-zinc-700 px-1 rounded-xs">python --version</code></td>
            <td className="px-6 py-4">e.g. Python 3.12.0</td>
          </tr>
          <tr className="bg-white border-b dark:bg-indigo-950 dark:border-indigo-700 border-indigo-200">
            <td scope="row" className="px-6 py-4 font-medium text-zinc-900 whitespace-nowrap dark:text-white">pip</td>
            <td className="px-6 py-4"><code className="bg-zinc-100 dark:bg-zinc-700 px-1 rounded-xs">pip list</code></td>
            <td className="px-6 py-4">Installed packages</td>
          </tr>
          <tr className="bg-white border-b dark:bg-indigo-950 dark:border-indigo-700 border-indigo-200">
            <td scope="row" className="px-6 py-4 font-medium text-zinc-900 whitespace-nowrap dark:text-white">Git</td>
            <td className="px-6 py-4"><code className="bg-zinc-100 dark:bg-zinc-700 px-1 rounded-xs">git --version</code></td>
            <td className="px-6 py-4">e.g. git version 2.40.x</td>
          </tr>
          <tr className="bg-white border-b dark:bg-indigo-950 dark:border-indigo-700 border-indigo-200">
            <td scope="row" className="px-6 py-4 font-medium text-zinc-900 whitespace-nowrap dark:text-white">Node.js</td>
            <td className="px-6 py-4"><code className="bg-zinc-100 dark:bg-zinc-700 px-1 rounded-xs">node -v</code></td>
            <td className="px-6 py-4">e.g. v20.x.x</td>
          </tr>
          <tr className="bg-white border-b dark:bg-indigo-950 dark:border-indigo-700 border-indigo-200">
            <td scope="row" className="px-6 py-4 font-medium text-zinc-900 whitespace-nowrap dark:text-white">DBeaver</td>
            <td className="px-6 py-4"><code className="bg-zinc-100 dark:bg-zinc-700 px-1 rounded-xs">Open app</code></td>
            <td className="px-6 py-4">Should launch cleanly</td>
          </tr>
        </tbody>
      </table>

      <p className="border-b-1 border-zinc-200 dark:border-zinc-700 mb-12"></p>

      {/* ─────────────────────────────────── */}
      <h2 className="text-3xl font-bold mb-4 text-[var(--foreground)]">🎉 You&apos;re Ready</h2>
      <p className="text-md mb-4">You now have a clean FinDev setup on Windows:</p>
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


