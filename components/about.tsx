export function About() {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About TRP Production
            </h2>
            <p className="text-xl text-gray-300 mb-6">
              We are a passionate team of filmmakers, storytellers, and creative professionals 
              dedicated to bringing your vision to life through exceptional video content.
            </p>
            <p className="text-gray-300 mb-8">
              With over a decade of experience in commercial production, brand storytelling, 
              and cinematic content creation, we understand what it takes to create videos 
              that not only look amazing but also drive real results for your business.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-400 mb-2">500+</div>
                <div className="text-gray-400">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-400 mb-2">98%</div>
                <div className="text-gray-400">Client Satisfaction</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gray-800 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Why Choose Us?</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Professional Quality</h4>
                    <p className="text-gray-400 text-sm">Cinema-grade equipment and experienced crew</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Creative Storytelling</h4>
                    <p className="text-gray-400 text-sm">Compelling narratives that connect with audiences</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Fast Turnaround</h4>
                    <p className="text-gray-400 text-sm">Quick delivery without compromising quality</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Full Service</h4>
                    <p className="text-gray-400 text-sm">From concept to final delivery</p>
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
