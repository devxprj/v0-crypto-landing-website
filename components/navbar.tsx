'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className="fixed top-3 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-full md:max-w-4xl px-2 md:px-4">
      <div className="bg-white shadow-xl border-4 border-primary backdrop-blur-md transition-all duration-300 rounded-2xl md:rounded-3xl">
        <div className="flex items-center justify-between px-3 md:px-6 py-3 md:py-4">
          {/* Logo */}
          <Link href="#hero" className="flex-shrink-0">
            <button
              onClick={() => scrollToSection('hero')}
              className="w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden bg-gradient-to-br from-primary via-accent to-secondary flex items-center justify-center border-3 md:border-4 border-secondary hover:shadow-lg md:hover:shadow-2xl transition-all hover:scale-105 md:hover:scale-110 hover:-rotate-12"
            >
              <Image
                src="/images/image.png"
                alt="Logo"
                width={40}
                height={40}
                className="object-cover"
              />
            </button>
          </Link>

          {/* Navigation Buttons */}
          <div className="flex items-center gap-1 md:gap-4">
            <button
              onClick={() => scrollToSection('about')}
              className="text-foreground hover:text-primary font-black transition-all text-xs md:text-sm uppercase tracking-widest hover:scale-110 md:hover:scale-125 hover:-rotate-2 md:hover:-rotate-3 hover:bg-accent/20 px-1.5 md:px-2 py-0.5 md:py-1 rounded-full"
            >
              <span className="hidden sm:inline">About</span>
              <span className="sm:hidden">FAQ</span>
            </button>
            <button
              onClick={() => scrollToSection('transactions')}
              className="text-foreground hover:text-primary font-black transition-all text-xs md:text-sm uppercase tracking-widest hover:scale-110 md:hover:scale-125 hover:rotate-2 md:hover:rotate-3 hover:bg-accent/20 px-1.5 md:px-2 py-0.5 md:py-1 rounded-full"
            >
              Donations
            </button>
            <a
              href="https://ncac.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary font-black transition-all text-xs md:text-sm uppercase tracking-widest hover:scale-110 md:hover:scale-125 hover:-rotate-2 md:hover:-rotate-3 hover:bg-accent/20 px-1.5 md:px-2 py-0.5 md:py-1 rounded-full"
            >
              NCAC
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
