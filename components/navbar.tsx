'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false)
    }
  }

  return (
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-sm px-4">
      {/* List-style navbar container */}
      <div className="bg-white shadow-xl border-4 border-green-500 rounded-3xl overflow-hidden">
        {/* Logo Section */}
        <div className="flex items-center justify-between px-6 py-4 border-b-4 border-green-500">
          <Link href="#hero" className="flex-shrink-0">
            <button
              onClick={() => scrollToSection('hero')}
              className="w-14 h-14 rounded-full overflow-hidden bg-gradient-to-br from-orange-400 to-orange-500 flex items-center justify-center border-4 border-cyan-400 hover:scale-110 transition-transform shadow-md"
            >
              <Image
                src="/images/image.png"
                alt="BTC Logo"
                width={48}
                height={48}
                className="object-cover"
              />
            </button>
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-green-600 transition-colors"
            aria-label="Toggle Menu"
          >
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Navigation List - Always visible on desktop, toggleable on mobile */}
        <div className={`${isOpen ? 'block' : 'hidden'} md:block`}>
          {/* About */}
          <button
            onClick={() => scrollToSection('about')}
            className="w-full text-left px-6 py-4 font-bold text-gray-800 hover:bg-gray-50 transition-colors border-b-4 border-green-500"
          >
            About
          </button>

          {/* Transactions */}
          <button
            onClick={() => scrollToSection('transactions')}
            className="w-full text-left px-6 py-4 font-bold text-gray-800 hover:bg-gray-50 transition-colors border-b-4 border-green-500"
          >
            Transactions
          </button>

          {/* NCAC.ORG */}
          
            href="https://ncac.org"
            target="_blank"
            rel="noopener noreferrer"
            className="block px-6 py-4 font-bold text-gray-800 hover:bg-gray-50 transition-colors"
          >
            NCAC.ORG
          </a>
        </div>
      </div>
    </nav>
  )
}
