import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <Link href={"/blog/"}> <button className="px-4 py-1 border rounded-md">BLOG</button></Link>
    </div>
  );
}
