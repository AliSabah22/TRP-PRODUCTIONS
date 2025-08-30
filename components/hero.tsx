export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-charcoal overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue/3 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue/2 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        <div className="mb-12 animate-fade-in">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight tracking-tight">
            Simple Visions,
            <br />
            <span className="text-blue">Powerful Stories</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/70 max-w-4xl mx-auto leading-relaxed mb-12 font-light">
            We craft cinematic commercials and brand films that move people, 
            drive results, and tell stories that matter.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 animate-slide-up">
          <a href="#contact">
            <button className="px-10 py-4 bg-blue text-white font-bold text-lg rounded-lg hover:bg-blue/90 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Book a Call
            </button>
          </a>
          
          <a href="#portfolio">
            <button className="px-10 py-4 border-2 border-white text-white font-bold text-lg rounded-lg hover:bg-white hover:text-charcoal transition-all duration-300 transform hover:scale-105">
              View Our Work
            </button>
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-4xl mx-auto animate-fade-in">
          <div className="text-center">
            <div className="text-4xl font-bold text-blue mb-2">500+</div>
            <div className="text-white/60 text-sm uppercase tracking-wide">Projects Delivered</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue mb-2">98%</div>
            <div className="text-white/60 text-sm uppercase tracking-wide">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue mb-2">10+</div>
            <div className="text-white/60 text-sm uppercase tracking-wide">Years Experience</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}
