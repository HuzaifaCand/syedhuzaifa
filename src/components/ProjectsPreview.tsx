"use client";

import { useState } from "react";
import { projects } from "@/data/projects";
import type { Project } from "@/data/projects";
import Image from "next/image";
import Link from "next/link";
import ProjectsCarousel from "./ProjectsCarousel";
import { FaArrowRight, FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function ProjectsPreview() {
  const [activeProject, setActiveProject] = useState<Project>(projects[0]);
  const brightness = "0.1";

  return (
    <section id="work" className="relative overflow-hidden py-24 min-h-[70vh]">
      {/* Background Image */}
      <Image
        src={activeProject.image}
        alt={activeProject.imageAlt}
        fill
        placeholder="blur"
        priority={false}
        sizes="(max-width: 768px) 100vw,
               (max-width: 1200px) 100vw,
               100vw"
        style={{
          objectFit: "cover",
          filter: `brightness(${brightness})`,
        }}
      />

      {/* Content */}
      <div className="flex md:flex-row flex-col gap-8 lg:gap-12 z-10 relative items-center max-w-7xl mx-auto px-6">
        {/* Mobile Carousel */}
        <div className="md:hidden w-full">
          <ProjectsCarousel
            activeProject={activeProject}
            setActiveProject={setActiveProject}
          />
        </div>

        {/* Project Info */}
        <div className="space-y-4 text-left md:pl-10 flex-1 max-w-2xl">
          <div className="space-y-2">
            <h2 className="font-semibold text-3xl sm:text-4xl text-white">
              {activeProject.title}
            </h2>
            <h4 className="font-light text-base sm:text-lg text-white/70">
              {activeProject.subtitle}
            </h4>
            {activeProject.description && (
              <p className="font-light text-sm sm:text-base text-white/50 leading-relaxed">
                {activeProject.description}
              </p>
            )}
          </div>

          {/* Tags */}
          {activeProject.tags && activeProject.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {activeProject.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-medium bg-white/10 text-white/80 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3 pt-2">
            <Link
              href={activeProject.href}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-black font-medium rounded-lg hover:bg-[#E5E5E5] transition-colors duration-200 group"
            >
              View Project
              <FaArrowRight
                className="group-hover:translate-x-1 transition-transform duration-200"
                size={14}
              />
            </Link>

            {activeProject.liveUrl && (
              <a
                href={activeProject.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-white/30 text-white font-medium rounded-lg hover:border-white/60 hover:bg-white/5 transition-all duration-200"
              >
                <FaExternalLinkAlt size={14} />
                Live Demo
              </a>
            )}

            {activeProject.github && (
              <a
                href={activeProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-white/30 text-white font-medium rounded-lg hover:border-white/60 hover:bg-white/5 transition-all duration-200"
              >
                <FaGithub size={16} />
                GitHub
              </a>
            )}
          </div>
        </div>

        {/* Desktop Carousel */}
        <div className="hidden md:block">
          <ProjectsCarousel
            activeProject={activeProject}
            setActiveProject={setActiveProject}
          />
        </div>
      </div>
    </section>
  );
}
