'use client'

export default function TransactionsSection() {
  return (
    <>
      {/* White Divider */}
      <div className="h-6 bg-white"></div>

      <section id="transactions" className="py-20 md:py-32 px-4 bg-background">
        <div className="container mx-auto flex flex-col items-center">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-4">
            <span className="text-blue-600">Live</span>
            <span className="text-red-500"> Transactions</span>
          </h2>

          <p className="text-center text-lg font-semibold text-foreground mb-12">
            Watch donations flow in real-time
          </p>

          {/* Responsive Embedded Solana Sight Glow */}
          <div className="w-full max-w-4xl">
            <div className="relative" style={{ paddingTop: '102%' }}>
              <iframe
                src="https://solana-sight-glow.lovable.app/"
                className="absolute top-0 left-0 w-full h-full rounded-2xl border-4 border-secondary shadow-2xl"
                allow="fullscreen"
                title="Solana Transactions"
              />
            </div>
          </div>

          <p className="text-center text-sm font-semibold text-muted-foreground mt-8">
            100% of fees go directly to the National Children's Advocacy Center
          </p>
        </div>
      </section>
    </>
  )
}
