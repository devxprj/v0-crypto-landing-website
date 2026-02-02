'use client'

import { Card } from '@/components/ui/card'

export default function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 px-4 border-b border-border">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-2 text-center">
          About BTC – Buy The Children
        </h2>
        <p className="text-muted-foreground text-center mb-12">
          Understanding our mission and impact
        </p>

        <Card className="p-8 md:p-12 bg-card border border-border">
          <div className="space-y-6 text-base leading-relaxed">
            <p>
              Jeffrey Epstein's connections to Bitcoin's creation have become a major topic of discussion across social media platforms. Multiple sources claim he may have financed over 75% of Bitcoin's early code development, with some even speculating about possible connections to the identity of Satoshi Nakamoto.
            </p>

            <p>
              In response to these revelations, the community has rallied around BTC – "Buy The Children" – a crypto token dedicated to honoring the victims and survivors of child abuse.
            </p>

            <p>
              This initiative represents a collective commitment: <span className="font-semibold text-foreground">100% of developer fees are donated to the National Children's Advocacy Center (NCAC)</span>, an organization working tirelessly to prevent child abuse and support survivors.
            </p>

            <p>
              Every transaction, every holder, and every community member contributes directly to meaningful change and protection for vulnerable children. BTC – Buy The Children is more than a token—it's a movement toward justice and healing.
            </p>
          </div>
        </Card>
      </div>
    </section>
  )
}
