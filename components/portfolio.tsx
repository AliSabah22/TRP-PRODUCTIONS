export function Portfolio() {
  const projects = [
    {
      title: 'Nike Commercial',
      category: 'Commercial',
      description: 'Dynamic sports commercial showcasing athletic performance.',
      image: '/work-image1.jpg',
      videoUrl: '#'
    },
    {
      title: 'Tesla Brand Film',
      category: 'Brand Film',
      description: 'Innovation-focused brand story for Tesla.',
      image: '/work-image2.jpg',
      videoUrl: '#'
    },
    {
      title: 'Apple Product Video',
      category: 'Product',
      description: 'Elegant product showcase for Apple devices.',
      image: '/work-image3.jpg',
      videoUrl: '#'
    }
  ];

  return (
    <section id="portfolio" className="py-24 bg-charcoal">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight">
            Our Portfolio
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed font-light">
            Discover our latest work and see how we bring stories to life through compelling visuals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group relative overflow-hidden rounded-xl bg-charcoal-light">
              <div className="aspect-video bg-charcoal-dark relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                  <div className="p-8 text-white">
                    <div className="text-sm text-blue mb-3 uppercase tracking-wide font-medium">{project.category}</div>
                    <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                    <p className="text-white/70 mb-6 leading-relaxed">{project.description}</p>
                    <button className="px-6 py-3 bg-blue text-white rounded-lg hover:bg-blue/90 transition-colors font-medium">
                      Watch Video
                    </button>
                  </div>
                </div>
                <div className="absolute inset-0 bg-charcoal-dark flex items-center justify-center">
                  <div className="text-8xl opacity-20">🎬</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <a href="#contact">
            <button className="px-10 py-4 bg-blue text-white font-bold text-lg rounded-lg hover:bg-blue/90 transition-all duration-300 transform hover:scale-105">
              Start Your Project
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
