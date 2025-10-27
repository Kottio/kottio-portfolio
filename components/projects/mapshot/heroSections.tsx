import Image from "next/image"
import { bebas } from "@/lib/fonts"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import EmailCaptureForm from "./emailCaptureForm"

export default function HeroSectionMapsShot() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return <header className="h-auto md:h-screen flex flex-col">
    <div className="w-screen relative z-1 -mt-20 left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] 
     h-90 md:h-150 ">

      <Image
        src={"/LandingPage/land1.jpg"}
        fill
        alt="Landing page hero image"
        className="object-cover"
        quality={85}
        priority />

      <div className="relative z-20 h-full px-5 md:px-20 -mt-10 flex items-center justify-between  bg-white/50">


        {/* logo */}
        <a href="/" className="flex items-center hover:opacity-80 transition-opacity">
          <Image src={"/face.png"} alt="Thomas Cottiaux logo | KOTTIO logo" height={40} width={40} className="h-[70px] w-[70px] lg:h-[100px] lg:w-[100px]" ></Image>
          <span className="text-black z-20 text-2xl md:text-2xl lg:text-4xl " style={{ textShadow: '0px 1px 4px rgba(0,0,0,1)' }}> KOTTIO</span>
        </a>

        <nav className="hidden md:block">
          <ul className="flex gap-6 text-xl lg:text-2xl">
            <li><a href="/#about" className="text-black hover:text-white transition-colors cursor-pointer" style={{ textShadow: '0px 1px 4px rgba(0,0,0,1)' }}>ABOUT</a></li>
            <li><a href="/#projects" className="text-black hover:text-white transition-colors cursor-pointer" style={{ textShadow: '0px 1px 4px rgba(0,0,0,1)' }}>NOW</a></li>
            <li><a href="/#contact" className="text-black hover:text-white transition-colors cursor-pointer" style={{ textShadow: '0px 1px 4px rgba(0,0,0,1)' }}>CONTACT</a></li>
          </ul>
        </nav>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden absolute right-5 text-black p-2 rounded shadow-lg border-1 border-black/30 bg-white"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>


      </div>
    </div>

    {/* Mobile Menu - Full Screen Overlay */}
    {mobileMenuOpen && (
      <div className="fixed inset-0 bg-black/95 backdrop-blur-lg z-[100] md:hidden flex flex-col ">
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
                href="/#about"
                onClick={() => setMobileMenuOpen(false)}
                className="block hover:text-purple-500 transition-colors"
              >
                ABOUT
              </a>
            </li>
            <li>
              <a
                href="/#projects"
                onClick={() => setMobileMenuOpen(false)}
                className="block hover:text-purple-500 transition-colors"
              >
                NOW
              </a>
            </li>
            <li>
              <a
                href="/#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block hover:text-purple-500 transition-colors"
              >
                CONTACT
              </a>
            </li>
            <li>
              <a
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center px-4 bg-white rounded-4xl hover:opacity-80 transition-opacity"
              >
                <Image src={"/face.png"} alt="Thomas Cottiaux logo | KOTTIO logo" height={60} width={80} priority />
                <span className="text-black z-20" style={{ textShadow: '0px 1px 4px rgba(0,0,0,1)' }}> KOTTIO</span>
              </a>
            </li>

          </ul>

        </nav>
      </div>
    )}
    <div className="absolute z-10 flex flex-col md:flex-row mt-35 md:mt-40 2xl:mt-45 justify-between items-start md:items-center w-full px-5 md:px-10 lg:px-20 gap-8 md:gap-10 lg:gap-16 ">

      {/* Left side - Headline and description */}
      <div className="flex flex-col flex-1 max-w-3xl md:bg-white/60 md:p-5 rounded-2xl">
        <h1 className={`text-5xl md:text-5xl lg:text-6xl xl:text-8xl xl:mt-10  text-black xl:leading-tight mb-4 ${bebas.className}`}>
          Where Will You Photograph Next?
        </h1>
        <p className="text-lg md:text-2xl lg:text-3xl text-purple-600 leading-relaxed  rounded-2xl  ">
          <span className="font-bold ">Mapshot</span> is a living map of photography spots, enriched by every photographer who visits. Discover places, get inspired by others' work, and add your perspective.
        </p>
      </div>

      {/* Right side - Email Form Card (hidden on mobile, shows below on mobile) */}
      <div className="hidden md:block flex-shrink-0 w-full md:w-[400px] lg:w-[450px]">
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-6 lg:p-8 border-1 border-black/10">
          <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
            Join the Waitlist
          </h3>
          <p className="text-gray-600 mb-4">
            Get early access to Mapshot and help us shape it!
          </p>

          <EmailCaptureForm />
          <p className="text-center text-xs text-gray-500 mt-2">
            We respect your privacy. No spam, just updates.
          </p>
        </div>
      </div>

      {/* Mobile - Email Form below text */}
      <div className="block md:hidden w-full">
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-5 border-1 border-black/10">
          <h3 className="text-xl font-bold text-gray-900 mb-3">
            Join the Waitlist
          </h3>
          <p className="text-gray-600 mb-4">
            Get early access to Mapshot and help us shape it!
          </p>
          <EmailCaptureForm />
          <p className="text-center text-xs text-gray-500 mt-2">
            We respect your privacy. No spam, just updates.
          </p>
        </div>
      </div>

    </div>

    <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] h-[62vh] mt-10 md:mt-0 md:h-screen">
      <Image
        src={"/LandingPage/land2.jpg"}
        fill
        alt="Mountain landscape background"
        className="object-cover object-center md:object-bottom"
        quality={85}
        priority
      />
    </div>




  </header >
}