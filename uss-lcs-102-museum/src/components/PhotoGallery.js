import { useState, useEffect } from 'react';
import shipData from '../data/ship-data.json';

const ALL_ARCHIVE_PHOTOS = shipData.galleryItems;

const CATEGORIES = [
  { id: 'all', label: `All Photos (${ALL_ARCHIVE_PHOTOS.length})` },
  { id: 'ship', label: 'The Ship (LCS-102)' },
  { id: 'wwii', label: 'WWII & Pacific Combat' },
  { id: 'restoration', label: 'Drydock & Restoration' },
  { id: 'community', label: 'Boy Scouts & Crew' },
];

export default function PhotoGallery({ initialCategory = 'all', limit = null }) {
  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [showUpgradeManifest, setShowUpgradeManifest] = useState(false);

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
      {/* Category Filter Pills & Staff Manifest Toggle */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-8">
        <div className="flex flex-wrap items-center gap-2">
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

        {!limit && (
          <button
            type="button"
            onClick={() => setShowUpgradeManifest(!showUpgradeManifest)}
            className="px-3.5 py-2 rounded-lg bg-navy-900 border border-cyan-500/40 hover:border-cyan-400 text-cyan-300 text-xs font-mono uppercase tracking-wider transition flex items-center gap-2"
          >
            <span>🛠️</span>
            {showUpgradeManifest ? 'Hide Staff Photo Upgrade Guide' : 'Museum Team: Photo Upgrade Guide'}
          </button>
        )}
      </div>

      {/* Collapsible Museum Team Drag-and-Drop Photo Upgrade Manifest */}
      {!limit && showUpgradeManifest && (
        <div className="mb-8 p-5 rounded-xl bg-navy-900/95 border border-cyan-500/40 shadow-xl space-y-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 border-b border-white/10 pb-3">
            <div>
              <span className="font-mono text-[11px] uppercase tracking-widest text-cyan-400 font-bold block">
                Zero-Code Archival Replacement System
              </span>
              <h3 className="font-display text-xl font-bold text-white uppercase">
                How the Museum Team Can Upgrade Low-Res Photos Anytime
              </h3>
            </div>
            <span className="text-xs font-mono bg-navy-950 px-3 py-1 rounded border border-white/10 text-gold-400">
              Folder: /public/assets/images/
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-slate-300">
            <div className="p-3.5 rounded bg-navy-950 border border-white/10">
              <strong className="text-gold-400 font-mono block mb-1">1. Drag-and-Drop Overwrite</strong>
              To upgrade any legacy low-pixel photo, simply name your new high-resolution `.jpg` scan with the <strong>exact same filename</strong> listed below and drop it into <code>/assets/images/</code> (or via Hostinger File Manager). No coding required.
            </div>
            <div className="p-3.5 rounded bg-navy-950 border border-white/10">
              <strong className="text-gold-400 font-mono block mb-1">2. Archival Anti-Pixelation Frame</strong>
              Photos flagged as <span className="text-amber-400 font-mono">LEGACY SCRAPE</span> automatically render inside an optical darkroom matting frame so low-pixel vintage scans never stretch or blur on 4K screens.
            </div>
            <div className="p-3.5 rounded bg-navy-950 border border-white/10">
              <strong className="text-gold-400 font-mono block mb-1">3. Add New Photos via JSON</strong>
              To add brand-new photos or edit captions, open <code>src/data/ship-data.json</code> under <code>galleryItems</code> and add a single entry.
            </div>
          </div>
        </div>
      )}

      {/* Responsive CSS Grid (grid-cols-1 md:grid-cols-3 lg:grid-cols-4) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {displayPhotos.map((photo) => (
          <div
            key={photo.id}
            onClick={() => setSelectedPhoto(photo)}
            className="group relative bg-navy-900 border border-white/10 rounded-lg overflow-hidden cursor-pointer hover:border-gold-400/60 transition shadow-lg flex flex-col"
          >
            {/* Image Container with 4:3 Aspect Ratio & Anti-Pixelation Treatment */}
            <div className="relative aspect-[4/3] bg-navy-950 overflow-hidden flex items-center justify-center">
              {photo.isLowRes ? (
                <>
                  {/* Ambient Blurred Darkroom Backdrop for Legacy Low-Res / Portrait Scrapes */}
                  <img
                    src={photo.image}
                    alt=""
                    aria-hidden="true"
                    className="absolute inset-0 w-full h-full object-cover blur-md scale-110 opacity-35"
                  />
                  {/* Crisp Unstretched Archival Print */}
                  <img
                    src={photo.image}
                    alt={photo.title}
                    className="relative z-10 max-h-full max-w-full object-contain p-1.5 contrast-[1.06] saturate-[1.04] group-hover:scale-105 transition duration-500 drop-shadow-xl"
                    loading="lazy"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = '/assets/images/drydock-wide.jpg';
                    }}
                  />
                </>
              ) : (
                <img
                  src={photo.image}
                  alt={photo.title}
                  className="w-full h-full object-cover contrast-[1.03] group-hover:scale-105 transition duration-500"
                  loading="lazy"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = '/assets/images/drydock-wide.jpg';
                  }}
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition pointer-events-none z-10" />
              
              <div className="absolute top-2 right-2 z-20 bg-navy-950/85 backdrop-blur-sm border border-white/10 text-[10px] uppercase font-mono px-2 py-0.5 rounded text-gold-400">
                {photo.category}
              </div>

              {photo.isLowRes && (
                <div className="absolute top-2 left-2 z-20 bg-navy-950/85 backdrop-blur-sm border border-amber-400/30 text-[9px] uppercase font-mono px-1.5 py-0.5 rounded text-amber-300">
                  Archival Scan
                </div>
              )}

              <div className="absolute bottom-2 right-2 z-20 opacity-0 group-hover:opacity-100 transition bg-gold-500 text-navy-950 rounded p-1.5 shadow">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                </svg>
              </div>
            </div>

            {/* Caption */}
            <div className="p-3 flex-1 flex flex-col justify-between">
              <div>
                <h4 className="font-display text-sm font-bold text-white group-hover:text-gold-400 transition leading-snug line-clamp-1">
                  {photo.title}
                </h4>
                <p className="text-xs text-slate-400 line-clamp-2 mt-1">
                  {photo.desc}
                </p>
              </div>
              {showUpgradeManifest && (
                <div className="mt-2 pt-2 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-cyan-400">
                  <span className="truncate">{photo.image.replace('/assets/images/', '')}</span>
                  <span className="text-slate-400 shrink-0 ml-1">{photo.resolution || 'Standard'}</span>
                </div>
              )}
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

            {/* Modal Image (Native Resolution Bound for Low-Res Scrapes to Prevent Pixelation) */}
            <div className="relative flex-1 bg-black/95 flex items-center justify-center overflow-hidden min-h-[300px] max-h-[65vh] p-4">
              <img
                src={selectedPhoto.image}
                alt={selectedPhoto.title}
                className={`object-contain rounded shadow-2xl ${
                  selectedPhoto.isLowRes
                    ? 'max-h-[58vh] max-w-full border border-white/15 contrast-[1.06]'
                    : 'max-h-full max-w-full'
                }`}
              />
            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-navy-950 border-t border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-3">
              <div>
                <p className="text-xs md:text-sm text-slate-300 max-w-2xl leading-relaxed">
                  {selectedPhoto.desc}
                </p>
                <p className="text-[11px] font-mono text-slate-500 mt-1">
                  Asset File: <span className="text-slate-400">{selectedPhoto.image}</span>
                  {selectedPhoto.resolution && ` • Resolution: ${selectedPhoto.resolution}`}
                </p>
              </div>
              <div className="flex items-center gap-2 self-end md:self-auto shrink-0">
                <a
                  href={selectedPhoto.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded bg-white/10 hover:bg-gold-500 hover:text-navy-950 text-xs font-mono font-bold transition flex items-center gap-1.5"
                >
                  <span>⤢</span> Original File
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
