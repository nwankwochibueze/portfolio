export default function Hero() {
  return (
    <section className="pt-24 pb-12 md:pt-32 md:pb-20 lg:pt-40 lg:pb-32 px-4 space-y-6 md:space-y-8">
      <div className="space-y-3 md:space-y-4">
        {/* ✅ Name + Open to Work Badge */}
        <div className="flex flex-wrap items-center gap-2">
          <p className="font-medium text-sm md:text-base">
            Hello, I&apos;m Nwankwo Chibueze
          </p>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-green-50 border border-green-200 rounded-full text-green-700 text-xs font-semibold">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            Open to Work
          </span>
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold font-heading tracking-tight leading-tight text-foreground">
          A Web Developer based in Nigeria
        </h1>
      </div>
      
      <p className="text-base md:text-lg text-foreground/80 leading-relaxed max-w-none md:max-w-2xl">
        I build accessible, pixel-perfect, and performant web applications. 
        Specializing in React, Next.js, Node.js, and modern web technologies.
      </p>
      
      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-3 pt-2">
        <a 
          href="#projects" 
          className="px-6 py-3 bg-[#E4F222] hover:bg-[#CFE020] text-[#1F2937] font-semibold rounded-lg transition-colors text-center min-h-11 flex items-center justify-center"
        >
          View My Work
        </a>
        <a 
          href="https://github.com/nwankwochibueze" 
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 border border-border hover:bg-card-hover rounded-lg font-semibold transition-colors text-center min-h-11 flex items-center justify-center text-foreground"
        >
          GitHub Profile
        </a>
      </div>
    </section>
  );
}