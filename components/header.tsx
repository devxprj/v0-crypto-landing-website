'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

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
    <header className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-md px-4">
      {/* List-Style Navbar */}
      <nav className="bg-white rounded-3xl shadow-xl border-4 border-green-500 overflow-hidden">
        {/* Logo Section */}
        <div className="flex items-center justify-between px-6 py-3 border-b-2 border-green-500">
          <Link href="#hero" className="flex-shrink-0">
            <div className="bg-gradient-to-br from-orange-400 to-orange-500 rounded-full p-1 border-4 border-cyan-400 hover:scale-110 transition-transform shadow-md">
              <Image
                src="/images/btc.png"
                alt="BTC"
                width={45}
                height={45}
                className="rounded-full"
              />
            </div>
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Navigation List - Always visible on desktop, toggleable on mobile */}
        <div className={`${isOpen ? 'block' : 'hidden'} md:block`}>
          <button
            onClick={() => scrollToSection('about')}
            className="w-full text-left px-6 py-4 font-bold text-foreground hover:bg-gray-50 transition-colors border-b-2 border-green-500"
          >
            About
          </button>
          
          <button
            onClick={() => scrollToSection('transactions')}
            className="w-full text-left px-6 py-4 font-bold text-foreground hover:bg-gray-50 transition-colors border-b-2 border-green-500"
          >
            Transactions
          </button>
          
          
            href="https://ncac.org"
            target="_blank"
            rel="noopener noreferrer"
            className="block px-6 py-4 font-bold text-foreground hover:bg-gray-50 transition-colors border-b-2 border-green-500"
          >
            NCAC.ORG
          </a>

          {/* Donate Button */}
          <div className="px-6 py-4">
            <Link
              href="#"
              className="block bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-4 rounded-full transition-colors text-center"
            >
              DONATE NOW
            </Link>
          </div>
        </div>

        {/* Tagline */}
        <div className="px-6 py-4 text-center text-sm text-gray-600 border-t-2 border-green-500">
          Holders become part of a mission focused on care, trust, and change.
        </div>
      </nav>
    </header>
  )
}
