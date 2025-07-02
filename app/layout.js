// app/layout.js
import "./globals.css";
import TopNav from "@/components/TopNav";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import ThemeWrapper from "@/components/ThemeWrapper";
import Script from "next/script";
import AnalyticsProvider from "./analytics/AnalyticsProvider";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata = {
  title: "Rudy's Website",
  description: "Finance and strategy operator with a building tools at the intersection of code and capital. This is my digital sandbox.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=G-TQ7XNLW00G`}
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-TQ7XNLW00G');
          `}
        </Script>
      </head>
      <body className="overscroll-none touch-manipulation">
        <ThemeWrapper>
          <ScrollToTop />
          <AnalyticsProvider />
          <div className="flex h-screen font-sans text-[var(--foreground)] bg-[var(--background)]">
            <Sidebar />
            <div className="flex-1 flex flex-col w-full overflow-hidden">
              <div className="sticky top-0 z-20 bg-[var(--background)]">
                <TopNav />
              </div>
              <div className="flex-1 overflow-y-auto scrollable-container">
                <main className="xl:px-0 px-6 py-10 max-w-3xl mx-auto">
                  {children}
                </main>
                <Footer />
              </div>
            </div>
          </div>
        </ThemeWrapper>
      </body>
    </html>
  );
}