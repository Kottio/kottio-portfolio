
import Image from "next/image"
import SectionHeader from "../ui/sectionHeader"
import projectsData from "../../lib/project.json"
import ProjectCard from "../ui/ProjectCard"

export default function ProjectSection() {


  return (
    <section className="w-screen relative  left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]  lg:h-190  xl:h-200 2xl:h-220 ">
      <Image
        src={"/LandingPage/land4.jpg"}
        fill
        alt="mountains"
        className="object-cover object-bottom  "
        priority
      />
      <SectionHeader sectionName="My projects" white={false} ></SectionHeader>
      <div className="relative h-full flex w-screen items-center ">
        <div className="w-full flex flex-col md:flex-row gap-6 md:gap-10 justify-center items-center">

          {projectsData.map((project, index) =>
            <ProjectCard project={project} index={index} key={index}></ProjectCard>)
          }
        </div>
      </div>
    </section>
  )
}