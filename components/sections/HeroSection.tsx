import Image from "next/image"
import { bebas } from "@/lib/fonts"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function HeroSection() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return <header className="h-auto md:h-screen flex flex-col">
    <div className="w-screen relative z-1 -mt-20 left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] 
     h-100 md:h-150 ">

      <Image
        src={"/LandingPage/land1.jpg"}
        fill
        alt="Landing page hero image"
        className="object-cover "
        priority />

      <div className="relative z-20 h-full px-5 md:px-20 -mt-10 flex items-center justify-between  bg-white/50">


        {/* logo */}
        <div className="flex items-center">
          <Image src={"/face.png"} alt="Thomas Cottiaux logo | KOTTIO logo" height={40} width={40} className="h-[80px] w-[80px] lg:h-[100px] lg:w-[100px]" ></Image>
          <span className="text-black z-20 text-2xl md:text-2xl lg:text-4xl " style={{ textShadow: '0px 1px 4px rgba(0,0,0,1)' }}> KOTTIO</span>
        </div>

        <nav className="hidden md:block">
          <ul className="flex gap-6 text-xl lg:text-2xl">
            <li><a href="#about" className="text-black hover:text-white transition-colors cursor-pointer" style={{ textShadow: '0px 1px 4px rgba(0,0,0,1)' }}>ABOUT</a></li>
            <li><a href="#projects" className="text-black hover:text-white transition-colors cursor-pointer" style={{ textShadow: '0px 1px 4px rgba(0,0,0,1)' }}>NOW</a></li>
            <li><a href="#contact" className="text-black hover:text-white transition-colors cursor-pointer" style={{ textShadow: '0px 1px 4px rgba(0,0,0,1)' }}>CONTACT</a></li>
          </ul>
        </nav>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden absolute right-5 text-purple-900 p-2 rounded border-2 border-purple-900 bg-white"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>


      </div>
    </div>

    {/* Mobile Menu - Full Screen Overlay */}
    {mobileMenuOpen && (
      <div className="fixed inset-0 bg-black/95 backdrop-blur-lg z-[100] md:hidden flex flex-col">
        {/* Close button */}
        <div className="flex justify-end p-6">
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="text-white p-2"
            aria-label="Close menu"
          >
            <X size={40} />
          </button>
        </div>

        {/* Menu items - centered */}
        <nav className="flex-1 flex items-center justify-center">
          <ul className="flex flex-col gap-8 text-white text-3xl text-center  items-center justify-center ">


            <li>
              <a
                href="#about"
                onClick={() => setMobileMenuOpen(false)}
                className="block hover:text-purple-500 transition-colors"
              >
                ABOUT
              </a>
            </li>
            <li>
              <a
                href="#projects"
                onClick={() => setMobileMenuOpen(false)}
                className="block hover:text-purple-500 transition-colors"
              >
                NOW
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block hover:text-purple-500 transition-colors"
              >
                CONTACT
              </a>
            </li>
            <li className="flex items-center justify-center  px-4 bg-white rounded-4xl ">
              <Image src={"/face.png"} alt="Thomas Cottiaux logo | KOTTIO logo" height={60} width={80} priority
              ></Image>
              <span className="text-black z-20 " style={{ textShadow: '0px 1px 4px rgba(0,0,0,1)' }}> KOTTIO</span>
            </li>

          </ul>

        </nav>
      </div>
    )}
    <div className="  absolute z-10 flex flex-col md:flex-row  mt-40 md:mt-35 2xl:mt-45 justify-between items-start md:items-end w-screen gap-10 md:gap-0">

      <div className="pt-3 sm:pt-6 md:pt-5 pl-5 md:pl-10 lg:pl-20  flex flex-col ">
        <span className="text-lg   md:text-2xl lg:text-3xl">C R E A T I V E</span>
        <h1 className={`text-6xl md:text-6xl lg:text-8xl xl:text-9xl text-purple-500 xl:leading-28 ${bebas.className} line-he`}>FULL STACK  <br></br>DEVELOPER</h1>
        <span className="text-2xl md:text-2xl lg:text-3xl xl:text-4xl ">& Data Consultant</span>
      </div>

      <div className="px-5 md:px-10 lg:px-20 flex flex-col md:flex-row gap-2 sm:gap-3 md:gap-5 w-full md:w-auto">
        <a
          href="#offers"
          className="border-1 px-6 md:px-8 lg:px-10 py-3 flex justify-center items-center text-base md:text-xl lg:text-xl rounded border-neutral-800 hover:bg-gray-100 1transition-colors cursor-pointer"
        >
          <span>MY OFFERS</span>
        </a>
        <a
          href="#projects"
          className="border-1 px-6 md:px-8 lg:px-10 py-3 flex justify-center items-center text-base md:text-xl lg:text-xl bg-purple-500 text-white rounded hover:bg-purple-600 transition-colors cursor-pointer"
        >
          <span>MY PROJECTS</span>
        </a>
      </div>
    </div>

    <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] h-[45vh] md:h-screen">
      <Image
        src={"/LandingPage/land2.jpg"}
        fill
        alt="Mountain landscape background"
        className="object-cover object-center md:object-bottom"
        priority
      />
    </div>




  </header >
}