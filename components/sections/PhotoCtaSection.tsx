import { bebas } from "@/lib/fonts"

export default function PhotoCtaSection() {
  return (<div className="h-auto w-screen flex flex-col items-center justify-center py-8 bg-white gap-2">
    <h3 className={`${bebas.className} text-4xl tracking-wider`}>LIKED THE PHOTOS? </h3>
    <div className="w-20 h-1 bg-purple-500"></div>
  </div>)
}