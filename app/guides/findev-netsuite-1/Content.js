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
        <Image width="450" height="450" className="w-12 h-12 rounded-full ring-2 ring-zinc-300 dark:ring-zinc-500" src="/images/profile-2.jpeg" alt="" />
        <div className="font-medium dark:text-white">
            <div>Rudy Martin Del Campo</div>
            <div className="text-sm text-zinc-500 dark:text-zinc-400">January 15, 2025</div>
        </div>
      </div>

      <p className="text-1xl mb-4">Toolkit: <span className="font-bold">DBeaver + SuiteAnalytics Connect (JDBC)</span>.</p>
      <blockquote className="border-l-4 border-indigo-500 px-6 py-2 mb-12">Quickly surface insights from NetSuite without waiting on Engineering or signing an ETL contract. This guide helps finance professionals go from question to SQL powered answers in a matter of minutes.</blockquote>

      {/* ─────────────────────────────────── */}
      <h2 className="text-3xl font-bold mb-4 text-[var(--foreground)]">What We&apos;re Solving</h2>
      <p className="text-md mb-4">You&apos;re a finance pro who needs:</p>
      <ul className="list-disc list-inside mb-4">
        <li>Fast access to reliable data for reporting and planning</li>
        <li>Insight into sales and marketing performance</li>
        <li>A way to avoid bottlenecks caused by manual exports or engineering delays</li>
      </ul>
      <p className="text-md mb-24"><span className="font-bold">Why this matters:</span> Every day you wait for a dashboard is a day you&apos;re not acting on the numbers. Having direct query access to NetSuite lets you validate assumptions, flag anomalies, and help the business move faster.</p>

      {/* ─────────────────────────────────── */}
      <h2 className="text-3xl font-bold mb-4 text-[var(--foreground)]">Prerequisites</h2>
      <table className="w-full mb-24 text-sm text-left rtl:text-right text-zinc-500 dark:text-zinc-400">
        <thead className="text-xs text-zinc-700 uppercase bg-indigo-50 dark:bg-indigo-900 dark:text-zinc-400">
          <tr>
            <th scope="col" className="px-6 py-3">Item</th>
            <th scope="col" className="px-6 py-3">Details</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b dark:bg-indigo-950 dark:border-indigo-700 border-indigo-200">
            <td scope="row" className="px-6 py-4 font-medium text-zinc-900 whitespace-nowrap dark:text-white">SuiteAnalytics Connect</td>
            <td className="px-6 py-4">Enabled via NetSuite license + role with Token-Based Auth</td>
          </tr>
          <tr className="bg-white border-b dark:bg-indigo-950 dark:border-indigo-700 border-indigo-200">
            <td scope="row" className="px-6 py-4 font-medium text-zinc-900 whitespace-nowrap dark:text-white">NetSuite JDBC driver</td>
            <td className="px-6 py-4">Download from the File Cabinet (SuiteAnalytics Connect package)</td>
          </tr>
          <tr className="bg-white border-b dark:bg-indigo-950 dark:border-indigo-700 border-indigo-200">
            <td scope="row" className="px-6 py-4 font-medium text-zinc-900 whitespace-nowrap dark:text-white">Token credentials</td>
            <td className="px-6 py-4">Token ID/Secret &amp; Consumer Key/Secret</td>
          </tr>
          <tr className="bg-white border-b dark:bg-indigo-950 dark:border-indigo-700 border-indigo-200">
            <td scope="row" className="px-6 py-4 font-medium text-zinc-900 whitespace-nowrap dark:text-white">DBeaver CE</td>
            <td className="px-6 py-4">Free SQL IDE – <Link href="https://dbeaver.io" target="_blank" className="text-indigo-500 dark:text-indigo-400">dbeaver.io</Link></td>
          </tr>
        </tbody>
      </table>

      {/* ─────────────────────────────────── */}
      <h2 className="text-3xl font-bold mb-4 text-[var(--foreground)]">Setting Up Your SQL Environment</h2>
      <p className="text-md mb-6">Alright, let&#39;s get your tools set up so we can write and run queries directly against your NetSuite data.</p>

      <h3 className="text-1xl font-semibold mb-2 text-[var(--foreground)]">1. Install DBeaver</h3>
      <ol className="list-disc list-inside mb-6 overflow-y-auto">
        <li>Download and install from <Link className="text-indigo-500 dark:text-indigo-400 hover:underline" href="https://dbeaver.io/download/" target="_blank">https://dbeaver.io/download/</Link></li>
      </ol>

      <h3 className="text-1xl font-semibold mb-2 text-[var(--foreground)]">2. Add the NetSuite JDBC Driver</h3>
      <ol className="list-disc list-inside mb-6 overflow-y-auto">
        <li>DBeaver <span className="font-semibold">&gt;</span> Database <span className="font-semibold">&gt;</span> Driver Manager <span className="font-semibold">&gt;</span> New</li>
        <li>Set class name to <code className="bg-zinc-100 dark:bg-zinc-700 px-1 rounded-xs">com.netsuite.jdbc.NQDriver</code></li>
        <li>Attach the file <code className="bg-zinc-100 dark:bg-zinc-700 px-1 rounded-xs">NetSuiteJDBC41.jar</code> from your SuiteAnalytics Connect download</li>
      </ol>
      
      <h3 className="text-1xl font-semibold mb-3 text-[var(--foreground)]">3. Create a NetSuite Connection</h3>
      <div className="block shadow-sm bg-zinc-800 border border-zinc-600 rounded-lg mb-6">
        <div className="text-zinc-50">
          <pre className="p-4 overflow-y-auto scroll-color">
            <p>JDBC URL:               jdbc:ns://<span className="text-amber-400">ACCOUNT_ID</span>.suitanalytics.com:1708;role=<span className="text-amber-400">ROLE_ID</span></p>
            <p>User:                   ACCOUNT_ID_ROLE_ID</p>
            <p>Password:               TOKEN_ID:TOKEN_SECRET</p>
            <p> </p>
            <p>Driver Properties:      realm=ACCOUNT_ID</p>
            <p>                        consumerKey=CONSUMER_KEY</p>
            <p>                        consumerSecret=CONSUMER_SECRET</p>
          </pre>
        </div>
      </div>
      
      <h3 className="text-1xl font-semibold mb-2 text-[var(--foreground)]">4. Test and Save Connection</h3>
      <ol className="list-disc list-inside mb-24 overflow-y-auto mb-12">
        <li>You should see &quot;Connected&quot; in the test window.</li>
      </ol>
      
      {/* ─────────────────────────────────── */}
      <h2 className="text-3xl font-bold mb-4 text-[var(--foreground)]">Exploring the NetSuite Schema</h2>
      <p className="text-md mb-2">Now that you&#39;re connected, let&#39;s explore the data structure so you can build effective queries.</p>
      <p className="text-md mb-6">To get started, right-click your NetSuite connection in DBeaver and choose New SQL Script to open a blank query window. This opens a new tab where you can type and run your queries directly.</p>

      <h3 className="text-1xl font-semibold mb-2 text-[var(--foreground)]">Show all available tables:</h3>
      <div className="block shadow-sm bg-zinc-800 border border-zinc-600 rounded-lg mb-6">
        <div className="bg-zinc-700 rounded-t-lg border-b border-zinc-600 pt-3 pb-2 px-4">
          <span className="text-sm font-medium text-zinc-50">
            SQL
          </span>
        </div>
        <pre className="p-4 text-zinc-50">
          <span className="text-cyan-400">SHOW TABLES</span>;
        </pre>
      </div>


      <h3 className="text-1xl font-semibold mb-2 text-[var(--foreground)]">Inspect a table&#39;s fields:</h3>
      <div className="block shadow-sm bg-zinc-800 border border-zinc-600 rounded-lg mb-6">
        <div className="bg-zinc-700 rounded-t-lg border-b border-zinc-600 pt-3 pb-2 px-4">
          <span className="text-sm font-medium text-zinc-50">
            SQL
          </span>
        </div>
        <pre className="p-4 text-zinc-50 overflow-y-auto scroll-color">
          <p><span className="text-cyan-400">DESCRIBE transaction</span>;</p>
          <p><span className="text-zinc-400">-- or</span></p>
          <p><span className="text-cyan-400">SELECT</span> * <span className="text-cyan-400">FROM</span> information_schema.columns <span className="text-cyan-400">WHERE</span> table_name = <span className="text-emerald-400">&apos;transaction&apos;</span>;</p>
        </pre>
      </div>


      <h3 className="text-1xl font-semibold mb-2 text-[var(--foreground)]">Search for field names (e.g. &apos;marketing&apos;) across all tables:</h3>
      <div className="block shadow-sm bg-zinc-800 border border-zinc-600 rounded-lg mb-24">
        <div className="bg-zinc-700 rounded-t-lg border-b border-zinc-600 pt-3 pb-2 px-4">
          <span className="text-sm font-medium text-zinc-50">
            SQL
          </span>
        </div>
        <pre className="p-4 text-zinc-50 overflow-y-auto scroll-color">
          <p><span className="text-cyan-400">SELECT</span> * <span className="text-cyan-400">FROM</span> information_schema.columns <span className="text-cyan-400">WHERE</span> column_name ILIKE <span className="text-emerald-400">&apos;%marketing%&apos;</span>;</p>
        </pre>
      </div>

      {/* ─────────────────────────────────── */}
      <h2 className="text-3xl font-bold mb-4 text-[var(--foreground)]">Example: Sales & Marketing Performance (CAC)</h2>
      <p className="text-md mb-4">Let&#39;s pull two datasets — one for sales orders and one for marketing spend — to estimate Customer Acquisition Cost (CAC). Export both queries to Excel and calculate:</p>
      <div className="block shadow-sm bg-zinc-800 border border-zinc-600 rounded-lg mb-4">
        <pre className="p-4 text-zinc-50 overflow-y-auto scroll-color">
          <p>CAC = spend / orders</p>
        </pre>
      </div>
      <p className="text-md mb-8">You&#39;ll group both queries by marketing channel and time period to compare performance over the past 6 months.</p>



      <h3 className="text-1xl font-semibold mb-2 text-[var(--foreground)]">Sample Query 1: Sales Orders by Channel</h3>
      <p className="text-md mb-4">🧠 <span className="font-semibold">What this does:</span> this query pulls the number of sales orders and total revenue by date and marketing channel over the last 6 months. Useful for tracking acquisition volume and contribution.</p>
      <div className="block shadow-sm bg-zinc-800 border border-zinc-600 rounded-lg mb-8">
        <div className="bg-zinc-700 rounded-t-lg border-b border-zinc-600 pt-3 pb-2 px-4">
          <span className="text-sm font-medium text-zinc-50">
            SQL
          </span>
        </div>
        <div className="text-zinc-50">
          <pre className="p-4 overflow-y-auto scroll-color">
            <p><span className="text-cyan-400">SELECT</span></p>
            <p className="pl-4">tran.trandate,</p>
            <p className="pl-4">channel.name <span className="text-cyan-400">AS</span> marketing_channel,</p>
            <p className="pl-4"><span className="text-cyan-400">COUNT</span>(<span className="text-cyan-400">DISTINCT</span> tran.id) <span className="text-cyan-400">AS</span> orders,</p>
            <p className="pl-4">SUM(tranl.amount) <span className="text-cyan-400">AS</span> revenue</p>
            <p><span className="text-cyan-400">FROM transaction</span> tran</p>
            <p><span className="text-cyan-400">JOIN</span> transactionline tranl <span className="text-cyan-400">ON</span> tran.id = tranl.transaction</p>
            <p><span className="text-cyan-400">LEFT JOIN</span> customrecord_marketingchannel channel <span className="text-cyan-400">ON</span> tran.custbody_marketing_channel = channel.id</p>
            <p><span className="text-cyan-400">WHERE</span> tran.type = <span className="text-emerald-400">&apos;SalesOrd&apos;</span></p>
            <p className="pl-4"><span className="text-cyan-400">AND</span> tran.trandate &gt;= DATEADD(<span className="text-emerald-400">&apos;month&apos;</span>, -<span className="text-rose-400">6</span>, <span className="text-cyan-400">CURRENT_DATE</span>)</p>
            <p><span className="text-cyan-400">GROUP BY</span> tran.trandate, channel.name</p>
            <p><span className="text-cyan-400">ORDER BY</span> tran.trandate;</p>
          </pre>
        </div>
      </div>

      <h3 className="text-1xl font-semibold mb-2 text-[var(--foreground)]">Sample Query 2: Marketing Spend by Channel</h3>
      <p className="text-md mb-4">🧠 <span className="font-semibold">What this does:</span> this query pulls expense report totals by date and department (used here as a proxy for marketing channel) for the last 6 months. You&#39;ll use this to calculate CAC.</p>
      <div className="block shadow-sm bg-zinc-800 border border-zinc-600 rounded-lg mb-8">
        <div className="bg-zinc-700 rounded-t-lg border-b border-zinc-600 pt-3 pb-2 px-4">
          <span className="text-sm font-medium text-zinc-50">
            SQL
          </span>
        </div>
        <div className="text-zinc-50">
          <pre className="p-4 overflow-y-auto scroll-color">
            <p><span className="text-cyan-400">SELECT</span></p>
            <p className="pl-4">exp.trandate,</p>
            <p className="pl-4">dept.name <span className="text-cyan-400">AS</span> marketing_channel</p>
            <p className="pl-4">SUM(exp.amount) <span className="text-cyan-400">AS</span> spend</p>
            <p><span className="text-cyan-400">FROM transaction</span> exp</p>
            <p><span className="text-cyan-400">JOIN</span> department dept <span className="text-cyan-400">ON</span> exp.department = dept.id</p>        
            <p><span className="text-cyan-400">WHERE</span> exp.type = <span className="text-emerald-400">&apos;ExpRpt&apos;</span></p>
            
            <p className="pl-4"><span className="text-cyan-400">AND</span> dept.name <span className="text-cyan-400">IN</span> (<span className="text-emerald-400">&apos;Paid Search&apos;, &apos;Email&apos;, &apos;Social&apos;</span>)</p>
            <p className="pl-4"><span className="text-cyan-400">AND</span> exp.trandate &gt;= DATEADD(<span className="text-emerald-400">&apos;month&apos;</span>, -<span className="text-rose-400">6</span>, <span className="text-cyan-400">CURRENT_DATE</span>)</p>
            <p><span className="text-cyan-400">GROUP BY</span> exp.trandate, dept.name</p>
            <p><span className="text-cyan-400">ORDER BY</span> exp.trandate;</p>
          </pre>
        </div>
      </div>

      <p className="text-md mb-24">
        Export both results and compute <code className="bg-zinc-100 dark:bg-zinc-700 px-1 rounded-xs">CAC = spend / orders</code> in Excel for a quick read on efficiency.
      </p>

      {/* ─────────────────────────────────── */}
      <h2 className="text-3xl font-bold mb-4 text-[var(--foreground)]">Pro Moves in DBeaver</h2>
      <table className="w-full mb-24 text-sm text-left rtl:text-right text-zinc-500 dark:text-zinc-400">
        <thead className="text-xs text-zinc-700 uppercase bg-indigo-50 dark:bg-indigo-900 dark:text-zinc-400">
          <tr>
            <th scope="col" className="px-6 py-3">Action</th>
            <th scope="col" className="px-6 py-3">Shortcut/Tip</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b dark:bg-indigo-950 dark:border-indigo-700 border-indigo-200">
            <td scope="row" className="px-6 py-4 font-medium text-zinc-900 whitespace-nowrap dark:text-white">Browse schema</td>
            <td className="px-6 py-4">Ctrl+Click table name in query</td>
          </tr>
          <tr className="bg-white border-b dark:bg-indigo-950 dark:border-indigo-700 border-indigo-200">
            <td scope="row" className="px-6 py-4 font-medium text-zinc-900 whitespace-nowrap dark:text-white">Export results</td>
            <td className="px-6 py-4">Right-click result → Export to CSV</td>
          </tr>
          <tr className="bg-white border-b dark:bg-indigo-950 dark:border-indigo-700 border-indigo-200">
            <td scope="row" className="px-6 py-4 font-medium text-zinc-900 whitespace-nowrap dark:text-white">Save snippets</td>
            <td className="px-6 py-4">Use Bookmarks or Snippets tab for reusability</td>
          </tr>
        </tbody>
      </table>

      {/* ─────────────────────────────────── */}
      <h2 className="text-3xl font-bold mb-4 text-[var(--foreground)]">When to Move On</h2>
      <p className="text-md mb-4">When:</p>
      <ul className="list-disc list-inside mb-4">
        <li>You want to run this job daily</li>
        <li>You&apos;re working with 100k+ rows</li>
        <li>You need to schedule loads into a warehouse</li>
      </ul>
      <p className="text-md mb-24">Move to <Link className="font-semibold text-indigo-500 hover:underline" href="/guides/findev-netsuite-2">v2: Python Insight Lab</Link> with REST-based pipelines and visualizations.</p>

      {/* ─────────────────────────────────── */}
      <h2 className="text-3xl font-bold mb-4 text-[var(--foreground)]">Key Takeaway</h2>
      <p className="text-md mb-4">That&#39;s a wrap on your first exploratory stack! You now have a direct SQL bridge into NetSuite that unlocks fast insights and avoids Excel gymnastics.</p>
      <p className="text-md mb-4">With DBeaver + SuiteAnalytics Connect, you get a live, no-code SQL interface into NetSuite that lets you uncover revenue drivers, spend anomalies, and margin killers—before your coffee gets cold.</p>
      <p className="text-md mb-12"><span className="font-bold">Next up:</span> bringing it to life in code—see <Link className="text-indigo-500 hover:underline" href="/guides/findev-netsuite-2">FinDev Setup v2</Link>.</p>
    </article>
  );
}


