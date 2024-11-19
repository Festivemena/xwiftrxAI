import { FaXTwitter, FaTelegram } from "react-icons/fa6";
import About from "@/components/About";
import FAQ from "@/components/Faq";
import Header from "@/components/Header";
import Mid from "@/components/Mid";
import Image from "next/image";
import Roadmap from "@/components/Roadmap";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] bg-img bg-cover items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-inter)] ">
      <Header />
      <main className="flex flex-col opacity-100 animate-fade-in gap-8 row-start-2 items-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-white text-center">
          Welcome to XWIFTRX AI 🚀
        </h1>
        <p className="text-lg sm:text-xl text-center text-white opacity-80">
          The memecoin that’s taking the world by storm! Join the revolution.
        </p>
        <Mid />
        <About />
        <Roadmap />
        <FAQ />
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center text-white">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://x.com/XwiftrxAi"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaXTwitter size={24} />
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://t.me/xwiftrxcommunity"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTelegram size={24} />
        </a>
      </footer>
    </div>
  );
}
