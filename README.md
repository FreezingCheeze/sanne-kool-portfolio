# Sanne Kool — portfolio

Statische portfolio-website voor grafisch vormgever **Sanne Kool**. Deze versie is vanaf scratch opgebouwd in Astro en TypeScript, als vervanging van de Wix-site, zonder Wix-branding of tracking.

De site is volledig statisch en klaar voor Cloudflare Pages.

## Prerequisites

- Node.js **22.12** of hoger (zie `.nvmrc`)
- npm 10 of hoger

## Installation

```bash
npm install
```

## Local development

```bash
npm run dev
```

De ontwikkelserver draait op [http://127.0.0.1:43123](http://127.0.0.1:43123).

Type- en contentchecks:

```bash
npm run check
```

## Production build

```bash
npm run build
npm run preview
```

- Build-output: `dist/`
- Cloudflare Pages: **Build command** `npm run build`, **Output directory** `dist`

## Project structure

```text
src/
├── assets/                 # Portret, merken en projectbeelden
├── components/             # Header, navigatie, kaarten, gallery
├── content/projects/       # Markdown + frontmatter per project
├── data/site.ts            # Merknaam, navigatie, socials, CV-pad
├── layouts/
├── lib/projects.ts
├── pages/
└── styles/
    ├── tokens.css          # Kleuren, typografie, spacing
    └── global.css
public/
├── cv/sanne-kool-cv.pdf
├── favicon.svg
└── _headers
```

## How to edit colors and typography

Pas `src/styles/tokens.css` aan. Alle kleuren, lettertypes, fontgroottes, spacing, contentbreedtes, radii, schaduwen, transitions en de headerhoogte staan daar als CSS custom properties.

Lettertypes worden lokaal geladen via Fontsource (`Cormorant Garamond` en `Source Sans 3`) in `src/styles/global.css`.

## How to edit navigation

Bewerk de array `navigation` in `src/data/site.ts`. Social links en het CV-pad staan in hetzelfde bestand.

## How to add or modify a page

1. Voeg een bestand toe onder `src/pages/`, bijvoorbeeld `src/pages/over/index.astro`.
2. Gebruik `BaseLayout` voor gedeelde header, footer en metadata.
3. Koppel de pagina in `src/data/site.ts` als hij in het menu moet.

Routes zijn lowercase en eindigen met een slash (`trailingSlash: 'always'`).

## How to add a portfolio project

1. Plaats beelden in `src/assets/projects/<slug>/`.
2. Kopieer een bestaand Markdown-bestand in `src/content/projects/`.
3. Vul de frontmatter:

```yaml
title: Projectnaam
slug: projectnaam
category: opleiding | stages | vrijwerk
year: 2025
summary: Korte beschrijving voor kaarten en SEO.
coverImage: ../../assets/projects/projectnaam/cover.jpg
coverAlt: Beschrijving van de cover.
order: 120
listed: true
tools:
  - Adobe Illustrator
galleries:
  - title: Optionele sectietitel
    images:
      - src: ../../assets/projects/projectnaam/beeld-1.jpg
        alt: Beschrijving
```

`order` bepaalt de volgorde, niet de bestandsnaam. Zet `listed: false` voor hulp-pagina’s die niet op overzichtspagina’s horen.

## How to add project images

- Gebruik beschrijvende bestandsnamen.
- Voeg ze toe in `src/assets/projects/<slug>/`.
- Verwijs ernaar in `coverImage` of `galleries`.
- Astro maakt responsive varianten (WebP/AVIF) tijdens de build.
- Houd originelen van hoge kwaliteit achter de hand; in de repo staan gecomprimeerde versies tot circa 2000 px.

## How to replace the CV

Vervang `public/cv/sanne-kool-cv.pdf`. De homepage-knop, `/cv/` en `site.cvPath` wijzen naar dit bestand. Openen gebeurt in een nieuw tabblad; op `/cv/` is er een aparte download-link.

## How to update social links

Pas `site.socials` aan in `src/data/site.ts`.

## How to deploy through GitHub and Cloudflare Pages

1. Push deze repository naar GitHub.
2. In Cloudflare Pages: **Create** → koppel de GitHub-repo.
3. Framework preset: Astro, of handmatig:
   - Build command: `npm run build`
   - Output directory: `dist`
   - Node version: `22`
4. Optioneel environment variable: `PUBLIC_SITE_URL` = `https://jouwdomein.nl` (zonder trailing slash). Deze waarde wordt gebruikt voor canonical URLs, Open Graph en de sitemap. Zet hem ook in `astro.config.mjs` via dezelfde variabele; herbouw na een wijziging.

## How to connect a custom domain

In Cloudflare Pages: **Custom domains** → voeg het domein toe en volg de DNS-instructies. Zet daarna `PUBLIC_SITE_URL` op het definitieve https-adres en deploy opnieuw.

## Content or assets still missing

Deze onderdelen konden niet volledig vanaf Wix worden overgenomen:

- **Basic & Full Color**: alleen een klein coverbeeld was beschikbaar. Binnenpagina’s / spreads van het programmaboekje ontbreken.
- **Wulterkens**: één extra drukwerkfoto ontbrak in de Wix-HTML (`drukwerk-2`).
- **FreeBee-animatie**: de geanimeerde banner is als stilstaand beeld overgenomen, niet als video of GIF.
- **Alt-teksten** van veel gallerybeelden ontbraken op Wix; er zijn beschrijvende Nederlandse alts toegevoegd. Verfijn die waar nodig.
- **Cookiebeleid / Privacybeleid** op Wix waren Wix-standaardoverlays. Deze site plaatst geen tracking of niet-essentiële cookies, daarom is er geen cookie-banner en geen aparte privacy-pagina.
- **Productie-URL**: `PUBLIC_SITE_URL` staat default op `https://sannekool.pages.dev` tot het echte domein bekend is.
- Sommige Wix-listingcovers waren zwaar bijgesneden; voor kaarten is een representatief projectbeeld gebruikt.
- Beelden zijn lokaal opgeslagen en verkleind (max. ±2000 px) voor git en performance. Originelen van Wix waren deels 20 MB+ PNG’s.

## Intentional design deviations

- Geen Wix-advertentiebanner en geen Wix-fonts (Avenir is niet vrij te herdistribueren). Headings gebruiken Cormorant Garamond zoals het origineel; bodytekst is Source Sans 3 in plaats van Avenir.
- Kolommen op overzichtspagina’s zijn een responsive grid in plaats van vaste Wix-kolombreedtes.
- “Meer” in de Wix-nav was alleen een overflow-menu; alle hoofdonderdelen staan nu in een toegankelijk menu.
- Vrijwerk linkt naar een echte pagina, niet terug naar home.
- Oude Wix-URLs (`/foto-s`, `/general-9`, `/rugbyclub-spakenburf`, enz.) redirecten naar de nieuwe slugs.

## License

Portfolio-inhoud en beelden blijven eigendom van Sanne Kool. De codestructuur mag hergebruikt worden voor haar eigen site.
