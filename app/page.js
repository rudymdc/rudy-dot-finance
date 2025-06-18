"use client";

import Link from "next/link";
import useTheme from "@/lib/useTheme";
import Image from "next/image";

export default function Home() {
  const { theme, toggleTheme } = useTheme();
  if (!theme) return null;

  return (
          <>
            <div className="intro mb-18">
              {/* Heading */}

              {/* Image floated to the right */}
              <div className="intro-img relative mb-6">
              <h1 className="text-4xl font-bold mb-6 text-[var(--foreground)] border-b-5 border-indigo-500">
                Hey, I&apos;m Rudy!
              </h1>

                <p className="text-[var(--foreground)] mb-6">
                  I&apos;m a finance and strategy operator with a builder&apos;s mindset — blending code and capital to help startups scale.
                  I&apos;ve led FP&A, GTM analytics, and data infrastructure at high-growth companies, and I&apos;m currently exploring the
                  edges of automation, investing, and onchain experiments.
                </p>
                <p className="text-[var(--foreground)] mb-6">
                  Outside of work, I&apos;m a new dad, an endurance athlete in denial, and a sucker for great coffee and sci-fi. This
                  site is where I share projects, frameworks, and ideas I&apos;m refining along the way.
                </p>
              </div>
            </div>

            <div className="main-section mb-18">
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
            </div>

            <div className="main-section mb-18">
              <h2 className="text-3xl font-bold mb-1 text-[var(--foreground)]">Projects</h2>
              <p className="text-[var(--foreground)] text-lg mb-5 text-gray-500 dark:text-gray-400">
                  Open-source side projects that fuel my curiosity for expirimentation.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[{
                  title: "LiquidLaunch Sniper",
                  desc: "Marginal ROI analysis on ad spend, building from weekly performance to an annualized budget plan.",
                  href: "/case-studies/gtm-roi",
                  img: "/images/gtm.jpg", // Replace with your actual image paths
                  tags: ["Web3", "Event Listening", "Python"],
                }, {
                  title: "Telegram Chat Analytics",
                  desc: "SaaS revenue model built bottoms-up by cohort. Tracks subscription behavior over time.",
                  href: "/case-studies/revenue-ops",
                  img: "/images/revops.jpg",
                  tags: ["Telegram API", "Charting", "Python"],
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