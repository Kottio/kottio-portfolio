import { Award, Zap, Globe, Shield } from "lucide-react"
import SectionHeader from "../ui/sectionHeader"

export default function TechnicalSection() {
  const metrics = [
    {
      icon: Zap,
      title: "Performance",
      score: "99/100",
      description: "Lighthouse Score",
      details: ["< 2.5s LCP", "< 100ms FID", "< 0.1 CLS"],
      color: "bg-yellow-500"
    },
    {
      icon: Award,
      title: "Accessibility",
      score: "96/100",
      description: "WCAG 2.1 AA",
      details: ["Semantic HTML", "ARIA Labels", "Keyboard Nav"],
      color: "bg-blue-500"
    },
    {
      icon: Shield,
      title: "Best Practices",
      score: "100/100",
      description: "Lighthouse Score",
      details: ["HTTPS", "No Console Errors", "Secure"],
      color: "bg-green-500"
    },
    {
      icon: Globe,
      title: "SEO",
      score: "100/100",
      description: "Lighthouse Score",
      details: ["Meta Tags", "Sitemap", "Structured Data"],
      color: "bg-purple-500"
    }
  ]

  const techStack = [
    { category: "Framework", tech: "Next.js 15" },
    { category: "UI Library", tech: "React 19" },
    { category: "Language", tech: "TypeScript" },
    { category: "Styling", tech: "Tailwind CSS" },
    { category: "Rendering", tech: "SSG (Static Site Generation)" },
    { category: "Optimization", tech: "Image Optimization, Font Optimization" },
  ]

  return (
    <section id="technical-details" className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] py-20 bg-gradient-to-b from-white to-gray-50">
      <SectionHeader sectionName="TECHNICAL DETAILS" white={true} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-10 pt-20">

        {/* Core Web Vitals & Lighthouse Scores */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-10">Lighthouse Performance Metrics</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {metrics.map((metric) => {
              const Icon = metric.icon
              return (
                <div key={metric.title} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`${metric.color} p-3 rounded-lg`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-xl font-bold">{metric.title}</h4>
                  </div>

                  <div className="mb-4">
                    <div className="text-4xl font-bold text-gray-900">{metric.score}</div>
                    <div className="text-sm text-gray-600">{metric.description}</div>
                  </div>

                  <ul className="space-y-2">
                    {metric.details.map((detail) => (
                      <li key={detail} className="flex items-center gap-2 text-sm text-gray-700">
                        <span className="text-green-500">✓</span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>

        {/* Core Web Vitals Explanation */}
        <div className="mb-16 bg-white rounded-xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold mb-6">Core Web Vitals</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-bold text-lg mb-2">LCP - Largest Contentful Paint</h4>
              <p className="text-gray-600 mb-2">Measures loading performance</p>
              <div className="text-2xl font-bold text-green-600">&lt; 2.5s</div>
              <p className="text-sm text-gray-500 mt-2">Good: &lt; 2.5s | Needs Improvement: 2.5-4s | Poor: &gt; 4s</p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-2">FID - First Input Delay</h4>
              <p className="text-gray-600 mb-2">Measures interactivity</p>
              <div className="text-2xl font-bold text-green-600">&lt; 100ms</div>
              <p className="text-sm text-gray-500 mt-2">Good: &lt; 100ms | Needs Improvement: 100-300ms | Poor: &gt; 300ms</p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-2">CLS - Cumulative Layout Shift</h4>
              <p className="text-gray-600 mb-2">Measures visual stability</p>
              <div className="text-2xl font-bold text-green-600">&lt; 0.1</div>
              <p className="text-sm text-gray-500 mt-2">Good: &lt; 0.1 | Needs Improvement: 0.1-0.25 | Poor: &gt; 0.25</p>
            </div>
          </div>
        </div>

        {/* Tech Stack Details */}

        {/* Accessibility Compliance */}

      </div>
    </section>
  )
}
