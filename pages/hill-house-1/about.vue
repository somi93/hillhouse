<template>
  <div class="about-page">

    <div class="about-page__header">
      <v-container>
        <div class="content-shell">
          <p class="section-eyebrow section-eyebrow--light">{{ $t('layout.menu.about') }}</p>
          <h1 class="about-page__title section-title section-title--light">
            {{ $t('home.about.title') }}
          </h1>
        </div>
      </v-container>
    </div>

    <div class="about-page__body">
      <v-container>
        <div class="content-shell">
          <div class="about-body">
            <div class="about-body__text">
              <p class="section-text section-text--warm" v-html="$t('home.about.paragraph1')"></p>
              <p class="section-text section-text--warm mt-5" v-html="$t('home.about.paragraph3')"></p>
              <p class="section-text section-text--warm mt-5" v-html="$t('home.about.paragraph7')"></p>
            </div>
          </div>
        </div>
      </v-container>
    </div>

  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'
import {
  createBreadcrumbSchema,
  createWebPageSchema,
  useSeoPage,
} from '@/composables/useSeo'

const { locale } = useI18n({ useScope: 'global' })
const isEn = computed(() => locale.value === 'en')

useSeoPage({
  path: '/hill-house-1/about',
  title: {
    sr: 'O Hill House vili | Privatna vila za proslave',
    en: 'About Hill House | Private villa for events',
  },
  description: {
    sr: 'Saznajte više o Hill House vili u Šepšinu: ambijent, sadržaji, pogled, spa zona i detalji prostora za proslave i boravke.',
    en: 'Learn more about Hill House in Sepsin: atmosphere, amenities, views, spa zone and details of the property for celebrations and stays.',
  },
  keywords: {
    sr: 'o hill house vili, privatna vila sepsin, spa vila beograd, vila za proslave o nama',
    en: 'about hill house villa, private villa sepsin, spa villa near belgrade, event villa about page',
  },
  image: '/hillhouse/media/images/gallery/professional/vila-prestige-hill-15-1920x1438.jpeg',
  schemas: (localeCode) => {
    const breadcrumbItems = [
      { name: localeCode === 'en' ? 'Home' : 'Početna', path: '/' },
      { name: 'Hill House', path: '/hill-house-1' },
      { name: localeCode === 'en' ? 'About' : 'O nama', path: '/hill-house-1/about' },
    ]
    const title = localeCode === 'en' ? 'About Hill House | Private villa for events' : 'O Hill House vili | Privatna vila za proslave'
    const description =
      localeCode === 'en'
        ? 'Background and details of Hill House luxury villa near Belgrade.'
        : 'Pozadina i detalji Hill House luksuzne vile nadomak Beograda.'

    return [
      createBreadcrumbSchema(breadcrumbItems, localeCode),
      createWebPageSchema({
        path: '/hill-house-1/about',
        localeCode,
        title,
        description,
        type: 'AboutPage',
        image: '/hillhouse/media/images/gallery/professional/vila-prestige-hill-15-1920x1438.jpeg',
        breadcrumbItems,
      }),
    ]
  },
})
</script>

<style scoped>
.about-page__header {
  padding: 100px 0 72px;
  background: radial-gradient(circle at top left, rgba(207, 169, 117, 0.18), transparent 30%),
    linear-gradient(180deg, #171412 0%, #0f0d0c 100%);
}

.about-page__title {
  max-width: 22ch;
  margin: 0;
}

.about-page__body {
  background: var(--surface-ivory);
  padding: 72px 0 120px;
}

.about-body__text {
  max-width: 680px;
}

@media (max-width: 959px) {
  .about-page__header {
    padding: 72px 0 52px;
  }

  .about-page__body {
    padding: 48px 0 80px;
  }
}
</style>