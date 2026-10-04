const body = document.body;
const themeBtn = document.getElementById("themeBtn");
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

const savedTheme = localStorage.getItem("bk-theme");
if (savedTheme === "light") {
  body.classList.add("light");
  themeBtn.textContent = "☾";
}

themeBtn.addEventListener("click", () => {
  body.classList.toggle("light");
  const light = body.classList.contains("light");
  localStorage.setItem("bk-theme", light ? "light" : "dark");
  themeBtn.textContent = light ? "☾" : "☀";
});

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  menuBtn.textContent = navLinks.classList.contains("open") ? "×" : "☰";
});

document.querySelectorAll("#navLinks a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuBtn.textContent = "☰";
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("show");
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
document.getElementById("year").textContent = new Date().getFullYear();
