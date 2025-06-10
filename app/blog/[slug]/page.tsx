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

    return <article>
      <div className="prose max-w-none"> {/* Optional: Add Tailwind Typography 'prose' class for default styling */}

        <MDXRemote source={source} />

      </div>
    </article>

  } catch (e) {
    console.log("Could not fetch post")
    return notFound()
  }




}



