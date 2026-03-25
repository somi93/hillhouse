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

useHead(computed(() => ({
  title: isEn.value
    ? 'Gallery — Hill House 2 Luxury Villa'
    : 'Galerija — Hill House 2 Privatna Vila',
  link: [
    {
      rel: 'canonical',
      href: isEn.value
        ? 'https://www.hillhouse.rs/en/hill-house-2/gallery'
        : 'https://www.hillhouse.rs/hill-house-2/gallery',
    },
  ],
  meta: [
    { name: 'robots', content: 'index, follow' },
    {
      name: 'description',
      content: isEn.value
        ? 'Browse photos of Hill House 2 — event hall, pool, interiors and celebrations. A luxury villa with indoor event space 30 minutes from Belgrade.'
        : 'Pregledajte fotografije Hill House 2 — svečana sala, bazen, enterijer i proslave. Luksuzna vila sa salom 30 minuta od Beograda.',
    },
    {
      property: 'og:title',
      content: isEn.value
        ? 'Gallery — Hill House 2 Luxury Villa'
        : 'Galerija — Hill House 2 Privatna Vila',
    },
    {
      property: 'og:image',
      content: 'https://www.hillhouse.rs/hillhouse2/media/images/gallery/exterior/prestige-hill-2-4-1920x2560.jpg',
    },
    {
      property: 'og:url',
      content: isEn.value
        ? 'https://www.hillhouse.rs/en/hill-house-2/gallery'
        : 'https://www.hillhouse.rs/hill-house-2/gallery',
    },
    { property: 'og:type', content: 'website' },
    { property: 'og:locale', content: isEn.value ? 'en_US' : 'sr_RS' },
  ],
})))
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