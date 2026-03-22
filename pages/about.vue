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
useI18n({ useScope: 'global' })

useHead({
  title: 'O nama — Hill House Privatna Vila',
  link: [{ rel: 'canonical', href: 'https://www.hillhouse.rs/about' }],
  meta: [
    { name: 'robots', content: 'index, follow' },
    {
      name: 'description',
      content: 'Saznajte više o Hill House vili — privatnom prostoru za proslave i posebne trenutke sa bazenom, spa zonom i panoramskim pogledom, 30 minuta od Beograda.',
    },
    { property: 'og:title', content: 'O nama — Hill House Privatna Vila' },
    {
      property: 'og:description',
      content: 'Privatna luksuzna vila sa bazenom, spa zonom i atmosferom koja ostavlja utisak. Saznajte više o Hill House.',
    },
    {
      property: 'og:image',
      content: 'https://www.hillhouse.rs/hillhouse/media/images/gallery/professional/vila-prestige-hill-15-1920x1438.jpeg',
    },
    { property: 'og:url', content: 'https://www.hillhouse.rs/about' },
    { property: 'og:type', content: 'website' },
    { property: 'og:locale', content: 'sr_RS' },
  ],
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