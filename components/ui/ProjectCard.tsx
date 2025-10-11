import Image from "next/image"
import { Github, FileText } from "lucide-react"
import { ProjectTypes } from "@/lib/types"
import Link from "next/link"

interface ProjectCardProps {
  project: ProjectTypes,
  index: number
}
export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <div className="group perspective-1000 w-full md:w-100 xl:h-140 lg:h-130 2xl:h-150">
      <div className="relative w-full h-full transition-transform duration-700 transform-style-3d group-hover:rotate-y-180">
        {/* FRONT - Logo and Color */}
        <div className={`absolute w-full h-full backface-hidden rounded-xl p-6 flex flex-col items-center justify-center gap-6 ${index === 0 ? "bg-black" : "bg-emerald-700"}`}>
          <Image src={project.logo} alt={project.name} width={200} height={90} className="rounded bg-white p-1" />
          <h3 className="text-3xl font-bold text-white text-center">{project.name}</h3>
          <p className="text-white text-center text-lg">{project.tagline}</p>
        </div>
        {/* BACK - Full Details */}
        <div className={`absolute w-full h-full backface-hidden rotate-y-180 bg-white rounded-lg p-6 flex flex-col  lg:gap-2 xl:gap-5 overflow-y-auto border-4  ${index === 0 ? "border-black" : "border-emerald-700"}`}>
          {/* Logo and Name */}
          <div className="flex items-center gap-4">
            <Image src={project.logo} alt={project.name} width={150} height={40} className="rounded lg:scale-80 scale-100" />
            <div>
              <h3 className="text-xl font-bold">{project.name}</h3>
              <p className="text text-purple-500 font-semibold">{project.tagline}</p>
            </div>
          </div>
          {/* Description */}
          <p className="xl:text-md lg:text-sm text-gray-700 ">{project.description}</p>
          {/* Screenshot */}
          <div className="w-full flex justify-center">
            <Image src={project.screenshot} alt={project.name} width={290} height={120} className="rounded" />
          </div>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2">
            {project.tech.slice(0, 4).map((tech) => (
              <span key={tech} className="px-2 py-1 bg-indigo-100 text-indigo-700 text-xs rounded-full">
                {tech}
              </span>
            ))}
            {project.tech.length > 4 && (
              <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                +{project.tech.length - 4} more
              </span>
            )}
          </div>

          {/* Links */}
          <div className="flex gap-3 mt-auto">
            <Link href={project.links.github} target="_blank" className="flex items-center gap-2 px-3 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors text-xs">
              <Github className="w-3 h-3" />
              GitHub
            </Link>
            <Link href={project.links.sheet} target="_blank" className="flex items-center gap-2 px-3 py-2 border-2 border-purple-500 text-purple-500 rounded-lg hover:bg-purple-50 transition-colors text-xs">
              <FileText className="w-3 h-3" />
              Details
            </Link>
          </div>
        </div>
      </div>
    </div>)
}