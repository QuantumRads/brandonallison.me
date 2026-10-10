# brandonallison.me

Brandon Allison's professional portfolio, built with **React 19 and Vite**. A responsive blue site focused on network operations, Microsoft cloud, systems administration, migrations, and documentation, with light/dark themes and mobile navigation.

## View without npm

Download or clone the repository and **double-click the root `index.html`**. It is a self-contained, compiled React page with its JavaScript, CSS, and favicon embedded. You do not need npm, a local server, or an internet connection to view it. External GitHub links still need an internet connection.

The root `index.html` is generated. Edit the source files described below and rebuild when you want to change the page.

## Develop with React

Install Node.js 22.13 or newer, then run:

```sh
npm ci
npm run dev
```

Open http://localhost:5173. Vite serves the development entry in `src/index.html` and refreshes your source changes while developing.

## Check, build, and preview

```sh
npm run check
npm run build
npm run preview
```

`check` validates the configuration and plain JavaScript files. The production build compiles the React JSX and imports, bundles React into a classic script, and embeds the script and styles in a single HTML file. It updates both **`index.html`** and **`dist/index.html`**. Commit the updated root file alongside source changes to keep the double-click preview current.

You can open either generated file directly. The optional preview server serves `dist/` at http://localhost:4173.

## Structure

```text
index.html                 Generated React page; double-click to view
src/
  index.html               Editable HTML shell and search metadata
  main.jsx                 React entry point
  App.jsx                  Page composition
  styles.css               Blue palette, themes, and responsive layouts
  components/
    Header.jsx             Floating navigation and theme control
    Hero.jsx               Introduction and CSS identity artwork
    About.jsx              Personal introduction
    Expertise.jsx          Current capabilities and technical focus
    Experience.jsx         Optara and earlier technical roles
    Projects.jsx           Earlier infrastructure work and personal projects
    Certifications.jsx     Individual CompTIA and Microsoft MTA credentials
    Education.jsx          College education
    Contact.jsx            Contact links
    Footer.jsx             Footer and back-to-top link
    SectionHeading.jsx     Shared section heading
    Icon.jsx               Shared SVG icons
  data/portfolio.js        Profile, experience, projects, education, and certifications
  hooks/useTheme.js        React theme state and persistence
public/
  favicon.svg              Blue initials favicon
  theme.js                 Initial theme before React loads
scripts/build.mjs          Compile and generate the standalone page
vite.config.js             React/Vite development configuration
```

## Customize

- Edit `src/data/portfolio.js` for your profile, GitHub link, capabilities, experience, projects, education, and certifications. The current Optara role comes from Brandon's update; earlier experience and projects come from his supplied resume.
- Edit the individual React components for layout and section wording. The hero and project artwork are made in CSS and need no external images.
- Change the theme variables in `src/styles.css` to adjust the palette.
- Add a contact email or other links in `src/components/Contact.jsx` when ready.
- Update the title and description in `src/index.html`, and replace `public/favicon.svg` if needed.
- Run `npm run build` after edits to regenerate the page you open directly.

Current-role start dates and the end date for VP Demand Creation Services need an update before displaying full employment ranges. Earlier certifications are labeled by earned year, rather than implying current certification status. A public contact email can be added when Brandon supplies one; the legacy resume's address, phone number, and email are not embedded in this site.

The visitor's theme choice is remembered when browser storage is available. The theme control also works when local-file browser storage is restricted. A skip link, keyboard focus states, an Escape-to-close mobile menu, and reduced-motion support are included.

## Hosting

Deploy **`dist/`** to a static host, or serve the generated root `index.html`. The generated page has no external asset paths, so it can also be served under a repository subpath. No routing server is needed for this single-page portfolio.

Hosting and DNS for `brandonallison.me` are not configured by this starter. For GitHub Pages, publish the root file directly or use a deployment that runs `npm ci` and `npm run build` and publishes `dist/`.

## License

MIT — see [LICENSE](LICENSE).
