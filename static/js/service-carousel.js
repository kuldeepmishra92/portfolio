// Service Card Click Handler for 3D Carousel
document.addEventListener('DOMContentLoaded', () => {
    // Service data with full details
    const serviceDetails = {
        0: {
            icon: '🎬',
            title: 'YouTube Video Editing',
            description: 'Professional editing for vlogs, tutorials, gaming, and more. Fast cuts, smooth transitions, and engaging pacing that keeps viewers watching.',
            color: '251, 191, 36',
            features: [
                'Fast pacing with dynamic cuts and transitions',
                'Color grading and visual enhancement',
                'Sound design and audio mixing',
                'Captions and subtitles',
                'Intro/Outro animations',
                'Upload-ready files in any format'
            ]
        },
        1: {
            icon: '🖼️',
            title: 'Thumbnail Design',
            description: 'Eye-catching, click-worthy thumbnails that stand out. Proven designs that increase CTR by 30-50% and boost your video performance.',
            color: '59, 130, 246',
            features: [
                'High-CTR designs proven to increase clicks',
                'Custom graphics and text overlays',
                'Brand consistency across all thumbnails',
                'A/B testing options',
                'Multiple variations per video',
                'Fast 24-hour turnaround'
            ]
        },
        2: {
            icon: '📱',
            title: 'Social Media Content',
            description: 'Short-form content for Instagram Reels, TikTok, and YouTube Shorts. Optimized for mobile viewing with trending effects.',
            color: '139, 92, 246',
            features: [
                'Vertical format optimization (9:16)',
                'Trending effects and transitions',
                'Hook-focused opening 3 seconds',
                'Captions optimized for no-sound viewing',
                'Platform-specific export settings',
                'Batch editing for content series'
            ]
        },
        3: {
            icon: '✨',
            title: 'Motion Graphics & VFX',
            description: 'Dynamic text animations, lower thirds, transitions, and visual effects that add polish and professionalism to your content.',
            color: '236, 72, 153',
            features: [
                'Custom animated lower thirds and titles',
                'Kinetic typography and text reveals',
                'Transition effects and scene changes',
                'VFX elements and compositing',
                'Logo animations and brand intros',
                'Green screen and chroma keying'
            ]
        },
        4: {
            icon: '🎯',
            title: 'Commercial & Ad Editing',
            description: 'High-impact promotional videos and advertisements designed to convert. Perfect for product launches, sales, and marketing campaigns.',
            color: '34, 197, 94',
            features: [
                'Conversion-focused storytelling',
                'Product showcase and demonstrations',
                'Call-to-action optimization',
                'Platform-specific ad formats',
                'Music licensing and sound design',
                'Multiple length variations (15s, 30s, 60s)'
            ]
        },
        5: {
            icon: '🎨',
            title: 'Graphic Design',
            description: 'Logos, banners, social media graphics, and brand assets. Complete visual identity solutions that make your brand memorable.',
            color: '249, 115, 22',
            features: [
                'Custom logo design and brand identity',
                'Social media graphics and templates',
                'Banner ads and marketing materials',
                'Business cards and print design',
                'Brand style guides',
                'Unlimited revisions until perfect'
            ]
        }
    };

    // Get all service cards
    const serviceCards = document.querySelectorAll('.service-card-3d');
    
    // Create modal element
    const modal = document.createElement('div');
    modal.className = 'service-modal';
    modal.id = 'service-modal';
    document.body.appendChild(modal);

    // Function to show modal
    function showModal(serviceIndex) {
        const service = serviceDetails[serviceIndex];
        if (!service) return;

        const featuresHTML = service.features.map(feature => 
            `<li>${feature}</li>`
        ).join('');

        modal.style.setProperty('--modal-color', service.color);
        modal.innerHTML = `
            <div class="service-modal-content">
                <button class="service-modal-close" aria-label="Close">&times;</button>
                <div class="service-modal-icon">${service.icon}</div>
                <h2>${service.title}</h2>
                <p>${service.description}</p>
                <ul class="service-modal-features">
                    ${featuresHTML}
                </ul>
            </div>
        `;

        modal.classList.add('active');
        document.body.style.overflow = 'hidden';

        // Close button handler
        const closeBtn = modal.querySelector('.service-modal-close');
        closeBtn.addEventListener('click', closeModal);

        // Click outside to close
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal();
            }
        });

        // ESC key to close
        document.addEventListener('keydown', escHandler);
    }

    // Function to close modal
    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = '';
        document.removeEventListener('keydown', escHandler);
    }

    // ESC key handler
    function escHandler(e) {
        if (e.key === 'Escape') {
            closeModal();
        }
    }

    // Add click handlers to all cards
    serviceCards.forEach((card, index) => {
        const cardIndex = parseInt(card.style.getPropertyValue('--index'));
        card.addEventListener('click', (e) => {
            e.stopPropagation();
            showModal(cardIndex);
        });

        // Add visual feedback on hover
        card.addEventListener('mouseenter', () => {
            card.style.transform = `rotateY(calc((360deg / 6) * ${cardIndex})) translateZ(420px)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = `rotateY(calc((360deg / 6) * ${cardIndex})) translateZ(var(--translateZ))`;
        });
    });
});
