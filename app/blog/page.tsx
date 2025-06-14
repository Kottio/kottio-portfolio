import PostCard from "@/components/PostCard";
import { getAllPosts } from "@/lib/mdx";
import Link from "next/link";

export default function BlogPage() {
  const posts = getAllPosts();
  return (
    <>
      {/* NAVBAR */}
      <div className="">
        <section className="mx-10 px-10 flex justify-between items-center border-x-1 border-b-1 ">
          <span className="text-4xl">
            <Link href={"/"}>KOTTIO</Link>
            <span className="font-bold">BLOG</span>
          </span>
          <div className="flex gap-10 h-full">
            <ul className="flex  h-full font-light text-sm">
              <ul className="flex h-full font-light text-sm">
                <Link href="/projects">
                  <li className="h-20 w-30 flex justify-center items-center border-l-1 hover:bg-[#639FA1] hover:text-white hover:scale-105 transition-all duration-100 cursor-pointer">
                    <span>PROJECTS</span>
                  </li>
                </Link>
                <Link href="/about">
                  <li className="h-20 w-25 flex justify-center items-center border-l-1 hover:bg-[#639FA1] hover:text-white hover:scale-105 transition-all duration-100 cursor-pointer">
                    ABOUT
                  </li>
                </Link>
                <Link href="/now">
                  <li className="h-20 w-25 flex justify-center items-center border-r-1 border-l-1 hover:bg-[#639FA1] hover:text-white hover:scale-105 transition-all duration-100 cursor-pointer">
                    NOW
                  </li>
                </Link>
              </ul>
            </ul>
            <button className="flex items-center text-[#639FA1]">
              GET IN TOUCH
            </button>
          </div>
        </section>

        {/* FILTER */}
        <section className="mx-10  h-15 flex items-end border-x-1 border-b-1">
          <div className="flex gap-10 h-full items-end">
            <ul className="flex  h-full font-light text-sm cursor-pointer">
              <li className=" w-25 flex justify-center items-center  hover:bg-red-200 hover:z-10 hover:border-none  hover:scale-105 transition-all duration-100">
                <span>DEV</span>
              </li>
              <li className=" w-25 flex justify-center items-center border-l-1  hover:bg-cyan-100 hover:z-10 hover:border-none hover:scale-105 transition-all duration-100">
                <span>PHOTO</span>
              </li>
              <li className="w-25 flex justify-center items-center border-r-1 border-l-1  hover:bg-red-200 hover:z-10 hover:border-none  hover:scale-105 transition-all duration-100">
                <span>MUSIC</span>
              </li>
            </ul>
          </div>
        </section>

        {/* POSTS */}
        <section className="px-10 flex flex-wrap   gap-3 pt-3 justify-between  ">
          {posts.map((post) => {
            return PostCard(post);
          })}
        </section>
      </div>
    </>
  );
}
