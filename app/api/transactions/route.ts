export const runtime = 'edge'

const WALLET_ADDRESS = 'HfkWUhNFakpU2eHEpSHjHP5a8Fnpa61Rp93Pf3L2xAMf'
const HELIUS_API_KEY = process.env.HELIUS_API_KEY

export async function GET() {
  try {
    if (!HELIUS_API_KEY) {
      return new Response(
        JSON.stringify({ error: 'HELIUS_API_KEY not configured' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      )
    }

    const url = `https://api.helius.xyz/v0/addresses/${WALLET_ADDRESS}/transactions?limit=10&api-key=${HELIUS_API_KEY}`

    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
    })

    if (!response.ok) {
      return new Response(
        JSON.stringify({ error: `Helius API error: ${response.statusText}` }),
        { status: response.status, headers: { 'Content-Type': 'application/json' } }
      )
    }

    const data = await response.json()

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    })
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error'
    return new Response(
      JSON.stringify({ error: `Failed to fetch transactions: ${message}` }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    )
  }
}
