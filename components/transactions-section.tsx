'use client'

export default function TransactionsSection() {
  return (
    <>
      <section id="transactions" className="py-12 md:py-20 px-4 bg-background relative overflow-hidden">
        {/* Playful Background */}
        <div className="absolute top-0 left-0 w-64 md:w-96 h-64 md:h-96 bg-primary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-64 md:w-96 h-64 md:h-96 bg-secondary/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

        <div className="container mx-auto flex flex-col items-center relative z-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-center mb-3 md:mb-4 leading-tight">
            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent block">Live Donations</span>
            <span className="text-foreground text-lg md:text-2xl">Watch it Happen!</span>
          </h2>

          <p className="text-center text-sm md:text-base lg:text-lg font-bold text-foreground mb-6 md:mb-12 max-w-2xl">
            Watch real-time transactions helping children around the world!
          </p>

          {/* Responsive Embedded Solana Sight Glow */}
          <div className="w-full max-w-4xl">
            <div className="relative border-4 border-primary rounded-2xl md:rounded-3xl overflow-hidden shadow-lg md:shadow-2xl hover:shadow-2xl md:hover:shadow-3xl transition-shadow" style={{ paddingTop: '102%', maxHeight: '400px' }}>
              <iframe
                src="https://glow-sight-sparkle.lovable.app"
                className="absolute top-0 left-0 w-full h-full"
                allow="fullscreen"
                title="Solana Transactions"
              />
            </div>
          </div>

          <div className="mt-6 md:mt-12 bg-gradient-to-r from-primary to-secondary rounded-2xl p-4 md:p-6 border-4 border-white shadow-lg md:shadow-xl text-center max-w-2xl">
            <p className="text-base md:text-lg font-black text-white uppercase tracking-wider">
              Every transaction = Real impact for kids!
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
