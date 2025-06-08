import { Badge } from "@/components/ui/badge"

import Image from "next/image";

export default function BlogPage() {
  return (
    <>

      <div className="">
        <section className="mx-10 px-10 flex justify-between items-center border-x-1 border-b-1">

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

        <section className="px-10 flex ">

          <div className="border-b-1 border-l-1 w-90 h-100  flex flex-col  ">
            <div className=" h-70 w-full flex flex-col items-center justify-center ">
              <div className="relative h-19/20 w-19/20">
                <Image src={"/Tunesia-22.jpg"} alt={"Hey"} fill className="object-cover " />
              </div>
            </div>

            <span className="text-xl  px-2" >Data Engineering in Impact</span>
            <ul className=" px-2 h-8 flex gap-1  ">
              <Badge variant="developer">DEV</Badge>
              <Badge variant="photo">PHOTO</Badge>
            </ul>

            <span className="px-2 pt-2">Modern Day data pipeline transform how impact change the world... </span>
            {/* <span className="text-sm px-2 text-[#639FA1]">June 20, 2025</span> */}
          </div>



          <div className=" border-l-1 border-b-1 w-90 h-100  flex flex-col  ">
            <div className=" h-70 w-full flex flex-col items-center justify-center ">
              <div className="relative h-19/20 w-19/20">
                <Image src={"/Tunesia-22.jpg"} alt={"Hey"} fill className="object-cover " />
              </div>
            </div>

            <span className="text-xl  px-2" >Data Engineering in Impact</span>
            <ul className=" px-2 h-8 flex gap-1  ">
              <Badge variant="developer">DEV</Badge>
              <Badge variant="photo">PHOTO</Badge>
            </ul>

            <span className="px-2 pt-2">Modern Day data pipeline transform how impact change the world... </span>
            {/* <span className="text-sm px-2 text-[#639FA1]">June 20, 2025</span> */}
          </div>



          <div className=" border-l-1 border-b-1 w-90 h-100  flex flex-col  ">
            <div className=" h-70 w-full flex flex-col items-center justify-center ">
              <div className="relative h-19/20 w-19/20">
                <Image src={"/Tunesia-22.jpg"} alt={"Hey"} fill className="object-cover " />
              </div>
            </div>

            <span className="text-xl  px-2" >Data Engineering in Impact</span>
            <ul className=" px-2 h-8 flex gap-1  ">
              <Badge variant="developer">DEV</Badge>
              <Badge variant="photo">PHOTO</Badge>
            </ul>

            <span className="px-2 pt-2">Modern Day data pipeline transform how impact change the world... </span>
            {/* <span className="text-sm px-2 text-[#639FA1]">June 20, 2025</span> */}
          </div>



          <div className=" border-x-1 border-b-1 w-90 h-100  flex flex-col  ">
            <div className=" h-70 w-full flex flex-col items-center justify-center ">
              <div className="relative h-19/20 w-19/20">
                <Image src={"/Tunesia-22.jpg"} alt={"Hey"} fill className="object-cover " />
              </div>
            </div>

            <span className="text-xl  px-2" >Data Engineering in Impact</span>
            <ul className=" px-2 h-8 flex gap-1  ">
              <Badge variant="developer">DEV</Badge>
              <Badge variant="photo">PHOTO</Badge>
            </ul>

            <span className="px-2 pt-2">Modern Day data pipeline transform how impact change the world... </span>
            {/* <span className="text-sm px-2 text-[#639FA1]">June 20, 2025</span> */}
          </div>

        </section>
      </div>
    </>
  )
}
