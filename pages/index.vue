<template>
  <slider></slider>
  <about></about>
  <facilities></facilities>
  <utilities></utilities>
  <testimonials></testimonials>
  <gallery></gallery>
  <hill-map></hill-map>
</template>

<script setup>
import Slider from '@/components/home/slider'
import Facilities from '@/components/home/facilities'
import Utilities from '@/components/home/utilities'
import About from "@/components/home/about";
import Gallery from "@/components/home/gallery";
import Testimonials from "@/components/home/testimonials";
import HillMap from "@/components/home/map";
import {onMounted} from 'vue'

onMounted(() => {
  if (window.location.hash) {
    window.scrollTo({
      top: document.getElementById(window.location.hash.slice(1)).offsetTop - 192,
      left: 0,
      behavior: "smooth",
    });
  }
});

let structuredData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "url": "https://www.hillhouse.rs",
  "name": "Hillhouse.rs",
  "description": "Luksuzna vila za izdavanje u blizini Beograda.",
  "alternateName": "Izdavanje vikendice",
  "publisher": {
    "@type": "Organization",
    "@id": "https://www.hillhouse.rs/#organization",
    "name": "Hill House",
    "url": "https://www.hillhouse.rs",
    "sameAs": "https://www.instagram.com/hill_luxury_house",
    "logo": {
      "@type": "ImageObject",
      "@id": "https://www.hillhouse.rs/#/schema/logo/image/",
      "url": "https://www.hillhouse.rs/hillhouse/media/images/logo5.png",
      "width": "994",
      "height": "232",
      "caption": "Hill House logo"
    },
    "image": {
      "@type": "ImageObject",
      "@id": "https://www.hillhouse.rs/#mainImage",
      "url": "https://www.hillhouse.rs/hillhouse/media/images/gallery/vila-prestige-hill-15-1920x1438.jpeg",
      "width": "1920",
      "height": "1438",
      "caption": "Hill House vila"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Varovničkih ratnika",
      "addressLocality": "Šepšin",
      "addressRegion": "Mladenovac",
      "postalCode": "11433",
      "addressCountry": "Serbia"
    },
    "email": "",
    "telephone": "+38169635632",
  },
  "image": {
    "@type": "ImageObject",
    "@id": "https://www.hillhouse.rs/#mainImage",
    "url": "https://www.hillhouse.rs/hillhouse/media/images/gallery/vila-prestige-hill-15-1920x1438.jpeg",
    "width": "1920",
    "height": "1438",
    "caption": "Hill House vila"
  },
  "mainEntity": {
    "@type": "LocalBusiness",
    "@id": "https://www.hillhouse.rs",  // Website URL for the house (same as website)
    "url": "https://www.hillhouse.rs",  // Website URL for the house
    "name": "Hill House - Vila za izdavanje",
    "description": "Hill house je vila za izdavanje uz koju ćete uživati u savršenom odmoru u prirodi. Prepustite se opuštajućoj atmosferi koju pruža naša vila.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Varovničkih ratnika",
      "addressLocality": "Šepšin",
      "addressRegion": "Mladenovac",
      "postalCode": "11433",
      "addressCountry": "Serbia"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "44.5337646",
      "longitude": "20.7174632"
    },
    "telephone": "+38169635632",
    "amenityFeature": [
      {
        "@type": "LocationFeatureSpecification",
        "name": "Private Pool",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Free WiFi",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Spa",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Barbecue",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Free Parking",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Jacuzzi",
        "value": true
      }
    ],
  }
}

useHead({
  title: 'Hill House - Vila za izdavanje',
  link: [
    {
      rel: 'canonical',
      href: 'https://www.hillhouse.rs'
    }
  ],
  meta: [
    {
      name: 'robots',
      content: 'index, follow'
    },
    {
      name: "description",
      content: `Hill house je vila za izdavanje uz koju ćete uživati u savršenom odmoru u prirodi. Prepustite se opuštajućoj atmosferi koju pruža naša vila.`,
    },
    {
      hid: 'keywords',
      name: 'keywords',
      content: 'hill house, iznajmljivanje vikendica, iznajmljivanje vila, vila u blizini beograda, luksuzne vile'
    },
    {
      property: 'og:title',
      content: 'Hill House - Vila za izdavanje',
    },
    {
      property: 'og:description',
      content: `Hill house je vila za izdavanje uz koju ćete uživati u savršenom odmoru u prirodi. Prepustite se opuštajućoj atmosferi koju pruža naša vila.`,
    },
    {
      property: 'og:image',
      content: 'https://www.hillhouse.rs/hillhouse/media/images/gallery/vila-prestige-hill-15-1920x1438.jpeg',
    },
    {
      property: 'og:type',
      content: 'website',
    },
    {
      property: 'og:locale',
      content: 'sr_RS',
    },
    {
      property: 'og:url',
      content: 'https://www.hillhouse.rs',
    },
  ],
  script: {
    innerHTML: JSON.stringify(structuredData),
    type: 'application/ld+json'
  },
  __dangerouslyDisableSanitizers: ['script']
});
</script>