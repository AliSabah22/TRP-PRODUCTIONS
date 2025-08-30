'use client';

import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-32 bg-charcoal">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-light text-white mb-6 tracking-tight">
            Let's Create Something Amazing
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto leading-relaxed font-light">
            Ready to bring your vision to life? Get in touch and let's discuss your project.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-light text-white mb-8">Start Your Project</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-white font-light mb-3 text-sm">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-transparent border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-blue transition-colors font-light"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-white font-light mb-3 text-sm">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-transparent border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-blue transition-colors font-light"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="company" className="block text-white font-light mb-3 text-sm">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-transparent border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-blue transition-colors font-light"
                  placeholder="Your company"
                />
              </div>

              <div>
                <label htmlFor="projectType" className="block text-white font-light mb-3 text-sm">
                  Project Type
                </label>
                <select
                  id="projectType"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-transparent border border-white/20 text-white focus:outline-none focus:border-blue transition-colors font-light"
                >
                  <option value="">Select project type</option>
                  <option value="commercial">Commercial</option>
                  <option value="brand-film">Brand Film</option>
                  <option value="product-video">Product Video</option>
                  <option value="event-coverage">Event Coverage</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-white font-light mb-3 text-sm">
                  Project Details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-transparent border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-blue transition-colors font-light"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-blue text-white font-medium text-base rounded-none hover:bg-blue/90 transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-light text-white mb-6">Get In Touch</h3>
              <p className="text-white/70 mb-8 leading-relaxed font-light">
                Ready to start your next project? We'd love to hear from you and discuss 
                how we can bring your vision to life.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-blue flex items-center justify-center mr-6">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-light mb-2 text-lg">Email</h4>
                  <p className="text-white/70 text-lg font-light">trpcreative256@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-blue flex items-center justify-center mr-6">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-light mb-2 text-lg">Phone</h4>
                  <p className="text-white/70 text-lg font-light">435-339-3991</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-blue flex items-center justify-center mr-6">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-light mb-2 text-lg">Location</h4>
                  <p className="text-white/70 text-lg font-light">Utah, United States</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
