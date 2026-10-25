import shipData from '@/data/ship-data.json';

export default function HistoryGrid() {
  const { specifications, restoredCompartments, objectives, timeline } = shipData;

  return (
    <section id="history" className="py-20 px-4 bg-navy-900 border-b border-white/10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-gold-400 bg-gold-400/10 px-3 py-1 rounded mb-3">
            <span>⚓</span> From the Beaches of Okinawa to Mare Island
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-black uppercase tracking-tight text-white mb-4">
            History of the "Mighty Midgets" &amp; USS LCS-102
          </h2>
          <p className="text-slate-300 text-lg leading-relaxed">
            Developed after the bloody assault on Tarawa demonstrated the fatal gap between heavy naval gunfire and troop landings, the <strong>Landing Craft Support (Large)</strong> packed battleship-grade firepower onto a 158-foot shallow-draft hull.
          </p>
        </div>

        {/* 6 Historical Eras Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {timeline.map((era) => (
            <article
              key={era.era}
              className="bg-navy-950/80 border border-white/10 hover:border-gold-400 rounded-xl overflow-hidden shadow-xl transition duration-300 group hover:-translate-y-1 flex flex-col"
            >
              <div className="relative aspect-video overflow-hidden bg-black">
                <img
                  src={era.image}
                  alt={era.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded text-xs font-mono font-bold bg-navy-950/90 text-gold-400 border border-gold-400/30">
                  {era.era}
                </span>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-2xl font-bold uppercase text-white mb-3 group-hover:text-gold-400 transition">
                    {era.title}
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed mb-4">{era.desc}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Living History Experience Military Callout (Authentic Compartments) */}
        <div className="bg-gradient-to-r from-navy-800 via-navy-850 to-navy-950 border-2 border-crimson-600/40 border-l-8 border-l-crimson-600 rounded-2xl p-6 sm:p-10 mb-20 shadow-2xl">
          <div className="max-w-4xl">
            <span className="inline-block font-mono text-xs font-bold uppercase tracking-widest text-crimson-400 bg-crimson-600/10 px-3 py-1 rounded mb-3">
              LIVING HISTORY EXPERIENCE • 1945 CONFIGURATION
            </span>
            <h3 className="font-display text-3xl sm:text-4xl font-black uppercase text-white mb-4">
              You Don't Just Tour the Ship — You Step Into the Boots of Her 1945 Crew
            </h3>
            <p className="text-slate-200 text-base leading-relaxed mb-6">
              Through the sights and sounds of original steel decks, canvas-laced pipe berths, and ammunition handling rooms, visitors experience daily life aboard a 158-foot amphibious warship where <strong>6 officers and 65 enlisted men</strong> lived, cooked, and fought. Of 130 LCS(L) gunboats built and roughly 10,000 sailors who served, the <em>Yankee Dollar</em> is the only intact survivor on earth.
            </p>

            {/* Compartment Chips */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {restoredCompartments.map((comp) => (
                <div key={comp.code} className="bg-navy-950/80 border border-white/10 p-3 rounded-lg">
                  <div className="font-mono text-xs text-gold-400 font-bold">{comp.code}</div>
                  <div className="font-display text-base font-bold text-white uppercase">{comp.name}</div>
                  <div className="text-xs text-slate-400 mt-0.5">{comp.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Technical Specifications Blueprint Table */}
        <div className="bg-navy-950 border border-white/10 rounded-2xl overflow-hidden shadow-2xl mb-20">
          <div className="bg-navy-800/80 px-6 py-4 border-b border-white/10 flex items-center justify-between">
            <h3 className="font-display text-2xl font-bold uppercase text-white">
              USS LCS(L)(3)-102 Technical Specifications
            </h3>
            <span className="text-xs font-mono text-gold-400 uppercase tracking-widest">Mark 3 Gunboat</span>
          </div>
          <div className="divide-y divide-white/5">
            {specifications.map((spec, i) => (
              <div key={spec.label} className={`grid grid-cols-1 md:grid-cols-3 p-4 text-sm ${i % 2 === 0 ? 'bg-navy-950' : 'bg-navy-900/40'}`}>
                <div className="font-mono font-bold text-slate-400 uppercase tracking-wider text-xs md:col-span-1">
                  {spec.label}
                </div>
                <div className="text-slate-100 font-medium md:col-span-2 mt-1 md:mt-0">
                  {spec.value}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Six Primary Objectives (from lcsmuseum.org) */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="font-mono text-xs uppercase tracking-widest text-gold-400">Chartered Non-Profit Mission</span>
            <h3 className="font-display text-3xl font-bold uppercase text-white mt-1">
              Six Primary Objectives of the Museum Corporation
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {objectives.map((obj) => (
              <div
                key={obj.id}
                className="bg-navy-950 border border-white/10 hover:border-white/30 p-5 rounded-xl transition duration-200"
              >
                <div className="w-8 h-8 rounded bg-gold-400/10 border border-gold-400/30 text-gold-400 font-mono font-bold flex items-center justify-center text-sm mb-3">
                  0{obj.id}
                </div>
                <h4 className="font-display text-xl font-bold uppercase text-white mb-2">{obj.title}</h4>
                <p className="text-sm text-slate-300 leading-relaxed">{obj.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

