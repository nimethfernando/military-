import Head from 'next/head';
import Link from 'next/link';
import PhotoGallery from '../components/PhotoGallery';

export default function GalleryPage() {
  return (
    <>
      <Head>
        <title>Archival Photo Gallery | USS LCS(L)(3)-102 Museum</title>
        <meta
          name="description"
          content="Explore 70+ authentic photographs of the USS LCS-102 'Yankee Dollar'. WWII Pacific theater, drydock hull preservation, veteran reunions, and youth overnights."
        />
        <meta property="og:title" content="Archival Photo Gallery | USS LCS(L)(3)-102 Museum" />
        <meta
          property="og:description"
          content="Extracted archival collection of USS LCS-102 photographs from 1945 to 2026."
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
            <span className="text-xs font-mono text-gold-400">Photo Gallery</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-gold-400 bg-gold-950/60 border border-gold-800/60 px-3 py-1 rounded-full">
                Naval Photographic Archive
              </span>
              <h1 className="font-display text-3xl md:text-5xl font-black text-white uppercase tracking-wider mt-3">
                USS LCS-102 Photo Archive
              </h1>
              <p className="text-slate-300 text-sm md:text-base mt-2 max-w-3xl leading-relaxed">
                A visual journey through eight decades: wartime Pacific gunboat patrols, heavy-lift transport from Thailand, ultrasonic drydock hull overhauls at Mare Island, and modern educational youth encampments.
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <a
                href="mailto:robrielly1@comcast.net?subject=Historic%20LCS%20Photo%20Contribution"
                className="px-4 py-2.5 rounded bg-white/10 hover:bg-gold-500 hover:text-navy-950 text-white text-xs font-bold uppercase tracking-wider transition border border-white/10 flex items-center gap-2"
              >
                <span>📷</span> Submit Archival Photos
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Full Gallery */}
      <section className="py-12 px-4 bg-navy-950">
        <div className="max-w-7xl mx-auto space-y-8">
          <PhotoGallery />

          {/* Archival Note */}
          <div className="p-6 rounded-xl bg-navy-900 border border-white/10 text-xs text-slate-400 flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <strong className="text-white block font-display text-sm uppercase">
                Archival Rights &amp; Veteran Photo Preservation
              </strong>
              <span>
                All photographs are preserved under the stewardship of the Landing Craft Support Museum Corporation. Have original photos of an LCS ship or crew? Contact Museum Historian Rob Rielly (<a href="mailto:robrielly1@comcast.net" className="text-gold-400 underline">robrielly1@comcast.net</a>).
              </span>
            </div>
            <Link
              href="/virtual-tour"
              className="px-4 py-2 rounded bg-cyan-600 hover:bg-cyan-500 text-white font-mono text-xs uppercase font-bold shrink-0"
            >
              Tour Ship in 360° →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

