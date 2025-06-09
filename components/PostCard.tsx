
import Image from "next/image";
import Link from "next/link";
import { Post } from "@/types/posts";

export default function PostCard(post: Post) {
  return (
    <Link key={post.slug} href={`/blog/${post.slug}`} className="border-y-1 border-x-1 w-116 h-125 flex flex-col hover:mt-3 hover:border-t-1 transition-all duration-120">
      <div className="h-70 w-full flex flex-col items-center justify-center">
        <div className="relative h-19/20 w-19/20">
          <Image src={post.image} alt={post.title} fill className="object-cover" />
        </div>
      </div>
      <span className="text-xl pl-2 py-3">{post.title.toUpperCase()}</span>
      <ul className="h-10 border-y-1 flex items-center text-black">
        {post.tags.map((tag) => (
          <li
            key={tag}
            className={`h-full w-20 flex items-center justify-center border-r-1 ${tag === "DEV" ? "bg-red-100" : tag === "PHOTO" ? "bg-cyan-100" : "bg-orange-100"
              }`}
          >
            {tag.toUpperCase()}
          </li>
        ))}
      </ul>
      <span className="px-2 pt-2 min-h-25 pb-3">{post.summary}</span>
      <div className="flex justify-between items-center px-2">
        <span>{post.date}</span>
        <svg width="35" height="35" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14 34L34 14M34 14H14M34 14V34" stroke="#1E1E1E" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </Link>
  );
}
