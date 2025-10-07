"use client";

// import { AlertTriangle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
// import { useEffect, useState } from "react";

export default function Home() {




  return (
    <div className=" text-black bg-white">
      <div className="h-screen flex flex-col">
        <div className="w-screen relative z-1 -mt-20 left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] h-150">

          <Image
            src={"/LandingPage/land1.jpg"}
            fill
            alt="Landing page hero image"
            className="object-cover"
            priority
          />


          <div className="relative z-20 flex items-center justify-between h-full px-20 -mt-10 ">

            <div className="flex items-center">
              <Image src={"/face.png"} alt="face" height={100} width={100} ></Image>
              <span className="text-black z-20 text-4xl " style={{ textShadow: '0px 1px 4px rgba(0,0,0,1)' }}> KOTTIO</span>
            </div>

            <ul className="flex justify-between w-1/3 text-2xl">
              <li className="text-white hover:text-black transition-colors cursor-pointer" style={{ textShadow: '0px 1px 4px rgba(0,0,0,1)' }}>ABOUT</li>
              <li className="text-white hover:text-black transition-colors cursor-pointer" style={{ textShadow: '0px 1px 4px rgba(0,0,0,1)' }}>NOW</li>
              <li className="text-white hover:text-black transition-colors cursor-pointer" style={{ textShadow: '0px 1px 4px rgba(0,0,0,1)' }}>CONTACT</li>
            </ul>
          </div>
        </div>

        <div className="absolute z-10 flex mt-40  justify-between items-end w-screen">

          <div className=" pt-10 pl-20 flex flex-col ">
            <span className="text-3xl">C R E A T I V E</span>
            <span className="text-8xl text-purple-700 font-bold">FULL STACK  <br></br>DEVELOPER</span>
            <span className="text-4xl">& Data Consultant</span>
          </div>

          <div className="px-20 flex gap-5">
            <div className="border-1 px-10 py- flex justify-center items-center text-2xl"><span>MY OFFERS</span></div>
            <div className="border-1  px-10 py-3  flex justify-center items-center text-2xl bg-purple-700 text-white"><span>MY PROJECTS</span></div>

          </div>
        </div>

        <div className="w-screen relative  left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] h-full">
          <Image
            src={"/LandingPage/land2.jpg"}
            fill
            alt="mountains"
            className="object-cover object-bottom "
            priority
          />
        </div>
      </div>







    </div >


  )
}

