"use client";





import HeroSection from "@/components/sections/HeroSection";
import OffersSection from "@/components/sections/OffersSection";
import ProjectSection from "@/components/sections/ProjectsSection";
import StackSection from "@/components/sections/StackSection";
import TrustedBySection from "@/components/sections/TrustedBySection";
import AboutSection from "@/components/sections/AboutSection";
import PhotoCtaSection from "@/components/sections/PhotoCtaSection";
import Footer from "@/components/sections/Footer";



export default function Home() {
  return (
    <section className=" text-neutral-800 bg-white">

      <HeroSection></HeroSection>

      <OffersSection></OffersSection>

      <ProjectSection></ProjectSection>

      <StackSection></StackSection>

      <AboutSection></AboutSection>

      <TrustedBySection></TrustedBySection>

      <PhotoCtaSection></PhotoCtaSection>

      <Footer></Footer>



    </section>





  )
}

