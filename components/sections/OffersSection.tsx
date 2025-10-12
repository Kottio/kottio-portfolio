import Image from "next/image"
import SectionHeader from "../ui/sectionHeader"
import { Rocket, BookMarked, Zap } from "lucide-react"

export default function OffersSection() {
  return (

    <section id="offers" className="w-screen relative  left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] h-200 ">
      <Image
        src={"/LandingPage/land3.jpg"}

        fill
        alt="Services and offers background"
        className="object-cover object-bottom "
        priority
      />


      <SectionHeader sectionName="My Offers" white ></SectionHeader>


      <div className="relative z-20 w-full h-full flex justify-center items-center p-2 md:p-10">
        <div className="bg-white/90 backdrop-blur-sm h-full w-full md:h-5/6 md:w-5/6 rounded-2xl p-2 md:p-4 grid grid-cols-2 grid-rows-2 gap-4">
          {/* Large left panel - spans 2 rows */}
          <div className="row-span-2 bg-violet-500 rounded-xl p-6 flex text-white group relative overflow-hidden">

            <div className=" flex flex-col justify-center group-hover:opacity-0  transition-opacity ease-in-out">
              <Rocket className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 mb-4" />
              <h3 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4">Build Your <br />Digital Product </h3>
              <p className="text-xl md:text-base lg:text-lg">App / Web App, Tested Prototypes, Landing Page, Data Products </p>
            </div>

            <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-8 lg:px-12 rounded-xl
            group-hover:opacity-100 opacity-0 transition-all duration-300 ease-in-out
            bg-black/80 backdrop-blur-sm">

              {/* Title */}
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
                Build Your <br />Digital Product
              </h3>

              {/* Subtitle/Hook */}
              <p className="text-base md:text-lg lg:text-xl mb-6 text-gray-200 font-medium">
                From idea to launch.
              </p>

              {/* Features List */}
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3 text-sm md:text-base lg:text-lg text-gray-100">
                  <span className="text-green-400 mt-1">→</span>
                  <span>Strategic clarity through workshops & design sprints</span>
                </li>
                <li className="flex items-start gap-3 text-sm md:text-base lg:text-lg text-gray-100">
                  <span className="text-green-400 mt-1">→</span>
                  <span>Working products: MVPs, features, or rebuilds that ship</span>
                </li>
                <li className="flex items-start gap-3 text-sm md:text-base lg:text-lg text-gray-100">
                  <span className="text-green-400 mt-1">→</span>
                  <span>Smart data & dashboards from day one</span>
                </li>
                <li className="flex items-start gap-3 text-sm md:text-base lg:text-lg text-gray-100">
                  <span className="text-green-400 mt-1">→</span>
                  <span>Compelling storytelling: pitches, presentations, visuals</span>
                </li>
              </ul>

              {/* CTA */}
              <button className="self-start px-6 py-2 bg-white text-black font-semibold 
                 rounded-md hover:bg-gray-100 transition-colors">
                Learn More →
              </button>
            </div>

          </div>



          {/* Top right panel */}
          <div className="bg-indigo-200 rounded-xl p-6 flex flex-col justify-center text-black group relative overflow-hidden">
            {/* Default content */}
            <div className="flex flex-col justify-center group-hover:opacity-0 transition-opacity ease-in-out">
              <BookMarked className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 mb-2" />
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2">Teach and Empower</h3>
              <p className="text-xs md:text-sm lg:text-base">Democratize data and enable your team</p>
            </div>

            {/* Hover overlay */}
            <div className="absolute inset-0 flex flex-col justify-between px-4 md:px-6 py-4 rounded-xl
            group-hover:opacity-100 opacity-0 transition-all duration-300 ease-in-out
            bg-black/80 backdrop-blur-sm overflow-y-auto">
              <div className="flex justify-between items-end">
                <div>
                  <h3 className="text-xl md:text-xl lg:text-2xl font-bold mb-2 text-white">Teach & Empower</h3>
                  <p className="text-sm md:text-base lg:text-lg mb-2 text-gray-200">
                    Upskill business and technical teams
                  </p>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-start gap-2 text-sm md:text-base text-gray-100">
                      <span className="text-green-400">→</span>
                      <span>Data literacy & SQL</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm md:text-base text-gray-100">
                      <span className="text-green-400">→</span>
                      <span>Modern data pipelines</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm md:text-base text-gray-100">
                      <span className="text-green-400">→</span>
                      <span>Product analytics</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm md:text-base text-gray-100">
                      <span className="text-green-400">→</span>
                      <span>Data storytelling</span>
                    </li>
                  </ul>
                  <p className="text-xs md:text-sm text-gray-300">
                    Half-day workshops tailored to your needs
                  </p>
                </div>
                <button className=" px-4 py-2 bg-white text-black font-semibold rounded-md hover:bg-gray-100 transition-colors text-sm">
                  Learn More
                </button>
              </div>

            </div>
          </div>

          {/* Bottom right panel */}
          <div className="bg-indigo-900 rounded-xl p-6 flex flex-col justify-center text-white group relative overflow-hidden">
            {/* Default content */}
            <div className="flex flex-col justify-center group-hover:opacity-0 transition-opacity ease-in-out">
              <Zap className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 mb-2" />
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2">Consult and transform</h3>
              <p className="text-xs md:text-sm lg:text-base">Strategic guidance and implementation for data-driven transformation</p>
            </div>

            {/* Hover overlay */}
            <div className="absolute inset-0 flex flex-col justify-between px-4 md:px-6 py-4 rounded-xl
            group-hover:opacity-100 opacity-0 transition-all duration-300 ease-in-out
            bg-black/80 backdrop-blur-sm">
              <div className="flex justify-between items-end">
                <div>
                  <h3 className="text-xl md:text-xl lg:text-2xl font-bold mb-2 text-white">Consult & Transform</h3>
                  <p className="text-sm md:text-base lg:text-lg mb-2 text-gray-200">
                    Integrate data to make better decisions
                  </p>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-start gap-2 text-sm md:text-base text-gray-100">
                      <span className="text-green-400">→</span>
                      <span>Strategic consulting & roadmaps</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm md:text-base text-gray-100">
                      <span className="text-green-400">→</span>
                      <span>Dashboards & database</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm md:text-base text-gray-100">
                      <span className="text-green-400">→</span>
                      <span>Data-driven transformation</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm md:text-base text-gray-100">
                      <span className="text-green-400">→</span>
                      <span>AI implementation & automation</span>
                    </li>
                  </ul>
                  <p className="text-xs md:text-sm text-gray-300">
                    project-based or ongoing advisory
                  </p>
                </div>
                <button className="px-4 py-2 bg-white text-black font-semibold rounded-md hover:bg-gray-100 transition-colors text-sm">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}