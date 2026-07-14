export default function BackgroundEffects() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-accent-primary/20 rounded-full blur-[120px] animate-aurora" />
      <div className="absolute top-1/3 -right-40 w-[500px] h-[500px] bg-accent-secondary/15 rounded-full blur-[120px] animate-aurora" style={{ animationDelay: "3s" }} />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-accent-highlight/10 rounded-full blur-[100px] animate-aurora" style={{ animationDelay: "6s" }} />
      <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>
  );
}
