import { Badge } from "@/components/ui/badge"

import Image from "next/image";

export default function BlogPage() {
  return (
    <>

      <div className="">
        <section className="mx-10 px-10 flex justify-between items-center border-x-1 border-b-1 ">

          <span className="text-4xl">KOTTIO <span className="font-bold">BLOG</span></span>
          <div className="flex gap-10 h-full">
            <ul className="flex  h-full font-light text-sm">
              <li className="h-20 w-30 flex justify-center items-center border-l-1 hover:bg-[#639FA1] hover:text-white hover:scale-105 transition-all duration-100"><span>PROJECTS</span></li>
              <li className="h-20 w-25 flex justify-center items-center border-l-1  hover:bg-[#639FA1] hover:text-white hover:scale-105 transition-all duration-100"><a href="">ABOUT</a></li>
              <li className="h-20 w-25 flex justify-center items-center border-r-1 border-l-1  hover:bg-[#639FA1] hover:text-white hover:scale-105 transition-all duration-100"><a href="">NOW</a></li>
            </ul>
            <button className="flex items-center text-[#639FA1]">
              GET IN TOUCH
            </button>
          </div>
        </section>
        <section className="mx-10  h-15 flex items-end border-x-1 border-b-1">
          <div className="flex gap-10 h-full items-end">
            <ul className="flex  h-full font-light text-sm">
              <li className=" w-25 flex justify-center items-center  hover:bg-[#639FA1] hover:text-white hover:scale-105 transition-all duration-100"><span>DEV</span></li>
              <li className=" w-25 flex justify-center items-center border-l-1  hover:bg-[#639FA1] hover:text-white hover:scale-105 transition-all duration-100"><a href="">PHOTO</a></li>
              <li className="w-25 flex justify-center items-center border-r-1 border-l-1  hover:bg-[#639FA1] hover:text-white hover:scale-105 transition-all duration-100"><a href="">MUSIC</a></li>
            </ul>
          </div>


        </section>
        {/* <section>
          <span className="w-1 /3 px-10">Welcome to My Blog where I share my creative and deevelopper journey</span>
        </section> */}

        <section className="px-10 flex gap-3 pt-3  ">

          <div className="border-y-1 border-x-1 w-120   flex flex-col  hover:mt-3 hover:border-t-1 ">
            <div className=" h-70 w-full flex flex-col items-center justify-center ">
              <div className="relative h-19/20 w-19/20">
                <Image src={"/Tunesia-22.jpg"} alt={"Hey"} fill className="object-cover " />
              </div>
            </div>

            <span className="text-xl pl-2 py-3  " >DATA ENGINEERING IN IMPACT</span>
            <ul className="  h-10  border-y-1 flex  items-center text-black">
              <li className="bg-red-100 h-full w-15 border-r-1 flex items-center justify-center">DEV</li>
              <li className="bg-cyan-100 h-full w-20 flex   border-r-1  items-center justify-center">PHOTO</li>

            </ul>

            <span className="px-2 pt-2 min-h-20 pb-3">Modern Day data pipeline transform how impact change the world... </span>

            <div className="flex justify-between items-center px-2">
              <span className="">06/20/25</span>
              <svg width="35" height="35" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 34L34 14M34 14H14M34 14V34" stroke="#1E1E1E" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

          </div>
          <div className="border-y-1 border-x-1 w-120   flex flex-col  hover:mt-3 hover:border-t-1 ">
            <div className=" h-70 w-full flex flex-col items-center justify-center ">
              <div className="relative h-19/20 w-19/20">
                <Image src={"/tree.jpg"} alt={"Hey"} fill className="object-cover " />
              </div>
            </div>

            <span className="text-xl pl-2 py-3  " >DEVELOPPING YOUR OWN APP</span>
            <ul className="  h-10  border-y-1 flex  items-center text-black">
              <li className="bg-red-100 h-full w-15 border-r-1 flex items-center justify-center">DEV</li>
              <li className="bg-orange-100 h-full w-20 flex   border-r-1  items-center justify-center">MUSIC</li>

            </ul>

            <span className="px-2 pt-2 min-h-20 pb-3">Modern Day data pipeline transform how impact change the world... </span>

            <div className="flex justify-between items-center px-2">
              <span className="">06/20/25</span>
              <svg width="35" height="35" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 34L34 14M34 14H14M34 14V34" stroke="#1E1E1E" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

          </div>

          <div className="border-y-1 border-x-1 w-120   flex flex-col  hover:mt-3 hover:border-t-1 ">
            <div className=" h-70 w-full flex flex-col items-center justify-center ">
              <div className="relative h-19/20 w-19/20">
                <Image src={"/fog1.jpg"} alt={"Hey"} fill className="object-cover " />
              </div>
            </div>

            <span className="text-xl pl-2 py-3  " >DEVELOPPING YOUR OWN APP</span>
            <ul className="  h-10  border-y-1 flex  items-center text-black">
              <li className="bg-red-100 h-full w-15 border-r-1 flex items-center justify-center">DEV</li>


            </ul>

            <span className="px-2 pt-2 min-h-20 pb-3">Modern Day data pipeline transform how impact change the world... </span>

            <div className="flex justify-between items-center px-2">
              <span className="">06/20/25</span>
              <svg width="35" height="35" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 34L34 14M34 14H14M34 14V34" stroke="#1E1E1E" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

          </div>





        </section>
      </div>
    </>
  )
}
