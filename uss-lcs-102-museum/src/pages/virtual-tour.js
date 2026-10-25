import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import VirtualMuseumEmbed from '../components/VirtualMuseumEmbed';
import shipData from '../data/ship-data.json';

export default function VirtualTourPage() {
  return (
    <>
      <Head>
        <title>Live 360° Virtual Museum | USS LCS(L)(3)-102 Digital Twin</title>
        <meta
          name="description"
          content="Explore the USS LCS-102 'Yankee Dollar' through interactive 360° virtual tours. Experience our 11-stop guided combat narrative and 62-compartment free-roam digital twin."
        />
        <meta property="og:title" content="Live 360° Virtual Museum | USS LCS(L)(3)-102 Digital Twin" />
        <meta
          property="og:description"
          content="Walk the decks of the last surviving WWII Landing Craft Support gunboat from anywhere in the world."
        />
      </Head>

      {/* Hero Banner */}
      <section className="bg-navy-900 border-b border-white/10 py-12 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:16px_16px]" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <Link href="/" className="text-xs font-mono text-slate-400 hover:text-gold-400 transition">
              Home
            </Link>
            <span className="text-slate-600 text-xs">/</span>
            <span className="text-xs font-mono text-gold-400">Virtual Museum</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-cyan-400 bg-cyan-950/60 border border-cyan-800/60 px-3 py-1 rounded-full">
                Interactive 360° Naval Experience
              </span>
              <h1 className="font-display text-3xl md:text-5xl font-black text-white uppercase tracking-wider mt-3">
                USS LCS-102 Virtual Museum
              </h1>
              <p className="text-slate-300 text-sm md:text-base mt-2 max-w-3xl leading-relaxed">
                Step inside the last operational WWII Landing Craft Support gunboat. Built on an amphibious hull, packed with battleship-grade firepower, and preserved in her late summer 1945 Pacific war configuration.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <a
                href={shipData.virtualTours.plannedTour.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded bg-crimson-600 hover:bg-crimson-500 text-white text-xs font-bold uppercase tracking-wider transition shadow-lg flex items-center gap-2"
              >
                <span>▶</span> Watch YouTube Video Doc ↗
              </a>
              <Link
                href="/#visit"
                className="px-4 py-2.5 rounded bg-white/10 hover:bg-white/20 text-white text-xs font-bold uppercase tracking-wider transition"
              >
                Plan In-Person Visit
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Embed Experience */}
      <section className="py-12 px-4 bg-navy-950">
        <div className="max-w-7xl mx-auto space-y-12">
          <VirtualMuseumEmbed />

          {/* Interactive Navigation Tips */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-white/10">
            <div className="p-5 rounded-lg bg-navy-900/60 border border-white/10">
              <span className="text-2xl mb-2 block">🖱️</span>
              <h3 className="font-display text-base font-bold uppercase text-white mb-1">
                Desktop Controls
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Click and drag anywhere to rotate 360°. Scroll to zoom in on instrument dials, 40mm breech mechanisms, and bronze builder plaques.
              </p>
            </div>

            <div className="p-5 rounded-lg bg-navy-900/60 border border-white/10">
              <span className="text-2xl mb-2 block">📱</span>
              <h3 className="font-display text-base font-bold uppercase text-white mb-1">
                Mobile &amp; Tablet Gyroscope
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Swipe your finger to pan around, or allow device motion to physically turn your phone as a window into the 1945 gunboat compartments.
              </p>
            </div>

            <div className="p-5 rounded-lg bg-navy-900/60 border border-white/10">
              <span className="text-2xl mb-2 block">🎧</span>
              <h3 className="font-display text-base font-bold uppercase text-white mb-1">
                Audio &amp; Historical Tags
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Click the glowing target icons to view combat photographs, listen to veteran voice narrations, and read compartment specifications.
              </p>
            </div>
          </div>

          {/* Compartment Legend Callouts */}
          <div className="p-6 rounded-xl bg-navy-900 border border-gold-500/30">
            <h3 className="font-display text-xl font-bold uppercase tracking-wider text-gold-400 mb-2">
              Authentic U.S. Navy Compartment Designations
            </h3>
            <p className="text-xs text-slate-300 mb-4">
              Restored to accurate 1945 standard damage control stencils. When navigating the 360° tour, reference these key stations:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
              {shipData.restoredCompartments.map((comp) => (
                <div key={comp.code} className="p-3 rounded bg-navy-950 border border-white/10">
                  <span className="font-mono text-xs font-bold text-gold-400 block">{comp.code}</span>
                  <span className="font-display text-sm font-bold text-white block mt-0.5">{comp.name}</span>
                  <span className="text-[11px] text-slate-400 block mt-1 leading-snug">{comp.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

