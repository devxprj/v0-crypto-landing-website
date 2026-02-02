'use client'

import Link from 'next/link'

export default function AboutSection() {
  return (
    <>
      {/* White Divider */}
      <div className="h-6 bg-white"></div>

      <section id="about" className="py-20 md:py-32 px-4 bg-background">
        <div className="container mx-auto max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div>
              <h2 className="text-4xl md:text-5xl font-black mb-6 text-foreground">
                <span className="text-blue-600">About</span>
                <span className="text-red-500"> BTC</span>
              </h2>
              <div className="space-y-6 text-base md:text-lg leading-relaxed font-semibold text-foreground">
                <p>
                  Jeffrey Epstein being a big part of the creation of BTC is going insanely viral on X. Sources say he financed over 75% of Bitcoin's code with some even speculating he may have been Satoshi.
                </p>

                <p>
                  BTC is now referred to as "Buy The Children". And it's being tweeted about a lot. In honor of the victims, 100% of the token developer fees are being donated to NCAC – an organisation working through prevention of child abuse.
                </p>

                <p>
                  Every transaction, every holder, and every community member contributes directly to meaningful change and protection for vulnerable children.
                </p>

                <Link
                  href="https://t.co/7vqarBXxAV"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-secondary hover:bg-secondary/90 text-white font-bold py-3 px-8 rounded-full transition-colors text-base mt-4"
                >
                  Donate to NCAC
                </Link>
              </div>
            </div>

            {/* Right Stats Box */}
            <div className="flex flex-col gap-6">
              <div className="bg-white rounded-3xl border-4 border-secondary p-8">
                <p className="text-sm font-bold text-secondary mb-4 text-center">THE TRUTH • EVIDENCE • NCAC.ORG</p>
                <p className="text-center font-black text-xl text-foreground">
                  Join the movement reclaiming crypto for good
                </p>
              </div>

              <div className="bg-white rounded-3xl border-4 border-secondary p-8">
                <div className="text-center">
                  <p className="text-sm font-bold text-secondary mb-3">TOTAL DONATION WALLET FUNDS</p>
                  <div className="flex items-center justify-center gap-3 mb-2">
                    <span className="text-4xl">💰</span>
                    <p className="text-4xl font-black text-secondary">25.7101 SOL</p>
                  </div>
                  <code className="text-xs text-muted-foreground block mt-4 truncate">
                    HfkWUhNFakpU2eHEpSHjHP5a8Fnpa61Rp93Pf3L2xAMf
                  </code>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
