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

    // ── LAYER 1: Dust inside cursor-following blob ────────────────────────────
    const D    = 2200;
    const dpx  = new Float32Array(D);
    const dpy  = new Float32Array(D);
    const dhx  = new Float32Array(D);
    const dhy  = new Float32Array(D);
    const dpvx = new Float32Array(D);
    const dpvy = new Float32Array(D);
    const dpr  = new Float32Array(D);

    for (let i = 0; i < D; i++) {
        const a = Math.random() * Math.PI * 2;
        const r = Math.sqrt(Math.random());
        const shape = 0.85 + Math.random() * 0.25;
        dhx[i] = Math.cos(a) * r * BLOB_RX * shape;
        dhy[i] = Math.sin(a) * r * BLOB_RY * (1.0 - Math.cos(a * 2) * 0.08);
        dpx[i]  = blobX + dhx[i];
        dpy[i]  = blobY + dhy[i];
        dpvx[i] = (Math.random() - 0.5) * 0.18;
        dpvy[i] = (Math.random() - 0.5) * 0.18;
        dpr[i]  = Math.random() * 0.75 + 0.15;
    }

    // ── LAYER 2: Constellation stars inside cursor-following blob ────────────
    const S    = 620;
    const spx  = new Float32Array(S);
    const spy  = new Float32Array(S);
    const shx  = new Float32Array(S);
    const shy  = new Float32Array(S);
    const spvx = new Float32Array(S);
    const spvy = new Float32Array(S);
    const spr  = new Float32Array(S);
    const sph  = new Float32Array(S);

    for (let i = 0; i < S; i++) {
        const a = Math.random() * Math.PI * 2;
        const r = Math.sqrt(Math.random());
        const shape = 0.86 + Math.random() * 0.24;
        shx[i]  = Math.cos(a) * r * BLOB_RX * shape;
        shy[i]  = Math.sin(a) * r * BLOB_RY * (1.0 - Math.cos(a * 2) * 0.08);
        spx[i]  = blobX + shx[i];
        spy[i]  = blobY + shy[i];
        spvx[i] = (Math.random() - 0.5) * 0.15;
        spvy[i] = (Math.random() - 0.5) * 0.15;
        spr[i]  = Math.random() * 1.4 + 0.65;
        sph[i]  = Math.random() * Math.PI * 2;
    }

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
    const STAR_RETURN_K = 0.0032;

    let t = 0;

    // ── MAIN LOOP ─────────────────────────────────────────────────────────────
    function tick() {
        t += 0.010;
        blobX += (blobTargetX - blobX) * 0.14;
        blobY += (blobTargetY - blobY) * 0.14;
        ctx.clearRect(0, 0, W, H);

        // ── 1. Advance waves + apply forces to particles ──────────────────────
        for (let wi = waves.length - 1; wi >= 0; wi--) {
            const w      = waves[wi];
            w.r         += w.spd;
            const inner  = w.r - WAVE_BAND;
            const inner2 = inner * inner;
            const outer2 = w.r   * w.r;

            for (let i = 0; i < S; i++) {
                const ex = spx[i] - w.x;
                const ey = spy[i] - w.y;
                const d2 = ex * ex + ey * ey;
                if (d2 > inner2 && d2 < outer2 && d2 > 0.01) {
                    const d   = Math.sqrt(d2);
                    const rel = (d - inner) / WAVE_BAND;
                    // Half-sine: smooth inward nudge only, no outward push
                    const pull = Math.sin(rel * Math.PI);
                    spvx[i] -= (ex / d) * pull * w.force;
                    spvy[i] -= (ey / d) * pull * w.force;
                }
            }

            for (let i = 0; i < D; i++) {
                const ex = dpx[i] - w.x;
                const ey = dpy[i] - w.y;
                const d2 = ex * ex + ey * ey;
                if (d2 > inner2 && d2 < outer2 && d2 > 0.01) {
                    const d   = Math.sqrt(d2);
                    const rel = (d - inner) / WAVE_BAND;
                    const bob = Math.sin(rel * Math.PI * 2);
                    const pull = Math.sin(rel * Math.PI);
                    dpvx[i] -= (ex / d) * pull * w.force * 0.25;
                    dpvy[i] -= (ey / d) * pull * w.force * 0.25;
                }
            }

            if (w.r >= w.maxR) waves.splice(wi, 1);
        }

        // ── 2. Dust: turbulence + wrap + batched draw ─────────────────────────
        const dustAlpha = 0.13 + Math.sin(t * 0.5) * 0.055;
        ctx.fillStyle = `rgba(160,158,170,${dustAlpha.toFixed(3)})`;
        ctx.beginPath();
        for (let i = 0; i < D; i++) {
            const targetX = blobX + dhx[i];
            const targetY = blobY + dhy[i];
            dpvx[i] += (targetX - dpx[i]) * 0.0022;
            dpvy[i] += (targetY - dpy[i]) * 0.0022;
            dpvx[i] += (Math.random() - 0.5) * 0.003;
            dpvy[i] += (Math.random() - 0.5) * 0.003;
            dpvx[i] *= 0.992;
            dpvy[i] *= 0.992;
            dpx[i]  += dpvx[i];
            dpy[i]  += dpvy[i];
            ctx.moveTo(dpx[i] + dpr[i], dpy[i]);
            ctx.arc(dpx[i], dpy[i], dpr[i], 0, Math.PI * 2);
        }
        ctx.fill();

        // ── 3. Constellation stars: ripple + gentle return to home ───────────
        for (let i = 0; i < S; i++) {
            // Gentle restore force prevents long-term drift/collection.
            const targetX = blobX + shx[i];
            const targetY = blobY + shy[i];
            spvx[i] += (targetX - spx[i]) * STAR_RETURN_K;
            spvy[i] += (targetY - spy[i]) * STAR_RETURN_K;

            // Micro-turbulence — barely perceptible idle life
            spvx[i] += (Math.random() - 0.5) * 0.003;
            spvy[i] += (Math.random() - 0.5) * 0.003;

            // Tight damping — star barely moves, settles in ~0.5 s
            spvx[i] *= 0.955;
            spvy[i] *= 0.955;
            spx[i]  += spvx[i];
            spy[i]  += spvy[i];

            // Soft safety bounds.
            if (spx[i] < -80) spx[i] = -80;
            if (spx[i] > W + 80) spx[i] = W + 80;
            if (spy[i] < -80) spy[i] = -80;
            if (spy[i] > H + 80) spy[i] = H + 80;
        }

        // ── 4. Star dots — batched fill with global breathing ────────────────
        const surfAlpha = 0.34 + Math.sin(t * 0.6 + 0.4) * 0.08;
        ctx.fillStyle = `rgba(70,120,175,${surfAlpha.toFixed(3)})`;
        ctx.beginPath();
        for (let i = 0; i < S; i++) {
            ctx.moveTo(spx[i] + spr[i], spy[i]);
            ctx.arc(spx[i], spy[i], spr[i], 0, Math.PI * 2);
        }
        ctx.fill();

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
