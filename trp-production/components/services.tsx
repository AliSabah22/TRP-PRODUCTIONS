export function Services() {
  // Simplified - no intersection observer for faster startup
  const isVisible = true;

  const services = [
    {
      title: 'Commercial Production',
      description: 'Cinematic commercials that capture attention and drive sales.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
      features: ['Story-driven narratives', 'High-end cinematography', 'Professional editing']
    },
    {
      title: 'Brand Films',
      description: 'Compelling brand stories that connect with your audience.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 0h10m-10 0a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2M9 12l2 2 4-4" />
        </svg>
      ),
      features: ['Emotional storytelling', 'Brand identity focus', 'Multi-platform delivery']
    },
    {
      title: 'Product Videos',
      description: 'Showcase your products with stunning visual storytelling.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      features: ['Product demonstration', 'Lifestyle integration', 'Social media ready']
    },
    {
      title: 'Event Coverage',
      description: 'Capture the energy and excitement of your special events.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      features: ['Live event filming', 'Highlight reels', 'Documentary style']
    }
  ];

  return (
    <section id="services" className="py-32 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl md:text-5xl font-light text-charcoal mb-6 tracking-tight">
            Our Services
          </h2>
          <p className="text-lg text-charcoal/70 max-w-2xl mx-auto leading-relaxed font-light">
            From concept to final cut, we deliver exceptional video content that tells your story.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {services.map((service, index) => (
            <div 
              key={index} 
            className={`group transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            >
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-16 h-16 bg-blue/10 rounded-lg flex items-center justify-center group-hover:bg-blue/20 transition-all duration-300 group-hover:scale-110">
                  <div className="text-blue group-hover:text-blue/80 transition-colors duration-300">
                    {service.icon}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-light text-charcoal mb-4 group-hover:text-blue transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-charcoal/70 mb-6 leading-relaxed font-light">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-charcoal/60 flex items-center font-light group-hover:text-charcoal/80 transition-colors duration-300">
                        <span className="w-1 h-1 bg-blue rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={`text-center mt-20 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <a href="#contact">
            <button className="px-8 py-4 bg-blue text-white font-medium text-base rounded-none hover:bg-blue/90 transition-all duration-300 group">
              <span className="group-hover:translate-x-1 transition-transform duration-300 inline-block">
                Let's Create
              </span>
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
