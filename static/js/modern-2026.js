// 2026 Modern Portfolio - Interactive Features

// Custom Cursor
class CustomCursor {
    constructor() {
        this.cursor = document.createElement('div');
        this.cursor.className = 'custom-cursor';
        document.body.appendChild(this.cursor);

        this.init();
    }

    init() {
        document.addEventListener('mousemove', (e) => {
            this.cursor.style.left = e.clientX + 'px';
            this.cursor.style.top = e.clientY + 'px';
        });

        // Hover effect on interactive elements
        const interactiveElements = document.querySelectorAll('a, button, .portfolio-item, .service-card');
        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', () => this.cursor.classList.add('hover'));
            el.addEventListener('mouseleave', () => this.cursor.classList.remove('hover'));
        });
    }
}

// Magnetic Button Effect
class MagneticButton {
    constructor(element) {
        this.element = element;
        this.boundingRect = element.getBoundingClientRect();
        this.init();
    }

    init() {
        this.element.addEventListener('mousemove', (e) => {
            const rect = this.element.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;

            this.element.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
        });

        this.element.addEventListener('mouseleave', () => {
            this.element.style.transform = 'translate(0, 0)';
        });
    }
}

// 3D Tilt Effect
class TiltCard {
    constructor(element) {
        this.element = element;
        this.init();
    }

    init() {
        this.element.addEventListener('mousemove', (e) => {
            const rect = this.element.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = ((y - centerY) / centerY) * -10;
            const rotateY = ((x - centerX) / centerX) * 10;

            this.element.style.setProperty('--rotate-x', `${rotateX}deg`);
            this.element.style.setProperty('--rotate-y', `${rotateY}deg`);
        });

        this.element.addEventListener('mouseleave', () => {
            this.element.style.setProperty('--rotate-x', '0deg');
            this.element.style.setProperty('--rotate-y', '0deg');
        });
    }
}

// Scroll Progress Bar
class ScrollProgress {
    constructor() {
        this.progressBar = document.createElement('div');
        this.progressBar.className = 'scroll-progress';
        document.body.appendChild(this.progressBar);

        this.init();
    }

    init() {
        window.addEventListener('scroll', () => {
            const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (window.scrollY / windowHeight) * 100;
            this.progressBar.style.width = scrolled + '%';
        });
    }
}

// Smooth Scroll Reveal with Intersection Observer
class SmoothReveal {
    constructor() {
        this.init();
    }

    init() {
        const revealElements = document.querySelectorAll('.reveal-2026');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        });

        revealElements.forEach(el => observer.observe(el));
    }
}

// Initialize all features
document.addEventListener('DOMContentLoaded', () => {
    // Custom cursor
    new CustomCursor();

    // Scroll progress
    // new ScrollProgress(); // Disabled - removes color-changing line at top

    // Smooth reveals
    new SmoothReveal();

    // Magnetic buttons
    document.querySelectorAll('.magnetic-btn, .btn').forEach(btn => {
        new MagneticButton(btn);
    });

    // 3D tilt cards
    document.querySelectorAll('.tilt-card, .bento-item, .portfolio-item, .service-card').forEach(card => {
        new TiltCard(card);
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});
