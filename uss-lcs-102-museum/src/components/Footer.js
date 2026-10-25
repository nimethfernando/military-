import Link from 'next/link';
import shipData from '../data/ship-data.json';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 text-slate-300 border-t border-white/10 relative z-20">
      {/* 501(c)(3) Banner & Support Strip */}
      <div className="bg-navy-900/80 border-b border-white/10 py-6 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div className="flex items-center gap-3">
            <span className="text-2xl">🇺🇸</span>
            <div>
              <p className="font-display text-base font-bold text-white uppercase tracking-wider">
                Landing Craft Support Museum Corporation
              </p>
              <p className="text-xs text-slate-400 font-mono">
                IRS 501(c)(3) Nonprofit Organization • National Register of Historic Places #15000716
              </p>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/virtual-tour"
              className="px-4 py-2 rounded bg-cyan-900/40 border border-cyan-500/40 hover:bg-cyan-500 hover:text-navy-950 text-cyan-300 text-xs font-mono font-bold uppercase tracking-wider transition"
            >
              Explore 360° Museum
            </Link>
            <a
              href="#donate"
              className="px-4 py-2 rounded bg-crimson-600 hover:bg-crimson-500 text-white text-xs font-bold uppercase tracking-wider transition shadow-lg shadow-crimson-600/30"
            >
              Donate to Preserve (501c3)
            </a>
          </div>
        </div>
      </div>

      {/* Main Multi-Column Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Col 1: About the Ship & Historic Register */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 rounded-lg overflow-hidden border border-gold-400/80 bg-navy-950 flex items-center justify-center p-0.5 shadow">
              <img src="/favicon.svg" alt="USS LCS-102" className="w-full h-full object-contain" />
            </div>
            <span className="font-display font-bold text-lg text-white tracking-wider">
              USS LCS(L)(3)-102
            </span>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed mb-4">
            The sole remaining operational Landing Craft Support gunboat from World War II. Built in Portland, OR (1945), veteran of the Battle of Okinawa, and now preserved as a floating living museum at Mare Island.
          </p>
          <div className="space-y-1 text-xs font-mono text-slate-400">
            <p><strong className="text-slate-300">Length:</strong> 158 ft • <strong className="text-slate-300">Beam:</strong> 23 ft 6 in</p>
            <p><strong className="text-slate-300">Power:</strong> Twin GM 16-278A Diesels (1,800 BHP)</p>
            <p><strong className="text-slate-300">Armament:</strong> 3"/50 Bow Gun, 40mm Bofors, 20mm Oerlikon</p>
          </div>
        </div>

        {/* Col 2: Visiting Hours & Berth Location */}
        <div>
          <h4 className="font-display text-sm font-bold uppercase tracking-wider text-gold-400 mb-3 flex items-center gap-1.5">
            <span>📍</span> Mare Island Berth &amp; Hours
          </h4>
          <div className="space-y-2 text-xs text-slate-300 leading-relaxed">
            <p className="font-medium text-white">
              Mare Island Naval Shipyard Berth
            </p>
            <p className="text-slate-400">
              Intersection of "A" St &amp; Nimitz Ave (289 Waterfront Ave)<br />
              Vallejo, CA 94592 (GPS: 38°05'56"N 122°16'05"W)
            </p>
            <div className="mt-3 p-2.5 rounded bg-navy-900 border border-white/10 font-mono text-xs">
              <span className="text-gold-400 font-bold block">Visiting Hours:</span>
              <span>Tuesdays, Thursdays &amp; Saturdays</span><br />
              <span className="text-slate-200">9:30 AM – 3:00 PM</span><br />
              <span className="text-emerald-400 font-bold mt-1 inline-block">Free Admission &amp; Parking</span>
            </div>
            <p className="text-[11px] text-slate-400 pt-1">
              For weekend group overnight stays and scout encampments, contact Skipper Bill Mason.
            </p>
          </div>
        </div>

        {/* Col 3: Direct Navigation & Museum Pages */}
        <div>
          <h4 className="font-display text-sm font-bold uppercase tracking-wider text-gold-400 mb-3 flex items-center gap-1.5">
            <span>⚓</span> Museum Quick Links
          </h4>
          <ul className="space-y-2 text-xs">
            <li>
              <Link href="/" className="hover:text-gold-400 transition flex items-center gap-1.5">
                <span>›</span> Home Overview &amp; Live Video
              </Link>
            </li>
            <li>
              <Link href="/virtual-tour" className="hover:text-gold-400 transition flex items-center gap-1.5 text-cyan-400 font-semibold">
                <span>›</span> 360° Virtual Museum (11-Stop &amp; Free-Roam)
              </Link>
            </li>
            <li>
              <Link href="/history" className="hover:text-gold-400 transition flex items-center gap-1.5">
                <span>›</span> WWII Combat History &amp; Battle Star
              </Link>
            </li>
            <li>
              <Link href="/gallery" className="hover:text-gold-400 transition flex items-center gap-1.5">
                <span>›</span> Archival Photo Archive (70+ Photos)
              </Link>
            </li>
            <li>
              <Link href="/#objectives" className="hover:text-gold-400 transition flex items-center gap-1.5">
                <span>›</span> 6 Corporate Objectives &amp; Mission
              </Link>
            </li>
            <li>
              <Link href="/#membership" className="hover:text-gold-400 transition flex items-center gap-1.5">
                <span>›</span> Association Membership Application
              </Link>
            </li>
            <li>
              <a
                href="https://www.facebook.com/theyankeedollar"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold-400 transition flex items-center gap-1.5 text-slate-400"
              >
                <span>›</span> Official Facebook Page ↗
              </a>
            </li>
          </ul>
        </div>

        {/* Col 4: Corporate Officers & Donations */}
        <div>
          <h4 className="font-display text-sm font-bold uppercase tracking-wider text-gold-400 mb-3 flex items-center gap-1.5">
            <span>✉️</span> Officers &amp; Check Donations
          </h4>
          <div className="space-y-2 text-xs text-slate-400 leading-relaxed">
            <p>
              <strong className="text-white">Secretary:</strong> Dennis Steenbergen<br />
              <a href="mailto:dsteenbergen1165@gmail.com" className="text-gold-400 hover:underline">
                dsteenbergen1165@gmail.com
              </a>
            </p>
            <p>
              <strong className="text-white">Skipper / Overnights:</strong> Bill Mason<br />
              <a href="mailto:bmason6056@aol.com" className="text-gold-400 hover:underline">
                bmason6056@aol.com
              </a>
            </p>
            <p>
              <strong className="text-white">Executive Officer:</strong> Gordon Stutrud<br />
              <a href="tel:7073732159" className="text-slate-300 hover:underline">
                (707) 373-2159
              </a>
            </p>
            <div className="pt-2 border-t border-white/10">
              <p className="text-[11px] text-slate-400">
                <strong className="text-slate-300">Check Donations Payable To:</strong><br />
                Landing Craft Support Museum<br />
                c/o Dennis A. Steenbergen, Secretary<br />
                7345 W. Lakeside Drive, Littleton, CO 80125
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Legal Copyright */}
      <div className="border-t border-white/10 bg-navy-950 py-4 px-4 text-xs text-slate-500 font-mono">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2 text-center md:text-left">
          <p>
            © {currentYear} Landing Craft Support Museum Corporation. All Rights Reserved. 501(c)(3) tax-exempt organization.
          </p>
          <p className="flex items-center gap-4">
            <span>U.S. Navy Veteran Preservation</span>
            <span>•</span>
            <span>Mare Island, California</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

