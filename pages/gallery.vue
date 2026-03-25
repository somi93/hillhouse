<template>
  <div class="gallery-page">
    <section class="gallery-hero">
      <v-container>
        <div class="content-shell gallery-hero__shell">
          <p class="section-eyebrow">{{ $t("layout.menu.gallery") }}</p>
          <h1 class="gallery-hero__title">
            {{ isEn ? 'Choose your gallery' : 'Izaberite galeriju' }}
          </h1>
          <p class="gallery-hero__sub">
            {{ isEn
              ? 'Each villa has its own unique atmosphere. Browse the gallery of the one that intrigues you.'
              : 'Svaka vila ima svoju jedinstvenu atmosferu. Pregledajte galeriju one koja vas zanima.'
            }}
          </p>
        </div>
      </v-container>
    </section>

    <section class="gallery-select">
      <v-container>
        <div class="content-shell">
          <div class="villa-cards">

            <NuxtLink :to="localePath('/hill-house-1/gallery')" class="villa-card">
              <div class="villa-card__image-wrap">
                <v-img
                  src="/hillhouse/media/images/gallery/professional/vila-prestige-hill-15-1920x1438.jpeg"
                  :alt="isEn ? 'Hill House 1 gallery' : 'Hill House 1 galerija'"
                  cover
                  aspect-ratio="1.5"
                  class="villa-card__image"
                ></v-img>
                <div class="villa-card__overlay"></div>
              </div>
              <div class="villa-card__inner">
                <p class="villa-card__eyebrow">Hill House 1</p>
                <h2 class="villa-card__title">{{ isEn ? 'Private villa with spa' : 'Privatna vila sa spa centrom' }}</h2>
                <span class="villa-card__cta">
                  {{ isEn ? 'View gallery' : 'Pogledaj galeriju' }}
                  <span class="villa-card__arrow">→</span>
                </span>
              </div>
            </NuxtLink>

            <NuxtLink :to="localePath('/hill-house-2/gallery')" class="villa-card">
              <div class="villa-card__image-wrap">
                <v-img
                  src="/hillhouse2/media/images/gallery/exterior/prestige-hill-2-12-1920x2560.jpg"
                  :alt="isEn ? 'Hill House 2 gallery' : 'Hill House 2 galerija'"
                  cover
                  aspect-ratio="1.5"
                  class="villa-card__image"
                ></v-img>
                <div class="villa-card__overlay"></div>
              </div>
              <div class="villa-card__inner">
                <p class="villa-card__eyebrow">Hill House 2</p>
                <h2 class="villa-card__title">{{ isEn ? 'Villa with event hall' : 'Vila sa svečanom salom' }}</h2>
                <span class="villa-card__cta">
                  {{ isEn ? 'View gallery' : 'Pogledaj galeriju' }}
                  <span class="villa-card__arrow">→</span>
                </span>
              </div>
            </NuxtLink>

          </div>
        </div>
      </v-container>
    </section>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n({ useScope: 'global' })
const localePath = useLocalePath()
const isEn = computed(() => locale.value === 'en')

useHead(computed(() => ({
  title: isEn.value
    ? 'Gallery — Hill House Luxury Villas'
    : 'Galerija — Hill House Privatne Vile',
  link: [
    {
      rel: 'canonical',
      href: isEn.value
        ? 'https://www.hillhouse.rs/en/gallery'
        : 'https://www.hillhouse.rs/gallery',
    },
  ],
  meta: [
    { name: 'robots', content: 'index, follow' },
    {
      name: 'description',
      content: isEn.value
        ? 'Browse photo galleries of Hill House 1 and Hill House 2 — two luxury villas for events, weddings and celebrations near Belgrade.'
        : 'Pregledajte galerije fotografija Hill House 1 i Hill House 2 — dve luksuzne vile za proslave, venčanja i posebne događaje kod Beograda.',
    },
    {
      property: 'og:title',
      content: isEn.value
        ? 'Gallery — Hill House Luxury Villas'
        : 'Galerija — Hill House Privatne Vile',
    },
    {
      property: 'og:description',
      content: isEn.value
        ? 'Galleries of Hill House 1 and Hill House 2 villas — pool, interiors, events and more.'
        : 'Galerije Hill House 1 i Hill House 2 — bazen, enterijer, proslave i još mnogo toga.',
    },
    {
      property: 'og:image',
      content: 'https://www.hillhouse.rs/hillhouse/media/images/gallery/professional/vila-prestige-hill-15-1920x1438.jpeg',
    },
    {
      property: 'og:url',
      content: isEn.value
        ? 'https://www.hillhouse.rs/en/gallery'
        : 'https://www.hillhouse.rs/gallery',
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

/* ── Hero ── */
.gallery-hero {
  padding: 48px 0 0;
  background: linear-gradient(160deg, #f7f1ea 0%, var(--surface-ivory) 100%);
  border-bottom: 1px solid rgba(95, 90, 82, 0.1);
}

.gallery-hero__shell {
  max-width: 820px;
}

.gallery-hero__title {
  color: var(--brand-dark);
  font-size: clamp(3.2rem, 6vw, 4rem);
  line-height: 0.96;
  margin: 18px 0 28px;
}

.gallery-hero__sub {
  color: var(--text-warm);
  font-size: 1.05rem;
  line-height: 1.72;
  max-width: 58ch;
  margin-bottom: 48px;
}

/* ── Selection ── */
.gallery-select {
  padding: 80px 0 96px;
  background: var(--surface-ivory);
}

.villa-cards {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 28px;
}

.villa-card {
  display: block;
  text-decoration: none;
  color: inherit;
  border-radius: 20px;
  overflow: hidden;
  border: 1px solid rgba(95, 90, 82, 0.12);
  box-shadow: 0 8px 40px rgba(36, 24, 14, 0.07);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.villa-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 24px 64px rgba(36, 24, 14, 0.12);
}

.villa-card__image-wrap {
  position: relative;
}

.villa-card__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom, transparent 40%, rgba(10, 8, 6, 0.35) 100%);
  pointer-events: none;
}

.villa-card__inner {
  padding: 28px 32px 32px;
  background: #fff;
}

.villa-card__eyebrow {
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--brand-gold);
  margin-bottom: 10px;
}

.villa-card__title {
  font-family: var(--font-heading);
  font-size: clamp(1.4rem, 2vw, 1.7rem);
  font-weight: 400;
  line-height: 1.15;
  color: var(--brand-dark);
  margin-bottom: 20px;
}

.villa-card__cta {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--brand-gold);
}

.villa-card__arrow {
  font-size: 1.1rem;
  transition: transform 0.2s ease;
}

.villa-card:hover .villa-card__arrow {
  transform: translateX(4px);
}

/* ── Responsive ── */
@media (max-width: 768px) {
  .gallery-hero {
    padding: 36px 0 0;
  }

  .gallery-hero__title {
    font-size: clamp(2.6rem, 10vw, 3rem);
    margin: 14px 0 20px;
  }

  .gallery-select {
    padding: 56px 0 72px;
  }

  .villa-cards {
    grid-template-columns: 1fr;
    gap: 20px;
  }
}
</style>