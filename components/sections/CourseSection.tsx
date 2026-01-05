"use client";

import Image from "next/image";
import SectionHeader from "../ui/sectionHeader";
import CourseEmailCaptureForm from "./CourseEmailCaptureForm";
import { BookOpen, Code, Database, Zap } from "lucide-react";

export default function CourseSection() {
  return (
    <section
      id="course"
      className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] h-auto min-h-screen py-10 md:py-20 flex flex-col"
    >
      <Image
        src={"/LandingPage/land4.jpg"}
        fill
        alt="Full Stack Data course background"
        className="object-cover object-center"
        quality={85}
        priority
      />

      <SectionHeader sectionName="Full Stack Data Course" white />

      <div className="relative z-20 w-full flex-1 flex justify-center items-center px-4 py-8 md:py-12">
        <div className="bg-white/95 backdrop-blur-md h-auto w-full max-w-6xl rounded-3xl p-6 md:p-12 shadow-2xl">
          {/* Header */}
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-violet-700 to-indigo-900 bg-clip-text text-transparent mb-6">
              Master Full Stack Data Engineering
            </h2>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
              Learn to build production-ready data products from scratch. From
              databases to dashboards, APIs to analytics.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
            <div className="bg-gradient-to-br from-violet-50 to-violet-100 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <Database className="w-12 h-12 mx-auto mb-4 text-violet-700" />
              <h3 className="font-bold text-gray-900 mb-2 text-lg">
                Data Engineering
              </h3>
              <p className="text-sm text-gray-600">
                SQL, ETL, pipelines & warehousing
              </p>
            </div>
            <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <Code className="w-12 h-12 mx-auto mb-4 text-indigo-700" />
              <h3 className="font-bold text-gray-900 mb-2 text-lg">Backend Dev</h3>
              <p className="text-sm text-gray-600">
                APIs, authentication & deployment
              </p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <Zap className="w-12 h-12 mx-auto mb-4 text-purple-700" />
              <h3 className="font-bold text-gray-900 mb-2 text-lg">
                Real Projects
              </h3>
              <p className="text-sm text-gray-600">
                Build portfolio-worthy data products
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <BookOpen className="w-12 h-12 mx-auto mb-4 text-blue-700" />
              <h3 className="font-bold text-gray-900 mb-2 text-lg">
                Best Practices
              </h3>
              <p className="text-sm text-gray-600">
                Industry standards & production patterns
              </p>
            </div>
          </div>

          {/* Course Details */}
          {/* <div className="bg-gradient-to-r from-violet-700 to-indigo-900 rounded-xl p-6 md:p-8 mb-8 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">What You'll Learn</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">→</span>
                  <span>Design & build scalable databases</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">→</span>
                  <span>Create production-ready APIs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">→</span>
                  <span>Build automated data pipelines</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">→</span>
                  <span>Master SQL & data modeling</span>
                </li>
              </ul>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">→</span>
                  <span>Deploy to cloud platforms (AWS, Vercel)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">→</span>
                  <span>Create interactive dashboards</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">→</span>
                  <span>Implement authentication & security</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">→</span>
                  <span>Learn industry best practices</span>
                </li>
              </ul>
            </div>
          </div> */}

          {/* Call to Action Section */}
          <div className="max-w-3xl mx-auto">
            {/* Course Page Link Button */}
            <div className="text-center mb-10">
              <a
                href="/course"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white font-bold text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <BookOpen className="w-6 h-6" />
                View Full Course Details
              </a>
              <p className="text-sm text-gray-500 mt-3">
                Explore curriculum, pricing, and what you'll build
              </p>
            </div>

            {/* Divider */}
            <div className="relative mb-10">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white/95 text-gray-500 font-medium">
                  OR
                </span>
              </div>
            </div>

            {/* Email Capture */}
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-center mb-4 text-gray-900">
                Join the Waitlist
              </h3>
              <p className="text-center text-gray-600 mb-6">
                Be the first to know when enrollment opens. Get exclusive
                early-bird pricing and bonus content.
              </p>
              <CourseEmailCaptureForm />
              <p className="text-center text-sm text-gray-500 mt-4">
                No spam. Just updates on course launch and exclusive content.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
