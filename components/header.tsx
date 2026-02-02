'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false)
    }
  }

  return (
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-3xl px-4">
      <div className="bg-white shadow-lg border border-gray-200 backdrop-blur-md transition-all duration-300 rounded-full">
        <div className="flex items-center justify-between px-6 py-3">
          <Link href="#hero" className="flex-shrink-0">
            <button
              onClick={() => scrollToSection('hero')}
              className="w-12 h-12 rounded-full overflow-hidden bg-gradient-to-br from-orange-400 to-orange-500 flex items-center justify-center border-4 border-cyan-400 hover:shadow-lg transition-transform hover:scale-105"
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

          <div className="flex items-center gap-4 md:gap-8">
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-orange-500 font-medium transition-colors text-sm md:text-base"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('transactions')}
              className="text-gray-700 hover:text-orange-500 font-medium transition-colors text-sm md:text-base"
            >
              Transactions
            </button>
            <a
              href="https://ncac.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-orange-500 font-medium transition-colors text-sm md:text-base"
            >
              NCAC.ORG
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
