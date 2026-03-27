<template>
  <div class="homepage-redesign">
    <villa-selector-hero />
    <villa-cards />
    <redesign-occasions />
    <redesign-social-proof />
    <redesign-cta />
    <redesign-location dual />
  </div>
</template>

<script setup>
import RedesignCta from "@/components/home/redesign/cta";
import VillaCards from "@/components/home/redesign/villa-cards";
import VillaSelectorHero from "@/components/home/redesign/villa-selector-hero";
import RedesignLocation from "@/components/home/redesign/location";
import RedesignOccasions from "@/components/home/redesign/occasions";
import RedesignSocialProof from "@/components/home/redesign/social-proof";
import { onMounted } from "vue";
import {
  SEO_DEFAULT_IMAGE,
  createBreadcrumbSchema,
  createOrganizationSchema,
  createWebPageSchema,
  createWebSiteSchema,
  useSeoPage,
} from "@/composables/useSeo";

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
  path: "/",
  title: {
    sr: "Hill House | Privatne vile za proslave, venčanja i posebne događaje",
    en: "Hill House | Private Villas for Events, Weddings and Special Occasions",
  },
  description: {
    sr: "Hill House i Hill House 2 su privatne vile u Šepšinu, 30 minuta od Beograda, sa bazenom, spa zonom, svečanom salom i ambijentom za proslave, venčanja i posebne događaje.",
    en: "Hill House and Hill House 2 are private villas in Sepsin, 30 minutes from Belgrade, with pool, spa zone, event hall and a premium atmosphere for celebrations, weddings and special occasions.",
  },
  keywords: {
    sr: "privatna vila za proslave, vila za vencanje beograd, luksuzna vila s bazenom, vila za dogadjaje srbija, hill house sepsin",
    en: "private villa for events, wedding villa belgrade, luxury villa with pool serbia, event villa near belgrade, hill house sepsin",
  },
  type: "website",
  image: SEO_DEFAULT_IMAGE,
  schemas: (localeCode) => {
    const title =
      localeCode === "en"
        ? "Hill House | Private Villas for Events, Weddings and Special Occasions"
        : "Hill House | Privatne vile za proslave, venčanja i posebne događaje";
    const description =
      localeCode === "en"
        ? "Private villas near Belgrade for celebrations, weddings, productions and premium stays."
        : "Privatne vile nadomak Beograda za proslave, venčanja, produkcije i premijum boravke.";
    const breadcrumbItems = [
      { name: localeCode === "en" ? "Home" : "Početna", path: "/" },
    ];

    return [
      createOrganizationSchema(),
      createWebSiteSchema({ localeCode, description }),
      createBreadcrumbSchema(breadcrumbItems, localeCode),
      createWebPageSchema({
        path: "/",
        localeCode,
        title,
        description,
        type: "CollectionPage",
        image: SEO_DEFAULT_IMAGE,
        breadcrumbItems,
      }),
    ];
  },
});
</script>

<style scoped>
.homepage-redesign {
  background: var(--surface-ivory);
  color: var(--text-warm);
}
</style>
