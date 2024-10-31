// JavaScript for Wedding Invitation Website

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Toggle Side Navigation Bar
const menuBtn = document.getElementById('menuBtn');
const sideNav = document.getElementById('menu');

menuBtn.addEventListener('click', () => {
    if (sideNav.style.transform === 'translateX(0px)') {
        sideNav.style.transform = 'translateX(-300px)'; // Hide the side nav
    } else {
        sideNav.style.transform = 'translateX(0)'; // Show the side nav
    }
});

// Close Side Navigation when clicking outside
document.addEventListener('click', (e) => {
    if (!sideNav.contains(e.target) && !menuBtn.contains(e.target)) {
        sideNav.style.transform = 'translateX(-300px)';
    }
});

// Countdown Timer
const countdown = document.getElementById('timer');
const weddingDate = new Date('May 15, 2025 14:00:00').getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = weddingDate - now;

    if (timeLeft <= 0) {
        countdown.innerHTML = "Today is the big day!";
        clearInterval(timerInterval);
        return;
    }

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    countdown.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

const timerInterval = setInterval(updateCountdown, 1000);

// RSVP Modal Handling
const rsvpBtn = document.getElementById('rsvpBtn');
const rsvpModal = document.getElementById('rsvpModal');
const closeRsvp = document.getElementById('closeRsvp');

rsvpBtn.addEventListener('click', () => {
    rsvpModal.style.display = 'flex';
});

closeRsvp.addEventListener('click', () => {
    rsvpModal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === rsvpModal) {
        rsvpModal.style.display = 'none';
    }
});

// RSVP Form Submission
const rsvpForm = document.getElementById('rsvpForm');
const rsvpMessage = document.getElementById('rsvpMessage');

rsvpForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    if (name && email) {
        rsvpMessage.innerHTML = `<p>Thank you, ${name}! Your RSVP has been received.</p>`;
        rsvpMessage.style.color = 'green';
        rsvpForm.reset();
    } else {
        rsvpMessage.innerHTML = '<p>Please fill in all fields.</p>';
        rsvpMessage.style.color = 'red';
    }
});

// Responsive Google Map Iframe
function resizeGoogleMap() {
    const mapIframe = document.querySelector('iframe[src*="google.com/maps"]');
    if (mapIframe) {
        mapIframe.style.width = '100%';
        mapIframe.style.height = window.innerWidth >= 768 ? '450px' : '300px';
    }
}

window.addEventListener('load', resizeGoogleMap);
window.addEventListener('resize', resizeGoogleMap);
