/**
 * Single source of truth for all villa structural data.
 * Text content lives in locales/ (i18n) — only media paths, links and
 * non-translatable strings (quotes, names) live here.
 * Add a third villa by appending one entry — components update automatically.
 */

const VILLAS = [
  // ─────────────────────────────────────────────────────────────────────────
  // Hill House 1
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 'hh1',
    name: 'Hill House',
    slug: '/hill-house-1',
    flip: false, // selector panel: left-aligned

    images: { 
      hero: '/hillhouse/media/images/gallery/professional/vila-prestige-hill-15-1920x1438.jpeg',
      card: '/hillhouse/media/images/gallery/professional/vila-prestige-hill-20-1920x1280.jpeg',
      why:  '/hillhouse/media/images/gallery/professional/vila-prestige-hill-29-1920x1440.jpeg',
    },

    // experiences — i18n supplies kicker/title/text, composable supplies image+alt+reverse
    experiences: [
      { image: '/hillhouse/media/images/gallery/professional/vila-prestige-hill-14-1920x1280.jpeg', alt: 'Outdoor terrace and pool at Hill House', reverse: false },
      { image: '/hillhouse/media/images/gallery/interior/jacuzzi-with-food.jpeg', alt: 'Jacuzzi and spa area at Hill House', reverse: true },
      { image: '/hillhouse/media/images/gallery/interior/club-lounge-sofas.jpeg', alt: 'Interior lounge and cinema area at Hill House', reverse: false },
    ],

    // gallery — i18nIndex maps to home.redesign.gallery.category{N}Kicker/Title/Text
    gallery: {
      categories: [
        {
          id: 'events', i18nIndex: 1, className: 'gallery-category--hero',
          cover: '/hillhouse/media/images/gallery/events/poolside-table-gold.jpg',
          items: [
            { type: 'image', src: '/hillhouse/media/images/gallery/events/poolside-table-gold.jpg', alt: 'Elegant poolside table with gold chiavari chairs at Hill House' },
            { type: 'image', src: '/hillhouse/media/images/gallery/events/pool-view-table-gold.jpg', alt: 'Event table with pool view at Hill House' },
            { type: 'image', src: '/hillhouse/media/images/gallery/events/night-terrace-arch.jpg', alt: 'Illuminated floral arch on terrace at night at Hill House' },
            { type: 'image', src: '/hillhouse/media/images/gallery/events/boho-ceremony-arch.jpg', alt: 'Boho ceremony arch with pampas grass at Hill House' },
            { type: 'image', src: '/hillhouse/media/images/gallery/events/outdoor-reception-pool.jpg', alt: 'Outdoor wedding reception by the pool at Hill House' },
            { type: 'image', src: '/hillhouse/media/images/gallery/events/pergola-dining-green.jpeg', alt: 'Outdoor pergola dining with green napkins at Hill House' },
          ],
        },
        {
          id: 'productions', i18nIndex: 2, className: 'gallery-category--tall',
          cover: '/hillhouse/media/images/gallery/productions/couple-shoot-poolside.jpg',
          items: [
            { type: 'image', src: '/hillhouse/media/images/gallery/productions/couple-shoot-poolside.jpg', alt: 'Couple photo shoot by the pool at Hill House' },
            { type: 'image', src: '/hillhouse/media/images/gallery/productions/pink-dress-terrace-shoot.jpg', alt: 'Fashion shoot on the terrace at Hill House' },
          ],
        },
        {
          id: 'interior', i18nIndex: 3, className: 'gallery-category--portrait',
          cover: '/hillhouse/media/images/gallery/interior/bathroom-marble-gold.jpg',
          items: [
            { type: 'image', src: '/hillhouse/media/images/gallery/interior/bedroom-velvet-headboard.jpg', alt: 'Luxury bedroom with velvet headboard at Hill House' },
            { type: 'image', src: '/hillhouse/media/images/gallery/interior/cinema-lounge-green-led.jpg', alt: 'Cinema lounge with curved sofas at Hill House' },
            { type: 'image', src: '/hillhouse/media/images/gallery/interior/bathroom-marble-gold.jpg', alt: 'Marble bathroom with gold fixtures at Hill House' },
            { type: 'image', src: '/hillhouse/media/images/gallery/interior/living-room-shelves.jpg', alt: 'Living room with built-in shelves at Hill House' },
            { type: 'image', src: '/hillhouse/media/images/gallery/interior/terrace-sunset-lounge.jpg', alt: 'Terrace lounge at sunset at Hill House' },
            { type: 'image', src: '/hillhouse/media/images/gallery/interior/sauna-glass-door.jpeg', alt: 'Private sauna with glass door at Hill House' },
            { type: 'image', src: '/hillhouse/media/images/gallery/interior/spa-lounge-blue-led.jpeg', alt: 'Spa lounge with blue LED lighting at Hill House' },
            { type: 'image', src: '/hillhouse/media/images/gallery/interior/lower-lounge-staircase.jpeg', alt: 'Lower level lounge with staircase at Hill House' },
            { type: 'image', src: '/hillhouse/media/images/gallery/interior/dining-chandelier-roses.jpeg', alt: 'Dining table under chandelier at Hill House' },
            { type: 'image', src: '/hillhouse/media/images/gallery/interior/dining-white-florals.jpeg', alt: 'Dining room with white floral centerpiece at Hill House' },
            { type: 'image', src: '/hillhouse/media/images/gallery/interior/dining-pink-setup.jpeg', alt: 'Dining table with pink napkins at Hill House' },
            { type: 'image', src: '/hillhouse/media/images/gallery/interior/club-lounge-sofas.jpeg', alt: 'Club lounge with modular sofas at Hill House' },
            { type: 'image', src: '/hillhouse/media/images/gallery/interior/lounge-floral-table.jpeg', alt: 'Lounge with round marble table at Hill House' },
            { type: 'image', src: '/hillhouse/media/images/gallery/interior/jacuzzi-with-food.jpeg', alt: 'Indoor jacuzzi with food tray at Hill House' },
          ],
        },
        {
          id: 'outdoor', i18nIndex: 4, className: 'gallery-category--portrait',
          cover: '/hillhouse/media/images/gallery/outdoor/outdoor-covered-lounge.jpg',
          items: [
            { type: 'image', src: '/hillhouse/media/images/gallery/outdoor/outdoor-covered-lounge.jpg', alt: 'Covered outdoor lounge terrace at Hill House' },
            { type: 'image', src: '/hillhouse/media/images/gallery/interior/lounge-sheer-curtains.jpg', alt: 'Indoor lounge with sheer curtains at Hill House' },
            { type: 'image', src: '/hillhouse/media/images/facilities/telescope.jpg', alt: 'Outdoor terrace and telescope at Hill House' },
            { type: 'image', src: '/hillhouse/media/images/gallery/outdoor/pool-sunset-palms.jpeg', alt: 'Infinity pool at sunset with palm trees at Hill House' },
            { type: 'image', src: '/hillhouse/media/images/gallery/outdoor/pool-loungers-pergola.jpeg', alt: 'Pool with sun loungers and pergola at Hill House' },
            { type: 'image', src: '/hillhouse/media/images/gallery/outdoor/pool-palm-dusk.jpeg', alt: 'Pool and palm tree at dusk at Hill House' },
            { type: 'image', src: '/hillhouse/media/images/gallery/outdoor/villa-pool-exterior.jpeg', alt: 'Villa exterior with pool at Hill House' },
            { type: 'image', src: '/hillhouse/media/images/gallery/outdoor/villa-garden-path.jpeg', alt: 'Villa exterior with garden path at Hill House' },
            { type: 'image', src: '/hillhouse/media/images/gallery/outdoor/garden-path-flowers.jpeg', alt: 'Garden path with flowering plants at Hill House' },
          ],
        },
        {
          id: 'motion', i18nIndex: 5, className: 'gallery-category--portrait',
          cover: '/hillhouse/media/images/gallery/professional/vila-prestige-hill-15-1920x1438.jpeg',
          items: [
            {
              type: 'video',
              src: '/hillhouse/media/videos/overview.mp4',
              poster: '/hillhouse/media/images/gallery/professional/vila-prestige-hill-15-1920x1438.jpeg',
              thumb: '/hillhouse/media/images/gallery/professional/resized/vila-prestige-hill-15-1920x1438.jpeg',
              alt: 'Overview video of Hill House',
            },
          ],
        },
      ],
    },

    reviews: {
      main: {
        quote: 'Prisustvovala sam proslavi rođendana u Hill House i utisak je bio sjajan. Prostrana terasa, bazen, osvetljenje i pogled zajedno stvaraju ambijent koji je zaista poseban za okupljanja i proslave.',
        author: 'Katarina Rakić',
        link: 'https://maps.app.goo.gl/b6Nhu3q5jcdvw3bu8',
      },
      supporting: [
        { text: 'Divno mesto za proslave i važne događaje. Sve je lepo osmišljeno i ima sve što je potrebno za prijatno i elegantno okupljanje.', author: 'Predrag Popović', link: 'https://maps.app.goo.gl/4FVsjBFPNzy8z88R7' },
        { text: 'Predivno, luksuzno, raj za dušu i oči. Prelep pogled na Avalu. Ljubazni domaćini. Sve pohvale!', author: 'Danijela Ilić', link: 'https://maps.app.goo.gl/8mqmuvW237B2mrVT6' },
      ],
    },

    location: {
      mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11376.723479775781!2d20.70986718088739!3d44.531929042754896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4750bd1c824fd29b%3A0x8b1d2647713d9c1d!2sHILL%20LUXURY%20HOUSE%201!5e0!3m2!1ssr!2srs!4v1774090941905!5m2!1ssr!2srs',
      mapsLink: 'https://maps.app.goo.gl/PfMhd9qvQKDM3NVc7',
    },
  },

  // ─────────────────────────────────────────────────────────────────────────
  // Hill House 2 — update images/reviews/location as content becomes available
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 'hh2',
    name: 'Hill House 2',
    slug: '/hill-house-2',
    flip: true,

    images: {
      hero: '/hillhouse2/media/images/landing.jpg',
      card: '/hillhouse2/media/images/landing.jpg',
      why:  '/hillhouse2/media/images/landing.jpg',
    },

    experiences: [
      { image: '/hillhouse2/media/images/landing.jpg', alt: 'Villa and pool at Hill House 2', reverse: false },
      { image: '/hillhouse2/media/images/landing.jpg', alt: 'Terrace and outdoor living at Hill House 2', reverse: true },
      { image: '/hillhouse2/media/images/landing.jpg', alt: 'Contemporary interior at Hill House 2', reverse: false },
    ],

    gallery: {
      categories: [
        {
          id: 'exterior', i18nIndex: 4, className: 'gallery-category--hero',
          cover: '/hillhouse2/media/images/landing.jpg',
          items: [
            { type: 'image', src: '/hillhouse2/media/images/landing.jpg', alt: 'Hill House 2 — A-frame villa with pool and terrace' },
          ],
        },
      ],
    },

    reviews: {
      // Placeholder — replace with HH2-specific reviews when collected
      main: {
        quote: 'Prisustvovala sam proslavi rođendana u Hill House i utisak je bio sjajan. Prostrana terasa, bazen, osvetljenje i pogled zajedno stvaraju ambijent koji je zaista poseban za okupljanja i proslave.',
        author: 'Katarina Rakić',
        link: 'https://maps.app.goo.gl/b6Nhu3q5jcdvw3bu8',
      },
      supporting: [
        { text: 'Divno mesto za proslave i važne događaje. Sve je lepo osmišljeno i ima sve što je potrebno za prijatno i elegantno okupljanje.', author: 'Predrag Popović', link: 'https://maps.app.goo.gl/4FVsjBFPNzy8z88R7' },
        { text: 'Predivno, luksuzno, raj za dušu i oči. Prelep pogled na Avalu. Ljubazni domaćini. Sve pohvale!', author: 'Danijela Ilić', link: 'https://maps.app.goo.gl/8mqmuvW237B2mrVT6' },
      ],
    },

    location: {
      // Same Šepšin area — update mapSrc/mapsLink with exact HH2 pin when ready
      mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11376.723479775781!2d20.70986718088739!3d44.531929042754896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4750bd1c824fd29b%3A0x8b1d2647713d9c1d!2sHILL%20LUXURY%20HOUSE%201!5e0!3m2!1ssr!2srs!4v1774090941905!5m2!1ssr!2srs',
      mapsLink: 'https://maps.app.goo.gl/PfMhd9qvQKDM3NVc7',
    },
  },
]

export function useVillas () {
  return VILLAS
}

export function useVilla (id) {
  return VILLAS.find(v => v.id === id)
}
