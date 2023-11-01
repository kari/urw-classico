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

The URW Classico fonts are copyright (c) 2014 by (URW)++ Design & Development. The original TrueType fonts were obtained from

<https://git.ghostscript.com/?p=ghostpdl.git;a=tree;f=pcl/urwfonts>

Distribution and modification of these fonts are allowed subject to the Aladdin Free Public License which is available here:

<https://git.ghostscript.com/?p=ghostpdl.git;a=blob_plain;f=pcl/COPYING.AFPL>

This license allows modification and *non-commercial* distribution of the fonts, but not distribution in a commercial product.

## See also

- [CTAN archive classico](https://ctan.org/tex-archive/fonts/urw/classico)
