
import Image from "next/image"
import SectionHeader from "../ui/sectionHeader"
import projectsData from "../../lib/project.json"
import ProjectCard from "../ui/ProjectCard"

export default function ProjectSection() {


  return (
    <section id="projects" className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] h-auto md:h-190 xl:h-200 2xl:h-220 py-10 md:py-0">
      <Image
        src={"/LandingPage/land4.jpg"}
        fill
        alt="Projects showcase background"
        className="object-cover object-bottom"
        priority
      />
      <SectionHeader sectionName="My projects" white={false} ></SectionHeader>
      <div className="relative h-full flex justify-center w-screen items-center px-4 md:px-0 md:mt-0 mt-15">
        <div className="w-full flex flex-col gap-6 md:flex-row md:gap-10 justify-center items-center">

          {projectsData.map((project, index) =>
            <ProjectCard project={project} index={index} key={index}></ProjectCard>)
          }
        </div>
      </div>
    </section>
  )
}