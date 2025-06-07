import { Badge } from "@/components/ui/badge"

import Image from "next/image";

export default function BlogPage() {
  return (
    <>

      <div className="">
        <section className="px-10 flex justify-between items-center border-b-1">

          <span className="text-4xl">KOTTIO <span className="font-bold">BLOG</span></span>
          <div className="flex gap-10 h-full">
            <ul className="flex  h-full font-light">
              <li className="h-20 w-25 flex justify-center items-center border-l-1 hover:bg-[#639FA1] hover:text-white hover:scale-105 transition-all duration-100"><span>Project</span></li>
              <li className="h-20 w-25 flex justify-center items-center border-l-1  hover:bg-[#639FA1] hover:text-white hover:scale-105 transition-all duration-100"><a href="">About</a></li>
              <li className="h-20 w-25 flex justify-center items-center border-r-1 border-l-1  hover:bg-[#639FA1] hover:text-white hover:scale-105 transition-all duration-100"><a href="">Now</a></li>
            </ul>
            <button>Get in Touch</button>
          </div>
        </section>
        {/* <section>
          <span className="w-1/3 px-10">Welcome to My Blog where I share my creative and deevelopper journey</span>
        </section> */}
        <section className="px-10 py-10">

          <div className=" border-1 w-80 h-100 rounded flex flex-col  py-1 ">
            <span className="text-sm px-3 text-[#639FA1]">June 20, 2025</span>
            <span className="text-xl px-3" >Data Engeneering in Impact</span>
            <div className="w-full bg-blue-200 h-50 my-3">image</div>
            <ul className="text-sm px-3 h-8 flex gap-2  ">
              <Badge variant="developer">Dev</Badge>
              <Badge variant="photo">Photo</Badge>
            </ul>
            <span className="px-3">Modern Day data pipeline transform how impact change the world... </span>
          </div>


        </section>
      </div>
    </>
  )
}
