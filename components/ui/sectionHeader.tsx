import { bebas } from "@/lib/fonts"
interface headerProps {
  sectionName: string
  white: boolean
}
export default function SectionHeader({ sectionName, white }: headerProps) {
  return (
    <div className={`absolute top-0 w-screen flex flex-col items-center justify-center ${white ? "bg-white/80" : "bg-black/10"} p-5 z-20`}>
      <h2 className={`${bebas.className} text-4xl tracking-wider`}> {sectionName} </h2>
      <div className="w-20 h-1 bg-purple-500"></div>
    </div>)

}
