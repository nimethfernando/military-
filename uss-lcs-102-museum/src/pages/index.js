import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Hero from '../components/Hero';
import VirtualMuseumEmbed from '../components/VirtualMuseumEmbed';
import HistoryGrid from '../components/HistoryGrid';
import PhotoGallery from '../components/PhotoGallery';
import shipData from '../data/ship-data.json';

export default function Home() {
  const [selectedDonation, setSelectedDonation] = useState(50);
  const [membershipSubmitted, setMembershipSubmitted] = useState(false);
  const [memberForm, setMemberForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    serviceConnection: '',
    mailingAddress: '',
  });

  const donationTiers = [
    { amount: 25, label: '$25', desc: 'Supports ongoing volunteer maintenance of the 102' },
    { amount: 50, label: '$50', desc: 'Supports operation & preservation of USS LCS (L)(3) 102' },
    { amount: 100, label: '$100', desc: 'Supports Mare Island Naval Base dockage & records' },
    { amount: 250, label: '$250+', desc: 'Major preservation gift for drydock & hull maintenance' },
  ];

  const handleMemberSubmit = (e) => {
    e.preventDefault();
    // Prepares mailto with Dennis Steenbergen (Museum Secretary)
    const subject = encodeURIComponent(`LCS-102 Museum Membership Application: ${memberForm.fullName}`);
    const body = encodeURIComponent(
      `LANDING CRAFT SUPPORT MUSEUM MEMBERSHIP APPLICATION\n\n` +
      `Full Name: ${memberForm.fullName}\n` +
      `Email: ${memberForm.email}\n` +
      `Phone: ${memberForm.phone}\n` +
      `WWII Veteran / Ship Connection: ${memberForm.serviceConnection}\n` +
      `Mailing Address: ${memberForm.mailingAddress}\n\n` +
      `Delivered to Dennis Steenbergen, Secretary (dsteenbergen1165@gmail.com)`
    );
    window.location.href = `mailto:dsteenbergen1165@gmail.com?cc=bsteenbergen@msn.com&subject=${subject}&body=${body}`;
    setMembershipSubmitted(true);
  };

  return (
    <>
      <Head>
        <title>USS LCS-102 Museum | Official Landing Craft Support Gunboat</title>
        <meta
          name="description"
          content="Step aboard the USS LCS(L)(3)-102 'Yankee Dollar'—the last surviving WWII Landing Craft Support gunboat. Free 360° virtual museum tours, Mare Island visiting hours, and living history."
        />
        <meta property="og:title" content="USS LCS-102 Museum | Official Landing Craft Support Gunboat" />
        <meta
          property="og:description"
          content="Experience the sole surviving WWII Landing Craft Support gunboat. 11-stop guided combat narrative, 62-scene digital twin, and authentic 1945 living history."
        />
        <meta property="og:image" content="/assets/images/hero-ship-bow.jpg" />
      </Head>

      {/* Cinematic Hero */}
      <Hero />

      {/* Virtual Museum 360° Theater Section */}
      <section id="virtual-tour" className="py-16 px-4 bg-navy-950 border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-cyan-400 bg-cyan-950/60 border border-cyan-800/60 px-3 py-1 rounded-full">
              Digital Twin Experience
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-black text-white uppercase tracking-wider mt-3">
              Step Aboard the 360° Virtual Museum
            </h2>
            <p className="text-slate-300 text-sm md:text-base mt-3 leading-relaxed">
              Whether you are across the globe or preparing to visit Mare Island, explore the full ship online. Choose our 11-stop narrative combat tour or roam freely through 62 digitized compartments.
            </p>
          </div>

          <VirtualMuseumEmbed />
        </div>
      </section>

      {/* History Grid & Specifications Blueprint */}
      <section id="history" className="py-16 px-4 bg-navy-900 border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <HistoryGrid />
        </div>
      </section>

      {/* Photo Gallery Spotlight */}
      <section id="gallery" className="py-16 px-4 bg-navy-950 border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-gold-400 bg-gold-950/60 border border-gold-800/60 px-3 py-1 rounded-full">
                Extracted Archival Archive
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-black text-white uppercase tracking-wider mt-3">
                Historical Photographic Gallery
              </h2>
              <p className="text-slate-400 text-xs md:text-sm mt-1 max-w-2xl">
                Restored high-resolution photography documenting WWII combat operations, drydock overhauls, youth group encampments, and our dedicated volunteer crew.
              </p>
            </div>
            <Link
              href="/gallery"
              className="px-5 py-2.5 rounded bg-gold-500 hover:bg-gold-400 text-navy-950 text-xs font-bold uppercase tracking-wider transition shadow-lg shrink-0 self-start md:self-auto flex items-center gap-1.5"
            >
              <span>View All 70+ Archive Photos</span> ↗
            </Link>
          </div>

          <PhotoGallery limit={8} />
        </div>
      </section>

      {/* 6 Corporate Objectives & Historical Mission */}
      <section id="objectives" className="py-16 px-4 bg-navy-900 border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-gold-400">
              Landing Craft Support Museum Corporation
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-black text-white uppercase tracking-wider mt-2">
              Our Six Primary Objectives
            </h2>
            <p className="text-slate-400 text-sm mt-2">
              The founding charter and ongoing mission of the Landing Craft Support Museum Corporation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {shipData.objectives.map((obj) => (
              <div
                key={obj.id}
                className="bg-navy-950/80 border border-white/10 rounded-lg p-6 relative flex flex-col justify-between hover:border-gold-400/50 transition group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-xs text-gold-400 font-bold px-2 py-0.5 rounded bg-gold-400/10">
                      Objective {obj.id}
                    </span>
                    <span className="text-slate-600 font-mono text-xs">USN • 501(c)(3)</span>
                  </div>
                  <h3 className="font-display text-lg font-bold text-white group-hover:text-gold-400 transition mb-2">
                    {obj.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {obj.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Plan Your Visit to Mare Island */}
      <section id="visit" className="py-16 px-4 bg-navy-950 border-b border-white/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-emerald-400 bg-emerald-950/60 border border-emerald-800/60 px-3 py-1 rounded-full">
              Plan Your Visit • Free Admission
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-black text-white uppercase tracking-wider">
              Visiting the USS LCS-102 at Mare Island
            </h2>
            <p className="text-slate-300 text-sm md:text-base leading-relaxed">
              Step back into 1945. Walk the teak-free steel decks, stand behind the twin 40mm Bofors and 3"/50 bow gun, explore the authentic galley, and climb into the bridge where radar pickets were directed off Okinawa.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-navy-900 border border-white/10">
                <h4 className="font-display text-sm font-bold uppercase text-gold-400 mb-1 flex items-center gap-1.5">
                  <span>⏰</span> Open Days &amp; Hours
                </h4>
                <p className="text-xs text-slate-300 font-medium">
                  Tuesdays, Thursdays &amp; Saturdays
                </p>
                <p className="text-sm font-mono text-emerald-400 font-bold mt-1">
                  9:30 AM – 3:00 PM
                </p>
                <p className="text-[11px] text-slate-400 mt-1">
                  Admission is completely free. Voluntary donations support ongoing preservation.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-navy-900 border border-white/10">
                <h4 className="font-display text-sm font-bold uppercase text-gold-400 mb-1 flex items-center gap-1.5">
                  <span>📍</span> Berth Location &amp; GPS
                </h4>
                <p className="text-xs text-slate-300">
                  Mare Island Naval Base<br />
                  Intersection of "A" St &amp; Nimitz Ave (289 Waterfront Ave)<br />
                  Vallejo, CA 94592
                </p>
                <p className="text-[11px] font-mono text-cyan-400 mt-1">
                  GPS: 38°05'56"N 122°16'05"W
                </p>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-navy-900/90 border border-gold-500/30">
              <h4 className="font-display text-sm font-bold uppercase text-gold-400 mb-1 flex items-center gap-1.5">
                <span>⛺</span> Youth Group &amp; Boy Scout Overnight Stays
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Groups and Boy Scouts can arrange to spend the night or weekend on the LCS-102. Sleep in authentic triple-tier bunks, conduct morning colors flag ceremonies, and learn naval navigation. Contact Skipper Bill Mason to coordinate dates.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-4">
            <div className="rounded-xl overflow-hidden border border-white/15 shadow-2xl relative aspect-[4/3] bg-navy-900">
              <img
                src="/assets/images/original-flag-102.jpg"
                alt="Original Flag flown on the 102"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-transparent opacity-90" />
              <div className="absolute bottom-3 left-3 right-3 text-xs text-slate-200">
                <strong className="text-gold-400 block font-display uppercase tracking-wide">
                  The Original Flag Flown on the 102
                </strong>
                Preserved 48-star battle ensign displayed proudly aboard during tours.
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-lg overflow-hidden border border-white/10 aspect-video relative">
                <img
                  src="/assets/images/boy-scouts-flag.jpg"
                  alt="Boy Scouts flag ceremony"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-1 left-2 text-[10px] text-white font-mono bg-black/60 px-1 rounded">
                  Overnight Ceremony
                </div>
              </div>
              <div className="rounded-lg overflow-hidden border border-white/10 aspect-video relative">
                <img
                  src="/assets/images/boy-scouts-bunks.jpg"
                  alt="Boy Scouts in bunks"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-1 left-2 text-[10px] text-white font-mono bg-black/60 px-1 rounded">
                  WWII Sailor Bunks
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 501(c)(3) Donations Section */}
      <section id="donate" className="py-16 px-4 bg-navy-900 border-b border-white/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-6 space-y-6">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-gold-400 bg-gold-950/60 border border-gold-800/60 px-3 py-1 rounded-full">
              501(c)(3) Nonprofit Preservation Fund • 100% Volunteer Operated
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-black text-white uppercase tracking-wider">
              Keep the Last "Mighty Midget" Afloat
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              The Landing Craft Support Museum receives zero government operating funding and charges no admission fee. Every gallon of marine primer, every steel hull plate welded in drydock, and every dollar of docking and insurance fees at Mare Island is funded directly by patriotic donors like you.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-navy-950 border border-white/10">
                <h4 className="font-display text-sm font-bold uppercase text-white mb-1">
                  Drydock &amp; Hull Preservation
                </h4>
                <p className="text-xs text-slate-400">
                  Ultrasonic hull inspections, 01 deck drainage repairs, anti-fouling bottom paint, and zinc anode replacement.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-navy-950 border border-white/10">
                <h4 className="font-display text-sm font-bold uppercase text-white mb-1">
                  Mare Island Berthing &amp; Insurance
                </h4>
                <p className="text-xs text-slate-400">
                  Covers essential monthly dockage, shore power, marine liability insurance, and gangway safety equipment.
                </p>
              </div>
            </div>

            {/* Check donations note */}
            <div className="p-4 rounded-lg bg-navy-950 border border-gold-400/30 text-xs text-slate-300 space-y-1">
              <p className="font-bold text-gold-400 uppercase font-mono">
                Major Gifts &amp; Check Donations (100% Fee-Free)
              </p>
              <p>
                If making a larger donation, you can mail a tax-deductible check payable to:
              </p>
              <p className="font-mono text-white pt-1">
                <strong>Landing Craft Support Museum</strong><br />
                c/o Dennis A. Steenbergen, Secretary<br />
                7345 W. Lakeside Drive, Littleton, CO 80125
              </p>
            </div>
          </div>

          {/* Donation Form Card */}
          <div className="lg:col-span-6 bg-navy-950 border border-gold-500/40 rounded-xl p-6 md:p-8 shadow-2xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                <span className="font-mono text-xs uppercase tracking-widest text-slate-400">
                  Official PayPal / Credit Card Portal
                </span>
                <span className="font-mono text-xs text-gold-400 font-bold bg-gold-400/10 px-2 py-0.5 rounded">
                  Tax-Deductible 501(c)(3)
                </span>
              </div>

              <h3 className="font-display text-xl font-bold uppercase tracking-wider text-white mb-2">
                Donations to Help Maintain the 102
              </h3>
              <p className="text-xs text-slate-400 mb-6">
                Admission to the museum is free. Donations of any size to help maintain the USS LCS (L) 102 are gratefully accepted.
              </p>

              {/* Tier Selection Buttons */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                {donationTiers.map((tier) => (
                  <button
                    key={tier.amount}
                    type="button"
                    onClick={() => setSelectedDonation(tier.amount)}
                    className={`p-3 rounded-lg border text-left transition ${
                      selectedDonation === tier.amount
                        ? 'border-gold-400 bg-gold-400/10 text-white shadow-lg'
                        : 'border-white/10 bg-navy-900/60 text-slate-300 hover:border-gold-400/40'
                    }`}
                  >
                    <span className="font-display text-xl font-black text-gold-400 block">
                      {tier.label}
                    </span>
                    <span className="text-[11px] text-slate-400 line-clamp-2 mt-0.5 block">
                      {tier.desc}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Official PayPal Button Form with Verified Merchant Button ID */}
            <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top" className="pt-4 border-t border-white/10">
              <input type="hidden" name="cmd" value="_s-xclick" />
              <input type="hidden" name="hosted_button_id" value={shipData.shipInfo.paypalHostedButtonId} />

              <div className="mb-4 p-3 rounded bg-navy-900 border border-white/10 text-xs text-slate-300 font-mono">
                Selected Support: <span className="text-gold-400 font-bold">${selectedDonation}</span> — Landing Craft Support Museum Fund
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-lg bg-gold-500 hover:bg-gold-400 text-navy-950 font-display text-lg font-black uppercase tracking-wider transition shadow-xl shadow-gold-500/20 flex items-center justify-center gap-2"
              >
                <span>💳</span> Donate ${selectedDonation} via PayPal or Card
              </button>
              <p className="text-center text-[11px] text-slate-500 font-mono mt-3">
                Secure 256-bit SSL encrypted transaction directly to 501(c)(3) treasury.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Membership Application Form */}
      <section id="membership" className="py-16 px-4 bg-navy-950 border-b border-white/10">
        <div className="max-w-4xl mx-auto">
          <div className="border border-white/15 rounded-xl bg-navy-900/80 p-6 md:p-10 shadow-2xl">
            <span className="font-mono text-xs uppercase tracking-widest text-crimson-400 font-bold block mb-2">
              Official Association Enrollment • Open to All Supporters
            </span>
            <h2 className="font-display text-2xl md:text-3xl font-black text-white uppercase tracking-wider mb-2">
              Become a Landing Craft Support Museum Member
            </h2>
            <p className="text-xs md:text-sm text-slate-300 leading-relaxed mb-6">
              Anyone may become a member of the Landing Craft Support Museum. You just need to be someone who is interested in maintaining part of the history of WWII. Fill out the following form and send it in to join our muster roll and receive quarterly newsletters.
            </p>

            {membershipSubmitted ? (
              <div className="p-6 rounded-lg bg-emerald-950/60 border border-emerald-500/60 text-center space-y-2">
                <span className="text-3xl">🎉</span>
                <h4 className="font-display text-lg font-bold text-white uppercase">
                  Application Initiated!
                </h4>
                <p className="text-xs text-slate-300 max-w-md mx-auto">
                  Your application email has been composed for Dennis Steenbergen, Museum Secretary (<span className="text-emerald-400 font-mono">dsteenbergen1165@gmail.com</span>). Dennis will confirm your enrollment and mail your membership certificate and newsletter.
                </p>
                <button
                  type="button"
                  onClick={() => setMembershipSubmitted(false)}
                  className="mt-3 px-4 py-1.5 rounded bg-navy-900 border border-white/20 text-xs font-mono text-slate-300 hover:text-white"
                >
                  Submit Another Application
                </button>
              </div>
            ) : (
              <form onSubmit={handleMemberSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-400 mb-1">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={memberForm.fullName}
                      onChange={(e) => setMemberForm({ ...memberForm, fullName: e.target.value })}
                      placeholder="e.g. John Doe"
                      className="w-full px-4 py-2.5 rounded bg-navy-950 border border-white/10 text-white text-sm focus:border-gold-400 focus:outline-none transition"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-400 mb-1">
                      Your Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={memberForm.email}
                      onChange={(e) => setMemberForm({ ...memberForm, email: e.target.value })}
                      placeholder="e.g. jdoe@example.com"
                      className="w-full px-4 py-2.5 rounded bg-navy-950 border border-white/10 text-white text-sm focus:border-gold-400 focus:outline-none transition"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-400 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={memberForm.phone}
                      onChange={(e) => setMemberForm({ ...memberForm, phone: e.target.value })}
                      placeholder="e.g. (555) 123-4567"
                      className="w-full px-4 py-2.5 rounded bg-navy-950 border border-white/10 text-white text-sm focus:border-gold-400 focus:outline-none transition"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-400 mb-1">
                      WWII Veteran / Ship Connection (Optional)
                    </label>
                    <input
                      type="text"
                      value={memberForm.serviceConnection}
                      onChange={(e) => setMemberForm({ ...memberForm, serviceConnection: e.target.value })}
                      placeholder="e.g. Father served on USS LCS-102"
                      className="w-full px-4 py-2.5 rounded bg-navy-950 border border-white/10 text-white text-sm focus:border-gold-400 focus:outline-none transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-slate-400 mb-1">
                    Mailing Street Address, City, State &amp; ZIP
                  </label>
                  <input
                    type="text"
                    value={memberForm.mailingAddress}
                    onChange={(e) => setMemberForm({ ...memberForm, mailingAddress: e.target.value })}
                    placeholder="Mailing address for physical newsletter delivery"
                    className="w-full px-4 py-2.5 rounded bg-navy-950 border border-white/10 text-white text-sm focus:border-gold-400 focus:outline-none transition"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="px-6 py-3 rounded bg-crimson-600 hover:bg-crimson-500 text-white font-display text-sm font-bold uppercase tracking-wider transition shadow-lg flex items-center gap-2"
                  >
                    <span>📜</span> Submit Membership Application
                  </button>
                  <p className="text-[11px] text-slate-400 font-mono mt-2">
                    Applications are received and processed by Association Secretary Dennis Steenbergen (Littleton, CO).
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

