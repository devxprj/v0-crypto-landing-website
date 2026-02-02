'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-5xl px-4">
      <nav className="bg-white shadow-2xl border-4 border-primary backdrop-blur-md transition-all duration-300 rounded-3xl">
        <div className="flex items-center justify-between px-6 py-3 md:px-8 md:py-4">
          {/* Logo */}
          <Link href="#hero" className="flex-shrink-0">
            <button
              onClick={() => scrollToSection('hero')}
              className="w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden bg-gradient-to-br from-primary via-accent to-secondary flex items-center justify-center border-4 border-secondary hover:shadow-2xl transition-all hover:scale-110 hover:-rotate-12"
            >
              <Image
                src="/images/image.png"
                alt="Logo"
                width={48}
                height={48}
                className="object-cover"
              />
            </button>
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center gap-2 md:gap-6">
            <button
              onClick={() => scrollToSection('about')}
              className="text-foreground hover:text-primary font-black transition-all text-xs md:text-sm uppercase tracking-wider hover:scale-125 hover:-rotate-3 hover:bg-accent/20 px-2 py-1 rounded-full"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('transactions')}
              className="text-foreground hover:text-primary font-black transition-all text-xs md:text-sm uppercase tracking-wider hover:scale-125 hover:rotate-3 hover:bg-accent/20 px-2 py-1 rounded-full"
            >
              Donate
            </button>
            <a
              href="https://ncac.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary font-black transition-all text-xs md:text-sm uppercase tracking-wider hover:scale-125 hover:-rotate-3 hover:bg-accent/20 px-2 py-1 rounded-full"
            >
              NCAC
            </a>
          </div>
        </div>
      </nav>
    </header>
  )
}
