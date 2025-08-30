import Link from 'next/link';
import Image from 'next/image';

export function Footer() {
  return (
    <footer className="bg-charcoal-dark border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <Image
                src="/TRP-Video-Advertising - Tyler Phillips.png"
                alt="TRP Creative"
                width={160}
                height={50}
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-white/60 mb-6 max-w-md leading-relaxed font-light">
              Simple Visions, Powerful Stories. We craft cinematic commercials and brand films that move people and drive results.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/trp_production__/?next=%2F" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-blue transition-colors">
                <span className="sr-only">Instagram</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a href="#" className="text-white/40 hover:text-blue transition-colors">
                <span className="sr-only">Vimeo</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.977 6.416c-.105 2.338-1.739 5.543-4.894 9.609-3.151 4.047-5.818 6.073-7.998 6.073-1.626 0-2.998-1.505-4.113-4.519-1.113-3.01-1.891-5.219-2.336-6.628-.495-1.567-1.036-2.352-1.622-2.352-.126 0-.564.264-1.317.792L0 5.878c1.337-1.179 2.656-2.354 3.957-3.527 1.783-1.602 3.127-2.445 4.032-2.532 2.12-.209 3.423 1.247 3.912 4.368.486 3.118.823 5.058 1.012 5.819.281 1.418.59 2.128.927 2.128.256 0 .719-.315 1.388-.943.669-.629 1.147-1.108 1.436-1.436.496-.659.919-1.139 1.267-1.439.348-.299.646-.448.894-.448.351 0 .529.187.529.561 0 .163-.015.361-.044.594-.029.233-.044.422-.044.567 0 .348.126.522.378.522.126 0 .315-.078.567-.234.252-.156.378-.234.378-.234.126 0 .189.063.189.189 0 .126-.063.189-.189.189z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-light mb-6 text-lg">Services</h3>
            <ul className="space-y-3">
              <li><span className="text-white/60 hover:text-white transition-colors font-light text-sm">Commercials</span></li>
              <li><span className="text-white/60 hover:text-white transition-colors font-light text-sm">Brand Films</span></li>
              <li><span className="text-white/60 hover:text-white transition-colors font-light text-sm">Product Videos</span></li>
              <li><span className="text-white/60 hover:text-white transition-colors font-light text-sm">Event Videos</span></li>
              <li><span className="text-white/60 hover:text-white transition-colors font-light text-sm">Corporate Videos</span></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-light mb-6 text-lg">Contact</h3>
            <ul className="space-y-3">
              <li><span className="text-white/60 hover:text-white transition-colors font-light text-sm">Get in Touch</span></li>
              <li><span className="text-white/60 hover:text-white transition-colors font-light text-sm">Book a Call</span></li>
              <li><span className="text-white/60 hover:text-white transition-colors font-light text-sm">View Our Work</span></li>
              <li><span className="text-white/60 hover:text-white transition-colors font-light text-sm">About Us</span></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/40 text-sm font-light">
            © 2024 TRP Creative. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <span className="text-white/40 hover:text-white text-sm transition-colors font-light">
              Privacy Policy
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
