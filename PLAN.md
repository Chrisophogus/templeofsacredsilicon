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
- **Original parody pop-in:** Use original CSS pixel art and original bleeps for the "CLEANSY!" gag rather than copying any copyrighted game asset or audio.
- **More old-web clutter, still static:** Extra jokes should be plain HTML/CSS/JS: fake badges, fake webring, fake guestbook, fake diagnostic table, printable certificate, right-click curse, and a hidden `/secrets/` page. Avoid services, forms, databases, dependencies, or anything that affects hosting simplicity.
- **Separate static "new site" parody:** Put the modern-web satire in `/new/` so the classic homepage remains untouched in tone, while the new page can parody hostile modern design with popups, vague AI copy, cookie theatre, layout mistakes, and overbearing widgets. Keep it dependency-free and reversible.
- **Duplicated "new new" entry points:** Let `/new-new/` and `/next/` load the same post-website satire. Duplicating the small HTML shell is less elegant than routing, but it keeps hosting static, avoids Netlify-specific redirects, and is easiest to maintain on any free host. Shared CSS and JavaScript keep the behaviour in one place.
- **Pristine static 404:** Add a root `404.html` for Netlify and other static hosts. Use a dedicated `404.css` rather than the chaotic shared stylesheet so the error page can be deliberately immaculate, dependency-free, and easy to maintain.

## Implementation

1. Add `index.html` for the full page content.
2. Add `styles.css` for the early-web visual treatment.
3. Add `script.js` for the fake cleansing ritual, status messages, and visitor counter.
4. Keep the generated concept in `docs/concept.png` and use `assets/sacred-laptop.png` as the page's main visual asset.
5. Add the desktop-computer surcharge joke and a fake enhanced service panel that implies suspicious behaviour without implementing any of it.
6. Add a fake "High Intensity Chakra Burn-In" that simulates ludicrous CPU/RAM usage with safe capped animation.
7. Add two easter eggs: Konami code unlocks an infernal alternative skin with corrupted copy and ritual behaviour, and five clicks while scrolling starts a reversible cursed scroll loop.
8. Add an original low-res "CLEANSY!" pop-in after the Chakra Burn-In, with an infernal "ROASTY!" variant.
9. Add retro supporting jokes: compatibility badges, awards, a diagnostics table, fake webring, guestbook modal, cleansing certificate, right-click curse, loading overlay, offering hover chaos, `#basement`, and `/secrets/`.
10. Add a top-level "NEW SITE" link and build `/new/` as a deliberately poor parody of modern web design: intrusive modals, cookie prompts, broken cards, fake SaaS copy, chat widgets, and bad CSS choices, all without external services or real tracking.
11. Add `/new-new/` and `/next/` as the next redesign layer, linked only from `/new/`: an AI-native post-website app shell with excessive but safe animation, meaningless metrics, command palette theatre, onboarding loops, fake privacy toggles, and buzzword-heavy product copy.
12. Add a calm, perfectly plain `404.html` with dedicated CSS, no JavaScript, no animation, and no hidden jokes beyond the contrast of it being the only flawlessly designed page.
