# brandonallison.me

Brandon Allison's personal portfolio, built with **React 19 and Vite**. A responsive blue design with reusable components, light/dark themes, mobile navigation, and editable project content.

## Run locally

Install Node.js 22.13 or newer, then run:

```sh
npm ci
npm run dev
```

Open http://localhost:5173. Vite refreshes your changes while developing.

## Check, build, and preview

```sh
npm run check
npm run build
npm run preview
```

`check` validates the configuration and plain JavaScript files. The production build also compiles and validates the React JSX and imports. The static output is written to `dist/`; preview serves it at http://localhost:4173.

## Structure

```text
src/
  main.jsx                 React entry point
  App.jsx                  Page composition
  styles.css               Blue palette, themes, and responsive layouts
  components/
    Header.jsx             Floating navigation and theme control
    Hero.jsx               Introduction and CSS identity artwork
    About.jsx              Personal introduction
    Projects.jsx           Project cards and coming-soon space
    Contact.jsx            Contact links
    Footer.jsx             Footer and back-to-top link
    SectionHeading.jsx     Shared section heading
    Icon.jsx               Shared SVG icons
  data/portfolio.js        Profile, navigation, and project content
  hooks/useTheme.js        React theme state and persistence
public/
  favicon.svg              Blue initials favicon
  theme.js                 Initial theme before React loads
index.html                 HTML shell and search metadata
vite.config.js             React/Vite setup with relative asset paths
```

## Customize

- Edit `src/data/portfolio.js` for your profile, GitHub link, and projects. No work history, credentials, or email address are assumed.
- Edit the individual React components for layout and section wording. The hero and project artwork are made in CSS and need no external images.
- Change the theme variables in `src/styles.css` to adjust the palette.
- Add a contact email or other links in `src/components/Contact.jsx` when ready.
- Update the title and description in `index.html`, and replace `public/favicon.svg` if needed.

The visitor's theme choice is remembered when browser storage is available. A skip link, keyboard focus states, an Escape-to-close mobile menu, and reduced-motion support are included.

## Hosting

Deploy the built **`dist/` folder**, rather than the source files, to a static host. Relative asset paths support a repository subpath as well as a custom domain. No routing server is needed for this single-page portfolio.

Hosting and DNS for `brandonallison.me` are not configured by this starter. For GitHub Pages, use a build-based deployment that runs `npm ci` and `npm run build` and publishes `dist/`.

## License

MIT — see [LICENSE](LICENSE).
