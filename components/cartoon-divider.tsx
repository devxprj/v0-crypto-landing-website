export default function CartoonDivider() {
  return (
    <div className="relative h-8 md:h-12 bg-gradient-to-r from-primary via-accent to-secondary flex items-center justify-center overflow-hidden">
      {/* Animated background gradient shift */}
      <div className="absolute inset-0 opacity-50" style={{ animation: "gradientShift 6s ease-in-out infinite" }}></div>
      
      {/* Playful circles animation */}
      <div className="flex items-center justify-center gap-1 md:gap-2.5 relative z-10">
        <div 
          className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-white shadow-lg" 
          style={{ animation: "dotMove1 1.8s ease-in-out infinite" }}
        ></div>
        <div 
          className="w-1.5 h-1.5 md:w-2.5 md:h-2.5 rounded-full bg-white shadow-lg" 
          style={{ animation: "dotMove2 1.8s ease-in-out infinite" }}
        ></div>
        <div 
          className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-white shadow-lg" 
          style={{ animation: "dotMove3 1.8s ease-in-out infinite" }}
        ></div>
        <div 
          className="w-1.5 h-1.5 md:w-2.5 md:h-2.5 rounded-full bg-white shadow-lg" 
          style={{ animation: "dotMove2 1.8s ease-in-out infinite" }}
        ></div>
        <div 
          className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-white shadow-lg" 
          style={{ animation: "dotMove1 1.8s ease-in-out infinite" }}
        ></div>
      </div>
    </div>
  )
}
