/**
 * USS LCS(L)(3)-102 "Yankee Dollar" — Landing Craft Support Museum
 * Interactive UI, Multi-Page Router & Cinematic Animation Controller
 */

document.addEventListener('DOMContentLoaded', () => {
  // 0. Ensure Browser Tab Title reflects the Museum Name
  document.title = 'USS LCS-102 "Yankee Dollar" | Landing Craft Support Museum';

  // 1. Sticky Header Scroll Effect + Top Reading Progress Bar
  const header = document.querySelector('.lcs-header');
  let progressBar = null;
  if (header) {
    progressBar = document.createElement('div');
    progressBar.className = 'lcs-scroll-progress';
    header.appendChild(progressBar);

    const updateScrollUI = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      if (scrollTop > 30) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }

      if (progressBar) {
        const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const pct = docHeight > 0 ? Math.min(100, Math.max(0, (scrollTop / docHeight) * 100)) : 0;
        progressBar.style.width = `${pct}%`;
      }
    };

    window.addEventListener('scroll', updateScrollUI, { passive: true });
    updateScrollUI();
  }

  // 2. Mobile Navigation Toggle
  const mobileToggle = document.querySelector('.lcs-mobile-toggle');
  const nav = document.querySelector('.lcs-nav');
  if (mobileToggle && nav) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('open');
      mobileToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      mobileToggle.innerHTML = isOpen ? '✕' : '☰';
    });

    nav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        nav.classList.remove('open');
        mobileToggle.setAttribute('aria-expanded', 'false');
        mobileToggle.innerHTML = '☰';
      });
    });
  }

  // 3. Staggered Scroll-Reveal Animation Engine (IntersectionObserver)
  const revealGroups = [
    { selector: '.lcs-section-header', stagger: 0 },
    { selector: '.lcs-virtual-banner', stagger: 0 },
    { selector: '.lcs-deck-explorer', stagger: 0 },
    { selector: '.lcs-objective-card', stagger: 75 },
    { selector: '.lcs-photo-collage', stagger: 100 },
    { selector: '.lcs-stats-bar', stagger: 0 },
    { selector: '.lcs-blueprint-table', stagger: 0 },
    { selector: '.lcs-era-card', stagger: 90 },
    { selector: '.lcs-donate-box, .lcs-check-card', stagger: 100 },
    { selector: '.lcs-gallery-item', stagger: 55 },
    { selector: '.lcs-info-card', stagger: 110 },
    { selector: '.lcs-comm-card', stagger: 95 },
    { selector: '.lcs-crew-card', stagger: 75 },
    { selector: '.lcs-membership-form-card', stagger: 0 },
  ];

  const allRevealEls = [];
  revealGroups.forEach((group) => {
    const nodes = document.querySelectorAll(group.selector);
    nodes.forEach((el, idx) => {
      el.classList.add('lcs-reveal');
      if (group.stagger > 0) {
        const delayMs = (idx % 6) * group.stagger;
        el.style.setProperty('--reveal-delay', `${delayMs}ms`);
      }
      allRevealEls.push(el);
    });
  });

  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -30px 0px' }
    );
    allRevealEls.forEach((el) => revealObserver.observe(el));
  } else {
    allRevealEls.forEach((el) => el.classList.add('is-visible'));
  }

  // 4. Animated Naval Technical Stat Counter
  const statsBar = document.querySelector('.lcs-stats-bar');
  let statsAnimated = false;
  const statTargets = [
    { text: '158\' 0"', end: 158, format: (v) => `${Math.round(v)}' 0"` },
    { text: '387 TONS', end: 387, format: (v) => `${Math.round(v)} TONS` },
    { text: '16.5 KTS', end: 16.5, format: (v) => `${v.toFixed(1)} KTS` },
    { text: '71 CREW', end: 71, format: (v) => `${Math.round(v)} CREW` },
    { text: '10× MK 7', end: 10, format: (v) => `${Math.round(v)}× MK 7` },
    { text: '1 OF 130', end: 130, format: (v) => `1 OF ${Math.round(v)}` },
  ];

  function animateStats() {
    if (statsAnimated || !statsBar) return;
    statsAnimated = true;
    const numEls = statsBar.querySelectorAll('.lcs-stat-num');
    numEls.forEach((el, idx) => {
      const cfg = statTargets[idx];
      if (!cfg) return;
      const duration = 1350;
      const startTime = performance.now();

      function tick(now) {
        const elapsed = now - startTime;
        const progress = Math.min(1, elapsed / duration);
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = cfg.end * eased;
        el.textContent = progress < 1 ? cfg.format(current) : cfg.text;
        if (progress < 1) {
          requestAnimationFrame(tick);
        }
      }
      requestAnimationFrame(tick);
    });
  }

  if (statsBar && 'IntersectionObserver' in window) {
    const statObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateStats();
            statObserver.disconnect();
          }
        });
      },
      { threshold: 0.25 }
    );
    statObserver.observe(statsBar);
  }

  // 5. Multi-Page View Router + All-in-One Scroll Controller
  const heroSection = document.querySelector('.lcs-hero');
  const subpageBanner = document.getElementById('lcs-subpage-banner');
  const subpageCrumb = document.getElementById('lcs-subpage-crumb');
  const subpageHeading = document.getElementById('lcs-subpage-heading');
  const allSections = [
    'virtual-museum',
    'about-museum',
    'ship-history',
    'donate',
    'photo-archive',
    'visit',
    'community',
  ];

  const pageConfig = {
    home: {
      title: 'Home Overview',
      heading: 'USS LCS(L)(3)-102 — Landing Craft Support Museum',
      sections: allSections,
    },
    'virtual-museum': {
      title: 'Virtual Online Museum',
      heading: '🌐 The USS LCS-102 Online Virtual Museum & Digital Twin',
      sections: ['virtual-museum', 'donate'],
    },
    'about-museum': {
      title: 'The Ship & Specifications',
      heading: '⚓ About USS LCS(L)(3)-102, Six Objectives & Technical Blueprint',
      sections: ['about-museum', 'donate'],
    },
    'ship-history': {
      title: 'WWII "Mighty Midget" History',
      heading: '📜 History of the WWII "Mighty Midgets" & USS LCS-102',
      sections: ['ship-history', 'about-museum'],
    },
    'photo-archive': {
      title: 'Archival Photo Gallery',
      heading: '📷 Official USS LCS-102 Historical & Restoration Photo Archive',
      sections: ['photo-archive', 'donate'],
    },
    visit: {
      title: 'Plan Your Visit & Overnight Stays',
      heading: '📍 Plan Your Mare Island Visit & Youth Overnight Stays',
      sections: ['visit', 'donate'],
    },
    community: {
      title: 'Volunteer Crew, Events & Membership',
      heading: '🛠️ All-Volunteer Crew, Newsletters & Museum Membership',
      sections: ['community', 'donate'],
    },
    donate: {
      title: '501(c)(3) Fundraising & Preservation',
      heading: '❤️ Support & Preserve the Last Surviving WWII "Mighty Midget"',
      sections: ['donate', 'community'],
    },
  };

  function navigateToPage(pageKey) {
    const cfg = pageConfig[pageKey] || pageConfig.home;

    if (pageKey === 'home') {
      if (heroSection) heroSection.classList.remove('lcs-page-section-hidden');
      if (subpageBanner) subpageBanner.classList.remove('active');
    } else {
      if (heroSection) heroSection.classList.add('lcs-page-section-hidden');
      if (subpageBanner) {
        subpageBanner.classList.remove('lcs-page-enter');
        void subpageBanner.offsetWidth;
        subpageBanner.classList.add('active', 'lcs-page-enter');
        if (subpageCrumb) subpageCrumb.textContent = cfg.title;
        if (subpageHeading) subpageHeading.textContent = cfg.heading;
      }
    }

    allSections.forEach((secId) => {
      const el = document.getElementById(secId);
      if (!el) return;
      if (cfg.sections.includes(secId)) {
        el.classList.remove('lcs-page-section-hidden', 'lcs-page-enter');
        void el.offsetWidth;
        el.classList.add('lcs-page-enter');
        el.querySelectorAll('.lcs-reveal').forEach((r) => r.classList.add('is-visible'));
      } else {
        el.classList.add('lcs-page-section-hidden');
      }
    });

    if (cfg.sections.includes('about-museum')) {
      animateStats();
    }

    document.querySelectorAll('.lcs-nav-link').forEach((navLink) => {
      const linkPage = navLink.getAttribute('data-page-link');
      if (linkPage === pageKey) {
        navLink.classList.add('active');
      } else {
        navLink.classList.remove('active');
      }
    });

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  document.querySelectorAll('[data-page-link]').forEach((link) => {
    link.addEventListener('click', (e) => {
      const targetPage = link.getAttribute('data-page-link');
      if (targetPage && pageConfig[targetPage]) {
        e.preventDefault();
        navigateToPage(targetPage);
      }
    });
  });

  // 6. Interactive Virtual Museum Deck Explorer Tabs
  const deckTabs = document.querySelectorAll('.lcs-deck-tab');
  const deckPanels = document.querySelectorAll('.lcs-deck-panel');
  if (deckTabs.length && deckPanels.length) {
    deckTabs.forEach((tab) => {
      tab.addEventListener('click', () => {
        const target = tab.getAttribute('data-station');
        deckTabs.forEach((t) => t.classList.remove('active'));
        deckPanels.forEach((p) => p.classList.remove('active'));

        tab.classList.add('active');
        const activePanel = document.getElementById(`station-${target}`);
        if (activePanel) {
          void activePanel.offsetWidth;
          activePanel.classList.add('active');
        }
      });
    });
  }

  // 7. Interactive Donation Tier Selector
  const tierBtns = document.querySelectorAll('.lcs-tier-btn');
  const selectedTierText = document.getElementById('lcs-selected-tier-summary');
  if (tierBtns.length) {
    tierBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        tierBtns.forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
        const amount = btn.getAttribute('data-amount');
        const label = btn.getAttribute('data-label');
        const impact = btn.getAttribute('data-impact');
        if (selectedTierText) {
          selectedTierText.style.opacity = '0.4';
          setTimeout(() => {
            selectedTierText.innerHTML = `Selected Gift: <strong>${amount} — ${label}</strong> (${impact})`;
            selectedTierText.style.transition = 'opacity 0.25s ease';
            selectedTierText.style.opacity = '1';
          }, 100);
        }
      });
    });
  }

  // 8. Archival Photo Gallery Filtering with Staggered Pop-In Animation
  const filterBtns = document.querySelectorAll('.lcs-filter-btn');
  const galleryItems = document.querySelectorAll('.lcs-gallery-item');
  if (filterBtns.length && galleryItems.length) {
    filterBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        const category = btn.getAttribute('data-filter');
        filterBtns.forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');

        let visibleIndex = 0;
        galleryItems.forEach((item) => {
          const itemCat = item.getAttribute('data-category');
          item.classList.remove('pop-in');
          if (category === 'all' || itemCat === category) {
            item.classList.remove('hidden');
            item.style.animationDelay = `${visibleIndex * 45}ms`;
            void item.offsetWidth;
            item.classList.add('pop-in', 'is-visible');
            visibleIndex++;
          } else {
            item.classList.add('hidden');
          }
        });
      });
    });
  }

  // 9. Photo Lightbox Modal
  const lightboxModal = document.getElementById('lcs-lightbox-modal');
  const lightboxImg = document.getElementById('lcs-lightbox-img');
  const lightboxTitle = document.getElementById('lcs-lightbox-title');
  const lightboxDesc = document.getElementById('lcs-lightbox-desc');
  const lightboxTag = document.getElementById('lcs-lightbox-tag');

  if (lightboxModal && galleryItems.length) {
    galleryItems.forEach((item) => {
      item.addEventListener('click', () => {
        const imgEl = item.querySelector('img');
        const titleEl = item.querySelector('.lcs-gallery-title');
        const descEl = item.querySelector('.lcs-gallery-desc');
        const tagEl = item.querySelector('.lcs-gallery-tag');

        if (imgEl && lightboxImg) {
          lightboxImg.src = imgEl.src;
          lightboxImg.alt = imgEl.alt || '';
        }
        if (titleEl && lightboxTitle) lightboxTitle.textContent = titleEl.textContent;
        if (descEl && lightboxDesc) lightboxDesc.textContent = descEl.textContent;
        if (tagEl && lightboxTag) lightboxTag.textContent = tagEl.textContent;

        lightboxModal.classList.add('open');
      });
    });
  }

  // 10. Virtual Museum Portal Modal Trigger
  const virtualModal = document.getElementById('lcs-virtual-modal');
  const virtualTriggers = document.querySelectorAll('[data-open-virtual-modal]');
  if (virtualModal && virtualTriggers.length) {
    virtualTriggers.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        virtualModal.classList.add('open');
      });
    });
  }

  // 11. Membership Application Form Handler
  const memForm = document.getElementById('lcs-membership-form');
  const memStatus = document.getElementById('lcs-mem-status');
  if (memForm) {
    memForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = (document.getElementById('mem-name') || {}).value || '';
      const email = (document.getElementById('mem-email') || {}).value || '';
      const phone = (document.getElementById('mem-phone') || {}).value || '';
      const relation = (document.getElementById('mem-relation') || {}).value || '';
      const address = (document.getElementById('mem-address') || {}).value || '';

      const subject = encodeURIComponent(`LCS Museum Membership Application — ${name}`);
      const body = encodeURIComponent(
        `Landing Craft Support Museum Membership Application\n\n` +
          `Name: ${name}\n` +
          `Email: ${email}\n` +
          `Phone: ${phone}\n` +
          `Ship / Veteran Connection: ${relation}\n` +
          `Mailing Address: ${address}\n`
      );
      window.location.href = `mailto:dsteenbergen1165@gmail.com?subject=${subject}&body=${body}`;
      if (memStatus) {
        memStatus.textContent = '✓ Application prepared! Complete sending in your email client.';
      }
    });
  }

  // Close Modals
  document.querySelectorAll('.lcs-modal-close, .lcs-modal-backdrop').forEach((el) => {
    el.addEventListener('click', (e) => {
      if (e.target.classList.contains('lcs-modal-backdrop') || e.target.classList.contains('lcs-modal-close')) {
        document.querySelectorAll('.lcs-modal-backdrop.open').forEach((m) => m.classList.remove('open'));
      }
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.lcs-modal-backdrop.open').forEach((m) => m.classList.remove('open'));
    }
  });
});
