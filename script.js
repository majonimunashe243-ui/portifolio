
// ================= SCRIPT.JS =================

// Typing animation
const text = ["Engineer", "Developer", "AI Enthusiast"];
let i = 0, j = 0;
let current = "";
let isDeleting = false;

function type() {
  current = text[i];

  if (!isDeleting) {
    document.getElementById("typing").innerHTML = current.substring(0, j++);
    if (j > current.length) {
      isDeleting = true;
      setTimeout(type, 1000);
      return;
    }
  } else {
    document.getElementById("typing").innerHTML = current.substring(0, j--);
    if (j === 0) {
      isDeleting = false;
      i = (i + 1) % text.length;
    }
  }
  setTimeout(type, isDeleting ? 50 : 100);
}

type();

// Hamburger menu
function toggleMenu() {
  document.getElementById("menu").classList.toggle("show");
}

// Scroll animation
const faders = document.querySelectorAll('.fade');
window.addEventListener('scroll', () => {
  faders.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 50) {
      el.classList.add('show');
    }
  });
});

// Add project dynamically
function addProject() {
  const name = prompt("Enter project name:");
  const desc = prompt("Enter project description:");

  if (name && desc) {
    const container = document.querySelector('.project-container');
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `<h3>${name}</h3><p>${desc}</p>`;
    container.insertBefore(card, document.querySelector('.add-card'));
  }
}
