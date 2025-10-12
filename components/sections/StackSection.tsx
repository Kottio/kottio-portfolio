
import Image from "next/image"
import SectionHeader from "../ui/sectionHeader"
import { techStackData, techStackDev } from "@/lib/techStack"

export default function StackSection() {
  return (<section id="tech-stack" className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] h-auto md:h-auto lg:h-190 xl:h-200 2xl:h-220 py-10 md:py-0">
    <Image
      src={"/LandingPage/land7.jpg"}
      fill
      alt="Technology stack section background"
      className="object-cover object-bottom"
      priority
    />
    <div className="absolute inset-0 bg-black/40 z-0"></div>
    <SectionHeader sectionName="TECH STACK" white ></SectionHeader>


    {/* Tech Stack & Skills Section - overlaid on image */}
    <div className="relative z-10 h-full flex flex-col w-screen items-center px-4 md:p-20 lg:p-30 xl:p-20 2xl:p-10">

      <div className="w-full flex md:flex-row flex-col justify-center mt-15 gap-4 md:gap-20 2xl:mt-20 xl:mt-10">
        {/* DEV Section - Left */}

        <div className="flex flex-col md:flex-row justify-center items-center gap-3 bg-black rounded-2xl p-4 md:p-5 w-full md:w-auto h-70 lg:h-140 xl:h-155 2xl:h-auto 2xl:max-w-160 lg:min-w-135 lg:max-w-135">

          <span className="text-base md:text-lg lg:text-xl 2xl:text-3xl text-white text-center md:text-left"> TECH STACK <br />
            <span className="text-xl md:text-2xl lg:text-2xl 2xl:text-4xl font-bold text-white">DEVELOPER</span></span>

          <div className="py-3 md:py-5 w-full md:w-90 md:min-w-90 bg-neutral-700 rounded-2xl overflow-y-auto scrollbar-hide max-h-60 md:max-h-50 lg:max-h-130 xl:max-h-145 2xl:max-h-150">
            <div className="flex flex-wrap gap-2 justify-center rounded " >
              {techStackDev.map((tech) => (
                <div
                  key={tech.name}
                  className="  bg-white  text-black rounded-xl group
                      md:w-25 md:h-25 w-12 h-12
                     hover:scale-105 transition-all cursor-pointer flex flex-col items-center
                     justify-center gap-2 shadow-xl  "

                >
                  <img
                    src={tech.local ? `/icons/${tech.icon}` : `https://cdn.simpleicons.org/${tech.icon}`}
                    alt={tech.name}
                    className="w-7 h-7 md:w-13 md:h-13 group-hover:opacity-15"
                    onError={(e) => { e.currentTarget.style.display = 'none' }}
                  />

                  <span className="group-hover:opacity-100 opacity-0 text-xl font-bold transition-all ease-in-out absolute">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>


        {/* DATA Section - Right */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-3 bg-indigo-950 rounded-2xl p-4 md:p-5 w-full md:w-auto  h-70 lg:h-140 xl:h-155 2xl:h-auto lg:min-w-135 lg:max-w-135">

          <div className="py-3 md:py-5 w-full md:w-90 md:min-w-90 bg-indigo-800 rounded-2xl overflow-y-auto scrollbar-hide max-h-60 md:max-h-50 2xl:max-w-160 lg:max-h-130 xl:max-h-145 2xl:max-h-150">

            <div className="flex flex-wrap gap-2 justify-center rounded " >
              {techStackData.map((tech) => (
                <div
                  key={tech.name}
                  className="  bg-white  text-black rounded-xl group
                      md:w-25 md:h-25 w-12 h-12
                     hover:scale-105 transition-all cursor-pointer flex flex-col items-center
                     justify-center gap-2 shadow-xl  "

                >
                  <img
                    src={tech.local ? `/icons/${tech.icon}` : `https://cdn.simpleicons.org/${tech.icon}`}
                    alt={tech.name}
                    className="w-7 h-7 md:w-13 md:h-13 group-hover:opacity-15"
                    onError={(e) => { e.currentTarget.style.display = 'none' }}
                  />

                  <span className="group-hover:opacity-100 opacity-0 text-xl font-bold transition-all ease-in-out absolute">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
          <span className="text-base md:text-lg lg:text-xl 2xl:text-3xl text-white text-center md:text-left"> TECH STACK <br />
            <span className="text-xl md:text-2xl lg:text-2xl 2xl:text-4xl font-bold text-white">DATA</span></span>
        </div>
      </div>
    </div >
  </section>
  )
}