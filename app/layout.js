// app/layout.js
import "./globals.css";
import TopNav from "@/components/TopNav";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import ThemeWrapper from "@/components/ThemeWrapper";

export const metadata = {
  title: "Rudy's Website",
  description: "Finance and strategy operator with a building tools at the intersection of code and capital. This is my digital sandbox.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeWrapper> {/* <-- Applies "light" or "dark" on the root div */}
          <div className="flex h-screen overflow-hidden font-sans text-[var(--foreground)] bg-[var(--background)]">
            <Sidebar />
            <div className="flex-1 h-screen overflow-y-auto">
              <TopNav />
              <main className="xl:px-0 px-6 py-10 max-w-3xl mx-auto">
                {children}
              </main>
              <Footer />
            </div>
          </div>        
        </ThemeWrapper>
      </body>
    </html>
  );
}