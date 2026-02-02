'use client'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-primary to-secondary py-6 md:py-10 px-4 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-3 md:top-5 right-3 md:right-5 w-16 md:w-24 h-16 md:h-24 bg-white/10 rounded-full blur-2xl"></div>
      <div className="absolute bottom-3 md:bottom-5 left-3 md:left-5 w-20 md:w-28 h-20 md:h-28 bg-accent/10 rounded-full blur-2xl"></div>

      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="flex flex-col items-center gap-4 md:gap-6 text-center">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-black text-white">
            Buy The Children
          </h3>
          
          <div className="space-y-2 md:space-y-3">
            <p className="text-base md:text-lg lg:text-xl font-black text-white uppercase tracking-wider">
              NFA - DYOR
            </p>
            <p className="text-white font-bold text-xs md:text-sm">
              100% of fees go directly to NCAC for child protection
            </p>
          </div>

          <div className="border-t-4 border-white/30 pt-4 md:pt-6 w-full">
            <p className="text-white font-bold text-xs md:text-sm">
              Join the playground movement making a real difference
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
