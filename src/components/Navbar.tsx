"use client";
import { FaGithub } from "react-icons/fa";
import { Lexend } from "next/font/google";

const logoFont = Lexend({
  subsets: ["latin"],
  weight: "600",
});

export default function Navbar() {
  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="bg-mainBg pt-6 px-6 max-w-6xl mx-auto flex items-center justify-between gap-2">
      <div>
        <span
          className={`${logoFont.className} text-[#E5E5E5] font-semibold tracking-tight text-xl sm:text-2xl`}
        >
          S.Huzaifa
        </span>
      </div>

      <div className="flex items-center space-x-4 sm:space-x-6">
        <button
          onClick={() => handleScroll("work")}
          className="text-[#A9A9A9] text-xs sm:text-sm hover:text-white transition-colors duration-200"
        >
          Work
        </button>
        <button
          onClick={() => handleScroll("about")}
          className="text-[#A9A9A9] text-xs sm:text-sm hover:text-white transition-colors duration-200"
        >
          About
        </button>
        <a
          href="https://github.com/HuzaifaCand"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#A9A9A9] hover:text-white bg-[#000000] rounded-full p-2 transition-colors duration-200"
        >
          <FaGithub size={22} />
        </a>
      </div>
    </nav>
  );
}
