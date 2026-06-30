# Plan

## Goal

Create a small joke website that offers spiritual cleansing for a user's laptop, played completely straight in the style of a home-made early 2000s website.

## Trade-offs

- **Static HTML, CSS, and JavaScript:** This is the simplest maintainable option, requires no framework, and can be hosted for free on GitHub Pages, Netlify, Cloudflare Pages, or any basic static host.
- **No build step:** Avoids package management and deployment complexity. The whole site can be edited by changing three files.
- **Generated bitmap asset plus code-native text:** The cheesy laptop graphic gives the site a deliberately dated visual anchor, while the actual copy remains accessible, searchable, and easy to edit.
- **Small amount of JavaScript:** Adds an interactive cleansing ritual and visitor counter effect without introducing dependencies.
- **Deliberately bad visual taste, tidy structure:** The look should feel amateur and hokey, but the underlying files should remain straightforward to maintain.
- **Satirical "enhanced service" copy only:** The new questionable add-on should read as obviously sinister and absurd, but remain completely inert. There will be no download, no purchase link, no form, and no real collection of private data.
- **Animated favicon with fallback:** Use a tiny animated GIF for browsers that support it, while keeping the PNG favicon linked as a safe fallback because animated favicon support varies.
- **Fake resource abuse, not real resource abuse:** The joke can claim to consume enormous RAM/CPU, but the implementation must stay harmless, opt-in, and time-limited. Use fake counters, light DOM updates, and short user-triggered bleeps instead of loops, memory allocation, mining-like behaviour, or anything that would degrade a visitor's device.
- **Longer fake burn-in, same light footprint:** The Chakra Burn-In should feel ceremonially excessive, but the extra duration should come from slower, capped UI updates rather than more work.
- **Recoverable easter eggs:** Hidden modes can make the site feel cursed, but they should be reversible. Konami mode can restyle the page with an infernal joke layer, corrupted copy, a modal, cursor sparks, and a temporary favicon swap; the scroll-loop trick can trap the user in a playful loop but must show an escape button and support `Escape`.

## Implementation

1. Add `index.html` for the full page content.
2. Add `styles.css` for the early-web visual treatment.
3. Add `script.js` for the fake cleansing ritual, status messages, and visitor counter.
4. Keep the generated concept in `docs/concept.png` and use `assets/sacred-laptop.png` as the page's main visual asset.
5. Add the desktop-computer surcharge joke and a fake enhanced service panel that implies suspicious behaviour without implementing any of it.
6. Add a fake "High Intensity Chakra Burn-In" that simulates ludicrous CPU/RAM usage with safe capped animation.
7. Add two easter eggs: Konami code unlocks an infernal alternative skin with corrupted copy and ritual behaviour, and five clicks while scrolling starts a reversible cursed scroll loop.
