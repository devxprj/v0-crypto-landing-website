'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function HeroSection() {
  return (
    <>
      <section
        id="hero"
        className="min-h-screen flex items-center justify-center px-4 pt-32 pb-20 bg-background"
      >
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            
            {/* Right Image (Mobile first, reorder on mobile) */}
            <div className="flex justify-center items-center order-1 lg:order-2 mb-8 lg:mb-0">
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
                <div className="absolute inset-0 bg-white rounded-full border-8 border-white shadow-2xl flex items-center justify-center">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/download%20%281%29-8125Boobym0bOYc8JJtWwknjwzRnS5.png"
                    alt="BTC - Buy The Children"
                    fill
                    className="object-contain p-8"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-yellow-400 text-black font-black px-6 py-3 rounded-full border-4 border-black rotate-12 shadow-lg text-lg">
                  100% DONATED
                </div>
                <div className="absolute -top-4 -right-8 bg-yellow-400 text-black font-black px-5 py-2 rounded-full border-4 border-black -rotate-12 shadow-lg text-sm">
                  FOR THE KIDS
                </div>
              </div>
            </div>

            {/* Left Content */}
            <div className="flex flex-col justify-center order-2 lg:order-1">
              <div className="mb-8">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-4">
                  <span className="text-blue-600">Buy</span>
                  <span className="text-red-500"> The</span>
                  <span className="text-primary-foreground"> Children</span>
                </h1>
                <p className="text-xl font-bold">
                  <span className="text-green-500">100% of rewards</span>
                  <span className="text-primary-foreground"> donated</span>
                  <span className="text-blue-600"> to prevent</span>
                  <span className="text-red-500"> child abuse</span>
                  <span className="text-purple-600"> (NCAC)</span>
                </p>
              </div>

              <p className="text-base md:text-lg text-foreground mb-8 leading-relaxed font-semibold max-w-lg">
                Epstein financed 75% of Bitcoin. The code is compromised. We are reclaiming the narrative.
              </p>

              {/* Contract Address Box */}
              <div className="bg-white rounded-3xl border-4 border-secondary p-6 mb-8 max-w-lg">
                <p className="text-xs font-bold text-secondary mb-2">CA:</p>
                <div className="flex items-center gap-3">
                  <code className="text-sm font-mono text-foreground truncate flex-1">
                    7p8hs6fZwTXvSYESCdHgWCXVsVcxTrX1cs3Q4yNGpu...
                  </code>
                  <button className="bg-secondary hover:bg-secondary/90 text-white font-bold py-2 px-4 rounded-full transition-colors text-sm whitespace-nowrap">
                    COPY
                  </button>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="https://pump.fun/coin/7p8hs6fZwTXvSYESCdHgWCXVsVcxTrX1cs3Q4yNGpump"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="lg"
                    className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full text-lg py-6 px-8"
                  >
                    BUY
                  </Button>
                </Link>
                <Link
                  href="https://dexscreener.com/solana/6GYDFqr1tmJgRAuxZmK1LNqfUGK8TNM8YrGrFJZ9r2So"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="lg"
                    className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white font-bold rounded-full text-lg py-6 px-8"
                  >
                    CHART
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* White Divider */}
      <div className="h-3 bg-white"></div>
    </>
  )
}
