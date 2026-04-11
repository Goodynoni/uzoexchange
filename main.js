/**
 * UzoExchange - Main JavaScript
 * Handles navigation, user interactions, and future API integrations
 */

// ==================== MOBILE MENU TOGGLE ====================
document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menu-toggle");
  const navMenu = document.getElementById("nav-menu");
  const navLinks = document.querySelectorAll(".nav-link");

  // Toggle menu visibility
  if (menuToggle) {
    menuToggle.addEventListener("click", function (e) {
      e.stopPropagation();
      navMenu.classList.toggle("show");
    });
  }

  // Close menu when a link is clicked
  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      navMenu.classList.remove("show");
      // Update active link
      navLinks.forEach((l) => l.classList.remove("active"));
      this.classList.add("active");
    });
  });

  // Close menu when clicking outside
  document.addEventListener("click", function (e) {
    if (
      navMenu &&
      !navMenu.contains(e.target) &&
      !menuToggle.contains(e.target)
    ) {
      navMenu.classList.remove("show");
    }
  });
});

// ==================== BUTTON HANDLERS ====================

/**
 * Handle Buy Crypto action
 */
function buyCrypto() {
  console.log("Buy Crypto clicked");
  // TODO: Redirect to buy crypto page or open modal
  window.location.href = 'https://wa.me/2348171777697?text=Hello%20I%20want%20to%20buy%20crypto';
}

/**
 * Handle Sell Crypto action
 */
function sellCrypto() {
  console.log("Sell Crypto clicked");
  // TODO: Redirect to sell crypto page or open modal
  window.location.href = 'https://wa.me/2348171777697?text=Hello%20I%20want%20to%20sell%20crypto';
}

/**
 * Handle Trade Gift Cards action
 */
function tradeGiftCards() {
  console.log("Trade Gift Cards clicked");
  // TODO: Redirect to gift cards page or open modal
  window.location.href = 'https://wa.me/2348171777697?text=Hello%20I%20want%20to%20trade%20gift%20cards';
}

/**
 * Handle Learn More action
 */
function learnMore() {
  console.log("Learn More clicked");
  // Scroll to how-it-works section
  const section = document.querySelector(".how-it-works");
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}

// ==================== VIEW ALL RATES HANDLER ====================
const viewAllBtn = document.querySelector(".view-all");
if (viewAllBtn) {
  viewAllBtn.addEventListener("click", function () {
    console.log("View All Rates clicked");
    // TODO: Load more rates from API or redirect to rates page
    alert("View All Rates - Coming soon!");
  });
}

// ==================== SMOOTH SCROLL FOR ANCHOR LINKS ====================
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const href = this.getAttribute("href");
    if (href !== "#") {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  });
});

// ==================== SCROLL ANIMATION (FUTURE ENHANCEMENT) ====================
/**
 * Optional: Add animations when elements come into view
 * Uncomment to enable
 */

/*
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -100px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate-in");
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll(".step-card, .rate-card, .action-card").forEach((el) => {
  observer.observe(el);
});
*/

// ==================== MARKET RATES (PLACEHOLDER FOR API INTEGRATION) ====================
/**
 * Placeholder function for loading live crypto prices
 * TODO: Integrate with CoinGecko API or Binance API
 * 
 * Example API endpoints:
 * - CoinGecko: https://api.coingecko.com/api/v3/simple/price
 * - Binance: https://api.binance.com/api/v3/ticker/price
 */
function loadMarketRates() {
  console.log("Loading market rates...");

  // Placeholder data
  const rates = {
    BTC: { price: 48532, change: 2.5 },
    ETH: { price: 3255.87, change: 1.8 },
    USDT: { price: 1.0, change: -0.1 },
    LTC: { price: 180.45, change: 1.2 },
  };

  console.log("Current market rates:", rates);

  // TODO: Update DOM with fetched rates
  // This function will be called when API integration is ready
}

// Call on page load
// loadMarketRates();

// ==================== CONSOLE LOGGING ====================
console.log("✅ UzoExchange App Loaded Successfully");
console.log("📊 Market rates module: Ready for API integration");
console.log("🔄 Navigation system: Active");
console.log("🎯 All features initialized");
