// Motion engine — one file, no framework.
// Everything degrades: reduced-motion users get static content, touch users get no custom cursor.
import Lenis from 'lenis';

const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const finePointer = matchMedia('(hover: hover) and (pointer: fine)').matches;
const root = document.documentElement;
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
const clamp = (v: number, a = 0, b = 1) => Math.min(b, Math.max(a, v));

const mouse = { x: innerWidth / 2, y: innerHeight / 2, vx: 0, vy: 0 };
addEventListener('pointermove', (e) => {
  mouse.vx = e.clientX - mouse.x;
  mouse.vy = e.clientY - mouse.y;
  mouse.x = e.clientX;
  mouse.y = e.clientY;
}, { passive: true });

/* ── Preloader: 000 → 100 ─────────────────────────────────────── */
function preloader(done: () => void) {
  const el = document.querySelector<HTMLElement>('.preloader');
  if (!el) return done();
  let seen = false;
  try { seen = sessionStorage.getItem('sdiek-loaded') === '1'; } catch {}
  if (reduce || seen) { el.remove(); return done(); }
  const num = el.querySelector<HTMLElement>('[data-count-load]')!;
  const bar = el.querySelector<HTMLElement>('.preloader__bar')!;
  const start = performance.now();
  const dur = 1700;
  const tick = (now: number) => {
    const p = clamp((now - start) / dur);
    const eased = 1 - Math.pow(1 - p, 3);
    num.textContent = String(Math.round(eased * 100)).padStart(3, '0');
    bar.style.transform = `scaleX(${eased})`;
    if (p < 1) requestAnimationFrame(tick);
    else {
      el.classList.add('is-done');
      try { sessionStorage.setItem('sdiek-loaded', '1'); } catch {}
      setTimeout(done, 350);
      setTimeout(() => el.remove(), 1400);
    }
  };
  requestAnimationFrame(tick);
}

/* ── Smooth scroll ────────────────────────────────────────────── */
let lenis: Lenis | null = null;
let velocity = 0;
if (!reduce) {
  lenis = new Lenis({ lerp: 0.09, smoothWheel: true });
  lenis.on('scroll', (l: Lenis) => { velocity = l.velocity; });
  const raf = (t: number) => { lenis!.raf(t); requestAnimationFrame(raf); };
  requestAnimationFrame(raf);
  document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach((a) =>
    a.addEventListener('click', (e) => {
      const id = a.getAttribute('href')!;
      if (id.length < 2) return;
      const t = document.querySelector(id);
      if (t) { e.preventDefault(); lenis!.scrollTo(t as HTMLElement, { offset: -20 }); }
    }),
  );
}

/* ── Custom cursor ───────────────────────────────────────────── */
function cursor() {
  if (!finePointer || reduce) return;
  root.classList.add('has-cursor');
  const ring = document.querySelector<HTMLElement>('.cursor')!;
  const dot = document.querySelector<HTMLElement>('.cursor-dot')!;
  const label = ring.querySelector<HTMLElement>('.cursor__label')!;
  const pos = { x: mouse.x, y: mouse.y };
  const loop = () => {
    pos.x = lerp(pos.x, mouse.x, 0.16);
    pos.y = lerp(pos.y, mouse.y, 0.16);
    ring.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0)`;
    dot.style.transform = `translate3d(${mouse.x}px, ${mouse.y}px, 0)`;
    requestAnimationFrame(loop);
  };
  loop();
  document.addEventListener('pointerover', (e) => {
    const t = (e.target as HTMLElement).closest<HTMLElement>('[data-cursor], a, button, label, select');
    ring.classList.toggle('is-hover', !!t);
    const text = t?.dataset.cursor;
    ring.classList.toggle('is-label', !!text);
    if (text) label.textContent = text;
  });
}

/* ── Fluid ink trail (2D canvas, multiply-blended on the light page) ── */
function fluid() {
  const c = document.querySelector<HTMLCanvasElement>('.fluid');
  if (!c || reduce || !finePointer) return c?.remove();
  const ctx = c.getContext('2d')!;
  const dpr = Math.min(devicePixelRatio, 1.5);
  const size = () => { c.width = innerWidth * dpr; c.height = innerHeight * dpr; };
  size();
  addEventListener('resize', size);
  type P = { x: number; y: number; r: number; life: number; vx: number; vy: number; hue: number };
  const parts: P[] = [];
  let last = { x: mouse.x, y: mouse.y };
  const frame = () => {
    ctx.globalCompositeOperation = 'destination-out';
    ctx.fillStyle = 'rgba(0,0,0,0.08)';
    ctx.fillRect(0, 0, c.width, c.height);
    ctx.globalCompositeOperation = 'source-over';
    const dx = mouse.x - last.x, dy = mouse.y - last.y;
    const dist = Math.hypot(dx, dy);
    const steps = Math.min(12, Math.floor(dist / 6));
    for (let i = 0; i < steps; i++) {
      const t = i / steps;
      parts.push({ x: last.x + dx * t, y: last.y + dy * t, r: 18 + Math.min(dist, 80) * 0.5, life: 1, vx: dx * 0.02 + (Math.random() - 0.5), vy: dy * 0.02 + (Math.random() - 0.5), hue: Math.random() });
    }
    last = { x: mouse.x, y: mouse.y };
    for (let i = parts.length - 1; i >= 0; i--) {
      const p = parts[i];
      p.life -= 0.022; p.x += p.vx; p.y += p.vy; p.vx *= 0.96; p.vy *= 0.96; p.r *= 1.012;
      if (p.life <= 0) { parts.splice(i, 1); continue; }
      const g = ctx.createRadialGradient(p.x * dpr, p.y * dpr, 0, p.x * dpr, p.y * dpr, p.r * dpr);
      const col = p.hue > 0.5 ? '42,91,255' : '20,168,255';
      g.addColorStop(0, `rgba(${col},${0.05 * p.life})`);
      g.addColorStop(1, `rgba(${col},0)`);
      ctx.fillStyle = g;
      ctx.beginPath(); ctx.arc(p.x * dpr, p.y * dpr, p.r * dpr, 0, Math.PI * 2); ctx.fill();
    }
    if (parts.length > 400) parts.splice(0, parts.length - 400);
    requestAnimationFrame(frame);
  };
  frame();
}

/* ── Magnetic elements ───────────────────────────────────────── */
function magnetic() {
  if (!finePointer || reduce) return;
  document.querySelectorAll<HTMLElement>('[data-magnetic]').forEach((el) => {
    const s = parseFloat(el.dataset.magnetic || '0.3');
    el.style.transition = 'transform 0.6s cubic-bezier(.22,1,.36,1)';
    el.addEventListener('pointermove', (e) => {
      const r = el.getBoundingClientRect();
      el.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * s}px, ${(e.clientY - r.top - r.height / 2) * s}px)`;
    });
    el.addEventListener('pointerleave', () => { el.style.transform = ''; });
  });
}

/* ── Split text into words/chars ─────────────────────────────── */
function split() {
  document.querySelectorAll<HTMLElement>('[data-split]').forEach((el) => {
    // Arabic letters must stay joined: split by words only.
    const byWord = root.lang === 'ar' || el.dataset.split === 'words';
    const walk = (node: Node): Node[] => {
      if (node.nodeType === 3) {
        const out: Node[] = [];
        node.textContent!.split(/(\s+)/).forEach((word) => {
          if (!word) return;
          if (/^\s+$/.test(word)) { out.push(document.createTextNode(' ')); return; }
          const w = document.createElement('span'); w.className = 'w';
          if (byWord) {
            const c = document.createElement('span'); c.className = 'c'; c.textContent = word; w.append(c);
          } else {
            [...word].forEach((ch) => { const c = document.createElement('span'); c.className = 'c'; c.textContent = ch; w.append(c); });
          }
          out.push(w);
        });
        return out;
      }
      if (node.nodeType === 1 && (node as Element).tagName !== 'BR') {
        const clone = node.cloneNode(false) as Element;
        [...node.childNodes].forEach((n) => walk(n).forEach((x) => clone.append(x)));
        return [clone];
      }
      return [node.cloneNode(true)];
    };
    const label = el.textContent?.trim() || '';
    const kids = [...el.childNodes].flatMap(walk);
    el.replaceChildren(...kids);
    el.setAttribute('aria-label', label);
    el.querySelectorAll('.w').forEach((w) => w.setAttribute('aria-hidden', 'true'));
    el.querySelectorAll<HTMLElement>('.c').forEach((c, i) => c.style.setProperty('--i', String(i)));
    el.classList.add('split');
  });
}

/* ── Scroll-scrubbed word highlight ──────────────────────────── */
function scrubPrep() {
  document.querySelectorAll<HTMLElement>('[data-scrub]').forEach((el) => {
    const words = el.textContent!.trim().split(/\s+/);
    el.replaceChildren(...words.flatMap((w) => { const s = document.createElement('span'); s.className = 'sw'; s.textContent = w; return [s, document.createTextNode(' ')]; }));
    el.classList.add('scrub');
  });
}

/* ── Intersection reveals ────────────────────────────────────── */
function reveals() {
  const io = new IntersectionObserver((entries) => entries.forEach((e) => {
    if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
  }), { threshold: 0.15, rootMargin: '0px 0px -6% 0px' });
  document.querySelectorAll('[data-reveal], .split, .construct, [data-count]').forEach((el) => io.observe(el));
}

/* ── Counters ────────────────────────────────────────────────── */
function counters() {
  const io = new IntersectionObserver((entries) => entries.forEach((e) => {
    if (!e.isIntersecting) return;
    io.unobserve(e.target);
    const el = e.target as HTMLElement;
    const target = parseFloat(el.dataset.count!);
    const suffix = el.dataset.suffix || '';
    const fmt = (n: number) => Math.round(n).toLocaleString('en-US') + suffix;
    if (reduce) { el.textContent = fmt(target); return; }
    const start = performance.now();
    const step = (now: number) => {
      const p = clamp((now - start) / 1800);
      el.textContent = fmt(target * (1 - Math.pow(1 - p, 4)));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }), { threshold: 0.5 });
  document.querySelectorAll('[data-count]').forEach((el) => io.observe(el));
}

/* ── Per-frame scroll effects: progress, parallax, pin progress, scrub, rail skew ── */
function scrollFx() {
  const parallax = [...document.querySelectorAll<HTMLElement>('[data-speed]')];
  const pins = [...document.querySelectorAll<HTMLElement>('[data-pin]')];
  const scrubs = [...document.querySelectorAll<HTMLElement>('.scrub')];
  const skews = [...document.querySelectorAll<HTMLElement>('[data-skew]')];
  const darks = [...document.querySelectorAll<HTMLElement>('[data-dark]')];
  let skew = 0;
  const frame = () => {
    const vh = innerHeight;
    const max = document.documentElement.scrollHeight - vh;
    root.style.setProperty('--p', String(max > 0 ? scrollY / max : 0));
    root.style.setProperty('--mx', `${mouse.x}px`);
    root.style.setProperty('--my', `${mouse.y}px`);
    if (!reduce) {
      for (const el of parallax) {
        const r = el.getBoundingClientRect();
        if (r.bottom < -200 || r.top > vh + 200) continue;
        const off = (r.top + r.height / 2 - vh / 2) * parseFloat(el.dataset.speed!);
        el.style.transform = `translate3d(0, ${off}px, 0)`;
      }
      skew = lerp(skew, clamp(velocity * 0.25, -8, 8), 0.1);
      for (const el of skews) el.style.transform = `skewX(${-skew}deg)`;
    }
    // Header switches to light text while a dark band sits under it
    let dark = false;
    for (const el of darks) { const r = el.getBoundingClientRect(); if (r.top <= 40 && r.bottom >= 40) { dark = true; break; } }
    root.classList.toggle('header-dark', dark);
    root.classList.toggle('scrolled', scrollY > 40);
    for (const el of pins) {
      const r = el.getBoundingClientRect();
      const p = clamp(-r.top / Math.max(1, r.height - vh));
      el.style.setProperty('--prog', p.toFixed(4));
    }
    for (const el of scrubs) {
      const r = el.getBoundingClientRect();
      const p = clamp((vh * 0.85 - r.top) / (r.height + vh * 0.35));
      const words = el.querySelectorAll('.sw');
      const on = Math.round(p * words.length);
      words.forEach((w, i) => w.classList.toggle('on', i < on));
    }
    requestAnimationFrame(frame);
  };
  frame();
}

/* ── Hover preview image that follows the cursor (work list) ─── */
function hoverPreview() {
  const box = document.querySelector<HTMLElement>('.hover-preview');
  if (!box || !finePointer || reduce) return;
  const img = box.querySelector('img')!;
  const tag = box.querySelector<HTMLElement>('.hover-preview__tag')!;
  const pos = { x: mouse.x, y: mouse.y };
  let active = false;
  const loop = () => {
    pos.x = lerp(pos.x, mouse.x, 0.12);
    pos.y = lerp(pos.y, mouse.y, 0.12);
    const rot = clamp(mouse.vx * 0.4, -10, 10);
    box.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0) translate(-50%, -50%) rotate(${rot}deg) scale(${active ? 1 : 0.6})`;
    requestAnimationFrame(loop);
  };
  loop();
  document.querySelectorAll<HTMLElement>('[data-preview]').forEach((row) => {
    row.addEventListener('pointerenter', () => {
      const src = row.dataset.preview;
      if (!src) return;
      img.src = src;
      tag.textContent = row.dataset.previewTag || '';
      active = true; box.classList.add('on');
    });
    row.addEventListener('pointerleave', () => { active = false; box.classList.remove('on'); });
  });
}

/* ── 3D tilt ─────────────────────────────────────────────────── */
function tilt() {
  if (!finePointer || reduce) return;
  document.querySelectorAll<HTMLElement>('[data-tilt]').forEach((el) => {
    el.addEventListener('pointermove', (e) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      el.style.transform = `perspective(900px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg)`;
      el.style.setProperty('--gx', `${(x + 0.5) * 100}%`);
      el.style.setProperty('--gy', `${(y + 0.5) * 100}%`);
    });
    el.addEventListener('pointerleave', () => { el.style.transform = ''; });
  });
}

/* ── Hero mark follows the mouse (parallax on layers) ────────── */
function heroTrack() {
  const layers = [...document.querySelectorAll<HTMLElement>('[data-track]')];
  if (!layers.length || reduce) return;
  const cur = { x: 0, y: 0 };
  const loop = () => {
    const tx = (mouse.x / innerWidth - 0.5) * 2;
    const ty = (mouse.y / innerHeight - 0.5) * 2;
    cur.x = lerp(cur.x, tx, 0.06); cur.y = lerp(cur.y, ty, 0.06);
    for (const l of layers) {
      const d = parseFloat(l.dataset.track!);
      l.style.transform = `translate3d(${cur.x * d}px, ${cur.y * d}px, 0) rotateY(${cur.x * d * 0.25}deg) rotateX(${-cur.y * d * 0.25}deg)`;
    }
    requestAnimationFrame(loop);
  };
  loop();
}

/* ── Menu (overlay) ──────────────────────────────────────────── */
function menu() {
  const btn = document.querySelector<HTMLButtonElement>('[data-menu-toggle]');
  const panel = document.querySelector<HTMLElement>('.menu-overlay');
  if (!btn || !panel) return;
  const set = (open: boolean) => {
    root.classList.toggle('menu-open', open);
    btn.setAttribute('aria-expanded', String(open));
    panel.toggleAttribute('inert', !open);
    open ? lenis?.stop() : lenis?.start();
  };
  set(false);
  btn.addEventListener('click', () => set(!root.classList.contains('menu-open')));
  panel.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => set(false)));
  addEventListener('keydown', (e) => { if (e.key === 'Escape') set(false); });
}

/* ── Page leave curtain ──────────────────────────────────────── */
function pageLeave() {
  if (reduce) return;
  const curtain = document.querySelector<HTMLElement>('.curtain');
  if (!curtain) return;
  document.addEventListener('click', (e) => {
    const a = (e.target as HTMLElement).closest('a');
    if (!a || a.target === '_blank' || e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
    const url = new URL(a.href, location.href);
    if (url.origin !== location.origin || url.hash && url.pathname === location.pathname) return;
    e.preventDefault();
    curtain.classList.add('leaving');
    setTimeout(() => { location.href = url.href; }, 520);
  });
  addEventListener('pageshow', (e) => { if (e.persisted) curtain.classList.remove('leaving'); });
}

/* ── Clock in the chrome (Cairo time) ────────────────────────── */
function clock() {
  const el = document.querySelector<HTMLElement>('[data-clock]');
  if (!el) return;
  const fmt = new Intl.DateTimeFormat('en-GB', { hour: '2-digit', minute: '2-digit', timeZone: 'Africa/Cairo' });
  const tick = () => { el.textContent = `CAI ${fmt.format(new Date())}`; };
  tick(); setInterval(tick, 15000);
}

/* ── Boot ────────────────────────────────────────────────────── */
split();
scrubPrep();
cursor();
fluid();
magnetic();
menu();
clock();
tilt();
heroTrack();
hoverPreview();
pageLeave();
scrollFx();
counters();
preloader(() => {
  root.classList.add('loaded');
  reveals();
});
