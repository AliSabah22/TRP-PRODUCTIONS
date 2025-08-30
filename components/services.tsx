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
    <section id="services" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Services
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From concept to final cut, we deliver exceptional video content that tells your story.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-all duration-300">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-gray-300 mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="text-sm text-gray-400 flex items-center">
                    <span className="w-2 h-2 bg-primary-400 rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
