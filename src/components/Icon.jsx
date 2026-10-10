export default function Icon({ name, size = 20, ...props }) {
  const paths = {
    arrow: <path d="M7 17 17 7M7 7h10v10" />,
    down: <path d="M12 4v16m-6-6 6 6 6-6" />,
    up: <path d="M12 20V4m-6 6 6-6 6 6" />,
    sun: <><circle cx="12" cy="12" r="4" /><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5" /></>,
    moon: <path d="M20.5 13.1A8.8 8.8 0 0 1 10.9 3.5 8.8 8.8 0 1 0 20.5 13.1Z" />,
    menu: <path d="M4 7h16M4 12h16M4 17h16" />,
    close: <path d="m6 6 12 12M6 18 18 6" />,
    code: <path d="m8 6-6 6 6 6m8-12 6 6-6 6m-3-15-2 18" />,
    network: <><rect x="8" y="2" width="8" height="5" rx="1" /><path d="M12 7v5M4 17v-5h16v5" /><rect x="1" y="17" width="6" height="5" rx="1" /><rect x="9" y="17" width="6" height="5" rx="1" /><rect x="17" y="17" width="6" height="5" rx="1" /><path d="M12 12v5" /></>,
    cloud: <><path d="M7 18a5 5 0 1 1 .5-10A6 6 0 0 1 19 9.5a4.3 4.3 0 0 1-1 8.5H7Z" /><path d="m9 13 3-3 3 3m-3-3v9" /></>,
    server: <><rect x="3" y="3" width="18" height="7" rx="2" /><rect x="3" y="14" width="18" height="7" rx="2" /><path d="M7 6.5h.1M7 17.5h.1M11 6.5h6m-6 11h6" /></>,
    shield: <><path d="M12 2 3 6v6c0 5 9 10 9 10s9-5 9-10V6L12 2Z" /><path d="m8 12 3 3 5-6" /></>,
    book: <><path d="M12 5v16M12 5C9 2 4 2 2 3v16c3-1 7-1 10 2 3-3 7-3 10-2V3c-2-1-7-1-10 2Z" /></>,
    award: <><circle cx="12" cy="8" r="6" /><path d="m8 13-2 9 6-3 6 3-2-9" /><path d="m9.5 8 1.7 1.7L15 6" /></>,
    plan: <><rect x="4" y="4" width="16" height="18" rx="2" /><path d="M9 2h6v4H9zM8 11h1m3 0h4M8 16h1m3 0h4" /></>,
    plus: <path d="M12 5v14M5 12h14" />,
    linkedin: <><rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="7.5" cy="7.5" r=".6" fill="currentColor" /><path d="M7.5 11v6.5M11.5 17.5V11m0 3a3 3 0 0 1 6 0v3.5" /></>,
    github: <path d="M9 19c-4.3 1.3-4.3-2.2-6-2.6m12 5v-3.9a3.4 3.4 0 0 0-1-2.7c3.3-.4 6.7-1.6 6.7-7.3a5.7 5.7 0 0 0-1.5-4 5.3 5.3 0 0 0-.1-4s-1.2-.4-4.1 1.5a14.1 14.1 0 0 0-7.4 0C4.7-.9 3.5-.5 3.5-.5a5.3 5.3 0 0 0-.1 4 5.7 5.7 0 0 0-1.5 4c0 5.7 3.4 6.9 6.7 7.3a3.4 3.4 0 0 0-1 2.7v3.9" transform="translate(1 2) scale(.9)" />,
  };
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>{paths[name]}</svg>;
}
