import Image from "next/image";

export default function Mid() {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <Image
        className=""
        src="/xwai.png" // Replace with your memecoin logo
        alt="XWIFTRX Memecoin Logo"
        width={180}
        height={180}
        priority
      />
      <div className="flex gap-4 items-center justify-center w-full flex-col sm:flex-row mt-6">
        <a
          className="rounded-full border border-solid border-[#468284] transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-12 px-5 sm:px-7"
          href="https://meme.cooking/meme/728"
          target="_blank"
          rel="noopener noreferrer"
        >
          Buy XWIFTRX Ai Now
        </a>
        <a
          className="rounded-full border border-solid border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-12 px-5 sm:px-7 sm:min-w-44"
          href="#roadmap"
          target="_blank"
          rel="noopener noreferrer"
        >
          See Roadmap
        </a>
      </div>
    </div>
  );
}
