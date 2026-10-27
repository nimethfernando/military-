import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();

  // Handle scroll detection for dynamic glassmorphic elevation
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [router.asPath]);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/virtual-tour', label: '360° Virtual Museum', badge: 'Interactive' },
    { href: '/history', label: 'WWII History' },
    { href: '/gallery', label: 'Photo Archive' },
    { href: '/membership', label: 'Membership' },
    { href: '/#visit', label: 'Plan Your Visit' },
  ];

  const isActive = (href) => {
    if (href === '/') return router.pathname === '/';
    if (href.startsWith('/#')) return false;
    return router.pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Top Utility Announcement Bar */}
      <div className="bg-navy-950/95 border-b border-white/10 text-[11px] py-1.5 px-4 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          {/* Left: Historic Register & Visiting Info */}
          <div className="flex items-center gap-2.5 sm:gap-3 flex-wrap">
            <span className="font-mono text-gold-400 font-bold flex items-center gap-1.5">
              <span>⚓</span> U.S. National Register of Historic Places #15000716
            </span>
            <span className="hidden lg:inline text-slate-500">•</span>
            <span className="hidden md:inline text-slate-300">
              Mare Island Naval Shipyard, Vallejo, CA
            </span>
            <span className="hidden lg:inline text-slate-500">•</span>
            <span className="hidden sm:inline text-emerald-400 font-mono font-medium">
              Tue, Thu &amp; Sat: 9:30 AM – 3:00 PM • Free Admission
            </span>
          </div>

          {/* Right: Quick Portals */}
          <div className="flex items-center gap-3 sm:gap-4 font-mono text-[11px]">
            <Link
              href="/virtual-tour"
              className="text-cyan-400 hover:text-cyan-300 transition flex items-center gap-1 font-semibold"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping inline-block" />
              <span>Live 360° Tour</span>
            </Link>
            <span className="text-slate-600">|</span>
            <a
              href="https://www.facebook.com/theyankeedollar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-gold-400 transition flex items-center gap-1"
            >
              <span>Facebook Community</span>
              <span className="text-[10px]">↗</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav
        className={`px-4 transition-all duration-300 border-b border-white/10 ${
          scrolled
            ? 'py-2.5 bg-navy-950/95 backdrop-blur-xl shadow-2xl shadow-black/50'
            : 'py-3.5 bg-navy-900/90 backdrop-blur-lg shadow-xl'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          {/* Brand Identity / Naval Crest */}
          <Link href="/" className="flex items-center gap-3 group shrink-0">
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl overflow-hidden border-2 border-gold-400/80 shadow-lg shadow-gold-500/10 group-hover:border-gold-400 group-hover:scale-105 transition duration-300 bg-navy-950 flex items-center justify-center p-0.5">
              <img
                src="/favicon.svg"
                alt="USS LCS-102 Official Crest"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <span className="block font-display text-xl sm:text-2xl font-black uppercase tracking-wider text-white group-hover:text-gold-400 transition leading-none">
                USS LCS-102 Museum
              </span>
              <span className="block text-[10px] sm:text-[11px] font-mono uppercase tracking-widest text-slate-400 mt-1">
                Landing Craft Support • <span className="text-gold-400 font-semibold">"Yankee Dollar"</span>
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden xl:flex items-center gap-1.5">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3.5 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-200 relative flex items-center gap-1.5 ${
                    active
                      ? 'text-gold-400 bg-gold-400/10 shadow-sm'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span>{link.label}</span>
                  {link.badge && (
                    <span className="px-1.5 py-0.5 rounded text-[9px] font-mono font-bold uppercase bg-cyan-400/15 text-cyan-300 border border-cyan-400/30">
                      {link.badge}
                    </span>
                  )}
                  {active && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-gold-400 rounded-full shadow-[0_0_8px_rgba(244,178,27,0.8)]" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Right Side Action CTAs & Mobile Toggle */}
          <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
            {/* Direct 360 Launch (Compact Pill on lg screens) */}
            <Link
              href="/virtual-tour"
              className="hidden lg:inline-flex xl:hidden items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-bold uppercase bg-cyan-500/15 text-cyan-300 border border-cyan-400/40 hover:bg-cyan-400 hover:text-navy-950 transition"
            >
              <span>🌐</span>
              <span>360° Tour</span>
            </Link>

            {/* High-Impact Donate CTA */}
            <a
              href="#donate"
              className="inline-flex items-center justify-center gap-1.5 px-4 py-2 sm:px-5 sm:py-2.5 rounded-lg text-xs sm:text-sm font-display font-bold uppercase tracking-wider text-white bg-gradient-to-r from-crimson-600 via-crimson-500 to-crimson-600 hover:from-crimson-500 hover:to-crimson-400 border border-crimson-400/30 shadow-lg shadow-crimson-600/30 hover:shadow-crimson-600/50 hover:-translate-y-0.5 transition duration-200"
            >
              <span className="text-white">❤️</span>
              <span>Donate (501c3)</span>
            </a>

            {/* Mobile / Tablet Menu Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-lg text-slate-300 hover:text-gold-400 hover:bg-white/5 border border-white/10 transition"
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

        {/* Mobile / Tablet Drawer Menu */}
        {mobileMenuOpen && (
          <div className="xl:hidden mt-3 pt-3 border-t border-white/10 flex flex-col gap-1 pb-3 animate-fadeIn">
            <div className="p-2 mb-2 rounded-lg bg-navy-950/80 border border-white/10 text-xs font-mono text-slate-300 flex items-center justify-between">
              <span className="text-gold-400 font-bold">Visiting Hours:</span>
              <span>Tue, Thu &amp; Sat: 9:30 AM – 3:00 PM</span>
            </div>

            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3.5 py-2.5 rounded-lg text-sm font-bold uppercase tracking-wider flex items-center justify-between transition ${
                    active
                      ? 'text-gold-400 bg-gold-400/10 border-l-2 border-gold-400'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span>{link.label}</span>
                  {link.badge && (
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase bg-cyan-400/20 text-cyan-300">
                      {link.badge}
                    </span>
                  )}
                </Link>
              );
            })}

            {/* Quick Actions in Mobile Drawer */}
            <div className="pt-3 mt-2 border-t border-white/10 flex flex-col gap-2">
              <Link
                href="/virtual-tour"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-2.5 rounded-lg font-bold uppercase text-xs tracking-wider bg-cyan-500/15 text-cyan-300 border border-cyan-400/40 hover:bg-cyan-400 hover:text-navy-950 transition flex items-center justify-center gap-2"
              >
                <span>🌐</span>
                <span>Launch 360° Virtual Museum</span>
              </Link>
              <Link
                href="/membership"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-2.5 rounded-lg font-bold uppercase text-xs tracking-wider bg-gold-500/15 text-gold-300 border border-gold-400/40 hover:bg-gold-400 hover:text-navy-950 transition flex items-center justify-center gap-2"
              >
                <span>📜</span>
                <span>Apply for Membership</span>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
