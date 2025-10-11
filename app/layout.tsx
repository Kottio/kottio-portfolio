import type { Metadata } from "next";
import { Nunito, Bebas_Neue } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  variable: "--font-nunito",
});
const bebas = Bebas_Neue({
  weight: '400',
  subsets: ['latin']
})

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
  }

};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${nunito.variable} antialiased`}      >
        {children}
      </body>
    </html>
  );
}
