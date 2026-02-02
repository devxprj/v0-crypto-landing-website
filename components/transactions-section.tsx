'use client'

import { useState } from 'react'
import { Slider } from '@/components/ui/slider'

export default function TransactionsSection() {
  const [embedWidth, setEmbedWidth] = useState(100)
  const [embedHeight, setEmbedHeight] = useState(80)

  return (
    <section id="transactions" className="py-20 md:py-32 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-black text-center mb-4">
          <span className="text-blue-600">Live</span>
          <span className="text-red-500"> Transactions</span>
        </h2>
        
        <p className="text-center text-lg font-semibold text-foreground mb-12">
          Watch donations flow in real-time
        </p>

        {/* Size Controls */}
        <div className="bg-white rounded-3xl border-4 border-secondary p-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Width Control */}
            <div>
              <label className="block font-bold text-lg mb-4 text-foreground">
                Width: {embedWidth}%
              </label>
              <Slider
                value={[embedWidth]}
                onValueChange={(value) => setEmbedWidth(value[0])}
                min={50}
                max={100}
                step={5}
                className="w-full"
              />
            </div>

            {/* Height Control */}
            <div>
              <label className="block font-bold text-lg mb-4 text-foreground">
                Height: {Math.round(800 * (embedHeight / 100))}px
              </label>
              <Slider
                value={[embedHeight]}
                onValueChange={(value) => setEmbedHeight(value[0])}
                min={40}
                max={100}
                step={5}
                className="w-full"
              />
            </div>
          </div>
        </div>

        {/* Embedded Solana Sight Glow */}
        <div className="flex justify-center">
          <iframe
            src="https://solana-sight-glow.lovable.app/"
            width={Math.round(1200 * (embedWidth / 100))}
            height={Math.round(800 * (embedHeight / 100))}
            className="rounded-2xl border-4 border-secondary shadow-2xl"
            allow="fullscreen"
            title="Solana Transactions"
          />
        </div>

        <p className="text-center text-sm font-semibold text-muted-foreground mt-8">
          100% of fees go directly to the National Children's Advocacy Center
        </p>
      </div>
    </section>
  )
}
