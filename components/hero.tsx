import Image from 'next/image';

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-charcoal overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-image.jpg"
          alt="TRP Creative - Video Production"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-charcoal/60 z-10"></div>
      </div>

      <div className="relative z-20 text-center px-6 max-w-5xl mx-auto">
        <div className="mb-16">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-white mb-8 leading-tight tracking-tight">
            Simple Visions,
            <br />
            <span className="text-blue font-normal">Powerful Stories</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed mb-12 font-light">
            We craft cinematic commercials and brand films that move people, 
            drive results, and tell stories that matter.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20">
          <a href="#contact">
            <button className="px-8 py-4 bg-blue text-white font-medium text-base rounded-none hover:bg-blue/90 transition-all duration-300">
              Book a Call
            </button>
          </a>
          
          <a href="#portfolio">
            <button className="px-8 py-4 border border-white text-white font-medium text-base rounded-none hover:bg-white hover:text-charcoal transition-all duration-300">
              View Our Work
            </button>
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-light text-blue mb-2">500+</div>
            <div className="text-white/60 text-xs uppercase tracking-widest">Projects</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-light text-blue mb-2">98%</div>
            <div className="text-white/60 text-xs uppercase tracking-widest">Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-light text-blue mb-2">10+</div>
            <div className="text-white/60 text-xs uppercase tracking-widest">Years</div>
          </div>
        </div>
      </div>
    </section>
  );
}
