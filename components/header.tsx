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
    <header className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-3xl px-4">
      <nav className="bg-white shadow-lg border border-gray-200 backdrop-blur-md transition-all duration-300 rounded-full">
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

          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-orange-500 font-medium transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('transactions')}
              className="text-gray-700 hover:text-orange-500 font-medium transition-colors"
            >
              Transactions
            </button>
            <a
              href="https://ncac.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-orange-500 font-medium transition-colors"
            >
              NCAC.ORG
            </a>
          </div>

          <div className="hidden md:flex items-center">
            
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-orange-500 transition-colors"
            aria-label="Toggle Menu"
          >
            {isOpen ? '✕' : '☰'}
          </button>
        </div>

        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? 'max-h-96 py-4' : 'max-h-0 py-0'
          } bg-gradient-to-br from-orange-400 to-orange-500 border-t border-orange-600 rounded-b-3xl`}
        >
          <ul className="flex flex-col gap-2 px-4">
            <li>
              <button
                onClick={() => scrollToSection('about')}
                className="w-full text-left text-white hover:text-gray-100 font-bold py-2"
              >
                About
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('transactions')}
                className="w-full text-left text-white hover:text-gray-100 font-bold py-2"
              >
                Transactions
              </button>
            </li>
            <li>
              <a
                href="https://ncac.org"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full block text-left text-white hover:text-gray-100 font-bold py-2"
              >
                NCAC.ORG
              </a>
            </li>
            <li className="pt-2">
              <Link
                href="#donate"
                className="block bg-white hover:bg-gray-100 text-orange-500 font-bold py-3 px-6 rounded-full transition-colors text-center"
              >
                DONATE NOW
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}
