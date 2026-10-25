import { useState, useEffect } from 'react';
import shipData from '../data/ship-data.json';

const ALL_ARCHIVE_PHOTOS = [
  ...shipData.galleryItems,
  {
    id: "hd-bill",
    title: "Skipper Bill Mason at the Gangway",
    category: "community",
    image: "/assets/images/hd-bill.jpg",
    desc: "Longtime Museum Director Bill Mason standing at the Mare Island boarding ladder."
  },
  {
    id: "drydock-docking",
    title: "Entering Drydock at Mare Island",
    category: "restoration",
    image: "/assets/images/drydock-docking.jpg",
    desc: "Tugboats carefully nudging LCS-102 through the Mare Island caisson gate."
  },
  {
    id: "hd-bow-aerial",
    title: "Aerial Bow Perspective & 3-Inch Gun Tub",
    category: "ship",
    image: "/assets/images/hd-bow-aerial.jpg",
    desc: "High angle showing the massive forward gun tub and anchor windlass on the focsle."
  },
  {
    id: "drydock-crew",
    title: "Volunteer Restoration Work Party",
    category: "restoration",
    image: "/assets/images/drydock-crew.jpg",
    desc: "Volunteers gathering during weekend work session to wire-wheel and paint the superstructure."
  },
  {
    id: "hd-crew-deck",
    title: "Crew on Main Deck Under 40mm Mount",
    category: "community",
    image: "/assets/images/hd-crew-deck.jpg",
    desc: "Restoration crew members inspecting the twin 40mm Bofors elevation gearing."
  },
  {
    id: "drydock-tugboat",
    title: "Harbor Tug Assisting Maneuvers",
    category: "restoration",
    image: "/assets/images/drydock-tugboat.jpg",
    desc: "Tugboat towing LCS-102 during transfer along the Napa River Mare Island channel."
  },
  {
    id: "hd-stern-aerial",
    title: "Stern Deck & Depth Charge Racks",
    category: "ship",
    image: "/assets/images/hd-stern-aerial.jpg",
    desc: "Aerial view of the stern showing the flagstaff, smoke generators, and depth charge stowage."
  },
  {
    id: "crew01",
    title: "WWII Veterans Reunion Aboard",
    category: "wwii",
    image: "/assets/images/crew01.jpg",
    desc: "Veterans who served on LCS gunboats gathering on deck to share oral histories."
  },
  {
    id: "drydock-insp02",
    title: "Ultrasonic Hull Gauging Inspection",
    category: "restoration",
    image: "/assets/images/drydock-insp02.jpg",
    desc: "Naval architects and marine inspectors testing steel plate thickness on the lower hull."
  },
  {
    id: "hd-caisson",
    title: "Mare Island Historic Caisson Gate",
    category: "restoration",
    image: "/assets/images/hd-caisson.jpg",
    desc: "Historic drydock caisson gate sealing off the dock basin during hull preservation."
  },
  {
    id: "hd-submarines-2019-2",
    title: "Mare Island Strait Waterline Panorama",
    category: "ship",
    image: "/assets/images/hd-submarines-2019-2.jpg",
    desc: "Scenic panorama of USS LCS-102 moored at Berth 11 under sunny California skies."
  },
  {
    id: "crew04",
    title: "Engine Room Preservation Team",
    category: "restoration",
    image: "/assets/images/crew04.jpg",
    desc: "Volunteer mechanics inspecting the auxiliary generator and General Motors diesels."
  }
];

const CATEGORIES = [
  { id: 'all', label: 'All Photos' },
  { id: 'ship', label: 'The Ship (LCS-102)' },
  { id: 'wwii', label: 'WWII & Pacific Combat' },
  { id: 'restoration', label: 'Drydock & Restoration' },
  { id: 'community', label: 'Boy Scouts & Crew' },
];

export default function PhotoGallery({ initialCategory = 'all', limit = null }) {
  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const filteredPhotos = ALL_ARCHIVE_PHOTOS.filter(
    (photo) => activeCategory === 'all' || photo.category === activeCategory
  );

  const displayPhotos = limit ? filteredPhotos.slice(0, limit) : filteredPhotos;

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedPhoto) return;
      if (e.key === 'Escape') setSelectedPhoto(null);
      if (e.key === 'ArrowRight') {
        const idx = filteredPhotos.findIndex((p) => p.id === selectedPhoto.id);
        if (idx < filteredPhotos.length - 1) setSelectedPhoto(filteredPhotos[idx + 1]);
      }
      if (e.key === 'ArrowLeft') {
        const idx = filteredPhotos.findIndex((p) => p.id === selectedPhoto.id);
        if (idx > 0) setSelectedPhoto(filteredPhotos[idx - 1]);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedPhoto, filteredPhotos]);

  return (
    <section className="w-full">
      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
        {CATEGORIES.map((cat) => {
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs md:text-sm font-bold uppercase tracking-wider transition ${
                isActive
                  ? 'bg-gold-500 text-navy-950 shadow-lg shadow-gold-500/20'
                  : 'bg-navy-900/80 border border-white/10 text-slate-300 hover:text-white hover:border-gold-400/50'
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {displayPhotos.map((photo) => (
          <div
            key={photo.id}
            onClick={() => setSelectedPhoto(photo)}
            className="group relative bg-navy-900 border border-white/10 rounded-lg overflow-hidden cursor-pointer hover:border-gold-400/60 transition shadow-lg flex flex-col"
          >
            {/* Image Container with 4:3 Aspect Ratio */}
            <div className="relative aspect-[4/3] bg-navy-950 overflow-hidden">
              <img
                src={photo.image}
                alt={photo.title}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                loading="lazy"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = '/assets/images/drydock-wide.jpg';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition" />
              
              <div className="absolute top-2 right-2 bg-navy-950/80 backdrop-blur-sm border border-white/10 text-[10px] uppercase font-mono px-2 py-0.5 rounded text-gold-400">
                {photo.category}
              </div>

              <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition bg-gold-500 text-navy-950 rounded p-1.5 shadow">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                </svg>
              </div>
            </div>

            {/* Caption */}
            <div className="p-3 flex-1 flex flex-col justify-between">
              <h4 className="font-display text-sm font-bold text-white group-hover:text-gold-400 transition leading-snug line-clamp-1">
                {photo.title}
              </h4>
              <p className="text-xs text-slate-400 line-clamp-2 mt-1">
                {photo.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
          onClick={() => setSelectedPhoto(null)}
        >
          <div
            className="relative max-w-5xl w-full bg-navy-900 border border-gold-500/40 rounded-xl overflow-hidden shadow-2xl flex flex-col max-h-[92vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-5 py-3 border-b border-white/10 bg-navy-950">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs text-gold-400 uppercase tracking-widest bg-gold-400/10 px-2 py-0.5 rounded">
                  {selectedPhoto.category}
                </span>
                <h3 className="font-display text-lg font-bold text-white truncate max-w-md md:max-w-xl">
                  {selectedPhoto.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedPhoto(null)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-crimson-600 text-white flex items-center justify-center transition font-bold"
                aria-label="Close"
              >
                ✕
              </button>
            </div>

            {/* Modal Image */}
            <div className="relative flex-1 bg-black flex items-center justify-center overflow-hidden min-h-[300px] max-h-[65vh]">
              <img
                src={selectedPhoto.image}
                alt={selectedPhoto.title}
                className="max-h-full max-w-full object-contain"
              />
            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-navy-950 border-t border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-3">
              <p className="text-xs md:text-sm text-slate-300 max-w-2xl leading-relaxed">
                {selectedPhoto.desc}
              </p>
              <div className="flex items-center gap-2 self-end md:self-auto shrink-0">
                <a
                  href={selectedPhoto.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded bg-white/10 hover:bg-gold-500 hover:text-navy-950 text-xs font-mono font-bold transition flex items-center gap-1.5"
                >
                  <span>⤢</span> Full Resolution
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

