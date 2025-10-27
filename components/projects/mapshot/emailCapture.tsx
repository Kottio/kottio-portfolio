
'use client'

import Image from "next/image"
import EmailCaptureForm from "./emailCaptureForm"

export default function EmailCapture() {

  return (
    <section id="waitlist" className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] h-auto py-10 ">
      <Image
        src={"/LandingPage/land-vert.jpg"}
        fill
        alt="Join the Mapshot waitlist"
        className="object-cover object-bottom "
        quality={85}
        priority
      />

      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 " />

      <div className="relative z-10">
        {/* <SectionHeader sectionName="Join The Waitlist" white={true} /> */}

        <div className="relative h-full flex justify-center w-screen items-center px-4 md:px-8 lg:px-16 md:mt-0 ">
          <div className="max-w-4xl w-full bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8 md:p-12 lg:p-16">

            {/* Header Content */}
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Be Part of Something Special
              </h2>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Join a community of passionate photographers getting early access to Mapshot.
                Help shape the future of photography location discovery with your insights.
              </p>
            </div>

            {/* Benefits Grid */}
            <div className="grid md:grid-cols-3 gap-6 mb-10">
              <div className="text-center p-4">
                <div className="text-4xl mb-3">🎯</div>
                <h3 className="font-semibold text-gray-900 mb-2">Early Access</h3>
                <p className="text-sm text-gray-600">Be among the first to explore and use Mapshot</p>
              </div>
              <div className="text-center p-4">
                <div className="text-4xl mb-3">⭐</div>
                <h3 className="font-semibold text-gray-900 mb-2">Founding Member Status</h3>
                <p className="text-sm text-gray-600">Special badge and exclusive features</p>
              </div>
              <div className="text-center p-4">
                <div className="text-4xl mb-3">💡</div>
                <h3 className="font-semibold text-gray-900 mb-2">Shape the Product</h3>
                <p className="text-sm text-gray-600">Your feedback directly influences development</p>
              </div>
            </div>

            {/* Email Form */}
            <EmailCaptureForm />

            {/* Footer Note */}
            <p className="text-center text-sm text-gray-500 mt-6">
              We respect your privacy. No spam, just updates on Mapshot's launch.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}