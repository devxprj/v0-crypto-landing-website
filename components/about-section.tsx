'use client'

import Link from 'next/link'

export default function AboutSection() {
  return (
    <>
      {/* Orange Divider */}
      <div className="h-3 bg-gradient-to-r from-orange-400 via-yellow-300 to-orange-400"></div>

      <section
        id="about"
        className="relative py-20 md:py-32 px-4 
        bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 
        overflow-hidden"
      >
        {/* Decorative Orange Elements */}
        <div className="absolute top-10 left-10 w-28 h-28 bg-orange-300 rounded-full blur-3xl opacity-40" />
        <div className="absolute bottom-10 right-10 w-36 h-36 bg-amber-300 rounded-full blur-3xl opacity-40" />

        <div className="container mx-auto max-w-5xl relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

            {/* Left Content */}
            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10 border border-orange-200">
              <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
                <span className="text-gray-900">About</span>{' '}
                <span className="text-orange-500">BTC</span>
              </h2>

              <div className="space-y-5 text-base md:text-lg leading-relaxed font-semibold text-gray-700">
                <p>
                  A story surrounding the origins of BTC has gone viral on X,
                  raising serious conversations about accountability and justice.
                </p>

                <p>
                  BTC is now referred to{' '}
                  <span className="text-orange-500 font-black">
                    “Buy The Children”
                  </span>,
                  symbolizing awareness and responsibility.
                </p>

                <p>
                  In honor of the victims,{' '}
                  <span className="text-orange-600 font-black">
                    100% of  fees
                  </span>{' '}
                  are donated to <strong>NCAC</strong>, an organization dedicated
                  to preventing child abuse and protecting children worldwide.
                </p>

                <Link
                  href="https://t.co/7vqarBXxAV"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center 
                  bg-orange-500 hover:bg-orange-600 
                  text-white font-black py-3 px-8 rounded-full 
                  transition-all duration-300 shadow-md hover:shadow-lg mt-4"
                >
                  🧡 Donate to NCAC
                </Link>
              </div>
            </div>

            {/* Right Visual / Stats */}
            <div className="flex flex-col gap-6">
              <div className="bg-white rounded-3xl p-8 shadow-lg border border-orange-200 text-center">
                <div className="text-4xl mb-2">🧸</div>
                <h3 className="text-xl font-black text-orange-500 mb-2">
                  Protecting Children
                </h3>
                <p className="text-gray-600 font-semibold">
                  Every transaction helps fund prevention, education, and safety.
                </p>
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-lg border border-amber-200 text-center">
                <div className="text-4xl mb-2">🌈</div>
                <h3 className="text-xl font-black text-amber-500 mb-2">
                  Community Impact
                </h3>
                <p className="text-gray-600 font-semibold">
                  Holders become part of a mission focused on care, trust, and change.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
