import { getPostBySlug } from "@/lib/mdx";
import Image from "next/image";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  try {
    const { source, frontMatter } = await getPostBySlug(slug)

    return <article className="flex flex-col items-center justify-center w-full">

      <div className="w-full h-20 border-x-1 border-b-1 flex justify-between items-center pl-2">
        <span className="text-xl">KOTTIO BLOG</span>
        <ul className="flex h-full ">
          {frontMatter.tags.map((tag) => {
            return <li key={tag} className="w-25 flex  justify-center items-center border-l-1 " >{tag}</li>
          })}
        </ul>
      </div>
      <div className="w-full flex ">
        <span className="text-3xl  text-right">{frontMatter.title.toUpperCase()}</span>
        <div className="relative h-120 w-120">
          <Image src={frontMatter.image} alt={slug} fill className="object-cover" ></Image>

        </div>
      </div>


      <div>{frontMatter.date}</div>
      <div>{frontMatter.title}</div>
      <div>{frontMatter.date}</div>



      <MDXRemote source={source} />
    </article>

  } catch (e) {
    console.log("Could not fetch post")
    return notFound()
  }




}



