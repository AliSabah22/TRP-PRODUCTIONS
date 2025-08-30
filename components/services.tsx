export function Services() {
  const services = [
    {
      title: 'Commercial Production',
      description: 'Cinematic commercials that capture attention and drive sales.',
      icon: '🎬',
      features: ['Story-driven narratives', 'High-end cinematography', 'Professional editing']
    },
    {
      title: 'Brand Films',
      description: 'Compelling brand stories that connect with your audience.',
      icon: '🎭',
      features: ['Emotional storytelling', 'Brand identity focus', 'Multi-platform delivery']
    },
    {
      title: 'Product Videos',
      description: 'Showcase your products with stunning visual storytelling.',
      icon: '📱',
      features: ['Product demonstration', 'Lifestyle integration', 'Social media ready']
    },
    {
      title: 'Event Coverage',
      description: 'Capture the energy and excitement of your special events.',
      icon: '🎪',
      features: ['Live event filming', 'Highlight reels', 'Documentary style']
    }
  ];

  return (
    <section id="services" className="py-24 bg-charcoal-light">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight">
            Our Services
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed font-light">
            From concept to final cut, we deliver exceptional video content that tells your story.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-charcoal rounded-xl p-8 hover:bg-charcoal-dark transition-all duration-500 group">
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
              <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-white/70 mb-6 leading-relaxed">{service.description}</p>
              <ul className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="text-sm text-white/60 flex items-center">
                    <span className="w-2 h-2 bg-blue rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <a href="#contact">
            <button className="px-10 py-4 bg-blue text-white font-bold text-lg rounded-lg hover:bg-blue/90 transition-all duration-300 transform hover:scale-105">
              Let's Create
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
