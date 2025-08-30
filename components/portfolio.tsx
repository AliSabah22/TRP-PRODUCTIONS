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
    <section id="portfolio" className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Portfolio
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover our latest work and see how we bring stories to life through compelling visuals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg bg-gray-800">
              <div className="aspect-video bg-gray-700 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 text-white">
                    <div className="text-sm text-primary-400 mb-2">{project.category}</div>
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-300 text-sm">{project.description}</p>
                    <button className="mt-4 px-4 py-2 bg-primary-600 text-white rounded hover:bg-primary-700 transition-colors">
                      Watch Video
                    </button>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gray-600 flex items-center justify-center">
                  <div className="text-6xl">🎬</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#contact">
            <button className="px-8 py-4 bg-primary-600 text-white font-bold rounded-lg hover:bg-primary-700 transition-all duration-300">
              Start Your Project
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
