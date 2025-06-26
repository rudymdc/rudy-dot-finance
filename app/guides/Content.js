// app/guides/Content.js
"use client";

import Image from "next/image";
import Link from "next/link";

export default function Content() {
  return (
    <>
      <div className="main-section mb-18">
        <h1 className="text-4xl font-bold mb-4 text-[var(--foreground)] border-b-5 border-indigo-500">
          Guides
        </h1>
        <p className="text-[var(--foreground)] text-lg mb-5 text-gray-500 dark:text-gray-400">
          Playbooks I&apos;ve built from real world use of Python, SQL, and data tools to drive better decisions.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[{
            title: "macOS Setup for FinDev",
            desc: "Get your Mac environment ready for data + finance workflows.",
            href: "/guides/setting-up-a-mac-for-finance-development",
            img: "/images/budget.jpg", // Replace with your actual image paths
            tags: ["macOS", "System Tools", "Installation"],
          }, {
            title: "Windows Setup for FinDev",
            desc: "Get your Windows machine ready for data + finance workflows.",
            href: "/guides/setting-up-a-windows-pc-for-finance-development",
            img: "/images/gtm.jpg",
            tags: ["Windows", "System Tools", "Installation"],
          }, {
            title: "FinDev for Netsuite: SQL",
            desc: "How to query NetSuite data with SuiteAnalytics Connect + DBeaver to unblock Finance.",
            href: "/guides/findev-netsuite-1",
            img: "/images/retention.jpg",
            tags: ["Netsuite", "SQL", "Analysis"],
          }, {
            title: "FinDev for Netsuite: Python",
            desc: "Rapidly prototype analysis and visualize insights from NetSuite — no ETL needed",
            href: "/guides/findev-netsuite-2",
            img: "/images/data.jpg",
            tags: ["Netsuite", "Python", "Visualization"],
          }].map(({ title, desc, href, img, tags }, idx) => (
            <Link key={idx} href={href ? href : "/"}>
              <div
                className="border border-gray-300 dark:border-gray-700 rounded-md overflow-hidden hover:border-accent transition bg-[var(--background)] shadow-sm"
              >
                {img && (
                  <Image
                    src={img}
                    alt={title}
                    width={640}
                    height={160}
                    className="w-full h-40 object-cover border-b border-gray-200 dark:border-gray-700"
                  />
                )}
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-1 text-[var(--foreground)]">
                    {href ? (
                      <Link href={href} className="text-accent hover:underline">
                        {title}
                      </Link>
                    ) : (
                      title
                    )}
                  </h3>
                  <p className="text-sm text-gray-700 dark:text-gray-400">{desc}</p>
                  {tags && tags.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {tags.map((tag, tagIdx) => (
                        <span
                          key={tagIdx}
                          className="text-xs px-2 py-1 bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}                      
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}


