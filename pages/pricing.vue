<template>
  <div class="pricing-page">
    <section class="pricing-hero">
      <v-container>
        <div class="content-shell pricing-hero__shell">
          <p class="section-eyebrow">{{ $t("pricingPage.mainTitle") }}</p>
          <h1 class="pricing-hero__title">
            {{ isEn ? "Choose your villa" : "Izaberite vilu" }}
          </h1>
          <p class="pricing-hero__sub">
            {{
              isEn
                ? "Each villa has its own character, capacity and pricing. Select the one that fits your occasion."
                : "Svaka vila ima svoj karakter, kapacitet i cenovnik. Izaberite onu koja odgovara vašoj proslavi."
            }}
          </p>
        </div>
      </v-container>
    </section>

    <section class="pricing-select">
      <v-container>
        <div class="content-shell">
          <div class="villa-cards">
            <NuxtLink :to="localePath('/hill-house-1/pricing')" class="villa-card">
              <div class="villa-card__inner">
                <p class="villa-card__eyebrow">Hill House 1</p>
                <h2 class="villa-card__title">
                  {{ isEn ? "Private villa with spa" : "Privatna vila sa spa centrom" }}
                </h2>
                <ul class="villa-card__features">
                  <li>{{ isEn ? "Up to 150 guests" : "Do 150 gostiju" }}</li>
                  <li>{{ isEn ? "10 sleeping places" : "10 ležajeva" }}</li>
                  <li>{{ isEn ? "Pool, sauna, jacuzzi" : "Bazen, sauna, jacuzzi" }}</li>
                  <li>{{ isEn ? "30 min from Belgrade" : "30 min od Beograda" }}</li>
                </ul>
                <span class="villa-card__cta">
                  {{ isEn ? "View pricing" : "Pogledaj cenovnik" }}
                  <span class="villa-card__arrow">→</span>
                </span>
              </div>
            </NuxtLink>

            <NuxtLink
              :to="localePath('/hill-house-2/pricing')"
              class="villa-card villa-card--hh2"
            >
              <div class="villa-card__inner">
                <p class="villa-card__eyebrow">Hill House 2</p>
                <h2 class="villa-card__title">
                  {{ isEn ? "Villa with event hall" : "Vila sa svečanom salom" }}
                </h2>
                <ul class="villa-card__features">
                  <li>
                    {{
                      isEn ? "Up to 250 guests (outdoor)" : "Do 250 gostiju (otvoreno)"
                    }}
                  </li>
                  <li>
                    {{ isEn ? "Hall for up to 130 guests" : "Sala za do 130 gostiju" }}
                  </li>
                  <li>
                    {{
                      isEn
                        ? "Infinity pool, open jacuzzi"
                        : "Infinity bazen, otvoreni jacuzzi"
                    }}
                  </li>
                  <li>{{ isEn ? "30 min from Belgrade" : "30 min od Beograda" }}</li>
                </ul>
                <span class="villa-card__cta">
                  {{ isEn ? "View pricing" : "Pogledaj cenovnik" }}
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
import { computed } from "vue";
import { useI18n } from "vue-i18n";

const { locale } = useI18n({ useScope: "global" });
const localePath = useLocalePath();
const isEn = computed(() => locale.value === "en");

useHead(
  computed(() => ({
    title: isEn.value
      ? "Pricing — Hill House Luxury Villas"
      : "Cenovnik — Hill House Privatne Vile",
    link: [
      {
        rel: "canonical",
        href: isEn.value
          ? "https://www.hillhouse.rs/en/pricing"
          : "https://www.hillhouse.rs/pricing",
      },
    ],
    meta: [
      { name: "robots", content: "index, follow" },
      {
        name: "description",
        content: isEn.value
          ? "Compare Hill House 1 and Hill House 2 villa pricing — events, weddings and special occasions near Belgrade. Choose the villa that fits your occasion."
          : "Uporedite cenovnike Hill House 1 i Hill House 2 — proslave, venčanja i posebni događaji kod Beograda. Izaberite vilu koja odgovara vašoj proslavi.",
      },
      {
        property: "og:title",
        content: isEn.value
          ? "Pricing — Hill House Luxury Villas"
          : "Cenovnik — Hill House Privatne Vile",
      },
      {
        property: "og:description",
        content: isEn.value
          ? "Compare Hill House villa rental rates for events, weddings and special occasions near Belgrade."
          : "Cenovnici iznajmljivanja Hill House vila za proslave, venčanja i posebne događaje. 30 minuta od Beograda.",
      },
      {
        property: "og:image",
        content:
          "https://www.hillhouse.rs/hillhouse/media/images/gallery/professional/vila-prestige-hill-15-1920x1438.jpeg",
      },
      {
        property: "og:url",
        content: isEn.value
          ? "https://www.hillhouse.rs/en/pricing"
          : "https://www.hillhouse.rs/pricing",
      },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: isEn.value ? "en_US" : "sr_RS" },
    ],
  }))
);
</script>

<style scoped>
/* ── Page wrapper ──────────────────────────────────────── */
.pricing-page {
  background: var(--surface-ivory);
}

/* ── Hero ──────────────────────────────────────────────── */
.pricing-hero {
  padding: 48px 0 0;
  background: linear-gradient(160deg, #f7f1ea 0%, var(--surface-ivory) 100%);
  border-bottom: 1px solid rgba(95, 90, 82, 0.1);
}

.pricing-hero__shell {
  max-width: 820px;
}

.pricing-hero__title {
  color: var(--brand-dark);
  font-size: clamp(3.2rem, 6vw, 4rem);
  line-height: 0.96;
  margin: 18px 0 28px;
}

.pricing-hero__sub {
  color: var(--text-warm);
  font-size: 1.05rem;
  line-height: 1.72;
  max-width: 58ch;
  margin-bottom: 48px;
}

/* ── Villa selection ───────────────────────────────────── */
.pricing-select {
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
  border: 1px solid rgba(95, 90, 82, 0.12);
  background: #fff;
  box-shadow: 0 8px 40px rgba(36, 24, 14, 0.07);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  overflow: hidden;
}

.villa-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 24px 64px rgba(36, 24, 14, 0.12);
}

.villa-card--hh2 {
  background: var(--brand-dark);
  border-color: transparent;
  color: #fff;
}

.villa-card__inner {
  padding: 44px 40px 40px;
}

.villa-card__eyebrow {
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--brand-gold);
  margin-bottom: 16px;
}

.villa-card__title {
  font-family: var(--font-heading);
  font-size: clamp(1.6rem, 2.4vw, 2rem);
  line-height: 1.12;
  font-weight: 400;
  margin-bottom: 28px;
  color: var(--brand-dark);
}

.villa-card--hh2 .villa-card__title {
  color: #fff;
}

.villa-card__features {
  list-style: none;
  padding: 0;
  margin: 0 0 36px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.villa-card__features li {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 0.93rem;
  color: var(--text-warm);
  line-height: 1.5;
}

.villa-card--hh2 .villa-card__features li {
  color: rgba(255, 255, 255, 0.7);
}

.villa-card__features li::before {
  content: "";
  flex-shrink: 0;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: var(--brand-gold);
}

.villa-card__cta {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-size: 0.88rem;
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

/* ── Responsive ────────────────────────────────────────── */
@media (max-width: 768px) {
  .pricing-hero {
    padding: 36px 0 0;
  }

  .pricing-hero__title {
    font-size: clamp(2.6rem, 10vw, 3rem);
    margin: 14px 0 20px;
  }

  .pricing-select {
    padding: 56px 0 72px;
  }

  .villa-cards {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .villa-card__inner {
    padding: 32px 28px 28px;
  }
}
</style>
