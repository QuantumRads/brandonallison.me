const root = document.documentElement;
const themeToggle = document.querySelector('.theme-toggle');
const menuToggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.site-nav');
const mobileQuery = window.matchMedia('(max-width: 640px)');

function updateThemeLabel() {
  const label = `Switch to ${root.dataset.theme === 'dark' ? 'light' : 'dark'} theme`;
  themeToggle.setAttribute('aria-label', label);
  themeToggle.title = label;
}

themeToggle.hidden = false;
updateThemeLabel();
themeToggle.addEventListener('click', () => {
  root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
  updateThemeLabel();
  try {
    localStorage.setItem('portfolio-theme', root.dataset.theme);
  } catch {
    // The current theme remains usable without persistent storage.
  }
});

function setMenu(open) {
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.textContent = open ? 'Close' : 'Menu';
  navigation.hidden = mobileQuery.matches && !open;
}

function syncMenu() {
  menuToggle.hidden = !mobileQuery.matches;
  setMenu(false);
}

menuToggle.addEventListener('click', () => {
  setMenu(menuToggle.getAttribute('aria-expanded') !== 'true');
});
navigation.addEventListener('click', (event) => {
  if (event.target.closest('a') && mobileQuery.matches) setMenu(false);
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && menuToggle.getAttribute('aria-expanded') === 'true') {
    setMenu(false);
    menuToggle.focus();
  }
});
mobileQuery.addEventListener('change', syncMenu);
syncMenu();
document.querySelector('#year').textContent = new Date().getFullYear();
