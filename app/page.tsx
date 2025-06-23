"use client";

import { AlertTriangle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const images = [
    "/thumbnailsPosts/post1.jpg",
    "/thumbnailsPosts/post2.jpg",
    "/thumbnailsPosts/post3.jpg",
  ]

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => prevIndex === images.length - 1 ? 0 : prevIndex + 1)
    }, 4000)
    return () => clearInterval(interval);
  }, [images.length])



  return (
    <div className="w-full h-screen flex  flex-col items-center justify-center ">
      <div className=" h-29/30 w-19/20 border-1  ">
        {/* Headers */}
        <section className="flex justify-between items-center h-1/12 px-4">
          <div className="text-4xl flex  items-center">


            <Link href={"/"}>KOTTIO</Link>

          </div>
          <ul className=" flex w-2/5 justify-between text-sm ">
            <Link href={"/blog"}>BLOG</Link>
            <Link href={"/blog"}>PROJECTS</Link>
            <Link href={"/blog"}>ABOUT ME</Link>
            <Link href={"/blog"}>NOW</Link>
            <Link href={"/blog"}>CONTACT</Link>
          </ul>
        </section>
        <section className="relative w-full h-140">


          <Image src="/thumbnailsPosts/post3.jpg" alt="MainImage" fill className="object-cover"></Image>
          {images.map((image, index) => {

            return <Image
              key={image}
              src={image} alt={`Image of ${index + 1}`}
              fill
              className={` object-cover transition-opacity duration-2000 ${index == currentImageIndex ? "opacity-100" : "opacity-0"} `}
            ></Image>
          })}




        </section>
        <section className="w-full h-2/9 flex justify-center items-center ">
          <div className="w-9/10 flex justify-between items-center ">

            <div className="flex items-center gap-1  bg-gradient-to-r from-[#74ebd5] via-[#57c6e1] to-[#9face6] text-white  p-6 rounded">
              <div className="w-25 h-15 relative  ">
                <Image src="/face.png" alt="Logo" fill className="object-cover"></Image>
              </div>

              <div className="flex flex-col">
                <span className="text-xl">Thomas Cottiaux</span>
                <span className="font-bold text-xl">CREATIVE SOFTWARE ENGINEER</span>
                {/* <span>Photograph & Musician</span> */}

              </div>
            </div>
            <div className="flex w-1/2 justify-between pr-20">
              <div className="flex flex-col">
                <span className="font-bold text-xl">Work with Me</span>
                <span>thcottiaux@gmail.com</span>
                <span>+33648201246</span>
              </div>

              <div className="flex flex-col">
                <span className="font-bold text-xl">Check my Offer</span>
                <span>thcottiaux@gmail.com</span>
              </div>

              <div className="flex flex-col">
                <span className="font-bold text-xl">Follow Me</span>
                <span>Youtube, Insta</span>
              </div>
            </div>



          </div>
        </section >
      </div >
    </div >
  );
}

