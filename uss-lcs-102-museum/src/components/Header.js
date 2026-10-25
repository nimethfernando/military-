import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/virtual-tour', label: 'Virtual Museum', badge: '360°' },
    { href: '/history', label: 'WWII History' },
    { href: '/gallery', label: 'Photo Gallery' },
    { href: '/#visit', label: 'Plan Your Visit' },
    { href: '/#community', label: 'Crew & Events' },
  ];

  const isActive = (href) => {
    if (href === '/') return router.pathname === '/';
    return router.pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 w-full shadow-2xl">
      {/* Top Utility Announcement Bar */}
      <div className="bg-navy-950/95 border-b border-white/10 text-xs py-1.5 px-4 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-3">
            <span className="font-mono text-gold-400 font-bold flex items-center gap-1.5">
              <span>⚓</span> U.S. National Register of Historic Places #15000716
            </span>
            <span className="hidden md:inline text-slate-400">•</span>
            <span className="hidden md:inline text-slate-300">
              Mare Island Naval Base, Vallejo, CA • Tue, Thu &amp; Sat: 9:30 AM – 3:00 PM • Free Admission
            </span>
          </div>
          <div className="flex items-center gap-4 text-xs font-medium">
            <Link href="/virtual-tour" className="text-cyan-400 hover:text-cyan-300 font-mono flex items-center gap-1">
              <span>🌐</span> Live 360° Virtual Tour
            </Link>
            <a
              href="https://www.facebook.com/theyankeedollar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-gold-400 transition"
            >
              Facebook Community ↗
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className="bg-navy-900/95 border-b border-white/10 px-4 py-3 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo / Ship Hull Badge */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-xl overflow-hidden border-2 border-gold-400/80 shadow-lg group-hover:border-gold-400 transition bg-navy-950 flex items-center justify-center p-0.5">
              <img src="/favicon.svg" alt="USS LCS-102 Crest" className="w-full h-full object-contain" />
            </div>
            <div>
              <span className="block font-display text-2xl font-bold uppercase tracking-wider text-white group-hover:text-gold-400 transition">
                USS LCS-102 Museum
              </span>
              <span className="block text-xs font-mono uppercase tracking-widest text-slate-400">
                Landing Craft Support • "Yankee Dollar"
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 rounded text-sm font-bold uppercase tracking-wider transition relative ${
                  isActive(link.href)
                    ? 'text-gold-400 bg-white/5'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
                {link.badge && (
                  <span className="ml-1.5 px-1.5 py-0.5 rounded text-[10px] font-mono font-bold bg-cyan-400/20 text-cyan-400 border border-cyan-400/30">
                    {link.badge}
                  </span>
                )}
                {isActive(link.href) && (
                  <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-gold-400" />
                )}
              </Link>
            ))}
          </div>

          {/* Action CTAs & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Link
              href="/virtual-tour"
              className="hidden sm:inline-flex items-center justify-center px-4 py-2 rounded text-xs font-bold uppercase tracking-wider bg-cyan-500/10 text-cyan-400 border border-cyan-400/40 hover:bg-cyan-400 hover:text-navy-950 transition duration-200"
            >
              Virtual Tour
            </Link>
            <a
              href="#donate"
              className="hidden sm:inline-flex items-center justify-center px-4 py-2 rounded text-xs font-bold uppercase tracking-wider bg-crimson-600 hover:bg-crimson-500 text-white font-display tracking-wider shadow-md hover:shadow-crimson-600/30 transition duration-200"
            >
              Donate (501c3)
            </a>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded text-slate-300 hover:text-gold-400 hover:bg-white/5 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 border-t border-white/10 flex flex-col gap-1 pb-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3 py-2 rounded text-sm font-bold uppercase tracking-wider flex items-center justify-between ${
                  isActive(link.href) ? 'text-gold-400 bg-white/5' : 'text-slate-300 hover:text-white'
                }`}
              >
                <span>{link.label}</span>
                {link.badge && (
                  <span className="px-1.5 py-0.5 rounded text-[10px] font-mono font-bold bg-cyan-400/20 text-cyan-400">
                    {link.badge}
                  </span>
                )}
              </Link>
            ))}
            <div className="pt-2 flex flex-col gap-2 mt-2 border-t border-white/10">
              <Link
                href="/virtual-tour"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-2.5 rounded font-bold uppercase text-xs tracking-wider bg-cyan-500/20 text-cyan-300 border border-cyan-400/30"
              >
                🌐 Launch 360° Virtual Museum
              </Link>
              <a
                href="#donate"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-2.5 rounded font-bold uppercase text-xs tracking-wider bg-crimson-600 text-white"
              >
                ❤️ Support Preservation (501c3)
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

