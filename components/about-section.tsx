'use client'

import Link from 'next/link'

export default function AboutSection() {
  return (
    <>
      {/* Playful Divider */}
      <div className="h-6 bg-gradient-to-r from-primary via-accent to-secondary"></div>

      <section
        id="about"
        className="relative py-20 md:py-32 px-4 
        bg-gradient-to-br from-white via-primary/10 to-secondary/10 
        overflow-hidden"
      >
        {/* Decorative Playful Elements */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-secondary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-accent/30 rounded-full blur-2xl animate-bounce" />

        <div className="container mx-auto max-w-5xl relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

            {/* Left Content */}
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-10 border-4 border-primary hover:shadow-xl transition-shadow hover:scale-105 hover:-rotate-1">
              <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
                <span className="text-foreground">🎪 About</span>{' '}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">BTC</span>
              </h2>

              <div className="space-y-5 text-base md:text-lg leading-relaxed font-bold text-foreground">
                <p>
                  A story about the origins of cryptocurrency has sparked important conversations about accountability and justice. 
                </p>

                <p>
                  We've reclaimed the narrative with{' '}
                  <span className="bg-primary/20 px-2 py-1 rounded-lg font-black text-primary">
                    "Buy The Children"
                  </span>,
                  turning it into a symbol of hope and action.
                </p>

                <p>
                  We believe in making a real difference:{' '}
                  <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-black">
                    100% of fees go to NCAC
                  </span>,
                  an organization protecting children from abuse worldwide.
                </p>

                <Link
                  href="https://ncac.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center 
                  bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90
                  text-white font-black py-3 px-8 rounded-full 
                  transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110 border-4 border-white mt-4 uppercase"
                >
                  ❤️ Learn More
                </Link>
              </div>
            </div>

            {/* Right Visual / Stats */}
            <div className="flex flex-col gap-6">
              <div className="bg-gradient-to-br from-primary to-pink-500 rounded-3xl p-8 shadow-lg border-4 border-white text-center hover:shadow-xl hover:scale-110 transition-all cursor-pointer hover:-rotate-2">
                <div className="text-5xl mb-3">🧸</div>
                <h3 className="text-2xl font-black text-white mb-3 uppercase">
                  Safety First
                </h3>
                <p className="text-white font-bold">
                  Every transaction funds real protection programs for kids.
                </p>
              </div>

              <div className="bg-gradient-to-br from-secondary to-emerald-500 rounded-3xl p-8 shadow-lg border-4 border-white text-center hover:shadow-xl hover:scale-110 transition-all cursor-pointer hover:rotate-2">
                <div className="text-5xl mb-3">🌈</div>
                <h3 className="text-2xl font-black text-white mb-3 uppercase">
                  Community Power
                </h3>
                <p className="text-white font-bold">
                  Join thousands making a real difference with every trade.
                </p>
              </div>

              <div className="bg-gradient-to-br from-accent to-yellow-400 rounded-3xl p-8 shadow-lg border-4 border-white text-center hover:shadow-xl hover:scale-110 transition-all cursor-pointer hover:-rotate-2">
                <div className="text-5xl mb-3">🚀</div>
                <h3 className="text-2xl font-black text-foreground mb-3 uppercase">
                  To the Moon!
                </h3>
                <p className="text-foreground font-bold">
                  Growing together while helping those who need it most.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
