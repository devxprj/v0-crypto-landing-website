'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'

export default function EmbedSection() {
  const [width, setWidth] = useState(100)
  const [height, setHeight] = useState(600)

  const sizePresets = [
    { label: 'Small', w: 80, h: 400 },
    { label: 'Medium', w: 100, h: 600 },
    { label: 'Large', w: 100, h: 800 },
    { label: 'Full Height', w: 100, h: 1000 },
  ]

  return (
    <section id="transactions" className="py-20 md:py-32 px-4 border-b border-border bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4 text-foreground">
            Live Transactions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Track real-time Solana blockchain activity and transparency
          </p>
        </div>

        {/* Size Controls */}
        <div className="flex flex-wrap gap-3 justify-center mb-8">
          {sizePresets.map((preset) => (
            <Button
              key={preset.label}
              onClick={() => {
                setWidth(preset.w)
                setHeight(preset.h)
              }}
              variant={width === preset.w && height === preset.h ? 'default' : 'outline'}
              className={width === preset.w && height === preset.h ? 'bg-primary text-primary-foreground' : ''}
            >
              {preset.label}
            </Button>
          ))}
        </div>

        {/* Custom Size Controls */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 max-w-md mx-auto">
          <div>
            <label className="block text-sm font-medium mb-2 text-foreground">
              Width: {width}%
            </label>
            <input
              type="range"
              min="60"
              max="100"
              step="5"
              value={width}
              onChange={(e) => setWidth(Number(e.target.value))}
              className="w-full h-2 bg-border rounded-lg appearance-none cursor-pointer accent-primary"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2 text-foreground">
              Height: {height}px
            </label>
            <input
              type="range"
              min="300"
              max="1200"
              step="50"
              value={height}
              onChange={(e) => setHeight(Number(e.target.value))}
              className="w-full h-2 bg-border rounded-lg appearance-none cursor-pointer accent-primary"
            />
          </div>
        </div>

        {/* Embedded Dashboard */}
        <div className="flex justify-center">
          <div
            style={{
              width: `${width}%`,
              height: `${height}px`,
              borderRadius: '1.5rem',
              overflow: 'hidden',
              border: '2px solid var(--border)',
              boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)',
            }}
          >
            <iframe
              src="https://solana-sight-glow.lovable.app/"
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
                borderRadius: '1.5rem',
              }}
              title="Solana Sight Live Dashboard"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>

        <p className="text-center text-sm text-muted-foreground mt-8">
          Adjust the size using the buttons or sliders to customize the embed to your preference
        </p>
      </div>
    </section>
  )
}
