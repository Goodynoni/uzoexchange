// NAVBAR TOGGLE (mobile)
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');

if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
        const opened = navMenu.classList.toggle('show');
        // swap icon between hamburger and close
        menuToggle.textContent = opened ? '✕' : '☰';
        menuToggle.setAttribute('aria-expanded', opened ? 'true' : 'false');
    });
}

// Close mobile menu when a nav link is clicked and restore hamburger icon
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        if (navMenu.classList.contains('show')) {
            navMenu.classList.remove('show');
            if (menuToggle) {
                menuToggle.textContent = '☰';
                menuToggle.setAttribute('aria-expanded', 'false');
            }
        }
    });
});

// Reveal elements on scroll with fade-in effect
const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            obs.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

const giftCards = [
    { name: "Amazon Gift Card", rate: "₦850 / $" },
    { name: "Apple / iTunes", rate: "₦820 / $" },
    { name: "Google Play", rate: "₦800 / $" },
    { name: "Steam Wallet", rate: "₦780 / $" },
    { name: "eBay Gift Card", rate: "₦760 / $" },
    { name: "Walmart Gift Card", rate: "₦740 / $" }
];

const giftGrid = document.getElementById("giftGrid");

giftCards.forEach(card => {
    const div = document.createElement("div");
    div.classList.add("gift-card");

    div.innerHTML = `
        <h3>${card.name}</h3>
        <p>Current Rate: ${card.rate}</p>
        <button class="btn-primary">Trade Now</button>
    `;

    div.querySelector('.btn-primary').addEventListener('click', () => {
        window.location.href = 'https://wa.me/2348171777697?text=Hello%20I%20want%20to%20trade%20gift%20cards';
    });

    giftGrid.appendChild(div);
});