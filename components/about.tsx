import Image from 'next/image';

export function About() {
  return (
    <section id="about" className="py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-light text-charcoal mb-8 tracking-tight">
              About TRP Creative
            </h2>
            <p className="text-lg text-charcoal/70 mb-8 leading-relaxed font-light">
              We are a passionate team of filmmakers, storytellers, and creative professionals 
              dedicated to bringing your vision to life through exceptional video content.
            </p>
            <p className="text-charcoal/70 mb-12 leading-relaxed font-light">
              With over a decade of experience in commercial production, brand storytelling, 
              and cinematic content creation, we understand what it takes to create videos 
              that not only look amazing but also drive real results for your business.
            </p>
            
            <div className="grid grid-cols-2 gap-12">
              <div className="text-center">
                <div className="text-3xl font-light text-blue mb-2">500+</div>
                <div className="text-charcoal/60 text-xs uppercase tracking-widest font-light">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-light text-blue mb-2">98%</div>
                <div className="text-charcoal/60 text-xs uppercase tracking-widest font-light">Satisfaction</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="rounded-none overflow-hidden">
              <Image
                src="/bts-image.jpg"
                alt="Behind the Scenes - TRP Creative"
                width={600}
                height={400}
                className="w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
        
        {/* Owner/Team Section */}
        <div className="mt-32 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="rounded-none overflow-hidden">
              <Image
                src="/about-image(owner's image).jpg"
                alt="Tyler Phillips - TRP Creative Founder"
                width={600}
                height={800}
                className="w-full h-96 object-cover"
              />
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-light text-charcoal mb-6">Meet Our Founder</h3>
            <p className="text-charcoal/70 mb-6 leading-relaxed font-light">
              Tyler Phillips leads TRP Creative with a passion for storytelling and a commitment to excellence. 
              With years of experience in video production, Tyler ensures every project meets the highest standards 
              of quality and creativity.
            </p>
            <p className="text-charcoal/70 mb-8 leading-relaxed font-light">
              Our team combines technical expertise with creative vision to deliver videos that not only look 
              stunning but also drive real business results for our clients.
            </p>
            
            <div className="flex space-x-4">
              <a href="#contact">
                <button className="px-6 py-3 bg-blue text-white font-medium text-sm rounded-none hover:bg-blue/90 transition-all duration-300">
                  Work With Us
                </button>
              </a>
              <a href="#portfolio">
                <button className="px-6 py-3 border border-charcoal text-charcoal font-medium text-sm rounded-none hover:bg-charcoal hover:text-white transition-all duration-300">
                  View Portfolio
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
