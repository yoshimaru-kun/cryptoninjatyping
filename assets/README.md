Assets directory for images and media used in the game.

Suggested structure

- characters/  Character images or animations (idle/celebrate, etc.)
- backgrounds/ Background images or illustrations
- ui/          UI icons, logos, badges

Usage notes

- Prefer SVG for line art; WebP/PNG for raster illustrations.
- For character swapping, point `index.html` character `<img>` attributes to your files:
  - data-idle="assets/characters/hero/idle.webp"
  - data-celebrate="assets/characters/hero/celebrate.webp"

