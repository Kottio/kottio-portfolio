import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next"



const nunito = Nunito({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  variable: "--font-nunito",
  display: "swap",
});


export const metadata: Metadata = {
  title: {
    default: "Thomas Cottiaux | Freelance Full Stack Developer , Data Consultant & Data Teaching",
    template: "%s | Thomas Cottiaux"
  },
  description: "FullStack Freelance Developer specializing in React, Next.js, Python, AI integration, and data-driven transformation.",
  keywords: ["Full Stack Developer", "React", "Next.js", "Python", "Data", "Freelance", "Independent Developer", "Create your project", "Integrate AI", "RAG", "Data Literacy", "Data Driven Transformation"],

  openGraph: {
    type: "website",
    url: "https://www.kottio.dev",
    title: "THOMAS COTTIAUX | FullStack Developer",
    description: "FullStack Freelance Developer specializing in React, Next.js, Python, AI integration, and data-driven transformation.",
    images: [{
      url: "https://www.kottio.dev/OgImage.png",
      width: 1200,
      height: 630,
      alt: "Thomas Cottiaux - Full Stack Developer"
    }]
  },
  twitter: {
    card: "summary_large_image",  // Large image preview
    title: "THOMAS COTTIAUX | FullStack Developer",
    description: "FullStack Freelance Developer",
    images: ["https://www.kottio.dev/OgImage.png"]
  },
  robots: {
    index: true,
    follow: true
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5, // Allow zooming for accessibility
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script dangerouslySetInnerHTML={{
          __html: `
            console.log('%c👋 Hey Developer!', 'font-size: 24px; font-weight: bold; color: #8b5cf6;');
            console.log('%c╔═══════════════════════════════════════════╗', 'color: #8b5cf6;');
            console.log('%c║                                           ║', 'color: #8b5cf6;');
            console.log('%c║    Looking for something? 🔍              ║', 'color: #8b5cf6;');
            console.log('%c║                                           ║', 'color: #8b5cf6;');
            console.log('%c║    Built with:                            ║', 'color: #8b5cf6;');
            console.log('%c║    • Next.js 15                           ║', 'color: #8b5cf6;');
            console.log('%c║    • React 19                             ║', 'color: #8b5cf6;');
            console.log('%c║    • TypeScript                           ║', 'color: #8b5cf6;');
            console.log('%c║    • Tailwind CSS                         ║', 'color: #8b5cf6;');
            console.log('%c║                                           ║', 'color: #8b5cf6;');
            console.log('%c║    Lighthouse Scores:                     ║', 'color: #8b5cf6;');
            console.log('%c║    ⚡ Performance: 99/100                 ║', 'color: #10b981;');
            console.log('%c║    🏆 Accessibility: 96/100               ║', 'color: #10b981;');
            console.log('%c║    🛡️  Best Practices: 100/100            ║', 'color: #10b981;');
            console.log('%c║    🌐 SEO: 100/100                        ║', 'color: #10b981;');
            console.log('%c║                                           ║', 'color: #8b5cf6;');
            console.log('%c║    Let\\'s work together! 🚀               ║', 'color: #8b5cf6;');
            console.log('%c║    📧 thomas.cottiaux@gmail.com          ║', 'color: #8b5cf6;');
            console.log('%c║    💼 github.com/Kottio                   ║', 'color: #8b5cf6;');
            console.log('%c║                                           ║', 'color: #8b5cf6;');
            console.log('%c╚═══════════════════════════════════════════╝', 'color: #8b5cf6;');
            console.log('');
            console.log('%cPsst... The code is clean, semantic, and accessible. Feel free to explore! 😉', 'font-style: italic; color: #6b7280;');
          `
        }} />
      </head>
      <body
        className={`${nunito.variable} antialiased text-neutral-800 bg-white`}      >
        {children}
        <SpeedInsights />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Thomas Cottiaux",
              "jobTitle": "Full Stack Developer & Data Consultant",
              "url": "https://www.kottio.dev",
              "sameAs": [
                "https://github.com/Kottio",
                "https://www.linkedin.com/in/thomas-cottiaux-9160aa175/"
              ],
              "knowsAbout": [
                "React",
                "Next.js",
                "TypeScript",
                "Python",
                "Data Analytics",
                "PostgreSQL",
                "AI Integration"
              ],
              "description": "FullStack Freelance Developer specializing in React, Next.js, Python, AI integration, and data-driven transformation.",
              "image": "https://www.kottio.dev/face.png"
            })
          }}
        />
      </body>
    </html>
  );
}
