import { getAllPosts, getPostBySlug } from "@/lib/mdx";
import Image from "next/image";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}
export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const posts = getAllPosts()

  const { slug } = await params
  try {
    const { source, frontMatter } = await getPostBySlug(slug)

    const relatedPosts = posts.filter(post => { return post.tags.some(tag => frontMatter.tags.includes(tag)) })


    return (
      <div className="min-h-screen ">
        {/* Header Navigation */}
        <section className="mx-10 px-10 flex justify-between items-center border-x-1 border-b-1">
          <span className="text-4xl">
            <Link href="/blog">KOTTIO</Link>
            <span className="font-bold">BLOG</span>
          </span>
          <div className="flex gap-10 h-full">
            <ul className="flex h-full font-light text-sm">
              <li className="h-20 w-30 flex justify-center items-center border-l-1 hover:bg-[#639FA1] hover:text-white hover:scale-105 transition-all duration-100">
                <Link href="/blog">← BACK</Link>
              </li>
              <li className="h-20 w-25 flex justify-center items-center border-l-1 hover:bg-[#639FA1] hover:text-white hover:scale-105 transition-all duration-100">
                <a href="">SHARE</a>
              </li>
              <li className="h-20 w-25 flex justify-center items-center border-r-1 border-l-1 hover:bg-[#639FA1] hover:text-white hover:scale-105 transition-all duration-100">
                <a href="">PRINT</a>
              </li>
            </ul>
            <button className="flex items-center text-[#639FA1]">
              GET IN TOUCH
            </button>
          </div>
        </section>

        {/* Post Header */}
        <section className="mx-10 p-2 border-x-1 border-b-1 ">
          <div className="relative h-100 w-full ">
            <Image
              src={frontMatter.image}
              alt={frontMatter.title}
              fill
              className="object-cover  "
            />
            {/* Overlay with title */}
            <div className="absolute inset-0 bg-black/40 flex items-end">
              <div className="p-10 text-white w-full">
                <h1 className="text-6xl font-bold mb-4 leading-tight">
                  {frontMatter.title.toUpperCase()}
                </h1>
                <div className="flex items-center gap-6 text-lg">

                  <span className="text-white/80">
                    {frontMatter.readTime}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tags and Meta */}
        <section className="mx-10 border-x-1 border-b-1">
          <div className="flex justify-between items-center h-12">
            <ul className="flex h-full">
              {frontMatter.tags.map((tag, index) => (
                <li
                  key={tag}
                  className={`h-full w-25 flex items-center justify-center border-r-1 ${tag === "DEV"
                    ? "bg-red-100"
                    : tag === "PHOTO"
                      ? "bg-cyan-100"
                      : "bg-orange-100"
                    } hover:scale-105 transition-all duration-100`}
                >
                  {tag.toUpperCase()}
                </li>
              ))}
            </ul>
            <div className="px-6 text-sm text-gray-600">

              <span className="border-r-1 pr-4 mr-4">BY THOMAS COTTIAUX</span>

              <span>PUBLISHED: {frontMatter.date}</span>
            </div>
          </div>
        </section>

        {/* Content */}
        <article className="mx-10 border-x-1">
          <div className=" mx-auto px-10 py-16 prose prose-lg prose-gray max-w-none">
            <div className="border-l-4 border-[#639FA1] pl-8 mb-12">
              <p className="text-2xl text-gray-700 leading-relaxed font-light">
                {frontMatter.summary}
              </p>
            </div>

            <div className="markdown-content">
              <MDXRemote
                source={source}
                options={{
                  mdxOptions: {
                    remarkPlugins: [],
                    rehypePlugins: []
                  }
                }}
              />
            </div>
          </div>
        </article>

        {/* Footer Actions */}
        <section className="mx-10 border-x-1 border-b-1">
          <div className="flex justify-between items-center h-20 px-10">
            <div className="flex gap-4">
              <button className="border-1 border-gray-300 px-6 py-2 hover:bg-[#639FA1] hover:text-white hover:border-[#639FA1] transition-all duration-100">
                ← PREVIOUS
              </button>
              <button className="border-1 border-gray-300 px-6 py-2 hover:bg-[#639FA1] hover:text-white hover:border-[#639FA1] transition-all duration-100">
                NEXT →
              </button>
            </div>
            <div className="flex gap-4 items-center">
              <span className="text-sm text-gray-600">SHARE:</span>
              <button className="w-12 h-12 border-1 border-gray-300 flex items-center justify-center hover:bg-[#639FA1] hover:text-white transition-all duration-100">
                TW
              </button>
              <button className="w-12 h-12 border-1 border-gray-300 flex items-center justify-center hover:bg-[#639FA1] hover:text-white transition-all duration-100">
                LI
              </button>
              <button className="w-12 h-12 border-1 border-gray-300 flex items-center justify-center hover:bg-[#639FA1] hover:text-white transition-all duration-100">
                FB
              </button>
            </div>
          </div>
        </section>

        {/* Related Posts */}
        <section className="mx-10 border-x-1 border-b-1">
          <div className="p-10">
            <h3 className="text-2xl font-bold mb-8 border-b-1 pb-4">
              RELATED POSTS
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">


              {relatedPosts.map(post => {
                return <Link href={`/blog/${post.slug}`} key={post.slug}>
                  <div className="border-1 hover:border-[#639FA1] hover:scale-105 transition-all duration-100 cursor-pointer">
                    <div className="h-55 bg-gray-200 border-b-1 relative">
                      <Image src={post.image} alt="Image" fill></Image>
                    </div>
                    <div className="p-4">
                      <h4 className="font-bold mb-2">{post.title}</h4>
                      <p className="text-sm text-gray-600 mb-4">{post.summary}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-xs">{post.date}</span>
                        <div className="w-6 h-6">
                          <svg viewBox="0 0 48 48" fill="none">
                            <path d="M14 34L34 14M34 14H14M34 14V34" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              })}


            </div>
          </div>
        </section>






      </div >
    )
  } catch (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center border-1 p-10">
          <h1 className="text-4xl font-bold mb-4">POST NOT FOUND</h1>
          <p className="mb-6">The requested blog post could not be found.</p>
          <Link
            href="/blog"
            className="border-1 border-gray-300 px-6 py-2 hover:bg-[#639FA1] hover:text-white hover:border-[#639FA1] transition-all duration-100"
          >
            ← BACK TO BLOG
          </Link>
        </div>
      </div>
    )
  }
}