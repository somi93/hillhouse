<template>
  <div class="pricing-page">
    <!-- ── Hero ──────────────────────────────────────────── -->
    <section class="pricing-hero">
      <v-container>
        <div class="content-shell pricing-hero__shell">
          <h1 class="pricing-hero__title">{{ $t("pricingPage.mainTitle") }}</h1>
        </div>
      </v-container>
    </section>

    <!-- ── Pricing tiers ─────────────────────────────────── -->
    <section class="pricing-tiers">
      <v-container>
        <div class="content-shell">
          <div class="pricing-grid">
            <article
              v-for="(tier, i) in pricingTiers"
              :key="i"
              :class="['tier-card', i === 0 && 'tier-card--featured']"
            >
              <div v-if="i === 0" class="tier-card__badge">
                {{ $t("pricingPage.mostPopular") }}
              </div>
              <p class="tier-card__label">{{ tier.label }}</p>
              <div class="tier-card__divider"></div>
              <div class="tier-card__rows">
                <div class="tier-card__row" v-for="row in tier.rows" :key="row.guests">
                  <span class="tier-card__guests">{{ row.guests }}</span>
                  <span class="tier-card__price">{{ row.price }}</span>
                </div>
              </div>
              <v-btn
                class="tier-card__cta"
                :class="i === 0 ? 'btn-reserve' : 'tier-card__cta--outline'"
                :color="i === 0 ? 'primary' : undefined"
                :variant="i === 0 ? 'flat' : 'outlined'"
                flat
                height="50px"
                href="tel:+38169635632"
                rel="noopener"
                target="_blank"
              >
                {{ $t("home.slider.reserve") }}
              </v-btn>
            </article>
          </div>
        </div>
      </v-container>
    </section>

    <!-- ── Policy tiles ──────────────────────────────────── -->
    <section class="pricing-policies">
      <v-container>
        <div class="content-shell">
          <div class="policy-grid">
            <div class="policy-tile">
              <p class="policy-tile__kicker">
                {{ $t("pricingPage.reservationTermsTitle") }}
              </p>
              <p class="policy-tile__text">
                {{ $t("pricingPage.reservationTermsText") }}
              </p>
            </div>
            <div class="policy-tile">
              <p class="policy-tile__kicker">
                {{ $t("pricingPage.cancellationPolicyTitle") }}
              </p>
              <p class="policy-tile__text">
                {{ $t("pricingPage.cancellationPolicyText") }}
              </p>
            </div>
            <div class="policy-tile">
              <p class="policy-tile__kicker">
                {{ $t("pricingPage.reschedulePolicyTitle") }}
              </p>
              <p class="policy-tile__text">
                {{ $t("pricingPage.reschedulePolicyText") }}
              </p>
            </div>
            <div class="policy-tile">
              <p class="policy-tile__kicker">{{ $t("pricingPage.spaSurcharge") }}</p>
              <p class="policy-tile__text">
                <span class="policy-tile__highlight">200€</span>
                &mdash; {{ $t("pricingPage.spaJacuzziNotice") }}
              </p>
            </div>
            <div class="policy-tile">
              <p class="policy-tile__kicker">
                {{ $t("pricingPage.checkIn") }} / {{ $t("pricingPage.checkOut") }}
              </p>
              <p class="policy-tile__text">
                {{ $t("pricingPage.checkIn") }} 14h &bull;
                {{ $t("pricingPage.checkOut") }} 10h
              </p>
              <p class="policy-tile__text policy-tile__text--muted">
                {{ $t("pricingPage.yardCleaning") }} {{ $t("pricingPage.houseCleaning") }}
              </p>
            </div>
            <div class="policy-tile">
              <p class="policy-tile__kicker">{{ $t("pricingPage.musicPolicyTitle") }}</p>
              <ul class="policy-tile__list">
                <li>{{ $t("pricingPage.musicFridaySaturday") }}</li>
                <li>{{ $t("pricingPage.musicOtherDays") }}</li>
              </ul>
            </div>
          </div>
          <div class="policy-note">
            {{ $t("pricingPage.equipmentPolicy") }}
          </div>
        </div>
      </v-container>
    </section>

    <!-- ── Rules & Conditions ────────────────────────────── -->
    <section class="pricing-rules">
      <v-container>
        <div class="content-shell">
          <div class="pricing-rules__header">
            <p class="section-eyebrow section-eyebrow--light">
              {{ $t("pricingPage.rulesAndConditionsTitle") }}
            </p>
            <h2 class="pricing-rules__title">
              {{ $t("pricingPage.rulesAndConditionsTitle") }}
            </h2>
          </div>
          <ul class="rules-list">
            <li>{{ $t("pricingPage.ruleFireworks") }}</li>
            <li>{{ $t("pricingPage.ruleNoConfetti") }}</li>
            <li>{{ $t("pricingPage.ruleNoPoolJumping") }}</li>
            <li>{{ $t("pricingPage.ruleNoPoolEdgeWalking") }}</li>
            <li>{{ $t("pricingPage.ruleNoPoolFoodDrinkObjects") }}</li>
            <li>{{ $t("pricingPage.ruleNoBreakingItems") }}</li>
            <li>{{ $t("pricingPage.ruleNoUnderageAlcohol") }}</li>
            <li>{{ $t("pricingPage.ruleMinorsSupervision") }}</li>
            <li>{{ $t("pricingPage.ruleNoFurnitureWalking") }}</li>
            <li>{{ $t("pricingPage.ruleTenantResponsibility") }}</li>
            <li>{{ $t("pricingPage.ruleDamageCompensation") }}</li>
            <li>{{ $t("pricingPage.ruleNoPartiesUnder28") }}</li>
            <li>{{ $t("pricingPage.ruleTrashDisposal") }}</li>
            <li>{{ $t("pricingPage.ruleDishesIndoors") }}</li>
          </ul>
          <div class="rules-addenda">
            <div class="rules-addendum">
              <p class="rules-addendum__title">
                {{ $t("pricingPage.entryPolicyTitle") }}
              </p>
              <p>{{ $t("pricingPage.entryPolicyText") }}</p>
            </div>
            <div class="rules-addendum">
              <p>{{ $t("pricingPage.inventoryPolicy") }}</p>
            </div>
            <div class="rules-addendum">
              <p>{{ $t("pricingPage.videoSurveillancePolicy") }}</p>
              <p class="mt-2">{{ $t("pricingPage.ruleNoCameraTampering") }}</p>
            </div>
            <div class="rules-addendum">
              <p>{{ $t("pricingPage.damageLiability") }}</p>
            </div>
          </div>
          <p class="rules-contract">{{ $t("pricingPage.contractSigning") }}</p>
        </div>
      </v-container>
    </section>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n({ useScope: "global" });

const pricingTiers = computed(() => [
  {
    label: t("pricingPage.priceSaturday"),
    rows: [
      { guests: t("pricingPage.guestsUpTo50"), price: "1200€" },
      { guests: t("pricingPage.guests50to100"), price: "1400€" },
      { guests: t("pricingPage.guests100to150"), price: "1600€" },
    ],
  },
  {
    label: t("pricingPage.priceFridaySunday"),
    rows: [
      { guests: t("pricingPage.guestsUpTo50"), price: "800€" },
      { guests: t("pricingPage.guests50to100"), price: "1000€" },
      { guests: t("pricingPage.guests100to150"), price: "1200€" },
    ],
  },
  {
    label: t("pricingPage.priceOtherDays"),
    rows: [
      { guests: t("pricingPage.guestsUpTo50"), price: "600€" },
      { guests: t("pricingPage.guests50to100"), price: "800€" },
      { guests: t("pricingPage.guests100to150"), price: "1000€" },
    ],
  },
]);

useHead({
  title: "Cenovnik — Hill House Privatna Vila",
  link: [
    {
      rel: "canonical",
      href: "https://www.hillhouse.rs/pricing",
    },
  ],
  meta: [
    { name: "robots", content: "index, follow" },
    {
      name: "description",
      content: "Cenovnik iznajmljivanja Hill House vile — proslave, venčanja i posebni događaji sa bazenom i spa zonom, 30 minuta od Beograda. Pogledajte tarife i rezervišite datum.",
    },
    {
      hid: "keywords",
      name: "keywords",
      content: "cenovnik vile, iznajmljivanje vile cena, vila za proslave cena, hill house cenovnik, vila sa bazenom beograd cena",
    },
    { property: "og:title", content: "Cenovnik — Hill House Privatna Vila" },
    {
      property: "og:description",
      content: "Cenovnik iznajmljivanja Hill House vile za proslave, venčanja i posebne događaje. 30 minuta od Beograda.",
    },
    {
      property: "og:image",
      content: "https://www.hillhouse.rs/hillhouse/media/images/gallery/professional/vila-prestige-hill-15-1920x1438.jpeg",
    },
    { property: "og:url", content: "https://www.hillhouse.rs/pricing" },
    { property: "og:type", content: "website" },
    { property: "og:locale", content: "sr_RS" },
  ],
});
</script>

<style scoped>
/* ── Page wrapper ──────────────────────────────────────── */
.pricing-page {
  background: var(--surface-ivory);
}

/* ── Hero ──────────────────────────────────────────────── */
.pricing-hero {
  padding: 48px 0 0px;
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

.pricing-hero__valid {
  color: var(--text-warm);
  font-size: 0.9rem;
  letter-spacing: 0.04em;
  display: inline-flex;
  align-items: center;
  gap: 10px;
}

.pricing-hero__valid::before {
  content: "";
  display: inline-block;
  width: 28px;
  height: 1px;
  background: var(--brand-gold);
}

/* ── Pricing tiers ─────────────────────────────────────── */
.pricing-tiers {
  padding: 88px 0 72px;
  background: var(--surface-ivory);
}

.pricing-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 20px;
  align-items: stretch;
}

.tier-card {
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 40px 32px 36px;
  background: #fff;
  border: 1px solid rgba(95, 90, 82, 0.1);
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(36, 24, 14, 0.06);
  transition: box-shadow 0.3s ease, transform 0.3s ease;
}

.tier-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 48px rgba(36, 24, 14, 0.1);
}

.tier-card--featured {
  background: var(--brand-dark);
  border-color: transparent;
  box-shadow: 0 24px 64px rgba(10, 8, 6, 0.28);
  color: #fff;
}

.tier-card--featured:hover {
  box-shadow: 0 32px 72px rgba(10, 8, 6, 0.34);
}

.tier-card__badge {
  position: absolute;
  top: -14px;
  left: 50%;
  transform: translateX(-50%);
  background: linear-gradient(135deg, #c19a66 0%, #b28c59 100%);
  color: #181511;
  font-size: 0.64rem;
  font-weight: 600;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  padding: 5px 18px;
  border-radius: 999px;
  white-space: nowrap;
}

.tier-card__label {
  font-family: var(--font-heading);
  font-size: 1.2rem;
  font-weight: 400;
  line-height: 1.3;
  margin-bottom: 20px;
  color: var(--brand-dark);
}

.tier-card--featured .tier-card__label {
  color: rgba(255, 255, 255, 0.9);
}

.tier-card__divider {
  width: 36px;
  height: 2px;
  background: var(--brand-gold);
  margin-bottom: 28px;
}

.tier-card__rows {
  display: flex;
  flex-direction: column;
  gap: 0;
  flex: 1;
  margin-bottom: 32px;
}

.tier-card__row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 0;
  border-bottom: 1px solid rgba(95, 90, 82, 0.1);
}

.tier-card--featured .tier-card__row {
  border-bottom-color: rgba(255, 255, 255, 0.08);
}

.tier-card__row:first-child {
  border-top: 1px solid rgba(95, 90, 82, 0.1);
}

.tier-card--featured .tier-card__row:first-child {
  border-top-color: rgba(255, 255, 255, 0.08);
}

.tier-card__guests {
  font-size: 0.84rem;
  color: var(--text-warm);
}

.tier-card--featured .tier-card__guests {
  color: rgba(255, 255, 255, 0.62);
}

.tier-card__price {
  font-family: var(--font-heading);
  font-size: 1.6rem;
  line-height: 1;
  color: var(--brand-gold);
}

.tier-card__cta {
  width: 100%;
  letter-spacing: 0.06em;
}

.tier-card__cta--outline {
  color: var(--brand-dark) !important;
  border-color: rgba(95, 90, 82, 0.3) !important;
}

/* ── Policy tiles ──────────────────────────────────────── */
.pricing-policies {
  padding: 80px 0 72px;
  background: #fff;
  border-top: 1px solid rgba(95, 90, 82, 0.08);
  border-bottom: 1px solid rgba(95, 90, 82, 0.08);
}

.policy-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1px;
  background: rgba(95, 90, 82, 0.1);
  border: 1px solid rgba(95, 90, 82, 0.1);
  border-radius: 16px;
  overflow: hidden;
  margin-bottom: 36px;
}

.policy-tile {
  background: #fff;
  padding: 28px 26px;
}

.policy-tile__kicker {
  color: var(--brand-gold);
  text-transform: uppercase;
  letter-spacing: 0.16em;
  font-size: 0.68rem;
  margin-bottom: 10px;
}

.policy-tile__text {
  color: var(--brand-dark);
  line-height: 1.7;
  font-size: 0.94rem;
}

.policy-tile__text--muted {
  color: var(--text-warm);
  font-size: 0.86rem;
  margin-top: 6px;
}

.policy-tile__highlight {
  color: var(--brand-gold);
  font-family: var(--font-heading);
  font-size: 1.15rem;
}

.policy-tile__list {
  padding-left: 18px;
  color: var(--brand-dark);
  font-size: 0.92rem;
  line-height: 1.9;
}

.policy-note {
  background: rgba(178, 140, 89, 0.06);
  border: 1px solid rgba(178, 140, 89, 0.16);
  border-left: 3px solid var(--brand-gold);
  border-radius: 0 12px 12px 0;
  padding: 18px 22px;
  color: var(--text-warm);
  font-size: 0.92rem;
  line-height: 1.72;
}

/* ── Rules section ─────────────────────────────────────── */
.pricing-rules {
  padding: 96px 0 104px;
  background: radial-gradient(
      ellipse 50% 40% at 92% 8%,
      rgba(207, 169, 117, 0.1),
      transparent
    ),
    linear-gradient(180deg, #191715 0%, #131110 100%);
}

.pricing-rules__header {
  margin-bottom: 48px;
}

.pricing-rules__title {
  color: #fff;
  font-size: clamp(1.9rem, 3.2vw, 3rem);
  line-height: 1.06;
  margin-top: 14px;
  max-width: 22ch;
}

.rules-list {
  columns: 2;
  column-gap: 48px;
  padding-left: 20px;
  margin-bottom: 56px;
}

.rules-list li {
  color: rgba(255, 255, 255, 0.76);
  font-size: 0.93rem;
  line-height: 1.72;
  padding: 10px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  break-inside: avoid;
}

.rules-list li::marker {
  color: var(--brand-gold);
}

.rules-addenda {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 20px;
  margin-bottom: 48px;
}

.rules-addendum {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 12px;
  padding: 22px 20px;
  color: rgba(255, 255, 255, 0.72);
  font-size: 0.9rem;
  line-height: 1.74;
}

.rules-addendum__title {
  color: rgba(214, 188, 149, 0.9);
  font-size: 0.74rem;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  margin-bottom: 10px;
}

.rules-contract {
  display: inline-flex;
  align-items: center;
  gap: 14px;
  color: rgba(255, 255, 255, 0.9);
  font-family: var(--font-heading);
  font-size: 1.1rem;
  padding: 18px 26px;
  background: rgba(178, 140, 89, 0.1);
  border: 1px solid rgba(178, 140, 89, 0.28);
  border-radius: 12px;
}

.rules-contract::before {
  content: "";
  display: inline-block;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--brand-gold);
  flex-shrink: 0;
}

/* ── Responsive ────────────────────────────────────────── */
@media (max-width: 960px) and (min-width: 600px) {
  .pricing-hero {
    padding: 48px 0 32px;
  }

  .pricing-tiers {
    padding: 64px 0 56px;
  }

  .pricing-grid {
    grid-template-columns: 1fr;
    max-width: 520px;
    margin: 0 auto;
    gap: 28px;
  }

  .tier-card {
    padding: 36px 28px 30px;
  }

  .pricing-policies {
    padding: 60px 0 52px;
  }

  .policy-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .pricing-rules {
    padding: 72px 0 80px;
  }

  .rules-list {
    columns: 1;
  }

  .rules-addenda {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 599px) {
  .pricing-hero {
    padding: 36px 0 8px;
  }

  .pricing-hero__title {
    font-size: clamp(2.6rem, 10vw, 3rem);
    margin: 14px 0 20px;
  }

  .pricing-tiers {
    padding: 52px 0 44px;
  }

  .pricing-grid {
    grid-template-columns: 1fr;
    gap: 24px;
  }

  .tier-card {
    padding: 32px 22px 26px;
  }

  .pricing-policies {
    padding: 48px 0 40px;
  }

  .policy-grid {
    grid-template-columns: 1fr;
  }

  .policy-tile {
    padding: 22px 18px;
  }

  .pricing-rules {
    padding: 60px 0 68px;
  }

  .rules-list {
    columns: 1;
  }

  .rules-addenda {
    grid-template-columns: 1fr;
    gap: 14px;
  }

  .rules-contract {
    width: 100%;
    font-size: 1rem;
    padding: 16px 18px;
  }
}
</style>
