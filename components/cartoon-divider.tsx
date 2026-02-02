export default function CartoonDivider() {
  return (
    <div className="relative h-16 md:h-24 bg-gradient-to-r from-primary via-accent to-secondary flex items-center justify-center overflow-hidden">
      {/* Animated background shapes */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-2 left-1/4 w-8 h-8 rounded-full bg-white animate-pulse"></div>
        <div className="absolute bottom-2 right-1/4 w-6 h-6 rounded-full bg-white animate-bounce"></div>
        <div className="absolute top-1/2 right-1/3 w-4 h-4 rounded-full bg-white" style={{ animation: "float 4s ease-in-out infinite" }}></div>
      </div>

      {/* Playful circles animation */}
      <div className="flex items-center justify-center gap-2 md:gap-4 relative z-10">
        <div className="w-4 h-4 md:w-6 md:h-6 rounded-full bg-white shadow-lg animate-bounce border-2 border-white" style={{ animationDelay: "0s" }}></div>
        <div className="w-3 h-3 md:w-5 md:h-5 rounded-full bg-white shadow-lg animate-bounce border-2 border-white" style={{ animationDelay: "0.1s" }}></div>
        <div className="w-4 h-4 md:w-6 md:h-6 rounded-full bg-white shadow-lg animate-bounce border-2 border-white" style={{ animationDelay: "0.2s" }}></div>
        <div className="w-3 h-3 md:w-5 md:h-5 rounded-full bg-white shadow-lg animate-bounce border-2 border-white" style={{ animationDelay: "0.3s" }}></div>
        <div className="w-4 h-4 md:w-6 md:h-6 rounded-full bg-white shadow-lg animate-bounce border-2 border-white" style={{ animationDelay: "0.4s" }}></div>
      </div>
    </div>
  )
}
