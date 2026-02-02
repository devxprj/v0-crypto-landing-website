export default function CartoonDivider() {
  return (
    <div className="relative h-16 md:h-20 bg-background flex items-center justify-center overflow-hidden">
      {/* Playful circles animation */}
      <div className="flex items-center justify-center gap-2 md:gap-4 relative z-10">
        <div className="w-4 h-4 md:w-6 md:h-6 rounded-full bg-primary animate-bounce" style={{ animationDelay: "0s" }}></div>
        <div className="w-3 h-3 md:w-5 md:h-5 rounded-full bg-secondary animate-bounce" style={{ animationDelay: "0.1s" }}></div>
        <div className="w-4 h-4 md:w-6 md:h-6 rounded-full bg-accent animate-bounce" style={{ animationDelay: "0.2s" }}></div>
        <div className="w-3 h-3 md:w-5 md:h-5 rounded-full bg-primary animate-bounce" style={{ animationDelay: "0.3s" }}></div>
        <div className="w-4 h-4 md:w-6 md:h-6 rounded-full bg-secondary animate-bounce" style={{ animationDelay: "0.4s" }}></div>
      </div>
    </div>
  )
}
