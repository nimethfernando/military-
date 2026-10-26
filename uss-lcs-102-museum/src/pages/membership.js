import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import shipData from '../data/ship-data.json';

const MEMBERSHIP_TIERS = [
  {
    id: 'veteran',
    title: 'Veteran / Active Duty',
    dues: 20,
    period: 'per year',
    tag: 'Historical $20 Rate',
    desc: 'Honors our veterans and preserves the historic $20 annual membership tradition established in 2008.',
    popular: false,
    perks: [
      'Official Association Membership Card',
      'Quarterly print newsletter mailed to your home',
      'Voting privileges at annual association meetings',
      'Unlimited free guided tours at Mare Island',
      'Invitation to annual crew reunion & convention',
    ],
  },
  {
    id: 'supporter',
    title: 'Individual Supporter',
    dues: 35,
    period: 'per year',
    tag: 'Most Popular',
    desc: 'Ideal for naval history enthusiasts and supporters dedicated to keeping the LCS-102 afloat.',
    popular: true,
    perks: [
      'All Veteran Member privileges',
      'Commemorative USS LCS-102 enamel lapel pin',
      'Official Muster Roll certificate suitable for framing',
      'Quarterly print newsletter mailed to your home',
      '10% discount on museum store memorabilia',
    ],
  },
  {
    id: 'family',
    title: 'Family / Crew Pass',
    dues: 60,
    period: 'per year',
    tag: 'Family Value',
    desc: 'Full membership privileges for parents, children, and grandchildren to experience living WWII history.',
    popular: false,
    perks: [
      'All Individual Supporter privileges',
      'Free admission for entire immediate family',
      'Two commemorative USS LCS-102 decals',
      'Priority registration for youth overnight encampments',
      'Quarterly print newsletter mailed to your home',
    ],
  },
  {
    id: 'plank',
    title: 'Life Member (Plank Owner)',
    dues: 500,
    period: 'one-time',
    tag: 'Lifetime Honor',
    desc: 'Permanent lifetime membership. Your name will be engraved on the Living Memorial Honor Roll aboard the ship.',
    popular: false,
    perks: [
      'Lifetime membership with zero annual dues ever',
      'Permanent name engraved on the LCS-102 Honor Plaque',
      'Custom cast bronze Plank Owner commemorative medal',
      'Lifetime subscription to all museum publications',
      'VIP private ship tour with Museum Skipper Bill Mason',
    ],
  },
  {
    id: 'flotilla',
    title: 'Flotilla 4 Patron Circle',
    dues: 1000,
    period: 'preservation gift',
    tag: 'Major Benefactor',
    desc: 'Provides vital underwriting for steel hull preservation, ultrasonic inspections, and Mare Island dockage.',
    popular: false,
    perks: [
      'All Life Member honors and privileges',
      'Prominent recognition in quarterly newsletter dispatch',
      'Special invitation to VIP drydock and bay cruise evolutions',
      'Framed piece of authenticated historic LCS teak/steel artifact',
      'Direct consultation on museum historical acquisitions',
    ],
  },
];

const MEMBER_BENEFITS = [
  {
    icon: '📬',
    title: 'Quarterly Print Newsletter',
    desc: 'Published and mailed directly to your home by Secretary Dennis Steenbergen, featuring unreleased WWII action reports, oral histories, and restoration progress.',
  },
  {
    icon: '⚓',
    title: 'Unlimited Free Admission',
    desc: 'Walk the steel decks of the sole surviving "Mighty Midget" anytime during public visiting hours (Tuesdays, Thursdays, and Saturdays from 9:30 AM to 3:00 PM).',
  },
  {
    icon: '🎖️',
    title: 'Official Muster Roll Enrollment',
    desc: 'Receive your personalized membership card and official certificate recognizing your commitment to honoring America\'s amphibious assault forces.',
  },
  {
    icon: '🎪',
    title: 'Annual Reunion & Convention',
    desc: 'Exclusive invitations to the annual Landing Craft Support Museum convention and veteran banquets to connect with shipmates, families, and historians.',
  },
  {
    icon: '🗳️',
    title: 'Association Voting Privileges',
    desc: 'Participate as a voting member in association governance and help guide the long-term preservation and educational mission of the 501(c)(3) museum.',
  },
  {
    icon: '⛺',
    title: 'Youth & Scout Encampments',
    desc: 'Members receive priority scheduling for Boy Scout, youth, and family overnight weekend stays sleeping in authentic WWII sailor bunks.',
  },
];

export default function MembershipPage() {
  const [selectedTier, setSelectedTier] = useState('supporter');
  const [formMode, setFormMode] = useState('online'); // 'online' or 'print'
  const [paymentMethod, setPaymentMethod] = useState('paypal'); // 'paypal' or 'check'
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    streetAddress: '',
    cityStateZip: '',
    serviceBranch: 'None / Civilian Supporter',
    shipOrUnit: '',
    reasonForJoining: '',
    extraDonation: '0',
  });

  const currentTierObj = MEMBERSHIP_TIERS.find((t) => t.id === selectedTier) || MEMBERSHIP_TIERS[1];
  const totalAmount = currentTierObj.dues + (parseFloat(formData.extraDonation) || 0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (paymentMethod === 'paypal') {
      // Trigger native PayPal submission
      const paypalForm = document.getElementById('paypal-member-form');
      if (paypalForm) paypalForm.submit();
      setSubmitted(true);
    } else {
      // Mailto delivery to Secretary Dennis Steenbergen
      const subject = encodeURIComponent(`LCS-102 Membership Application: ${formData.fullName} (${currentTierObj.title})`);
      const body = encodeURIComponent(
        `LANDING CRAFT SUPPORT MUSEUM MEMBERSHIP APPLICATION\n` +
        `=======================================================\n\n` +
        `APPLICANT DETAILS:\n` +
        `Full Name: ${formData.fullName}\n` +
        `Email: ${formData.email}\n` +
        `Phone: ${formData.phone}\n` +
        `Mailing Street Address: ${formData.streetAddress}\n` +
        `City, State & ZIP: ${formData.cityStateZip}\n\n` +
        `MEMBERSHIP DETAILS:\n` +
        `Selected Tier: ${currentTierObj.title} ($${currentTierObj.dues} ${currentTierObj.period})\n` +
        `Additional Tax-Deductible Donation: $${formData.extraDonation || '0'}\n` +
        `Total Enclosed / Payable: $${totalAmount}\n` +
        `Payment Method: Mailing a Check to Dennis Steenbergen\n\n` +
        `SERVICE & VETERAN CONNECTION:\n` +
        `Branch / Background: ${formData.serviceBranch}\n` +
        `Ship / Unit Connection: ${formData.shipOrUnit || 'N/A'}\n` +
        `Reason for Joining: ${formData.reasonForJoining || 'Support naval history'}\n\n` +
        `Delivered directly to Association Secretary Dennis Steenbergen (dsteenbergen1165@gmail.com)\n` +
        `CC: Treasurer Bonnie Steenbergen (bsteenbergen@msn.com)`
      );
      window.location.href = `mailto:dsteenbergen1165@gmail.com?cc=bsteenbergen@msn.com&subject=${subject}&body=${body}`;
      setSubmitted(true);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      <Head>
        <title>Membership Application | USS LCS(L)(3)-102 Museum</title>
        <meta
          name="description"
          content="Join the Landing Craft Support Museum muster roll. Support the preservation of the USS LCS-102 'Yankee Dollar'. Receive quarterly newsletters, free admission, and voting rights."
        />
        <meta property="og:title" content="Membership Application | USS LCS(L)(3)-102 Museum" />
        <meta
          property="og:description"
          content="Become a member of the Landing Craft Support Museum. Annual dues support drydock maintenance and education."
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
            <span className="text-xs font-mono text-gold-400">Membership Application</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-gold-400 bg-gold-950/60 border border-gold-800/60 px-3 py-1 rounded-full">
                Join the Association Muster Roll
              </span>
              <h1 className="font-display text-3xl md:text-5xl font-black text-white uppercase tracking-wider mt-3">
                Become a Museum Member
              </h1>
              <p className="text-slate-300 text-sm md:text-base mt-2 max-w-3xl leading-relaxed">
                Anyone with an interest in preserving World War II naval history is welcome to join. Your membership directly funds drydock hull maintenance, educational scout overnights, and artifact archiving for America’s last operational Landing Craft Support gunboat.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <a
                href="#application-form"
                className="px-5 py-2.5 rounded bg-gold-400 hover:bg-gold-500 text-navy-950 text-xs font-bold uppercase tracking-wider transition shadow-lg flex items-center gap-2"
              >
                <span>📜</span> Apply Online Now
              </a>
              <button
                type="button"
                onClick={() => {
                  setFormMode('print');
                  setTimeout(() => {
                    const el = document.getElementById('printable-form');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }}
                className="px-4 py-2.5 rounded bg-navy-800 border border-white/20 hover:border-gold-400 text-white text-xs font-mono font-bold uppercase tracking-wider transition flex items-center gap-2"
              >
                <span>🖨️</span> Print Mail-In Slip
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Member Benefits Grid */}
      <section className="py-14 px-4 bg-navy-950 border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-cyan-400">
              Association Privileges
            </span>
            <h2 className="font-display text-2xl md:text-4xl font-black text-white uppercase tracking-wider mt-2">
              What Your Membership Includes
            </h2>
            <p className="text-xs md:text-sm text-slate-400 mt-2">
              Every member becomes an active custodian of the historic USS LCS(L)(3)-102 living memorial.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {MEMBER_BENEFITS.map((benefit) => (
              <div
                key={benefit.title}
                className="p-6 rounded-xl bg-navy-900/80 border border-white/10 hover:border-gold-400/50 transition flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-lg bg-navy-950 border border-white/10 flex items-center justify-center text-2xl mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="font-display text-lg font-bold text-white mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {benefit.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Tiers Selector */}
      <section className="py-14 px-4 bg-navy-900 border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-gold-400">
              Annual Dues &amp; Lifetime Endowments
            </span>
            <h2 className="font-display text-2xl md:text-4xl font-black text-white uppercase tracking-wider mt-2">
              Choose Your Membership Tier
            </h2>
            <p className="text-xs md:text-sm text-slate-400 mt-2">
              Select your membership level below. Dues are 100% tax-deductible under IRS Section 501(c)(3).
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {MEMBERSHIP_TIERS.map((tier) => {
              const isSelected = selectedTier === tier.id;
              return (
                <div
                  key={tier.id}
                  onClick={() => setSelectedTier(tier.id)}
                  className={`cursor-pointer rounded-xl p-5 flex flex-col justify-between transition relative border ${
                    isSelected
                      ? 'bg-navy-950 border-gold-400 shadow-2xl shadow-gold-500/10 ring-2 ring-gold-400/50 -translate-y-1'
                      : 'bg-navy-950/60 border-white/10 hover:border-white/30 hover:bg-navy-950'
                  }`}
                >
                  {tier.popular && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold-500 text-navy-950 text-[10px] font-mono font-bold uppercase px-2.5 py-0.5 rounded-full shadow">
                      {tier.tag}
                    </span>
                  )}
                  {!tier.popular && (
                    <span className="text-[10px] font-mono uppercase text-slate-400 block mb-1">
                      {tier.tag}
                    </span>
                  )}

                  <div>
                    <h3 className="font-display text-base font-bold text-white leading-tight">
                      {tier.title}
                    </h3>
                    <div className="my-3">
                      <span className="font-display text-3xl font-black text-gold-400">
                        ${tier.dues}
                      </span>
                      <span className="text-[11px] font-mono text-slate-400 block">
                        {tier.period}
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-300 leading-snug mb-4">
                      {tier.desc}
                    </p>
                  </div>

                  <div>
                    <ul className="space-y-1.5 text-[11px] text-slate-400 border-t border-white/10 pt-3 mb-4">
                      {tier.perks.slice(0, 3).map((perk, idx) => (
                        <li key={idx} className="flex items-start gap-1.5">
                          <span className="text-emerald-400">✓</span>
                          <span>{perk}</span>
                        </li>
                      ))}
                    </ul>
                    <button
                      type="button"
                      className={`w-full py-2 rounded text-xs font-mono font-bold uppercase transition ${
                        isSelected
                          ? 'bg-gold-500 text-navy-950 shadow'
                          : 'bg-white/10 text-slate-300 hover:text-white'
                      }`}
                    >
                      {isSelected ? '✓ Selected' : 'Select Tier'}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Dual-Mode Application Form Section */}
      <section id="application-form" className="py-16 px-4 bg-navy-950 border-b border-white/10">
        <div className="max-w-4xl mx-auto">
          {/* Form Mode Selector Tabs */}
          <div className="flex items-center justify-center gap-2 mb-8">
            <button
              type="button"
              onClick={() => setFormMode('online')}
              className={`px-5 py-2.5 rounded-lg text-xs md:text-sm font-bold uppercase tracking-wider transition flex items-center gap-2 ${
                formMode === 'online'
                  ? 'bg-gold-500 text-navy-950 shadow-lg'
                  : 'bg-navy-900 border border-white/10 text-slate-300 hover:text-white'
              }`}
            >
              <span>💻</span> Online Application Form
            </button>
            <button
              type="button"
              onClick={() => setFormMode('print')}
              className={`px-5 py-2.5 rounded-lg text-xs md:text-sm font-bold uppercase tracking-wider transition flex items-center gap-2 ${
                formMode === 'print'
                  ? 'bg-gold-500 text-navy-950 shadow-lg'
                  : 'bg-navy-900 border border-white/10 text-slate-300 hover:text-white'
              }`}
            >
              <span>🖨️</span> Printable Mail-In Slip
            </button>
          </div>

          {formMode === 'online' ? (
            /* Online Digital Form */
            <div className="bg-navy-900 border border-white/15 rounded-2xl p-6 md:p-10 shadow-2xl">
              <div className="border-b border-white/10 pb-6 mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <span className="font-mono text-xs text-gold-400 uppercase font-bold tracking-widest block mb-1">
                    Step 2 of 2 • Member Enrollment Form
                  </span>
                  <h3 className="font-display text-2xl font-bold uppercase text-white">
                    Enroll as: <span className="text-gold-400">{currentTierObj.title} (${currentTierObj.dues})</span>
                  </h3>
                </div>
                <div className="text-right">
                  <span className="text-xs text-slate-400 block font-mono">501(c)(3) Secretary:</span>
                  <span className="text-xs text-slate-200 font-mono font-bold">Dennis A. Steenbergen</span>
                </div>
              </div>

              {submitted ? (
                <div className="p-8 rounded-xl bg-emerald-950/60 border border-emerald-500/60 text-center space-y-4">
                  <span className="text-4xl">⚓</span>
                  <h4 className="font-display text-2xl font-bold text-white uppercase">
                    Welcome Aboard, Member!
                  </h4>
                  <p className="text-sm text-slate-300 max-w-lg mx-auto leading-relaxed">
                    Your membership application has been forwarded to <strong>Dennis Steenbergen</strong>, Association Secretary in Littleton, CO (<a href="mailto:dsteenbergen1165@gmail.com" className="text-emerald-400 font-mono underline">dsteenbergen1165@gmail.com</a>).
                  </p>
                  <p className="text-xs text-slate-400 max-w-md mx-auto">
                    Your official membership card and quarterly newsletter will be dispatched to your mailing address.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-5 py-2 rounded bg-navy-900 border border-white/20 text-xs font-mono text-slate-300 hover:text-white"
                  >
                    Submit Another Application
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Contact Details */}
                  <div>
                    <h4 className="font-display text-sm font-bold uppercase tracking-wider text-slate-300 mb-3 flex items-center gap-1.5">
                      <span>👤</span> Applicant Contact Information
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-mono uppercase text-slate-400 mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          placeholder="e.g. John Doe"
                          className="w-full px-4 py-2.5 rounded bg-navy-950 border border-white/10 text-white text-sm focus:border-gold-400 focus:outline-none transition"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-mono uppercase text-slate-400 mb-1">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="e.g. jdoe@example.com"
                          className="w-full px-4 py-2.5 rounded bg-navy-950 border border-white/10 text-white text-sm focus:border-gold-400 focus:outline-none transition"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-mono uppercase text-slate-400 mb-1">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="e.g. (555) 123-4567"
                          className="w-full px-4 py-2.5 rounded bg-navy-950 border border-white/10 text-white text-sm focus:border-gold-400 focus:outline-none transition"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-mono uppercase text-slate-400 mb-1">
                          Military Branch / Service Connection
                        </label>
                        <select
                          value={formData.serviceBranch}
                          onChange={(e) => setFormData({ ...formData, serviceBranch: e.target.value })}
                          className="w-full px-4 py-2.5 rounded bg-navy-950 border border-white/10 text-white text-sm focus:border-gold-400 focus:outline-none transition"
                        >
                          <option>None / Civilian Supporter</option>
                          <option>U.S. Navy Veteran / Active</option>
                          <option>U.S. Marine Corps</option>
                          <option>U.S. Army / Army Air Forces</option>
                          <option>U.S. Coast Guard</option>
                          <option>Royal Thai Navy Veteran</option>
                          <option>Descendant / Family of LCS Crewman</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Physical Mailing Address (Crucial for Print Newsletter) */}
                  <div>
                    <h4 className="font-display text-sm font-bold uppercase tracking-wider text-slate-300 mb-3 flex items-center gap-1.5">
                      <span>📬</span> Mailing Address (For Quarterly Print Newsletter)
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-mono uppercase text-slate-400 mb-1">
                          Street Address *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.streetAddress}
                          onChange={(e) => setFormData({ ...formData, streetAddress: e.target.value })}
                          placeholder="e.g. 1234 Main Street, Apt 5"
                          className="w-full px-4 py-2.5 rounded bg-navy-950 border border-white/10 text-white text-sm focus:border-gold-400 focus:outline-none transition"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-mono uppercase text-slate-400 mb-1">
                          City, State &amp; ZIP Code *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.cityStateZip}
                          onChange={(e) => setFormData({ ...formData, cityStateZip: e.target.value })}
                          placeholder="e.g. Vallejo, CA 94592"
                          className="w-full px-4 py-2.5 rounded bg-navy-950 border border-white/10 text-white text-sm focus:border-gold-400 focus:outline-none transition"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Veteran Connection & Reason */}
                  <div>
                    <h4 className="font-display text-sm font-bold uppercase tracking-wider text-slate-300 mb-3 flex items-center gap-1.5">
                      <span>🎖️</span> Naval Connection &amp; Message
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-mono uppercase text-slate-400 mb-1">
                          Ship, Unit, or Relative's Name (Optional)
                        </label>
                        <input
                          type="text"
                          value={formData.shipOrUnit}
                          onChange={(e) => setFormData({ ...formData, shipOrUnit: e.target.value })}
                          placeholder="e.g. USS LCS-102, Father served 1945"
                          className="w-full px-4 py-2.5 rounded bg-navy-950 border border-white/10 text-white text-sm focus:border-gold-400 focus:outline-none transition"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-mono uppercase text-slate-400 mb-1">
                          Additional Tax-Deductible Donation ($)
                        </label>
                        <input
                          type="number"
                          min="0"
                          step="5"
                          value={formData.extraDonation}
                          onChange={(e) => setFormData({ ...formData, extraDonation: e.target.value })}
                          placeholder="0"
                          className="w-full px-4 py-2.5 rounded bg-navy-950 border border-white/10 text-white text-sm focus:border-gold-400 focus:outline-none transition font-mono"
                        />
                      </div>
                    </div>
                    <div className="mt-4">
                      <label className="block text-xs font-mono uppercase text-slate-400 mb-1">
                        Reason for Joining / Message to Crew (Optional)
                      </label>
                      <textarea
                        rows="2"
                        value={formData.reasonForJoining}
                        onChange={(e) => setFormData({ ...formData, reasonForJoining: e.target.value })}
                        placeholder="Tell the crew why preserving the 102 matters to you..."
                        className="w-full px-4 py-2.5 rounded bg-navy-950 border border-white/10 text-white text-sm focus:border-gold-400 focus:outline-none transition"
                      />
                    </div>
                  </div>

                  {/* Payment Method Selection */}
                  <div className="p-4 rounded-xl bg-navy-950 border border-white/10">
                    <h4 className="font-display text-sm font-bold uppercase tracking-wider text-gold-400 mb-3 flex items-center gap-1.5">
                      <span>💳</span> Payment Option for ${totalAmount} Total
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                      <button
                        type="button"
                        onClick={() => setPaymentMethod('paypal')}
                        className={`p-3 rounded-lg border text-left transition ${
                          paymentMethod === 'paypal'
                            ? 'border-gold-400 bg-gold-400/10 text-white'
                            : 'border-white/10 bg-navy-900 text-slate-400'
                        }`}
                      >
                        <span className="font-display font-bold text-white block">
                          Instant Online (PayPal / Credit Card)
                        </span>
                        <span className="text-[11px] text-slate-400 block mt-0.5">
                          Instant card processing directly to museum treasury
                        </span>
                      </button>

                      <button
                        type="button"
                        onClick={() => setPaymentMethod('check')}
                        className={`p-3 rounded-lg border text-left transition ${
                          paymentMethod === 'check'
                            ? 'border-gold-400 bg-gold-400/10 text-white'
                            : 'border-white/10 bg-navy-900 text-slate-400'
                        }`}
                      >
                        <span className="font-display font-bold text-white block">
                          Mail a Paper Check
                        </span>
                        <span className="text-[11px] text-slate-400 block mt-0.5">
                          Submit enrollment online and mail check to Dennis Steenbergen
                        </span>
                      </button>
                    </div>

                    <div className="text-xs text-slate-300">
                      <strong>Total Dues &amp; Gift:</strong>{' '}
                      <span className="text-gold-400 font-mono text-base font-bold">
                        ${totalAmount}
                      </span>{' '}
                      ({currentTierObj.title} {parseFloat(formData.extraDonation) > 0 && `+ $${formData.extraDonation} donation`})
                    </div>
                  </div>

                  {/* Submit CTA */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-4 rounded-xl bg-gold-500 hover:bg-gold-400 text-navy-950 font-display text-lg font-black uppercase tracking-wider transition shadow-xl shadow-gold-500/20 flex items-center justify-center gap-2"
                    >
                      {paymentMethod === 'paypal' ? (
                        <>
                          <span>💳</span> Proceed to Pay ${totalAmount} via PayPal or Card
                        </>
                      ) : (
                        <>
                          <span>✉️</span> Complete Online Enrollment &amp; Mail Check
                        </>
                      )}
                    </button>
                    <p className="text-center text-[11px] text-slate-400 font-mono mt-3">
                      Landing Craft Support Museum Corporation is an IRS-recognized 501(c)(3) nonprofit. All dues and donations are tax-deductible.
                    </p>
                  </div>
                </form>
              )}

              {/* Hidden Native PayPal Form for direct checkout */}
              <form
                id="paypal-member-form"
                action="https://www.paypal.com/cgi-bin/webscr"
                method="post"
                target="_top"
                className="hidden"
              >
                <input type="hidden" name="cmd" value="_s-xclick" />
                <input type="hidden" name="hosted_button_id" value={shipData.shipInfo.paypalHostedButtonId} />
              </form>
            </div>
          ) : (
            /* Printable Mail-In Slip (Veterans & Paper Checks) */
            <div
              id="printable-form"
              className="bg-white text-black p-8 md:p-12 rounded-xl shadow-2xl border-4 border-navy-900 print:border-0 print:p-0"
            >
              <div className="flex items-center justify-between border-b-2 border-black pb-4 mb-6">
                <div>
                  <h3 className="font-serif text-2xl font-bold uppercase tracking-wide">
                    Landing Craft Support Museum
                  </h3>
                  <p className="text-xs font-mono uppercase text-gray-700">
                    Official Association Membership Application • 501(c)(3) Nonprofit
                  </p>
                </div>
                <button
                  type="button"
                  onClick={handlePrint}
                  className="px-4 py-2 rounded bg-navy-900 text-white font-mono text-xs uppercase font-bold print:hidden hover:bg-black transition flex items-center gap-1.5"
                >
                  <span>🖨️</span> Print This Slip
                </button>
              </div>

              <div className="space-y-4 text-xs font-serif leading-relaxed">
                <p>
                  <strong>Instructions:</strong> Please fill in this slip and mail it with your check payable to <strong>Landing Craft Support Museum</strong>. Membership dues are 100% tax-deductible and directly support the maintenance and preservation of the historic <strong>USS LCS(L)(3)-102</strong> at Mare Island, California.
                </p>

                <div className="border border-black p-4 rounded space-y-3 bg-gray-50">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <strong>Full Name:</strong> ___________________________________________
                    </div>
                    <div>
                      <strong>Date:</strong> ______________________
                    </div>
                  </div>
                  <div>
                    <strong>Mailing Address:</strong> __________________________________________________________________
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    <div><strong>City:</strong> ______________________</div>
                    <div><strong>State:</strong> ____________</div>
                    <div><strong>ZIP:</strong> ____________</div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div><strong>Telephone:</strong> ________________________</div>
                    <div><strong>Email:</strong> _____________________________________</div>
                  </div>
                  <div>
                    <strong>Military Service / Ship Connection:</strong> ____________________________________________
                  </div>
                </div>

                <div className="border border-black p-4 rounded space-y-2">
                  <strong>Select Membership Dues &amp; Contribution:</strong>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div>[  ] Veteran / Active Duty Member — $20 / year</div>
                    <div>[  ] Individual Supporter — $35 / year</div>
                    <div>[  ] Family / Crew Pass — $60 / year</div>
                    <div>[  ] Life Member (Plank Owner) — $500 (one-time)</div>
                  </div>
                  <div className="pt-2 border-t border-gray-300">
                    <strong>Additional Tax-Deductible Donation:</strong> $ ______________
                  </div>
                  <div>
                    <strong>Total Amount Enclosed:</strong> $ ______________
                  </div>
                </div>

                <div className="p-4 rounded bg-amber-50 border border-amber-300">
                  <strong className="block text-sm mb-1 uppercase">Make Checks Payable To:</strong>
                  <p className="font-mono text-xs">
                    <strong>Landing Craft Support Museum</strong><br />
                    c/o Dennis A. Steenbergen, Secretary<br />
                    7345 W. Lakeside Drive<br />
                    Littleton, CO 80125
                  </p>
                  <p className="text-[11px] text-gray-600 mt-2">
                    For membership inquiries, contact Dennis Steenbergen at <code>dsteenbergen1165@gmail.com</code>.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Leadership Contact & Questions Strip */}
      <section className="py-12 px-4 bg-navy-900">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-5 rounded-lg bg-navy-950 border border-white/10">
            <h4 className="font-display text-sm font-bold uppercase text-gold-400 mb-1">
              Membership Secretary
            </h4>
            <p className="text-xs text-white font-medium">Dennis Steenbergen</p>
            <p className="text-xs text-slate-400 mt-1">
              Manages the official muster roll and ships quarterly print newsletters to all members.
            </p>
            <a href="mailto:dsteenbergen1165@gmail.com" className="text-xs font-mono text-cyan-400 hover:underline block mt-2">
              dsteenbergen1165@gmail.com
            </a>
          </div>

          <div className="p-5 rounded-lg bg-navy-950 border border-white/10">
            <h4 className="font-display text-sm font-bold uppercase text-gold-400 mb-1">
              Association Treasurer
            </h4>
            <p className="text-xs text-white font-medium">Bonnie Steenbergen</p>
            <p className="text-xs text-slate-400 mt-1">
              Administers IRS 501(c)(3) tax receipts and member dues disbursements.
            </p>
            <a href="mailto:bsteenbergen@msn.com" className="text-xs font-mono text-cyan-400 hover:underline block mt-2">
              bsteenbergen@msn.com
            </a>
          </div>

          <div className="p-5 rounded-lg bg-navy-950 border border-white/10">
            <h4 className="font-display text-sm font-bold uppercase text-gold-400 mb-1">
              Museum Skipper
            </h4>
            <p className="text-xs text-white font-medium">William "Bill" Mason</p>
            <p className="text-xs text-slate-400 mt-1">
              Coordinates docent-led shipboard tours and Boy Scout overnight encampments at Mare Island.
            </p>
            <a href="mailto:bmason6056@aol.com" className="text-xs font-mono text-cyan-400 hover:underline block mt-2">
              bmason6056@aol.com
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

