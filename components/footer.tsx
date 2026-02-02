'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-white border-t-4 border-secondary py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-12">
            <div>
              <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                <span className="text-2xl">₿</span>
                <span>BTC – Buy The Children</span>
              </h3>
              <p className="text-sm text-muted-foreground">
                100% of developer fees donated to charity, supporting the National Children's Advocacy Center in the fight against child abuse.
              </p>
            </div>

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
          </div>

          {/* Divider */}
          <div className="border-t border-border pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-xs text-muted-foreground text-center md:text-left">
                © {currentYear} BTC – Buy The Children. All rights reserved.
              </p>

              <p className="text-xs text-muted-foreground text-center">
                <strong>Disclaimer:</strong> This project donates 100% of developer fees to charity. Always verify contract addresses and conduct your own research before transacting.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
