'use client'

import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-background border-t border-border py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
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
              <h4 className="font-semibold text-sm mb-4">Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="https://dexscreener.com/solana/6GYDFqr1tmJgRAuxZmK1LNqfUGK8TNM8YrGrFJZ9r2So" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    DexScreener
                  </Link>
                </li>
                <li>
                  <Link href="https://pump.fun/coin/7p8hs6fZwTXvSYESCdHgWCXVsVcxTrX1cs3Q4yNGpump" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Pump.fun
                  </Link>
                </li>
                <li>
                  <Link href="https://x.com/i/communities/2018311115143565435" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    X Community
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-sm mb-4">Charity</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="https://www.nationalcac.org" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    NCAC Website
                  </Link>
                </li>
                <li>
                  <Link href="https://www.nationalcac.org/get-involved/give-crypto/" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Donate Crypto
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
