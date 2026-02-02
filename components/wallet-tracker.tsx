'use client'

import { useEffect, useState } from 'react'
import { ExternalLink, Copy, CheckCircle2 } from 'lucide-react'

interface Transaction {
  signature: string
  type?: string
  timestamp?: number
  nativeTransfers?: Array<{ amount: number }>
}

interface TransactionData {
  value?: {
    signature: string
  }
  type?: string
  timestamp?: number
  nativeTransfers?: Array<{ amount: number }>
}

export default function WalletTracker() {
  const [transactions, setTransactions] = useState<Transaction[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [copiedId, setCopiedId] = useState<string | null>(null)
  const [retryCount, setRetryCount] = useState(0)

  const fetchTransactions = async () => {
    try {
      setError(null)
      const response = await fetch('/api/transactions')

      if (!response.ok) {
        throw new Error('Failed to fetch transactions')
      }

      const data = await response.json()

      if (Array.isArray(data)) {
        const formatted: Transaction[] = data
          .slice(0, 10)
          .map((tx: TransactionData) => ({
            signature: tx.value?.signature || tx.signature || '',
            type: tx.type || 'Unknown',
            timestamp: tx.timestamp,
            nativeTransfers: tx.nativeTransfers || [],
          }))
          .filter((tx) => tx.signature)

        setTransactions(formatted)
        setRetryCount(0)
      } else {
        setError('Invalid data format received')
      }
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Unknown error'
      setError(message)

      if (retryCount < 3) {
        setTimeout(() => setRetryCount(retryCount + 1), 2000)
      }
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchTransactions()
    const interval = setInterval(fetchTransactions, 30000)
    return () => clearInterval(interval)
  }, [])

  const copyToClipboard = (signature: string) => {
    navigator.clipboard.writeText(signature)
    setCopiedId(signature)
    setTimeout(() => setCopiedId(null), 2000)
  }

  const formatTime = (timestamp?: number) => {
    if (!timestamp) return 'N/A'
    const date = new Date(timestamp * 1000)
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    })
  }

  const getSOLAmount = (nativeTransfers?: Array<{ amount: number }>) => {
    if (!nativeTransfers || nativeTransfers.length === 0) return null
    const totalLamports = nativeTransfers.reduce(
      (sum, transfer) => sum + (transfer.amount || 0),
      0
    )
    return (totalLamports / 1000000000).toFixed(4)
  }

  return (
    <section className="min-h-screen flex items-center justify-center py-8 md:py-12 px-4 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <div className="w-full max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 md:mb-4">
            Solana Wallet Tracker
          </h1>
          <p className="text-gray-300 text-base md:text-lg">
            Live transactions on the Solana blockchain
          </p>
        </div>

        {/* Loading State */}
        {loading && !transactions.length && (
          <div className="space-y-3">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="h-32 md:h-40 bg-slate-800 rounded-lg animate-pulse"
              />
            ))}
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="bg-red-900/20 border border-red-500/50 text-red-300 px-4 md:px-6 py-4 rounded-lg text-center">
            <p className="font-semibold mb-2">{error}</p>
            <p className="text-sm opacity-75">Retrying... ({retryCount}/3)</p>
          </div>
        )}

        {/* Empty State */}
        {!loading && !error && transactions.length === 0 && (
          <div className="text-center py-12 md:py-20">
            <div className="text-6xl mb-4">📭</div>
            <p className="text-gray-400 text-lg">
              No transactions found for this wallet
            </p>
          </div>
        )}

        {/* Transactions Grid */}
        {transactions.length > 0 && (
          <div className="space-y-4 md:space-y-6">
            {transactions.map((tx) => {
              const solAmount = getSOLAmount(tx.nativeTransfers)
              const shortSig = `${tx.signature.slice(0, 6)}...${tx.signature.slice(-6)}`

              return (
                <div
                  key={tx.signature}
                  className="group bg-gradient-to-r from-slate-800 to-slate-700 border border-slate-600 hover:border-slate-500 rounded-lg p-4 md:p-6 transition-all duration-300 hover:shadow-xl"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    {/* Left Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-2 md:mb-3">
                        <span className="inline-block px-3 py-1 bg-blue-500/20 text-blue-300 text-xs md:text-sm font-semibold rounded-full border border-blue-500/30">
                          {tx.type}
                        </span>
                        <span className="text-xs md:text-sm text-gray-400">
                          {formatTime(tx.timestamp)}
                        </span>
                      </div>

                      {/* Signature */}
                      <div className="flex items-center gap-2 mb-3">
                        <code className="text-xs md:text-sm text-gray-300 font-mono bg-slate-900 px-3 py-2 rounded border border-slate-600 truncate">
                          {shortSig}
                        </code>
                        <button
                          onClick={() => copyToClipboard(tx.signature)}
                          className="flex-shrink-0 p-2 rounded hover:bg-slate-600 transition-colors"
                          title="Copy full signature"
                        >
                          {copiedId === tx.signature ? (
                            <CheckCircle2 size={16} className="text-green-400" />
                          ) : (
                            <Copy size={16} className="text-gray-400 hover:text-gray-300" />
                          )}
                        </button>
                      </div>

                      {/* SOL Amount */}
                      {solAmount && (
                        <p className="text-xs md:text-sm text-emerald-400 font-semibold">
                          ◎ {solAmount} SOL
                        </p>
                      )}
                    </div>

                    {/* Right Action */}
                    <a
                      href={`https://solscan.io/tx/${tx.signature}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-lg transition-colors"
                    >
                      View on Solscan
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
              )
            })}
          </div>
        )}

        {/* Refresh Info */}
        {transactions.length > 0 && (
          <p className="text-center text-gray-500 text-sm mt-8 md:mt-12">
            Auto-refreshing every 30 seconds
          </p>
        )}
      </div>
    </section>
  )
}
