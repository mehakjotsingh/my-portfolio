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
        navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.95)';
        navbar.style.borderBottomColor = 'rgba(255, 255, 255, 0.15)';
    } else {
        navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
        navbar.style.borderBottomColor = 'rgba(255, 255, 255, 0.1)';
    }
    
    lastScroll = currentScroll;
});

// Apple-Style Scroll Reveal Animations
const revealElements = document.querySelectorAll('.project-card, .skill-category, .stat, .about-text, .timeline-item, .edu-card, .lc-card');

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
// Google Antigravity-Style Cursor Effect
// ============================================
(function initCursorEffect() {
    // Only run on non-touch / pointer-fine devices
    if (!window.matchMedia('(pointer: fine)').matches) return;

    const dot  = document.getElementById('cursor-dot');
    const ring = document.getElementById('cursor-ring');
    if (!dot || !ring) return;

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

    // Half-sizes for translate offset (keeps elements centred on cursor)
    const DOT_HALF  = 3;   // half of 6px
    const RING_HALF = 17;  // half of 34px

    // Track mouse
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        dot.style.transform = `translate(${mouseX - DOT_HALF}px, ${mouseY - DOT_HALF}px)`;
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
