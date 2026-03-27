<template>
  <div class="gallery-page">
    <div class="gallery-page__header">
      <v-container>
        <div class="content-shell">
          <p class="section-eyebrow">Hill House 2</p>
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

const villaData = useVilla('hh2')

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
      id: `hh2-${i}`,
      alt: item.alt,
      url: item.src,
      resized: item.src,
      description: '',
      params: { dimensions: parseDimensions(item.src) },
    }))
)


useSeoPage({
  path: '/hill-house-2/gallery',
  title: {
    sr: 'Galerija Hill House 2 | Vila, sala i bazen',
    en: 'Hill House 2 gallery | Villa, event hall and pool',
  },
  description: {
    sr: 'Pregledajte galeriju Hill House 2 vile: svečana sala, infinity bazen, enterijer, eksterijer i kadrovi sa proslava i venčanja.',
    en: 'Browse the Hill House 2 gallery: event hall, infinity pool, interior, exterior and scenes from celebrations and weddings.',
  },
  keywords: {
    sr: 'hill house 2 galerija, vila sa salom slike, infinity bazen vila fotografije, galerija prostora za vencanja',
    en: 'hill house 2 gallery, villa with hall photos, infinity pool villa images, wedding venue gallery',
  },
  image: {
    url: '/hillhouse2/media/images/gallery/exterior/prestige-hill-2-4-1920x2560.jpg',
    width: 1920,
    height: 2560,
    alt: 'Hill House 2 gallery cover image',
  },
  schemas: (localeCode) => {
    const breadcrumbItems = [
      { name: localeCode === 'en' ? 'Home' : 'Početna', path: '/' },
      { name: 'Hill House 2', path: '/hill-house-2' },
      { name: localeCode === 'en' ? 'Gallery' : 'Galerija', path: '/hill-house-2/gallery' },
    ]
    const title = localeCode === 'en' ? 'Hill House 2 gallery | Villa, event hall and pool' : 'Galerija Hill House 2 | Vila, sala i bazen'
    const description =
      localeCode === 'en'
        ? 'Photo gallery of Hill House 2 villa, event hall and atmosphere.'
        : 'Foto galerija Hill House 2 vile, svečane sale i atmosfere događaja.'

    return [
      createBreadcrumbSchema(breadcrumbItems, localeCode),
      createWebPageSchema({
        path: '/hill-house-2/gallery',
        localeCode,
        title,
        description,
        type: 'ImageGallery',
        image: '/hillhouse2/media/images/gallery/exterior/prestige-hill-2-4-1920x2560.jpg',
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