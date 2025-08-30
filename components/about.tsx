export function About() {
  return (
    <section id="about" className="py-24 bg-charcoal-light">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight">
              About TRP Creative
            </h2>
            <p className="text-xl text-white/70 mb-8 leading-relaxed font-light">
              We are a passionate team of filmmakers, storytellers, and creative professionals 
              dedicated to bringing your vision to life through exceptional video content.
            </p>
            <p className="text-white/70 mb-12 leading-relaxed">
              With over a decade of experience in commercial production, brand storytelling, 
              and cinematic content creation, we understand what it takes to create videos 
              that not only look amazing but also drive real results for your business.
            </p>
            
            <div className="grid grid-cols-2 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue mb-3">500+</div>
                <div className="text-white/60 text-sm uppercase tracking-wide">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue mb-3">98%</div>
                <div className="text-white/60 text-sm uppercase tracking-wide">Client Satisfaction</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-charcoal rounded-xl p-10">
              <h3 className="text-3xl font-bold text-white mb-8">Why Choose Us?</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue rounded-full flex items-center justify-center mr-6 mt-1">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-2 text-lg">Professional Quality</h4>
                    <p className="text-white/60 leading-relaxed">Cinema-grade equipment and experienced crew</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue rounded-full flex items-center justify-center mr-6 mt-1">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-2 text-lg">Creative Storytelling</h4>
                    <p className="text-white/60 leading-relaxed">Compelling narratives that connect with audiences</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue rounded-full flex items-center justify-center mr-6 mt-1">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-2 text-lg">Fast Turnaround</h4>
                    <p className="text-white/60 leading-relaxed">Quick delivery without compromising quality</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue rounded-full flex items-center justify-center mr-6 mt-1">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-2 text-lg">Full Service</h4>
                    <p className="text-white/60 leading-relaxed">From concept to final delivery</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
