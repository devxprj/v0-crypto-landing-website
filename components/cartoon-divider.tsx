export default function CartoonDivider() {
  return (
    <div className="relative h-10 md:h-14 bg-gradient-to-r from-primary via-accent to-secondary flex items-center justify-center overflow-hidden">
      {/* Playful circles animation */}
      <div className="flex items-center justify-center gap-1.5 md:gap-3 relative z-10">
        <div 
          className="w-2.5 h-2.5 md:w-4 md:h-4 rounded-full bg-white shadow-lg border-1.5 border-white" 
          style={{ animation: "dotMove1 2s ease-in-out infinite" }}
        ></div>
        <div 
          className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-white shadow-lg border-1.5 border-white" 
          style={{ animation: "dotMove2 2s ease-in-out infinite" }}
        ></div>
        <div 
          className="w-2.5 h-2.5 md:w-4 md:h-4 rounded-full bg-white shadow-lg border-1.5 border-white" 
          style={{ animation: "dotMove3 2s ease-in-out infinite" }}
        ></div>
        <div 
          className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-white shadow-lg border-1.5 border-white" 
          style={{ animation: "dotMove2 2s ease-in-out infinite" }}
        ></div>
        <div 
          className="w-2.5 h-2.5 md:w-4 md:h-4 rounded-full bg-white shadow-lg border-1.5 border-white" 
          style={{ animation: "dotMove1 2s ease-in-out infinite" }}
        ></div>
      </div>
    </div>
  )
}
