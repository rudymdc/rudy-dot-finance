// app/guides/findev-netsuite-2/Content.js
"use client";

import Image from "next/image";
import Link from "next/link";

export default function Content() {
  return (
    <article className="prose prose-indigo dark:prose-invert max-w-none">
      <h1 className="text-4xl font-bold mb-2 text-[var(--foreground)]">FinDev Setup for NetSuite</h1>
      <h2 className="text-2xl mb-8 text-indigo-500">v2: The Python Insight Lab</h2>
      <div className="flex items-center gap-4 mb-8">
        <Image width="450" height="450" className="w-12 h-12 rounded-full ring-2 ring-gray-300 dark:ring-gray-500" src="/images/profile-2.jpeg" alt="" />
        <div className="font-medium dark:text-white">
            <div>Rudy Martin Del Campo</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">January 28, 2025</div>
        </div>
      </div>

      <p className="text-1xl mb-4">Toolkit: <span className="font-bold">Python + SuiteQL (REST API) + Pandas + Matplotlib</span>.</p>
      <blockquote className="border-l-4 border-indigo-500 px-6 py-2 mb-12">When dashboards lag and tools are too rigid, this scriptable lab setup helps you rapidly prototype revenue analysis and visualize insights from NetSuite — no ETL needed.</blockquote>

      {/* ─────────────────────────────────── */}
      <h2 className="text-3xl font-bold mb-4 text-[var(--foreground)]">What We&apos;re Solving</h2>
      <p className="text-md mb-4">You&apos;ve explored NetSuite data with SQL (DBeaver), but now you want:</p>
      <ul className="list-disc list-inside mb-4">
        <li>Repeatable, codified insights that go beyond ad-hoc queries</li>
        <li>Lightweight scripts you can schedule, share, and evolve</li>
        <li>Visualizations that help you show the business what&apos;s going on</li>
      </ul>
      <p className="text-md mb-24"><span className="font-bold">Why this matters:</span> Before investing in pipelines or dashboards this setup helps you validate what&apos;s valuable and tell powerful stories using real data.</p>

      {/* ─────────────────────────────────── */}
      <h2 className="text-3xl font-bold mb-4 text-[var(--foreground)]">Prerequisites</h2>
      <table className="w-full mb-24 text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-indigo-50 dark:bg-indigo-900 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">Item</th>
            <th scope="col" className="px-6 py-3">Details</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b dark:bg-indigo-950 dark:border-indigo-700 border-indigo-200">
            <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">NetSuite REST Role</td>
            <td className="px-6 py-4">Role with REST Web Services and Token-Based Auth</td>
          </tr>
          <tr className="bg-white border-b dark:bg-indigo-950 dark:border-indigo-700 border-indigo-200">
            <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">Python 3.9+</td>
            <td className="px-6 py-4">Local or virtual environment</td>
          </tr>
          <tr className="bg-white border-b dark:bg-indigo-950 dark:border-indigo-700 border-indigo-200">
            <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">Packages</td>
            <td className="px-6 py-4"><code className="bg-gray-100 dark:bg-gray-700 px-1 rounded-xs">pip install requests requests_oauthlib pandas matplotlib tqdm</code></td>
          </tr>
        </tbody>
      </table>

      {/* ─────────────────────────────────── */}
      <h2 className="text-3xl font-bold mb-4 text-[var(--foreground)]">Project Setup</h2>
      <p className="text-md mb-6">Alright, let&apos;s get your workspace ready before we dive into writing code. This helps us keep things clean and easy to follow as we move into scripting.</p>
      <p className="text-md mb-2">Create a clean project structure to keep things organized:</p>
      <div className="block bg-zinc-800 shadow-sm border border-zinc-600 rounded-lg mb-6">
        <div className="mb-0 bg-zinc-700 rounded-t-lg border-b border-zinc-600 pt-3 pb-2 px-4">
          <span className="text-sm font-medium text-zinc-50">
            console
          </span>
        </div>
        <div className="p-4 text-zinc-50">
          <p className=""><code>mkdir netsuite-insight-lab</code></p>
          <p className=""><code>cd netsuite-insight-lab</code></p>
          <p className=""><code>mkdir scripts csv</code></p>
        </div>
      </div>

      <p className="text-md mb-2">Your folder should now look like:</p>
      <div className="block shadow-sm bg-zinc-800 border border-zinc-600 rounded-lg mb-8">
        <div className="mb-0 bg-zinc-700 rounded-t-lg border-b border-zinc-600 pt-3 pb-2 px-4">
          <span className="text-sm font-medium text-zinc-50">
            directory
          </span>
        </div>
        <pre className="p-4 text-zinc-50 overflow-y-auto scroll-color">
{`netsuite-insight-lab/
├── scripts/                # For your Python scripts
├── csv/                    # For CSV exports from DBeaver`}
        </pre>
      </div>
      <p className="text-md mb-24">Now that your environment is set up, let&apos;s create the connector script that allows you to communicate with NetSuite and run SuiteQL queries.</p>

      {/* ─────────────────────────────────── */}
      <h2 className="text-3xl font-bold mb-4 text-[var(--foreground)]">Connector Helper (<code className="text-2xl bg-gray-100 dark:bg-gray-700 px-1 rounded-xs">scripts/netsuite_rest.py</code>)</h2>
      <blockquote className="border-l-4 border-indigo-500 px-6 py-2 mb-8">This script creates a lightweight Python function for authenticating and executing SuiteQL queries against the NetSuite REST API. It&apos;s modular, reusable, and keeps your credentials and request logic cleanly separated from your analysis code.</blockquote>

      <h3 className="text-1xl font-semibold mb-2 text-[var(--foreground)]">Create the file:</h3>
      <div className="block shadow-sm bg-zinc-800 border border-zinc-600 rounded-lg mb-6">
        <div className="bg-zinc-700 rounded-t-lg border-b border-zinc-600 pt-3 pb-2 px-4">
          <span className="text-sm font-medium text-zinc-50">
            console
          </span>
        </div>
        <div className="p-4 text-zinc-50">
          <p className=""><code>touch scripts/netsuite_rest.py</code></p>
        </div>
      </div>

      <h3 className="text-1xl font-semibold mb-2 text-[var(--foreground)]">Add the following code:</h3>
      <div className="block shadow-sm bg-zinc-800 border border-zinc-600 rounded-lg mb-6">
        <div className="bg-zinc-700 rounded-t-lg border-b border-zinc-600 pt-3 pb-2 px-4">
          <span className="text-sm font-medium text-zinc-50">
            python
          </span>
        </div>
        <div className="text-zinc-50">
          <pre className="p-4 overflow-y-auto scroll-color">
            <p><span className="text-purple-400">import</span> os, json, requests</p>
            <p><span className="text-purple-400">from</span> requests_oauthlib <span className="text-purple-400">from</span> OAuth1</p>
            <p> </p>
            <p>NS_ACCOUNT = os.getenv(<span className="text-lime-300">&quot;NS_ACCOUNT&quot;</span>)</p>
            <p>BASE_URL   = <span className="text-lime-300">f&quot;https://</span><span className="text-rose-400">{'{'}NS_ACCOUNT{'}'}</span><span className="text-lime-300">.suitetalk.api.netsuite.com&quot;</span></p>
            <p>AUTH       = OAuth1(os.getenv(<span className="text-lime-300">&quot;NS_CK&quot;</span>), os.getenv(<span className="text-lime-300">&quot;NS_CS&quot;</span>),</p>
            <p>                    os.getenv(<span className="text-lime-300">&quot;NS_TK&quot;</span>), os.getenv(<span className="text-lime-300">&quot;NS_TS&quot;</span>),</p>
            <p>                    signature_type=<span className="text-lime-300">&quot;AUTH_HEADER&quot;</span>)</p>
            <p> </p>
            <p><span className="text-purple-400">def</span> run_suiteql(sql: str, limit=<span className="text-amber-400">1000</span>, offset=<span className="text-amber-400">0</span>):</p>
            <p>    url = <span className="text-lime-300">f&quot;<span className="text-rose-400">{'{'}BASE_URL{'}'}</span>/services/rest/query/v1/suiteql?limit=<span className="text-rose-400">{'{'}limit{'}'}</span>&offset=<span className="text-rose-400">{'{'}offset{'}'}</span>&quot;</span></p>
            <p>    resp = requests.post(url,</p>
            <p>                         headers={'{'}<span className="text-lime-300">&quot;Content-Type&quot;</span>: <span className="text-lime-300">&quot;application/json&quot;</span>{'}'},</p>
            <p>                         auth=AUTH,</p>
            <p>                         data=json.dumps({'{'}<span className="text-lime-300">&quot;q&quot;</span>: sql{'}'}))</p>
            <p>    resp.raise_for_status()</p>
            <p>    print(<span className="text-lime-300">&quot;✅ Connected to NetSuite and query succeeded.&quot;</span>)</p>
            <p>    return resp.json()[<span className="text-lime-300">&quot;items&quot;</span>]</p>
          </pre>
        </div>
      </div>

      <h3 className="text-1xl font-semibold mb-2 text-[var(--foreground)]">Run it (test connection):</h3>
      <div className="block shadow-sm bg-zinc-800 border border-zinc-600 rounded-lg mb-6">
        <div className="bg-zinc-700 rounded-t-lg border-b border-zinc-600 pt-3 pb-2 px-4">
          <span className="text-sm font-medium text-zinc-50">
            console
          </span>
        </div>
        <div className="p-4 text-zinc-50">
          <p className=""><code>python scripts/netsuite_rest.py</code></p>
        </div>
      </div>

      <h3 className="text-1xl font-semibold mb-2 text-[var(--foreground)]">Expected output:</h3>
      <div className="block shadow-sm bg-zinc-800 border border-zinc-600 rounded-lg mb-8">
        <div className="bg-zinc-700 rounded-t-lg border-b border-zinc-600 pt-3 pb-2 px-4">
          <span className="text-sm font-medium text-zinc-50">
            console
          </span>
        </div>
        <pre className="p-4 text-zinc-50 overflow-y-auto scroll-color">
          <p className=""><code>✅ Connected to NetSuite and query succeeded.</code></p>
        </pre>
      </div>

      <p className="text-md mb-24">Congrats, you&apos;re officially connected to NetSuite! Now let&apos;s build our first visualization script to track customer acquisition cost (CAC) by marketing channel.</p>


      {/* ─────────────────────────────────── */}
      <h2 className="text-3xl font-bold mb-4 text-[var(--foreground)]">Example: CAC Over Time by Marketing Channel (<code className="text-2xl bg-gray-100 dark:bg-gray-700 px-1 rounded-xs">scripts/cac_by_channel.py</code>)</h2>
      <blockquote className="border-l-4 border-indigo-500 px-6 py-2 mb-8">This example pulls together sales and marketing data directly from NetSuite to calculate a simple yet powerful performance metric—Customer Acquisition Cost (CAC). We&apos;ll query two separate datasets: one for orders (revenue) and one for spend, join them by date and channel, then visualize CAC trends over time.</blockquote>

      <h3 className="text-1xl font-semibold mb-2 text-[var(--foreground)]">Create the file:</h3>
      <div className="block shadow-sm bg-zinc-800 border border-zinc-600 rounded-lg mb-6">
        <div className="bg-zinc-700 rounded-t-lg border-b border-zinc-600 pt-3 pb-2 px-4">
          <span className="text-sm font-medium text-zinc-50">
            console
          </span>
        </div>
        <div className="p-4 text-zinc-50">
          <p className=""><code>touch scripts/cac_by_channel.py</code></p>
        </div>
      </div>

      <h3 className="text-1xl font-semibold mb-2 text-[var(--foreground)]">Add the following code:</h3>
      <div className="block shadow-sm bg-zinc-800 border border-zinc-600 rounded-lg mb-6">
        <div className="bg-zinc-700 rounded-t-lg border-b border-zinc-600 pt-3 pb-2 px-4">
          <span className="text-sm font-medium text-zinc-50">
            python
          </span>
        </div>
        <div className="text-zinc-50">
          <pre className="p-4 overflow-y-auto scroll-color">
            <p><span className="text-purple-400">import</span> pandas <span className="text-purple-400">as</span> pd</p>
            <p><span className="text-purple-400">import</span> matplotlib.pyplot <span className="text-purple-400">as</span> plt</p>
            <p><span className="text-purple-400">from</span> netsuite_rest <span className="text-purple-400">import</span> run_suiteql</p>
            <p> </p>
            <p><span className="text-zinc-500"># Query: Sales Orders</span></p>
            <p>sales_sql = <span className="text-lime-300">&quot;&quot;&quot;</span></p>
            <p><span className="text-lime-300">SELECT tran.trandate,</span></p>
            <p><span className="text-lime-300">       channel.name AS marketing_channel,</span></p>
            <p><span className="text-lime-300">       COUNT(DISTINCT tran.id) AS orders,</span></p>
            <p><span className="text-lime-300">       SUM(tranl.amount) AS revenue</span></p>
            <p><span className="text-lime-300">FROM transaction tran</span></p>
            <p><span className="text-lime-300">JOIN transactionline tranl ON tran.id = tranl.transaction</span></p>
            <p><span className="text-lime-300">LEFT JOIN customrecord_marketingchannel channel ON tran.custbody_marketing_channel = channel.id</span></p>
            <p><span className="text-lime-300">WHERE tran.type = &apos;SalesOrd&apos;</span></p>
            <p><span className="text-lime-300">  AND tran.trandate &gt;= TO_DATE(&apos;2024-12-01&apos;,&apos;YYYY-MM-DD&apos;)</span></p>
            <p><span className="text-lime-300">GROUP BY tran.trandate, channel.name</span></p>
            <p><span className="text-lime-300">ORDER BY tran.trandate</span></p>
            <p><span className="text-lime-300">&quot;&quot;&quot;</span></p>
            <p>sales_df = pd.DataFrame(run_suiteql(sales_sql))</p>
            <p> </p>
            <p><span className="text-zinc-500"># Query: Marketing Spend</span></p>
            <p>spend_sql = <span className="text-lime-300">&quot;&quot;&quot;</span></p>
            <p><span className="text-lime-300">SELECT exp.trandate,</span></p>
            <p><span className="text-lime-300">       dept.name AS marketing_channel,</span></p>
            <p><span className="text-lime-300">       SUM(exp.amount) AS spend</span></p>
            <p><span className="text-lime-300">FROM transaction exp</span></p>
            <p><span className="text-lime-300">JOIN department dept ON exp.department = dept.id</span></p>
            <p><span className="text-lime-300">WHERE exp.type = &apos;ExpRpt&apos;</span></p>
            <p><span className="text-lime-300">  AND dept.name IN (&apos;Paid Search&apos;, &apos;Email&apos;, &apos;Social&apos;)</span></p>
            <p><span className="text-lime-300">  AND exp.trandate &gt;= TO_DATE(&apos;2024-12-01&apos;,&apos;YYYY-MM-DD&apos;)</span></p>
            <p><span className="text-lime-300">GROUP BY exp.trandate, dept.name</span></p>
            <p><span className="text-lime-300">ORDER BY exp.trandate</span></p>
            <p><span className="text-lime-300">&quot;&quot;&quot;</span></p>
            <p>spend_df = pd.DataFrame(run_suiteql(spend_sql))</p>
            <p> </p>
            <p><span className="text-zinc-500"># Merge and Calculate CAC</span></p>
            <p>merged = pd.merge(sales_df, spend_df, </p>
            <p>                  on=[<span className="text-lime-300">&quot;trandate&quot;</span>, <span className="text-lime-300">&quot;marketing_channel&quot;</span>], how=<span className="text-lime-300">&quot;inner&quot;</span>)</p>
            <p>merged[<span className="text-lime-300">&quot;CAC&quot;</span>] = merged[<span className="text-lime-300">&quot;spend&quot;</span>] / merged[<span className="text-lime-300">&quot;orders&quot;</span>]</p>
            <p> </p>
            <p><span className="text-zinc-500"># Plot CAC trend</span></p>
            <p>fig, ax = plt.subplots(figsize=(<span className="text-amber-400">10</span>, <span className="text-amber-400">5</span>))</p>
            <p><span className="text-purple-400">for</span> channel <span className="text-purple-400">in</span> merged[<span className="text-lime-300">&quot;marketing_channel&quot;</span>].unique():</p>
            <p>    df = merged[merged[<span className="text-lime-300">&quot;marketing_channel&quot;</span>] == channel]</p>
            <p>    ax.plot(df[<span className="text-lime-300">&quot;trandate&quot;</span>], df[<span className="text-lime-300">&quot;CAC&quot;</span>], label=channel)</p>
            <p> </p>
            <p>ax.set_title(<span className="text-lime-300">&quot;CAC Over Time by Marketing Channel&quot;</span>)</p>
            <p>ax.set_xlabel(<span className="text-lime-300">&quot;Date&quot;</span>)</p>
            <p>ax.set_ylabel(<span className="text-lime-300">&quot;CAC&quot;</span>)</p>
            <p>ax.legend()</p>
            <p>plt.tight_layout()</p>
            <p>plt.show()</p>

          </pre>
        </div>
      </div>

      <h3 className="text-1xl font-semibold mb-2 text-[var(--foreground)]">Run it:</h3>
      <div className="block shadow-sm bg-zinc-800 border border-zinc-600 rounded-lg mb-6">
        <div className="bg-zinc-700 rounded-t-lg border-b border-zinc-600 pt-3 pb-2 px-4">
          <span className="text-sm font-medium text-zinc-50">
            console
          </span>
        </div>
        <div className="p-4 text-zinc-50">
          <p className=""><code>python scripts/cac_by_channel.py</code></p>
        </div>
      </div>

      <h3 className="text-1xl font-semibold mb-2 text-[var(--foreground)]">Expected output:</h3>
      <div className="block shadow-sm bg-zinc-800 border border-zinc-600 rounded-lg mb-8">
        <div className="bg-zinc-700 rounded-t-lg border-b border-zinc-600 pt-3 pb-2 px-4">
          <span className="text-sm font-medium text-zinc-50">
            console
          </span>
        </div>
        <pre className="p-4 text-zinc-50 overflow-y-auto scroll-color">
          <p className=""><code>✅ Connected to NetSuite and query succeeded.</code></p>
          <p className=""><code>✅ Connected to NetSuite and query succeeded.</code></p>
          <p className=""><code>&lt;Pop-up Matplotlib chart appears&gt;</code></p>
        </pre>
      </div>

      <p className="text-md mb-24">Not quite ready to connect directly via REST API? No problem. Here&apos;s how to achieve the same analysis using exported .csv files from DBeaver instead.</p>


      {/* ─────────────────────────────────── */}
      <h2 className="text-3xl font-bold mb-4 text-[var(--foreground)]">Alternative: Use CSV Exports from DBeaver (<code className="text-2xl bg-gray-100 dark:bg-gray-700 px-1 rounded-xs">scripts/cac_csv_analysis.py</code>)</h2>
      <blockquote className="border-l-4 border-indigo-500 px-6 py-2 mb-8">If you&apos;re not ready to pull data directly from the NetSuite REST API, you can export <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded-xs">.csv</code> files from DBeaver and analyze them in Python using the same techniques.</blockquote>

      <p className="text-md mb-2">Update your directory to include:</p>
      <div className="block bg-zinc-800 shadow-sm border border-zinc-600 rounded-lg mb-6">
        <div className="mb-0 bg-zinc-700 rounded-t-lg border-b border-zinc-600 pt-3 pb-2 px-4">
          <span className="text-sm font-medium text-zinc-50">
            console
          </span>
        </div>
        <div className="p-4 text-zinc-50">
          <p className=""><code>mkdir <span className="text-rose-400">-p</span> csv</code></p>
          <p className="text-zinc-500"><code># Place your exports in this folder</code></p>
        </div>
      </div>

      <h3 className="text-1xl font-semibold mb-2 text-[var(--foreground)]">Create the file:</h3>
      <div className="block shadow-sm bg-zinc-800 border border-zinc-600 rounded-lg mb-6">
        <div className="bg-zinc-700 rounded-t-lg border-b border-zinc-600 pt-3 pb-2 px-4">
          <span className="text-sm font-medium text-zinc-50">
            console
          </span>
        </div>
        <div className="p-4 text-zinc-50">
          <p className=""><code>touch scripts/cac_csv_analysis.py</code></p>
        </div>
      </div>

      <h3 className="text-1xl font-semibold mb-2 text-[var(--foreground)]">Add the following code:</h3>
      <div className="block shadow-sm bg-zinc-800 border border-zinc-600 rounded-lg mb-6">
        <div className="bg-zinc-700 rounded-t-lg border-b border-zinc-600 pt-3 pb-2 px-4">
          <span className="text-sm font-medium text-zinc-50">
            python
          </span>
        </div>
        <div className="text-zinc-50">
          <pre className="p-4 overflow-y-auto scroll-color">
            <p><span className="text-purple-400">import</span> pandas <span className="text-purple-400">as</span> pd</p>
            <p><span className="text-purple-400">import</span> matplotlib.pyplot <span className="text-purple-400">as</span> plt</p>
            <p> </p>
            <p>sales_df = pd.read_csv(<span className="text-lime-300">&quot;csv/sales_orders.csv&quot;</span>)</p>
            <p>spend_df = pd.read_csv(<span className="text-lime-300">&quot;csv/marketing_spend.csv&quot;</span>)</p>
            <p> </p>
            <p>print(<span className="text-lime-300">f&quot;Loaded sales_orders.csv with shape: <span className="text-rose-400">{'{'}sales_df.shape{'}'}</span>&quot;</span>)</p>
            <p>print(<span className="text-lime-300">f&quot;Loaded marketing_spend.csv with shape: <span className="text-rose-400">{'{'}spend_df.shape{'}'}</span>&quot;</span>)</p>
            <p> </p>
            <p><span className="text-slate-500"># Join and calculate CAC</span></p>
            <p>merged = pd.merge(sales_df, spend_df, on=[<span className="text-lime-300">&quot;trandate&quot;</span>, <span className="text-lime-300">&quot;marketing_channel&quot;</span>], how=<span className="text-lime-300">&quot;inner&quot;</span>)</p>
            <p>merged[<span className="text-lime-300">&quot;CAC&quot;</span>] = merged[<span className="text-lime-300">&quot;spend&quot;</span>] / merged[<span className="text-lime-300">&quot;orders&quot;</span>]</p>
            <p> </p>
            <p><span className="text-slate-500"># Plot</span></p>
            <p>fig, ax = plt.subplots(figsize=(<span className="text-amber-400">10</span>, <span className="text-amber-400">5</span>))</p>
            <p><span className="text-purple-400">for</span> channel <span className="text-purple-400">in</span> merged[<span className="text-lime-300">&quot;marketing_channel&quot;</span>].unique():</p>
            <p>    df = merged[merged[<span className="text-lime-300">&quot;marketing_channel&quot;</span>] == channel]</p>
            <p>    ax.plot(df[<span className="text-lime-300">&quot;trandate&quot;</span>], df[<span className="text-lime-300">&quot;CAC&quot;</span>], label=channel)</p>
            <p> </p>
            <p>ax.set_title(<span className="text-lime-300">&quot;CAC Over Time by Marketing Channel (CSV Source)&quot;</span>)</p>
            <p>ax.set_xlabel(<span className="text-lime-300">&quot;Date&quot;</span>)</p>
            <p>ax.set_ylabel(<span className="text-lime-300">&quot;CAC&quot;</span>)</p>
            <p>ax.legend()</p>
            <p>plt.tight_layout()</p>
            <p>plt.show()</p>
          </pre>
        </div>
      </div>

      <h3 className="text-1xl font-semibold mb-2 text-[var(--foreground)]">Run it:</h3>
      <div className="block shadow-sm bg-zinc-800 border border-zinc-600 rounded-lg mb-6">
        <div className="bg-zinc-700 rounded-t-lg border-b border-zinc-600 pt-3 pb-2 px-4">
          <span className="text-sm font-medium text-zinc-50">
            console
          </span>
        </div>
        <div className="p-4 text-zinc-50">
          <p className=""><code>python scripts/cac_csv_analysis.py</code></p>
        </div>
      </div>

      <h3 className="text-1xl font-semibold mb-2 text-[var(--foreground)]">Expected output:</h3>
      <div className="block shadow-sm bg-zinc-800 border border-zinc-600 rounded-lg mb-24">
        <div className="bg-zinc-700 rounded-t-lg border-b border-zinc-600 pt-3 pb-2 px-4">
          <span className="text-sm font-medium text-zinc-50">
            console
          </span>
        </div>
        <pre className="p-4 text-zinc-50 overflow-y-auto scroll-color">
          <p className=""><code>Loaded sales_orders.csv with shape: (X rows, <span className="text-amber-400">4</span> columns)</code></p>
          <p className=""><code>Loaded marketing_spend.csv with shape: (Y rows, <span className="text-amber-400">3</span> columns)</code></p>
          <p className=""><code>&lt;Pop-up Matplotlib chart appears&gt;</code></p>
        </pre>
      </div>


      {/* ─────────────────────────────────── */}
      <h2 className="text-3xl font-bold mb-4 text-[var(--foreground)]">Insight Ideas to Explore</h2>
      <table className="w-full mb-24 text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-indigo-50 dark:bg-indigo-900 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">Analysis</th>
            <th scope="col" className="px-6 py-3">Why It Matters</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b dark:bg-indigo-950 dark:border-indigo-700 border-indigo-200">
            <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">CAC trend vs sales volume</td>
            <td className="px-6 py-4">Is growth coming at a cost?</td>
          </tr>
          <tr className="bg-white border-b dark:bg-indigo-950 dark:border-indigo-700 border-indigo-200">
            <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">Revenue by marketing channel</td>
            <td className="px-6 py-4">See what&apos;s actually converting</td>
          </tr>
          <tr className="bg-white border-b dark:bg-indigo-950 dark:border-indigo-700 border-indigo-200">
            <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">Channel-specific anomalies</td>
            <td className="px-6 py-4">Spot spikes in CAC or drops in volume</td>
          </tr>
        </tbody>
      </table>

      {/* ─────────────────────────────────── */}
      <h2 className="text-3xl font-bold mb-4 text-[var(--foreground)]">Next Steps</h2>
      <ol className="list-decimal list-inside mb-24">
        <li className="mb-2">Save queries and scripts in a Git repo for reusability</li>
        <li className="mb-2">Parameterize SQL by date range or channel</li>
        <li className="mb-2">Schedule with cron, Airflow, or GitHub Actions</li>
        <li className="mb-2">Upgrade to Hex or dbt for collaboration at scale</li>
      </ol>

      {/* ─────────────────────────────────── */}
      <h2 className="text-3xl font-bold mb-4 text-[var(--foreground)]">Key Takeaway</h2>
      <p className="text-md mb-12">This setup gives you fast, programmatic access to NetSuite data for exploration, validation, and storytelling—no need to wait for a dashboard. It&apos;s your first step to becoming the analytics engine your business actually needs.</p>
    </article>
  );
}