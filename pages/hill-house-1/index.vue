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

const { locale } = useI18n({ useScope: "global" });
const localePath = useLocalePath();

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

useHead(
  computed(() => {
    const isSr = locale.value !== "en";
    return {
      title: isSr
        ? "Hill House — Privatna luksuzna vila za proslave | Šepšin"
        : "Hill House — Private Luxury Villa for Events | Šepšin",
      meta: [
        {
          name: "description",
          content: isSr
            ? "Privatna luksuzna vila za proslave, venčanja i posebne događaje. Bazen, spa zona, terasa sa pogledom — 30 minuta od Beograda."
            : "Private luxury villa for celebrations, weddings and special events. Pool, spa zone, terrace with a view — 30 minutes from Belgrade.",
        },
        {
          property: "og:title",
          content: isSr
            ? "Hill House — Privatna vila za proslave"
            : "Hill House — Private Villa for Events",
        },
        {
          property: "og:description",
          content: isSr
            ? "Luksuzna privatna vila, bazen, spa — Šepšin, 30 min od Beograda."
            : "Luxury private villa, pool, spa — Šepšin, 30 min from Belgrade.",
        },
        {
          property: "og:url",
          content: isSr
            ? "https://www.hillhouse.rs/hill-house-1"
            : "https://www.hillhouse.rs/en/hill-house-1",
        },
        {
          rel: "canonical",
          href: isSr
            ? "https://www.hillhouse.rs/hill-house-1"
            : "https://www.hillhouse.rs/en/hill-house-1",
        },
      ],
    };
  })
);
</script>
