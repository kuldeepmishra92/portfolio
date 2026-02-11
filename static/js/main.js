/* Navbar Scroll Effect */
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(10, 15, 25, 0.95)';
        navbar.style.boxShadow = '0 8px 32px 0 rgba(251, 191, 36, 0.2), 0 0 20px rgba(59, 130, 246, 0.1)';
        navbar.style.borderBottomColor = 'rgba(251, 191, 36, 0.3)';
    } else {
        navbar.style.background = 'rgba(10, 22, 40, 0.85)';
        navbar.style.boxShadow = '0 8px 32px 0 rgba(0, 0, 0, 0.5)';
        navbar.style.borderBottomColor = 'rgba(148, 163, 184, 0.2)';
    }
});

/* Mobile Menu Toggle */
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');

if (burger) {
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        burger.classList.toggle('toggle');
    });
}

/* Lazy Loading & Scroll Reveal Animation */
const revealElements = document.querySelectorAll('section, .service-card, .portfolio-item');

// Intersection Observer for lazy loading animations
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Add active class for animation
            entry.target.classList.add('active');

            // Stop observing once revealed (performance optimization)
            revealObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px' // Trigger slightly before element enters viewport
});

// Apply reveal class and observe elements
revealElements.forEach((el, index) => {
    el.classList.add('reveal');
    // Stagger the observation slightly for smoother loading
    setTimeout(() => {
        revealObserver.observe(el);
    }, index * 50);
});

// Reduce motion for users who prefer it
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    revealElements.forEach(el => {
        el.classList.add('active');
        el.classList.remove('reveal');
    });
}

/* Portfolio Filtering Logic */
const filterBtns = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.getAttribute('data-filter');

        portfolioItems.forEach(item => {
            if (filter === 'all' || item.getAttribute('data-category') === filter) {
                item.style.display = 'block';
                setTimeout(() => item.style.opacity = '1', 10);
            } else {
                item.style.opacity = '0';
                setTimeout(() => item.style.display = 'none', 300);
            }
        });
    });
});

/* Contact Form Submission Simulation */
const contactForm = document.getElementById('contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            message: document.getElementById('message').value
        };

        console.log('Form Submitted:', formData);

        // Simulating success
        const submitBtn = contactForm.querySelector('button');
        const originalText = submitBtn.innerText;

        submitBtn.innerText = 'Message Sent! ✨';
        submitBtn.style.backgroundColor = '#22c55e';
        submitBtn.style.boxShadow = '0 0 15px rgba(34, 197, 94, 0.4)';

        setTimeout(() => {
            submitBtn.innerText = originalText;
            submitBtn.style.backgroundColor = '';
            submitBtn.style.boxShadow = '';
            contactForm.reset();
        }, 3000);
    });
}

/* Back to Top Logic */
const backToTopBtn = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        if (backToTopBtn) backToTopBtn.classList.add('show');
    } else {
        if (backToTopBtn) backToTopBtn.classList.remove('show');
    }

    updateActiveLink();
});

if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

/* Active Link Tracking */
const sections = document.querySelectorAll('header, section');
const navLinks = document.querySelectorAll('.nav-links a');

function updateActiveLink() {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= (sectionTop - 100)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (current && link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
}

/* Smooth Scroll for Navigation Links */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
