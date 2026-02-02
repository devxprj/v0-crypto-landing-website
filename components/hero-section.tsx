'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function HeroSection() {
  return (
    <>
      <section
        id="hero"
        className="min-h-screen flex items-center justify-center px-4 pt-32 pb-20 bg-background relative overflow-hidden"
        style={{
          backgroundImage: 'url(/images/playground-bg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-background/70"></div>

        {/* Playful Background Shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 right-10 w-40 h-40 bg-secondary/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 right-20 w-24 h-24 bg-accent/40 rounded-full blur-2xl animate-bounce"></div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            
            {/* Right Image (Mobile first, reorder on mobile) */}
            <div className="flex justify-center items-center order-1 lg:order-2 mb-6 lg:mb-0">
              <div className="relative w-56 sm:w-72 lg:w-96 aspect-square">
                <div className="absolute inset-0 bg-gradient-to-br from-secondary to-primary rounded-full border-8 border-white shadow-2xl flex items-center justify-center animate-bounce">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/download%20%281%29-8125Boobym0bOYc8JJtWwknjwzRnS5.png"
                    alt="BTC - Buy The Children"
                    fill
                    className="object-contain p-6 sm:p-8"
                  />
                </div>

                {/* Playful Badges */}
                <div className="absolute -bottom-5 -right-5 bg-accent text-foreground font-black px-4 py-2 sm:px-6 sm:py-3 rounded-full border-4 border-foreground rotate-12 shadow-xl text-sm sm:text-lg hover:rotate-45 transition-transform hover:scale-110">
                  100% DONATED
                </div>
                <div className="absolute -top-3 -right-6 bg-primary text-white font-black px-3 py-1 sm:px-5 sm:py-2 rounded-full border-4 border-white -rotate-12 shadow-xl text-xs sm:text-sm hover:-rotate-45 transition-transform hover:scale-110">
                  FOR THE KIDS
                </div>
                <div className="absolute -bottom-10 -left-8 bg-secondary text-white font-black px-3 py-1 sm:px-4 sm:py-2 rounded-full border-4 border-white rotate-45 shadow-xl text-xs animate-pulse hover:animate-bounce">
                  LFG! 🚀
                </div>
              </div>
            </div>

            {/* Left Content */}
            <div className="flex flex-col justify-center order-2 lg:order-1">
              <div className="mb-6 sm:mb-8">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-3 sm:mb-4 text-center lg:text-left leading-tight">
                  <span className="text-blue-600 block">Buy</span>
                  <span className="text-primary block">The</span>
                  <span className="text-secondary block">Children</span>
                </h1>
                <p className="text-xl sm:text-2xl font-black text-center lg:text-left text-foreground mt-4">
                  <span className="bg-accent px-2 py-1 rounded-full inline-block mr-2">100%</span>
                  <span>for good</span>
                </p>
              </div>

              <p className="text-lg sm:text-xl text-foreground mb-6 sm:mb-8 leading-relaxed font-bold max-w-full lg:max-w-lg text-center lg:text-left bg-white/80 backdrop-blur p-4 rounded-2xl border-4 border-primary">
                Join the playground revolution! Every transaction helps protect children from abuse.
              </p>

              {/* Contract Address Box - Playful Design */}
              <div className="bg-gradient-to-br from-primary to-accent rounded-3xl border-4 border-white p-4 sm:p-6 mb-6 sm:mb-8 max-w-full lg:max-w-lg shadow-xl hover:shadow-2xl transition-shadow hover:scale-105">
                <p className="text-xs font-black text-white mb-1 sm:mb-2 uppercase tracking-wider">Smart Contract Address:</p>
                <div className="flex items-center gap-2 sm:gap-3 bg-white rounded-2xl p-3">
                  <code className="text-xs sm:text-sm font-mono text-foreground truncate flex-1 font-bold">
                    7p8hs6fZwTXvSYESCdHgWCXVsVcxTrX1cs3Q4yNGpu...
                  </code>
                  <button className="bg-secondary hover:bg-secondary/90 text-white font-black py-1 sm:py-2 px-3 sm:px-4 rounded-full transition-all hover:scale-110 text-xs sm:text-sm whitespace-nowrap">
                    COPY
                  </button>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start">
                <Link
                  href="https://pump.fun/coin/7p8hs6fZwTXvSYESCdHgWCXVsVcxTrX1cs3Q4yNGpump"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="lg"
                    className="w-full sm:w-auto bg-gradient-to-r from-primary to-pink-500 hover:from-primary/90 hover:to-pink-600 text-white font-black rounded-full text-base sm:text-lg py-5 sm:py-7 px-8 sm:px-10 border-4 border-white shadow-lg hover:shadow-xl transition-all hover:scale-110 hover:-rotate-2 uppercase tracking-wider"
                  >
                    🎮 BUY NOW
                  </Button>
                </Link>
                <Link
                  href="https://dexscreener.com/solana/6GYDFqr1tmJgRAuxZmK1LNqfUGK8TNM8YrGrFJZ9r2So"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="lg"
                    className="w-full sm:w-auto bg-gradient-to-r from-secondary to-emerald-500 hover:from-secondary/90 hover:to-emerald-600 text-white font-black rounded-full text-base sm:text-lg py-5 sm:py-7 px-8 sm:px-10 border-4 border-white shadow-lg hover:shadow-xl transition-all hover:scale-110 hover:rotate-2 uppercase tracking-wider"
                  >
                    📊 CHART
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
