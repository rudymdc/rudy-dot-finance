import { Permanent_Marker } from "next/font/google"
import Image from "next/image";
import Link from "next/link";

const permanentMarker = Permanent_Marker({
  weight: "400",
  subsets: ["latin"],
  display: "swap"
})

export default function MePage() {
  return (
    <>
      <div className="relative mb-6">
        <div className="item large float-right ml-6 mt-2 mb-2 hidden lg:inline-block">
          <div className="polaroid">
            <Image
              src="/images/me4.jpg" // Replace with your actual image path
              alt="Rudy Martin Del Campo"
              width={3724}
              height={5586}
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

        <div className="item small px-4 pt-4 pb-2 inline-block lg:hidden">
          <div className="polaroid">
            <Image
              src="/images/me4.jpg" // Replace with your actual image path
              alt="Rudy Martin Del Campo"
              width={3724}
              height={5586}
              className="w-75 object-cover"
            />
            <p className="caption text-black dark:text-black">
              <span className={permanentMarker.className}>Paris 2025</span>
            </p>
          </div>
        </div>

        <div className="about-contact">
          <h1 className="text-4xl font-bold mt-16 mb-1 text-[var(--foreground)]">Contact</h1>
          <p className="text-[var(--foreground)] text-lg mb-2 text-gray-500 dark:text-gray-400">
            Send me an email to say hi or connect via socials.
          </p>

          <ul className="list-disc pl-4">
            <li>Email: <Link href="mailto:hello@rudy.financ" target="_blank" className="text-indigo-500 dark:text-indigo-400">hello@rudy.finance</Link></li>
            <li>Calendly</li>
            <li><Link href="https://www.linkedin.com/in/rudy-martin-del-campo/" target="_blank" className="text-indigo-500 dark:text-indigo-400">LinkedIn</Link></li>
            <li><Link href="https://github.com/rudymdc" target="_blank" className="text-indigo-500 dark:text-indigo-400">Github</Link></li>
          </ul>
        </div>

        <div className="about-now">
          <h1 className="text-4xl font-bold mt-16 mb-1 text-[var(--foreground)]">What I&apos;m Doing Now</h1>
          <p className="text-[var(--foreground)] text-lg mb-2 text-gray-500 dark:text-gray-400 italic">
            Updated June 13, 2025
          </p>

          <ul className="list-disc pl-4">
            <li>Reading <Link href="https://press.stripe.com/poor-charlies-almanack" target="_blank" className="text-indigo-500 dark:text-indigo-400">Poor Charlie&apos;s Almanac</Link></li>
            <li>Playing <Link href="https://zelda.nintendo.com/tears-of-the-kingdom/ca/" target="_blank" className="text-indigo-500 dark:text-indigo-400">Legend of Zelda: Tears of the Kingdom</Link></li>
            <li>Exploring <Link href="https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/hyperevm" target="_blank" className="text-indigo-500 dark:text-indigo-400">HyperEVM</Link></li>
            <li>Refurbishing an <Link href="https://www.soundonsound.com/reviews/akai-mpc2000xl" target="_blank" className="text-indigo-500 dark:text-indigo-400">MPC 2000XL</Link></li>
            <li>Learning how to landscape and <Link href="https://thegrassoutlet.com/grass-care/" target="_blank" className="text-indigo-500 dark:text-indigo-400">lay new sod</Link></li>
          </ul>
        </div>


      </div>
    </>
  );
}