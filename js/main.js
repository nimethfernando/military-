/**
 * USS LCS(L)(3)-102 "Yankee Dollar" — Landing Craft Support Museum
 * Interactive UI Controller (Standalone & Squarespace Code Block Compatible)
 */

document.addEventListener('DOMContentLoaded', () => {
  // 0. Ensure Browser Tab Title reflects the Museum Name (even inside Squarespace)
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

  // 3. Interactive Virtual Museum Deck Explorer Tabs
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

  // 4. Interactive Donation Tier Selector
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

  // 5. Archival Photo Gallery Filtering
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

  // 6. Photo Lightbox Modal
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

  // 7. Virtual Museum Portal Modal Trigger
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

