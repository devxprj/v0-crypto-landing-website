'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function HeroSection() {
  return (
    <section id="hero" className="pt-40 pb-20 md:py-40 px-4 border-b border-border">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="mb-8 inline-block">
          <div className="text-5xl md:text-7xl font-bold tracking-tighter mb-4 text-foreground">
            BTC
          </div>
          <div className="text-xl md:text-2xl font-semibold text-primary mb-2">
            Buy The Children
          </div>
        </div>
        
        <p className="text-lg md:text-2xl font-semibold text-primary mb-8 leading-relaxed">
          100% of fees donated to charity
        </p>
        
        <p className="text-base md:text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
          A fun, community-driven crypto token supporting the National Children's Advocacy Center, dedicated to preventing child abuse and protecting vulnerable children.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="https://dexscreener.com/solana/6GYDFqr1tmJgRAuxZmK1LNqfUGK8TNM8YrGrFJZ9r2So" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="w-full sm:w-auto bg-primary text-primary-foreground hover:opacity-90 font-semibold">
              View on DexScreener
            </Button>
          </Link>
          
          <Link href="https://pump.fun/coin/7p8hs6fZwTXvSYESCdHgWCXVsVcxTrX1cs3Q4yNGpump" target="_blank" rel="noopener noreferrer">
            <Button size="lg" variant="outline" className="w-full sm:w-auto border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold bg-transparent">
              Buy on Pump.fun
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
