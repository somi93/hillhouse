<template>
  <v-container id="about" style="padding-top: 72px">
    <div
        :class="!$vuetify.display.smAndDown ? 'pb-15' : ''">
      <div
          style="max-width: 1400px;margin: 0 auto;width: 100%"
          :class="!$vuetify.display.smAndDown ? 'pb-15' : ''">
        <v-row
            style="position: relative"
            :class="!$vuetify.display.smAndDown ? 'mb-15' : ''">
          <v-col cols="12" lg="12" :class="!$vuetify.display.smAndDown ? 'pt-15' : 'px-5'">
            <hill-section align="center">
              <template #title>
                {{ $t('layout.menu.about') }}
              </template>
              <template #description>
                <p class="mb-3 text-grey-darken-2 text-left" v-html="$t('home.about.paragraph1')"></p>
                <p class="text-grey-darken-2 text-left mb-3" v-html="$t('home.about.paragraph3')"></p>
                <p class="text-grey-darken-2 text-left mb-3" v-html="$t('home.about.paragraph4')"></p>
                <p class="text-grey-darken-2 text-left mb-3" v-html="$t('home.about.paragraph5')"></p>
                <p class="text-grey-darken-2 text-left mb-3" v-html="$t('home.about.paragraph6')"></p>
                <p class="text-grey-darken-2 text-left mb-3" v-html="$t('home.about.paragraph7')"></p>
                <p class="text-grey-darken-2 text-left mb-3" v-html="$t('home.about.paragraph8')"></p>
              </template>
            </hill-section>
          </v-col>
        </v-row>
      </div>
    </div>
  </v-container>
</template>

<script setup>
import {ref, computed} from 'vue'
import {
  mdiAccountMultipleOutline,
  mdiBathtubOutline,
  mdiBedDoubleOutline,
  mdiAccountMultiplePlusOutline
} from '@mdi/js';
import HillSection from "@/components/global/hill-section";
import {useI18n} from "vue-i18n";

const {locale, t} = useI18n({useScope: 'global'})

const items = computed(() => {
  return [
    {
      value: '120',
      title: t('home.about.capacity'),
      icon: mdiAccountMultiplePlusOutline
    },
    {
      value: '10',
      title: t('home.about.nightAccommodation'),
      icon: mdiAccountMultipleOutline
    },
    {
      value: '6',
      title: t('home.about.beds'),
      icon: mdiBedDoubleOutline
    },
    {
      value: '1',
      title: t('home.about.bathrooms'),
      icon: mdiBathtubOutline
    },
  ]
})
</script>

<style>
.about-card {
  position: relative;
  overflow: hidden;
  width: 100%;
  background-color: #fff;
  aspect-ratio: 2.4;
  box-shadow: 0 15px 46px rgba(0, 0, 0, .1);
}

.about-card:after {
  content: "";
  width: 150px;
  height: 50px;
  position: absolute;
  right: -38px;
  bottom: -39px;
  background: url("/media/images/patterns/dots.png") center center no-repeat;
  background-repeat: repeat;
  transform: rotate(-42deg);
}
</style>