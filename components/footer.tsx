'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <>
      {/* Playful Divider */}
      <div className="h-6 bg-gradient-to-r from-primary via-accent to-secondary"></div>

      <footer className="bg-gradient-to-br from-foreground to-gray-900 py-12 md:py-16 px-4 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-10 right-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl"></div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-12">
            {/* Brand Section */}
            <div className="flex flex-col items-center md:items-start">
              <div className="w-16 h-16 rounded-full overflow-hidden bg-gradient-to-br from-primary to-secondary border-4 border-accent flex items-center justify-center mb-4">
                <Image
                  src="/images/image.png"
                  alt="BTC Logo"
                  width={48}
                  height={48}
                  className="object-cover"
                />
              </div>
              <h3 className="text-2xl font-black text-white mb-2">
                Buy The Children
              </h3>
              <p className="text-accent font-bold text-sm">
                Making a difference, one transaction at a time
              </p>
            </div>

            {/* Quick Links */}
            <div className="flex flex-col items-center">
              <h4 className="text-lg font-black text-white mb-4 uppercase tracking-wider">Quick Links</h4>
              <div className="space-y-2 text-center">
                <Link
                  href="https://ncac.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-accent hover:text-primary font-bold transition-colors"
                >
                  NCAC.org
                </Link>
                <button
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="block text-accent hover:text-primary font-bold transition-colors"
                >
                  About Us
                </button>
                <button
                  onClick={() => document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' })}
                  className="block text-accent hover:text-primary font-bold transition-colors"
                >
                  Get Started
                </button>
              </div>
            </div>

            {/* Social & Info */}
            <div className="flex flex-col items-center md:items-end">
              <h4 className="text-lg font-black text-white mb-4 uppercase tracking-wider">Stay Connected</h4>
              <p className="text-accent text-sm font-bold mb-4 text-center md:text-right max-w-xs">
                Join our community making a real difference for children
              </p>
              <div className="flex gap-4">
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-primary hover:bg-secondary flex items-center justify-center transition-all hover:scale-110 font-bold text-white"
                >
                  𝕏
                </a>
                <a
                  href="https://t.me"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-secondary hover:bg-primary flex items-center justify-center transition-all hover:scale-110 font-bold text-white"
                >
                  ✈️
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t-4 border-accent/30 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
            <p className="text-accent font-bold text-sm">
              © {currentYear} Buy The Children. All donations go to NCAC.
            </p>
            <p className="text-accent font-bold text-sm">
              Protecting children. Changing lives. Building hope. 🌈
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}
