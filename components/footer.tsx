'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <>
      {/* White Divider */}
      <div className="h-3 bg-white"></div>

      <footer className="bg-white border-t-4 border-secondary py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Main Footer Content */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-12">
              {/* Brand */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-full p-2 border-2 border-secondary">
                    <span className="text-2xl font-black text-white">B</span>
                  </div>
                  <div>
                    <h3 className="font-black text-lg text-foreground">BTC</h3>
                    <p className="text-xs font-bold text-secondary">Buy The Children</p>
                  </div>
                </div>
                <p className="text-sm font-semibold text-foreground">
                  100% of fees donated to charity
                </p>
              </div>

              {/* Buy */}
              <div>
                <h4 className="font-bold text-sm mb-4 text-foreground">Buy</h4>
                <ul className="space-y-3">
                  <li>
                    <Link href="https://pump.fun" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-foreground hover:text-primary font-semibold transition-colors">
                      <Image src="/images/pump.png" alt="Pump" width={20} height={20} />
                      Pump.fun
                    </Link>
                  </li>
                  <li>
                    <Link href="https://dexscreener.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-foreground hover:text-primary font-semibold transition-colors">
                      <Image src="/images/dex.png" alt="Dex" width={20} height={20} />
                      DexScreener
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Follow */}
              <div>
                <h4 className="font-bold text-sm mb-4 text-foreground">Follow</h4>
                <ul className="space-y-3">
                  <li>
                    <Link href="https://x.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-foreground hover:text-primary font-semibold transition-colors">
                      <Image src="/images/x.png" alt="X" width={20} height={20} />
                      X / Twitter
                    </Link>
                  </li>
                  <li>
                    <Link href="https://ncac.org" target="_blank" rel="noopener noreferrer" className="text-sm text-foreground hover:text-primary font-semibold transition-colors">
                      NCAC.ORG
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Charity */}
              <div>
                <h4 className="font-bold text-sm mb-4 text-foreground">Charity</h4>
                <ul className="space-y-3">
                  <li>
                    <Link href="https://ncac.org" target="_blank" rel="noopener noreferrer" className="text-sm text-foreground hover:text-primary font-semibold transition-colors">
                      NCAC Website
                    </Link>
                  </li>
                  <li>
                    <Link href="https://t.co/7vqarBXxAV" target="_blank" rel="noopener noreferrer" className="text-sm text-foreground hover:text-primary font-semibold transition-colors">
                      Donate
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Copyright & Disclaimer */}
            <div className="border-t-2 border-border pt-8 text-center">
              <p className="text-xs font-bold text-muted-foreground mb-4">
                © {currentYear} BTC – Buy The Children. All rights reserved.
              </p>
              <p className="text-xs font-semibold text-muted-foreground mb-4 max-w-2xl mx-auto">
                This is a community-driven project. Always do your own research. Crypto investments carry risk.
              </p>
              <p className="text-xs font-semibold text-secondary">
                100% of developer fees are donated to the National Children's Advocacy Center (NCAC)
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
