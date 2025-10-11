
import Image from "next/image"
import SectionHeader from "../ui/sectionHeader"
import { techStackData, techStackDev } from "@/lib/techStack"

export default function StackSection() {
  return (<section className="w-screen  relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] lg:h-190  xl:h-200 2xl:h-220 ">
    <Image
      src={"/LandingPage/land7.jpg"}
      fill
      alt="mountains"
      className="object-cover object-bottom"
      priority
    />
    <div className="absolute inset-0 bg-black/40 z-0"></div>
    <SectionHeader sectionName="TECH STACK" white ></SectionHeader>


    {/* Tech Stack & Skills Section - overlaid on image */}
    <div className="relative z-10 h-full flex flex-col w-screen items-center   md:p-20 lg:p-30 xl:p-20 2xl:p-10">

      <div className="w-full flex justify-center gap-20 2xl:mt-20 xl:mt-10">
        {/* DEV Section - Left */}

        <div className="flex justify-center items-center gap-3 bg-black rounded-2xl p-5 lg:h-140 xl:h-150 2xl:h-auto 2xl:max-w-160 lg:min-w-135 lg:max-w-135 ">
          <span className="lg:text-xl 2xl:text-3xl  text-white"> TECH STACK <br />
            <span className=" lg:text-2xl 2xl:text-4xl font-bold text-white">DEVELOPER</span></span>

          <div className="py-5 w-90 min-w-90 bg-neutral-700 rounded-2xl  overflow-y-auto scrollbar-hide lg:max-h-130 xl:max-h-140 2xl:max-h-150">
            <div className="flex flex-wrap gap-2 justify-center rounded " >
              {techStackDev.map((tech) => (
                <div
                  key={tech.name}
                  className="  bg-white  text-black rounded-xl group
                      w-25 h-25
                     hover:scale-105 transition-all cursor-pointer flex flex-col items-center
                     justify-center gap-2 shadow-xl  "

                >
                  <img
                    src={tech.local ? `/icons/${tech.icon}` : `https://cdn.simpleicons.org/${tech.icon}`}
                    alt={tech.name}
                    className="w-13 h-13 group-hover:opacity-15"
                    onError={(e) => { e.currentTarget.style.display = 'none' }}
                  />

                  <span className="group-hover:opacity-100 opacity-0 text-xl font-bold transition-all ease-in-out absolute">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>


        {/* DATA Section - Right */}
        <div className="flex justify-center items-center gap-3 bg-indigo-950 rounded-2xl p-5 lg:h-140 xl:h-150 2xl:h-auto lg:min-w-135 lg:max-w-135">

          <div className="py-5 w-90 min-w-90 bg-indigo-800 rounded-2xl overflow-y-auto scrollbar-hide 2xl:max-w-160 lg:max-h-130 xl:max-h-140 2xl:max-h-150 ">

            <div className="flex flex-wrap gap-2 justify-center rounded " >
              {techStackData.map((tech) => (
                <div
                  key={tech.name}
                  className="px-4 py-2 bg-white text-black rounded-xl group
                      w-25 h-25
                     hover:scale-105 transition-all cursor-pointer flex flex-col items-center
                     justify-center gap-2 shadow-xl"
                >
                  <img
                    src={tech.local ? `/icons/${tech.icon}` : `https://cdn.simpleicons.org/${tech.icon}`}
                    alt={tech.name}
                    className="w-13 h-13 group-hover:opacity-15"
                    onError={(e) => { e.currentTarget.style.display = 'none' }}
                  />

                  <span className="group-hover:opacity-100 opacity-0 text-xl font-bold transition-all ease-in-out absolute">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
          <span className="lg:text-xl 2xl:text-3xl  text-white"> TECH STACK <br />
            <span className="lg:text-2xl 2xl:text-4xl font-bold text-white">DATA</span></span>
        </div>
      </div>
    </div >
  </section>
  )
}