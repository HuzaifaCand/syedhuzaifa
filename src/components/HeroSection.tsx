"use client";

import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="flex flex-col lg:flex-row max-w-6xl gap-12 lg:gap-16 pt-12 pb-24 px-6 items-center lg:items-start mx-auto">
      {/* Profile Image */}
      <div className="flex-shrink-0">
        <Image
          alt="Picture of Syed Huzaifa (High school graduation)"
          src="/bw.png"
          priority
          width={400}
          height={600}
          className="object-cover rounded-2xl w-full max-w-[300px] lg:max-w-[400px] h-auto"
        />
      </div>

      {/* Text Content */}
      <div className="flex flex-col justify-center space-y-6 text-center lg:text-left">
        <div className="space-y-3">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl text-white font-semibold tracking-tight">
            Building digital experiences
          </h1>
          <p className="text-lg sm:text-xl text-[#A9A9A9] font-light">
            Builder, Architect, Engineer
          </p>
        </div>

        <p className="text-base sm:text-lg text-[#808080] font-light leading-relaxed max-w-2xl">
          I love identifying problems in the systems that I am in and building
          web applications that can solve them. Currently pursuing a degree in
          Computer Science at City University of Hong Kong.
        </p>

        <div className="flex gap-4 justify-center lg:justify-start pt-2">
          <button
            onClick={() =>
              document
                .getElementById("work")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-6 py-3 bg-white text-black font-medium rounded-lg hover:bg-[#E5E5E5] transition-colors duration-200"
          >
            View Work
          </button>
          <button
            onClick={() =>
              document
                .getElementById("about")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-6 py-3 border border-[#373737] text-white font-medium rounded-lg hover:border-[#A9A9A9] transition-colors duration-200"
          >
            About Me
          </button>
        </div>
      </div>
    </section>
  );
}
