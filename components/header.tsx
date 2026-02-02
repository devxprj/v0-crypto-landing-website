'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false)
    }
  }

  return (
    <header className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-xs px-4">
      <nav className="bg-black/90 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden">
        <div className="md:hidden flex justify-end px-4 pt-3">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white text-2xl"
            aria-label="Toggle Menu"
          >
            {isOpen ? '✕' : '☰'}
          </button>
        </div>

        <div className={`${isOpen ? 'block' : 'hidden'} md:block py-6`}>
          <button
            onClick={() => scrollToSection('about')}
            className="w-full text-center px-6 py-3 font-bold text-white hover:text-green-400 transition-colors"
          >
            About
          </button>
          
          <button
            onClick={() => scrollToSection('transactions')}
            className="w-full text-center px-6 py-3 font-bold text-white hover:text-green-400 transition-colors"
          >
            Transactions
          </button>
          
          <a
            href="https://ncac.org"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center px-6 py-3 font-bold text-white hover:text-green-400 transition-colors"
          >
            NCAC.ORG
          </a>

          <div className="px-6 pt-4">
            <Link
              href="#donate"
              className="block bg-white hover:bg-gray-100 text-black font-bold py-3 px-6 rounded-full transition-colors text-center"
            >
              DONATE NOW
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}
