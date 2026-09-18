
const year = document.querySelector("#year");
if (year) year.textContent = new Date().getFullYear();

const menuButton = document.querySelector(".menu-button");
const menu = document.querySelector("#primary-menu");
if (menuButton && menu) {
  menuButton.addEventListener("click", () => {
    const open = menu.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(open));
    menuButton.querySelector(".sr-only").textContent = open ? "Close navigation menu" : "Open navigation menu";
  });
}

const themeButton = document.querySelector(".theme-button");
const savedTheme = localStorage.getItem("portfolio-theme");
if (savedTheme === "dark") document.documentElement.setAttribute("data-theme", "dark");
function updateThemeButton() {
  if (!themeButton) return;
  const dark = document.documentElement.getAttribute("data-theme") === "dark";
  themeButton.setAttribute("aria-pressed", String(dark));
  themeButton.setAttribute("aria-label", dark ? "Switch to light theme" : "Switch to dark theme");
  themeButton.textContent = dark ? "☀" : "◐";
}
updateThemeButton();
if (themeButton) {
  themeButton.addEventListener("click", () => {
    const dark = document.documentElement.getAttribute("data-theme") !== "dark";
    document.documentElement.toggleAttribute("data-theme", dark);
    if (dark) localStorage.setItem("portfolio-theme", "dark");
    else localStorage.removeItem("portfolio-theme");
    updateThemeButton();
  });
}

const form = document.querySelector(".contact-form");
if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const status = document.querySelector("#form-status");
    if (status) status.textContent = "Demo only: connect this form to a backend or form service to receive messages.";
  });
}
