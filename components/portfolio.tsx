import Image from 'next/image';

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
    <section id="portfolio" className="py-32 bg-charcoal">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-light text-white mb-6 tracking-tight">
            Our Portfolio
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto leading-relaxed font-light">
            Discover our latest work and see how we bring stories to life through compelling visuals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group">
              <div className="aspect-video bg-charcoal-light relative overflow-hidden mb-6">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="text-white">
                <div className="text-xs text-blue uppercase tracking-widest mb-2 font-light">{project.category}</div>
                <h3 className="text-xl font-light mb-3">{project.title}</h3>
                <p className="text-white/70 mb-4 leading-relaxed font-light text-sm">{project.description}</p>
                <button className="text-blue hover:text-white transition-colors text-sm font-light">
                  Watch Video →
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-20">
          <a href="#contact">
            <button className="px-8 py-4 bg-blue text-white font-medium text-base rounded-none hover:bg-blue/90 transition-all duration-300">
              Start Your Project
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
