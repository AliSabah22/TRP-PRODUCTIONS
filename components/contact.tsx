export function Contact() {
  return (
    <section id="contact" className="py-32 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-light text-charcoal mb-6 tracking-tight">Contact</h2>
        <p className="text-charcoal/70 mb-8 leading-relaxed font-light">
          Tell us about your project and we'll get back to you shortly.
        </p>
        <form
          action="/api/contact"
          method="post"
          className="space-y-4"
        >
          <input
            name="name"
            type="text"
            required
            placeholder="Your Name"
            className="w-full border border-charcoal/20 px-4 py-3 focus:outline-none"
          />
          <input
            name="email"
            type="email"
            required
            placeholder="Your Email"
            className="w-full border border-charcoal/20 px-4 py-3 focus:outline-none"
          />
          <textarea
            name="message"
            required
            placeholder="Your Message"
            className="w-full border border-charcoal/20 px-4 py-3 h-32 focus:outline-none"
          />
          <button
            type="submit"
            className="px-8 py-4 bg-blue text-white font-medium text-base rounded-none hover:bg-blue/90 transition-all duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

