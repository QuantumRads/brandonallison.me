import { useEffect, useRef, useState } from 'react';
import { navigation, profile } from '../data/portfolio.js';
import Icon from './Icon.jsx';

export default function Header({ theme, toggleTheme }) {
  const [open, setOpen] = useState(false);
  const menuButton = useRef(null);
  const nav = useRef(null);

  useEffect(() => {
    if (!open) return;
    nav.current?.querySelector('a')?.focus();

    function onKeyDown(event) {
      if (event.key === 'Escape') {
        setOpen(false);
        menuButton.current?.focus();
      }
    }
    function onPointerDown(event) {
      if (!nav.current?.contains(event.target) && !menuButton.current?.contains(event.target)) {
        setOpen(false);
      }
    }
    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('pointerdown', onPointerDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('pointerdown', onPointerDown);
    };
  }, [open]);

  useEffect(() => {
    const query = window.matchMedia('(min-width: 701px)');
    const closeOnDesktop = () => { if (query.matches) setOpen(false); };
    query.addEventListener('change', closeOnDesktop);
    return () => query.removeEventListener('change', closeOnDesktop);
  }, []);

  return (
    <header className="header-wrap">
      <div className="site-header container">
        <a
          className="brand"
          href="#home"
          aria-label={`${profile.firstName} ${profile.lastName}, home`}
          onClick={() => setOpen(false)}
        >
          <span className="brand-mark">ba<span>.</span></span>
          <span className="brand-name">{profile.firstName} {profile.lastName}</span>
        </a>
        <nav ref={nav} className={`site-nav${open ? ' is-open' : ''}`} id="main-nav" aria-label="Main navigation">
          {navigation.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</a>
          ))}
        </nav>
        <div className="header-actions">
          <button
            className="icon-button theme-button"
            type="button"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
          >
            <Icon name={theme === 'dark' ? 'sun' : 'moon'} size={18} />
          </button>
          <a className="header-github" href={profile.github}>GitHub <Icon name="arrow" size={15} /></a>
          <button
            ref={menuButton}
            className="icon-button menu-button"
            type="button"
            aria-expanded={open}
            aria-controls="main-nav"
            aria-label={open ? 'Close navigation' : 'Open navigation'}
            onClick={() => setOpen((current) => !current)}
          >
            <Icon name={open ? 'close' : 'menu'} />
          </button>
        </div>
      </div>
    </header>
  );
}
