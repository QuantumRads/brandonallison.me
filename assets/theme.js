// Run before CSS loads to prevent a flash of the wrong saved theme.
(() => {
  let theme;
  try {
    theme = localStorage.getItem('portfolio-theme');
  } catch {
    // Storage can be disabled; the system preference still works.
  }
  if (theme !== 'light' && theme !== 'dark') {
    theme = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  }
  document.documentElement.dataset.theme = theme;
})();
