<template>
  <div class="about-page">

    <div class="about-page__header">
      <v-container>
        <div class="content-shell">
          <p class="section-eyebrow section-eyebrow--light">{{ $t('layout.menu.about') }}</p>
          <h1 class="about-page__title section-title section-title--light">
            {{ $t('home2.about.title') }}
          </h1>
        </div>
      </v-container>
    </div>

    <div class="about-page__body">
      <v-container>
        <div class="content-shell">
          <div class="about-body">
            <div class="about-body__text">
              <p class="section-text section-text--warm" v-html="$t('home2.about.paragraph1')"></p>

              <p class="section-text section-text--warm about-features__title mt-8">{{ $t('home2.about.featuresTitle') }}</p>
              <ul class="about-features mt-3">
                <li class="section-text section-text--warm about-features__item" v-html="$t('home2.about.feature1')"></li>
                <li class="section-text section-text--warm about-features__item" v-html="$t('home2.about.feature2')"></li>
                <li class="section-text section-text--warm about-features__item" v-html="$t('home2.about.feature3')"></li>
                <li class="section-text section-text--warm about-features__item" v-html="$t('home2.about.feature4')"></li>
              </ul>

              <p class="section-text section-text--warm mt-8" v-html="$t('home2.about.paragraph2')"></p>
              <p class="section-text section-text--warm mt-5 about-closing" v-html="$t('home2.about.paragraph3')"></p>
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
  path: '/hill-house-2/about',
  title: {
    sr: 'O Hill House 2 vili | Vila sa salom za proslave',
    en: 'About Hill House 2 | Villa with event hall',
  },
  description: {
    sr: 'Saznajte više o Hill House 2 vili: svečana sala, enterijer, smeštaj, bazen i detalji prostora za venčanja i veće proslave.',
    en: 'Learn more about Hill House 2: event hall, interior, accommodation, pool and details of the property for weddings and larger celebrations.',
  },
  keywords: {
    sr: 'o hill house 2, vila sa salom sepsin, prostor za vencanje o nama, luksuzna vila sa bazenom',
    en: 'about hill house 2, villa with event hall sepsin, wedding venue about page, luxury pool villa',
  },
  image: '/hillhouse2/media/images/gallery/exterior/prestige-hill-2-12-1920x2560.jpg',
  schemas: (localeCode) => {
    const breadcrumbItems = [
      { name: localeCode === 'en' ? 'Home' : 'Početna', path: '/' },
      { name: 'Hill House 2', path: '/hill-house-2' },
      { name: localeCode === 'en' ? 'About' : 'O nama', path: '/hill-house-2/about' },
    ]
    const title = localeCode === 'en' ? 'About Hill House 2 | Villa with event hall' : 'O Hill House 2 vili | Vila sa salom za proslave'
    const description =
      localeCode === 'en'
        ? 'Background and details of Hill House 2 near Belgrade.'
        : 'Pozadina i detalji Hill House 2 vile nadomak Beograda.'

    return [
      createBreadcrumbSchema(breadcrumbItems, localeCode),
      createWebPageSchema({
        path: '/hill-house-2/about',
        localeCode,
        title,
        description,
        type: 'AboutPage',
        image: '/hillhouse2/media/images/gallery/exterior/prestige-hill-2-12-1920x2560.jpg',
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

.about-features {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.about-features__item {
  padding-left: 1.25em;
  position: relative;
}

.about-features__item::before {
  content: '•';
  position: absolute;
  left: 0;
  color: var(--color-gold, #cfa975);
}

.about-features__title {
  font-weight: 600;
}

.about-closing {
  font-style: italic;
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