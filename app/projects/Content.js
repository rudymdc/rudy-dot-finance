// app/projects/Content.js
"use client";

import Image from "next/image";
import Link from "next/link";

export default function Content() {
  return (
    <>
      <div className="main-section mb-18">
        <h1 className="text-4xl font-bold mb-4 text-[var(--foreground)] border-b-5 border-indigo-500">
          Projects
        </h1>
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
                  {title}
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


