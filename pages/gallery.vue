<template>
  <div class="gallery-page">
    <div class="gallery-page__header">
      <v-container>
        <div class="content-shell">
          <p class="section-eyebrow">{{ $t('layout.menu.gallery') }}</p>
          <h1 class="gallery-page__title section-title section-title--light">
            {{ $t('home.gallery.title') }}
          </h1>
        </div>
      </v-container>
    </div>

    <div class="gallery-page__grid">
      <v-container>
        <div class="content-shell">
          <gallery :photos="photos" />
        </div>
      </v-container>
    </div>
  </div>
</template>

<script setup>
import Gallery from '@/components/gallery/gallery'
import { ref } from 'vue'

useHead({
  title: 'Galerija — Hill House Privatna Vila',
  link: [{ rel: 'canonical', href: 'https://www.hillhouse.rs/gallery' }],
  meta: [
    { name: 'robots', content: 'index, follow' },
    {
      name: 'description',
      content: 'Pregledajte fotografije Hill House vile — bazen, spa zona, enterijer i proslave. Prostor koji ostavlja utisak i pre prvog dolaska.',
    },
    { property: 'og:title', content: 'Galerija — Hill House Privatna Vila' },
    {
      property: 'og:description',
      content: 'Fotografije Hill House vile — bazen, enterijer, proslave i produkcije. Prostor koji ostavlja utisak.',
    },
    {
      property: 'og:image',
      content: 'https://www.hillhouse.rs/hillhouse/media/images/gallery/professional/vila-prestige-hill-15-1920x1438.jpeg',
    },
    { property: 'og:url', content: 'https://www.hillhouse.rs/gallery' },
    { property: 'og:type', content: 'website' },
    { property: 'og:locale', content: 'sr_RS' },
  ],
})

const photos = ref(
    [
      {
        "id": "DZQ58MV6VVoMzXy2",
        "alt": "Living room with jacuzzi",
        "url": "/hillhouse/media/images/gallery/professional/vila-prestige-hill.jpeg",
        "resized": "/hillhouse/media/images/gallery/professional/resized/vila-prestige-hill.jpeg",
        "description": "Dnevna soba",
        "params": {"dimensions": {"width": 1600, "height": 720}},
      },
      {
        "id": "DZQ58MV6VVoMzXy2",
        "alt": "Villa yard",
        "url": "/hillhouse/media/images/gallery/professional/vila-prestige-hill-1-1920x1440.jpeg",
        "resized": "/hillhouse/media/images/gallery/professional/resized/vila-prestige-hill-1-1920x1440.jpeg",
        "description": "Bazen",
        "params": {"dimensions": {"width": 1920, "height": 1440}},
      },
      {
        "id": "DZQ58MV6VVoMzXy2",
        "alt": "Home theatre in the living room",
        "url": "/hillhouse/media/images/gallery/professional/vila-prestige-hill-2-1.jpeg",
        "resized": "/hillhouse/media/images/gallery/professional/resized/vila-prestige-hill-2-1.jpeg",
        "description": "",
        "params": {"dimensions": {"width": 900, "height": 1200}},
      },
      {
        "id": "DZQ58MV6VVoMzXy2",
        "url": "/hillhouse/media/images/gallery/professional/vila-prestige-hill-2-1920x1440.jpeg",
        "resized": "/hillhouse/media/images/gallery/professional/resized/vila-prestige-hill-2-1920x1440.jpeg",
        "description": "",
        "params": {"dimensions": {"width": 1920, "height": 1440}},
      },
      {
        "id": "DZQ58MV6VVoMzXy2",
        "alt": "Swimming pool with green led at night",
        "url": "/hillhouse/media/images/gallery/professional/vila-prestige-hill-3-1.jpeg",
        "resized": "/hillhouse/media/images/gallery/professional/resized/vila-prestige-hill-3-1.jpeg",
        "description": "",
        "params": {"dimensions": {"width": 900, "height": 1200}},
      },
      {
        "id": "DZQ58MV6VVoMzXy2",
        "alt": "Swimming pool",
        "url": "/hillhouse/media/images/gallery/professional/vila-prestige-hill-3-1920x1440.jpeg",
        "resized": "/hillhouse/media/images/gallery/professional/resized/vila-prestige-hill-3-1920x1440.jpeg",
        "description": "",
        "params": {"dimensions": {"width": 1920, "height": 1440}},
      },
      {
        "id": "DZQ58MV6VVoMzXy2",
        "alt": "",
        "url": "/hillhouse/media/images/gallery/professional/vila-prestige-hill-4-1.jpeg",
        "resized": "/hillhouse/media/images/gallery/professional/resized/vila-prestige-hill-4-1.jpeg",
        "description": "",
        "params": {"dimensions": {"width": 900, "height": 1200}},
      },
      {
        "id": "DZQ58MV6VVoMzXy2",
        "alt": "Living room with upstairs in the background",
        "url": "/hillhouse/media/images/gallery/professional/vila-prestige-hill-4-1920x1440.jpeg",
        "resized": "/hillhouse/media/images/gallery/professional/resized/vila-prestige-hill-4-1920x1440.jpeg",
        "description": "",
        "params": {"dimensions": {"width": 1920, "height": 1440}},
      },
      {
        "id": "DZQ58MV6VVoMzXy2",
        "alt": "Sauna",
        "url": "/hillhouse/media/images/gallery/professional/vila-prestige-hill-5-1.jpeg",
        "resized": "/hillhouse/media/images/gallery/professional/resized/vila-prestige-hill-5-1.jpeg",
        "description": "",
        "params": {"dimensions": {"width": 900, "height": 1200}},
      },
      {
        "id": "DZQ58MV6VVoMzXy2",
        "alt": "Dining room",
        "url": "/hillhouse/media/images/gallery/professional/vila-prestige-hill-5-1920x1280.jpeg",
        "resized": "/hillhouse/media/images/gallery/professional/resized/vila-prestige-hill-5-1920x1280.jpeg",
        "description": "",
        "params": {"dimensions": {"width": 1920, "height": 1280}},
      },
      {
        "id": "DZQ58MV6VVoMzXy2",
        "alt": "Home theatre",
        "url": "/hillhouse/media/images/gallery/professional/vila-prestige-hill-6.jpeg",
        "resized": "/hillhouse/media/images/gallery/professional/resized/vila-prestige-hill-6.jpeg",
        "description": "",
        "params": {"dimensions": {"width": 900, "height": 1200}},
      },
      {
        "id": "DZQ58MV6VVoMzXy2",
        "alt": "Sauna inside living room",
        "url": "/hillhouse/media/images/gallery/professional/vila-prestige-hill-7-1.jpeg",
        "resized": "/hillhouse/media/images/gallery/professional/resized/vila-prestige-hill-7-1.jpeg",
        "description": "",
        "params": {"dimensions": {"width": 900, "height": 1200}},
      },
      {
        "id": "DZQ58MV6VVoMzXy2",
        "alt": "Bedroom",
        "url": "/hillhouse/media/images/gallery/professional/vila-prestige-hill-7-1920x1281.jpeg",
        "resized": "/hillhouse/media/images/gallery/professional/resized/vila-prestige-hill-7-1920x1281.jpeg",
        "description": "",
        "params": {"dimensions": {"width": 1920, "height": 1440}},
      },
      {
        "id": "DZQ58MV6VVoMzXy2",
        "url": "/hillhouse/media/images/gallery/professional/vila-prestige-hill-8-1.jpeg",
        "resized": "/hillhouse/media/images/gallery/professional/resized/vila-prestige-hill-8-1.jpeg",
        "description": "Spa and towels",
        "params": {"dimensions": {"width": 900, "height": 1200}},
      },
      {
        "id": "DZQ58MV6VVoMzXy2",
        "alt": "Bathroom",
        "url": "/hillhouse/media/images/gallery/professional/vila-prestige-hill-8-1920x1281.jpeg",
        "resized": "/hillhouse/media/images/gallery/professional/resized/vila-prestige-hill-8-1920x1281.jpeg",
        "description": "",
        "params": {"dimensions": {"width": 1920, "height": 1440}},
      },
      {
        "id": "DZQ58MV6VVoMzXy2",
        "alt": "Living room and sauna",
        "url": "/hillhouse/media/images/gallery/professional/vila-prestige-hill-9-1.jpeg",
        "resized": "/hillhouse/media/images/gallery/professional/resized/vila-prestige-hill-9-1.jpeg",
        "description": "",
        "params": {"dimensions": {"width": 540, "height": 1200}},
      },
      {
        "id": "DZQ58MV6VVoMzXy2",
        "alt": "Bedroom",
        "url": "/hillhouse/media/images/gallery/professional/vila-prestige-hill-9-1920x1280.jpeg",
        "resized": "/hillhouse/media/images/gallery/professional/resized/vila-prestige-hill-9-1920x1280.jpeg",
        "description": "",
        "params": {"dimensions": {"width": 1920, "height": 1440}},
      },
      {
        "id": "DZQ58MV6VVoMzXy2",
        "alt": "Living room",
        "url": "/hillhouse/media/images/gallery/professional/vila-prestige-hill-10-1.jpeg",
        "resized": "/hillhouse/media/images/gallery/professional/resized/vila-prestige-hill-10-1.jpeg",
        "description": "",
        "params": {"dimensions": {"width": 900, "height": 1200}},
      },
      {
        "id": "DZQ58MV6VVoMzXy2",
        "alt": "Hall",
        "url": "/hillhouse/media/images/gallery/professional/vila-prestige-hill-10-1920x2880.jpeg",
        "resized": "/hillhouse/media/images/gallery/professional/resized/vila-prestige-hill-10-1920x2880.jpeg",
        "description": "",
        "params": {"dimensions": {"width": 1920, "height": 2880}},
      },
      {
        "id": "DZQ58MV6VVoMzXy2",
        "alt": "Living room",
        "url": "/hillhouse/media/images/gallery/professional/vila-prestige-hill-11.jpeg",
        "resized": "/hillhouse/media/images/gallery/professional/resized/vila-prestige-hill-11.jpeg",
        "description": "",
        "params": {"dimensions": {"width": 1600, "height": 720}},
      },
      {
        "id": "DZQ58MV6VVoMzXy2",
        "alt": "Living room and bar behind",
        "url": "/hillhouse/media/images/gallery/professional/vila-prestige-hill-12-1.jpeg",
        "resized": "/hillhouse/media/images/gallery/professional/resized/vila-prestige-hill-12-1.jpeg",
        "description": "",
        "params": {"dimensions": {"width": 540, "height": 1200}},
      },
      {
        "id": "DZQ58MV6VVoMzXy2",
        "alt": "Villa and fire pit",
        "url": "/hillhouse/media/images/gallery/professional/vila-prestige-hill-12-1920x1281.jpeg",
        "resized": "/hillhouse/media/images/gallery/professional/resized/vila-prestige-hill-12-1920x1281.jpeg",
        "description": "",
        "params": {"dimensions": {"width": 1920, "height": 1281}},
      },
      {
        "id": "DZQ58MV6VVoMzXy2",
        "alt": "Living room and sauna",
        "url": "/hillhouse/media/images/gallery/professional/vila-prestige-hill-13-1.jpeg",
        "resized": "/hillhouse/media/images/gallery/professional/resized/vila-prestige-hill-13-1.jpeg",
        "description": "",
        "params": {"dimensions": {"width": 540, "height": 1200}},
      },
      {
        "id": "DZQ58MV6VVoMzXy2",
        "alt": "Hill house",
        "url": "/hillhouse/media/images/gallery/professional/vila-prestige-hill-13-1920x1281.jpeg",
        "resized": "/hillhouse/media/images/gallery/professional/resized/vila-prestige-hill-13-1920x1281.jpeg",
        "description": "",
        "params": {"dimensions": {"width": 1920, "height": 1281}},
      },
      {
        "id": "DZQ58MV6VVoMzXy2",
        "alt": "",
        "url": "/hillhouse/media/images/gallery/professional/vila-prestige-hill-14-1920x1280.jpeg",
        "resized": "/hillhouse/media/images/gallery/professional/resized/vila-prestige-hill-14-1920x1280.jpeg",
        "description": "",
        "params": {"dimensions": {"width": 1920, "height": 1280}},
      },
      {
        "id": "DZQ58MV6VVoMzXy2",
        "alt": "",
        "url": "/hillhouse/media/images/gallery/professional/vila-prestige-hill-15-1920x1438.jpeg",
        "resized": "/hillhouse/media/images/gallery/professional/resized/vila-prestige-hill-15-1920x1438.jpeg",
        "description": "",
        "params": {"dimensions": {"width": 1920, "height": 1438}},
      },
      {
        "id": "DZQ58MV6VVoMzXy2",
        "alt": "",
        "url": "/hillhouse/media/images/gallery/professional/vila-prestige-hill-16-1920x1438.jpeg",
        "resized": "/hillhouse/media/images/gallery/professional/resized/vila-prestige-hill-16-1920x1438.jpeg",
        "description": "",
        "params": {"dimensions": {"width": 1920, "height": 1438}},
      },
      {
        "id": "DZQ58MV6VVoMzXy2",
        "alt": "",
        "url": "/hillhouse/media/images/gallery/professional/vila-prestige-hill-17-1920x1280.jpeg",
        "resized": "/hillhouse/media/images/gallery/professional/resized/vila-prestige-hill-17-1920x1280.jpeg",
        "description": "",
        "params": {"dimensions": {"width": 1920, "height": 1280}},
      },
      {
        "id": "DZQ58MV6VVoMzXy2",
        "alt": "",
        "url": "/hillhouse/media/images/gallery/professional/vila-prestige-hill-18-1920x1280.jpeg",
        "resized": "/hillhouse/media/images/gallery/professional/resized/vila-prestige-hill-18-1920x1280.jpeg",
        "description": "",
        "params": {"dimensions": {"width": 1920, "height": 1280}},
      },
      {
        "id": "DZQ58MV6VVoMzXy2",
        "alt": "",
        "url": "/hillhouse/media/images/gallery/professional/vila-prestige-hill-19-1920x1281.jpeg",
        "resized": "/hillhouse/media/images/gallery/professional/resized/vila-prestige-hill-19-1920x1281.jpeg",
        "description": "",
        "params": {"dimensions": {"width": 1920, "height": 1281}},
      },
      {
        "id": "DZQ58MV6VVoMzXy2",
        "alt": "",
        "url": "/hillhouse/media/images/gallery/professional/vila-prestige-hill-20-1920x1280.jpeg",
        "resized": "/hillhouse/media/images/gallery/professional/resized/vila-prestige-hill-20-1920x1280.jpeg",
        "description": "",
        "params": {"dimensions": {"width": 1920, "height": 1280}},
      },
      {
        "id": "DZQ58MV6VVoMzXy2",
        "alt": "",
        "url": "/hillhouse/media/images/gallery/professional/vila-prestige-hill-21-1920x1281.jpeg",
        "resized": "/hillhouse/media/images/gallery/professional/resized/vila-prestige-hill-21-1920x1281.jpeg",
        "description": "",
        "params": {"dimensions": {"width": 1920, "height": 1281}},
      },
      {
        "id": "DZQ58MV6VVoMzXy2",
        "alt": "",
        "url": "/hillhouse/media/images/gallery/professional/vila-prestige-hill-22-1920x1280.jpeg",
        "resized": "/hillhouse/media/images/gallery/professional/resized/vila-prestige-hill-22-1920x1280.jpeg",
        "description": "",
        "params": {"dimensions": {"width": 1920, "height": 1280}},
      },
      {
        "id": "DZQ58MV6VVoMzXy2",
        "alt": "",
        "url": "/hillhouse/media/images/gallery/professional/vila-prestige-hill-23-1920x1440.jpeg",
        "resized": "/hillhouse/media/images/gallery/professional/resized/vila-prestige-hill-23-1920x1440.jpeg",
        "description": "",
        "params": {"dimensions": {"width": 1920, "height": 1440}},
      },
      {
        "id": "DZQ58MV6VVoMzXy2",
        "alt": "",
        "url": "/hillhouse/media/images/gallery/professional/vila-prestige-hill-24-1920x1440",
        "resized": "/hillhouse/media/images/gallery/professional/resized/vila-prestige-hill-24-1920x1440",
        "description": "",
        "params": {"dimensions": {"width": 1920, "height": 1440}},
      },
      {
        "id": "DZQ58MV6VVoMzXy2",
        "alt": "",
        "url": "/hillhouse/media/images/gallery/professional/vila-prestige-hill-25-1920x1440.jpeg",
        "resized": "/hillhouse/media/images/gallery/professional/resized/vila-prestige-hill-25-1920x1440.jpeg",
        "description": "",
        "params": {"dimensions": {"width": 1920, "height": 1440}},
      },
      {
        "id": "DZQ58MV6VVoMzXy2",
        "alt": "",
        "url": "/hillhouse/media/images/gallery/professional/vila-prestige-hill-26-1920x1440.jpeg",
        "resized": "/hillhouse/media/images/gallery/professional/resized/vila-prestige-hill-26-1920x1440.jpeg",
        "description": "",
        "params": {"dimensions": {"width": 1920, "height": 1440}},
      },
      {
        "id": "DZQ58MV6VVoMzXy2",
        "alt": "",
        "url": "/hillhouse/media/images/gallery/professional/vila-prestige-hill-27-1920x1440.jpeg",
        "resized": "/hillhouse/media/images/gallery/professional/resized/vila-prestige-hill-27-1920x1440.jpeg",
        "description": "",
        "params": {"dimensions": {"width": 1920, "height": 1440}},
      },
      {
        "id": "DZQ58MV6VVoMzXy2",
        "alt": "",
        "url": "/hillhouse/media/images/gallery/professional/vila-prestige-hill-28-1920x1440.jpeg",
        "resized": "/hillhouse/media/images/gallery/professional/resized/vila-prestige-hill-28-1920x1440.jpeg",
        "description": "",
        "params": {"dimensions": {"width": 1920, "height": 1440}},
      },
      {
        "id": "DZQ58MV6VVoMzXy2",
        "alt": "",
        "url": "/hillhouse/media/images/gallery/professional/vila-prestige-hill-29-1920x1440.jpeg",
        "resized": "/hillhouse/media/images/gallery/professional/resized/vila-prestige-hill-29-1920x1440.jpeg",
        "description": "",
        "params": {"dimensions": {"width": 1920, "height": 1440}},
      },
      {
        "id": "DZQ58MV6VVoMzXy2",
        "alt": "",
        "url": "/hillhouse/media/images/gallery/professional/vila-prestige-hill-30-1920x1440.jpeg",
        "resized": "/hillhouse/media/images/gallery/professional/resized/vila-prestige-hill-30-1920x1440.jpeg",
        "description": "",
        "params": {"dimensions": {"width": 1920, "height": 1440}},
      },
      {
        "id": "DZQ58MV6VVoMzXy2",
        "alt": "Evening pool and event terrace at Hill House",
        "url": "/hillhouse/media/images/gallery/events/poolside-table-gold.jpg",
        "resized": "/hillhouse/media/images/gallery/events/poolside-table-gold.jpg",
        "description": "",
        "params": {"dimensions": {"width": 1920, "height": 1280}},
      },
      {
        "id": "DZQ58MV6VVoMzXy2",
        "alt": "Event table with pool view at Hill House",
        "url": "/hillhouse/media/images/gallery/events/pool-view-table-gold.jpg",
        "resized": "/hillhouse/media/images/gallery/events/pool-view-table-gold.jpg",
        "description": "",
        "params": {"dimensions": {"width": 1920, "height": 1280}},
      },
      {
        "id": "DZQ58MV6VVoMzXy2",
        "alt": "Illuminated floral arch on terrace at night at Hill House",
        "url": "/hillhouse/media/images/gallery/events/night-terrace-arch.jpg",
        "resized": "/hillhouse/media/images/gallery/events/night-terrace-arch.jpg",
        "description": "",
        "params": {"dimensions": {"width": 1920, "height": 1280}},
      },
      {
        "id": "DZQ58MV6VVoMzXy2",
        "alt": "Boho ceremony arch with pampas grass and macramé at Hill House",
        "url": "/hillhouse/media/images/gallery/events/boho-ceremony-arch.jpg",
        "resized": "/hillhouse/media/images/gallery/events/boho-ceremony-arch.jpg",
        "description": "",
        "params": {"dimensions": {"width": 1920, "height": 1280}},
      },
      {
        "id": "DZQ58MV6VVoMzXy2",
        "alt": "Outdoor wedding reception with round tables by the pool at Hill House",
        "url": "/hillhouse/media/images/gallery/events/outdoor-reception-pool.jpg",
        "resized": "/hillhouse/media/images/gallery/events/outdoor-reception-pool.jpg",
        "description": "",
        "params": {"dimensions": {"width": 1920, "height": 1280}},
      },
      {
        "id": "DZQ58MV6VVoMzXy2",
        "alt": "Outdoor pergola dining with green napkins at Hill House",
        "url": "/hillhouse/media/images/gallery/events/pergola-dining-green.jpeg",
        "resized": "/hillhouse/media/images/gallery/events/pergola-dining-green.jpeg",
        "description": "",
        "params": {"dimensions": {"width": 900, "height": 1200}},
      },
      {
        "id": "DZQ58MV6VVoMzXy2",
        "alt": "Couple photo shoot by the pool at Hill House",
        "url": "/hillhouse/media/images/gallery/productions/couple-shoot-poolside.jpg",
        "resized": "/hillhouse/media/images/gallery/productions/couple-shoot-poolside.jpg",
        "description": "",
        "params": {"dimensions": {"width": 1920, "height": 1280}},
      },
      {
        "id": "DZQ58MV6VVoMzXy2",
        "alt": "Fashion shoot on the terrace at Hill House",
        "url": "/hillhouse/media/images/gallery/productions/pink-dress-terrace-shoot.jpg",
        "resized": "/hillhouse/media/images/gallery/productions/pink-dress-terrace-shoot.jpg",
        "description": "",
        "params": {"dimensions": {"width": 1920, "height": 1280}},
      },
      {
        "id": "DZQ58MV6VVoMzXy2",
        "alt": "Luxury bedroom with velvet headboard and pendant lighting at Hill House",
        "url": "/hillhouse/media/images/gallery/interior/bedroom-velvet-headboard.jpg",
        "resized": "/hillhouse/media/images/gallery/interior/bedroom-velvet-headboard.jpg",
        "description": "",
        "params": {"dimensions": {"width": 900, "height": 1200}},
      },
      {
        "id": "DZQ58MV6VVoMzXy2",
        "alt": "Cinema lounge with curved sofas and green LED ambiance at Hill House",
        "url": "/hillhouse/media/images/gallery/interior/cinema-lounge-green-led.jpg",
        "resized": "/hillhouse/media/images/gallery/interior/cinema-lounge-green-led.jpg",
        "description": "",
        "params": {"dimensions": {"width": 900, "height": 1200}},
      },
      {
        "id": "DZQ58MV6VVoMzXy2",
        "alt": "Marble bathroom with gold fixtures and round mirror at Hill House",
        "url": "/hillhouse/media/images/gallery/interior/bathroom-marble-gold.jpg",
        "resized": "/hillhouse/media/images/gallery/interior/bathroom-marble-gold.jpg",
        "description": "",
        "params": {"dimensions": {"width": 900, "height": 1200}},
      },
      {
        "id": "DZQ58MV6VVoMzXy2",
        "alt": "Lit terrace lounge at sunset with panoramic valley view at Hill House",
        "url": "/hillhouse/media/images/gallery/interior/terrace-sunset-lounge.jpg",
        "resized": "/hillhouse/media/images/gallery/interior/terrace-sunset-lounge.jpg",
        "description": "",
        "params": {"dimensions": {"width": 900, "height": 1200}},
      },
      {
        "id": "DZQ58MV6VVoMzXy2",
        "alt": "Living room with built-in shelves and TV wall at Hill House",
        "url": "/hillhouse/media/images/gallery/interior/living-room-shelves.jpg",
        "resized": "/hillhouse/media/images/gallery/interior/living-room-shelves.jpg",
        "description": "",
        "params": {"dimensions": {"width": 900, "height": 1200}},
      },
      {
        "id": "DZQ58MV6VVoMzXy2",
        "alt": "Private sauna with glass door and warm wood interior at Hill House",
        "url": "/hillhouse/media/images/gallery/interior/sauna-glass-door.jpeg",
        "resized": "/hillhouse/media/images/gallery/interior/sauna-glass-door.jpeg",
        "description": "",
        "params": {"dimensions": {"width": 900, "height": 1200}},
      },
      {
        "id": "DZQ58MV6VVoMzXy2",
        "alt": "Spa lounge with star ceiling, blue LED lighting and sauna at Hill House",
        "url": "/hillhouse/media/images/gallery/interior/spa-lounge-blue-led.jpeg",
        "resized": "/hillhouse/media/images/gallery/interior/spa-lounge-blue-led.jpeg",
        "description": "",
        "params": {"dimensions": {"width": 900, "height": 1200}},
      },
      {
        "id": "DZQ58MV6VVoMzXy2",
        "alt": "Lower level lounge with staircase and ambient LED lighting at Hill House",
        "url": "/hillhouse/media/images/gallery/interior/lower-lounge-staircase.jpeg",
        "resized": "/hillhouse/media/images/gallery/interior/lower-lounge-staircase.jpeg",
        "description": "",
        "params": {"dimensions": {"width": 900, "height": 1200}},
      },
      {
        "id": "DZQ58MV6VVoMzXy2",
        "alt": "Round dining table under chandelier with rose centerpiece at Hill House",
        "url": "/hillhouse/media/images/gallery/interior/dining-chandelier-roses.jpeg",
        "resized": "/hillhouse/media/images/gallery/interior/dining-chandelier-roses.jpeg",
        "description": "",
        "params": {"dimensions": {"width": 1920, "height": 1280}},
      },
      {
        "id": "DZQ58MV6VVoMzXy2",
        "alt": "Dining room set with white chairs and floral centerpiece at Hill House",
        "url": "/hillhouse/media/images/gallery/interior/dining-white-florals.jpeg",
        "resized": "/hillhouse/media/images/gallery/interior/dining-white-florals.jpeg",
        "description": "",
        "params": {"dimensions": {"width": 1920, "height": 1280}},
      },
      {
        "id": "DZQ58MV6VVoMzXy2",
        "alt": "Dining table set with pink napkins and floral runner at Hill House",
        "url": "/hillhouse/media/images/gallery/interior/dining-pink-setup.jpeg",
        "resized": "/hillhouse/media/images/gallery/interior/dining-pink-setup.jpeg",
        "description": "",
        "params": {"dimensions": {"width": 1920, "height": 1280}},
      },
      {
        "id": "DZQ58MV6VVoMzXy2",
        "alt": "Club lounge with white modular sofas and LED ceiling at Hill House",
        "url": "/hillhouse/media/images/gallery/interior/club-lounge-sofas.jpeg",
        "resized": "/hillhouse/media/images/gallery/interior/club-lounge-sofas.jpeg",
        "description": "",
        "params": {"dimensions": {"width": 1920, "height": 1280}},
      },
      {
        "id": "DZQ58MV6VVoMzXy2",
        "alt": "Lounge area with round marble table and floral arrangement at Hill House",
        "url": "/hillhouse/media/images/gallery/interior/lounge-floral-table.jpeg",
        "resized": "/hillhouse/media/images/gallery/interior/lounge-floral-table.jpeg",
        "description": "",
        "params": {"dimensions": {"width": 1920, "height": 1280}},
      },
      {
        "id": "DZQ58MV6VVoMzXy2",
        "alt": "Indoor jacuzzi with food and drinks tray at Hill House",
        "url": "/hillhouse/media/images/gallery/interior/jacuzzi-with-food.jpeg",
        "resized": "/hillhouse/media/images/gallery/interior/jacuzzi-with-food.jpeg",
        "description": "",
        "params": {"dimensions": {"width": 900, "height": 1200}},
      },
      {
        "id": "DZQ58MV6VVoMzXy2",
        "alt": "Covered outdoor lounge terrace by the pool at Hill House",
        "url": "/hillhouse/media/images/gallery/outdoor/outdoor-covered-lounge.jpg",
        "resized": "/hillhouse/media/images/gallery/outdoor/outdoor-covered-lounge.jpg",
        "description": "",
        "params": {"dimensions": {"width": 1920, "height": 1280}},
      },
      {
        "id": "DZQ58MV6VVoMzXy2",
        "alt": "Indoor lounge with sheer curtains and modern chairs at Hill House",
        "url": "/hillhouse/media/images/gallery/interior/lounge-sheer-curtains.jpg",
        "resized": "/hillhouse/media/images/gallery/interior/lounge-sheer-curtains.jpg",
        "description": "",
        "params": {"dimensions": {"width": 1920, "height": 1280}},
      },
      {
        "id": "DZQ58MV6VVoMzXy2",
        "alt": "Outdoor terrace and telescope at Hill House",
        "url": "/hillhouse/media/images/facilities/telescope.jpg",
        "resized": "/hillhouse/media/images/facilities/telescope.jpg",
        "description": "",
        "params": {"dimensions": {"width": 1920, "height": 1280}},
      },
      {
        "id": "DZQ58MV6VVoMzXy2",
        "alt": "Infinity pool at sunset with palm trees at Hill House",
        "url": "/hillhouse/media/images/gallery/outdoor/pool-sunset-palms.jpeg",
        "resized": "/hillhouse/media/images/gallery/outdoor/pool-sunset-palms.jpeg",
        "description": "",
        "params": {"dimensions": {"width": 1920, "height": 1280}},
      },
      {
        "id": "DZQ58MV6VVoMzXy2",
        "alt": "Pool with sun loungers and pergola on a summer day at Hill House",
        "url": "/hillhouse/media/images/gallery/outdoor/pool-loungers-pergola.jpeg",
        "resized": "/hillhouse/media/images/gallery/outdoor/pool-loungers-pergola.jpeg",
        "description": "",
        "params": {"dimensions": {"width": 1920, "height": 1280}},
      },
      {
        "id": "DZQ58MV6VVoMzXy2",
        "alt": "Pool and palm tree at dusk with outdoor seating at Hill House",
        "url": "/hillhouse/media/images/gallery/outdoor/pool-palm-dusk.jpeg",
        "resized": "/hillhouse/media/images/gallery/outdoor/pool-palm-dusk.jpeg",
        "description": "",
        "params": {"dimensions": {"width": 1920, "height": 1280}},
      },
      {
        "id": "DZQ58MV6VVoMzXy2",
        "alt": "Villa exterior with pool and terrace seating at Hill House",
        "url": "/hillhouse/media/images/gallery/outdoor/villa-pool-exterior.jpeg",
        "resized": "/hillhouse/media/images/gallery/outdoor/villa-pool-exterior.jpeg",
        "description": "",
        "params": {"dimensions": {"width": 1920, "height": 1280}},
      },
      {
        "id": "DZQ58MV6VVoMzXy2",
        "alt": "Villa exterior with garden path and pool area at Hill House",
        "url": "/hillhouse/media/images/gallery/outdoor/villa-garden-path.jpeg",
        "resized": "/hillhouse/media/images/gallery/outdoor/villa-garden-path.jpeg",
        "description": "",
        "params": {"dimensions": {"width": 1920, "height": 1280}},
      },
      {
        "id": "DZQ58MV6VVoMzXy2",
        "alt": "Garden path lined with flowering plants at Hill House",
        "url": "/hillhouse/media/images/gallery/outdoor/garden-path-flowers.jpeg",
        "resized": "/hillhouse/media/images/gallery/outdoor/garden-path-flowers.jpeg",
        "description": "",
        "params": {"dimensions": {"width": 900, "height": 1200}},
      },
    ]
);
</script>

<style scoped>
.gallery-page__header {
  padding: 100px 0 72px;
  background: radial-gradient(circle at top left, rgba(207, 169, 117, 0.18), transparent 30%),
    linear-gradient(180deg, #171412 0%, #0f0d0c 100%);
}

.gallery-page__title {
  max-width: 26ch;
  margin-bottom: 18px;
}

.gallery-page__desc {
  max-width: 620px;
  opacity: 0.82;
}

.gallery-page__grid {
  padding: 64px 0 96px;
  background: var(--surface-ivory);
}

@media (max-width: 959px) {
  .gallery-page__header {
    padding: 72px 0 52px;
  }
}
</style>
