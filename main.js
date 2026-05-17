/* ============================================================
   INTRO OVERLAY — first-visit logo + name reveal
   ============================================================ */
(function () {
  const html   = document.documentElement;
  const intro  = document.getElementById('intro');
  const nameEl = document.getElementById('introName');
  const show   = html.classList.contains('show-intro');

  function finish() {
    document.body.classList.add('intro-done');
    document.dispatchEvent(new CustomEvent('intro:done'));
  }

  if (!show || !intro || !nameEl) {
    // No intro this load — fire the event on the next tick so listeners can register
    setTimeout(finish, 0);
    return;
  }

  nameEl.textContent = 'Roi Gozun';

  // CSS choreographs the reveal (~1.65s). Hold a beat, then fade the overlay out.
  const REVEAL_MS = 1700;
  const HOLD_MS   = 750;
  const FADE_MS   = 700;

  setTimeout(() => {
    intro.classList.add('intro--out');
    setTimeout(() => {
      intro.remove();
      html.classList.remove('show-intro');
      try { sessionStorage.setItem('introSeen', '1'); } catch (e) {}
      finish();
    }, FADE_MS);
  }, REVEAL_MS + HOLD_MS);
})();


/* ============================================================
   PARTICLE NETWORK — hero canvas
   ============================================================ */
(function () {
  const canvas = document.getElementById('heroCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const hero = canvas.parentElement;

  const COUNT    = window.innerWidth < 768 ? 32 : 68;
  const LINK     = 130;   // max px to draw a connecting line
  const REPEL    = 115;   // mouse repulsion radius
  const SPEED    = 0.38;
  // purple-ish and cyan-ish in HSL
  const COLORS   = ['268,65%,75%', '186,72%,62%'];

  let W, H, particles = [];
  const mouse = { x: -999, y: -999 };
  let running = true;

  function resize() {
    W = canvas.width  = hero.offsetWidth;
    H = canvas.height = hero.offsetHeight;
  }

  function mkP() {
    return {
      x:  Math.random() * W,
      y:  Math.random() * H,
      vx: (Math.random() - 0.5) * SPEED,
      vy: (Math.random() - 0.5) * SPEED,
      r:  Math.random() * 1.4 + 0.5,
      c:  COLORS[Math.random() > 0.38 ? 0 : 1],
    };
  }

  function init() {
    particles = Array.from({ length: COUNT }, mkP);
  }

  function step() {
    for (const p of particles) {
      p.x += p.vx;
      p.y += p.vy;

      // Mouse repulsion
      const dx = p.x - mouse.x, dy = p.y - mouse.y;
      const d  = Math.hypot(dx, dy);
      if (d < REPEL && d > 0) {
        const f = ((REPEL - d) / REPEL) * 1.9;
        p.x += (dx / d) * f;
        p.y += (dy / d) * f;
      }

      // Wrap edges
      if (p.x < -4)  p.x = W + 4;
      if (p.x > W+4) p.x = -4;
      if (p.y < -4)  p.y = H + 4;
      if (p.y > H+4) p.y = -4;
    }
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);

    // Lines between close particles
    for (let i = 0; i < particles.length; i++) {
      const a = particles[i];
      for (let j = i + 1; j < particles.length; j++) {
        const b  = particles[j];
        const dx = a.x - b.x, dy = a.y - b.y;
        const d  = Math.sqrt(dx * dx + dy * dy);
        if (d < LINK) {
          ctx.globalAlpha = (1 - d / LINK) * 0.2;
          ctx.strokeStyle = `hsl(${a.c})`;
          ctx.lineWidth   = 0.65;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }
    }

    // Dots
    ctx.globalAlpha = 0.72;
    for (const p of particles) {
      ctx.fillStyle = `hsl(${p.c})`;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();
    }

    ctx.globalAlpha = 1;
  }

  function loop() {
    if (running) { step(); draw(); }
    requestAnimationFrame(loop);
  }

  // Pause when hero scrolls out of view (perf)
  new IntersectionObserver(([e]) => { running = e.isIntersecting; }, { threshold: 0 }).observe(hero);

  // Mouse tracking (listen on hero so it works through canvas pointer-events:none)
  hero.addEventListener('mousemove', (e) => {
    const r  = canvas.getBoundingClientRect();
    mouse.x  = e.clientX - r.left;
    mouse.y  = e.clientY - r.top;
  });
  hero.addEventListener('mouseleave', () => { mouse.x = mouse.y = -999; });

  resize();
  init();
  loop();

  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => { resize(); init(); }, 150);
  });
})();


/* ============================================================
   TYPEWRITER — cycling role text
   ============================================================ */
(function () {
  const el = document.getElementById('typedRole');
  if (!el) return;

  const words = [
    'Frontend Developer',
    'Web Designer',
    'UI / UX Designer',
    'Creative Developer',
    'Virtual Assistant',
  ];

  let wi = 0, ci = 0, deleting = false;

  function tick() {
    const word = words[wi % words.length];

    if (deleting) {
      el.textContent = word.slice(0, --ci);
    } else {
      el.textContent = word.slice(0, ++ci);
    }

    let delay = deleting ? 42 : 88;
    if (!deleting && ci === word.length) { deleting = true;  delay = 2400; }
    if (deleting  && ci === 0)          { deleting = false; wi++; delay = 360; }

    setTimeout(tick, delay);
  }

  // Wait for the intro to finish before the role typewriter starts.
  // (When there's no intro, the intro module fires `intro:done` immediately.)
  if (document.documentElement.classList.contains('show-intro')) {
    document.addEventListener('intro:done', () => setTimeout(tick, 350), { once: true });
  } else {
    setTimeout(tick, 900);
  }
})();


/* ============================================================
   STAT COUNTERS — animate numbers when scrolled into view
   ============================================================ */
(function () {
  const counters = document.querySelectorAll('.stat__num[data-count]');
  if (!counters.length) return;

  const io = new IntersectionObserver((entries) => {
    entries.forEach(({ isIntersecting, target }) => {
      if (!isIntersecting) return;
      const end = parseInt(target.dataset.count, 10);
      const suf = target.dataset.suffix || '';
      const dur = 1400;
      const t0  = performance.now();

      (function update(now) {
        const p    = Math.min((now - t0) / dur, 1);
        const ease = 1 - Math.pow(1 - p, 3); // ease-out cubic
        target.textContent = Math.floor(ease * end) + suf;
        if (p < 1) requestAnimationFrame(update);
      })(t0);

      io.unobserve(target);
    });
  }, { threshold: 0.6 });

  counters.forEach(el => io.observe(el));
})();


/* ============================================================
   NAV — sticky scroll effect
   ============================================================ */
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
});


/* ============================================================
   MOBILE BURGER
   ============================================================ */
const burger = document.getElementById('burger');
const navLinksList = document.querySelector('.nav__links');
const navEl       = document.getElementById('nav');

function closeMobileMenu() {
  navLinksList.classList.remove('open');
  burger.classList.remove('active');
  navEl.classList.remove('nav--open');
}
function toggleMobileMenu() {
  const isOpen = navLinksList.classList.toggle('open');
  burger.classList.toggle('active', isOpen);
  navEl.classList.toggle('nav--open', isOpen);
}

burger.addEventListener('click', toggleMobileMenu);

// Close menu when a link is tapped
navLinksList.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', closeMobileMenu);
});

// Close on resize back to desktop
window.addEventListener('resize', () => {
  if (window.innerWidth > 768) closeMobileMenu();
});


/* ============================================================
   SCROLL-TRIGGERED ENTRANCE ANIMATIONS
   ============================================================ */
const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      fadeObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

// Default fade-up for general grid items + headings
document.querySelectorAll(
  '.about__card, .service-card, .project-card, .testimonial-card, .section-title, .section-label'
).forEach((el, i) => {
  if (!el.hasAttribute('data-anim')) {
    el.classList.add('fade-up');
  }
  // Stagger items within the same row
  const siblings = el.parentElement ? el.parentElement.children : [];
  const idx = Array.prototype.indexOf.call(siblings, el);
  el.style.transitionDelay = `${(idx % 4) * 90}ms`;
  fadeObserver.observe(el);
});

// Directional / explicit animations via [data-anim]
document.querySelectorAll('[data-anim]').forEach((el) => {
  fadeObserver.observe(el);
});


/* ============================================================
   SCROLL PROGRESS BAR
   ============================================================ */
(function () {
  const bar = document.getElementById('scrollProgress');
  if (!bar) return;
  let ticking = false;
  function update() {
    const h = document.documentElement;
    const max = h.scrollHeight - h.clientHeight;
    const pct = max > 0 ? (h.scrollTop / max) * 100 : 0;
    bar.style.width = pct + '%';
    ticking = false;
  }
  window.addEventListener('scroll', () => {
    if (!ticking) { requestAnimationFrame(update); ticking = true; }
  }, { passive: true });
  update();
})();


/* ============================================================
   PARALLAX — section backgrounds drift on scroll
   ============================================================ */
(function () {
  const sections = document.querySelectorAll('.section');
  if (!sections.length || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  let ticking = false;

  function update() {
    const viewportH = window.innerHeight;
    sections.forEach((section) => {
      const bg = section.querySelector('.section-bg');
      if (!bg) return;
      const rect = section.getBoundingClientRect();
      // Only animate when section is near/inside viewport (perf)
      if (rect.bottom < -200 || rect.top > viewportH + 200) return;
      // Progress: -1 (section about to enter) → 0 (centered) → 1 (leaving)
      const progress = (rect.top - viewportH) / (rect.height + viewportH);
      const shift = progress * 60; // px
      bg.style.transform = `translate3d(0, ${shift}px, 0)`;
    });
    ticking = false;
  }

  window.addEventListener('scroll', () => {
    if (!ticking) { requestAnimationFrame(update); ticking = true; }
  }, { passive: true });
  window.addEventListener('resize', update, { passive: true });
  update();
})();


/* ============================================================
   ACTIVE NAV LINK on scroll
   ============================================================ */
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav__links a');

new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      navLinks.forEach((link) => {
        link.style.color = link.getAttribute('href') === `#${entry.target.id}` ? '#fff' : '';
      });
    }
  });
}, { rootMargin: '-40% 0px -50% 0px' }).observe && sections.forEach((s) => {
  new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navLinks.forEach((link) => {
          link.style.color = link.getAttribute('href') === `#${entry.target.id}` ? '#fff' : '';
        });
      }
    });
  }, { rootMargin: '-40% 0px -50% 0px' }).observe(s);
});


/* ============================================================
   CONTACT FORM — Web3Forms
   The access key lives in `config.js` (gitignored, see config.example.js).
   ============================================================ */
const WEB3FORMS_ACCESS_KEY = window.WEB3FORMS_ACCESS_KEY || '';

async function handleSubmit(e) {
  e.preventDefault();
  const form    = e.target;
  const btn     = form.querySelector('button[type="submit"]');
  const success = document.getElementById('formSuccess');
  const error   = document.getElementById('formError');

  success.classList.remove('show');
  error.classList.remove('show');
  btn.textContent = 'Sending…';
  btn.disabled    = true;

  const data = new FormData(form);
  data.append('access_key', WEB3FORMS_ACCESS_KEY);
  data.append('from_name', 'Portfolio Contact Form');
  data.append('subject', data.get('subject') || `New message from ${data.get('name')}`);

  try {
    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { Accept: 'application/json' },
      body: data,
    });
    const json = await res.json();
    if (json.success) {
      form.reset();
      success.classList.add('show');
      setTimeout(() => success.classList.remove('show'), 5000);
    } else {
      throw new Error(json.message || 'Submission failed');
    }
  } catch (err) {
    console.error('Contact form error:', err);
    error.classList.add('show');
    setTimeout(() => error.classList.remove('show'), 6000);
  } finally {
    btn.textContent = 'Send Message →';
    btn.disabled    = false;
  }
}


/* ============================================================
   HERO CURSOR GLOW — CSS custom property spotlight
   ============================================================ */
const heroSection = document.querySelector('.hero');
if (heroSection) {
  heroSection.addEventListener('mousemove', (e) => {
    const rect = heroSection.getBoundingClientRect();
    heroSection.style.setProperty('--mx', `${e.clientX - rect.left}px`);
    heroSection.style.setProperty('--my', `${e.clientY - rect.top}px`);
  });
}
