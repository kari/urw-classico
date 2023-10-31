# URW Classico

This package provides URW Classico fonts in TTF and WOFF2 formats. URW Classico is a revision for the URW++ foundry by Hermann Zapf of his very well-known [Optima sans serif typeface](https://en.wikipedia.org/wiki/Optima).

The original fonts were made available for non-commercial distribution by [GhostPDL](https://www.ghostscript.com/index.html). Unfortunately this set isn't available under a free software license, and may only be used and distributed under the AFPL license, which forbids commercial use, or under a commercial agreement with [Artifex](https://artifex.com/).

## Getting started

The fonts and CSS are provided in similar fashion to [Fontsource](https://fontsource.org/)'s packages and can be used similarly.

### Installation

```bash
npm install @ksilvennoinen/urw-classico
```

### Usage

```css
import "@ksilvennoinen/urw-classico"; // Defaults to weight 400.
```

```css
import "@ksilvennoinen/urw-classico/700.css"; // Weight 700
import "@ksilvennoinen/urw-classico/700-italic.css"; // Italic variant
```

```css
body {
    font-family: "URW Classico", serif
}
```

## License

Distributed under the AFPL license. See `LICENSE` for more information.
