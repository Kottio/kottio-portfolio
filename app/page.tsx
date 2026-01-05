"use client";

import HeroSection from "@/components/sections/HeroSection";
import OffersSection from "@/components/sections/OffersSection";
import CourseSection from "@/components/sections/CourseSection";
import ProjectSection from "@/components/sections/ProjectsSection";
import StackSection from "@/components/sections/StackSection";
import TrustedBySection from "@/components/sections/TrustedBySection";
import AboutSection from "@/components/sections/AboutSection";
// import PhotoCtaSection from "@/components/sections/PhotoCtaSection";
// import TechnicalSection from "@/components/sections/TechnicalSection";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <HeroSection></HeroSection>
      <main>
        {/* <OffersSection></OffersSection> */}
        <CourseSection></CourseSection>
        <ProjectSection></ProjectSection>
        <StackSection></StackSection>
        <AboutSection></AboutSection>
        <TrustedBySection></TrustedBySection>
        {/* <PhotoCtaSection></PhotoCtaSection> */}
        {/* <TechnicalSection></TechnicalSection> */}
      </main>
      <Footer></Footer>
    </>
  );
}
