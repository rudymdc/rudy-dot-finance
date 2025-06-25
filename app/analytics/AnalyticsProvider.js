// app/analytics/AnalyticsProvider.js
'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function AnalyticsProvider() {
  const pathname = usePathname();

  useEffect(() => {
    if (!window.gtag) return;
    window.gtag('config', 'G-TQ7XNLW00G', {
      page_path: pathname,
    });
  }, [pathname]);

  return null;
}