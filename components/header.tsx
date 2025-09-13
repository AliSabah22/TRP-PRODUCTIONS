import Link from 'next/link';
import Image from 'next/image';

export function Header() {
  return (
    <header className="bg-charcoal-dark/80 backdrop-blur-sm sticky top-0 z-40 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="/TRP-Video-Advertising - Tyler Phillips.png"
            alt="TRP Creative"
            width={140}
            height={40}
            className="h-10 w-auto"
          />
        </Link>
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#services" className="text-white/80 hover:text-white transition-colors font-light text-sm">Services</a>
          <a href="#portfolio" className="text-white/80 hover:text-white transition-colors font-light text-sm">Work</a>
          <a href="#about" className="text-white/80 hover:text-white transition-colors font-light text-sm">About</a>
          <a href="#contact" className="text-white/80 hover:text-white transition-colors font-light text-sm">Contact</a>
        </nav>
      </div>
    </header>
  );
}
