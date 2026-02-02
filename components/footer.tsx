'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <>
      {/* White Divider */}
      <div className="h-6 bg-white"></div>

      <footer className="bg-white border-t-4 border-secondary py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Main Footer Content */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-12">
              {/* Brand */}
              <div>
                <h4 className="font-bold text-lg text-foreground mb-4">BTC</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  100% of rewards donated to prevent child abuse through NCAC.
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
                <h4 className="font-bold text-sm mb-4 text-foreground">Donate</h4>
                <ul className="space-y-3">
                  <li>
                    <Link href="https://t.co/7vqarBXxAV" target="_blank" rel="noopener noreferrer" className="text-sm text-foreground hover:text-primary font-semibold transition-colors">
                      Support NCAC
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-border my-8"></div>

            {/* Bottom Section */}
            <div className="text-center">
              <p className="text-xs text-muted-foreground mb-4">
                © {currentYear} BTC – Buy The Children. All rights reserved.
              </p>
              <p className="text-xs text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                Disclaimer: This is a community-driven token. 100% of developer fees are donated to the National Children's Advocacy Center. Always do your own research before investing in any cryptocurrency.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
