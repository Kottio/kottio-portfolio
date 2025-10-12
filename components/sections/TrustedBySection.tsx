import Image from "next/image"
import { trustedBy } from "@/lib/companies"
import Marquee from "react-fast-marquee"
import { bebas } from "@/lib/fonts"

export default function TrustedBySection() {
  return (<section id="trusted-by"><div className="h-auto w-screen flex flex-col items-center justify-center py-8 bg-white gap-2">
    <h3 className={`${bebas.className} text-4xl tracking-wider`}>THEY TRUSTED ME</h3>
    <div className="w-20 h-1 bg-purple-500"></div>
  </div>

    <div className="w-screen h-55 relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] ">
      <Image
        src={"/LandingPage/land5.jpg"}
        fill
        alt="Client testimonials background"
        className="object-cover object-center"
        priority
      />
      <div className="absolute inset-0 bg-white/75"></div>

      <div className="relative w-full h-full flex items-center justify-center">
        <Marquee speed={50} gradient={false}>
          {trustedBy.map((item) => (
            <div key={item.name} className="mx-10 md:mx-30">
              <Image
                src={item.logo}
                width={180}
                height={100}
                alt={item.name}
                className="w-[120px] h-auto md:w-[180px]"
              />
            </div>
          ))}
        </Marquee>
      </div>


    </div>
  </section>)
}