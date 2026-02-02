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
    <header className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-5xl px-4">
      {/* Centered Rounded Navbar */}
      <nav className="bg-white rounded-full shadow-xl border-4 border-secondary">
        <div className="flex items-center justify-between px-6 py-3 lg:px-8 lg:py-4">
          {/* Logo Avatar Box */}
          <Link href="#hero" className="flex-shrink-0">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-full p-1 border-4 border-secondary hover:scale-110 transition-transform shadow-md">
              <Image
                src="/images/btc.png"
                alt="BTC"
                width={45}
                height={45}
                className="rounded-full"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('about')}
              className="font-bold text-sm text-foreground hover:text-primary transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('transactions')}
              className="font-bold text-sm text-foreground hover:text-primary transition-colors"
            >
              Transactions
            </button>
            <a
              href="https://ncac.org"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-sm text-foreground hover:text-primary transition-colors"
            >
              NCAC.ORG
            </a>
          </div>

          {/* Donate Button - Desktop */}
          <Link
            href="#"
            className="hidden md:block bg-secondary hover:bg-secondary/90 text-white font-bold py-2 px-6 rounded-full transition-colors shadow-md"
          >
            DONATE NOW
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground"
          >
            {isOpen ? (
              <X size={24} />
            ) : (
              <Menu size={24} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t-4 border-secondary px-6 py-4 flex flex-col gap-4">
            <button
              onClick={() => scrollToSection('about')}
              className="font-bold text-foreground hover:text-primary transition-colors text-left"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('transactions')}
              className="font-bold text-foreground hover:text-primary transition-colors text-left"
            >
              Transactions
            </button>
            <a
              href="https://ncac.org"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-foreground hover:text-primary transition-colors"
            >
              NCAC.ORG
            </a>
            <Link
              href="#"
              className="bg-secondary hover:bg-secondary/90 text-white font-bold py-2 px-4 rounded-full transition-colors text-center"
            >
              DONATE NOW
            </Link>
          </div>
        )}
      </nav>
    </header>
  )
}
