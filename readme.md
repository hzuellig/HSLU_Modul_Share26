# Modul-Share 2026, DDA und Digital Ideation HSLU

Workshop-Unterlagen zu Responsive Design, Tailwind CSS und Design System for the Swiss Confederation. 

## Live
https://hzuellig.github.io/HSLU_Modul_Share26/teil0-intro.html

## Inhalt

1. **[teil1-responsiveness.html](teil1-responsiveness.html) – Responsiveness & Media Queries** (nur HTML/CSS)
   Grundlagen von `@media`-Queries ohne Framework: Viewport-Meta-Tag, ein responsives Grid als Live-Beispiel, Mobile-First vs. Desktop-First, sowie responsive p5.js-Sketches (Canvas-Grösse an den Container anpassen).

2. **[teil2-tailwind-ohne-node.html](teil2-tailwind-ohne-node.html) – Tailwind ohne Node** (nur ein `<script>`-Tag)
   Utility-First-CSS direkt im Browser über den Tailwind Play-CDN ausprobieren, ohne Installation. Vergleich desselben Grids mit purem CSS (Teil 1) vs. mit Tailwind-Klassen.

3. – Tailwind mit Node** (braucht Node.js)
   Architektur eines echten Tailwind-Setups (Node, Tailwind, PostCSS, Watcher) und Schritt-für-Schritt-Anleitung, um ein eigenes minimales Tailwind-Projekt mit npm aufzusetzen.

4.  – Designsystem + Tailwind** (braucht Node.js)
   Das [Design System for the Swiss Confederation](https://swiss.github.io/designsystem/?path=/docs/get-started--docs) lokal mit Tailwind aufsetzen, Ordnerstruktur, sowie die wichtigsten Layout-Klassen kennenlernen und ausprobieren.



## Voraussetzungen

Für Teil 1 und 2 genügt ein Browser. Ab Teil 3 wird [Node.js](https://nodejs.org/) (LTS-Version) benötigt – Installation vorab prüfen mit:

```
node -v
npm -v
```

