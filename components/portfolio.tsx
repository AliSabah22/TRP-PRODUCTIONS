'use client';

import { useState } from 'react';
import Image from 'next/image';

export function Portfolio() {
  const [selectedVideos, setSelectedVideos] = useState<Array<{url: string, title: string}>>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');

  const projects = [
    {
      title: 'Video Commercials',
      category: 'Commercial',
      description: 'Take your customer on a journey with your product through a captivating commercial. All we need is your vision and we\'ll tell the story. Don\'t have a vision? We can help you discover it.',
      image: '/work-image1.jpg',
      videos: [
        { url: 'https://youtu.be/rQPN0p30ZsI', title: 'Best Power Station for Emergencies: Stay in the Game! #solargenerator #powerstation #generator' },
        { url: 'https://youtu.be/iAzuhVkhVUw', title: 'Welcome to Forge! Cache Valley\'s #1 Hybrid gym!' },
        { url: 'https://youtu.be/cNNTIMs10fA', title: 'The Most Reliable Power Station: Powering The North Pole' }
      ]
    },
    {
      title: 'Professional Testimonials',
      category: 'Testimonials',
      description: 'There\'s nothing that builds trust more with a prospective customer than seeing a genuine testimonial. We can help you capture that!',
      image: '/work-image2.jpg',
      videos: [
        { url: 'https://www.youtube.com/watch?v=lXKfQJLLuJw', title: 'A Daughter\'s Journey with Hospice Care' },
        { url: 'https://www.youtube.com/watch?v=JgNlB9-cek0', title: 'Off-Grid, Solar-Powered Tiny Home: Tiny Home Generator Review' },
        { url: 'https://youtu.be/DMXOteEDj-I', title: 'How Hospice Made the Impossible Happen: A Father\'s Final Gift to His Son' },
        { url: 'https://youtu.be/ajKrW63QDDM', title: 'Thomas Cunningham\'s Story: A Journey with Hospice and a Life Well Lived' }
      ]
    },
    {
      title: 'Content Creation',
      category: 'Social Media',
      description: 'In this scrolling enveloped world if you want to attract people to your product/service, they first have to see you on Social Media.',
      image: '/work-image3.jpg',
      videos: [
        { url: 'https://youtu.be/NhZq9co01CQ', title: 'Social Media Content Series - Episode 1' },
        { url: 'https://youtu.be/XsHQgjZxEj0', title: 'Brand Storytelling on Social Platforms' },
        { url: 'https://youtu.be/psZ9wLVEees', title: 'Engaging Social Media Campaign' },
        { url: 'https://youtu.be/gywFDUPuYuE', title: 'Content Marketing Strategy Video' },
        { url: 'https://youtu.be/aK3UZkcSuow', title: 'Social Media Best Practices Guide' }
      ]
    }
  ];

  const openModal = (videos: Array<{url: string, title: string}>, serviceName: string) => {
    setSelectedVideos(videos);
    setSelectedService(serviceName);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedVideos([]);
    setSelectedService('');
  };

  const getYouTubeThumbnail = (url: string) => {
    if (url.includes('youtube.com/watch?v=')) {
      const videoId = url.split('v=')[1];
      return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
    } else if (url.includes('youtu.be/')) {
      const videoId = url.split('youtu.be/')[1];
      return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
    }
    return '';
  };

  return (
    <>
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
              <div 
                key={index} 
                className="group cursor-pointer" 
                onClick={() => openModal(project.videos, project.title)}
              >
                <div className="aspect-video bg-charcoal-light relative overflow-hidden mb-6">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-white text-4xl">▶</div>
                  </div>
                </div>
                <div className="text-white">
                  <div className="text-xs text-blue uppercase tracking-widest mb-2 font-light">{project.category}</div>
                  <h3 className="text-xl font-light mb-3">{project.title}</h3>
                  <p className="text-white/70 mb-4 leading-relaxed font-light text-sm">{project.description}</p>
                  <div className="text-blue group-hover:text-white transition-colors text-sm font-light">
                    Watch Videos ({project.videos.length}) →
                  </div>
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

      {/* Video Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="bg-white max-w-6xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200 flex justify-between items-center">
              <h3 className="text-2xl font-light text-charcoal">{selectedService} Videos</h3>
              <button 
                onClick={closeModal}
                className="text-charcoal hover:text-blue transition-colors text-2xl"
              >
                ×
              </button>
            </div>
            
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {selectedVideos.map((video, index) => (
                  <div key={index} className="bg-gray-50 border border-gray-200 p-4 rounded-none">
                    <div className="aspect-video bg-gray-200 mb-4 relative overflow-hidden">
                      <img
                        src={getYouTubeThumbnail(video.url)}
                        alt={video.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                        }}
                      />
                      <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                        <div className="text-white text-4xl">▶</div>
                      </div>
                    </div>
                    <h4 className="text-lg font-medium text-charcoal mb-3 line-clamp-2">{video.title}</h4>
                    <a 
                      href={video.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 px-4 py-2 bg-blue text-white text-sm font-medium rounded-none hover:bg-blue/90 transition-all duration-300"
                    >
                      <span>Watch Video</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
