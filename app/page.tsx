import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full h-screen flex  flex-col items-center justify-center">
      <div className=" h-29/30 w-19/20 border-1">
        {/* Headers */}
        <section className="flex justify-between items-center h-1/12 px-4">
          <span className="text-4xl">KOTTIO</span>
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
        </section>
        <section className="w-full h-2/9 flex justify-center items-center ">
          <div className="w-8/10 flex justify-between">
            <div className="flex flex-col">
              <span className="font-bold text-xl">CREATIVE SOFTWARE ENGINEER</span>
              {/* <span className="text-xl">Thomas Cottiaux</span> */}
              <span>Photograph & Musician</span>

            </div>

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
        </section>
      </div>
    </div>
  );
}

//  <div className="relative h-19/20 w-19/20">
//           <Image src={post.image} alt={post.title} fill className="object-cover" />
//         </div>