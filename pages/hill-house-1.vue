<template>
  <div class="villa-page">
    <redesign-hero />
    <redesign-why />
    <redesign-experiences />
    <redesign-occasions />
    <redesign-social-proof />
    <redesign-gallery />
    <redesign-cta />
    <redesign-location />
    <sister-villa />
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useI18n } from "vue-i18n";
import RedesignHero from "@/components/home/redesign/hero";
import RedesignWhy from "@/components/home/redesign/why";
import RedesignExperiences from "@/components/home/redesign/experiences";
import RedesignOccasions from "@/components/home/redesign/occasions";
import RedesignSocialProof from "@/components/home/redesign/social-proof";
import RedesignGallery from "@/components/home/redesign/gallery";
import RedesignCta from "@/components/home/redesign/cta";
import RedesignLocation from "@/components/home/redesign/location";
import SisterVilla from "@/components/home/redesign/sister-villa";

const { locale } = useI18n({ useScope: "global" });
const localePath = useLocalePath();

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
