<template>
  <v-container style="margin-top: 64px">
    <hill-section hide-description>
      <template #title>
        {{ $t("pricingPage.mainTitle") }}
      </template>
      <p class="text-center">{{ $t("pricingPage.validFrom") }}</p>
    </hill-section>

    <!-- Pricing Cards -->
    <v-row justify="center" class="mb-16 mt-4">
      <v-col cols="12" md="4" v-for="(tier, i) in pricingTiers" :key="i"
             data-aos="fade-up" data-aos-once="true" :data-aos-delay="i * 120">
        <div :class="['pricing-card', i === 0 ? 'pricing-card--featured' : 'pricing-card--light']">
          <p v-if="i === 0" class="pricing-card__badge">{{ $t('pricingPage.mostPopular') }}</p>
          <p class="pricing-card__title">{{ tier.label }}</p>
          <div class="pricing-divider"></div>
          <div class="pricing-card__rows">
            <div class="pricing-card__row" v-for="row in tier.rows" :key="row.guests">
              <span class="pricing-card__guests">{{ row.guests }}</span>
              <span class="pricing-card__amount">{{ row.price }}</span>
            </div>
          </div>
          <v-btn
              class="mt-8"
              :class="i === 0 ? 'btn-reserve' : ''"
              :color="i === 0 ? 'primary' : 'default'"
              :variant="i === 0 ? 'flat' : 'outlined'"
              flat
              width="100%"
              height="50px"
              href="tel:+38169635632"
              rel="noopener"
              target="_blank">
            {{ $t('home.slider.reserve') }}
          </v-btn>
        </div>
      </v-col>
    </v-row>

    <!-- Details & Rules -->
    <v-row justify="center">
      <v-col cols="12">
        <p class="mt-4"><strong>{{ $t("pricingPage.reservationTermsTitle") }}</strong> {{ $t("pricingPage.reservationTermsText") }}</p>
        <p><strong>{{ $t("pricingPage.cancellationPolicyTitle") }}</strong> {{ $t("pricingPage.cancellationPolicyText") }}</p>
        <p><strong>{{ $t("pricingPage.reschedulePolicyTitle") }}</strong> {{ $t("pricingPage.reschedulePolicyText") }}</p>

        <p class="mt-10">{{ $t("pricingPage.spaSurcharge") }} - <strong>200e</strong>.</p>
        <p>{{ $t("pricingPage.spaJacuzziNotice") }}</p>

        <p class="mt-10"><strong>{{ $t("pricingPage.checkIn") }}</strong> 14h</p>
        <p><strong>{{ $t("pricingPage.checkOut") }}</strong> 10h</p>

        <p>{{ $t("pricingPage.yardCleaning") }}</p>
        <p>{{ $t("pricingPage.houseCleaning") }}</p>

        <p class="mt-10"><strong>{{ $t("pricingPage.musicPolicyTitle") }}</strong></p>
        <ul>
          <li>{{ $t("pricingPage.musicFridaySaturday") }}</li>
          <li>{{ $t("pricingPage.musicOtherDays") }}</li>
        </ul>

        <p>{{ $t("pricingPage.equipmentPolicy") }}</p>

        <h3 class="mt-10">{{ $t("pricingPage.rulesAndConditionsTitle") }}</h3>
        <ul>
          <li>{{ $t("pricingPage.ruleFireworks") }}</li>
          <li><strong>{{ $t("layout.menu.facilities") }}</strong> {{ $t("pricingPage.ruleNoConfetti") }}</li>
          <li><strong>{{ $t("layout.menu.facilities") }}</strong> {{ $t("pricingPage.ruleNoPoolJumping") }}</li>
          <li><strong>{{ $t("layout.menu.facilities") }}</strong> {{ $t("pricingPage.ruleNoPoolEdgeWalking") }}</li>
          <li><strong>{{ $t("layout.menu.facilities") }}</strong> {{ $t("pricingPage.ruleNoPoolFoodDrinkObjects") }}</li>
          <li><strong>{{ $t("layout.menu.facilities") }}</strong> {{ $t("pricingPage.ruleNoBreakingItems") }}</li>
          <li><strong>{{ $t("layout.menu.facilities") }}</strong> {{ $t("pricingPage.ruleNoUnderageAlcohol") }}</li>
          <li>{{ $t("pricingPage.ruleMinorsSupervision") }}</li>
          <li><strong>{{ $t("layout.menu.facilities") }}</strong> {{ $t("pricingPage.ruleNoFurnitureWalking") }}</li>
          <li>{{ $t("pricingPage.ruleTenantResponsibility") }}</li>
          <li>{{ $t("pricingPage.ruleDamageCompensation") }}</li>
          <li>{{ $t("pricingPage.ruleNoPartiesUnder28") }}</li>
          <li>{{ $t("pricingPage.ruleTrashDisposal") }}</li>
          <li>{{ $t("pricingPage.ruleDishesIndoors") }}</li>
        </ul>

        <p class="mt-10"><strong>{{ $t("pricingPage.entryPolicyTitle") }}</strong> {{ $t("pricingPage.entryPolicyText") }}</p>
        <p class="mt-10">{{ $t("pricingPage.inventoryPolicy") }}</p>
        <p>{{ $t("pricingPage.videoSurveillancePolicy") }}</p>
        <p><strong>{{ $t("layout.menu.facilities") }}</strong> {{ $t("pricingPage.ruleNoCameraTampering") }}</p>
        <p>{{ $t("pricingPage.damageLiability") }}</p>
        <p class="mt-10"><strong>{{ $t("pricingPage.contractSigning") }}</strong></p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import HillSection from "@/components/global/hill-section";
import { computed } from "vue";
import { useI18n } from 'vue-i18n';

const { t } = useI18n({ useScope: 'global' });

const pricingTiers = computed(() => [
  {
    label: t('pricingPage.priceSaturday'),
    rows: [
      { guests: t('pricingPage.guestsUpTo50'),   price: '1200€' },
      { guests: t('pricingPage.guests50to100'),   price: '1400€' },
      { guests: t('pricingPage.guests100to150'),  price: '1600€' },
    ]
  },
  {
    label: t('pricingPage.priceFridaySunday'),
    rows: [
      { guests: t('pricingPage.guestsUpTo50'),   price: '800€' },
      { guests: t('pricingPage.guests50to100'),   price: '1000€' },
      { guests: t('pricingPage.guests100to150'),  price: '1200€' },
    ]
  },
  {
    label: t('pricingPage.priceOtherDays'),
    rows: [
      { guests: t('pricingPage.guestsUpTo50'),   price: '600€' },
      { guests: t('pricingPage.guests50to100'),   price: '800€' },
      { guests: t('pricingPage.guests100to150'),  price: '1000€' },
    ]
  },
]);

useHead({
  title: "Hill House - Cenovnik",
  link: [
    {
      rel: "canonical",
      href: "https://www.vasadomena.com/putanja-do-stranice",
    },
  ],
  meta: [
    { name: "robots", content: "index, follow" },
    {
      name: "description",
      content: `Napravite budžet koji odgovara vašem odmoru uz naš fleksibilni cenovnik za iznajmljivanje vikendice. Pregledajte naše povoljne tarife i pronađite idealnu opciju za svoj boravak u prirodi. Rezervišite sada i započnite planiranje nezaboravnog vikend odmora.`,
    },
    { hid: "keywords", name: "keywords", content: "vikendica, iznajmljivanje, odmor, priroda, opuštanje, smeštaj, planiranje, rezervacija, cenovnik, tarife, ponuda" },
    { property: "og:title", content: "Hill House - Cenovnik" },
    { property: "og:description", content: `Napravite budžet koji odgovara vašem odmoru uz naš fleksibilni cenovnik za iznajmljivanje vikendice.` },
    { property: "og:image", content: "https://www.vasadomena.com/putanja-do-stranice" },
  ],
});
</script>

<style scoped>
.pricing-card {
  border-radius: 8px;
  padding: 40px 36px;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
}

.pricing-card--featured {
  background: #151515;
  color: #fff;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.25);
}

.pricing-card--light {
  background: #fff;
  color: #151515;
  border: 1px solid #e8e8e8;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.06);
}

.pricing-card__badge {
  position: absolute;
  top: -14px;
  left: 50%;
  transform: translateX(-50%);
  background: #cfa975;
  color: #fff;
  font-size: 0.7rem;
  letter-spacing: 2px;
  text-transform: uppercase;
  padding: 4px 16px;
  border-radius: 20px;
  white-space: nowrap;
}

.pricing-card__title {
  font-family: 'Fraunces', serif;
  font-size: 1.4rem;
  font-weight: 400;
  margin-bottom: 20px;
}

.pricing-divider {
  width: 40px;
  height: 2px;
  background: #cfa975;
  margin-bottom: 24px;
}

.pricing-card__rows {
  display: flex;
  flex-direction: column;
  gap: 14px;
  flex: 1;
}

.pricing-card__row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 14px;
  border-bottom: 1px solid rgba(128, 128, 128, 0.15);
}

.pricing-card__guests {
  font-size: 0.875rem;
  opacity: 0.7;
}

.pricing-card__amount {
  font-family: 'Fraunces', serif;
  font-size: 1.5rem;
  font-weight: 600;
  color: #cfa975;
}

h3 {
  color: #333;
  margin-top: 30px;
  margin-bottom: 10px;
  font-size: 1.3rem;
  border-bottom: 1px solid #eee;
  padding-bottom: 5px;
}
</style>