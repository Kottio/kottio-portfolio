'use client'

import Image from "next/image"
import { MapPin, Filter, Camera, Users, Clock, Sparkles } from "lucide-react"

interface Feature {
  icon: React.ReactNode
  title: string
  description: string
  image: string
  imageAlt: string
  reverse?: boolean
}

export default function FeaturesSection() {
  const features: Feature[] = [
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Discover Hidden Gems",
      description: "Explore a curated map of photography locations filtered by mood, style, and lighting conditions. Find the perfect spot for your next shoot with visual feedback from the community.",
      image: "/projects/mapshot/DiscoverSpots.png",
      imageAlt: "Mapshot location discovery interface",
      reverse: false
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Rich Location Insights",
      description: "Dive deep into each spot with detailed information, community photos, and real experiences from other photographers. See optimal shooting times, lighting conditions, crowd levels, and browse through stunning captures from the community.",
      image: "/projects/mapshot/spotDetailsMain.png",
      imageAlt: "Mapshot location details and community photos",
      reverse: true
    },
    {
      icon: <Camera className="w-8 h-8" />,
      title: "Share Your Captures",
      description: "Upload your photos, geotag locations, and share your experiences with the community. Help other photographers discover amazing spots and optimal shooting conditions.",
      image: "/projects/mapshot/CreateSpot.png",
      imageAlt: "Mapshot photo sharing feature",
      reverse: false
    }
  ]

  const highlights = [
    { icon: <Users className="w-6 h-6" />, text: "Community-Driven" },
    { icon: <Clock className="w-6 h-6" />, text: "Real-Time Updates" },
    { icon: <Sparkles className="w-6 h-6" />, text: "AI-Powered Recommendations" }
  ]

  return (
    <section className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-gradient-to-b from-white via-purple-50/30 to-white py-25 md:py-32">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">

        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            See Mapshot
            <span className="text-purple-600"> In Action</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
            Experience the app designed by photographers, for photographers.
          </p>
        </div>

        {/* Features List */}
        <div className="space-y-24 md:space-y-32">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`flex flex-col ${feature.reverse ? 'md:flex-row-reverse' : 'md:flex-row'
                } gap-8 md:gap-12 lg:gap-16 items-center`}
            >
              {/* Text Content */}
              <div className="flex-1 space-y-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 text-purple-600 rounded-2xl">
                  {feature.icon}
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Screenshot */}
              <div className="flex-1 w-full flex justify-center">
                <div className="relative w-full aspect-[745/1500] max-w-[280px] md:max-w-[320px] lg:max-w-[360px] rounded-[3rem] overflow-hidden shadow-2xl border-[12px] border-gray-900 bg-gray-900">
                  <Image
                    src={feature.image}
                    alt={feature.imageAlt}
                    fill
                    className="object-cover"
                    quality={90}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-24 md:mt-32 text-center">
          <div className="bg-gradient-to-r from-purple-600 to-purple-800 rounded-3xl p-8 md:p-12 lg:p-16 text-white">
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Ready to Elevate Your Photography?
            </h3>
            <p className="text-lg md:text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Join thousands of photographers discovering their next perfect location.
            </p>
            <a
              href="#waitlist"
              className="inline-block px-8 py-4 bg-white text-purple-600 font-semibold text-lg rounded-lg hover:bg-gray-100 transition-all transform hover:scale-105 active:scale-95"
            >
              Get Early Access
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
