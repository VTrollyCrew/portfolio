function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Create twinkling stars
function createStars() {
  const starsContainer = document.createElement("div");
  starsContainer.className = "stars";
  document.body.appendChild(starsContainer);

  // Generate 200 stars
  for (let i = 0; i < 200; i++) {
    const star = document.createElement("div");
    star.className = "star";

    // Randomize star properties
    const size = Math.random() * 2;
    const duration = `${5 + Math.random() * 10}s`;
    const delay = `${Math.random() * 5}s`;

    if (Math.random() > 0.7) {
      // 30% chance of a shooting star
      const shooter = document.createElement("div");
      shooter.className = "shooting-star";
      shooter.style.left = `${Math.random() * 100}%`;
      shooter.style.top = `${Math.random() * 100}%`;
      starsContainer.appendChild(shooter);
    }

    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;
    star.style.animationDuration = duration;
    star.style.animationDelay = delay;

    starsContainer.appendChild(star);
  }
}

// Run on page load
window.onload = createStars;

// New scroll snapping enhancements
document.addEventListener("DOMContentLoaded", () => {
  // Add intersection observer for active section detection
  const sections = document.querySelectorAll(".snap-section");
  const navLinks = document.querySelectorAll(".nav-links a");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("id");
          navLinks.forEach((link) => {
            link.classList.toggle(
              "active",
              link.getAttribute("href") === `#${id}`
            );
          });
        }
      });
    },
    { threshold: 0.5 }
  );

  sections.forEach((section) => observer.observe(section));

  // Smooth scroll for nav links
  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href");
      document.querySelector(targetId).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
});
