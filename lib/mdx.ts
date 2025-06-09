import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Post } from "@/types/posts";

const postsDirectory = path.join(process.cwd(), "content/blog");

export function getAllPosts() {
  const fileNames = fs.readdirSync(postsDirectory);

  const posts = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.mdx$/, "");
    const filePath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data } = matter(fileContents);
    return {
      slug,
      ...data,
    } as Post;
  });

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}
