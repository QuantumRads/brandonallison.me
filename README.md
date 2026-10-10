# brandonallison.me

Personal portfolio website for Brandon Allison. A responsive HTML, CSS, and JavaScript foundation with no third-party runtime dependencies.

## Run locally

Install Node.js 22 or newer, then run:

```sh
npm run dev
```

Open http://localhost:5173. No `npm install` is needed. Refresh the browser after editing a file.

## Check and build

```sh
npm run check
npm run build
npm run preview
```

The build copies the public site into `dist/`. Preview serves that output on the same port; stop the development server first. Set `PORT` to use another port.

## Structure

```text
index.html          Semantic page content and metadata
assets/styles.css   Theme tokens, layout, and responsive styles
assets/theme.js     Initial theme preference before the page paints
assets/main.js      Theme toggle, mobile navigation, and footer year
assets/favicon.svg  Initials favicon
scripts/serve.mjs   Local static development/preview server
scripts/build.mjs   Static production build
```

## Customize

- Edit `index.html` to update the introduction, About text, project cards, and contact links. The portfolio is the first project; the second card is an explicit placeholder. No experience, credentials, or contact email are assumed.
- Update CSS variables at the top of `assets/styles.css` to change colors. Light and dark themes are included; the visitor's choice is remembered when browser storage is available.
- Duplicate the project article to add work, replacing its title, description, technologies, and link.
- Add an email or other contact method to the Contact section when ready.
- Replace `assets/favicon.svg` to change the favicon.

Navigation and content remain usable without JavaScript. Keyboard focus styles, a skip link, a collapsible mobile menu, and reduced-motion support are included.

## Hosting

`dist/` is suitable for a static host, including GitHub Pages. All asset paths are relative, so the site can also work under a repository subpath. This starter does not enable hosting or configure domain DNS. When deploying to `brandonallison.me`, configure the custom domain with your host and DNS provider.

## License

MIT — see [LICENSE](LICENSE).
