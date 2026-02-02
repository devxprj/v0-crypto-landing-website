'use client'

import Link from 'next/link'

export default function AboutSection() {
  return (
    <>
      {/* Soft Divider */}
      <div className="h-3 bg-gradient-to-r from-blue-200 via-pink-200 to-yellow-200"></div>

      <section
        id="about"
        className="relative py-20 md:py-32 px-4 bg-gradient-to-br from-blue-50 via-pink-50 to-yellow-50 overflow-hidden"
      >
        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 w-24 h-24 bg-pink-200 rounded-full blur-3xl opacity-40" />
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-blue-200 rounded-full blur-3xl opacity-40" />

        <div className="container mx-auto max-w-5xl relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

            {/* Left Content */}
            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10 border border-blue-100">
              <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
                <span className="text-blue-600">About</span>{' '}
                <span className="text-pink-500">BTC</span>
              </h2>

              <div className="space-y-5 text-base md:text-lg leading-relaxed font-semibold text-gray-700">
                <p className="">
                  A story surrounding the origins of BTC has gone viral on X,
                  raising serious conversations about accountability and justice.
                </p>

                <p>
                  BTC is now referred to as <span className="text-blue-600 font-bold">“Buy The Children”</span>,
                  symbolizing awareness and responsibility.
                </p>

                <p>
                  In honor of the victims, <span className="text-pink-500 font-bold">100% of developer fees</span>
                  are donated to <strong>NCAC</strong>, an organization dedicated to preventing child abuse and protecting children worldwide.
                </p>

                <Link
                  href="https://t.co/7vqarBXxAV"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 shadow-md hover:shadow-lg mt-4"
                >
                  💖 Donate to NCAC
                </Link>
              </div>
            </div>

            {/* Right Visual / Stats */}
            <div className="flex flex-col gap-6">
              <div className="bg-white rounded-3xl p-8 shadow-lg border border-pink-100 text-center">
                <div className="text-4xl mb-2">🧸</div>
                <h3 className="text-xl font-black text-blue-600 mb-2">
                  Protecting Children
                </h3>
                <p className="text-gray-600 font-semibold">
                  Every transaction helps fund prevention, education, and safety.
                </p>
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-lg border border-blue-100 text-center">
                <div className="text-4xl mb-2">🌈</div>
                <h3 className="text-xl font-black text-pink-500 mb-2">
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
