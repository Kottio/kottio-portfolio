import Image from "next/image"
import { bebas } from "@/lib/fonts"
import { Github } from "lucide-react"
export default function Footer() {
  return (<footer className="w-screen bg-black text-white py-10 px-5 md:px-10 lg:px-20">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Left - About */}
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <Image src={"/face.png"} alt="Thomas Cottiaux logo | KOTTIO logo" height={50} width={50} className="bg-white rounded-3xl" />
          <span className={`${bebas.className} text-3xl `}>KOTTIO</span>
        </div>
        <p className="text-sm text-gray-300">
          Full Stack Developer & Data Consultant helping creative entrepreneurs
          turn ambitious ideas into digital realities.
        </p>
      </div>

      {/* Center - Quick Links */}
      <div className="flex flex-col gap-4">
        <h3 className={`${bebas.className} text-2xl`}>Quick Links</h3>
        <ul className="flex flex-col gap-2 text-sm text-gray-300">
          <li><a href="#about" className="hover:text-purple-400 transition-colors">About</a></li>
          <li><a href="#projects" className="hover:text-purple-400 transition-colors">Projects</a></li>
          <li><a href="#tech-stack" className="hover:text-purple-400 transition-colors">Tech Stack</a></li>
          <li><a href="#contact" className="hover:text-purple-400 transition-colors">Contact</a></li>
        </ul>
      </div>

      {/* Right - Contact */}
      <div className="flex flex-col gap-4">
        <h3 className={`${bebas.className} text-2xl`}>Get In Touch</h3>
        <div className="flex flex-col gap-2 text-sm text-gray-300">
          <a href="mailto:thomas.cottiaux@example.com" className="hover:text-purple-500 transition-colors">
            thomas.cottiaux@gmail.com
          </a>
          <div className="flex gap-4 mt-2">
            <a
              href="https://github.com/Kottio"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-500 transition-colors"
              aria-label="Visit Thomas Cottiaux's GitHub profile">
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/thomas-cottiaux-9160aa175/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-500 transition-colors"
              aria-label="Visit Thomas Cottiaux's LinkedIn profile">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>

    {/* Bottom Bar */}
    <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
      <p>© {new Date().getFullYear()} Thomas Cottiaux. Building products that matter.</p>
    </div>
  </footer>)
}