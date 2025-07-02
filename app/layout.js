// app/layout.js
import "./globals.css";
import TopNav from "@/components/TopNav";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import ThemeWrapper from "@/components/ThemeWrapper";
import Script from "next/script";
import AnalyticsProvider from "./analytics/AnalyticsProvider";
import ScrollReset from "@/components/ScrollReset";
import ScrollToTop from "@/components/ScrollToTop";


export const metadata = {
  title: "Rudy's Website",
  description: "Finance and strategy operator with a building tools at the intersection of code and capital. This is my digital sandbox.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
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
      <body>
        <ThemeWrapper> {/* <-- Applies "light" or "dark" on the root div */}
          <AnalyticsProvider />
          <ScrollReset />
          <ScrollToTop />
          <div className="flex h-screen font-sans text-[var(--foreground)] bg-[var(--background)]">
            <Sidebar />
            <div className="flex-1 h-screen w-screen md:w-[calc(100%)]">
              <TopNav />
              <div id="main-scroll-container" className="scrollbar-color overflow-y-auto h-[calc(100vh-60px)] pb-40 md:pb-0">
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