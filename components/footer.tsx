'use client'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-primary to-secondary py-8 md:py-12 px-4 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-5 right-5 w-24 h-24 bg-white/10 rounded-full blur-2xl"></div>
      <div className="absolute bottom-5 left-5 w-28 h-28 bg-accent/10 rounded-full blur-2xl"></div>

      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="flex flex-col items-center gap-6 text-center">
          <h3 className="text-3xl md:text-4xl font-black text-white">
            Buy The Children
          </h3>
          
          <div className="space-y-3">
            <p className="text-lg font-black text-white uppercase tracking-wider">
              NFA - DYOR
            </p>
            <p className="text-white font-bold text-sm">
              100% of fees go directly to NCAC for child protection
            </p>
          </div>

          <div className="border-t-4 border-white/30 pt-6 w-full">
            <p className="text-white font-bold text-xs">
              Join the playground movement making a real difference
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
