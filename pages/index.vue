<template>
  <div class="homepage-redesign">
    <villa-selector-hero />
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
import RedesignCta from "@/components/home/redesign/cta";
import RedesignExperiences from "@/components/home/redesign/experiences";
import RedesignGallery from "@/components/home/redesign/gallery";
import VillaSelectorHero from "@/components/home/redesign/villa-selector-hero";
import RedesignLocation from "@/components/home/redesign/location";
import RedesignOccasions from "@/components/home/redesign/occasions";
import RedesignSocialProof from "@/components/home/redesign/social-proof";
import RedesignWhy from "@/components/home/redesign/why";
import { onMounted } from "vue";

onMounted(() => {
  if (window.location.hash) {
    window.scrollTo({
      top: document.getElementById(window.location.hash.slice(1)).offsetTop - 112,
      left: 0,
      behavior: "smooth",
    });
  }
});

let structuredData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  url: "https://www.hillhouse.rs",
  name: "Hillhouse.rs",
  description:
    "Privatna luksuzna vila za proslave, venčanja i posebne događaje sa bazenom, spa zonom i atmosferom koja ostavlja utisak — 30 minuta od Beograda.",
  alternateName: "Vila Hill House Šepšin",
  publisher: {
    "@type": "Organization",
    "@id": "https://www.hillhouse.rs/#organization",
    name: "Hill House",
    url: "https://www.hillhouse.rs",
    sameAs: [
      "https://www.instagram.com/hill_luxury_house",
      "https://www.facebook.com/hillhouselux",
    ],
    logo: {
      "@type": "ImageObject",
      "@id": "https://www.hillhouse.rs/#/schema/logo/image/",
      url: "https://www.hillhouse.rs/hillhouse/media/images/logo.png",
      width: "994",
      height: "232",
      caption: "Hill House logo",
    },
    image: {
      "@type": "ImageObject",
      "@id": "https://www.hillhouse.rs/#mainImage",
      url:
        "https://www.hillhouse.rs/hillhouse/media/images/gallery/professional/vila-prestige-hill-15-1920x1438.jpeg",
      width: "1920",
      height: "1438",
      caption: "Hill House vila",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "Varovničkih ratnika",
      addressLocality: "Šepšin",
      addressRegion: "Mladenovac",
      postalCode: "11433",
      addressCountry: "Serbia",
    },
    email: undefined,
    telephone: "+38169635632",
    priceRange: "€€€",
  },
  image: {
    "@type": "ImageObject",
    "@id": "https://www.hillhouse.rs/#mainImage",
    url:
      "https://www.hillhouse.rs/hillhouse/media/images/gallery/professional/vila-prestige-hill-15-1920x1438.jpeg",
    width: "1920",
    height: "1438",
    caption: "Hill House vila",
  },
  mainEntity: {
    "@type": "LocalBusiness",
    "@id": "https://www.hillhouse.rs", // Website URL for the house (same as website)
    url: "https://www.hillhouse.rs", // Website URL for the house
    name: "Hill House — Privatna vila za proslave i posebne trenutke",
    description:
      "Hill House je privatna luksuzna vila za proslave, venčanja i posebne događaje sa bazenom, spa zonom i atmosferom koja ostavlja utisak — Šepšin, 30 minuta od Beograda.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Varovničkih ratnika",
      addressLocality: "Šepšin",
      addressRegion: "Mladenovac",
      postalCode: "11433",
      addressCountry: "Serbia",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "44.5337646",
      longitude: "20.7174632",
    },
    telephone: "+38169635632",
    amenityFeature: [
      {
        "@type": "LocationFeatureSpecification",
        name: "Private Pool",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Free WiFi",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Spa",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Barbecue",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Free Parking",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Jacuzzi",
        value: true,
      },
    ],
  },
};

useHead({
  title: "Hill House — Privatna vila za proslave i posebne trenutke",
  link: [
    {
      rel: "canonical",
      href: "https://www.hillhouse.rs",
    },
  ],
  meta: [
    {
      name: "robots",
      content: "index, follow",
    },
    {
      name: "description",
      content:
        "Hill House je privatna luksuzna vila za proslave, venčanja i posebne događaje sa bazenom, spa zonom i atmosferom koja ostavlja utisak — na 30 minuta od Beograda.",
    },
    {
      hid: "keywords",
      name: "keywords",
      content:
        "privatna vila za proslave, iznajmljivanje vile beograd, vila sa bazenom, vila za venčanje, proslave u prirodi, luksuzna vikendica beograd, hill house, šepšin",
    },
    {
      property: "og:title",
      content: "Hill House — Privatna vila za proslave i posebne trenutke",
    },
    {
      property: "og:description",
      content:
        "Privatna luksuzna vila sa bazenom, spa zonom i atmosferom koja ostavlja utisak. Za proslave, venčanja i posebne događaje — 30 minuta od Beograda.",
    },
    {
      property: "og:image",
      content:
        "https://www.hillhouse.rs/hillhouse/media/images/gallery/professional/vila-prestige-hill-15-1920x1438.jpeg",
    },
    {
      property: "og:image:width",
      content: "1920",
    },
    {
      property: "og:image:height",
      content: "1438",
    },
    {
      property: "og:image:type",
      content: "image/jpeg",
    },
    {
      property: "og:type",
      content: "website",
    },
    {
      property: "og:locale",
      content: "sr_RS",
    },
    {
      property: "og:url",
      content: "https://www.hillhouse.rs",
    },
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      name: "twitter:title",
      content: "Hill House — Privatna vila za proslave i posebne trenutke",
    },
    {
      name: "twitter:description",
      content:
        "Privatna luksuzna vila sa bazenom, spa zonom i atmosferom koja ostavlja utisak. 30 minuta od Beograda.",
    },
    {
      name: "twitter:image",
      content:
        "https://www.hillhouse.rs/hillhouse/media/images/gallery/professional/vila-prestige-hill-15-1920x1438.jpeg",
    },
  ],
  script: {
    innerHTML: JSON.stringify(structuredData),
    type: "application/ld+json",
  },
  __dangerouslyDisableSanitizers: ["script"],
});
</script>

<style scoped>
.homepage-redesign {
  background: var(--surface-ivory);
  color: var(--text-warm);
}
</style>
