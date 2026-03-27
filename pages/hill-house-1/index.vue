<template>
  <div class="villa-page">
    <redesign-hero villa="hh1" />
    <redesign-why villa="hh1" />
    <redesign-experiences villa="hh1" />
    <redesign-social-proof villa="hh1" />
    <redesign-gallery villa="hh1" />
    <redesign-cta />
    <redesign-location villa="hh1" />
    <villa-card-promo villa="hh2" />
  </div>
</template>

<script setup>
import { computed, onMounted } from "vue";
import { useI18n } from "vue-i18n";
import RedesignHero from "@/components/home/redesign/hero";
import RedesignWhy from "@/components/home/redesign/why";
import RedesignExperiences from "@/components/home/redesign/experiences";
import RedesignSocialProof from "@/components/home/redesign/social-proof";
import RedesignGallery from "@/components/home/redesign/gallery";
import RedesignCta from "@/components/home/redesign/cta";
import RedesignLocation from "@/components/home/redesign/location";
import VillaCardPromo from "@/components/home/redesign/villa-card-promo";
import {
  createBreadcrumbSchema,
  createVillaBusinessSchema,
  createWebPageSchema,
  useSeoPage,
} from "@/composables/useSeo";

const { locale } = useI18n({ useScope: "global" });

onMounted(() => {
  if (window.location.hash) {
    const target = document.getElementById(window.location.hash.slice(1));
    if (!target) {
      return;
    }

    window.scrollTo({
      top: target.offsetTop - 112,
      left: 0,
      behavior: "smooth",
    });
  }
});

useSeoPage({
  path: "/hill-house-1",
  title: {
    sr: "Hill House | Privatna luksuzna vila za proslave u Šepšinu",
    en: "Hill House | Private luxury villa for events in Sepsin",
  },
  description: {
    sr: "Hill House je privatna vila za proslave, venčanja i posebne događaje sa bazenom, spa zonom, terasom sa pogledom i smeštajem za goste, 30 minuta od Beograda.",
    en: "Hill House is a private villa for celebrations, weddings and special events with pool, spa zone, view terrace and guest accommodation, 30 minutes from Belgrade.",
  },
  keywords: {
    sr: "hill house vila, privatna vila za proslave, vila sa bazenom sepsin, vila za vencanje blizu beograda, luksuzna vila srbija",
    en: "hill house villa, private event villa sepsin, wedding villa near belgrade, luxury villa with pool serbia, spa villa rental",
  },
  image: {
    url: "/hillhouse/media/images/gallery/professional/vila-prestige-hill-15-1920x1438.jpeg",
    width: 1920,
    height: 1438,
    alt: "Hill House villa with pool and terrace",
  },
  schemas: (localeCode) => {
    const title =
      localeCode === "en"
        ? "Hill House | Private luxury villa for events in Sepsin"
        : "Hill House | Privatna luksuzna vila za proslave u Šepšinu";
    const description =
      localeCode === "en"
        ? "Luxury event villa with pool, spa, terrace and accommodation near Belgrade."
        : "Luksuzna vila za događaje sa bazenom, spa zonom, terasom i smeštajem nadomak Beograda.";
    const breadcrumbItems = [
      { name: localeCode === "en" ? "Home" : "Početna", path: "/" },
      { name: "Hill House", path: "/hill-house-1" },
    ];

    return [
      createBreadcrumbSchema(breadcrumbItems, localeCode),
      createWebPageSchema({
        path: "/hill-house-1",
        localeCode,
        title,
        description,
        image: "/hillhouse/media/images/gallery/professional/vila-prestige-hill-15-1920x1438.jpeg",
        breadcrumbItems,
      }),
      createVillaBusinessSchema({
        name: "Hill House",
        path: "/hill-house-1",
        localeCode,
        description,
        image: "/hillhouse/media/images/gallery/professional/vila-prestige-hill-15-1920x1438.jpeg",
        geo: { latitude: 44.531929, longitude: 20.709867 },
        mapsLink: "https://maps.app.goo.gl/JTjSLyJM5MhdmGri7",
        amenities: ["Private Pool", "Spa", "Jacuzzi", "Sauna", "Free Parking", "Free WiFi"],
        eventCapacity: 150,
        sleepingCapacity: 10,
      }),
    ];
  },
});
</script>
