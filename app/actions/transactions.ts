'use server'

interface Transaction {
  signature: string
  amount: number
  timestamp: number
  from: string
  to: string
}

const CHARITY_WALLET = 'HfkWUhNFakpU2eHEpSHjHP5a8Fnpa61Rp93Pf3L2xAMf'

export async function fetchCharityTransactions(): Promise<{ transactions: Transaction[]; error: string | null }> {
  try {
    const apiKey = process.env.NEXT_PUBLIC_HELIUS_API_KEY

    if (!apiKey) {
      return {
        transactions: [],
        error: 'Helius API key not configured',
      }
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

    return {
      transactions: formattedTransactions,
      error: null,
    }
  } catch (err) {
    console.error('Transaction fetch error:', err)
    return {
      transactions: [],
      error: 'Unable to fetch live transactions',
    }
  }
}
