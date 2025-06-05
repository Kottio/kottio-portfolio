
import Image from "next/image";

export default function BlogPage() {
  return (
    <>

      <div className="px-10 py-3">
        <section className="flex justify-between items-start">
          <span className="text-3xl">KOTTIO BLOG</span>
          <div className="flex gap-10">
            <ul className="flex gap-10">
              <a href="">Projects</a>
              <a href="">About</a>
              <a href="">Now</a>
            </ul>
            <button>Get in Touch</button>
          </div>
        </section>
        <section>
          <span className="w-1/3">Welcome to My Blog where I share my creative and deevelopper journey</span>
        </section>
        <section>

          <div className=" border-1 w-80 h-100 rounded flex flex-col  py-1 ">
            <span className="text-sm px-3 text-[#639FA1]">June 20, 2025</span>
            <span className="text-xl px-3" >Data Engeneering in Impact</span>
            <div className="w-full bg-blue-200 h-50 my-3">image</div>
            <ul className="text-sm px-3 flex gap-2 ">
              <li className=" px-5 py-1 bg-red-400 rounded-xl text-white">Dev</li>
              <li className=" px-5 py-1 bg-[#639FA1] rounded-xl text-white">Photo</li>
            </ul>
            <span className="px-3">Modern Day data pipeline transform how impact change the world... </span>
          </div>

        </section>
      </div>
    </>
  )
}