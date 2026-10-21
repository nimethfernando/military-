/**
 * USS LCS(L)(3)-102 "Yankee Dollar" — Landing Craft Support Museum
 * Interactive UI & Multi-Page View Controller (Standalone & Squarespace 7.1 Compatible)
 */

document.addEventListener('DOMContentLoaded', () => {
  // 0. Ensure Browser Tab Title reflects the Museum Name
  document.title = 'USS LCS-102 "Yankee Dollar" | Landing Craft Support Museum';

  // 1. Sticky Header Scroll Effect
  const header = document.querySelector('.lcs-header');
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 30) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
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

  // 3. Multi-Page View Router + All-in-One Scroll Controller
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

    // Toggle Hero vs Subpage Banner
    if (pageKey === 'home') {
      if (heroSection) heroSection.classList.remove('lcs-page-section-hidden');
      if (subpageBanner) subpageBanner.classList.remove('active');
    } else {
      if (heroSection) heroSection.classList.add('lcs-page-section-hidden');
      if (subpageBanner) {
        subpageBanner.classList.add('active');
        if (subpageCrumb) subpageCrumb.textContent = cfg.title;
        if (subpageHeading) subpageHeading.textContent = cfg.heading;
      }
    }

    // Show/Hide Sections for Dedicated Multi-Page Feel
    allSections.forEach((secId) => {
      const el = document.getElementById(secId);
      if (!el) return;
      if (cfg.sections.includes(secId)) {
        el.classList.remove('lcs-page-section-hidden');
      } else {
        el.classList.add('lcs-page-section-hidden');
      }
    });

    // Update Active Nav Link
    document.querySelectorAll('.lcs-nav-link').forEach((navLink) => {
      const linkPage = navLink.getAttribute('data-page-link');
      if (linkPage === pageKey) {
        navLink.classList.add('active');
      } else {
        navLink.classList.remove('active');
      }
    });

    // Scroll cleanly to top of the page
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

  // 4. Interactive Virtual Museum Deck Explorer Tabs
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
          activePanel.classList.add('active');
        }
      });
    });
  }

  // 5. Interactive Donation Tier Selector
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
          selectedTierText.innerHTML = `Selected Gift: <strong>${amount} — ${label}</strong> (${impact})`;
        }
      });
    });
  }

  // 6. Archival Photo Gallery Filtering
  const filterBtns = document.querySelectorAll('.lcs-filter-btn');
  const galleryItems = document.querySelectorAll('.lcs-gallery-item');
  if (filterBtns.length && galleryItems.length) {
    filterBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        const category = btn.getAttribute('data-filter');
        filterBtns.forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');

        galleryItems.forEach((item) => {
          const itemCat = item.getAttribute('data-category');
          if (category === 'all' || itemCat === category) {
            item.classList.remove('hidden');
          } else {
            item.classList.add('hidden');
          }
        });
      });
    });
  }

  // 7. Photo Lightbox Modal
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

  // 8. Virtual Museum Portal Modal Trigger
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

  // 9. Membership Application Form Handler
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
