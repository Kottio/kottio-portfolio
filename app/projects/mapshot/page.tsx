"use client";
import EmailCapture from "@/components/projects/mapshot/emailCapture";
import FeaturesSection from "@/components/projects/mapshot/featuresSection";
import HeroSectionMapsShot from "@/components/projects/mapshot/heroSections";
import Footer from "@/components/sections/Footer";

export default function MapShot() {
  return (
    <>
      <HeroSectionMapsShot />
      <FeaturesSection />
      <EmailCapture />
      <Footer></Footer>
    </>
  );
}
