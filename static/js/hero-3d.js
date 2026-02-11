// 3D Hero Image Effect with VanillaTilt and Parallax
document.addEventListener("DOMContentLoaded", () => {

    // --- 3D TILT INIT FOR HERO IMAGE ---
    const pfpCard = document.querySelector(".pfp-card");
    
    if (pfpCard) {
        VanillaTilt.init(pfpCard, {
            max: 15,              // Maximum tilt rotation (degrees)
            speed: 400,           // Speed of the tilt effect
            glare: true,          // Enable glare effect
            "max-glare": 0.3,     // Maximum glare opacity
            gyroscope: true,      // Enable gyroscope for mobile
            scale: 1.05,          // Scale on hover
        });
    }

    // --- PARALLAX MOUSE MOVEMENT ---
    const heroSection = document.querySelector(".hero");
    const heroContent = heroSection ? heroSection.querySelector(".container > div") : null;

    if (heroSection && heroContent) {
        heroSection.addEventListener("mousemove", (e) => {
            const rect = heroSection.getBoundingClientRect();
            const x = (e.clientX - rect.left - rect.width / 2) / 50;
            const y = (e.clientY - rect.top - rect.height / 2) / 50;

            // Subtle parallax movement for the entire content
            if (heroContent) {
                heroContent.style.transform = `translateX(${x}px) translateY(${y}px)`;
            }
        });

        // Reset on mouse leave
        heroSection.addEventListener("mouseleave", () => {
            if (heroContent) {
                heroContent.style.transform = `translateX(0) translateY(0)`;
            }
        });
    }

    // --- FLOATING DOODLES ANIMATION ---
    const doodles = document.querySelectorAll(".doodle");
    
    doodles.forEach((doodle, index) => {
        // Random floating animation with different delays
        doodle.style.animationDelay = `${index * 0.7}s`;
        
        // Add subtle rotation on mouse move
        if (heroSection) {
            heroSection.addEventListener("mousemove", (e) => {
                const rect = heroSection.getBoundingClientRect();
                const moveX = (e.clientX - rect.left - rect.width / 2) / 100;
                const moveY = (e.clientY - rect.top - rect.height / 2) / 100;
                
                doodle.style.transform = `translate(${moveX * (index + 1)}px, ${moveY * (index + 1)}px) rotate(${moveX * 2}deg)`;
            });
        }
    });

});
