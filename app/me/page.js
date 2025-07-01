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
          <h1 className="text-4xl font-bold mb-6 text-[var(--foreground)] border-b-5 border-indigo-500">About Me</h1>
          <p className="text-[var(--foreground)] mb-4">
            I&apos;m Rudy, a finance and strategy operator with a builder&apos;s mindset, focused on helping startups scale efficiently.
          </p>
          <p className="text-[var(--foreground)] mb-4">
            Over the years, I&apos;ve led FP&A, GTM analytics, and business intelligence functions at high growth companies, often wearing multiple hats to bridge financial strategy with technical execution. I&apos;m especially drawn to the edges of automation, data modeling, and emerging technology, constantly looking for ways to make better decisions faster.
          </p>
          <p className="text-[var(--foreground)] mb-4">
            My work often lives at the intersection of spreadsheets, SQL, and strategy decks, but I&apos;m just as comfortable writing Python scripts as I am refining a board presentation. I thrive in fast moving environments where experimentation is encouraged and complexity is embraced.
          </p>          
          <p className="text-[var(--foreground)]">
            Outside of work, I&apos;m a proud father of two, a collector of lightsabers and synths, and an active builder in the blockchain space. Whether it&apos;s developing trading bots, experimenting with new tools, or refining financial frameworks, this site is where I share the projects and ideas I&apos;m exploring along the way.        
          </p>          
        </div>

        <div className="item small inline-block lg:hidden">
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
            <li>Email: <Link href="mailto:hello@rudy.finance" target="_blank" className="text-indigo-500 dark:text-indigo-400 hover:underline">hello@rudy.finance</Link></li>
            <li><Link href="https://calendly.com/hello-rudy/30min" target="_blank" className="text-indigo-500 dark:text-indigo-400 hover:underline">Calendly</Link></li>
            <li><Link href="https://www.linkedin.com/in/rudy-martin-del-campo/" target="_blank" className="text-indigo-500 dark:text-indigo-400 hover:underline">LinkedIn</Link></li>
            <li><Link href="https://github.com/rudymdc" target="_blank" className="text-indigo-500 dark:text-indigo-400 hover:underline">Github</Link></li>
          </ul>
        </div>

        <div className="about-now">
          <h1 className="text-4xl font-bold mt-16 mb-1 text-[var(--foreground)]">What I&apos;m Doing Now</h1>
          <p className="text-[var(--foreground)] text-lg mb-2 text-gray-500 dark:text-gray-400 italic">
            Updated June 13, 2025
          </p>

          <ul className="list-disc pl-4">
            <li>Reading <Link href="https://press.stripe.com/poor-charlies-almanack" target="_blank" className="text-indigo-500 dark:text-indigo-400 hover:underline">Poor Charlie&apos;s Almanac</Link></li>
            <li>Playing <Link href="https://zelda.nintendo.com/tears-of-the-kingdom/ca/" target="_blank" className="text-indigo-500 dark:text-indigo-400 hover:underline">Legend of Zelda: Tears of the Kingdom</Link></li>
            <li>Exploring <Link href="https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/hyperevm" target="_blank" className="text-indigo-500 dark:text-indigo-400 hover:underline">HyperEVM</Link></li>
            <li>Refurbishing an <Link href="https://www.soundonsound.com/reviews/akai-mpc2000xl" target="_blank" className="text-indigo-500 dark:text-indigo-400 hover:underline">MPC 2000XL</Link></li>
            <li>Learning how to landscape and <Link href="https://thegrassoutlet.com/grass-care/" target="_blank" className="text-indigo-500 dark:text-indigo-400 hover:underline">lay new sod</Link></li>
          </ul>
        </div>


      </div>
    </>
  );
}