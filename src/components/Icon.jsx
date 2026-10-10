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
    plus: <path d="M12 5v14M5 12h14" />,
    github: <path d="M9 19c-4.3 1.3-4.3-2.2-6-2.6m12 5v-3.9a3.4 3.4 0 0 0-1-2.7c3.3-.4 6.7-1.6 6.7-7.3a5.7 5.7 0 0 0-1.5-4 5.3 5.3 0 0 0-.1-4s-1.2-.4-4.1 1.5a14.1 14.1 0 0 0-7.4 0C4.7-.9 3.5-.5 3.5-.5a5.3 5.3 0 0 0-.1 4 5.7 5.7 0 0 0-1.5 4c0 5.7 3.4 6.9 6.7 7.3a3.4 3.4 0 0 0-1 2.7v3.9" transform="translate(1 2) scale(.9)" />,
  };
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>{paths[name]}</svg>;
}
