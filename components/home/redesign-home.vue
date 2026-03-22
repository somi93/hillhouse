<template>
  <div class="homepage-redesign">
    <redesign-hero />
    <redesign-why />
    <redesign-experiences />
    <redesign-occasions />
    <redesign-social-proof />
    <redesign-gallery />
    <redesign-cta />
    <redesign-location />
  </div>
</template>

<script setup>
import RedesignCta from "./redesign/cta";
import RedesignExperiences from "./redesign/experiences";
import RedesignGallery from "./redesign/gallery";
import RedesignHero from "./redesign/hero";
import RedesignLocation from "./redesign/location";
import RedesignOccasions from "./redesign/occasions";
import RedesignSocialProof from "./redesign/social-proof";
import RedesignWhy from "./redesign/why";
</script>

<style scoped>
.homepage-redesign {
  background: var(--surface-ivory);
  color: var(--text-warm);
}
</style>
