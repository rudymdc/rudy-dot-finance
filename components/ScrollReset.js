"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollReset() {
  const pathname = usePathname();

  useEffect(() => {
    const container = document.getElementById("main-scroll-container");

    setTimeout(() => {
      if (container) container.scrollTo({ top: 0, behavior: "smooth" });
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 10);
  }, [pathname]);

  return null;
}