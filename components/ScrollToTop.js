"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    const scrollEl = document.querySelector(".scrollable-container");
    if (scrollEl) {
      scrollEl.scrollTo({ top: 0, behavior: "instant" });
    }
  }, [pathname]);

  return null;
}