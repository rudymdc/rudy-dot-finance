"use client";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    };

    requestAnimationFrame(() => {
      requestAnimationFrame(scrollToTop);
    });
  }, [pathname]);

  return null;
}