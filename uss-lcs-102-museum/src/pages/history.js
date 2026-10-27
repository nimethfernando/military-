import Head from 'next/head';
import Link from 'next/link';
import shipData from '../data/ship-data.json';

export default function HistoryPage() {
  return (
    <>
      <Head>
        <title>History of the Mighty Midgets | USS LCS(L)(3)-102 Museum</title>
        <meta
          name="description"
          content="Official history of the WWII Landing Craft Support (Large) 'Mighty Midgets' and USS LCS-102 'Yankee Dollar'. Verbatim historical archives from the Landing Craft Support Museum."
        />
        <meta property="og:title" content="History of the Mighty Midgets | USS LCS(L)(3)-102 Museum" />
        <meta
          property="og:description"
          content="Explore the development, Tarawa genesis, rocket barrage tactics, and Pacific combat records of the 130 WWII LCS(L) gunboats."
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
            <span className="text-xs font-mono text-gold-400">History</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-gold-400 bg-gold-950/60 border border-gold-800/60 px-3 py-1 rounded-full">
                Landing Craft Support Museum Historical Archives
              </span>
              <h1 className="font-display text-3xl md:text-5xl font-black text-white uppercase tracking-wider mt-3">
                History of the "Mighty Midgets"
              </h1>
              <p className="text-slate-300 text-sm md:text-base mt-2 max-w-3xl leading-relaxed">
                The authentic historical account of the 130 Landing Craft Support (Large) gunboats built for close-fire support in the Pacific Theater, preserving the words and records of the veterans who served aboard.
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <Link
                href="/virtual-tour"
                className="px-4 py-2.5 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-bold uppercase tracking-wider transition shadow-lg flex items-center gap-2"
              >
                <span>🌐</span> Tour the Ship in 360°
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Historical Photography Trio (Featured on the original lcsmuseum.org History page) */}
      <section className="py-8 px-4 bg-navy-950 border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-mono uppercase tracking-widest text-slate-400">
              Archival Photography from Original Museum Records
            </span>
            <span className="text-xs font-mono text-gold-400">1944–1945 Pacific Actions</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Photo 1: LCS Launch */}
            <div className="group rounded-xl overflow-hidden border border-white/10 bg-navy-900 shadow-xl flex flex-col">
              <div className="relative aspect-[4/3] bg-black overflow-hidden">
                <img
                  src="/assets/images/drydock-insp03.jpg"
                  alt="Launching of USS LCS(L)(3) at Commercial Iron Works"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-transparent opacity-75" />
                <span className="absolute bottom-2 left-2 text-[10px] font-mono text-gold-400 bg-navy-950/90 px-2 py-0.5 rounded border border-white/10">
                  Portland, Oregon
                </span>
              </div>
              <div className="p-3.5 flex-1">
                <h4 className="font-display text-sm font-bold text-white mb-1">
                  Launching at Commercial Iron Works
                </h4>
                <p className="text-xs text-slate-400 leading-snug">
                  Commercial Iron Works in Portland produced 52 of the 130 LCS(L) gunboats, including USS LCS-102 on Feb 17, 1945.
                </p>
              </div>
            </div>

            {/* Photo 2: LCS 86 alongside USS William D. Porter */}
            <div className="group rounded-xl overflow-hidden border border-white/10 bg-navy-900 shadow-xl flex flex-col">
              <div className="relative aspect-[4/3] bg-black overflow-hidden">
                <img
                  src="/assets/images/lcs86-alongside-porter.jpg"
                  alt="LCS 86 alongside USS William D. Porter"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-transparent opacity-75" />
                <span className="absolute bottom-2 left-2 text-[10px] font-mono text-crimson-400 bg-navy-950/90 px-2 py-0.5 rounded border border-white/10">
                  Okinawa • 10 June 1945
                </span>
              </div>
              <div className="p-3.5 flex-1">
                <h4 className="font-display text-sm font-bold text-white mb-1">
                  LCS-86 Alongside USS William D. Porter (DD-579)
                </h4>
                <p className="text-xs text-slate-400 leading-snug">
                  Fighting fires and rescuing crewmen under continuous kamikaze attacks after the destroyer was struck on the radar picket line.
                </p>
              </div>
            </div>

            {/* Photo 3: LCS 86 standing off as Porter sinks */}
            <div className="group rounded-xl overflow-hidden border border-white/10 bg-navy-900 shadow-xl flex flex-col">
              <div className="relative aspect-[4/3] bg-black overflow-hidden">
                <img
                  src="/assets/images/lcs86-standing-off-porter.jpg"
                  alt="LCS 86 standing off as USS William D. Porter sinks"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-transparent opacity-75" />
                <span className="absolute bottom-2 left-2 text-[10px] font-mono text-gold-400 bg-navy-950/90 px-2 py-0.5 rounded border border-white/10">
                  Radar Picket Line
                </span>
              </div>
              <div className="p-3.5 flex-1">
                <h4 className="font-display text-sm font-bold text-white mb-1">
                  LCS-86 Standing Off as Destroyer Sinks
                </h4>
                <p className="text-xs text-slate-400 leading-snug">
                  Standing by to retrieve the last survivors before the stricken warship rolled over and went down. Every single crewman was saved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Verbatim Historical Content from lcsmuseum.org/History.html */}
      <section className="py-16 px-4 bg-navy-950 border-b border-white/10">
        <div className="max-w-4xl mx-auto space-y-10">
          {/* Header of the Verbatim Section */}
          <div className="border-b border-white/10 pb-6">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-gold-400">
              Archival Narrative • Landing Craft Support Museum
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-black text-white uppercase tracking-wider mt-2">
              The Genesis, Armament &amp; Battle Doctrine of the LCS(L)
            </h2>
            <p className="text-xs text-slate-400 font-mono mt-1">
              Verbatim historical text preserved from the official Landing Craft Support Museum records.
            </p>
          </div>

          {/* Verbatim Paragraph 1 */}
          <div className="prose prose-invert max-w-none text-slate-300 text-sm md:text-base leading-relaxed space-y-6">
            <p className="text-base md:text-lg text-slate-200 font-medium leading-relaxed bg-navy-900/60 p-5 rounded-xl border-l-4 border-gold-400">
              "Landing Craft Support (Large) ships were developed to support amphibious landings and to intercept inter-island barge traffic. Used solely in the Pacific Theater of operations, they were a further development of gunboats that had been converted from Landing Craft Infantry ships - LCIs."
            </p>

            {/* Verbatim Paragraph 2: Tarawa Genesis */}
            <div>
              <h3 className="font-display text-xl font-bold uppercase text-gold-400 mb-3 flex items-center gap-2">
                <span>⚓</span> The Lesson of Tarawa &amp; Need for Close-Fire Support
              </h3>
              <p>
                "The need for a close-fire support vessel was demonstrated during the assault on Tarawa on 20 November 1943. After the larger ships had shelled the beaches and landing zones to disrupt enemy defense efforts, the landing craft headed for shore to deliver the troops. During the time that the naval bombardment had stopped and the troops had landed, the enemy had time to regroup, and the effect on the Marines was deadly."
              </p>
              <p className="mt-4">
                "In order to deliver fire support to protect them, a new type of vessel was necessary. It needed the ability to get in close to shore and had to have sufficient armament to support the landings. Previous experiments had resulted in placing additional guns, rockets, and mortars on various LCI(L)s and turning them into gunboats. These LCI(G), LCI(R), and LCI(M) variations had proven their worth, but were still limited because of their original configuration. They were considered to be an interim solution to the problems encountered in the Pacific Theater."
              </p>
              <p className="mt-4">
                "Fortunately, a more advanced gunboat had been in the planning stages as early as 1942, and the first contracts for the new fire support vessel had been awarded in 1943. The first of these gunboats, the <strong>LCS(L) 1</strong>, was launched on 15 May 1944 at the George Lawley and Sons Shipyard in Neponset, Massachusetts."
              </p>
            </div>

            {/* Verbatim Paragraph 3: Firepower */}
            <div className="p-6 rounded-xl bg-navy-900 border border-white/10 my-6">
              <h3 className="font-display text-xl font-bold uppercase text-white mb-3 flex items-center gap-2">
                <span>💥</span> Battleship Firepower Packed on an Amphibious Hull
              </h3>
              <p>
                "Using the existing plans for the LCI hull, the Lawley yard had designed a new fire support ship, one that was not a modified troop carrier but a true fighting ship. The result was the <strong>Landing Craft Support (Large) or LCS(L)</strong>."
              </p>
              <p className="mt-4">
                "Packed with firepower, the LCS(L)s had <strong>two twin 40mm guns, four 20mm guns, and four .50 caliber machine guns</strong>. Mounted in the bow was one of three guns, either a single 3\"/50, a single 40mm, or a twin 40mm. Just aft of the bow gun were <strong>ten Mark 7 rocket launchers</strong>."
              </p>
              <div className="mt-4 p-4 rounded-lg bg-navy-950 border border-gold-400/40 text-gold-300 font-serif italic text-sm">
                "One writer described LCS(L)s as the most heavily armed of the World War II gunboats, and still another claimed that they looked like the Fourth of July fireworks when they were leading an assault."
              </div>
            </div>

            {/* Verbatim Paragraph 4 & Shipyard Production */}
            <div>
              <h3 className="font-display text-xl font-bold uppercase text-gold-400 mb-3 flex items-center gap-2">
                <span>🏗️</span> Production of 130 Hulls Across Three Shipyards
              </h3>
              <p>
                "One hundred thirty LCS(L)s were produced by three shipyards. In Neponset, Massachusetts, the <strong>Lawley shipyard produced 47</strong>. In Portland, Oregon, the <strong>Albina Engine and Machine Works produced 31</strong> and <strong>Commercial Iron Works produced 52</strong>."
              </p>

              {/* Shipyard Quick Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-4 not-prose font-mono text-xs">
                <div className="p-3 rounded-lg bg-navy-900 border border-white/10 text-center">
                  <span className="block font-display text-2xl font-black text-gold-400">52 Ships</span>
                  <span className="text-white font-bold block mt-1">Commercial Iron Works</span>
                  <span className="text-slate-400 text-[11px]">Portland, Oregon (Built 102)</span>
                </div>
                <div className="p-3 rounded-lg bg-navy-900 border border-white/10 text-center">
                  <span className="block font-display text-2xl font-black text-gold-400">47 Ships</span>
                  <span className="text-white font-bold block mt-1">George Lawley &amp; Sons</span>
                  <span className="text-slate-400 text-[11px]">Neponset, Massachusetts</span>
                </div>
                <div className="p-3 rounded-lg bg-navy-900 border border-white/10 text-center">
                  <span className="block font-display text-2xl font-black text-gold-400">31 Ships</span>
                  <span className="text-white font-bold block mt-1">Albina Engine &amp; Machine</span>
                  <span className="text-slate-400 text-[11px]">Portland, Oregon</span>
                </div>
              </div>
            </div>

            {/* Verbatim Paragraph 5: Combat Tactics & Rocket Barrages */}
            <div className="p-6 rounded-xl bg-navy-900 border border-white/10 my-6">
              <h3 className="font-display text-xl font-bold uppercase text-white mb-3 flex items-center gap-2">
                <span>🎯</span> The Beach Assault Doctrine &amp; 3-Run Rocket Run
              </h3>
              <p>
                "LCS(L)s were usually involved in the first assault on the beach. Attacking the beach in a line, they made two runs, firing rocket barrages at <strong>1,000, 800, and 500 yards</strong>. After the third rocket barrage, they turned broadside to the beach and fired on targets of opportunity before heading seaward for the next run."
              </p>
              <p className="mt-4">
                "On the third run, they were followed by the landing craft. As they approached the shore, they slowed to allow the troop-laden boats to pass by and deposit their men on the beaches. The LCS(L)s then continued to fire over the heads of the troops and remained inshore, firing on targets as they became available."
              </p>
              <p className="mt-4">
                "On some occasions, they took Marine or Army artillery spotters on board for assistance in locating enemy targets on shore. They were active in the campaigns for <strong>the Philippines, Iwo Jima, Okinawa, and Borneo</strong>."
              </p>
            </div>

            {/* Verbatim Paragraph 6: Post-War Legacy, Minesweeping & Allied Transfers */}
            <div>
              <h3 className="font-display text-xl font-bold uppercase text-gold-400 mb-3 flex items-center gap-2">
                <span>🌏</span> Post-War Service, LSSL Reclassification &amp; International Service
              </h3>
              <p>
                "After the war, the ships served in mine sweeping operations around the Japanese islands, Korea, Taiwan, and other locations in the Far East. By early 1946, most of the ships had returned to the states and been placed in reserve at Green Cove Springs, FL, or Astoria, WA."
              </p>
              <p className="mt-4">
                "In 1949, the LCS(L)s still on duty in the U.S. Navy were reclassified as <strong>LSSLs, or Landing Ship Support Large</strong>. In the early 1950s, a number of LCS(L)s were lent to our allies, with <strong>fifty-three of them going to Japan to serve in the Japanese Maritime Self Defense Forces (JMSDF)</strong>. Still others were lent to the French and eventually the Vietnamese for use in Indochina. Other countries that received LCS(L)s were Italy, Greece, Korea, Thailand, Taiwan, and the Philippines."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Medal of Honor: LT Richard M. McCool Jr. on sister gunboat LCS-122 */}
      <section className="py-14 px-4 bg-navy-900 border-b border-white/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5">
            <div className="rounded-xl overflow-hidden border border-white/15 shadow-2xl relative aspect-[4/3] bg-black">
              <img
                src="/assets/images/hd-truman-mccool.jpg"
                alt="President Truman awarding Medal of Honor to LT McCool"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-transparent opacity-85" />
              <div className="absolute bottom-3 left-3 right-3 text-xs text-slate-200">
                <strong className="text-gold-400 block font-display uppercase tracking-wide">
                  President Truman &amp; LT Richard M. McCool
                </strong>
                President Harry S. Truman placing the Congressional Medal of Honor on LT Richard M. McCool, Commanding Officer of USS LCS(L)(3)-122.
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-4">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-gold-400 bg-gold-950/60 border border-gold-800/60 px-3 py-1 rounded-full">
              Highest Military Valor
            </span>
            <h3 className="font-display text-2xl md:text-3xl font-black text-white uppercase tracking-wider">
              Congressional Medal of Honor: LT Richard M. McCool Jr.
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              On June 10–11, 1945, off Okinawa, sister gunboat <strong>USS LCS(L)(3)-122</strong> rushed alongside the stricken destroyer <em>USS William D. Porter</em> (DD-571) to rescue survivors and battle blazing fuel fires.
            </p>
            <p className="text-slate-300 text-sm leading-relaxed">
              During the rescue, Japanese kamikaze planes dived on LCS-122, penetrating the pilot house and detonating in the radio room. Although suffering severe shrapnel wounds and painful burns, Lieutenant McCool rallied his crew, contained raging fires, and directed medical triage until every wounded sailor was saved.
            </p>
            <p className="text-xs font-mono text-slate-400 pt-1">
              LT McCool's heroic citation is enshrined aboard USS LCS-102 at Mare Island as a living testament to the courage of all 10,000 sailors who served aboard the "Mighty Midgets".
            </p>
          </div>
        </div>
      </section>

      {/* Six Chronological Eras Timeline */}
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
            {shipData.timeline.map((era) => (
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
