import Image from "next/image"
import { bebas } from "@/lib/fonts"

export default function HeroSection() {
  return <div className="h-screen flex flex-col">
    <div className="w-screen relative z-1 -mt-20 left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] h-32 sm:h-40 md:h-48 lg:h-150">

      <Image
        src={"/LandingPage/land1.jpg"}
        fill
        alt="Landing page hero image"
        className="object-cover"
        priority
      />


      <div className="relative z-20 flex items-center justify-between h-full px-5 md:px-10 lg:px-20 -mt-10 ">

        <div className="flex items-center">
          <Image src={"/face.png"} alt="face" height={40} width={40} className="sm:h-[50px] sm:w-[50px] md:h-[80px] md:w-[80px] lg:h-[100px] lg:w-[100px]" ></Image>
          <span className="text-black z-20 text-xl sm:text-2xl md:text-2xl lg:text-4xl " style={{ textShadow: '0px 1px 4px rgba(0,0,0,1)' }}> KOTTIO</span>
        </div>

        <ul className="flex justify-between gap-2 sm:gap-3 md:gap-6 lg:gap-0 lg:w-1/3 text-sm sm:text-base md:text-xl lg:text-2xl">
          <li className="text-white hover:text-black transition-colors cursor-pointer" style={{ textShadow: '0px 1px 4px rgba(0,0,0,1)' }}>ABOUT</li>
          <li className="text-white hover:text-black transition-colors cursor-pointer" style={{ textShadow: '0px 1px 4px rgba(0,0,0,1)' }}>NOW</li>
          <li className="text-white hover:text-black transition-colors cursor-pointer" style={{ textShadow: '0px 1px 4px rgba(0,0,0,1)' }}>CONTACT</li>
        </ul>
      </div>
    </div>

    <div className="absolute z-10 flex flex-col md:flex-row mt-12 sm:mt-16 md:mt-40 justify-between items-start md:items-end w-screen gap-4 sm:gap-6 md:gap-0">

      <div className="pt-3 sm:pt-6 md:pt-5 pl-5 md:pl-10 lg:pl-20  flex flex-col ">
        <span className="text-lg md:text-2xl lg:text-3xl">C R E A T I V E</span>
        <span className={`text-4xl md:text-6xl lg:text-8xl xl:text-9xl text-purple-500 xl:leading-28 ${bebas.className} line-he`}>FULL STACK  <br></br>DEVELOPER</span>
        <span className="text-2xl md:text-2xl lg:text-3xl xl:text-4xl ">& Data Consultant</span>
      </div>

      <div className="px-5 md:px-10 lg:px-20 flex flex-col md:flex-row gap-2 sm:gap-3 md:gap-5 w-full md:w-auto">
        <div className="border-1 px-4 sm:px-6 md:px-8 lg:px-10 py-2 sm:py-3 flex justify-center items-center text-sm sm:text-base md:text-xl lg:text-xl rounded border-neutral-800"><span>MY OFFERS</span></div>
        <div className="border-1 px-4 sm:px-6 md:px-8 lg:px-10 py-2 sm:py-3 flex justify-center items-center text-sm sm:text-base md:text-xl lg:text-xl bg-purple-500 text-white rounded"><span>MY PROJECTS</span></div>
      </div>
    </div>

    <div className="w-screen relative  left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] h-full ">
      <Image
        src={"/LandingPage/land2.jpg"}
        fill
        alt="mountains"
        className="object-cover object-bottom "
        priority
      />
    </div>




  </div>
}