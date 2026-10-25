import Head from 'next/head';
import Link from 'next/link';
import shipData from '../data/ship-data.json';

export default function HistoryPage() {
  return (
    <>
      <Head>
        <title>WWII Combat History &amp; Specifications | USS LCS(L)(3)-102</title>
        <meta
          name="description"
          content="The complete combat history of the USS LCS(L)(3)-102 'Yankee Dollar'. Okinawa Radar Picket #18, kamikaze defense, Medal of Honor sister ship, and 62-year Pacific service."
        />
        <meta property="og:title" content="WWII Combat History &amp; Specifications | USS LCS(L)(3)-102" />
        <meta
          property="og:description"
          content="Explore the battle honors, blueprints, and operational history of America's last surviving WWII Landing Craft Support gunboat."
        />
      </Head>

      {/* Header Banner */}
      <section className="bg-navy-900 border-b border-white/10 py-12 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:16px_16px]" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <Link href="/" className="text-xs font-mono text-slate-400 hover:text-gold-400 transition">
              Home
            </Link>
            <span className="text-slate-600 text-xs">/</span>
            <span className="text-xs font-mono text-gold-400">WWII History</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-gold-400 bg-gold-950/60 border border-gold-800/60 px-3 py-1 rounded-full">
                U.S. Navy Pacific Theater Combat Record
              </span>
              <h1 className="font-display text-3xl md:text-5xl font-black text-white uppercase tracking-wider mt-3">
                History of the "Mighty Midgets"
              </h1>
              <p className="text-slate-300 text-sm md:text-base mt-2 max-w-3xl leading-relaxed">
                Built to deliver beachhead rocket barrages and shield fleet destroyers from kamikaze suicide planes, the 130 Landing Craft Support gunboats carried the heaviest firepower pound-for-pound of any warship in WWII.
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <Link
                href="/virtual-tour"
                className="px-4 py-2.5 rounded bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-bold uppercase tracking-wider transition shadow-lg flex items-center gap-2"
              >
                <span>🌐</span> Walk 1945 Decks in 360°
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Narrative Section 1: The Bloody Beachhead Need */}
      <section className="py-16 px-4 bg-navy-950 border-b border-white/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-5">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-crimson-400">
              Genesis: Lessons of Tarawa &amp; Kwajalein
            </span>
            <h2 className="font-display text-2xl md:text-4xl font-black text-white uppercase tracking-wider">
              Born from the Bloody Need for Close Fire Support
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              During early amphibious landings in 1943, major warships like battleships and cruisers had to cease heavy naval bombardment when landing craft approached within 1,000 yards of the beach to avoid friendly fire. This created a deadly gap: enemy pillboxes and machine-gun bunkers emerged from underground caves and pulverized the vulnerable troop landing craft.
            </p>
            <p className="text-slate-300 text-sm leading-relaxed">
              The Navy responded by commissioning George Lawley &amp; Sons to design the <strong>LCS(L)(3) (Landing Craft Support Large, Mark 3)</strong>. Utilizing the proven Landing Craft Infantry (LCI) hull, engineers stripped troop spaces to install a formidable rapid-fire arsenal: a forward 3-inch/50 caliber dual-purpose gun, twin 40mm Bofors anti-aircraft mounts, four 20mm Oerlikon cannons, four .50 caliber machine guns, and ten Mark 7 rocket barrage launchers firing 120 spin-stabilized rockets in continuous salvos.
            </p>
            <div className="p-4 rounded-lg bg-navy-900 border border-gold-500/30 text-xs text-slate-300">
              <strong className="text-gold-400 block font-display uppercase tracking-wide mb-1">
                The "Yankee Dollar" Commissioning
              </strong>
              USS LCS(L)(3)-102 was laid down on January 13, 1945 at Commercial Iron Works in Portland, Oregon and commissioned on February 17, 1945 under the command of Lieutenant Richard Jones, USNR. Her crew nicknamed her the "Yankee Dollar" after her hull number 102 ($1.02).
            </div>
          </div>

          <div className="lg:col-span-5 space-y-4">
            <div className="rounded-xl overflow-hidden border border-white/15 shadow-2xl relative aspect-[4/3] bg-navy-900">
              <img
                src="/assets/images/hd-truman-mccool.jpg"
                alt="President Truman awarding Medal of Honor to LT McCool"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-transparent opacity-90" />
              <div className="absolute bottom-3 left-3 right-3 text-xs text-slate-200">
                <strong className="text-gold-400 block font-display uppercase tracking-wide">
                  Medal of Honor: LT Richard M. McCool
                </strong>
                President Harry S. Truman presenting the Congressional Medal of Honor to LT Richard M. McCool, Captain of sister gunboat USS LCS(L)(3)-122, for heroic actions off Okinawa.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Narrative Section 2: Radar Picket Station #18 & Okinawa */}
      <section className="py-16 px-4 bg-navy-900 border-b border-white/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="rounded-xl overflow-hidden border border-white/15 shadow-2xl relative aspect-[4/3] bg-navy-950">
              <img
                src="/assets/images/rd-finalcheck.jpg"
                alt="USS LCS-102 Bridge and Conning Tower"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-3 left-3 right-3 text-xs text-slate-200">
                <strong className="text-gold-400 block font-display uppercase tracking-wide">
                  Battle Station Bridge &amp; Conning Tower
                </strong>
                The armored pilot station and 20mm gun rings where sailors kept continuous 24-hour lookout against diving kamikaze aircraft.
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-5 order-1 lg:order-2">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-gold-400">
              Combat Service: June 18 – 30, 1945
            </span>
            <h2 className="font-display text-2xl md:text-4xl font-black text-white uppercase tracking-wider">
              Holding Radar Picket Station #18 at Okinawa
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              Arriving in the combat zone in June 1945, USS LCS-102 was assigned to the most hazardous duty of the naval war: the Radar Picket line. Picket stations were remote points 50 to 90 miles offshore where radar-equipped destroyers and LCS gunboats operated isolated from the main fleet to provide early warning of mass Japanese air raids.
            </p>
            <p className="text-slate-300 text-sm leading-relaxed">
              These picket ships bore the brunt of relentless Japanese <em>Kikusui</em> (Floating Chrysanthemum) kamikaze attacks. Armed with rapid-fire 40mm and 20mm flak cannons, LCS gunboats formed protective anti-aircraft rings around damaged destroyers, laying smoke screens, splashing diving planes, and rescuing hundreds of burned and wounded sailors from sinking vessels.
            </p>
            <p className="text-slate-300 text-sm leading-relaxed">
              For her courageous combat service at Radar Picket Station #18, USS LCS-102 was awarded the <strong>World War II Asiatic-Pacific Campaign Battle Star</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Six Chronological Eras */}
      <section className="py-16 px-4 bg-navy-950 border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-gold-400">
              From 1945 Portland Shipyard to 2026 National Landmark
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-black text-white uppercase tracking-wider mt-2">
              The Six Eras of the LCS-102
            </h2>
            <p className="text-slate-400 text-sm mt-2">
              Follow the 80-year timeline of America's last operational amphibious gunboat.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {shipData.timeline.map((era, idx) => (
              <div
                key={era.title}
                className="bg-navy-900 border border-white/10 rounded-xl overflow-hidden hover:border-gold-400/50 transition group flex flex-col justify-between"
              >
                <div className="relative aspect-video bg-navy-950 overflow-hidden">
                  <img
                    src={era.image}
                    alt={era.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-transparent opacity-80" />
                  <span className="absolute top-2 left-2 bg-navy-950/90 border border-gold-400/60 text-gold-400 font-mono text-[11px] font-bold px-2 py-0.5 rounded">
                    {era.era}
                  </span>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-display text-lg font-bold text-white group-hover:text-gold-400 transition mb-2">
                      {era.title}
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {era.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Complete Blueprint Specifications Table */}
      <section className="py-16 px-4 bg-navy-900">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-cyan-400">
              Technical Naval Architecture
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-black text-white uppercase tracking-wider mt-2">
              USS LCS(L)(3)-102 Blueprint &amp; Specs
            </h2>
            <p className="text-slate-400 text-xs md:text-sm mt-1">
              Official Navy Yard technical data certified for the Landing Craft Support (Large) (Mark 3) class.
            </p>
          </div>

          <div className="border border-white/15 rounded-xl bg-navy-950 overflow-hidden shadow-2xl">
            <div className="divide-y divide-white/10 font-mono text-xs md:text-sm">
              {shipData.specifications.map((spec, idx) => (
                <div
                  key={spec.label}
                  className={`grid grid-cols-1 sm:grid-cols-12 p-3.5 items-center gap-2 ${
                    idx % 2 === 0 ? 'bg-navy-950' : 'bg-navy-900/60'
                  }`}
                >
                  <div className="sm:col-span-5 text-gold-400 font-bold uppercase">
                    {spec.label}
                  </div>
                  <div className="sm:col-span-7 text-slate-200">
                    {spec.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

