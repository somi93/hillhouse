<template>
  <v-container style="margin-top: 64px">
    <hill-section hide-description>
      <template #title>
        {{ $t("pricingPage.mainTitle") }}
      </template>
      <p class="text-center">{{ $t("pricingPage.validFrom") }}</p>
    </hill-section>
    <v-row justify="center">
      <v-col cols="12">
        <v-row>
          <v-col cols="12" md="4">
            <h3>{{ $t("pricingPage.priceSaturday") }}</h3>
            <ul>
              <li>{{ $t("pricingPage.guestsUpTo50") }} - <strong>1200e</strong></li>
              <li>{{ $t("pricingPage.guests50to100") }} - <strong>1400e</strong></li>
              <li>{{ $t("pricingPage.guests100to150") }} - <strong>1600e</strong></li>
            </ul>
          </v-col>
          <v-col cols="12" md="4">
            <h3>{{ $t("pricingPage.priceFridaySunday") }}</h3>
            <ul>
              <li>{{ $t("pricingPage.guestsUpTo50") }} - <strong>800e</strong></li>
              <li>{{ $t("pricingPage.guests50to100") }} - <strong>1000e</strong></li>
              <li>{{ $t("pricingPage.guests100to150") }} - <strong>1200e</strong></li>
            </ul>
          </v-col>
          <v-col cols="12" md="4">
            <h3>{{ $t("pricingPage.priceOtherDays") }}</h3>
            <ul>
              <li>{{ $t("pricingPage.guestsUpTo50") }} - <strong>600e</strong></li>
              <li>{{ $t("pricingPage.guests50to100") }} - <strong>800e</strong></li>
              <li>{{ $t("pricingPage.guests100to150") }} - <strong>1000e</strong></li>
            </ul>
          </v-col>
        </v-row>

        <p class="mt-10"><strong>{{ $t("pricingPage.reservationTermsTitle") }}</strong> {{ $t("pricingPage.reservationTermsText") }}</p>
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
import { ref } from "vue";

const tab = ref(1);

useHead({
  title: "Hill House - Cenovnik",
  link: [
    {
      rel: "canonical",
      href: "https://www.vasadomena.com/putanja-do-stranice",
    },
  ],
  meta: [
    {
      name: "robots",
      content: "index, follow",
    },
    {
      name: "description",
      content: `Napravite budžet koji odgovara vašem odmoru uz naš fleksibilni cenovnik za iznajmljivanje vikendice. Pregledajte naše povoljne tarife i pronađite idealnu opciju za svoj boravak u prirodi. Rezervišite sada i započnite planiranje nezaboravnog vikend odmora.`,
    },
    {
      hid: "keywords",
      name: "keywords",
      content:
        "vikendica, iznajmljivanje, odmor, priroda, opuštanje, smeštaj, planiranje, rezervacija, cenovnik, tarife, ponuda",
    },
    {
      property: "og:title",
      content: "Hill House - Cenovnik",
    },
    {
      property: "og:description",
      content: `Napravite budžet koji odgovara vašem odmoru uz naš fleksibilni cenovnik za iznajmljivanje vikendice. Pregledajte naše povoljne tarife i pronađite idealnu opciju za svoj boravak u prirodi. Rezervišite sada i započnite planiranje nezaboravnog vikend odmora.`,
    },
    {
      property: "og:image",
      content: "https://www.vasadomena.com/putanja-do-stranice",
    },
  ],
});
</script>

<style scoped>
h2 {
  color: #333;
  margin-bottom: 20px;
  text-align: center;
  font-size: 2em;
}

h3 {
  color: #555;
  margin-top: 30px;
  margin-bottom: 10px;
  font-size: 1.5em;
  border-bottom: 1px solid #eee;
  padding-bottom: 5px;
}

p {
  line-height: 1.6;
  margin-bottom: 15px;
  color: #444;
}

ul {
  list-style-type: none;
  padding-left: 0;
  margin-bottom: 15px;
}

li {
  padding: 8px 0;
  border-bottom: 1px dotted #ddd;
  color: #444;
}

li:last-child {
  border-bottom: none;
}

strong {
  color: #2c3e50;
}

/* Add some overall padding to the content area if needed, 
   though v-col might already provide sufficient spacing */
.v-col {
  padding: 20px;
}
</style>
