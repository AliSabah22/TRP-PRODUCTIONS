export function Services() {
  const services = [
    {
      title: 'Commercial Production',
      description: 'Cinematic commercials that capture attention and drive sales.',
      features: ['Story-driven narratives', 'High-end cinematography', 'Professional editing']
    },
    {
      title: 'Brand Films',
      description: 'Compelling brand stories that connect with your audience.',
      features: ['Emotional storytelling', 'Brand identity focus', 'Multi-platform delivery']
    },
    {
      title: 'Product Videos',
      description: 'Showcase your products with stunning visual storytelling.',
      features: ['Product demonstration', 'Lifestyle integration', 'Social media ready']
    },
    {
      title: 'Event Coverage',
      description: 'Capture the energy and excitement of your special events.',
      features: ['Live event filming', 'Highlight reels', 'Documentary style']
    }
  ];

  return (
    <section id="services" className="py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-light text-charcoal mb-6 tracking-tight">
            Our Services
          </h2>
          <p className="text-lg text-charcoal/70 max-w-2xl mx-auto leading-relaxed font-light">
            From concept to final cut, we deliver exceptional video content that tells your story.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {services.map((service, index) => (
            <div key={index} className="group">
              <h3 className="text-2xl font-light text-charcoal mb-4">{service.title}</h3>
              <p className="text-charcoal/70 mb-6 leading-relaxed font-light">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="text-sm text-charcoal/60 flex items-center font-light">
                    <span className="w-1 h-1 bg-blue rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-20">
          <a href="#contact">
            <button className="px-8 py-4 bg-blue text-white font-medium text-base rounded-none hover:bg-blue/90 transition-all duration-300">
              Let's Create
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
