# Image Resize List

## Prioriteti

### Tier 1 — Kritično: Gallery lightbox thumbs
> Trenutno se pune 1920px+ originali za strip od 132×76px. Najveći uticaj na performanse.

**Target dimenzije: `264×152px` (2× za retina, landscape crop center)**  
Za portrait originale (3413px visoki) — crop na `center top` ili `center center`.

#### HH1 — 31 thumb

```
public/hillhouse/media/images/gallery/events/thumbs/
  poolside-table-gold.jpg
  pool-view-table-gold.jpg
  night-terrace-arch.jpg
  boho-ceremony-arch.jpg
  outdoor-reception-pool.jpg
  pergola-dining-green.jpeg

public/hillhouse/media/images/gallery/productions/thumbs/
  couple-shoot-poolside.jpg
  pink-dress-terrace-shoot.jpg

public/hillhouse/media/images/gallery/interior/thumbs/
  bedroom-velvet-headboard.jpg
  cinema-lounge-green-led.jpg
  bathroom-marble-gold.jpg
  living-room-shelves.jpg
  terrace-sunset-lounge.jpg
  sauna-glass-door.jpeg
  spa-lounge-blue-led.jpeg
  lower-lounge-staircase.jpeg
  dining-chandelier-roses.jpeg
  dining-white-florals.jpeg
  dining-pink-setup.jpeg
  club-lounge-sofas.jpeg
  lounge-floral-table.jpeg
  jacuzzi-with-food.jpeg

public/hillhouse/media/images/gallery/outdoor/thumbs/
  outdoor-covered-lounge.jpg
  lounge-sheer-curtains.jpg      ← (iz interior/ foldera)
  telescope.jpg                  ← (iz facilities/ foldera)
  pool-sunset-palms.jpeg
  pool-loungers-pergola.jpeg
  pool-palm-dusk.jpeg
  villa-pool-exterior.jpeg
  villa-garden-path.jpeg
  garden-path-flowers.jpeg

✓ motion/video poster: resized/ folder već postoji
```

#### HH2 — 53 thumba

```
public/hillhouse2/media/images/gallery/exterior/thumbs/
  prestige-hill-2-12-1920x2560.jpg
  prestige-hill-2-4-1920x2560.jpg
  prestige-hill-2-16-1920x2560.jpg
  prestige-hill-2-8-1920x3413.jpg
  prestige-hill-2-2-1920x3413.jpg
  prestige-hill-2-9-1920x3413.jpg
  IMG_1832.jpeg

public/hillhouse2/media/images/gallery/hall/thumbs/
  prestige-hill-2-1-3-1920x3413.jpeg
  prestige-hill-2-1-1-1920x3413.jpeg
  prestige-hill-2-1-4-1920x3413.jpeg
  IMG_5570.jpeg
  IMG_5773.jpeg
  prestige-hill-2-1-2-1920x3413.jpeg
  prestige-hill-2-1-5-1920x3413.jpeg
  prestige-hill-2-18-1920x3413.jpeg
  IMG_5547.jpeg
  IMG_5527.jpeg
  IMG_5546.jpeg
  IMG_5552.jpeg
  IMG_5556.jpeg
  prestige-hill-2-1-10-1920x3413.jpeg
  IMG_5561.jpeg
  IMG_5568.jpeg

public/hillhouse2/media/images/gallery/interior/thumbs/
  prestige-hill-2-5-1920x3413.jpg
  prestige-hill-2-1-1920x3413.jpeg
  prestige-hill-2-6-1920x3413.jpeg
  prestige-hill-2-6-1920x3413.jpg
  prestige-hill-2-17-1920x3413.jpg
  prestige-hill-2-4-1920x3413.jpeg
  prestige-hill-2-15-1920x3413.jpg
  prestige-hill-2-15-1920x3413.jpeg
  prestige-hill-2-21-1920x3413.jpeg
  prestige-hill-2-11-1920x3413.jpeg
  prestige-hill-2-14-1920x3413.jpeg
  prestige-hill-2-12-1920x3413.jpeg
  prestige-hill-2-3-1920x3413.jpeg
  prestige-hill-2-8-1920x3413.jpeg
  prestige-hill-2-7-1920x3413.jpeg
  prestige-hill-2-7-1920x3413.jpg
  prestige-hill-2-16-1920x3413.jpeg
  prestige-hill-2-13-1920x3413.jpg
  prestige-hill-2-17-1920x3413.jpeg
  prestige-hill-2-10-1920x3413.jpeg
  prestige-hill-2-9-1920x3413.jpeg
  IMG_1808.jpeg

public/hillhouse2/media/images/gallery/events/thumbs/
  IMG_4448.jpeg
  ✓ ceremony_preview.jpg — thumb već postoji (isti fajl se koristi)

✓ motion/video posteri: koriste exterior/ thumbove — isti folder
```

---

### Tier 2 — Važno: Gallery cover dugmad

Prikazuju se kao dugmad kategorija u gridu — ne treba lightbox rezolucija.

| CSS klasa | Grid span | Target dimenzije |
|---|---|---|
| `gallery-category--hero` | 8-col × 2 rows | **960×560px** |
| `gallery-category--tall` | 4-col × 2 rows | **480×560px** |
| `gallery-category--portrait` | 4-col × 1 row | **480×340px** |

#### Covers za resize:

```
HH1:
  gallery/events/poolside-table-gold.jpg          → 960×560  (hero cover)
  gallery/productions/couple-shoot-poolside.jpg   → 480×560  (tall cover)
  gallery/interior/bathroom-marble-gold.jpg       → 480×340  (portrait cover)
  gallery/outdoor/outdoor-covered-lounge.jpg      → 480×340  (portrait cover)
  gallery/professional/vila-...-15.jpeg           → 480×340  (motion cover)

HH2:
  gallery/exterior/prestige-hill-2-12-...jpg      → 960×560  (hero cover)
  gallery/hall/prestige-hill-2-1-3-...jpeg        → 480×560  (tall cover)
  gallery/interior/prestige-hill-2-5-...jpg       → 480×340  (portrait cover)
  gallery/events/IMG_4448.jpeg                    → 480×340  (portrait cover)
  gallery/exterior/prestige-hill-2-12-...jpg      → 480×340  (motion cover, isti fajl)
```

**Preporučen folder:** `gallery/covers/` ili sufiks `@cover` u imenu fajla.

---

### Tier 3 — Sekcije: card / experiences / why

| Kontekst | Komponenta | AR | Render širina (~1440px vp) | Target dimenzije |
|---|---|---|---|---|
| Villa cards | `villa-cards.vue` | 1.42 | ~560px | **900×634px** |
| Card promo (iste slike) | `villa-card-promo.vue` | 1.25 | ~660px | **900×720px** (može isti fajl kao card) |
| Experiences (×6) | `experiences.vue` | 1.45 | ~700px | **900×621px** |
| Why section (×2) | `why.vue` | 0.86 | ~400px | **600×698px** |

```
Fajlovi za resize — Tier 3:

HH1:
  landing_hill_1.jpeg                  → 900×634 (card + promo)
  gallery/professional/vila-...-14-... → 900×621 (experiences[0])
  gallery/interior/jacuzzi-with-food   → 900×621 (experiences[1])
  gallery/interior/club-lounge-sofas   → 900×621 (experiences[2])
  gallery/professional/vila-...-29-... → 600×698 (why)

HH2:
  landing_hill_2.jpg                              → 900×634 (card + promo)
  gallery/hall/prestige-hill-2-1-3-...jpeg        → 900×621 (experiences[0])
  gallery/exterior/prestige-hill-2-16-...jpg      → 900×621 (experiences[1])
  gallery/interior/prestige-hill-2-5-...jpg       → 900×621 (experiences[2])
  gallery/exterior/B14E38D4-...jpeg               → 600×698 (why)
```

---

### Tier 4 — Logo

| Fajl | Trenutno | Preporuka |
|---|---|---|
| `/hillhouse/media/images/logo.png` | PNG (nepoznata veličina) | **SVG** ili max **200×80px WebP** |

---

## Preporučena folder struktura

```
public/
├── hillhouse/media/images/
│   ├── panorama-selector.jpg          ← originalna panorama (za hero)
│   ├── landing_hill_1@card.webp       ← 900×634 (Tier 3)
│   └── gallery/
│       ├── events/thumbs/             ← 264×152 (Tier 1)
│       ├── productions/thumbs/        ← 264×152 (Tier 1)
│       ├── interior/thumbs/           ← 264×152 (Tier 1)
│       ├── outdoor/thumbs/            ← 264×152 (Tier 1)
│       └── covers/                    ← resizovani covers (Tier 2)
│
└── hillhouse2/media/images/
    ├── landing_hill_2@card.webp       ← 900×634 (Tier 3)
    └── gallery/
        ├── exterior/thumbs/           ← 264×152 (Tier 1)
        ├── hall/thumbs/               ← 264×152 (Tier 1)
        ├── interior/thumbs/           ← 264×152 (Tier 1)
        └── events/thumbs/             ← 264×152 (Tier 1)
```

---

## ImageMagick batch komanda (referenca)

```bash
# Thumbovi — landscape crop center (264×152)
for f in gallery/events/*.jpg; do
  convert "$f" -resize 264x152^ -gravity center -extent 264x152 "thumbs/$(basename $f)"
done

# Covers — hero (960×560)
convert original.jpg -resize 960x560^ -gravity center -extent 960x560 cover@hero.jpg

# Covers — portrait (480×340)
convert original.jpg -resize 480x340^ -gravity center -extent 480x340 cover@portrait.jpg

# Card images (900×634)
convert original.jpg -resize 900x634^ -gravity center -extent 900x634 landing@card.jpg
```

---

## Šta treba promeniti u kodu

Nakon generisanja thumbova, dodati `thumb` property na svaki `{ type: 'image' }` item u `useVillas.js`:

```js
{ type: 'image', src: '/...original.jpg', thumb: '/.../thumbs/original.jpg', alt: '...' }
```

`gallery.vue` lightbox thumbnail strip treba da čita `item.thumb ?? item.src`.
