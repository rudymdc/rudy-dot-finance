// app/layout.js
import "./globals.css";
import TopNav from "@/components/TopNav";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import ThemeWrapper from "@/components/ThemeWrapper";
import Script from "next/script";
import AnalyticsProvider from "./analytics/AnalyticsProvider";
import ScrollToTop from "@/components/ScrollToTop";
import ScrollReset from "@/components/ScrollReset";

export const metadata = {
  title: "Rudy's Website",
  description: "Finance and strategy operator with a building tools at the intersection of code and capital. This is my digital sandbox.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        {/* Scripts omitted for brevity */}
      </head>
      <body className="overscroll-none touch-manipulation overflow-x-hidden w-screen">
        <ThemeWrapper>
          <ScrollToTop />
          <ScrollReset />
          <AnalyticsProvider />

          {/* Fixed TopNav */}
          <div className="fixed top-0 z-30 w-full bg-[var(--background)]">
            <TopNav />
          </div>

          {/* Spacer to prevent content overlap */}
          <div className="h-[60px] shrink-0" />

          {/* Page layout */}
          <div className="flex h-[calc(100vh-60px)] w-full font-sans text-[var(--foreground)] bg-[var(--background)] overflow-hidden">
            <Sidebar />

            {/* Scrollable main content area */}
            <div className="flex-1 flex flex-col">
              <div id="main-scroll-container" className="flex-1 overflow-y-auto">
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