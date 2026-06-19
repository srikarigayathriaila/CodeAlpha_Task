/* ============================
   Lumen Gallery — JavaScript
   ============================ */

// --- Sample image data (Unsplash) ---
const u = (id, w = 800) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

const IMAGES = [
  // Nature
  { id: 1,  title: 'Misty Mountains',     category: 'nature',     src: u('1506905925346-21bda4d32df4') },
  { id: 2,  title: 'Forest Path',         category: 'nature',     src: u('1441974231531-c6227db76b6e') },
  { id: 3,  title: 'Ocean Waves',         category: 'nature',     src: u('1505142468610-359e7d316be0') },
  { id: 4,  title: 'Autumn Trail',        category: 'nature',     src: u('1500382017468-9049fed747ef') },

  // Animals
  { id: 5,  title: 'Majestic Lion',       category: 'animals',    src: u('1546182990-dffeafbe841d') },
  { id: 6,  title: 'Curious Fox',         category: 'animals',    src: u('1474511320723-9a56873867b5') },
  { id: 7,  title: 'Wild Horse',          category: 'animals',    src: u('1553284965-83fd3e82fa5a') },
  { id: 8,  title: 'Tropical Bird',       category: 'animals',    src: u('1444464666168-49d633b86797') },

  // Cities
  { id: 9,  title: 'Tokyo Nights',        category: 'cities',     src: u('1542051841857-5f90071e7989') },
  { id: 10, title: 'New York Skyline',    category: 'cities',     src: u('1496442226666-8d4d0e62e6e9') },
  { id: 11, title: 'Paris Streets',       category: 'cities',     src: u('1502602898657-3e91760cbb34') },
  { id: 12, title: 'London Bridge',       category: 'cities',     src: u('1513635269975-59663e0ac1ad') },

  // Technology
  { id: 13, title: 'Circuit Glow',        category: 'technology', src: u('1518770660439-4636190af475') },
  { id: 14, title: 'Workspace Setup',     category: 'technology', src: u('1496262967815-132206202600') },
  { id: 15, title: 'Code on Screen',      category: 'technology', src: u('1461749280684-dccba630e2f6') },
  { id: 16, title: 'Modern Laptop',       category: 'technology', src: u('1517336714731-489689fd1ca8') },

  // Space
  { id: 17, title: 'Milky Way',           category: 'space',      src: u('1462331940025-496dfbfc7564') },
  { id: 18, title: 'Lunar Surface',       category: 'space',      src: u('1532012197267-da84d127e765') },
  { id: 19, title: 'Distant Nebula',      category: 'space',      src: u('1419242902214-272b3f66ee7a') },
  { id: 20, title: 'Galactic Core',       category: 'space',      src: u('1465101046530-73398c7f28ca') },

  // Abstract
  { id: 21, title: 'Color Burst',         category: 'abstract',   src: u('1541701494587-cb58502866ab') },
  { id: 22, title: 'Liquid Flow',         category: 'abstract',   src: u('1557672172-298e090bd0f1') },
  { id: 23, title: 'Geometric Light',     category: 'abstract',   src: u('1550859492-d5da9d8e45f3') },
  { id: 24, title: 'Neon Waves',          category: 'abstract',   src: u('1558591710-4b4a1ae0f04d') },
];

const CATEGORIES = ['nature', 'animals', 'cities', 'technology', 'space', 'abstract'];

// --- DOM refs ---
const grid       = document.getElementById('grid');
const catGrid    = document.getElementById('catGrid');
const filters    = document.getElementById('filters');
const searchInput= document.getElementById('searchInput');
const emptyState = document.getElementById('emptyState');
const lightbox   = document.getElementById('lightbox');
const lbImg      = document.getElementById('lbImg');
const lbTitle    = document.getElementById('lbTitle');
const lbCategory = document.getElementById('lbCategory');
const lbClose    = document.getElementById('lbClose');
const lbPrev     = document.getElementById('lbPrev');
const lbNext     = document.getElementById('lbNext');
const navToggle  = document.getElementById('navToggle');
const navLinks   = document.getElementById('navLinks');
const navbar     = document.getElementById('navbar');

let currentFilter = 'all';
let currentQuery  = '';
let visibleImages = [...IMAGES];
let currentIndex  = 0;

// --- Featured categories cards ---
function renderCategories() {
  catGrid.innerHTML = CATEGORIES.map(cat => {
    const cover = IMAGES.find(i => i.category === cat).src;
    const label = cat.charAt(0).toUpperCase() + cat.slice(1);
    return `<a href="#gallery" class="cat-card" data-cat="${cat}" style="--bg-img:url('${cover}')"><span>${label}</span></a>`;
  }).join('');

  catGrid.querySelectorAll('.cat-card').forEach(card => {
    card.addEventListener('click', e => {
      const cat = card.dataset.cat;
      setFilter(cat);
    });
  });
}

// --- Render gallery ---
function render() {
  visibleImages = IMAGES.filter(img => {
    const matchesFilter = currentFilter === 'all' || img.category === currentFilter;
    const q = currentQuery.trim().toLowerCase();
    const matchesQuery = !q || img.title.toLowerCase().includes(q) || img.category.toLowerCase().includes(q);
    return matchesFilter && matchesQuery;
  });

  emptyState.hidden = visibleImages.length > 0;

  grid.innerHTML = visibleImages.map((img, idx) => `
    <div class="card" data-index="${idx}" style="animation-delay:${idx * 40}ms">
      <img loading="lazy" data-src="${img.src}" alt="${img.title} — ${img.category}" />
      <div class="card-overlay">
        <span class="card-cat">${img.category}</span>
        <h3 class="card-title">${img.title}</h3>
      </div>
    </div>
  `).join('');

  // Lazy-load via IntersectionObserver + reveal on load
  const imgs = grid.querySelectorAll('img');
  const io = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        el.src = el.dataset.src;
        el.addEventListener('load', () => el.classList.add('loaded'));
        obs.unobserve(el);
      }
    });
  }, { rootMargin: '200px' });
  imgs.forEach(img => io.observe(img));

  // Open lightbox on card click
  grid.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => openLightbox(Number(card.dataset.index)));
  });
}

// --- Filters ---
function setFilter(filter) {
  currentFilter = filter;
  filters.querySelectorAll('.filter-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.filter === filter);
  });
  render();
}

filters.addEventListener('click', e => {
  const btn = e.target.closest('.filter-btn');
  if (!btn) return;
  setFilter(btn.dataset.filter);
});

// --- Search ---
searchInput.addEventListener('input', e => {
  currentQuery = e.target.value;
  render();
});

// --- Lightbox ---
function openLightbox(index) {
  currentIndex = index;
  updateLightbox();
  lightbox.classList.add('open');
  lightbox.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}
function closeLightbox() {
  lightbox.classList.remove('open');
  lightbox.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}
function updateLightbox() {
  const img = visibleImages[currentIndex];
  if (!img) return;
  lbImg.src = img.src.replace('w=800', 'w=1600');
  lbImg.alt = img.title;
  lbTitle.textContent = img.title;
  lbCategory.textContent = img.category;
}
function nextImage() {
  if (!visibleImages.length) return;
  currentIndex = (currentIndex + 1) % visibleImages.length;
  updateLightbox();
}
function prevImage() {
  if (!visibleImages.length) return;
  currentIndex = (currentIndex - 1 + visibleImages.length) % visibleImages.length;
  updateLightbox();
}

lbClose.addEventListener('click', closeLightbox);
lbNext.addEventListener('click', nextImage);
lbPrev.addEventListener('click', prevImage);
lightbox.addEventListener('click', e => { if (e.target === lightbox) closeLightbox(); });

document.addEventListener('keydown', e => {
  if (!lightbox.classList.contains('open')) return;
  if (e.key === 'Escape')      closeLightbox();
  if (e.key === 'ArrowRight')  nextImage();
  if (e.key === 'ArrowLeft')   prevImage();
});

// --- Mobile nav toggle ---
navToggle.addEventListener('click', () => navLinks.classList.toggle('open'));
navLinks.addEventListener('click', e => {
  if (e.target.tagName === 'A') navLinks.classList.remove('open');
});

// --- Scroll-aware navbar ---
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 30);
});

// --- Footer year ---
document.getElementById('year').textContent = new Date().getFullYear();

// --- Init ---
renderCategories();
render();
