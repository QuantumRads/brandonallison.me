// Set the initial theme before React loads to avoid a color flash.
(() => {
  let theme;
  try { theme = localStorage.getItem('portfolio-theme'); } catch { /* Storage is optional. */ }
  if (theme !== 'light' && theme !== 'dark') {
    theme = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  }
  document.documentElement.dataset.theme = theme;
})();
