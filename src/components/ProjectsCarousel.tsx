"use client";

import { useRef } from "react";
import Image from "next/image";
import { projects, Project } from "@/data/projects";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface ProjectCarouselProps {
  activeProject: Project;
  setActiveProject: (p: Project) => void;
}

export default function ProjectsCarousel({
  activeProject,
  setActiveProject,
}: ProjectCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 250;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="w-full max-w-2xl relative">
      {/* Navigation Buttons - Hidden on mobile */}
      <button
        onClick={() => scroll("left")}
        className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 z-10 bg-[#1a1a1a] hover:bg-[#252525] text-white p-3 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white/20"
        aria-label="Scroll left"
      >
        <FaChevronLeft size={16} />
      </button>
      <button
        onClick={() => scroll("right")}
        className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 z-10 bg-[#1a1a1a] hover:bg-[#252525] text-white p-3 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white/20"
        aria-label="Scroll right"
      >
        <FaChevronRight size={16} />
      </button>

      {/* Carousel Container */}
      <div
        ref={scrollRef}
        className="flex gap-3 overflow-x-auto scrollbar-hide snap-x snap-mandatory px-4 py-2"
      >
        {projects.map((project) => {
          const isActive = activeProject.id === project.id;

          return (
            <button
              key={project.id}
              onClick={() => setActiveProject(project)}
              className={`relative flex-shrink-0 w-40 h-28 sm:w-48 sm:h-32 md:w-56 md:h-36 
                overflow-hidden rounded-xl transition-all duration-300 ease-out 
                snap-start group focus:outline-none focus:ring-2 focus:ring-white/30
                ${
                  isActive
                    ? "opacity-100 ring-2 ring-white/50"
                    : "opacity-60 hover:opacity-100 focus:opacity-100"
                }
              `}
              aria-label={`View ${project.title} project`}
            >
              <Image
                src={project.image}
                alt={project.imageAlt}
                fill
                sizes="(max-width: 640px) 160px, (max-width: 768px) 192px, 224px"
                className={`object-cover ${
                  isActive ? "brightness-100 scale-105" : "brightness-75"
                } group-hover:brightness-100 group-hover:scale-105 transition-all duration-300`}
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-all duration-300" />
              <span className="absolute bottom-2 left-3 right-3 text-xs sm:text-sm font-medium text-white/90 z-10 truncate">
                {project.title}
              </span>
            </button>
          );
        })}
      </div>

      {/* Scroll Indicator - Mobile only */}
      <div className="flex md:hidden justify-center gap-1.5 mt-3">
        {projects.map((project) => (
          <div
            key={project.id}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              activeProject.id === project.id
                ? "w-6 bg-white"
                : "w-1.5 bg-white/30"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
