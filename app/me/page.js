import { Permanent_Marker } from "next/font/google"

const permanentMarker = Permanent_Marker({
  weight: "400",
  subsets: ["latin"],
  display: "swap"
})

export default function MePage() {
  return (
    <>
      <div className="relative mb-6">
        <div className="item float-right ml-6 mt-2 mb-2 ">
          <div className="polaroid">
            <img
              src="/images/me4.jpg" // Replace with your actual image path
              alt="Rudy Martin Del Campo"
              className="w-75 object-cover"
            />
            <p className="caption text-black dark:text-black">
              <span className={permanentMarker.className}>Paris 2025</span>
            </p>
          </div>
        </div>

        <div className="about-me">
          <h1 className="text-4xl font-bold mb-8 text-[var(--foreground)] border-b-5 border-indigo-500">About Me</h1>
          <p className="text-[var(--foreground)] mb-8">
            I&apos;m Rudy — a finance and strategy operator with a builder&apos;s mindset. I work at the intersection of code and capital to help startups scale smartly and sustainably.
          </p>
          <p className="text-[var(--foreground)] mb-8">
            My experience spans FP&A, GTM analytics, and data infrastructure across high-growth startups. I enjoy automating workflows, modeling complex systems, and uncovering insights in messy data.
          </p>
          <p className="text-[var(--foreground)]">
            Outside of work, I&apos;m a new dad, endurance athlete in denial, and lover of sci-fi and specialty coffee. This site is my digital sandbox for sharing experiments, frameworks, and explorations.
          </p>          
        </div>

        <div className="about-contact">
          <h1 className="text-4xl font-bold mt-16 mb-1 text-[var(--foreground)]">Contact</h1>
          <p className="text-[var(--foreground)] text-lg mb-2 text-gray-500 dark:text-gray-400">
            Send me an email to say hi or connect via socials.
          </p>

          <ul className="list-disc pl-4">
            <li>Email: hello@rudy.finance</li>
            <li>Calendly</li>
            <li>LinkedIn</li>
            <li>Github</li>
          </ul>
        </div>

        <div className="about-now">
          <h1 className="text-4xl font-bold mt-16 mb-1 text-[var(--foreground)]">What I&apos;m Doing Now</h1>
          <p className="text-[var(--foreground)] text-lg mb-2 text-gray-500 dark:text-gray-400 italic">
            Updated June 13, 2025
          </p>

          <ul className="list-disc pl-4">
            <li>Reading Poor Charlie&apos;s Almanac</li>
            <li>Playing Legend of Zelda</li>
            <li>Exploring HyperEVM</li>
            <li>Refurbishing an MPC 2000XL</li>
            <li>Learning how to landscape and lay new sod</li>
          </ul>
        </div>


      </div>
    </>
  );
}