/**
 * USS LCS(L)(3)-102 "Yankee Dollar" — Landing Craft Support Museum
 * Interactive UI, Multi-Page Router & Cinematic Animation Controller
 */

document.addEventListener('DOMContentLoaded', () => {
  // 0. Ensure Browser Tab Title reflects the Museum Name
  document.title = 'USS LCS-102 "Yankee Dollar" | Landing Craft Support Museum';

  // 0a. Squarespace 7.1 Auto-Cleanup: Hide default "Your Site" header, footer, "Empty Page", "Title" & stray raw CSS text
  const lcsRoot = document.querySelector('.lcs-site');
  function cleanSquarespaceDOM() {
    if (!lcsRoot) return;
    document.querySelectorAll('header#header, .header, footer#footer-sections, .footer-sections').forEach((el) => {
      el.style.setProperty('display', 'none', 'important');
    });
    document.querySelectorAll('.sqs-block, .sqs-block-code, .fe-block, section.page-section, article#sections > section').forEach((el) => {
      if (!el.contains(lcsRoot) && !lcsRoot.contains(el)) {
        el.style.setProperty('display', 'none', 'important');
      }
    });

    // Walk up from .lcs-site to document.body and hide any sibling elements + wipe stray raw TextNodes (e.g. accidentally pasted CSS)
    let curr = lcsRoot;
    while (curr) {
      const parent = curr.parentElement;
      if (!parent) break;
      Array.from(parent.childNodes).forEach((node) => {
        if (node.nodeType === 3 && (node.textContent || '').trim().length > 0) {
          node.textContent = '';
        } else if (node.nodeType === 1 && node !== curr && !['STYLE', 'SCRIPT', 'LINK', 'SVG'].includes(node.tagName)) {
          if (!node.contains(lcsRoot) && !lcsRoot.contains(node)) {
            node.style.setProperty('display', 'none', 'important');
          }
        }
      });
      if (parent === document.body) break;
      curr = parent;
    }

    // Also hide any dynamically injected Squarespace "Empty Page" notice or stray CSS dumps
    document.querySelectorAll('div, section, p, pre, code, h1, h2, h3, span').forEach((el) => {
      if (!el.contains(lcsRoot) && !lcsRoot.contains(el)) {
        const txt = (el.textContent || '').trim();
        if (
          txt === 'Empty Page' ||
          txt === 'Create a beautiful page by adding and combining sections.' ||
          txt.includes('@import url') ||
          txt.includes('--navy-950')
        ) {
          el.style.setProperty('display', 'none', 'important');
        }
      }
    });
  }

  cleanSquarespaceDOM();
  window.addEventListener('load', cleanSquarespaceDOM);
  setTimeout(cleanSquarespaceDOM, 450);
  setTimeout(cleanSquarespaceDOM, 1400);

  // 0b. Ensure Hero Drone Video runs with Optical HD Unsharp Mask & Deblocking Filter
  const heroVideo = document.querySelector('.lcs-hero-video');
  if (heroVideo) {
    heroVideo.style.filter = 'url(#lcs-video-sharpen)';
  }

  // 1. Sticky Header Scroll Effect + Top Reading Progress Bar + Intrepid Scroll-Scrubbed Ship Bow Wipe
  const header = document.querySelector('.lcs-header');
  const bowPathMain = document.getElementById('lcs-bow-path-main');
  const bowPathAccent = document.getElementById('lcs-bow-path-accent');
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

      // Intrepid Museum ScrollLottie.js / AircraftHead.js Ship Bow Silhouette Morph
      if (bowPathMain && bowPathAccent) {
        const rawProgress = Math.min(1, Math.max(0, scrollTop / 520));
        // Intrepid easeOut curve
        const p = 1 - Math.pow(1 - rawProgress, 2.6);
        const edgeY = Math.round(180 * (1 - p));
        const chineLeftX = Math.round(340 * (1 - p));
        const chineRightX = Math.round(940 + (1280 - 940) * p);
        const chineMainY = Math.round(98 * (1 - p));
        const chineAccentY = Math.round(92 * (1 - p));
        const apexMainY = Math.round(16 * (1 - p));
        const apexAccentY = Math.round(8 * (1 - p));

        bowPathMain.setAttribute(
          'd',
          `M 0,${edgeY} L ${chineLeftX},${chineMainY} L 640,${apexMainY} L ${chineRightX},${chineMainY} L 1280,${edgeY} L 1280,180 L 0,180 Z`
        );
        bowPathAccent.setAttribute(
          'd',
          `M 0,${edgeY} L ${chineLeftX},${chineAccentY} L 640,${apexAccentY} L ${chineRightX},${chineAccentY} L 1280,${edgeY} L 1280,180 L 0,180 Z`
        );
      }
    };

    window.addEventListener('scroll', updateScrollUI, { passive: true });
    updateScrollUI();
  }

  // 2. Mobile Navigation Toggle (Intrepid 3-Slice 225deg Hamburger Morph + Staggered Menu Slide-In)
  const mobileToggle = document.querySelector('.lcs-mobile-toggle');
  const nav = document.querySelector('.lcs-nav');
  if (mobileToggle && nav) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('open');
      mobileToggle.classList.toggle('active', isOpen);
      mobileToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    nav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        nav.classList.remove('open');
        mobileToggle.classList.remove('active');
        mobileToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // 2b. Inject Intrepid Delta-Jet Arrowhead + 3-Bar Speed-Trail CTAs into Era & Gallery Cards
  document.querySelectorAll('.lcs-era-card .lcs-era-body').forEach((body) => {
    if (!body.querySelector('.lcs-intrepid-cta')) {
      const cta = document.createElement('div');
      cta.className = 'lcs-intrepid-cta';
      cta.textContent = 'Inspect Historical Record';
      body.appendChild(cta);
    }
  });
  document.querySelectorAll('.lcs-gallery-item .lcs-gallery-meta').forEach((meta) => {
    if (!meta.querySelector('.lcs-intrepid-cta')) {
      const cta = document.createElement('div');
      cta.className = 'lcs-intrepid-cta';
      cta.textContent = 'Enlarge Archival Photo';
      meta.appendChild(cta);
    }
  });

  // 3. Staggered Scroll-Reveal Animation Engine (Intrepid ParallaxGrid.js style)
  const revealGroups = [
    { selector: '.lcs-section-header', stagger: 0 },
    { selector: '.lcs-virtual-banner', stagger: 0 },
    { selector: '.lcs-deck-explorer', stagger: 0 },
    { selector: '.lcs-objective-card', stagger: 100 },
    { selector: '.lcs-photo-collage', stagger: 100 },
    { selector: '.lcs-stats-bar', stagger: 0 },
    { selector: '.lcs-blueprint-table', stagger: 0 },
    { selector: '.lcs-era-card', stagger: 100 },
    { selector: '.lcs-donate-box, .lcs-check-card', stagger: 100 },
    { selector: '.lcs-gallery-item', stagger: 80 },
    { selector: '.lcs-info-card', stagger: 100 },
    { selector: '.lcs-comm-card', stagger: 100 },
    { selector: '.lcs-crew-card', stagger: 90 },
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
          } else {
            entry.target.classList.remove('is-visible');
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -24px 0px' }
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

  if (lightboxModal) {
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

    document.querySelectorAll('.lcs-era-card').forEach((card) => {
      card.style.cursor = 'pointer';
      card.addEventListener('click', () => {
        const imgEl = card.querySelector('img');
        const titleEl = card.querySelector('h3');
        const descEl = card.querySelector('p');
        const tagEl = card.querySelector('.lcs-era-year');

        if (imgEl && lightboxImg) {
          lightboxImg.src = imgEl.src;
          lightboxImg.alt = imgEl.alt || '';
        }
        if (titleEl && lightboxTitle) lightboxTitle.textContent = titleEl.textContent;
        if (descEl && lightboxDesc) lightboxDesc.textContent = descEl.textContent;
        if (tagEl && lightboxTag) lightboxTag.textContent = `HISTORICAL ERA • ${tagEl.textContent}`;

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

  // 10B. ThingLink 360° Virtual Museum Theater Scene & Mode Switcher
  const thinglinkIframe = document.getElementById('lcs-thinglink-iframe');
  const thinglinkExternalBtn = document.getElementById('lcs-thinglink-external-btn');
  const activeTourTitle = document.getElementById('lcs-active-tour-title');
  const activeTourDesc = document.getElementById('lcs-active-tour-desc');
  const sceneButtons = document.querySelectorAll('[data-thinglink-scene]');

  if (thinglinkIframe && sceneButtons.length) {
    sceneButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        const sceneId = btn.getAttribute('data-thinglink-scene');
        const tourTitle = btn.getAttribute('data-tour-title');
        const tourDesc = btn.getAttribute('data-tour-desc');
        if (!sceneId) return;

        const cardUrl = `https://www.thinglink.com/card/${sceneId}`;
        const viewUrl = `https://www.thinglink.com/view/scene/${sceneId}`;

        if (thinglinkIframe.getAttribute('src') !== cardUrl) {
          thinglinkIframe.setAttribute('src', cardUrl);
        }
        if (thinglinkExternalBtn) {
          thinglinkExternalBtn.setAttribute('href', viewUrl);
        }
        if (tourTitle && activeTourTitle) {
          activeTourTitle.textContent = tourTitle;
        }
        if (tourDesc && activeTourDesc) {
          activeTourDesc.textContent = tourDesc;
        }

        // Sync active classes across mode buttons and quick-jump pills
        document.querySelectorAll('.lcs-tour-mode-btn').forEach((mBtn) => {
          mBtn.classList.toggle('active', mBtn.getAttribute('data-thinglink-scene') === sceneId);
        });
        document.querySelectorAll('.lcs-scene-pill').forEach((pBtn) => {
          pBtn.classList.toggle('active', pBtn.getAttribute('data-thinglink-scene') === sceneId);
        });

        // If triggered from a lower Deck Explorer Station, scroll smoothly to the 360° Theater
        if (btn.closest('.lcs-deck-panel')) {
          const theaterEl = document.getElementById('lcs-thinglink-theater');
          if (theaterEl) {
            theaterEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }
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
      const phone = (document.getElementById('mem-phone') || {}).value || 'Not provided';
      const relation = (document.getElementById('mem-relation') || {}).value || 'Supporter / Friend of the Museum';
      const address = (document.getElementById('mem-address') || {}).value || 'Not provided';

      const plainBody =
        `Landing Craft Support Museum — Official Membership Application\n` +
        `--------------------------------------------------------------\n` +
        `Full Name: ${name}\n` +
        `Email Address: ${email}\n` +
        `Phone Number: ${phone}\n` +
        `WWII Veteran / Ship Connection: ${relation}\n` +
        `Mailing Address: ${address}\n`;

      const subject = encodeURIComponent(`LCS Museum Membership Application — ${name}`);
      const body = encodeURIComponent(plainBody);
      const mailtoUrl = `mailto:dsteenbergen1165@gmail.com?subject=${subject}&body=${body}`;
      const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=dsteenbergen1165@gmail.com&su=${subject}&body=${body}`;

      if (memStatus) {
        memStatus.style.display = 'block';
        memStatus.style.width = '100%';
        memStatus.style.marginTop = '0.75rem';
        memStatus.innerHTML = `
          <div style="background:#f0fdf4;border:1px solid #16a34a;border-radius:8px;padding:1rem 1.25rem;color:#052e16;">
            <div style="font-weight:700;font-size:0.98rem;margin-bottom:0.35rem;color:#15803d;">
              ✅ Membership Application Prepared for Museum Secretary Dennis Steenbergen
            </div>
            <p style="margin:0 0 0.75rem;font-size:0.86rem;color:#166534;">
              Your enrollment details for <strong>${name}</strong> (${email}) have been formatted for <strong>dsteenbergen1165@gmail.com</strong>. If your email app did not open automatically, choose an option below:
            </p>
            <div style="display:flex;gap:0.6rem;flex-wrap:wrap;">
              <a href="${mailtoUrl}" class="lcs-btn lcs-btn-sm lcs-btn-crimson" style="text-decoration:none;">
                📧 Open Default Email App
              </a>
              <a href="${gmailUrl}" target="_blank" rel="noopener" class="lcs-btn lcs-btn-sm" style="background:#091526;color:#fff;text-decoration:none;">
                🌐 Send via Gmail Web ↗
              </a>
              <button type="button" id="lcs-copy-mem-btn" class="lcs-btn lcs-btn-sm" style="background:#e2e8f0;color:#050c16;border:1px solid #94a3b8;">
                📋 Copy Application Details
              </button>
            </div>
          </div>
        `;
        const copyBtn = document.getElementById('lcs-copy-mem-btn');
        if (copyBtn && navigator.clipboard) {
          copyBtn.addEventListener('click', () => {
            navigator.clipboard.writeText(plainBody);
            copyBtn.textContent = '✓ Copied to Clipboard!';
          });
        }
      }

      window.location.href = mailtoUrl;
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
