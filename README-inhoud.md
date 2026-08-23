# Pagina’s en secties toevoegen

Korte handleiding om nieuwe pagina’s en beeldsecties toe te voegen. Kopieer altijd een bestaand voorbeeld en pas dat aan.

De site heeft drie rubrieken: **Opleiding Mediavormgeving**, **Stages** en **Vrijwerk**. Elke pagina hoort bij één van die rubrieken.

## Een nieuwe pagina

1. Maak een map voor de beelden: `src/assets/projects/jouw-project/`
   Zet daar een coverbeeld in (`cover.jpg`) en de overige foto’s.
2. Kopieer een bestaand bestand in `src/content/projects/`, bijvoorbeeld `freebee.md`.
   Hernoem de kopie naar `jouw-project.md`.
3. Pas het blok bovenaan aan (tussen de `---` regels):

```yaml
title: Projectnaam
slug: jouw-project
category: opleiding
year: 2026
summary: Korte tekst voor de kaart op het overzicht.
coverImage: ../../assets/projects/jouw-project/cover.jpg
coverAlt: Korte beschrijving van het coverbeeld.
order: 120
tools:
  - Adobe Illustrator
```

4. Schrijf onder dat blok de tekst van de pagina.

**Let op**

- `slug` is de naam in de link. Gebruik alleen kleine letters en streepjes, hetzelfde als de mapnaam.
- `category` is `opleiding`, `stages` of `vrijwerk`.
- `order` bepaalt de volgorde: een lager getal staat hoger op het overzicht.

## Beeldsecties op een pagina

Onder `galleries` kun je één of meer secties toevoegen. Elke sectie heeft een titel en een lijst beelden:

```yaml
galleries:
  - title: Posters
    images:
      - src: ../../assets/projects/jouw-project/poster-1.jpg
        alt: Korte beschrijving van het beeld.
      - src: ../../assets/projects/jouw-project/poster-2.jpg
        alt: Korte beschrijving van het tweede beeld.
  - title: Flyers
    images:
      - src: ../../assets/projects/jouw-project/flyer-1.jpg
        alt: Korte beschrijving van de flyer.
```

Een goed voorbeeld met meerdere secties is `rugbyclub-spakenburg.md`.

## Tekst van een bestaande rubriek aanpassen

De inleidende tekst van een rubriek staat in:

- Opleiding: `src/pages/opleiding-mediavormgeving/index.astro`
- Stages: `src/pages/stages/index.astro`
- Vrijwerk: `src/pages/vrijwerk/index.astro`

Pas alleen de zichtbare titel en tekst aan. Laat de rest staan.

## Extra

- Een pagina verbergen op het overzicht: zet `listed: false` in het bovenste blok.
- Een extra knop op de pagina: `relatedLabel` (de knoptekst) en `relatedHref` (de link), zoals bij `smeeing-mobility.md`.
