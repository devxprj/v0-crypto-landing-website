'use client'

import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Check, Copy } from 'lucide-react'

const CONTRACT_ADDRESS = '7p8hs6fZwTXvSYESCdHgWCXVsVcxTrX1cs3Q4yNGpump'

export default function ContractSection() {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(CONTRACT_ADDRESS)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="contract" className="py-16 md:py-24 px-4 border-b border-border">
      <div className="container mx-auto max-w-2xl">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-2 text-center">
          Contract Address
        </h2>
        <p className="text-muted-foreground text-center mb-12">
          Official BTC – Buy The Children contract on Solana
        </p>

        <Card className="p-8 bg-card border border-border">
          <div className="mb-4">
            <label className="text-sm font-medium text-muted-foreground block mb-3">
              CONTRACT ADDRESS
            </label>
            <code className="block font-mono text-sm md:text-base break-all text-foreground bg-muted p-4 rounded mb-4 overflow-x-auto">
              {CONTRACT_ADDRESS}
            </code>
          </div>

          <Button
            onClick={handleCopy}
            className="w-full gap-2 bg-accent hover:opacity-90 text-accent-foreground font-semibold"
            size="lg"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4" />
                Copied!
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                Copy Address
              </>
            )}
          </Button>
        </Card>

        <p className="text-sm text-muted-foreground text-center mt-6">
          Always verify the contract address before transacting to avoid scams. This is the official address used for fee distribution to charity.
        </p>
      </div>
    </section>
  )
}
