// Apple-Inspired Smooth Animations & Interactions

// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Active Navigation Link on Scroll - Apple Style
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

const observerOptions = {
    threshold: 0.3,
    rootMargin: '-100px 0px -100px 0px'
};

const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${id}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}, observerOptions);

sections.forEach(section => sectionObserver.observe(section));

// Smooth Scrolling for Navigation Links - Apple Style
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar Background on Scroll - Apple Glass Effect
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 50) {
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.97)';
        navbar.style.borderBottomColor = 'rgba(0, 0, 0, 0.12)';
    } else {
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.85)';
        navbar.style.borderBottomColor = 'rgba(0, 0, 0, 0.1)';
    }
    
    lastScroll = currentScroll;
});

// Apple-Style Scroll Reveal Animations
const revealElements = document.querySelectorAll('.project-card, .skill-category, .stat, .about-text, .lc-card');

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, index * 100);
            revealObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

revealElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(40px)';
    el.style.transition = 'opacity 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
    revealObserver.observe(el);
});

// Contact Form Handling - Apple Style
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Create a subtle notification (Apple style)
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        background: rgba(0, 0, 0, 0.85);
        backdrop-filter: saturate(180%) blur(20px);
        color: white;
        padding: 16px 24px;
        border-radius: 12px;
        font-size: 15px;
        letter-spacing: -0.016em;
        z-index: 10000;
        opacity: 0;
        transform: translateY(20px);
        transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
    `;
    notification.textContent = `Thank you, ${name}! I'll get back to you soon.`;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.opacity = '1';
        notification.style.transform = 'translateY(0)';
    }, 10);
    
    // Animate out and remove
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateY(20px)';
        setTimeout(() => notification.remove(), 400);
    }, 3000);
    
    // Reset form
    contactForm.reset();
});

// Parallax Effect for Hero Section - Subtle Apple Style
let ticking = false;

function updateParallax() {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    const heroImage = document.querySelector('.hero-image');
    
    if (hero && scrolled < window.innerHeight) {
        const parallaxValue = scrolled * 0.3;
        if (heroImage) {
            heroImage.style.transform = `translateY(${parallaxValue}px)`;
        }
    }
    
    ticking = false;
}

window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(updateParallax);
        ticking = true;
    }
});

// Scroll to Top Button - Apple Style
function createScrollToTop() {
    const scrollBtn = document.createElement('button');
    scrollBtn.innerHTML = '↑';
    scrollBtn.className = 'scroll-to-top';
    scrollBtn.setAttribute('aria-label', 'Scroll to top');
    scrollBtn.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 44px;
        height: 44px;
        border-radius: 22px;
        background: rgba(0, 0, 0, 0.6);
        backdrop-filter: saturate(180%) blur(20px);
        color: white;
        border: none;
        font-size: 20px;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        z-index: 1000;
        box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
        display: flex;
        align-items: center;
        justify-content: center;
    `;
    
    document.body.appendChild(scrollBtn);
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 400) {
            scrollBtn.style.opacity = '1';
            scrollBtn.style.visibility = 'visible';
        } else {
            scrollBtn.style.opacity = '0';
            scrollBtn.style.visibility = 'hidden';
        }
    });
    
    scrollBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    scrollBtn.addEventListener('mouseenter', () => {
        scrollBtn.style.background = 'rgba(0, 0, 0, 0.8)';
        scrollBtn.style.transform = 'scale(1.1)';
    });
    
    scrollBtn.addEventListener('mouseleave', () => {
        scrollBtn.style.background = 'rgba(0, 0, 0, 0.6)';
        scrollBtn.style.transform = 'scale(1)';
    });
}

// Initialize scroll to top button
createScrollToTop();

// Image Loading Handler - Show placeholder if image fails to load
const profilePhoto = document.getElementById('profilePhoto');
if (profilePhoto) {
    profilePhoto.addEventListener('error', function() {
        // If image fails to load, show a subtle placeholder
        this.style.display = 'none';
        const placeholder = document.createElement('div');
        placeholder.style.cssText = `
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            background: linear-gradient(135deg, #f5f5f7 0%, #e8e8ed 100%);
            color: #86868b;
            font-size: 18px;
            letter-spacing: -0.022em;
        `;
        placeholder.textContent = 'Add your photo';
        this.parentElement.appendChild(placeholder);
    });
}

// Smooth page load animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Add subtle hover effects to interactive elements
document.querySelectorAll('.btn, .project-link, .contact-method').forEach(element => {
    element.addEventListener('mouseenter', function() {
        this.style.transition = 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
    });
});

// Performance optimization: Use requestAnimationFrame for scroll events
let scrollTimeout;
window.addEventListener('scroll', () => {
    if (scrollTimeout) {
        window.cancelAnimationFrame(scrollTimeout);
    }
    scrollTimeout = window.requestAnimationFrame(() => {
        // Scroll-based animations handled here
    });
});

// ============================================
// Canvas: Living Particle Field + Ripple Heartbeat
// ============================================
(function initCanvasEffects() {
    if (!window.matchMedia('(pointer: fine)').matches) return;

    const canvas = document.createElement('canvas');
    canvas.id = 'fx-canvas';
    document.body.prepend(canvas);

    const ctx = canvas.getContext('2d');
    let W = canvas.width = window.innerWidth;
    let H = canvas.height = window.innerHeight;

    window.addEventListener('resize', () => {
        W = canvas.width = window.innerWidth;
        H = canvas.height = window.innerHeight;
    });

    // ── Mouse ────────────────────────────────────────────────────────────────
    let mx = null, my = null;
    let blobX = W * 0.5, blobY = H * 0.5;
    let blobTargetX = blobX, blobTargetY = blobY;
    let lastEmitX = 0, lastEmitY = 0, lastEmitTime = 0;

    document.addEventListener('mousemove', e => {
        mx = e.clientX;
        my = e.clientY;
        blobTargetX = mx;
        blobTargetY = my;
        // Emit ripple from cursor as it moves (throttled by distance + time)
        const now = Date.now();
        const dx  = mx - lastEmitX;
        const dy  = my - lastEmitY;
        if (now - lastEmitTime > 320 && (dx * dx + dy * dy) > 900) {
            emitRipple();
            lastEmitX    = mx;
            lastEmitY    = my;
            lastEmitTime = now;
        }
    });
    document.addEventListener('mouseleave', () => { mx = null; });

    // ── CURSOR-FOLLOWING BLOB GEOMETRY ────────────────────────────────────────
    const BLOB_RX = 360;
    const BLOB_RY = 290;

    function createLayer(count, rMin, rMax, idleDrift) {
        const px = new Float32Array(count);
        const py = new Float32Array(count);
        const hx = new Float32Array(count);
        const hy = new Float32Array(count);
        const vx = new Float32Array(count);
        const vy = new Float32Array(count);
        const pr = new Float32Array(count);
        const phase = new Float32Array(count);
        const twinkle = new Float32Array(count);
        const edge = new Float32Array(count);

        for (let i = 0; i < count; i++) {
            const a = Math.random() * Math.PI * 2;
            const radial = Math.sqrt(Math.random());
            const shape = 0.86 + Math.random() * 0.22;
            const ox = Math.cos(a) * radial * BLOB_RX * shape;
            const oy = Math.sin(a) * radial * BLOB_RY * (1.0 - Math.cos(a * 2) * 0.08);

            hx[i] = ox;
            hy[i] = oy;
            px[i] = blobX + ox;
            py[i] = blobY + oy;
            vx[i] = (Math.random() - 0.5) * idleDrift;
            vy[i] = (Math.random() - 0.5) * idleDrift;
            pr[i] = rMin + Math.random() * (rMax - rMin);
            phase[i] = Math.random() * Math.PI * 2;
            twinkle[i] = Math.random() < 0.08 ? 1 : 0;
            edge[i] = Math.min(
                1,
                Math.sqrt((ox * ox) / (BLOB_RX * BLOB_RX) + (oy * oy) / (BLOB_RY * BLOB_RY))
            );
        }

        return { count, px, py, hx, hy, vx, vy, pr, phase, twinkle, edge };
    }

    // Denser star field while preserving sparse depth cues.
    const dust = createLayer(760, 0.22, 0.78, 0.08);
    const starsFar = createLayer(235, 0.55, 1.05, 0.06);
    const starsMid = createLayer(155, 0.95, 1.45, 0.08);
    const starsNear = createLayer(56, 1.6, 2.25, 0.1);
    const starLayers = [starsFar, starsMid, starsNear];

    // Text-safe zones: stars dim subtly around foreground text.
    let textRects = [];
    function updateTextRects() {
        const selectors = [
            '.hero-description', '.about-text p', '.jtl-details',
            '.project-description', '.metric-label', '.skill-items',
            '.lc-description', '.contact-description', '.contact-form',
            '.footer p', '.footer-links'
        ].join(', ');
        const nodes = document.querySelectorAll(selectors);
        const rects = [];
        nodes.forEach((node) => {
            const r = node.getBoundingClientRect();
            if (r.width < 40 || r.height < 20) return;
            rects.push({
                l: r.left - 18,
                t: r.top - 14,
                r: r.right + 18,
                b: r.bottom + 14,
            });
        });
        textRects = rects;
    }
    updateTextRects();
    window.addEventListener('resize', updateTextRects);
    window.addEventListener('scroll', updateTextRects, { passive: true });
    setInterval(updateTextRects, 900);

    // ── TRAVELING PRESSURE WAVES ──────────────────────────────────────────────
    // Waves physically push particles then spring brings them home — no drawn rings.
    // Each wave: { x, y, r, maxR, spd, force }
    const waves = [];

    // 5 concentric rings, each ~62% weaker — staggered so they visually separate.
    const RIPPLE_SERIES = [
        { delay:   0, force: 0.18, maxR: 300 },
        { delay: 170, force: 0.11, maxR: 258 },
        { delay: 340, force: 0.07, maxR: 216 },
        { delay: 510, force: 0.04, maxR: 174 },
        { delay: 680, force: 0.02, maxR: 132 },
    ];

    function emitRipple() {
        if (mx === null) return;
        const cx = mx, cy = my; // fix origin at cursor position when fired
        RIPPLE_SERIES.forEach(({ delay, force, maxR }) => {
            setTimeout(() => {
                waves.push({ x: cx, y: cy, r: 0, maxR, spd: 2.2, force });
            }, delay);
        });
    }

    setInterval(emitRipple, 857); // 70 BPM
    setTimeout(emitRipple, 600);

    // ── CONSTANTS ────────────────────────────────────────────────────────────
    const WAVE_BAND = 40;
    const STAR_RETURN_K = 0.0034;

    let t = 0;

    // ── MAIN LOOP ─────────────────────────────────────────────────────────────
    function tick() {
        t += 0.010;
        const preX = blobX;
        const preY = blobY;
        blobX += (blobTargetX - blobX) * 0.14;
        blobY += (blobTargetY - blobY) * 0.14;
        const blobSpeed = Math.hypot(blobX - preX, blobY - preY);
        const velocityBoost = Math.min(1, blobSpeed / 8);
        ctx.clearRect(0, 0, W, H);

        // ── 1. Advance waves + apply forces to particles ──────────────────────
        for (let wi = waves.length - 1; wi >= 0; wi--) {
            const w      = waves[wi];
            w.r         += w.spd;
            const inner  = w.r - WAVE_BAND;
            const inner2 = inner * inner;
            const outer2 = w.r   * w.r;

            for (const layer of starLayers) {
                for (let i = 0; i < layer.count; i++) {
                    const ex = layer.px[i] - w.x;
                    const ey = layer.py[i] - w.y;
                    const d2 = ex * ex + ey * ey;
                    if (d2 > inner2 && d2 < outer2 && d2 > 0.01) {
                        const d = Math.sqrt(d2);
                        const rel = (d - inner) / WAVE_BAND;
                        const pull = Math.sin(rel * Math.PI);
                        layer.vx[i] -= (ex / d) * pull * w.force;
                        layer.vy[i] -= (ey / d) * pull * w.force;
                    }
                }
            }

            for (let i = 0; i < dust.count; i++) {
                const ex = dust.px[i] - w.x;
                const ey = dust.py[i] - w.y;
                const d2 = ex * ex + ey * ey;
                if (d2 > inner2 && d2 < outer2 && d2 > 0.01) {
                    const d   = Math.sqrt(d2);
                    const rel = (d - inner) / WAVE_BAND;
                    const pull = Math.sin(rel * Math.PI);
                    dust.vx[i] -= (ex / d) * pull * w.force * 0.18;
                    dust.vy[i] -= (ey / d) * pull * w.force * 0.18;
                }
            }

            if (w.r >= w.maxR) waves.splice(wi, 1);
        }

        // ── 2. Dust layer: smooth drift and soft blob-edge falloff ────────────
        const dustAlpha = 0.1 + Math.sin(t * 0.36) * 0.03;
        ctx.fillStyle = `rgba(128,142,162,${dustAlpha.toFixed(3)})`;
        ctx.beginPath();
        for (let i = 0; i < dust.count; i++) {
            const targetX = blobX + dust.hx[i];
            const targetY = blobY + dust.hy[i];
            const drift = Math.sin(t * 0.55 + dust.phase[i]) * 0.015;
            dust.vx[i] += (targetX - dust.px[i]) * 0.0022 + drift * 0.35;
            dust.vy[i] += (targetY - dust.py[i]) * 0.0022 - drift * 0.25;
            dust.vx[i] *= 0.986;
            dust.vy[i] *= 0.986;
            dust.px[i] += dust.vx[i];
            dust.py[i] += dust.vy[i];
            const edgeFade = Math.max(0.12, 1 - Math.max(0, (dust.edge[i] - 0.78) / 0.22));
            ctx.moveTo(dust.px[i] + dust.pr[i] * edgeFade, dust.py[i]);
            ctx.arc(dust.px[i], dust.py[i], dust.pr[i] * edgeFade, 0, Math.PI * 2);
        }
        ctx.fill();

        // ── 3. Stars: depth layers, smooth motion, restrained twinkle ─────────
        function textFadeAt(x, y) {
            let fade = 1;
            for (let i = 0; i < textRects.length; i++) {
                const z = textRects[i];
                const dx = x < z.l ? z.l - x : (x > z.r ? x - z.r : 0);
                const dy = y < z.t ? z.t - y : (y > z.b ? y - z.b : 0);
                const d = Math.hypot(dx, dy);
                if (d === 0) {
                    fade = Math.min(fade, 0.38);
                } else if (d < 70) {
                    const k = d / 70;
                    fade = Math.min(fade, 0.38 + k * 0.62);
                }
            }
            return fade;
        }

        const layerBase = [
            { rgb: '92,125,162', base: 0.16, breathe: 0.035, tighten: 0.92 },
            { rgb: '78,122,178', base: 0.22, breathe: 0.04, tighten: 0.94 },
            { rgb: '64,116,182', base: 0.29, breathe: 0.05, tighten: 0.96 },
        ];

        for (let li = 0; li < starLayers.length; li++) {
            const layer = starLayers[li];
            const style = layerBase[li];
            for (let i = 0; i < layer.count; i++) {
                const targetX = blobX + layer.hx[i];
                const targetY = blobY + layer.hy[i];
                const driftX = Math.sin(t * 0.42 + layer.phase[i]) * 0.02;
                const driftY = Math.cos(t * 0.37 + layer.phase[i] * 0.9) * 0.018;
                layer.vx[i] += (targetX - layer.px[i]) * STAR_RETURN_K + driftX;
                layer.vy[i] += (targetY - layer.py[i]) * STAR_RETURN_K + driftY;
                layer.vx[i] += velocityBoost * 0.004 * (1 - layer.edge[i]);
                layer.vy[i] += velocityBoost * 0.003 * (1 - layer.edge[i]);
                layer.vx[i] *= style.tighten;
                layer.vy[i] *= style.tighten;
                layer.px[i] += layer.vx[i];
                layer.py[i] += layer.vy[i];

                const edgeFade = Math.max(0.1, 1 - Math.max(0, (layer.edge[i] - 0.8) / 0.2));
                const twinkle = layer.twinkle[i] ? (1 + Math.sin(t * 1.4 + layer.phase[i]) * 0.1) : 1;
                const textFade = textFadeAt(layer.px[i], layer.py[i]);
                const alpha = (style.base + Math.sin(t * 0.58 + layer.phase[i]) * style.breathe) * edgeFade * twinkle * textFade;

                ctx.fillStyle = `rgba(${style.rgb},${Math.max(0.05, Math.min(0.5, alpha)).toFixed(3)})`;
                ctx.beginPath();
                ctx.arc(layer.px[i], layer.py[i], layer.pr[i] * edgeFade, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        requestAnimationFrame(tick);
    }

    requestAnimationFrame(tick);
}());

// ============================================
// Interactive Journey Timeline
// ============================================
(function initJourneyTimeline() {
    const section = document.getElementById('journey');
    const timeline = document.getElementById('journeyTimeline');
    if (!timeline || !section) return;

    const nodes = timeline.querySelectorAll('.jtl-node');
    let hasAnimated = false;

    // Tap-to-expand on mobile / touch
    if (window.matchMedia('(max-width: 768px)').matches || window.matchMedia('(hover: none)').matches) {
        function closeAll(except) {
            nodes.forEach(n => { if (n !== except) n.classList.remove('open'); });
        }

        nodes.forEach(node => {
            node.addEventListener('click', (e) => {
                e.stopPropagation();
                const wasOpen = node.classList.contains('open');
                closeAll(node);
                node.classList.toggle('open', !wasOpen);
            });
        });

        document.addEventListener('click', () => closeAll(null));
    }

    function runEntrance() {
        if (hasAnimated) return;
        hasAnimated = true;

        timeline.classList.add('jtl--animated');

        nodes.forEach((node, i) => {
            setTimeout(() => {
                node.classList.add('jtl-node--visible');
            }, 600 + i * 220);
        });
    }

    const obs = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                runEntrance();
                obs.unobserve(section);
            }
        });
    }, { threshold: 0.5 });

    obs.observe(section);
}());

// ============================================
// Google Antigravity-Style Cursor Effect
// ============================================
(function initCursorEffect() {
    // Only run on non-touch / pointer-fine devices
    if (!window.matchMedia('(pointer: fine)').matches) return;

    const ring = document.getElementById('cursor-ring');
    if (!ring) return;

    // Material Symbols icon names — PM / tech / innovation themed
    const ICONS = [
        'spark', 'auto_awesome', 'insights', 'trending_up',
        'rocket_launch', 'hub', 'lightbulb', 'code',
        'analytics', 'dashboard', 'bolt', 'psychology',
        'business_center', 'cloud', 'commit', 'terminal',
        'device_hub', 'star', 'data_object', 'search_spark',
    ];

    // Cursor positions
    let mouseX = 0, mouseY = 0;
    let ringX  = 0, ringY  = 0;

    const RING_HALF = 17;  // half of 34px

    // Track mouse
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    // Lag the ring via rAF lerp
    function lerpRing() {
        ringX += (mouseX - ringX) * 0.14;
        ringY += (mouseY - ringY) * 0.14;
        ring.style.transform = `translate(${ringX - RING_HALF}px, ${ringY - RING_HALF}px)`;
        requestAnimationFrame(lerpRing);
    }
    lerpRing();

    // Show / hide cursor when entering / leaving window
    document.addEventListener('mouseenter', () => document.body.classList.remove('cursor-out'));
    document.addEventListener('mouseleave', () => document.body.classList.add('cursor-out'));

    // Expand ring on hover over interactive elements
    const interactiveSelector = 'a, button, input, textarea, select, label, [role="button"]';
    document.querySelectorAll(interactiveSelector).forEach(el => {
        el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
        el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
    });

    // Click burst ring
    document.addEventListener('click', (e) => {
        const burst = document.createElement('div');
        burst.className = 'cursor-click-burst';
        burst.style.setProperty('--cx', `${e.clientX - RING_HALF}px`);
        burst.style.setProperty('--cy', `${e.clientY - RING_HALF}px`);
        burst.style.transform = `translate(${e.clientX - RING_HALF}px, ${e.clientY - RING_HALF}px)`;
        document.body.appendChild(burst);
        burst.addEventListener('animationend', () => burst.remove());
    });

    // ---- Icon particle spawning ----
    let lastSpawnTime = 0;
    let lastSpawnX = 0;
    let lastSpawnY = 0;
    const SPAWN_INTERVAL_MS = 90;   // max one particle per 90 ms
    const SPAWN_MIN_DIST    = 12;   // don't spawn unless cursor moved ≥12px

    function spawnParticle(x, y) {
        const icon = document.createElement('span');
        icon.className = 'cursor-icon-particle';
        icon.textContent = ICONS[Math.floor(Math.random() * ICONS.length)];

        // Drift direction: mostly upward with random horizontal spread
        const angle   = (Math.random() * Math.PI * 1.4) - (Math.PI * 0.7) - (Math.PI / 2);
        const dist    = 45 + Math.random() * 55;
        const dx      = Math.cos(angle) * dist;
        const dy      = Math.sin(angle) * dist;
        const rot     = (Math.random() * 60 - 30) + 'deg';

        icon.style.setProperty('--start-x', `${x - 8}px`);
        icon.style.setProperty('--start-y', `${y - 8}px`);
        icon.style.setProperty('--dx', `${dx}px`);
        icon.style.setProperty('--dy', `${dy}px`);
        icon.style.setProperty('--rot', rot);

        document.body.appendChild(icon);
        icon.addEventListener('animationend', () => icon.remove());
    }

    document.addEventListener('mousemove', (e) => {
        const now  = Date.now();
        const dx   = e.clientX - lastSpawnX;
        const dy   = e.clientY - lastSpawnY;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (now - lastSpawnTime >= SPAWN_INTERVAL_MS && dist >= SPAWN_MIN_DIST) {
            spawnParticle(e.clientX, e.clientY);
            lastSpawnTime = now;
            lastSpawnX    = e.clientX;
            lastSpawnY    = e.clientY;
        }
    });
}());
