// Replace with your reCAPTCHA v3 SITE KEY from Google Console
const RECAPTCHA_SITE_KEY = 'YOUR_RECAPTCHA_SITE_KEY_HERE';

document.getElementById("supportForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value.trim();
    const formMessage = document.getElementById("formMessage");

    if (name === "" || email === "" || subject === "" || message === "") {
        formMessage.style.color = "red";
        formMessage.textContent = "Please fill in all fields.";
        return;
    }

    if (!validateEmail(email)) {
        formMessage.style.color = "red";
        formMessage.textContent = "Please enter a valid email address.";
        return;
    }

    // If reCAPTCHA key not set, bypass and submit directly
    if (!RECAPTCHA_SITE_KEY || RECAPTCHA_SITE_KEY === 'YOUR_RECAPTCHA_SITE_KEY_HERE') {
        submitForm();
        return;
    }

    // Execute reCAPTCHA before submitting
    grecaptcha.ready(function() {
        grecaptcha.execute(RECAPTCHA_SITE_KEY, { action: 'submit' }).then(function(token) {
            document.getElementById('recaptchaToken').value = token;
            submitForm();
        });
    });
});

function submitForm() {
    const formMessage = document.getElementById("formMessage");
    formMessage.style.color = "#00f5a0";
    formMessage.textContent = "Redirecting you to WhatsApp…";

    // Gather values again for message payload
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value.trim();

    // Construct WhatsApp text
    let waText = `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`;

    const waNumber = '2348171777697'; // change to your real WhatsApp number (no + or dashes)
    const waUrl = `https://wa.me/${waNumber}?text=` + encodeURIComponent(waText);

    // reset the form locally
    document.getElementById("supportForm").reset();
    document.getElementById('recaptchaToken').value = '';

    // navigate to WhatsApp
    window.location.href = waUrl;
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// MOBILE MENU TOGGLE FOR SUPPORT PAGE
const supMenuToggle = document.getElementById('menu-toggle');
const supNavMenu = document.getElementById('nav-menu');

if (supMenuToggle && supNavMenu) {
    supMenuToggle.addEventListener('click', () => {
        const open = supNavMenu.classList.toggle('show');
        supMenuToggle.textContent = open ? '✕' : '☰';
        supMenuToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
}

if (supNavMenu) {
    supNavMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (supNavMenu.classList.contains('show')) {
                supNavMenu.classList.remove('show');
                if (supMenuToggle) supMenuToggle.textContent = '☰';
            }
        });
    });
}