'use client'

export default function TransactionsSection() {
  return (
    <>
      {/* Playful Divider */}
      <div className="h-6 bg-gradient-to-r from-secondary via-primary to-accent"></div>

      <section id="transactions" className="py-20 md:py-32 px-4 bg-background relative overflow-hidden">
        {/* Playful Background */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

        <div className="container mx-auto flex flex-col items-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-black text-center mb-4 leading-tight">
            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent block">Live Donations</span>
            <span className="text-foreground">Keep It Growing! 📈</span>
          </h2>

          <p className="text-center text-xl font-bold text-foreground mb-12 max-w-2xl">
            Watch real-time transactions helping children around the world!
          </p>

          {/* Responsive Embedded Solana Sight Glow */}
          <div className="w-full max-w-4xl">
            <div className="relative border-4 border-primary rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow" style={{ paddingTop: '102%' }}>
              <iframe
                src="https://solana-sight-glow.lovable.app/"
                className="absolute top-0 left-0 w-full h-full"
                allow="fullscreen"
                title="Solana Transactions"
              />
            </div>
          </div>

          <div className="mt-12 bg-gradient-to-r from-primary to-secondary rounded-2xl p-6 border-4 border-white shadow-xl text-center max-w-2xl">
            <p className="text-lg font-black text-white uppercase tracking-wider">
              ✨ Every transaction = Real impact for kids! ✨
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
