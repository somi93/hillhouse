<template>
  <div class="gallery-page">
    <div class="gallery-page__header">
      <v-container>
        <div class="content-shell">
          <p class="section-eyebrow">Hill House 1</p>
          <h1 class="gallery-page__title">
            {{ isEn ? 'Gallery' : 'Galerija' }}
          </h1>
        </div>
      </v-container>
    </div>

    <div class="gallery-page__grid">
      <v-container>
        <div class="content-shell">
          <Gallery :photos="photos" />
        </div>
      </v-container>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import Gallery from '@/components/gallery/gallery'
import {
  createBreadcrumbSchema,
  createWebPageSchema,
  useSeoPage,
} from '@/composables/useSeo'

const { locale } = useI18n({ useScope: 'global' })
const isEn = computed(() => locale.value === 'en')

const villaData = useVilla('hh1')

function parseDimensions(src) {
  const match = src.match(/[_-](\d{3,4})x(\d{3,4})\./i)
  if (match) return { width: parseInt(match[1]), height: parseInt(match[2]) }
  return { width: 1920, height: 1440 }
}

const photos = computed(() =>
  villaData.gallery.categories
    .flatMap(cat => cat.items)
    .filter(item => item.type === 'image')
    .map((item, i) => ({
      id: `hh1-${i}`,
      alt: item.alt,
      url: item.src,
      resized: item.src.replace(
        '/hillhouse/media/images/gallery/professional/',
        '/hillhouse/media/images/gallery/professional/resized/'
      ),
      description: '',
      params: { dimensions: parseDimensions(item.src) },
    }))
)


useSeoPage({
  path: '/hill-house-1/gallery',
  title: {
    sr: 'Galerija Hill House | Fotografije vile i sadržaja',
    en: 'Hill House gallery | Villa and amenity photos',
  },
  description: {
    sr: 'Pregledajte galeriju Hill House vile: bazen, spa zona, enterijer, spavaće sobe, terasa i kadrovi sa događaja.',
    en: 'Browse the Hill House gallery: pool, spa zone, interior, bedrooms, terrace and scenes from hosted events.',
  },
  keywords: {
    sr: 'hill house galerija, slike vile sa bazenom, fotografije spa vile, vila za proslave galerija',
    en: 'hill house gallery, villa with pool photos, spa villa images, event villa gallery',
  },
  image: {
    url: '/hillhouse/media/images/gallery/professional/vila-prestige-hill-15-1920x1438.jpeg',
    width: 1920,
    height: 1438,
    alt: 'Hill House gallery cover image',
  },
  schemas: (localeCode) => {
    const breadcrumbItems = [
      { name: localeCode === 'en' ? 'Home' : 'Početna', path: '/' },
      { name: 'Hill House', path: '/hill-house-1' },
      { name: localeCode === 'en' ? 'Gallery' : 'Galerija', path: '/hill-house-1/gallery' },
    ]
    const title = localeCode === 'en' ? 'Hill House gallery | Villa and amenity photos' : 'Galerija Hill House | Fotografije vile i sadržaja'
    const description =
      localeCode === 'en'
        ? 'Photo gallery of Hill House villa and event atmosphere.'
        : 'Foto galerija Hill House vile i atmosfere događaja.'

    return [
      createBreadcrumbSchema(breadcrumbItems, localeCode),
      createWebPageSchema({
        path: '/hill-house-1/gallery',
        localeCode,
        title,
        description,
        type: 'ImageGallery',
        image: '/hillhouse/media/images/gallery/professional/vila-prestige-hill-15-1920x1438.jpeg',
        breadcrumbItems,
      }),
    ]
  },
})
</script>

<style scoped>
.gallery-page {
  background: var(--surface-ivory);
}

.gallery-page__header {
  padding: 48px 0 40px;
  background: linear-gradient(160deg, #f7f1ea 0%, var(--surface-ivory) 100%);
  border-bottom: 1px solid rgba(95, 90, 82, 0.1);
}

.gallery-page__title {
  color: var(--brand-dark);
  font-size: clamp(3rem, 6vw, 4rem);
  line-height: 0.96;
  margin: 14px 0 0;
}

.gallery-page__grid {
  padding: 48px 0 80px;
}

@media (max-width: 599px) {
  .gallery-page__header {
    padding: 36px 0 28px;
  }
  .gallery-page__title {
    font-size: clamp(2.4rem, 10vw, 3rem);
  }
}
</style>