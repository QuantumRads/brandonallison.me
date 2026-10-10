import { useEffect, useState } from 'react';

export function useTheme() {
  const [theme, setTheme] = useState(() => {
    if (typeof document === 'undefined') return 'dark';
    return document.documentElement.dataset.theme === 'light' ? 'light' : 'dark';
  });
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'dark' ? '#090d18' : '#f5f8ff');
    try { localStorage.setItem('portfolio-theme', theme); } catch { /* Storage is optional. */ }
  }, [theme]);
  return [theme, () => setTheme((current) => current === 'dark' ? 'light' : 'dark')];
}
