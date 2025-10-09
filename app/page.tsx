"use client";

import Image from "next/image";

import Link from "next/link";
import { Zap, Rocket, BookMarked, Github, FileText, Lightbulb, Palette, Code2, TrendingUp } from 'lucide-react';

import projectsData from '../public/projects/project.json';
import { Bebas_Neue } from 'next/font/google'


const bebas = Bebas_Neue({
  weight: '400',
  subsets: ['latin']
})
export default function Home() {


  return (
    <div className=" text-neutral-800 bg-white">
      <div className="h-screen flex flex-col">
        <div className="w-screen relative z-1 -mt-20 left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] h-150">

          <Image
            src={"/LandingPage/land1.jpg"}
            fill
            alt="Landing page hero image"
            className="object-cover"
            priority
          />


          <div className="relative z-20 flex items-center justify-between h-full px-5 md:px-10 lg:px-20 -mt-10 ">

            <div className="flex items-center">
              <Image src={"/face.png"} alt="face" height={60} width={60} className="md:h-[80px] md:w-[80px] lg:h-[100px] lg:w-[100px]" ></Image>
              <span className="text-black z-20 text-2xl md:text-3xl lg:text-4xl " style={{ textShadow: '0px 1px 4px rgba(0,0,0,1)' }}> KOTTIO</span>
            </div>

            <ul className="flex justify-between gap-3 md:gap-6 lg:gap-0 lg:w-1/3 text-base md:text-xl lg:text-2xl">
              <li className="text-white hover:text-black transition-colors cursor-pointer" style={{ textShadow: '0px 1px 4px rgba(0,0,0,1)' }}>ABOUT</li>
              <li className="text-white hover:text-black transition-colors cursor-pointer" style={{ textShadow: '0px 1px 4px rgba(0,0,0,1)' }}>NOW</li>
              <li className="text-white hover:text-black transition-colors cursor-pointer" style={{ textShadow: '0px 1px 4px rgba(0,0,0,1)' }}>CONTACT</li>
            </ul>
          </div>
        </div>

        <div className="absolute z-10 flex flex-col md:flex-row mt-20 md:mt-40 justify-between items-start md:items-end w-screen gap-8 md:gap-0">

          <div className="pt-6 md:pt-10 pl-5 md:pl-10 lg:pl-20 flex flex-col">
            <span className="text-lg md:text-2xl lg:text-3xl">C R E A T I V E</span>
            <span className={`text-4xl md:text-6xl lg:text-9xl text-purple-500 ${bebas.className}`}>FULL STACK  <br></br>DEVELOPER</span>
            <span className="text-2xl md:text-3xl lg:text-4xl">& Data Consultant</span>
          </div>

          <div className="px-5 md:px-10 lg:px-20 flex flex-col md:flex-row gap-3 md:gap-5 w-full md:w-auto">
            <div className="border-1 px-6 md:px-8 lg:px-10 py-3 flex justify-center items-center text-base md:text-xl lg:text-2xl rounded border-neutral-800"><span>MY OFFERS</span></div>
            <div className="border-1 px-6 md:px-8 lg:px-10 py-3 flex justify-center items-center text-base md:text-xl lg:text-2xl bg-purple-500 text-white rounded"><span>MY PROJECTS</span></div>
          </div>
        </div>

        <div className="w-screen relative  left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] h-full ">
          <Image
            src={"/LandingPage/land2.jpg"}
            fill
            alt="mountains"
            className="object-cover object-bottom "
            priority
          />
        </div>




      </div>

      {/* <div className="h-10 w-screen flex justify-around items-center">
        <span >MY OFFERS</span>
        <span >LAUNCH YOUR IDEA</span>
        <span >DEMOCRATIZE DATA</span>
        <span >CONSULTING</span>
        <span >DATA ENGINEERING</span>


      </div> */}

      <section className="w-screen relative  left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] h-200 ">
        <Image
          src={"/LandingPage/land3.jpg"}

          fill
          alt="mountains"
          className="object-cover object-bottom "
          priority
        />
        {/* My offers Bento */}
        <div className="relative z-20 w-full h-full flex justify-center items-center p-5 md:p-10">
          <div className="bg-white/90 backdrop-blur-sm h-full w-full md:h-5/6 md:w-5/6 rounded-2xl p-4 md:p-6 grid grid-cols-2 grid-rows-2 gap-4">
            {/* Large left panel - spans 2 rows */}
            <div className="row-span-2 bg-purple-500 rounded-xl p-6 flex flex-col justify-center text-white">
              <Rocket className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 mb-4" />
              <h3 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4">Launch Your Ideas</h3>
              <p className="text-sm md:text-base lg:text-lg">Transform your vision into reality with full-stack development</p>
            </div>

            {/* Top right panel */}
            <div className="bg-indigo-200 rounded-xl p-6 flex flex-col justify-center text-black ">
              <BookMarked className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 mb-2" />
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2">Teach and Empower</h3>
              <p className="text-xs md:text-sm lg:text-base">Democratize data and enable your team</p>
            </div>

            {/* Bottom right panel */}
            <div className="bg-black rounded-xl p-6 flex flex-col justify-center text-white">
              <Zap className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 mb-2" />
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2">Consult and Transform</h3>
              <p className="text-xs md:text-sm lg:text-base">Strategic guidance for data-driven decisions</p>
            </div>
          </div>
        </div>
      </section>

      <div className="h-10 w-screen flex items-center justify-center  overflow-hidden">
        <span className=""> -- PROJECTS -- </span>

      </div>

      <section className="w-screen relative  left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] h-200 ">
        <Image
          src={"/LandingPage/land4.jpg"}
          fill
          alt="mountains"
          className="object-cover object-bottom  "
          priority
        />
        <div className="relative h-full flex w-screen items-center p-5 md:p-10">
          <div className="w-full flex flex-col md:flex-row gap-6 md:gap-10 justify-center items-center">
            {projectsData.map((project, index) => (
              <div key={project.name} className={`bg-white w-full md:w-100 sm:h-auto md:h-150 h-150 border-black-500 border-10 rounded p-6 flex flex-col gap-4 hover:shadow-2xl transition-shadow ${index == 0 ? "border-black" : "border-green-600"}`}

              >
                {/* Logo and Name */}
                <div className="flex items-center gap-4">
                  <Image src={project.logo} alt={project.name} width={120} height={60} className="rounded" />
                  <div>
                    <h3 className="text-2xl font-bold">{project.name}</h3>
                    <p className="text-sm text-purple-500 font-semibold">{project.tagline}</p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-gray-700 line-clamp-4">{project.description}</p>



                <div className="w-full flex justify-center">
                  <Image src={project.screenshot} alt={project.name} width={350} height={160} className="rounded" />
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
                  <Link href={project.links.github} target="_blank" className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors text-sm">
                    <Github className="w-4 h-4" />
                    GitHub
                  </Link>
                  <Link href={project.links.sheet} target="_blank" className="flex items-center gap-2 px-4 py-2 border-2 border-purple-500 text-purple-500 rounded-lg hover:bg-purple-50 transition-colors text-sm">
                    <FileText className="w-4 h-4" />
                    Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* <div className="w-screen h-4 bg-white"></div> */}
      {/* <div className={` h-10 w-screen flex items-center justify-center  overflow-hidden text-2xl ${bebas.className}`}>
        <span className=""> TECH   STACK </span>

      </div> */}

      <section className="w-screen h-200 relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] ">
        <Image
          src={"/LandingPage/land7.jpg"}
          fill
          alt="mountains"
          className="object-cover object-bottom"
          priority
        />
        <div className="absolute inset-0 bg-black/30 z-0"></div>

        {/* Tech Stack & Skills Section - overlaid on image */}
        <div className="relative z-10 h-full flex flex-col w-screen items-center justify-center p-10 md:p-20">


          <div className="w-full flex justify-center gap-20  ">
            {/* DEV Section - Left */}

            <div className="flex justify-center items-center gap-3 bg-black rounded-2xl p-5">
              <span className="text-3xl text-white"> TECH STACK <br />
                <span className="text-4xl font-bold text-white">DEVELOPER</span></span>

              <div className="py-5 w-90 min-w-90 bg-neutral-700 rounded-2xl max-h-150 overflow-y-auto scrollbar-hide">
                <div className="flex flex-wrap gap-2 justify-center rounded " >
                  {[
                    { name: "TypeScript", icon: "typescript", local: false },
                    { name: "React", icon: "react", local: false },
                    { name: "Next.js", icon: "nextdotjs", local: false },
                    { name: "Node.js", icon: "nodedotjs", local: false },
                    { name: "Git", icon: "git", local: false },
                    { name: "HTML/CSS", icon: "html5", local: false },
                    { name: "Tailwind", icon: "tailwindcss", local: false },
                    { name: "Prisma", icon: "prisma", local: false },
                    { name: "Docker", icon: "docker", local: false },
                    { name: "AWS", icon: "aws.svg", local: true },
                    { name: "JavaScript", icon: "javascript", local: false },
                    { name: "Vercel", icon: "vercel", local: false },
                    { name: "Firebase", icon: "firebase", local: false },
                    { name: "Express.js", icon: "express", local: false },
                    { name: "MongoDB", icon: "mongodb", local: false },
                    { name: "Vite", icon: "vite", local: false },
                    { name: "Jest", icon: "jest", local: false },
                    { name: "GitHub", icon: "github", local: false },
                    { name: "Postman", icon: "postman", local: false },
                    { name: "Figma", icon: "figma", local: false },
                    { name: "GitLab", icon: "gitlab", local: false },
                    { name: "Cypress", icon: "cypress", local: false },
                    { name: "AWS EC2", icon: "aws-ec2.svg", local: true },
                    { name: "DigitalOcean", icon: "digitalocean", local: false },
                    { name: "Mural", icon: "mural", local: false },
                    { name: "Miro", icon: "miro", local: false }
                  ].map((tech) => (
                    <div
                      key={tech.name}
                      className="  bg-white  text-black rounded-xl group
                    w-25 h-25
                   hover:scale-105 transition-all cursor-pointer flex flex-col items-center
                   justify-center gap-2 shadow-xl  "

                    >
                      <img
                        src={tech.local ? `/icons/${tech.icon}` : `https://cdn.simpleicons.org/${tech.icon}`}
                        alt={tech.name}
                        className="w-13 h-13 group-hover:opacity-15"
                        onError={(e) => { e.currentTarget.style.display = 'none' }}
                      />

                      <span className="group-hover:opacity-100 opacity-0 text-xl font-bold transition-all ease-in-out absolute">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>


            {/* DATA Section - Right */}
            <div className="flex justify-center items-center gap-3 bg-indigo-950 rounded-2xl p-5">

              <div className="py-5 w-90 min-w-90 bg-indigo-800 rounded-2xl max-h-150 overflow-y-auto scrollbar-hide">

                <div className="flex flex-wrap gap-2 justify-center rounded " >
                  {[
                    { name: "Python", icon: "python", local: false },
                    { name: "PostgreSQL", icon: "postgresql", local: false },
                    { name: "R", icon: "r", local: false },
                    { name: "SQL", icon: "mysql", local: false },
                    { name: "dbt", icon: "dbt", local: false },
                    { name: "Grafana", icon: "grafana", local: false },
                    { name: "Power BI", icon: "microsoft-power-bi.svg", local: true },
                    { name: "Tableau", icon: "tableau-icon.svg", local: true },
                    { name: "Metabase", icon: "metabase", local: false },
                    { name: "Kafka", icon: "apachekafka", local: false },
                    { name: "Airbyte", icon: "airbyte", local: false },
                    { name: "AWS S3", icon: "aws-s3.svg", local: true },
                    { name: "BigQuery", icon: "googlebigquery", local: false },
                    { name: "Redshift", icon: "aws-redshift.svg", local: true },
                    { name: "AWS RDS", icon: "aws-rds.svg", local: true },
                    { name: "Lambda", icon: "aws-lambda.svg", local: true },
                    { name: "Azure", icon: "microsoft-azure.svg", local: true },
                    { name: "PostHog", icon: "posthog", local: false },
                    { name: "Mixpanel", icon: "mixpanel", local: false }
                  ].map((tech) => (
                    <div
                      key={tech.name}
                      className="px-4 py-2 bg-white text-black rounded-xl group
                    w-25 h-25
                   hover:scale-105 transition-all cursor-pointer flex flex-col items-center
                   justify-center gap-2 shadow-xl"
                    >
                      <img
                        src={tech.local ? `/icons/${tech.icon}` : `https://cdn.simpleicons.org/${tech.icon}`}
                        alt={tech.name}
                        className="w-13 h-13 group-hover:opacity-15"
                        onError={(e) => { e.currentTarget.style.display = 'none' }}
                      />

                      <span className="group-hover:opacity-100 opacity-0 text-xl font-bold transition-all ease-in-out absolute">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
              <span className="text-3xl text-white"> TECH STACK <br />
                <span className="text-4xl font-bold text-white">DATA</span></span>
            </div>
          </div>
        </div >

      </section >

    </div >



  )
}

