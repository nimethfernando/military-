import { useState } from 'react';
import shipData from '@/data/ship-data.json';

export default function VirtualMuseumEmbed() {
  const { virtualTours } = shipData;
  const [activeSceneId, setActiveSceneId] = useState(virtualTours.plannedTour.id);
  const [activeTitle, setActiveTitle] = useState(virtualTours.plannedTour.title);
  const [activeDesc, setActiveDesc] = useState(virtualTours.plannedTour.subtitle);

  const selectTourMode = (sceneId, title, desc) => {
    setActiveSceneId(sceneId);
    setActiveTitle(title);
    setActiveDesc(desc);
  };

  return (
    <section id="virtual-museum" className="py-20 px-4 bg-navy-950 border-b border-white/10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-cyan-400 bg-cyan-400/10 px-3 py-1 rounded mb-3">
            <span>🌐</span> Interactive Digital Twin &amp; 360° Online Exhibit
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-black uppercase tracking-tight text-white mb-4">
            Step Aboard Online: The USS LCS-102 Virtual Museum
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Experience the last surviving WWII "Mighty Midget" in high-definition 360°. Choose between our <strong>11-stop historical narrative tour</strong>, the <strong>62-compartment free-roam explorer</strong>, or inspect the <strong>4K architectural deck plan</strong>.
          </p>
        </div>

        {/* 360° Theater Card Container */}
        <div className="bg-gradient-to-b from-navy-900 to-navy-950 border-2 border-cyan-400/40 rounded-2xl p-4 sm:p-6 shadow-2xl">
          {/* Tour Mode Navigation Tabs */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6">
            <button
              type="button"
              onClick={() =>
                selectTourMode(
                  virtualTours.plannedTour.id,
                  virtualTours.plannedTour.title,
                  virtualTours.plannedTour.subtitle
                )
              }
              className={`text-left p-4 rounded-xl border transition duration-200 ${
                activeSceneId === virtualTours.plannedTour.id
                  ? 'bg-navy-800 border-gold-400 shadow-lg shadow-gold-400/10'
                  : 'bg-navy-950/60 border-white/10 hover:border-white/30 text-slate-300'
              }`}
            >
              <span className="block font-mono text-[10px] uppercase font-bold tracking-wider text-gold-400 mb-1">
                TOUR 01 • GUIDED STORY TOUR
              </span>
              <strong className="block font-display text-lg uppercase text-white font-bold">
                🎬 "The Ships That Cleared the Way"
              </strong>
              <span className="block text-xs text-slate-400 mt-1">11 guided combat &amp; shipboard milestones</span>
            </button>

            <button
              type="button"
              onClick={() =>
                selectTourMode(
                  virtualTours.freeRoamTour.id,
                  virtualTours.freeRoamTour.title,
                  virtualTours.freeRoamTour.subtitle
                )
              }
              className={`text-left p-4 rounded-xl border transition duration-200 ${
                activeSceneId === virtualTours.freeRoamTour.id
                  ? 'bg-navy-800 border-cyan-400 shadow-lg shadow-cyan-400/10'
                  : 'bg-navy-950/60 border-white/10 hover:border-white/30 text-slate-300'
              }`}
            >
              <span className="block font-mono text-[10px] uppercase font-bold tracking-wider text-cyan-400 mb-1">
                TOUR 02 • FULL DIGITAL TWIN
              </span>
              <strong className="block font-display text-lg uppercase text-white font-bold">
                🧭 62-Compartment Free-Roam 360°
              </strong>
              <span className="block text-xs text-slate-400 mt-1">Self-guided access to every compartment</span>
            </button>

            <button
              type="button"
              onClick={() =>
                selectTourMode(
                  virtualTours.deckPlan.id,
                  virtualTours.deckPlan.title,
                  virtualTours.deckPlan.subtitle
                )
              }
              className={`text-left p-4 rounded-xl border transition duration-200 ${
                activeSceneId === virtualTours.deckPlan.id
                  ? 'bg-navy-800 border-emerald-400 shadow-lg shadow-emerald-400/10'
                  : 'bg-navy-950/60 border-white/10 hover:border-white/30 text-slate-300'
              }`}
            >
              <span className="block font-mono text-[10px] uppercase font-bold tracking-wider text-emerald-400 mb-1">
                ARCHITECTURAL BLUEPRINT
              </span>
              <strong className="block font-display text-lg uppercase text-white font-bold">
                📐 Interactive 4K Ship Deck Plan
              </strong>
              <span className="block text-xs text-slate-400 mt-1">Hotspot navigation across ship levels</span>
            </button>
          </div>

          {/* Active View Title & External Controls */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-4 px-2">
            <div>
              <h3 className="font-display text-2xl font-bold uppercase text-white">{activeTitle}</h3>
              <p className="text-xs text-slate-400 font-mono">{activeDesc}</p>
            </div>
            <div className="flex items-center gap-2">
              <a
                href={`https://www.thinglink.com/view/scene/${activeSceneId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 rounded text-xs font-mono font-bold bg-gold-400 hover:bg-gold-500 text-navy-950 uppercase tracking-wider transition"
              >
                ⛶ Fullscreen ↗
              </a>
              <a
                href={virtualTours.plannedTour.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 rounded text-xs font-mono font-bold border border-white/20 hover:border-white text-slate-300 hover:text-white uppercase tracking-wider transition"
              >
                ▶ Documentary Video ↗
              </a>
            </div>
          </div>

          {/* Responsive 360° ThingLink Iframe Player */}
          <div className="relative w-full aspect-video min-h-[420px] sm:min-h-[580px] rounded-xl overflow-hidden bg-black border border-white/15 shadow-inner">
            <iframe
              title="USS LCS-102 ThingLink 360 Player"
              src={`https://www.thinglink.com/card/${activeSceneId}`}
              allow="fullscreen; vr; xr-spatial-tracking; gyroscope; accelerometer"
              allowFullScreen
              className="w-full h-full border-0 absolute inset-0"
              loading="lazy"
            />
          </div>

          {/* 11-Stop Milestone Quick-Jump Bar */}
          <div className="mt-5 p-4 rounded-xl bg-navy-950/80 border border-white/10">
            <div className="flex items-center justify-between mb-3">
              <span className="font-mono text-xs uppercase font-bold tracking-wider text-slate-300">
                ⚡ QUICK-JUMP TO ANY 360° MILESTONE OR COMPARTMENT:
              </span>
              <span className="text-xs font-mono text-cyan-400 hidden sm:inline">Click pill to load station</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {virtualTours.milestones.map((m) => (
                <button
                  key={m.id}
                  type="button"
                  onClick={() => selectTourMode(m.id, `${m.num} • ${m.name}`, m.desc)}
                  className={`text-xs px-3 py-1.5 rounded-full font-medium transition duration-150 ${
                    activeSceneId === m.id
                      ? 'bg-gold-400 text-navy-950 font-bold shadow-md shadow-gold-400/20'
                      : 'bg-navy-800/80 text-slate-300 hover:text-white hover:bg-navy-700 border border-white/10'
                  }`}
                >
                  <span className="font-mono font-bold mr-1">{m.num}.</span>
                  {m.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

