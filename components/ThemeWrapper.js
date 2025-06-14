"use client";

import useTheme from "@/lib/useTheme";

export default function ThemeWrapper({ children }) {
  const { theme } = useTheme();
  if (!theme) return null;

  return <div className={theme}>{children}</div>;
}