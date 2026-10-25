import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex flex-col justify-between overflow-hidden bg-navy-950 border-b border-white/10">
      {/* Background Video / Fallback Media Layer */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-navy-950">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/assets/images/rd-lowering04.jpg"
          className="w-full h-full object-cover object-[center_28%] scale-[1.03] opacity-90 transition-opacity duration-700"
        >
          <source src="/assets/images/LCS.mp4" type="video/mp4" />
        </video>
        {/* Cinematic Dual Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-950/70 to-navy-950/30 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-navy-950/40 pointer-events-none" />
      </div>

      {/* Hero Core Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16 sm:py-24 my-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Mission Narrative & Actions */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-gold-400 bg-gold-400/10 border border-gold-400/20 px-3 py-1 rounded mb-4">
              <span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse" />
              U.S. Navy Landing Craft Support (Large) (Mark 3) • Commissioned Feb 17, 1945
            </div>

            <h1 className="font-display text-5xl sm:text-7xl font-black uppercase tracking-tight text-white leading-none mb-4">
              USS LCS(L)(3)-102 <br />
              <span className="text-gold-400">"Yankee Dollar"</span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-200 font-light leading-relaxed max-w-2xl mb-8">
              Step aboard the <strong>last surviving World War II Landing Craft Support gunboat</strong> out of 130 built for the Pacific Theater. Armed with more firepower per ton than a battleship, she defended Okinawa against relentless kamikaze assaults and stands today at Mare Island as a living memorial.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap gap-4 mb-8">
              <Link
                href="/virtual-tour"
                className="px-6 py-3.5 rounded bg-gold-400 hover:bg-gold-500 text-navy-950 font-display text-lg font-bold uppercase tracking-wider shadow-lg hover:shadow-gold-400/30 transition transform hover:-translate-y-0.5 flex items-center gap-2"
              >
                <span>🌐</span> Launch Virtual Museum
              </Link>
              <a
                href="#donate"
                className="px-6 py-3.5 rounded bg-crimson-600 hover:bg-crimson-500 text-white font-display text-lg font-bold uppercase tracking-wider shadow-lg hover:shadow-crimson-600/30 transition transform hover:-translate-y-0.5 flex items-center gap-2"
              >
                <span>❤️</span> Donate to Preserve 102
              </a>
              <a
                href="#visit"
                className="px-6 py-3.5 rounded border border-white/20 hover:border-gold-400 bg-navy-900/60 hover:bg-navy-900 text-slate-200 hover:text-white font-display text-lg font-bold uppercase tracking-wider transition"
              >
                ⚓ Plan Mare Island Visit
              </a>
            </div>

            {/* Campaign Honors Ribbon Strip */}
            <div className="flex items-center gap-4 bg-navy-900/80 border border-white/10 p-3 rounded-lg backdrop-blur-md max-w-xl">
              <img
                src="/assets/images/lcs-ribbons.png"
                alt="WWII Campaign Ribbons"
                className="h-10 w-auto object-contain shrink-0"
              />
              <div className="text-xs text-slate-300">
                <strong className="block text-white font-mono uppercase tracking-wider text-[11px]">
                  Authentic WWII Campaign Honors
                </strong>
                Asiatic-Pacific (Okinawa Battle Star) • WWII Victory • Navy Occupation • Philippine Liberation
              </div>
            </div>
          </div>

          {/* Right Column: Live Virtual Museum Spotlight Card */}
          <div className="lg:col-span-5">
            <div className="bg-gradient-to-br from-navy-800/90 to-navy-950/95 border-2 border-cyan-400/30 rounded-xl p-6 shadow-2xl backdrop-blur-md relative overflow-hidden group hover:border-cyan-400/60 transition duration-300">
              <div className="flex items-center justify-between mb-3">
                <span className="inline-flex items-center gap-1.5 font-mono text-[11px] font-bold uppercase tracking-wider text-cyan-400 bg-cyan-400/10 px-2.5 py-0.5 rounded">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
                  Live Digital Twin • ThingLink 360°
                </span>
                <span className="font-mono text-xs text-gold-400 font-bold">HULL #102</span>
              </div>

              <div className="relative aspect-video rounded-lg overflow-hidden border border-white/10 mb-4 bg-black">
                <img
                  src="/assets/images/hero-ship-bow.jpg"
                  alt="USS LCS-102 Bow View"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
                <span className="absolute bottom-2 right-2 px-2 py-0.5 rounded text-[10px] font-mono bg-navy-950/90 text-gold-400 border border-gold-400/40">
                  11 STOPS • 62 COMPARTMENTS
                </span>
              </div>

              <h2 className="font-display text-2xl font-bold uppercase text-white mb-2">
                Step Aboard the 360° Virtual Museum
              </h2>
              <p className="text-sm text-slate-300 mb-5 leading-relaxed">
                Walk the steel decks, enter the conning tower, inspect the 3"/50 bow gun, and explore the engine room from anywhere in the world.
              </p>

              <div className="flex flex-col sm:flex-row gap-2.5">
                <Link
                  href="/virtual-tour"
                  className="flex-1 text-center py-2.5 px-4 rounded font-display uppercase tracking-wider text-sm font-bold bg-cyan-400 hover:bg-cyan-300 text-navy-950 transition"
                >
                  Explore Embedded 360° Tour →
                </Link>
                <a
                  href="https://www.thinglink.com/view/scene/2161138540841279141"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-3 rounded text-center border border-white/20 hover:border-gold-400 text-xs font-mono text-slate-200 hover:text-white transition"
                >
                  Fullscreen ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Quick-Info Strip */}
      <div className="relative z-10 bg-navy-900/90 border-t border-white/10 backdrop-blur-md py-4 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="flex items-center gap-3">
            <span className="text-2xl">📍</span>
            <div>
              <div className="text-[10px] font-mono uppercase text-slate-400">Berth Location</div>
              <div className="font-display text-base text-white font-bold uppercase">Mare Island Naval Base</div>
              <div className="text-xs text-slate-300">"A" St &amp; Nimitz Ave, Vallejo, CA</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-2xl">🕒</span>
            <div>
              <div className="text-[10px] font-mono uppercase text-slate-400">Visiting Hours</div>
              <div className="font-display text-base text-white font-bold uppercase">Tue, Thu &amp; Sat • 9:30–3:00</div>
              <div className="text-xs text-slate-300">Welcome Aboard • Docent Tours</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-2xl">🎟️</span>
            <div>
              <div className="text-[10px] font-mono uppercase text-slate-400">Admission</div>
              <div className="font-display text-base text-white font-bold uppercase">100% Free Admission</div>
              <div className="text-xs text-slate-300">Free parking • Donations welcomed</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-2xl">🌐</span>
            <div>
              <div className="text-[10px] font-mono uppercase text-slate-400">Online Experience</div>
              <div className="font-display text-base text-white font-bold uppercase">Dual 360° Tours</div>
              <Link href="/virtual-tour" className="text-xs text-cyan-400 hover:underline">
                Launch interactive digital twin →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

