"use client";

import Link from "next/link";
import useTheme from "@/lib/useTheme";
import Image from "next/image";
import { Mail, Calendar } from "lucide-react";


export default function Home() {
  const { theme, toggleTheme } = useTheme();
  if (!theme) return null;

  return (
          <>
            <div className="intro mb-18">
              <h1 className="text-4xl font-bold mb-6 text-[var(--foreground)] border-b-5 border-indigo-500">
                Hey, I&apos;m Rudy!
              </h1>
              <p className="text-[var(--foreground)] mb-6">
                I&apos;m a finance and strategy operator with a builder&apos;s mindset — blending code and capital to help startups scale.
                I&apos;ve led FP&A, GTM analytics, and business intelligence at high-growth companies and I&apos;m currently exploring the
                edges of automation, investing, and onchain experiments.
              </p>
              <p className="text-[var(--foreground)] mb-6">
                Outside of work — I&apos;m a new dad, a blockchain enthusiast, and a sucker for great coffee and sci-fi. This
                site is where I share projects, frameworks, and ideas I&apos;m refining along the way.
              </p>
              <div>
                <Link href="mailto:hello@rudy.finance" target="_blank">
                  <button className="bg-transparent hover:bg-indigo-500 text-indigo-500 hover:text-gray-50 border border-indigo-500 font-semibold py-2 px-4 mr-4 rounded inline-flex items-center">
                    <Mail size={16} className="mr-2" />
                    <span>Email</span>
                  </button>
                </Link>
                <Link href="https://calendly.com/hello-rudy/30min" target="_blank">
                  <button className="bg-transparent hover:bg-indigo-500 text-indigo-500 hover:text-gray-50 border border-indigo-500 font-semibold py-2 px-4 mr-4 rounded inline-flex items-center">
                    <Calendar size={16} className="mr-2" />
                    <span>Book Time</span>
                  </button>
                </Link>
              </div>
            </div>

            {/* <div className="main-section mb-18">
              <h2 className="text-3xl font-bold mb-1 text-[var(--foreground)]">Case Studies</h2>
              <p className="text-[var(--foreground)] text-lg mb-5 text-gray-500 dark:text-gray-400">
                Long-form debriefs on a variety of projects I&apos;ve worked on over the years.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[{
                  title: "GTM + Growth Strategy",
                  desc: "Marginal ROI analysis on ad spend, building from weekly performance to an annualized budget plan.",
                  href: "/case-studies/gtm-roi",
                  img: "/images/gtm.jpg", // Replace with your actual image paths
                  tags: ["SaaS", "GTM", "Strategic Finance"],
                }, {
                  title: "Revenue Operations",
                  desc: "SaaS revenue model built bottoms-up by cohort. Tracks subscription behavior over time.",
                  href: "/case-studies/revenue-ops",
                  img: "/images/revops.jpg",
                  tags: ["SaaS", "Revenue", "Modeling"],
                }, {
                  title: "Product & Retention",
                  desc: "Customer engagement funnel mapped to financial outcome. Tools to detect churn-risk cohorts.",
                  img: "/images/retention.jpg",
                  tags: ["SaaS", "Retention", "Predictive Analytics"],
                }, {
                  title: "Data Engineering & KPIs",
                  desc: "Defined subscription metric standards, built cohort tables, and applied regression for forecasting.",
                  img: "/images/data.jpg",
                  tags: ["SaaS", "Data", "Statistical Modeling"],
                }, {
                  title: "Sales & Comp Planning",
                  desc: "Collaborated with Sales to build tiered commission plans aligned to CAC payback targets.",
                  img: "/images/sales.jpg",
                  tags: ["FP&A", "Sales", "Budgeting"],
                }, {
                  title: "G&A Budgeting",
                  desc: "Built headcount and department-level budgets. Forecast scenarios aligned to long-range planning.",
                  img: "/images/budget.jpg",
                  tags: ["FP&A", "Headcount", "Budgeting"],
                }].map(({ title, desc, href, img, tags }, idx) => (
                  <div
                    key={idx}
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
                ))}
              </div>
            </div> */}


            <div className="main-section mb-18">
              <h2 className="text-3xl font-bold mb-1 text-[var(--foreground)]">Guides</h2>
              <p className="text-[var(--foreground)] text-lg mb-5 text-gray-500 dark:text-gray-400">
                Hands-on playbooks for using Python, SQL, and data tools to drive better business decisions.
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

            <div className="main-section mb-18">
              <h2 className="text-3xl font-bold mb-1 text-[var(--foreground)]">Projects</h2>
              <p className="text-[var(--foreground)] text-lg mb-5 text-gray-500 dark:text-gray-400">
                  Open-source side projects that fuel my curiosity for experimentation.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[{
                  title: "LiquidLaunch Sniper",
                  desc: "Marginal ROI analysis on ad spend, building from weekly performance to an annualized budget plan.",
                  // href: "/",
                  img: "/images/gtm.jpg", // Replace with your actual image paths
                  tags: ["Coming Soon"],
                  // tags: ["Web3", "Event Listening", "Python"],
                }, {
                  title: "Telegram Chat Analytics",
                  desc: "SaaS revenue model built bottoms-up by cohort. Tracks subscription behavior over time.",
                  // href: "/",
                  img: "/images/revops.jpg",
                  tags: ["Coming Soon"],
                  // tags: ["Telegram API", "Charting", "Python"],
                }].map(({ title, desc, href, img, tags }, idx) => (
                  <div
                    key={idx}
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
                ))}
              </div>
            </div>

          </>

  );
}