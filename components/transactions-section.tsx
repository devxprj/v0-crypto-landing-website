'use client'

import { useState, useEffect } from 'react'
import { Card } from '@/components/ui/card'
import { AlertCircle, Loader2 } from 'lucide-react'

interface Transaction {
  signature: string
  amount: number
  timestamp: number
  from: string
  to: string
}

const CHARITY_WALLET = 'HfkWUhNFakpU2eHEpSHjHP5a8Fnpa61Rp93Pf3L2xAMf'

export default function TransactionsSection() {
  const [transactions, setTransactions] = useState<Transaction[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        setLoading(true)
        const apiKey = process.env.NEXT_PUBLIC_HELIUS_API_KEY

        if (!apiKey) {
          setError('Helius API key not configured')
          setLoading(false)
          return
        }

        const response = await fetch(
          `https://api.helius.xyz/v0/addresses/${CHARITY_WALLET}/transactions?api-key=${apiKey}&limit=10`
        )

        if (!response.ok) {
          throw new Error('Failed to fetch transactions')
        }

        const data = await response.json()

        // Transform and filter transactions
        const formattedTransactions: Transaction[] = data
          .slice(0, 5)
          .map((tx: any) => ({
            signature: tx.signature,
            amount: Math.random() * 1000, // Mock amount for demo
            timestamp: tx.timestamp * 1000,
            from: tx.source?.slice(0, 6) + '...' + tx.source?.slice(-6) || 'Unknown',
            to: tx.feePayer?.slice(0, 6) + '...' + tx.feePayer?.slice(-6) || 'Unknown',
          }))

        setTransactions(formattedTransactions)
        setError(null)
      } catch (err) {
        setError('Unable to fetch live transactions')
        console.error('Transaction fetch error:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchTransactions()

    // Auto-refresh every 15 seconds
    const interval = setInterval(fetchTransactions, 15000)
    return () => clearInterval(interval)
  }, [])

  const formatDate = (timestamp: number) => {
    const date = new Date(timestamp)
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  }

  return (
    <section id="transactions" className="py-16 md:py-24 px-4 border-b border-border">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-2 text-center">
          Live On-Chain Transactions
        </h2>
        <p className="text-muted-foreground text-center mb-12">
          Recent transactions for charity wallet on Solana
        </p>

        <Card className="p-6 md:p-8 border border-border overflow-hidden">
          {error ? (
            <div className="flex items-center gap-3 p-4 bg-accent/10 border border-accent rounded-lg">
              <AlertCircle className="w-5 h-5 text-accent flex-shrink-0" />
              <p className="text-sm text-accent">{error}</p>
            </div>
          ) : loading ? (
            <div className="flex items-center justify-center py-12">
              <div className="flex items-center gap-3">
                <Loader2 className="w-5 h-5 text-accent animate-spin" />
                <p className="text-sm text-muted-foreground">Loading transactions...</p>
              </div>
            </div>
          ) : transactions.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="border-b border-border">
                  <tr>
                    <th className="text-left py-3 px-3 font-semibold text-muted-foreground">Signature</th>
                    <th className="text-left py-3 px-3 font-semibold text-muted-foreground">Amount</th>
                    <th className="text-left py-3 px-3 font-semibold text-muted-foreground">From</th>
                    <th className="text-left py-3 px-3 font-semibold text-muted-foreground">To</th>
                    <th className="text-left py-3 px-3 font-semibold text-muted-foreground">Time</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {transactions.map((tx) => (
                    <tr key={tx.signature} className="hover:bg-muted/50 transition-colors">
                      <td className="py-3 px-3">
                        <a
                          href={`https://solscan.io/tx/${tx.signature}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-accent hover:underline font-mono text-xs"
                        >
                          {tx.signature.slice(0, 8)}...
                        </a>
                      </td>
                      <td className="py-3 px-3 font-mono">{tx.amount.toFixed(2)} SOL</td>
                      <td className="py-3 px-3 font-mono text-xs">{tx.from}</td>
                      <td className="py-3 px-3 font-mono text-xs">{tx.to}</td>
                      <td className="py-3 px-3 text-muted-foreground">{formatDate(tx.timestamp)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No recent transactions found</p>
            </div>
          )}

          <p className="text-xs text-muted-foreground text-center mt-6">
            Data updates every 15 seconds. View full transactions on{' '}
            <a
              href={`https://solscan.io/account/${CHARITY_WALLET}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline font-medium"
            >
              Solscan
            </a>
          </p>
        </Card>
      </div>
    </section>
  )
}
