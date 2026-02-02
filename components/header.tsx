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
      <nav className="bg-white shadow-xl border border-gray-200 backdrop-blur-md transition-all duration-300 rounded-full">
        <div className="flex items-center justify-between px-4 py-2 md:px-6 md:py-3">
          {/* Logo */}
          <Link href="#hero" className="flex-shrink-0">
            <button
              onClick={() => scrollToSection('hero')}
              className="w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center border-4 border-secondary hover:shadow-lg transition-transform hover:scale-105"
            >
              <Image
                src="/images/btc.png"
                alt="Logo"
                width={40}
                height={40}
                className="object-cover md:w-11 md:h-11"
              />
            </button>
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center gap-3 md:gap-8">
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-blue-500 font-medium transition-colors text-xs md:text-sm"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('transactions')}
              className="text-gray-700 hover:text-blue-500 font-medium transition-colors text-xs md:text-sm"
            >
              Transactions
            </button>
            <a
              href="https://ncac.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-blue-500 font-medium transition-colors text-xs md:text-sm"
            >
              NCAC.ORG
            </a>
          </div>
        </div>
      </nav>
    </header>
  )
}
