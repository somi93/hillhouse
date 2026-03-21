# Hill House — UI/UX Redesign Priorities

## Sprint 1 — Quick Wins (2–3 dana)

- [x] **Font pairing** — uvesti Playfair Display (headings) + Inter (body/UI) umjesto system Roboto
- [x] **Video swap bug** — ispraviti inverted condition u `components/home/slider.vue` (`!$vuetify.display.smAndDown`)
- [x] **Header scroll transition** — dodati `transition: background-color 0.3s ease` CSS na header
- [x] **`console.log` cleanup** — ukloniti `console.log(item.value)` iz `components/gallery/overlay-item.vue`
- [x] **z-index cleanup** — zamijeniti `55555555555555555` i `1000000000000000000000` sa `9999` / `10000`

---

## Sprint 2 — Layout & Visual Rhythm (3–4 dana)

- [ ] **Hero typography upgrade** — Playfair Display heading, Inter subtitle `font-weight: 300`, outline CTA varijanta
- [x] **Dark About stats sekcija** — `#151515` background, bijeli tekst, gold akcentni brojevi (`150 gostiju` itd.)
- [x] **Ukloniti social share sidebar** — premjestiti u footer kao subtilne ikone

---

## Sprint 3 — Content & Conversion (4–5 dana)

- [x] **Testimonials carousel** — refaktorisati `components/home/testimonials.vue` da podržava N reviewova, dodati 3–5 reviewova, auto-play `v-window`
- [x] **Pricing page redesign** — zamijeniti `<h3>` + `<ul>` sa pricing cards (cijena u Playfair Display, feature lista, CTA)
- [x] **AOS animacije cleanup** — ukloniti `flip-left` sa facilities, zadržati samo `fade-up` (20px, 600ms) sa stagger-om po karticama

---

## Sprint 4 — Polish & Tech Debt (2–3 dana)

- [ ] **404 page branding** — branded prikaz sa slikom objekta, Playfair heading, link home
- [ ] **Cookie consent** — lokalizovati (en/sr), zamijeniti `success`/`error` boje sa brand bojama
- [ ] **CSS konsolidacija** — centralizovati `max-width: 1400px` u `.content-container` klasu, uvesti `--space-section: 80px` varijablu
- [ ] **`@mdi/font` ukloniti** — ostaviti samo SVG tree-shaken import, uštediti ~500KB
- [ ] **`$device.*` → `$vuetify.display.*`** — unificirati device detection u `pages/quiz.vue`
- [ ] **Analytics odluka** — uključiti `nuxt-gtag` ili potpuno ukloniti iz projekta

---

## Šta se NE mijenja

- Paleta boja (`#cfa975` gold + `#151515` dark) — konzistentna i radi
- `hill-section` header pattern — funkcionalan, samo font
- Masonry gallery layout
- Vuetify 3 + Nuxt 3 stack
