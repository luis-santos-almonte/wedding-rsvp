// Countdown Timer
function updateCountdown() {
  const weddingDate = new Date('2025-10-11T16:00:00');
  const now = new Date();
  const diff = weddingDate - now;

  if (diff > 0) {
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
  } else {
    document.getElementById('days').textContent = '¡Hoy!';
    document.getElementById('hours').textContent = '¡Es!';
    document.getElementById('minutes').textContent = '¡El!';
    document.getElementById('seconds').textContent = '¡Día!';
  }
}

// Smooth Scroll
function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

// Intersection animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animation = 'fadeInUp 0.8s ease-out forwards';
    }
  });
}, observerOptions);

// Init
document.addEventListener('DOMContentLoaded', function () {
  updateCountdown();
  setInterval(updateCountdown, 1000);
  document.querySelectorAll('.section').forEach(section => {
    observer.observe(section);
  });
});
