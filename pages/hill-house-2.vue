<template>
  <div class="villa-page">
    <villa-hero villa="hh2" />
    <redesign-why />
    <redesign-experiences />
    <redesign-occasions />
    <redesign-social-proof />
    <redesign-gallery />
    <redesign-cta />
    <redesign-location />
    <sister-villa target="hh1" />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import VillaHero from '@/components/home/redesign/villa-hero'
import RedesignWhy from '@/components/home/redesign/why'
import RedesignExperiences from '@/components/home/redesign/experiences'
import RedesignOccasions from '@/components/home/redesign/occasions'
import RedesignSocialProof from '@/components/home/redesign/social-proof'
import RedesignGallery from '@/components/home/redesign/gallery'
import RedesignCta from '@/components/home/redesign/cta'
import RedesignLocation from '@/components/home/redesign/location'
import SisterVilla from '@/components/home/redesign/sister-villa'

const { locale } = useI18n({ useScope: 'global' })
const localePath = useLocalePath()

useHead(computed(() => {
  const isSr = locale.value !== 'en'
  return {
    title: isSr
      ? 'Hill House 2 — Privatna luksuzna vila za proslave | Šepšin'
      : 'Hill House 2 — Private Luxury Villa for Events | Šepšin',
    meta: [
      {
        name: 'description',
        content: isSr
          ? 'Hill House 2 — privatna luksuzna vila za proslave i posebne događaje. Bazen, terasa, savremeni dizajn — 30 minuta od Beograda.'
          : 'Hill House 2 — private luxury villa for celebrations and special events. Pool, terrace, contemporary design — 30 minutes from Belgrade.',
      },
      { property: 'og:title', content: isSr ? 'Hill House 2 — Privatna vila za proslave' : 'Hill House 2 — Private Villa for Events' },
      { property: 'og:description', content: isSr ? 'Luksuzna privatna vila, bazen, savremeni dizajn — Šepšin, 30 min od Beograda.' : 'Luxury private villa, pool, contemporary design — Šepšin, 30 min from Belgrade.' },
      { property: 'og:url', content: isSr ? 'https://www.hillhouse.rs/hill-house-2' : 'https://www.hillhouse.rs/en/hill-house-2' },
      { rel: 'canonical', href: isSr ? 'https://www.hillhouse.rs/hill-house-2' : 'https://www.hillhouse.rs/en/hill-house-2' },
    ],
  }
}))
</script>
