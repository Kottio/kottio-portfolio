"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Zap, Rocket, BookMarked, Github, FileText, Lightbulb, Palette, Code2, TrendingUp } from 'lucide-react';
import projectsData from '../public/projects/project.json';
import Marquee from "react-fast-marquee";
import { Bebas_Neue } from 'next/font/google'


const bebas = Bebas_Neue({
  weight: '400',
  subsets: ['latin']
})
export default function Home() {
  const [showAbout, setShowAbout] = useState(false);

  return (
    <div className=" text-neutral-800 bg-white">
      {/* ==================== HERO SECTION ==================== */}
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

      {/* ==================== MY OFFERS SECTION ==================== */}
      <section className="w-screen relative  left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] h-200 ">
        <Image
          src={"/LandingPage/land3.jpg"}

          fill
          alt="mountains"
          className="object-cover object-bottom "
          priority
        />
        {/* My offers Bento */}
        <div className="relative z-20 w-full h-full flex justify-center items-center p-2 md:p-10">
          <div className="bg-white/90 backdrop-blur-sm h-full w-full md:h-5/6 md:w-5/6 rounded-2xl p-2 md:p-4 grid grid-cols-2 grid-rows-2 gap-4">

            {/* Large left panel - spans 2 rows */}
            <div className="row-span-2 bg-purple-500 rounded-xl p-6 flex text-white group relative overflow-hidden">

              <div className=" flex flex-col justify-center group-hover:opacity-0  transition-opacity ease-in-out">
                <Rocket className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 mb-4" />
                <h3 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4">Build Your <br />Digital Product </h3>
                <p className="text-xl md:text-base lg:text-lg">App / Web App, Tested Prototypes, Landing Page, Data Products </p>
              </div>

              <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-8 lg:px-12 rounded-xl
                group-hover:opacity-100 opacity-0 transition-all duration-300 ease-in-out
                bg-black/80 backdrop-blur-sm">

                {/* Title */}
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
                  Build Your <br />Digital Product
                </h3>

                {/* Subtitle/Hook */}
                <p className="text-base md:text-lg lg:text-xl mb-6 text-gray-200 font-medium">
                  From idea to launch.
                </p>

                {/* Features List */}
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3 text-sm md:text-base lg:text-lg text-gray-100">
                    <span className="text-green-400 mt-1">→</span>
                    <span>Strategic clarity through workshops & design sprints</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm md:text-base lg:text-lg text-gray-100">
                    <span className="text-green-400 mt-1">→</span>
                    <span>Working products: MVPs, features, or rebuilds that ship</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm md:text-base lg:text-lg text-gray-100">
                    <span className="text-green-400 mt-1">→</span>
                    <span>Smart data & dashboards from day one</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm md:text-base lg:text-lg text-gray-100">
                    <span className="text-green-400 mt-1">→</span>
                    <span>Compelling storytelling: pitches, presentations, visuals</span>
                  </li>
                </ul>

                {/* CTA */}
                <button className="self-start px-6 py-2 bg-white text-black font-semibold 
                     rounded-md hover:bg-gray-100 transition-colors">
                  Learn More →
                </button>
              </div>

            </div>



            {/* Top right panel */}
            <div className="bg-indigo-200 rounded-xl p-6 flex flex-col justify-center text-black group relative overflow-hidden">
              {/* Default content */}
              <div className="flex flex-col justify-center group-hover:opacity-0 transition-opacity ease-in-out">
                <BookMarked className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 mb-2" />
                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2">Teach and Empower</h3>
                <p className="text-xs md:text-sm lg:text-base">Democratize data and enable your team</p>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 flex flex-col justify-between px-4 md:px-6 py-4 rounded-xl
                group-hover:opacity-100 opacity-0 transition-all duration-300 ease-in-out
                bg-black/80 backdrop-blur-sm overflow-y-auto">
                <div className="flex justify-between items-end">
                  <div>
                    <h3 className="text-xl md:text-xl lg:text-2xl font-bold mb-2 text-white">Teach & Empower</h3>
                    <p className="text-sm md:text-base lg:text-lg mb-2 text-gray-200">
                      Upskill business and technical teams
                    </p>
                    <ul className="space-y-2 mb-4">
                      <li className="flex items-start gap-2 text-sm md:text-base text-gray-100">
                        <span className="text-green-400">→</span>
                        <span>Data literacy & SQL</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm md:text-base text-gray-100">
                        <span className="text-green-400">→</span>
                        <span>Modern data pipelines</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm md:text-base text-gray-100">
                        <span className="text-green-400">→</span>
                        <span>Product analytics</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm md:text-base text-gray-100">
                        <span className="text-green-400">→</span>
                        <span>Data storytelling</span>
                      </li>
                    </ul>
                    <p className="text-xs md:text-sm text-gray-300">
                      Half-day workshops tailored to your needs
                    </p>
                  </div>
                  <button className=" px-4 py-2 bg-white text-black font-semibold rounded-md hover:bg-gray-100 transition-colors text-sm">
                    Learn More →
                  </button>
                </div>

              </div>
            </div>

            {/* Bottom right panel */}
            <div className="bg-emerald-700 rounded-xl p-6 flex flex-col justify-center text-white group relative overflow-hidden">
              {/* Default content */}
              <div className="flex flex-col justify-center group-hover:opacity-0 transition-opacity ease-in-out">
                <Zap className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 mb-2" />
                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2">Consult and transform</h3>
                <p className="text-xs md:text-sm lg:text-base">Strategic guidance and implementation for data-driven transformation</p>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 flex flex-col justify-between px-4 md:px-6 py-4 rounded-xl
                group-hover:opacity-100 opacity-0 transition-all duration-300 ease-in-out
                bg-black/80 backdrop-blur-sm">
                <div className="flex justify-between items-end">
                  <div>
                    <h3 className="text-xl md:text-xl lg:text-2xl font-bold mb-2 text-white">Consult & Transform</h3>
                    <p className="text-sm md:text-base lg:text-lg mb-2 text-gray-200">
                      Integrate data to make better decisions
                    </p>
                    <ul className="space-y-2 mb-4">
                      <li className="flex items-start gap-2 text-sm md:text-base text-gray-100">
                        <span className="text-green-400">→</span>
                        <span>Strategic consulting & roadmaps</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm md:text-base text-gray-100">
                        <span className="text-green-400">→</span>
                        <span>Dashboards & database</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm md:text-base text-gray-100">
                        <span className="text-green-400">→</span>
                        <span>Data-driven transformation</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm md:text-base text-gray-100">
                        <span className="text-green-400">→</span>
                        <span>AI implementation & automation</span>
                      </li>
                    </ul>
                    <p className="text-xs md:text-sm text-gray-300">
                      project-based or ongoing advisory
                    </p>
                  </div>
                  <button className="px-4 py-2 bg-white text-black font-semibold rounded-md hover:bg-gray-100 transition-colors text-sm">
                    Learn More →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== MY PROJECTS SECTION ==================== */}
      <section className="w-screen relative  left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] h-220 ">
        <Image
          src={"/LandingPage/land4.jpg"}
          fill
          alt="mountains"
          className="object-cover object-bottom  "
          priority
        />
        <div className="absolute top-0 w-screen flex flex-col items-center justify-center bg-black/10 p-5 z-20">
          <h3 className={`${bebas.className} text-4xl tracking-wider`}> MY PROJECTS </h3>
          <div className="w-20 h-1 bg-purple-500"></div>
        </div>

        <div className="relative h-full flex w-screen items-center p-5 md:p-10 pt-32">


          <div className="w-full flex flex-col md:flex-row gap-6 md:gap-10 justify-center items-center">


            {projectsData.map((project, index) => (
              <div key={project.name} className="group perspective-1000 w-full md:w-100 h-150">
                <div className="relative w-full h-full transition-transform duration-700 transform-style-3d group-hover:rotate-y-180">

                  {/* FRONT - Logo and Color */}
                  <div className={`absolute w-full h-full backface-hidden rounded-xl p-6 flex flex-col items-center justify-center gap-6 ${index === 0 ? "bg-black" : "bg-emerald-700"}`}>
                    <Image src={project.logo} alt={project.name} width={200} height={90} className="rounded bg-white p-1" />
                    <h3 className="text-3xl font-bold text-white text-center">{project.name}</h3>
                    <p className="text-white text-center text-lg">{project.tagline}</p>
                  </div>

                  {/* BACK - Full Details */}
                  <div className={`absolute w-full h-full backface-hidden rotate-y-180 bg-white rounded-lg p-6 flex flex-col gap-4 overflow-y-auto border-4  ${index == 0 ? "border-black" : "border-emerald-700"}`}>
                    {/* Logo and Name */}
                    <div className="flex items-center gap-4">
                      <Image src={project.logo} alt={project.name} width={150} height={40} className="rounded" />
                      <div>
                        <h3 className="text-xl font-bold">{project.name}</h3>
                        <p className="text text-purple-500 font-semibold">{project.tagline}</p>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-md text-gray-700 ">{project.description}</p>

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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== TECH STACK SECTION ==================== */}
      <section className="w-screen h-220 relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] ">
        <Image
          src={"/LandingPage/land7.jpg"}
          fill
          alt="mountains"
          className="object-cover object-bottom"
          priority
        />
        <div className="absolute inset-0 bg-black/40 z-0"></div>
        <div className="absolute top-0 w-screen flex flex-col items-center justify-center  bg-white/80  p-5  z-20">
          <h3 className={`${bebas.className} text-4xl tracking-wider`}>TECH STACK </h3>
          <div className="w-20 h-1 bg-purple-500"></div>
        </div>

        {/* Tech Stack & Skills Section - overlaid on image */}
        <div className="relative z-10 h-full flex flex-col w-screen items-center p-10 md:p-20">

          <div className="w-full flex justify-center gap-20 mt-20">
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
      </section>

      {/* ==================== ABOUT ME SECTION ==================== */}
      <section className="w-screen relative  left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] h-220 ">
        <Image
          src={"/LandingPage/land6.jpg"}
          fill
          alt="mountains"
          className="object-cover object-bottom  "
          priority
        />
        <div className="h-auto  absolute   top-0 w-screen flex flex-col items-center justify-center  bg-white/80  p-5  z-20">
          <h3 className={`${bebas.className} text-4xl tracking-wider`}>ABOUT ME </h3>
          <div className="w-20 h-1 bg-purple-500"></div>
        </div>
        <div className="absolute inset-0 bg-black/50 z-10"></div>

        <div className="relative z-10 h-full w-screen flex   justify-center items-center pt-20  ">
          <div className="flex h-auto w-250 justify-center items-center gap-10  ">
            <div className="text-white max-w-150 flex flex-col ">

              <span className={`${bebas.className} text-5xl`}>Thomas Cottiaux</span>


              {/* <span className="text-2xl ">Innovation, Development, Optimization and Testing</span> */}
              <br />

              <span className="text-2xl">Building digital product that matters.
              </span>
              <br />

              <button
                onClick={() => setShowAbout(!showAbout)}
                className="px-6 py-3 bg-purple-700 text-white   hover:bg-purple-600 transition-all w-fit"
              >
                {showAbout ? "CLOSE" : "READ ABOUT ME"}
              </button>
              <br />

              <div
                className={`flex flex-col gap-4   overflow-hidden transition-all duration-500 ease-in-out origin-top ${showAbout ? 'max-h-[1000px] opacity-100  scale-y-100' : 'max-h-0 opacity-0 p-0 scale-y-0'
                  }`}
              >
                <span className="text">My path hasn't been typical. I started as a data engineer helping companies measure their environmental impact through ESG analytics. I built dashboards, ML models, and data infrastructure that powered sustainability at scale.</span>

                <span className="text"> But something was missing.</span>

                <span className="text">My experience working directly with local social organizations still echoed as the most driven I've ever been. I decided I needed to be close to the people creating change. So I spent years facilitating innovation workshops, led social innovation programs, mentored founders, and learned that for tech to be impactful, it didn't need to be complex—it needed to be centered around people. </span>

                <span className="text">Today, I combine both worlds. I help creative entrepreneurs, social ventures, and mission-driven organizations turn ambitious ideas into digital realities. Whether it's prototyping an MVP, building data infrastructure that actually helps make decisions, or facilitating design sprints to craft user experiences. I bring technical experience and creative empathy to every project. </span>

                <span className="text"> I've been pursuing photography and music all my life, and I make them an inherent part of my process, bringing stories and aesthetics to the work.</span>

                <span className="text">If you believe in your project and want to bring it to the next level, let's talk</span>
              </div>
            </div>
            <Image
              src={"/LandingPage/photomoi2.jpg"}
              width={400}
              height={400}
              alt="photoTom"
              className="rounded grayscale hover:grayscale-0 transition-all h-auto w-auto max-h-[400px]"
            ></Image>
          </div>

        </div>
      </section>

      {/* ==================== TRUSTED BY / LOGOS SECTION ==================== */}
      <div className="h-auto w-screen flex flex-col items-center justify-center py-8 bg-white gap-2">
        <h3 className={`${bebas.className} text-4xl tracking-wider`}>THEY TRUSTED ME</h3>
        <div className="w-20 h-1 bg-purple-500"></div>
      </div>

      <section className="w-screen h-55 relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] ">
        <Image
          src={"/LandingPage/land5.jpg"}
          fill
          alt="mountains"
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-white/75"></div>

        <div className="relative w-full h-full flex items-center justify-center">
          <Marquee speed={50} gradient={false}>
            {[
              { name: "Aplanet", logo: "/logos/Aplanet.png" },
              { name: "Bechained", logo: "/logos/Bechained.png" },
              { name: "Homeless Entrepreneur", logo: "/logos/HE.png" },
              { name: "180 Degree Consulting", logo: "/logos/180dc.png" },
              { name: "Impact Hub", logo: "/logos/impacthub.png" }
            ].map((item) => (
              <div key={item.name} className="mx-30">
                <Image
                  src={item.logo}
                  width={180}
                  height={100}
                  alt={item.name}
                />
              </div>
            ))}
          </Marquee>
        </div>


      </section>

      {/* ==================== PHOTOGRAPHY CTA SECTION ==================== */}
      <div className="h-auto w-screen flex flex-col items-center justify-center py-8 bg-white gap-2">
        <h3 className={`${bebas.className} text-4xl tracking-wider`}>LIKED THE PHOTOS? </h3>
        <div className="w-20 h-1 bg-purple-500"></div>
      </div>

      {/* ==================== FOOTER ==================== */}
      <footer className="w-screen bg-black text-white py-10 px-5 md:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left - About */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <Image src={"/face.png"} alt="face" height={50} width={50} className="bg-white rounded-3xl" />
              <span className={`${bebas.className} text-3xl `}>KOTTIO</span>
            </div>
            <p className="text-sm text-gray-400">
              Full Stack Developer & Data Consultant helping creative entrepreneurs
              turn ambitious ideas into digital realities.
            </p>
          </div>

          {/* Center - Quick Links */}
          <div className="flex flex-col gap-4">
            <h3 className={`${bebas.className} text-2xl`}>Quick Links</h3>
            <ul className="flex flex-col gap-2 text-sm text-gray-400">
              <li className="hover:text-purple-500 transition-colors cursor-pointer">About</li>
              <li className="hover:text-purple-500 transition-colors cursor-pointer">Projects</li>
              <li className="hover:text-purple-500 transition-colors cursor-pointer">Tech Stack</li>
              <li className="hover:text-purple-500 transition-colors cursor-pointer">Contact</li>
            </ul>
          </div>

          {/* Right - Contact */}
          <div className="flex flex-col gap-4">
            <h3 className={`${bebas.className} text-2xl`}>Get In Touch</h3>
            <div className="flex flex-col gap-2 text-sm text-gray-400">
              <a href="mailto:thomas.cottiaux@example.com" className="hover:text-purple-500 transition-colors">
                thomas.cottiaux@gmail.com
              </a>
              <div className="flex gap-4 mt-2">
                <a href="#" className="hover:text-purple-500 transition-colors">
                  <Github className="w-6 h-6" />
                </a>
                <a href="#" className="hover:text-purple-500 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Thomas Cottiaux. Building products that matter.</p>
        </div>
      </footer>



    </div>





  )
}

