'use client'

import Link from 'next/link'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Heart } from 'lucide-react'

export default function CharitySection() {
  return (
    <section id="charity" className="py-16 md:py-24 px-4 border-b border-border">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-2 text-center">
          Charity Commitment
        </h2>
        <p className="text-muted-foreground text-center mb-12">
          Making a direct impact for vulnerable children
        </p>

        <Card className="p-8 md:p-12 bg-accent/5 border-2 border-accent">
          <div className="text-center mb-8">
            <Heart className="w-12 h-12 text-accent mx-auto mb-4" />
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
              100% of Developer Fees Donated
            </h3>
            <p className="text-lg text-muted-foreground">
              Zero extraction. Maximum impact.
            </p>
          </div>

          <div className="bg-background/50 rounded-lg p-6 mb-8">
            <p className="text-sm font-medium text-muted-foreground mb-2">Supported Organization</p>
            <h4 className="text-xl md:text-2xl font-bold text-foreground">
              National Children's Advocacy Center (NCAC)
            </h4>
            <p className="text-sm text-muted-foreground mt-2">
              Leading organization dedicated to serving child victims of abuse and exploitation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="p-4 bg-background rounded">
              <p className="text-sm font-medium text-muted-foreground mb-1">Mission</p>
              <p className="text-sm font-semibold">Prevent child abuse and support survivors</p>
            </div>
            <div className="p-4 bg-background rounded">
              <p className="text-sm font-medium text-muted-foreground mb-1">Impact</p>
              <p className="text-sm font-semibold">Serving thousands of children annually</p>
            </div>
          </div>

          <Link href="https://www.nationalcac.org/get-involved/give-crypto/" target="_blank" rel="noopener noreferrer" className="block">
            <Button size="lg" className="w-full bg-accent hover:opacity-90 text-accent-foreground font-semibold">
              Donate Directly to NCAC
            </Button>
          </Link>
        </Card>

        <p className="text-sm text-muted-foreground text-center mt-8">
          Learn more about NCAC's work at{' '}
          <Link href="https://www.nationalcac.org" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline font-medium">
            nationalcac.org
          </Link>
        </p>
      </div>
    </section>
  )
}
