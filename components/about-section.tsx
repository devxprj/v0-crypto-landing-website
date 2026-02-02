'use client'

import { Card } from '@/components/ui/card'

export default function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-32 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              <span className="text-blue-600">The</span>
              <span className="text-red-500"> Truth</span>
            </h2>
            <div className="space-y-6 text-lg leading-relaxed font-semibold text-foreground">
              <p>
                Epstein financed 75% of Bitcoin. The code is compromised. We are reclaiming the narrative.
              </p>

              <p>
                In response to these revelations, the community has rallied around <span className="text-primary font-black">BTC</span> – "Buy The Children" – a crypto token dedicated to honoring the victims and survivors of child abuse.
              </p>

              <p>
                <span className="text-yellow-500">100% of rewards</span> donated to prevent child abuse (NCAC).
              </p>

              <p>
                Every transaction, every holder, and every community member contributes directly to meaningful change and protection for vulnerable children.
              </p>
            </div>
          </div>

          {/* Right Evidence Box */}
          <div className="flex flex-col gap-6">
            

            
          </div>
        </div>
      </div>
    </section>
  )
}
