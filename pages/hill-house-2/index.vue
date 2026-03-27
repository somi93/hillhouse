<template>
  <div class="villa-page">
    <redesign-hero villa="hh2" />
    <redesign-why villa="hh2" />
    <redesign-experiences villa="hh2" />
    <redesign-social-proof villa="hh2" />
    <redesign-gallery villa="hh2" />
    <redesign-cta />
    <redesign-location villa="hh2" />
    <villa-card-promo villa="hh1" />
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import RedesignHero from '@/components/home/redesign/hero'
import RedesignWhy from '@/components/home/redesign/why'
import RedesignExperiences from '@/components/home/redesign/experiences'
import RedesignSocialProof from '@/components/home/redesign/social-proof'
import RedesignGallery from '@/components/home/redesign/gallery'
import RedesignCta from '@/components/home/redesign/cta'
import RedesignLocation from '@/components/home/redesign/location'
import VillaCardPromo from '@/components/home/redesign/villa-card-promo'
import {
  createBreadcrumbSchema,
  createVillaBusinessSchema,
  createWebPageSchema,
  useSeoPage,
} from '@/composables/useSeo'

const { locale } = useI18n({ useScope: 'global' })

onMounted(() => {
  if (window.location.hash) {
    const target = document.getElementById(window.location.hash.slice(1))
    if (!target) {
      return
    }

    window.scrollTo({
      top: target.offsetTop - 112,
      left: 0,
      behavior: 'smooth',
    })
  }
})

useSeoPage({
  path: '/hill-house-2',
  title: {
    sr: 'Hill House 2 | Vila sa svečanom salom i bazenom u Šepšinu',
    en: 'Hill House 2 | Villa with event hall and pool in Sepsin',
  },
  description: {
    sr: 'Hill House 2 je privatna vila za venčanja i proslave sa svečanom salom, infinity bazenom, letnjikovcem i kapacitetom do 250 gostiju, 30 minuta od Beograda.',
    en: 'Hill House 2 is a private villa for weddings and events with event hall, infinity pool, summerhouse and capacity for up to 250 guests, 30 minutes from Belgrade.',
  },
  keywords: {
    sr: 'hill house 2, vila sa salom za proslave, vila za vencanje beograd, infinity bazen vila, privatna vila sepsin',
    en: 'hill house 2, villa with event hall serbia, wedding villa near belgrade, infinity pool villa, private event venue sepsin',
  },
  image: {
    url: '/hillhouse2/media/images/gallery/exterior/prestige-hill-2-12-1920x2560.jpg',
    width: 1920,
    height: 2560,
    alt: 'Hill House 2 villa exterior with pool',
  },
  schemas: (localeCode) => {
    const title =
      localeCode === 'en'
        ? 'Hill House 2 | Villa with event hall and pool in Sepsin'
        : 'Hill House 2 | Vila sa svečanom salom i bazenom u Šepšinu'
    const description =
      localeCode === 'en'
        ? 'Luxury event villa with indoor hall, infinity pool and accommodation near Belgrade.'
        : 'Luksuzna event vila sa unutrašnjom salom, infinity bazenom i smeštajem nadomak Beograda.'
    const breadcrumbItems = [
      { name: localeCode === 'en' ? 'Home' : 'Početna', path: '/' },
      { name: 'Hill House 2', path: '/hill-house-2' },
    ]

    return [
      createBreadcrumbSchema(breadcrumbItems, localeCode),
      createWebPageSchema({
        path: '/hill-house-2',
        localeCode,
        title,
        description,
        image: '/hillhouse2/media/images/gallery/exterior/prestige-hill-2-12-1920x2560.jpg',
        breadcrumbItems,
      }),
      createVillaBusinessSchema({
        name: 'Hill House 2',
        path: '/hill-house-2',
        localeCode,
        description,
        image: '/hillhouse2/media/images/gallery/exterior/prestige-hill-2-12-1920x2560.jpg',
        geo: { latitude: 44.559061, longitude: 20.648417 },
        mapsLink: 'https://maps.app.goo.gl/9qGCkjKQEFQtQqts7',
        amenities: ['Infinity Pool', 'Event Hall', 'Open Jacuzzi', 'Free Parking', 'Free WiFi'],
        eventCapacity: 250,
        sleepingCapacity: 7,
      }),
    ]
  },
})
</script>
