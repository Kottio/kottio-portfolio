import Image from "next/image";
import { bebas } from "@/lib/fonts";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function HeroSection() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="h-auto md:h-screen flex flex-col">
      <div
        className="w-screen relative z-1 -mt-20 left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] 
     h-100 md:h-150 "
      >
        <Image
          src={"/LandingPage/land1.jpg"}
          fill
          alt="Landing page hero image"
          className="object-cover"
          quality={85}
          priority
        />

        <div className="relative z-20 h-full px-5 md:px-20 -mt-10 flex items-center justify-between  bg-white/50">
          {/* logo */}
          <div className="flex items-center">
            <Image
              src={"/face.png"}
              alt="Thomas Cottiaux logo | KOTTIO logo"
              height={40}
              width={40}
              className="h-[80px] w-[80px] lg:h-[100px] lg:w-[100px]"
            ></Image>
            <span
              className="text-black z-20 text-2xl md:text-2xl lg:text-4xl "
              style={{ textShadow: "0px 1px 4px rgba(0,0,0,1)" }}
            >
              {" "}
              KOTTIO
            </span>
          </div>

          <nav className="hidden md:block">
            <ul className="flex gap-6 text-xl lg:text-2xl">
              <li>
                <a
                  href="#about"
                  className="text-black hover:text-white transition-colors cursor-pointer"
                  style={{ textShadow: "0px 1px 4px rgba(0,0,0,1)" }}
                >
                  ABOUT
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-black hover:text-white transition-colors cursor-pointer"
                  style={{ textShadow: "0px 1px 4px rgba(0,0,0,1)" }}
                >
                  NOW
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-black hover:text-white transition-colors cursor-pointer"
                  style={{ textShadow: "0px 1px 4px rgba(0,0,0,1)" }}
                >
                  CONTACT
                </a>
              </li>
            </ul>
          </nav>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden absolute right-5 text-black p-2 rounded border-1 border-black/30 bg-white"
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
                  href="/projects/mapshot"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block hover:text-purple-500 transition-colors"
                >
                  MAPSHOT
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
                  href="#about"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block hover:text-purple-500 transition-colors"
                >
                  ABOUT
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
                <Image
                  src={"/face.png"}
                  alt="Thomas Cottiaux logo | KOTTIO logo"
                  height={60}
                  width={80}
                  priority
                ></Image>
                <span
                  className="text-black z-20 "
                  style={{ textShadow: "0px 1px 4px rgba(0,0,0,1)" }}
                >
                  {" "}
                  KOTTIO
                </span>
              </li>
            </ul>
          </nav>
        </div>
      )}
      <div className="  absolute z-10 flex flex-col md:flex-row  mt-40 md:mt-45 2xl:mt-45 justify-between items-start md:items-end w-screen gap-10 md:gap-0">
        <div className="pt-3 sm:pt-6 md:pt-5 pl-5 md:pl-10 lg:pl-20  flex flex-col ">
          <span className="text-lg md:text-2xl lg:text-3xl">
            Hey, I'm Thomas 👋
          </span>
          <h1
            className={`text-5xl md:text-6xl lg:text-8xl xl:text-9xl text-black xl:leading-tight ${bebas.className}`}
          >
            {" "}
            FULL STACK DATA
          </h1>
          <span className="text-xl md:text-2xl lg:text-3xl xl:text-4xl leading-relaxed">
            From{" "}
            <span
              className="font-bold      
 text-purple-600"
            >
              Business
            </span>{" "}
            to{" "}
            <span className="font-bold text-purple-600">
              advanced analytics
            </span>
          </span>
        </div>
        <div className="px-5 md:px-10 lg:px-20 flex flex-col md:flex-row gap-3 md:gap-4 w-full md:w-auto">
          <a
            href="#offers"
            className="px-8 py-4 text-lg font-bold rounded-xl bg-white/90 backdrop-blur-sm text-gray-900 border-1 border-gray-600 hover:bg-gray-900 hover:text-white transition-all transform hover:scale-105 active:scale-95 text-center shadow-md"
          >
            What I Offer
          </a>
          <a
            href="/projects/mapshot"
            className="px-8 py-4 text-lg font-semibold rounded-xl bg-purple-600 text-white border-2 border-purple-600 hover:bg-purple-700 hover:border-purple-700 transition-all transform hover:scale-105 active:scale-95 text-center shadow-lg"
          >
            Current Project
          </a>
        </div>
      </div>

      <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] h-[45vh] md:h-screen">
        <Image
          src={"/LandingPage/land2.jpg"}
          fill
          alt="Mountain landscape background"
          className="object-cover object-center md:object-bottom"
          quality={85}
          priority
        />
      </div>
    </header>
  );
}
