'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl tracking-tight hover:opacity-80 transition-opacity">
          <span className="text-2xl">₿</span>
          <span>BTC</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-8">
          <Link href="#contract" className="text-sm font-medium hover:text-accent transition-colors">
            Contract
          </Link>
          <Link href="#about" className="text-sm font-medium hover:text-accent transition-colors">
            About
          </Link>
          <Link href="#charity" className="text-sm font-medium hover:text-accent transition-colors">
            Charity
          </Link>
          <Link href="#transactions" className="text-sm font-medium hover:text-accent transition-colors">
            Transactions
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="https://dexscreener.com/solana/6GYDFqr1tmJgRAuxZmK1LNqfUGK8TNM8YrGrFJZ9r2So"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-10 h-10 rounded-full hover:bg-muted transition-colors"
            title="View on DexScreener"
          >
            <Image
              src="/images/dex.png"
              alt="DexScreener"
              width={24}
              height={24}
              className="w-6 h-6"
            />
          </Link>
          
          <Link
            href="https://pump.fun/coin/7p8hs6fZwTXvSYESCdHgWCXVsVcxTrX1cs3Q4yNGpump"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-10 h-10 rounded-full hover:bg-muted transition-colors"
            title="Buy on Pump.fun"
          >
            <Image
              src="/images/pump.png"
              alt="Pump.fun"
              width={24}
              height={24}
              className="w-6 h-6"
            />
          </Link>
          
          <Link
            href="https://x.com/i/communities/2018311115143565435"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-10 h-10 rounded-full hover:bg-muted transition-colors"
            title="Join X Community"
          >
            <Image
              src="/images/x.png"
              alt="X"
              width={20}
              height={20}
              className="w-5 h-5"
            />
          </Link>
        </div>
      </div>
    </header>
  )
}
