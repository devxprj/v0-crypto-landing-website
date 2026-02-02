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
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-3xl px-4">
      {/* Navbar container */}
      <div className="bg-white shadow-lg border border-gray-200 backdrop-blur-md transition-all duration-300 rounded-full md:rounded-full">
        <div className="flex items-center justify-between px-6 py-3">
          {/* Logo */}
          <Link href="#hero" className="flex-shrink-0">
            <button
              onClick={() => scrollToSection('hero')}
              className="w-12 h-12 rounded-full overflow-hidden bg-orange-500 flex items-center justify-center border-2 border-orange-500 hover:shadow-lg transition-transform hover:scale-105"
            >
              <Image
                src="/images/image.png"
                alt="BTC Logo"
                width={44}
                height={44}
                className="object-cover"
              />
            </button>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {['about', 'transactions', 'ncac.org'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="text-gray-700 hover:text-orange-500 font-medium transition-colors"
              >
                {section.toUpperCase()}
              </button>
            ))}
          </div>

          {/* Social icons */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 flex items-center justify-center text-gray-600 hover:text-orange-500 transition-colors"
              title="Twitter"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 10.75.5 13-4.5a17.54 17.54 0 001-4c-.5-.75-2-1.72-4-2.3z" />
              </svg>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-orange-500 transition-colors"
            aria-label="Toggle Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile menu as list */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? 'max-h-60 py-4' : 'max-h-0 py-0'
          } bg-white border-t border-gray-200 rounded-b-3xl`}
        >
          <ul className="flex flex-col gap-2 px-4">
            {['about', 'transactions', 'ncac.org'].map((section) => (
              <li key={section}>
                <button
                  onClick={() => scrollToSection(section)}
                  className="w-full text-left text-gray-700 hover:text-orange-500 font-medium py-2"
                >
                  {section.toUpperCase()}
                </button>
              </li>
            ))}
            <li>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full block text-left text-gray-700 hover:text-orange-500 font-medium py-2"
              >
                Twitter
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
