<template>
  <v-container id="utilities" :class="!$vuetify.display.smAndDown ? 'py-15' : 'pt-4 pb-12'">
    <hill-section>
      <template #title>
        {{ $t('home.utilities.title') }}
      </template>
      <template #description>
        {{ $t('home.utilities.description') }}
      </template>
    </hill-section>
    <v-row justify="center" data-aos="zoom-in" data-aos-once="true" class="mt-12">
      <template v-for="utility in utilities">
        <div class="px-6">
          <v-row no-gutters align="center" class="flex-column">
            <v-icon :icon="utility.icon" size="42px" color="primary"></v-icon>
            <span v-html="utility.title" class="text-center text-caption mt-2"></span>
          </v-row>
        </div>
      </template>
    </v-row>
  </v-container>
</template>

<script setup>
import {ref, computed} from 'vue'
import HillSection from "@/components/global/hill-section";
import {
  mdiParking,
  mdiPool,
  mdiGrill,
  mdiFlower,
  mdiSpa,
  mdiSofa,
  mdiTelescope,
  mdiTheater,
  mdiAirConditioner,
  mdiDramaMasks,
  mdiSoccer,
  mdiTableChair,
  mdiPaw
} from '@mdi/js';
import {useI18n} from "vue-i18n";

const {locale, t} = useI18n({useScope: 'global'})

const utilities = computed(() => {
  return [
    {
      title: t('home.utilities.parking'),
      icon: mdiParking
    },
    {
      title: t('home.utilities.pool'),
      icon: mdiPool
    },
    {
      title: t('home.utilities.barbecue'),
      icon: mdiGrill
    },
    {
      title: t('home.utilities.garden'),
      icon: mdiFlower
    },
    {
      title: t('home.utilities.spa'),
      icon: mdiSpa
    },
    {
      title: t('home.utilities.livingRoom'),
      icon: mdiSofa
    },
    {
      title: t('home.utilities.cinema'),
      icon: mdiTheater
    },
    {
      title: t('home.utilities.telescope'),
      icon: mdiTelescope
    },
    {
      title: t('home.utilities.airConditioner'),
      icon: mdiAirConditioner
    },
    {
      title: t('home.utilities.contentForChildren'),
      icon: mdiDramaMasks
    },
    {
      title: t('home.utilities.sportsCourts'),
      icon: mdiSoccer
    },
    {
      title: t('home.utilities.largeYard'),
      icon: mdiTableChair
    },
    {
      title: 'Pet Friendly',
      icon: mdiPaw
    },
  ]
})
</script>