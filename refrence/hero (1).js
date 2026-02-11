document.addEventListener("DOMContentLoaded", () => {

    // --- 3D TILT INIT ---
    VanillaTilt.init(document.querySelector(".pfp-card"), {
        max: 15,
        speed: 400,
        glare: true,
        "max-glare": 0.2,
        gyroscope: true,
    });

    // --- PARALLAX EFFECT ---
    const heroSection = document.querySelector(".hero-section");
    const bgLayer = document.querySelector(".hero-bg-layer");
    const content = document.querySelector(".hero-content");

    heroSection.addEventListener("mousemove", (e) => {
        const x = (window.innerWidth - e.pageX * 2) / 100;
        const y = (window.innerHeight - e.pageY * 2) / 100;

        // Move background opposite to mouse
        bgLayer.style.transform = `translateZ(-50px) translateX(${x}px) translateY(${y}px)`;

        // Move content slightly
        content.style.transform = `translateX(${-x * 0.5}px) translateY(${-y * 0.5}px)`;
    });

    // --- SCROLL INDICATOR ---
    const scrollBtn = document.querySelector(".scroll-indicator");
    scrollBtn.addEventListener("click", () => {
        const historySection = document.getElementById("history");
        historySection.scrollIntoView({ behavior: "smooth" });
    });

});
