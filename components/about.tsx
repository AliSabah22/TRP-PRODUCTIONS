'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('about');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <section id="about" className="py-32 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <h2 className="text-3xl md:text-5xl font-light text-charcoal mb-8 tracking-tight">
              About Us
            </h2>
            <p className="text-lg text-charcoal/70 mb-8 leading-relaxed font-light">
              It all started about 7 years ago when I got my first cinema drone. Like a spark, it ignited my passion for making videos. Even after going to school for four years in product design and development and learning the art of selling for 3 of those years, the passion to make videos was still there.
            </p>
            
            <div className="grid grid-cols-2 gap-12 mb-8">
              <div className={`text-center transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <div className="text-3xl font-light text-blue mb-2 group-hover:scale-110 transition-transform duration-300">7+</div>
                <div className="text-charcoal/60 text-xs uppercase tracking-widest font-light">Years Experience</div>
              </div>
              <div className={`text-center transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <div className="text-3xl font-light text-blue mb-2 group-hover:scale-110 transition-transform duration-300">98%</div>
                <div className="text-charcoal/60 text-xs uppercase tracking-widest font-light">Satisfaction</div>
              </div>
            </div>
          </div>
          
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <div className="rounded-none overflow-hidden group">
              <Image
                src="/bts-image.jpg"
                alt="Behind the Scenes - TRP Creative"
                width={600}
                height={400}
                className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
        
        {/* Mission Section */}
        <div className="mt-32 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <div className="rounded-none overflow-hidden group">
              <Image
                src="/about-image(owner's image).jpg"
                alt="Tyler R. Phillips - TRP Production Founder"
                width={600}
                height={800}
                className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
          
          <div className={`transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <h3 className="text-2xl font-light text-charcoal mb-6">Our Mission</h3>
            <p className="text-charcoal/70 mb-6 leading-relaxed font-light">
              Hello, my name is Tyler R. Phillips, I'm the founder of TRP Production, a video advertising company. With the help of my team our mission is to give you an unforgettable experience as we take your vision and bring it to life through video.
            </p>
            <p className="text-charcoal/70 mb-8 leading-relaxed font-light">
              In a video driven world with streaming services and endless scrolling we want to help your brand stand out and leave an impression on your future customers.
            </p>
            <p className="text-charcoal/70 mb-8 leading-relaxed font-light">
              Schedule a free discovery call with us and let's see if we're a good fit. We wish you the best of luck with your business!
            </p>
            
            <div className="flex space-x-4">
              <a href="#contact">
                <button className="px-6 py-3 bg-blue text-white font-medium text-sm rounded-none hover:bg-blue/90 transition-all duration-300 group">
                  <span className="group-hover:translate-x-1 transition-transform duration-300 inline-block">
                    Schedule Discovery Call
                  </span>
                </button>
              </a>
              <a href="#portfolio">
                <button className="px-6 py-3 border border-charcoal text-charcoal font-medium text-sm rounded-none hover:bg-charcoal hover:text-white transition-all duration-300 group">
                  <span className="group-hover:translate-x-1 transition-transform duration-300 inline-block">
                    View Our Work
                  </span>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
