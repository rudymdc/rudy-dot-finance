// app/guides/findev-netsuite-1/Content.js
"use client";

import Image from "next/image";
import Link from "next/link";

export default function Content() {
  return (
    <article className="prose prose-indigo dark:prose-invert max-w-none">
      <h1 className="text-4xl font-bold mb-2 text-[var(--foreground)]">FinDev Setup for NetSuite</h1>
      <h2 className="text-2xl mb-8 text-indigo-500">v1: The SQL Playground</h2>
      <div className="flex items-center gap-4 mb-8">
        <Image width="450" height="450" className="w-12 h-12 rounded-full ring-2 ring-gray-300 dark:ring-gray-500" src="/images/profile.jpeg" alt="" />
        <div className="font-medium dark:text-white">
            <div>Rudy Martin Del Campo</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">January 15, 2025</div>
        </div>
      </div>

      <p className="text-1xl mb-4">Toolkit: <span className="font-bold">DBeaver + SuiteAnalytics Connect (JDBC)</span>.</p>
      <blockquote className="border-l-4 border-indigo-500 px-6 py-2 mb-8">Quickly surface insights from NetSuite without waiting on Engineering or signing an ETL contract. This guide helps finance professionals go from question to SQL powered answers in a matter of minutes.</blockquote>
      <p className="border-b-1 border-gray-200 dark:border-gray-700 mb-12"></p>

      {/* ─────────────────────────────────── */}
      <h2 className="text-3xl font-bold mb-4 text-[var(--foreground)]">🔍 What We&apos;re Solving</h2>
      <p className="text-md mb-4">You&apos;re a finance pro who needs:</p>
      <ul className="list-disc list-inside mb-4">
        <li>Fast access to reliable data for reporting and planning</li>
        <li>Insight into sales and marketing performance</li>
        <li>A way to avoid bottlenecks caused by manual exports or engineering delays</li>
      </ul>
      <p className="text-md mb-12"><span className="font-bold">Why this matters:</span> Every day you wait for a dashboard is a day you&apos;re not acting on the numbers. Having direct query access to NetSuite lets you validate assumptions, flag anomalies, and help the business move faster.</p>
      <p className="border-b-1 border-gray-200 dark:border-gray-700 mb-12"></p>

      {/* ─────────────────────────────────── */}
      <h2 className="text-3xl font-bold mb-4 text-[var(--foreground)]">✅ Prerequisites</h2>
      <table className="w-full mb-12 text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-indigo-50 dark:bg-indigo-900 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">Item</th>
            <th scope="col" className="px-6 py-3">Details</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b dark:bg-indigo-950 dark:border-indigo-700 border-indigo-200">
            <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">SuiteAnalytics Connect</td>
            <td className="px-6 py-4">Enabled via NetSuite license + role with Token-Based Auth</td>
          </tr>
          <tr className="bg-white border-b dark:bg-indigo-950 dark:border-indigo-700 border-indigo-200">
            <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">NetSuite JDBC driver</td>
            <td className="px-6 py-4">Download from the File Cabinet (SuiteAnalytics Connect package)</td>
          </tr>
          <tr className="bg-white border-b dark:bg-indigo-950 dark:border-indigo-700 border-indigo-200">
            <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">Token credentials</td>
            <td className="px-6 py-4">Token ID/Secret &amp; Consumer Key/Secret</td>
          </tr>
          <tr className="bg-white border-b dark:bg-indigo-950 dark:border-indigo-700 border-indigo-200">
            <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">DBeaver CE</td>
            <td className="px-6 py-4">Free SQL IDE – <Link href="https://dbeaver.io" target="_blank" className="text-indigo-500 dark:text-indigo-400">dbeaver.io</Link></td>
          </tr>
        </tbody>
      </table>
      <p className="border-b-1 border-gray-200 dark:border-gray-700 mb-12"></p>

      {/* ─────────────────────────────────── */}
      <h2 className="text-3xl font-bold mb-4 text-[var(--foreground)]">⚖️ Setting Up the Connection</h2>

      <h3 className="text-1xl font-bold mb-2 text-[var(--foreground)]">1. Driver Setup</h3>
      <ol className="list-disc list-inside mb-12 overflow-y-auto">
        <li>Open DBeaver → <strong>Database ▸ Driver Manager ▸ New</strong></li>
        <li>Class: <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded-xs">com.netsuite.jdbc.NQDriver</code></li>
        <li>Attach <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded-xs">NetSuiteJDBC41.jar</code></li>
      </ol>

      <h3 className="text-1xl font-bold mb-2 text-[var(--foreground)]">2. Create Connection</h3>
      <ol className="list-disc list-inside mb-12 overflow-y-auto">
        <li>Open DBeaver → <strong>Database ▸ Driver Manager ▸ New</strong></li>
        <li>JDBC URL: <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded-xs">jdbc:ns://ACCOUNT_ID.suitanalytics.com:1708;role=ROLE_ID</code></li>
        <li>User: <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded-xs">ACCOUNT_ID_ROLE_ID</code></li>
        <li>Password: <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded-xs">TOKEN_ID:TOKEN_SECRET</code></li>
        <li>Driver Props:</li>
        <pre className="bg-gray-100 dark:bg-gray-700 px-1 rounded-xs">
{`  realm         = ACCOUNT_ID
  consumerKey   = CONSUMER_KEY
  consumerSecret= CONSUMER_SECRET`}
      </pre>
      </ol>
      <p className="border-b-1 border-gray-200 dark:border-gray-700 mb-12"></p>

      {/* ─────────────────────────────────── */}
      <h2 className="text-3xl font-bold mb-4 text-[var(--foreground)]">📃 Exploring the NetSuite Schema</h2>
      <p className="text-md mb-2">Once connected:</p>
      <ol className="list-disc list-inside mb-12">
        <li>List all tables:</li>
        <pre className="bg-gray-100 dark:bg-gray-700 px-1 rounded-xs mb-6 py-1 px-6 overflow-y-auto">
          <span className="text-cyan-600 dark:text-cyan-400">SHOW TABLES</span>;
        </pre>
        <li>See available columns in a table:</li>
        <pre className="bg-gray-100 dark:bg-gray-700 px-1 rounded-xs mb-6 py-1 px-6 overflow-y-auto">
          <p><span className="text-cyan-600 dark:text-cyan-400">DESCRIBE transaction</span>;</p>
          <p><span className="text-[var(--foreground)]">-- or</span></p>
          <p><span className="text-cyan-600 dark:text-cyan-400">SELECT</span> * <span className="text-cyan-600 dark:text-cyan-400">FROM</span> information_schema.columns <span className="text-cyan-600 dark:text-cyan-400">WHERE</span> table_name = <span className="text-emerald-600 dark:text-emerald-400">&apos;transaction&apos;</span>;</p>
        </pre>
        <li>Search for all fields containing a term (e.g. marketing):</li>
        <pre className="bg-gray-100 dark:bg-gray-700 px-1 rounded-xs mb-6 py-1 px-6 overflow-y-auto">
          <p><span className="text-cyan-600 dark:text-cyan-400">SELECT</span> * <span className="text-cyan-600 dark:text-cyan-400">FROM</span> information_schema.columns <span className="text-cyan-600 dark:text-cyan-400">WHERE</span> column_name ILIKE <span className="text-emerald-600 dark:text-emerald-400">&apos;%marketing%&apos;</span>;</p>
        </pre>
      </ol>
      <p className="border-b-1 border-gray-200 dark:border-gray-700 mb-12"></p>

      {/* ─────────────────────────────────── */}
      <h2 className="text-3xl font-bold mb-4 text-[var(--foreground)]">📊 Example: Sales & Marketing Performance (CAC)</h2>
      <h3 className="text-1xl font-bold mb-2 text-[var(--foreground)]">Query: Sales Orders by Channel</h3>
      <pre className="bg-gray-100 dark:bg-gray-700 px-1 rounded-xs mb-6 py-1 px-6 overflow-y-auto">
        <p><span className="text-cyan-600 dark:text-cyan-400">SELECT</span></p>
        <p className="pl-4">tran.trandate,</p>
        <p className="pl-4">channel.name <span className="text-cyan-600 dark:text-cyan-400">AS</span> marketing_channel,</p>
        <p className="pl-4"><span className="text-cyan-600 dark:text-cyan-400">COUNT</span>(<span className="text-cyan-600 dark:text-cyan-400">DISTINCT</span> tran.id) <span className="text-cyan-600 dark:text-cyan-400">AS</span> orders,</p>
        <p className="pl-4">SUM(tranl.amount) <span className="text-cyan-600 dark:text-cyan-400">AS</span> revenue</p>
        <p><span className="text-cyan-600 dark:text-cyan-400">FROM transaction</span> tran</p>
        <p><span className="text-cyan-600 dark:text-cyan-400">JOIN</span> transactionline tranl <span className="text-cyan-600 dark:text-cyan-400">ON</span> tran.id = tranl.transaction</p>
        <p><span className="text-cyan-600 dark:text-cyan-400">LEFT JOIN</span> customrecord_marketingchannel channel <span className="text-cyan-600 dark:text-cyan-400">ON</span> tran.custbody_marketing_channel = channel.id</p>
        <p><span className="text-cyan-600 dark:text-cyan-400">WHERE</span> tran.type = <span className="text-emerald-600 dark:text-emerald-400">&apos;SalesOrd&apos;</span></p>
        <p className="pl-4"><span className="text-cyan-600 dark:text-cyan-400">AND</span> tran.trandate &gt;= DATEADD(<span className="text-emerald-600 dark:text-emerald-400">&apos;month&apos;</span>, -<span className="text-rose-600 dark:text-rose-400">6</span>, <span className="text-cyan-600 dark:text-cyan-400">CURRENT_DATE</span>)</p>
        <p><span className="text-cyan-600 dark:text-cyan-400">GROUP BY</span> tran.trandate, channel.name</p>
        <p><span className="text-cyan-600 dark:text-cyan-400">ORDER BY</span> tran.trandate;</p>
      </pre>

      <h3 className="text-1xl font-bold mb-2 text-[var(--foreground)]">Query: Marketing Spend by Channel</h3>
      <pre className="bg-gray-100 dark:bg-gray-700 px-1 rounded-xs mb-6 py-1 px-6 overflow-y-auto">
        <p><span className="text-cyan-600 dark:text-cyan-400">SELECT</span></p>
        <p className="pl-4">exp.trandate,</p>
        <p className="pl-4">dept.name <span className="text-cyan-600 dark:text-cyan-400">AS</span> marketing_channel</p>
        <p className="pl-4">SUM(exp.amount) <span className="text-cyan-600 dark:text-cyan-400">AS</span> spend</p>
        <p><span className="text-cyan-600 dark:text-cyan-400">FROM transaction</span> exp</p>
        <p><span className="text-cyan-600 dark:text-cyan-400">JOIN</span> department dept <span className="text-cyan-600 dark:text-cyan-400">ON</span> exp.department = dept.id</p>        
        <p><span className="text-cyan-600 dark:text-cyan-400">WHERE</span> exp.type = <span className="text-emerald-600 dark:text-emerald-400">&apos;ExpRpt&apos;</span></p>
        
        <p className="pl-4"><span className="text-cyan-600 dark:text-cyan-400">AND</span> dept.name <span className="text-cyan-600 dark:text-cyan-400">IN</span> (<span className="text-emerald-600 dark:text-emerald-400">&apos;Paid Search&apos;, &apos;Email&apos;, &apos;Social&apos;</span>)</p>
        <p className="pl-4"><span className="text-cyan-600 dark:text-cyan-400">AND</span> exp.trandate &gt;= DATEADD(<span className="text-emerald-600 dark:text-emerald-400">&apos;month&apos;</span>, -<span className="text-rose-600 dark:text-rose-400">6</span>, <span className="text-cyan-600 dark:text-cyan-400">CURRENT_DATE</span>)</p>
        <p><span className="text-cyan-600 dark:text-cyan-400">GROUP BY</span> exp.trandate, dept.name</p>
        <p><span className="text-cyan-600 dark:text-cyan-400">ORDER BY</span> exp.trandate;</p>
      </pre>

      <p className="text-md mb-12">
        Export both results and compute CAC <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded-xs">= spend / orders</code> in Excel or
        Python for a quick read on efficiency.
      </p>
      <p className="border-b-1 border-gray-200 dark:border-gray-700 mb-12"></p>

      {/* ─────────────────────────────────── */}
      <h2 className="text-3xl font-bold mb-4 text-[var(--foreground)]">⚡ Pro Moves in DBeaver</h2>
      <table className="w-full mb-12 text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-indigo-50 dark:bg-indigo-900 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">Action</th>
            <th scope="col" className="px-6 py-3">Shortcut/Tip</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b dark:bg-indigo-950 dark:border-indigo-700 border-indigo-200">
            <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">Browse schema</td>
            <td className="px-6 py-4">Ctrl+Click table name in query</td>
          </tr>
          <tr className="bg-white border-b dark:bg-indigo-950 dark:border-indigo-700 border-indigo-200">
            <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">Export results</td>
            <td className="px-6 py-4">Right-click result → Export to CSV</td>
          </tr>
          <tr className="bg-white border-b dark:bg-indigo-950 dark:border-indigo-700 border-indigo-200">
            <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">Save snippets</td>
            <td className="px-6 py-4">Use Bookmarks or Snippets tab for reusability</td>
          </tr>
        </tbody>
      </table>
      <p className="border-b-1 border-gray-200 dark:border-gray-700 mb-12"></p>

      {/* ─────────────────────────────────── */}
      <h2 className="text-3xl font-bold mb-4 text-[var(--foreground)]">✈️ When to Move On</h2>
      <p className="text-md mb-4">When:</p>
      <ul className="list-disc list-inside mb-4">
        <li>You want to run this job daily</li>
        <li>You&apos;re working with 100k+ rows</li>
        <li>You need to schedule loads into a warehouse</li>
      </ul>
      <p className="text-md mb-12">Move to <span className="font-bold">v2: Python Insight Lab</span> with REST-based pipelines and visualizations.</p>
      <p className="border-b-1 border-gray-200 dark:border-gray-700 mb-12"></p>

      {/* ─────────────────────────────────── */}
      <h2 className="text-3xl font-bold mb-4 text-[var(--foreground)]">✅ Key Takeaway</h2>
      <p className="text-md mb-4">With DBeaver + SuiteAnalytics Connect, you get a live, no-code SQL interface into NetSuite that lets you uncover revenue drivers, spend anomalies, and margin killers—before your coffee gets cold.</p>
      <p className="text-md mb-12"><span className="font-bold">Next up:</span> bringing it to life in code—see FinDev Setup v2.</p>
    </article>
  );
}