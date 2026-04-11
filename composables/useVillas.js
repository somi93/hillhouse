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
      card: '/hillhouse/media/images/landing_hill_1@card.jpg',
      why: '/hillhouse/media/images/gallery/professional/vila-prestige-hill-29@why.jpeg',
      // Full panoramic shot — each panel shows its half via background-position
      selectorCard: '/hillhouse/media/images/panorama-selector.jpg',
    },

    heroVideo: {
      src: '/hillhouse/media/videos/overview.mp4',
      poster: '/hillhouse/media/images/gallery/professional/vila-prestige-hill-15-1920x1438.jpeg',
    },

    // experiences — i18n supplies kicker/title/text, composable supplies image+alt+reverse
    experiences: [
      { image: '/hillhouse/media/images/gallery/professional/vila-prestige-hill-14@exp.jpeg', alt: 'Outdoor terrace and pool at Hill House', reverse: false },
      { image: '/hillhouse/media/images/gallery/interior/jacuzzi-with-food@exp.jpeg', alt: 'Jacuzzi and spa area at Hill House', reverse: true },
      { image: '/hillhouse/media/images/gallery/interior/club-lounge-sofas@exp.jpeg', alt: 'Interior lounge and cinema area at Hill House', reverse: false },
    ],

    // gallery — i18nIndex maps to home.redesign.gallery.category{N}Kicker/Title/Text
    gallery: {
      categories: [
        {
          id: 'events', i18nIndex: 1, className: 'gallery-category--hero',
          cover: '/hillhouse/media/images/gallery/events/covers/poolside-table-gold.jpg',
          items: [
            { type: 'image', src: '/hillhouse/media/images/gallery/events/poolside-table-gold.jpg', thumb: '/hillhouse/media/images/gallery/events/thumbs/poolside-table-gold.jpg', alt: 'Elegant poolside table with gold chiavari chairs at Hill House' },
            { type: 'image', src: '/hillhouse/media/images/gallery/events/pool-view-table-gold.jpg', thumb: '/hillhouse/media/images/gallery/events/thumbs/pool-view-table-gold.jpg', alt: 'Event table with pool view at Hill House' },
            { type: 'image', src: '/hillhouse/media/images/gallery/events/night-terrace-arch.jpg', thumb: '/hillhouse/media/images/gallery/events/thumbs/night-terrace-arch.jpg', alt: 'Illuminated floral arch on terrace at night at Hill House' },
            { type: 'image', src: '/hillhouse/media/images/gallery/events/boho-ceremony-arch.jpg', thumb: '/hillhouse/media/images/gallery/events/thumbs/boho-ceremony-arch.jpg', alt: 'Boho ceremony arch with pampas grass at Hill House' },
            { type: 'image', src: '/hillhouse/media/images/gallery/events/outdoor-reception-pool.jpg', thumb: '/hillhouse/media/images/gallery/events/thumbs/outdoor-reception-pool.jpg', alt: 'Outdoor wedding reception by the pool at Hill House' },
            { type: 'image', src: '/hillhouse/media/images/gallery/events/pergola-dining-green.jpeg', thumb: '/hillhouse/media/images/gallery/events/thumbs/pergola-dining-green.jpeg', alt: 'Outdoor pergola dining with green napkins at Hill House' },
          ],
        },
        {
          id: 'productions', i18nIndex: 2, className: 'gallery-category--tall',
          cover: '/hillhouse/media/images/gallery/productions/covers/couple-shoot-poolside.jpg',
          items: [
            { type: 'image', src: '/hillhouse/media/images/gallery/productions/couple-shoot-poolside.jpg', thumb: '/hillhouse/media/images/gallery/productions/thumbs/couple-shoot-poolside.jpg', alt: 'Couple photo shoot by the pool at Hill House' },
            { type: 'image', src: '/hillhouse/media/images/gallery/productions/pink-dress-terrace-shoot.jpg', thumb: '/hillhouse/media/images/gallery/productions/thumbs/pink-dress-terrace-shoot.jpg', alt: 'Fashion shoot on the terrace at Hill House' },
          ],
        },
        {
          id: 'interior', i18nIndex: 3, className: 'gallery-category--portrait',
          cover: '/hillhouse/media/images/gallery/interior/covers/bathroom-marble-gold.jpg',
          items: [
            { type: 'image', src: '/hillhouse/media/images/gallery/interior/bedroom-velvet-headboard.jpg', thumb: '/hillhouse/media/images/gallery/interior/thumbs/bedroom-velvet-headboard.jpg', alt: 'Luxury bedroom with velvet headboard at Hill House' },
            { type: 'image', src: '/hillhouse/media/images/gallery/interior/cinema-lounge-green-led.jpg', thumb: '/hillhouse/media/images/gallery/interior/thumbs/cinema-lounge-green-led.jpg', alt: 'Cinema lounge with curved sofas at Hill House' },
            { type: 'image', src: '/hillhouse/media/images/gallery/interior/bathroom-marble-gold.jpg', thumb: '/hillhouse/media/images/gallery/interior/thumbs/bathroom-marble-gold.jpg', alt: 'Marble bathroom with gold fixtures at Hill House' },
            { type: 'image', src: '/hillhouse/media/images/gallery/interior/living-room-shelves.jpg', thumb: '/hillhouse/media/images/gallery/interior/thumbs/living-room-shelves.jpg', alt: 'Living room with built-in shelves at Hill House' },
            { type: 'image', src: '/hillhouse/media/images/gallery/interior/terrace-sunset-lounge.jpg', thumb: '/hillhouse/media/images/gallery/interior/thumbs/terrace-sunset-lounge.jpg', alt: 'Terrace lounge at sunset at Hill House' },
            { type: 'image', src: '/hillhouse/media/images/gallery/interior/sauna-glass-door.jpeg', thumb: '/hillhouse/media/images/gallery/interior/thumbs/sauna-glass-door.jpeg', alt: 'Private sauna with glass door at Hill House' },
            { type: 'image', src: '/hillhouse/media/images/gallery/interior/spa-lounge-blue-led.jpeg', thumb: '/hillhouse/media/images/gallery/interior/thumbs/spa-lounge-blue-led.jpeg', alt: 'Spa lounge with blue LED lighting at Hill House' },
            { type: 'image', src: '/hillhouse/media/images/gallery/interior/lower-lounge-staircase.jpeg', thumb: '/hillhouse/media/images/gallery/interior/thumbs/lower-lounge-staircase.jpeg', alt: 'Lower level lounge with staircase at Hill House' },
            { type: 'image', src: '/hillhouse/media/images/gallery/interior/dining-chandelier-roses.jpeg', thumb: '/hillhouse/media/images/gallery/interior/thumbs/dining-chandelier-roses.jpeg', alt: 'Dining table under chandelier at Hill House' },
            { type: 'image', src: '/hillhouse/media/images/gallery/interior/dining-white-florals.jpeg', thumb: '/hillhouse/media/images/gallery/interior/thumbs/dining-white-florals.jpeg', alt: 'Dining room with white floral centerpiece at Hill House' },
            { type: 'image', src: '/hillhouse/media/images/gallery/interior/dining-pink-setup.jpeg', thumb: '/hillhouse/media/images/gallery/interior/thumbs/dining-pink-setup.jpeg', alt: 'Dining table with pink napkins at Hill House' },
            { type: 'image', src: '/hillhouse/media/images/gallery/interior/club-lounge-sofas.jpeg', thumb: '/hillhouse/media/images/gallery/interior/thumbs/club-lounge-sofas.jpeg', alt: 'Club lounge with modular sofas at Hill House' },
            { type: 'image', src: '/hillhouse/media/images/gallery/interior/lounge-floral-table.jpeg', thumb: '/hillhouse/media/images/gallery/interior/thumbs/lounge-floral-table.jpeg', alt: 'Lounge with round marble table at Hill House' },
            { type: 'image', src: '/hillhouse/media/images/gallery/interior/jacuzzi-with-food.jpeg', thumb: '/hillhouse/media/images/gallery/interior/thumbs/jacuzzi-with-food.jpeg', alt: 'Indoor jacuzzi with food tray at Hill House' },
          ],
        },
        {
          id: 'outdoor', i18nIndex: 4, className: 'gallery-category--portrait',
          cover: '/hillhouse/media/images/gallery/outdoor/covers/outdoor-covered-lounge.jpg',
          items: [
            { type: 'image', src: '/hillhouse/media/images/gallery/outdoor/outdoor-covered-lounge.jpg', thumb: '/hillhouse/media/images/gallery/outdoor/thumbs/outdoor-covered-lounge.jpg', alt: 'Covered outdoor lounge terrace at Hill House' },
            { type: 'image', src: '/hillhouse/media/images/gallery/interior/lounge-sheer-curtains.jpg', thumb: '/hillhouse/media/images/gallery/outdoor/thumbs/lounge-sheer-curtains.jpg', alt: 'Indoor lounge with sheer curtains at Hill House' },
            { type: 'image', src: '/hillhouse/media/images/facilities/telescope.jpg', thumb: '/hillhouse/media/images/gallery/outdoor/thumbs/telescope.jpg', alt: 'Outdoor terrace and telescope at Hill House' },
            { type: 'image', src: '/hillhouse/media/images/gallery/outdoor/pool-sunset-palms.jpeg', thumb: '/hillhouse/media/images/gallery/outdoor/thumbs/pool-sunset-palms.jpeg', alt: 'Infinity pool at sunset with palm trees at Hill House' },
            { type: 'image', src: '/hillhouse/media/images/gallery/outdoor/pool-loungers-pergola.jpeg', thumb: '/hillhouse/media/images/gallery/outdoor/thumbs/pool-loungers-pergola.jpeg', alt: 'Pool with sun loungers and pergola at Hill House' },
            { type: 'image', src: '/hillhouse/media/images/gallery/outdoor/pool-palm-dusk.jpeg', thumb: '/hillhouse/media/images/gallery/outdoor/thumbs/pool-palm-dusk.jpeg', alt: 'Pool and palm tree at dusk at Hill House' },
            { type: 'image', src: '/hillhouse/media/images/gallery/outdoor/villa-pool-exterior.jpeg', thumb: '/hillhouse/media/images/gallery/outdoor/thumbs/villa-pool-exterior.jpeg', alt: 'Villa exterior with pool at Hill House' },
            { type: 'image', src: '/hillhouse/media/images/gallery/outdoor/villa-garden-path.jpeg', thumb: '/hillhouse/media/images/gallery/outdoor/thumbs/villa-garden-path.jpeg', alt: 'Villa exterior with garden path at Hill House' },
            { type: 'image', src: '/hillhouse/media/images/gallery/outdoor/garden-path-flowers.jpeg', thumb: '/hillhouse/media/images/gallery/outdoor/thumbs/garden-path-flowers.jpeg', alt: 'Garden path with flowering plants at Hill House' },
          ],
        },
        {
          id: 'motion', i18nIndex: 5, className: 'gallery-category--portrait',
          cover: '/hillhouse/media/images/gallery/professional/covers/vila-prestige-hill-15-1920x1438.jpeg',
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
      coords: [44.531929, 20.709867],
      mapsLink: 'https://maps.app.goo.gl/JTjSLyJM5MhdmGri7',
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
      hero: '/hillhouse2/media/images/gallery/exterior/prestige-hill-2-4-1920x2560.jpg',
      card: '/hillhouse2/media/images/landing_hill_2@card.jpg',
      why: '/hillhouse2/media/images/gallery/exterior/B14E38D4@why.jpeg',
      // Same full panoramic shot as hh1 — right panel shows right half
      selectorCard: '/hillhouse/media/images/panorama-selector.jpg',
    },

    heroVideo: {
      src: '/hillhouse2/media/images/gallery/video/intro.mp4',
      poster: '/hillhouse2/media/images/gallery/exterior/prestige-hill-2-4-1920x2560.jpg',
    },

    experiences: [
      { image: '/hillhouse2/media/images/gallery/hall/prestige-hill-2-1-3@exp.jpeg', alt: 'Svečana sala sa zlatnim kandelabrima — Hill House 2', reverse: false },
      { image: '/hillhouse2/media/images/gallery/exterior/prestige-hill-2-16@exp.jpg', alt: 'A-frame vila sa bazenom i palmama — Hill House 2', reverse: true },
      { image: '/hillhouse2/media/images/gallery/interior/prestige-hill-2-5@exp.jpg', alt: 'Kuhinja i trpezarija — Hill House 2', reverse: false },
    ],

    gallery: {
      categories: [
        {
          id: 'exterior', i18nIndex: 4, className: 'gallery-category--hero',
          cover: '/hillhouse2/media/images/gallery/exterior/covers/prestige-hill-2-12-1920x2560.jpg',
          items: [
            { type: 'image', src: '/hillhouse2/media/images/gallery/exterior/prestige-hill-2-12-1920x2560.jpg', thumb: '/hillhouse2/media/images/gallery/exterior/thumbs/prestige-hill-2-12-1920x2560.jpg', alt: 'A-frame vila sa bazenom — Hill House 2' },
            { type: 'image', src: '/hillhouse2/media/images/gallery/exterior/prestige-hill-2-4-1920x2560.jpg', thumb: '/hillhouse2/media/images/gallery/exterior/thumbs/prestige-hill-2-4-1920x2560.jpg', alt: 'Bazen u sumračnom svetlu — Hill House 2' },
            { type: 'image', src: '/hillhouse2/media/images/gallery/exterior/prestige-hill-2-16-1920x2560.jpg', thumb: '/hillhouse2/media/images/gallery/exterior/thumbs/prestige-hill-2-16-1920x2560.jpg', alt: 'Bazen sa palmama i suncobranima — Hill House 2' },
            { type: 'image', src: '/hillhouse2/media/images/gallery/exterior/prestige-hill-2-8-1920x3413.jpg', thumb: '/hillhouse2/media/images/gallery/exterior/thumbs/prestige-hill-2-8-1920x3413.jpg', alt: 'A-frame fasada vile — Hill House 2' },
            { type: 'image', src: '/hillhouse2/media/images/gallery/exterior/prestige-hill-2-2-1920x3413.jpg', thumb: '/hillhouse2/media/images/gallery/exterior/thumbs/prestige-hill-2-2-1920x3413.jpg', alt: 'Vila i bazen — pogled spolja — Hill House 2' },
            { type: 'image', src: '/hillhouse2/media/images/gallery/exterior/prestige-hill-2-9-1920x3413.jpg', thumb: '/hillhouse2/media/images/gallery/exterior/thumbs/prestige-hill-2-9-1920x3413.jpg', alt: 'Terasa i bazen — Hill House 2' },
            { type: 'image', src: '/hillhouse2/media/images/gallery/exterior/IMG_1832.jpeg', thumb: '/hillhouse2/media/images/gallery/exterior/thumbs/IMG_1832.jpeg', alt: 'Bazen sa ležaljkama i suncobranima — Hill House 2' },
          ],
        },
        {
          id: 'hall', i18nIndex: 6, className: 'gallery-category--tall',
          cover: '/hillhouse2/media/images/gallery/hall/covers/prestige-hill-2-1-3-1920x3413.jpeg',
          items: [
            { type: 'image', src: '/hillhouse2/media/images/gallery/hall/prestige-hill-2-1-3-1920x3413.jpeg', thumb: '/hillhouse2/media/images/gallery/hall/thumbs/prestige-hill-2-1-3-1920x3413.jpeg', alt: 'Sala sa zlatnim kandelabrima — Hill House 2' },
            { type: 'image', src: '/hillhouse2/media/images/gallery/hall/prestige-hill-2-1-1-1920x3413.jpeg', thumb: '/hillhouse2/media/images/gallery/hall/thumbs/prestige-hill-2-1-1-1920x3413.jpeg', alt: 'Sala sa okruglim stolovima i kandelabrima — Hill House 2' },
            { type: 'image', src: '/hillhouse2/media/images/gallery/hall/prestige-hill-2-1-4-1920x3413.jpeg', thumb: '/hillhouse2/media/images/gallery/hall/thumbs/prestige-hill-2-1-4-1920x3413.jpeg', alt: 'Svečana trpezarija — Hill House 2' },
            { type: 'image', src: '/hillhouse2/media/images/gallery/hall/IMG_5570.jpeg', thumb: '/hillhouse2/media/images/gallery/hall/thumbs/IMG_5570.jpeg', alt: 'Luster u svečanoj sali — Hill House 2' },
            { type: 'image', src: '/hillhouse2/media/images/gallery/hall/IMG_5773.jpeg', thumb: '/hillhouse2/media/images/gallery/hall/thumbs/IMG_5773.jpeg', alt: 'Dekorativna skulptura u sali — Hill House 2' },
            { type: 'image', src: '/hillhouse2/media/images/gallery/hall/prestige-hill-2-1-2-1920x3413.jpeg', thumb: '/hillhouse2/media/images/gallery/hall/thumbs/prestige-hill-2-1-2-1920x3413.jpeg', alt: 'Bela event sala sa stolovima — Hill House 2' },
            { type: 'image', src: '/hillhouse2/media/images/gallery/hall/prestige-hill-2-1-5-1920x3413.jpeg', thumb: '/hillhouse2/media/images/gallery/hall/thumbs/prestige-hill-2-1-5-1920x3413.jpeg', alt: 'Sala postavljena za svečanost — Hill House 2' },
            { type: 'image', src: '/hillhouse2/media/images/gallery/hall/prestige-hill-2-18-1920x3413.jpeg', thumb: '/hillhouse2/media/images/gallery/hall/thumbs/prestige-hill-2-18-1920x3413.jpeg', alt: 'Sala sa okruglim stolovima — Hill House 2' },
            { type: 'image', src: '/hillhouse2/media/images/gallery/hall/IMG_5547.jpeg', thumb: '/hillhouse2/media/images/gallery/hall/thumbs/IMG_5547.jpeg', alt: 'Stolovi u svečanoj sali — Hill House 2' },
            { type: 'image', src: '/hillhouse2/media/images/gallery/hall/IMG_5527.jpeg', thumb: '/hillhouse2/media/images/gallery/hall/thumbs/IMG_5527.jpeg', alt: 'Sala sa postavljenim stolovima — Hill House 2' },
            { type: 'image', src: '/hillhouse2/media/images/gallery/hall/IMG_5546.jpeg', thumb: '/hillhouse2/media/images/gallery/hall/thumbs/IMG_5546.jpeg', alt: 'Postavljeni stolovi za događaj — Hill House 2' },
            { type: 'image', src: '/hillhouse2/media/images/gallery/hall/IMG_5552.jpeg', thumb: '/hillhouse2/media/images/gallery/hall/thumbs/IMG_5552.jpeg', alt: 'Sala za svečanosti — Hill House 2' },
            { type: 'image', src: '/hillhouse2/media/images/gallery/hall/IMG_5556.jpeg', thumb: '/hillhouse2/media/images/gallery/hall/thumbs/IMG_5556.jpeg', alt: 'Okrugli stolovi u svečanoj sali — Hill House 2' },
            { type: 'image', src: '/hillhouse2/media/images/gallery/hall/prestige-hill-2-1-10-1920x3413.jpeg', thumb: '/hillhouse2/media/images/gallery/hall/thumbs/prestige-hill-2-1-10-1920x3413.jpeg', alt: 'Kupatilo sa lukom — Hill House 2' },
            { type: 'image', src: '/hillhouse2/media/images/gallery/hall/IMG_5561.jpeg', thumb: '/hillhouse2/media/images/gallery/hall/thumbs/IMG_5561.jpeg', alt: 'Dekorisani sto — Hill House 2' },
            { type: 'image', src: '/hillhouse2/media/images/gallery/hall/IMG_5568.jpeg', thumb: '/hillhouse2/media/images/gallery/hall/thumbs/IMG_5568.jpeg', alt: 'Dekor stola iz blizine — Hill House 2' },
          ],
        },
        {
          id: 'interior', i18nIndex: 3, className: 'gallery-category--portrait',
          cover: '/hillhouse2/media/images/gallery/interior/covers/prestige-hill-2-5-1920x3413.jpg',
          items: [
            { type: 'image', src: '/hillhouse2/media/images/gallery/interior/prestige-hill-2-5-1920x3413.jpg', thumb: '/hillhouse2/media/images/gallery/interior/thumbs/prestige-hill-2-5-1920x3413.jpg', alt: 'Kuhinja i trpezarija — Hill House 2' },
            { type: 'image', src: '/hillhouse2/media/images/gallery/interior/prestige-hill-2-1-1920x3413.jpeg', thumb: '/hillhouse2/media/images/gallery/interior/thumbs/prestige-hill-2-1-1920x3413.jpeg', alt: 'Kupatilo sa zlatnom kadom — Hill House 2' },
            { type: 'image', src: '/hillhouse2/media/images/gallery/interior/prestige-hill-2-6-1920x3413.jpeg', thumb: '/hillhouse2/media/images/gallery/interior/thumbs/prestige-hill-2-6-1920x3413.jpeg', alt: 'Prostorija sa prirodnim svetlom — Hill House 2' },
            { type: 'image', src: '/hillhouse2/media/images/gallery/interior/prestige-hill-2-6-1920x3413.jpg', thumb: '/hillhouse2/media/images/gallery/interior/thumbs/prestige-hill-2-6-1920x3413.jpg', alt: 'Spavaća soba — Hill House 2' },
            { type: 'image', src: '/hillhouse2/media/images/gallery/interior/prestige-hill-2-17-1920x3413.jpg', thumb: '/hillhouse2/media/images/gallery/interior/thumbs/prestige-hill-2-17-1920x3413.jpg', alt: 'Dnevni boravak sa pogledom — Hill House 2' },
            { type: 'image', src: '/hillhouse2/media/images/gallery/interior/prestige-hill-2-4-1920x3413.jpeg', thumb: '/hillhouse2/media/images/gallery/interior/thumbs/prestige-hill-2-4-1920x3413.jpeg', alt: 'Trpezarija — Hill House 2' },
            { type: 'image', src: '/hillhouse2/media/images/gallery/interior/prestige-hill-2-15-1920x3413.jpg', thumb: '/hillhouse2/media/images/gallery/interior/thumbs/prestige-hill-2-15-1920x3413.jpg', alt: 'Dnevni boravak — Hill House 2' },
            { type: 'image', src: '/hillhouse2/media/images/gallery/interior/prestige-hill-2-15-1920x3413.jpeg', thumb: '/hillhouse2/media/images/gallery/interior/thumbs/prestige-hill-2-15-1920x3413.jpeg', alt: 'Soba sa pogledom — Hill House 2' },
            { type: 'image', src: '/hillhouse2/media/images/gallery/interior/prestige-hill-2-21-1920x3413.jpeg', thumb: '/hillhouse2/media/images/gallery/interior/thumbs/prestige-hill-2-21-1920x3413.jpeg', alt: 'Spavaća soba — Hill House 2' },
            { type: 'image', src: '/hillhouse2/media/images/gallery/interior/prestige-hill-2-11-1920x3413.jpeg', thumb: '/hillhouse2/media/images/gallery/interior/thumbs/prestige-hill-2-11-1920x3413.jpeg', alt: 'Spavaća soba sa prozorom — Hill House 2' },
            { type: 'image', src: '/hillhouse2/media/images/gallery/interior/prestige-hill-2-14-1920x3413.jpeg', thumb: '/hillhouse2/media/images/gallery/interior/thumbs/prestige-hill-2-14-1920x3413.jpeg', alt: 'Spavaća soba sa pogledom — Hill House 2' },
            { type: 'image', src: '/hillhouse2/media/images/gallery/interior/prestige-hill-2-12-1920x3413.jpeg', thumb: '/hillhouse2/media/images/gallery/interior/thumbs/prestige-hill-2-12-1920x3413.jpeg', alt: 'Spavaća soba — Hill House 2' },
            { type: 'image', src: '/hillhouse2/media/images/gallery/interior/prestige-hill-2-3-1920x3413.jpeg', thumb: '/hillhouse2/media/images/gallery/interior/thumbs/prestige-hill-2-3-1920x3413.jpeg', alt: 'Spavaća soba — Hill House 2' },
            { type: 'image', src: '/hillhouse2/media/images/gallery/interior/prestige-hill-2-8-1920x3413.jpeg', thumb: '/hillhouse2/media/images/gallery/interior/thumbs/prestige-hill-2-8-1920x3413.jpeg', alt: 'Hodnik — Hill House 2' },
            { type: 'image', src: '/hillhouse2/media/images/gallery/interior/prestige-hill-2-7-1920x3413.jpeg', thumb: '/hillhouse2/media/images/gallery/interior/thumbs/prestige-hill-2-7-1920x3413.jpeg', alt: 'Kupatilo sa ovalnim ogledalima — Hill House 2' },
            { type: 'image', src: '/hillhouse2/media/images/gallery/interior/prestige-hill-2-7-1920x3413.jpg', thumb: '/hillhouse2/media/images/gallery/interior/thumbs/prestige-hill-2-7-1920x3413.jpg', alt: 'Kupatilo — Hill House 2' },
            { type: 'image', src: '/hillhouse2/media/images/gallery/interior/prestige-hill-2-16-1920x3413.jpeg', thumb: '/hillhouse2/media/images/gallery/interior/thumbs/prestige-hill-2-16-1920x3413.jpeg', alt: 'Kupatilo — lavabo — Hill House 2' },
            { type: 'image', src: '/hillhouse2/media/images/gallery/interior/prestige-hill-2-13-1920x3413.jpg', thumb: '/hillhouse2/media/images/gallery/interior/thumbs/prestige-hill-2-13-1920x3413.jpg', alt: 'Kupatilo sa kadom — Hill House 2' },
            { type: 'image', src: '/hillhouse2/media/images/gallery/interior/prestige-hill-2-17-1920x3413.jpeg', thumb: '/hillhouse2/media/images/gallery/interior/thumbs/prestige-hill-2-17-1920x3413.jpeg', alt: 'Garderobni prostor — Hill House 2' },
            { type: 'image', src: '/hillhouse2/media/images/gallery/interior/prestige-hill-2-10-1920x3413.jpeg', thumb: '/hillhouse2/media/images/gallery/interior/thumbs/prestige-hill-2-10-1920x3413.jpeg', alt: 'Kupatilo — tamni mermerni zidovi — Hill House 2' },
            { type: 'image', src: '/hillhouse2/media/images/gallery/interior/prestige-hill-2-9-1920x3413.jpeg', thumb: '/hillhouse2/media/images/gallery/interior/thumbs/prestige-hill-2-9-1920x3413.jpeg', alt: 'Terasa i bazen — pogled — Hill House 2' },
            { type: 'image', src: '/hillhouse2/media/images/gallery/interior/IMG_1808.jpeg', thumb: '/hillhouse2/media/images/gallery/interior/thumbs/IMG_1808.jpeg', alt: 'Kupatilo sa kadom — Hill House 2' },
          ],
        },
        {
          id: 'events', i18nIndex: 1, className: 'gallery-category--portrait',
          cover: '/hillhouse2/media/images/gallery/events/covers/IMG_4448.jpeg',
          items: [
            { type: 'video', src: '/hillhouse2/media/images/gallery/video/ceremony.mp4', poster: '/hillhouse2/media/images/gallery/events/ceremony_preview.jpg', thumb: '/hillhouse2/media/images/gallery/events/ceremony_preview.jpg', alt: 'Video — Venčanje Hill House 2' },
            { type: 'image', src: '/hillhouse2/media/images/gallery/events/IMG_4448.jpeg', thumb: '/hillhouse2/media/images/gallery/events/thumbs/IMG_4448.jpeg', alt: 'Proslava uz vatromet i ljubičasto osvetljenje — Hill House 2' }
          ],
        },
        {
          id: 'motion', i18nIndex: 5, className: 'gallery-category--portrait',
          cover: '/hillhouse2/media/images/gallery/exterior/covers/prestige-hill-2-12-1920x2560.jpg',
          items: [
            { type: 'video', src: '/hillhouse2/media/images/gallery/video/Video1.mp4', poster: '/hillhouse2/media/images/gallery/exterior/prestige-hill-2-4-1920x2560.jpg', thumb: '/hillhouse2/media/images/gallery/exterior/prestige-hill-2-4-1920x2560.jpg', alt: 'Video — Hill House 2' },
            { type: 'video', src: '/hillhouse2/media/images/gallery/video/Video2.mp4', poster: '/hillhouse2/media/images/gallery/exterior/prestige-hill-2-16-1920x2560.jpg', thumb: '/hillhouse2/media/images/gallery/exterior/prestige-hill-2-16-1920x2560.jpg', alt: 'Video — Hill House 2' },
            { type: 'video', src: '/hillhouse2/media/images/gallery/video/Video3.mp4', poster: '/hillhouse2/media/images/gallery/hall/prestige-hill-2-18-1920x3413.jpeg', thumb: '/hillhouse2/media/images/gallery/hall/prestige-hill-2-18-1920x3413.jpeg', alt: 'Video — Hill House 2' },
            { type: 'video', src: '/hillhouse2/media/images/gallery/video/Video4.mp4', poster: '/hillhouse2/media/images/gallery/exterior/prestige-hill-2-8-1920x3413.jpg', thumb: '/hillhouse2/media/images/gallery/exterior/prestige-hill-2-8-1920x3413.jpg', alt: 'Video — Hill House 2' },
            { type: 'video', src: '/hillhouse2/media/images/gallery/video/Video5.mp4', poster: '/hillhouse2/media/images/gallery/exterior/prestige-hill-2-2-1920x3413.jpg', thumb: '/hillhouse2/media/images/gallery/exterior/prestige-hill-2-2-1920x3413.jpg', alt: 'Video — Hill House 2' },
          ],
        },
      ],
    },

    reviews: {
      main: {
        quote: 'Venčanje u Hill Luxury House 2 bilo je magično. Bela, moderna vila okružena zelenilom, elegancija na svakom koraku — i osoblje koje je sve učinilo savršenim.',
        author: 'Iva Rašović',
        link: 'https://maps.app.goo.gl/heFyvmLuKumwSMKx8',
      },
      supporting: [
        { text: 'Sanja je bila izuzetna — profesionalna, ljubazna i uvek spremna da pomogne. Učinila je da ceo dan prođe bez ijednog stresa.', author: 'Iva Rašović', link: 'https://maps.app.goo.gl/heFyvmLuKumwSMKx8' },
        { text: 'Od srca preporučujemo Hill Luxury House 2 svima koji traže elegantno, moderno i lepo mesto za poseban dan.', author: 'Iva Rašović', link: 'https://maps.app.goo.gl/heFyvmLuKumwSMKx8' },
      ],
    },

    location: {
      coords: [44.559061, 20.648417],
      mapsLink: 'https://maps.app.goo.gl/9qGCkjKQEFQtQqts7',
    },
  },
]

export function useVillas() {
  return VILLAS
}

export function useVilla(id) {
  return VILLAS.find(v => v.id === id)
}
