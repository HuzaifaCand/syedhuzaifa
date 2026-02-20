import About from "@/components/About";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import ProjectsPreview from "@/components/ProjectsPreview";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | Syed Huzaifa",
  description: "",
};

export default function Home() {
  return (
    <div className="bg-mainBg">
      <Navbar />

      <HeroSection />
      <ProjectsPreview />
      <About />
    </div>
  );
}
