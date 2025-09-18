// Scroll to top
const scrollBtn = document.getElementById("scrollToTopBtn");

window.addEventListener("scroll", () => {
  scrollBtn.style.display = window.scrollY > 300 ? "block" : "none";
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Reveal sections on scroll
const revealSections = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target); // Animate only once
      }
    });
  },
  { threshold: 0.1 }
);

revealSections.forEach(section => {
  observer.observe(section);
});

// Contact form
document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thanks for reaching out. I'll get back to you soon!");
  this.reset();
});

const themeBtn = document.getElementById("theme-toggle");
const currentTheme = localStorage.getItem("theme") || "light";
document.documentElement.setAttribute("data-theme", currentTheme);
themeBtn.textContent = currentTheme === "dark" ? "☀️" : "🌙";

themeBtn.addEventListener("click", () => {
  const isDark = document.documentElement.getAttribute("data-theme") === "dark";
  const newTheme = isDark ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
  themeBtn.textContent = isDark ? "🌙" : "☀️";
});

