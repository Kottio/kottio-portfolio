import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  variable: "--font-nunito",
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
      <body
        className={`${nunito.variable} antialiased text-neutral-800 bg-white`}      >
        {children}
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
