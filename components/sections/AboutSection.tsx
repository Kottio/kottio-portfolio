import Image from "next/image"
import SectionHeader from "../ui/sectionHeader"
import { useState } from "react"
import { bebas } from "@/lib/fonts"

export default function AboutSection() {
  const [showAbout, setShowAbout] = useState(false)

  return (<section id="about" className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] h-auto md:h-220 lg:h-190 xl:h-200 2xl:h-220 py-10 md:py-0">
    <Image
      src={"/LandingPage/land6.jpg"}
      fill
      alt="About me section background"
      className="object-cover object-bottom  "
      priority
    />
    <SectionHeader sectionName="ABOUT ME" white ></SectionHeader>



    <div className="absolute inset-0 bg-black/50 z-10"></div>

    <div className="relative z-10 h-full w-screen flex justify-center items-center  pt-15 md:pt-10 md:pt-20 px-4 md:px-0">
      <div className="flex flex-col md:flex-row h-auto w-full max-w-250 justify-center items-center gap-6 md:gap-10">
        <div className="text-white w-full md:max-w-150 flex flex-col">

          <span className={`${bebas.className} text-4xl md:text-5xl`}>Thomas Cottiaux</span>


          {/* <span className="text-2xl ">Innovation, Development, Optimization and Testing</span> */}
          <br />

          <span className="text-lg md:text-2xl">Building digital product that matters.</span>
          <br />

          <button
            onClick={() => setShowAbout(!showAbout)}
            className="px-4 md:px-6 py-2 md:py-3 bg-purple-700 text-white hover:bg-purple-600 transition-all w-fit text-sm md:text-base"
          >
            {showAbout ? "CLOSE" : "READ ABOUT ME"}
          </button>
          <br />

          <div
            className={`flex flex-col overflow-hidden transition-all duration-500 ease-in-out origin-top ${showAbout ? 'max-h-[1000px] opacity-100 scale-y-100' : 'max-h-0 opacity-0 p-0 scale-y-0'} bg-black/40 p-2 rounded-xl gap-2 text-sm md:text-base lg:gap-2 lg:text-sm xl:gap-3 2xl:gap-4 2xl:text-base`}
          >
            <span className="text">My path hasn't been typical. I started as a data engineer helping companies measure their environmental impact through ESG analytics. I built dashboards, ML models, and data infrastructure that powered sustainability at scale.</span>

            <span className="text"> But something was missing.</span>

            <span className="text">My experience working directly with local social organizations still echoed as the most driven I've ever been. I decided I needed to be close to the people creating change. So I spent years facilitating innovation workshops, led social innovation programs, mentored founders, and learned that for tech to be impactful, it didn't need to be complex—it needed to be centered around people. </span>

            <span className="text">Today, I combine both worlds. I help creative entrepreneurs, social ventures, and mission-driven organizations turn ambitious ideas into digital realities. Whether it's prototyping an MVP, building data infrastructure that actually helps make decisions, or facilitating design sprints to craft user experiences. I bring technical experience and creative empathy to every project. </span>

            <span className="text"> I've been pursuing photography and music all my life, and I make them an inherent part of my process, bringing stories and aesthetics to the work.</span>

            <span className="text">If you believe in your project and want to bring it to the next level, let's talk</span>
          </div>
        </div>
        <Image
          src={"/LandingPage/photomoi2.jpg"}
          width={400}
          height={400}
          alt="Thomas Cottiaux professional portrait"
          className="rounded grayscale hover:grayscale-0 transition-all h-auto w-full max-w-[300px] md:max-w-[400px] md:w-auto"
        ></Image>
      </div>

    </div>
  </section>
  )
}