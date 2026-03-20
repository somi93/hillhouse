<template>
  <v-row class="pt-15" style="background-color: #f6f6f6" no-gutters>
    <v-container id="about">
      <div
          :class="!$vuetify.display.smAndDown ? 'pb-15' : ''">
        <div
            style="max-width: 1400px;margin: 0 auto;width: 100%"
            :class="!$vuetify.display.smAndDown ? 'pb-15' : ''">
          <v-row
              style="position: relative"
              :class="!$vuetify.display.smAndDown ? 'mb-15' : ''">
            <v-col cols="12" lg="6" :class="!$vuetify.display.smAndDown ? 'pl-8 pt-15' : 'px-5'">
              <hill-section :align="!$vuetify.display.smAndDown ? 'start' : 'center'">
                <template #title>
                  {{ $t('home.about.title') }}
                </template>
                <template #description>
                  <p class="mb-3 text-grey-darken-2" v-html="$t('home.about.paragraph1')"></p>
                  <p class="text-grey-darken-2" v-html="$t('home.about.paragraph2')"></p>
                  <v-btn
                      :to="{name: 'about'}"
                      color="primary"
                      class="btn-reserve mt-8"
                      flat
                      width="300px"
                      height="50px">
                    {{ $t('global.moreDetails') }}
                  </v-btn>
                </template>
              </hill-section>
            </v-col>
            <v-col v-if="!$vuetify.display.smAndDown" cols="12" lg="6" style="position: relative;aspect-ratio: 1.4"
                   data-aos="fade-left" data-aos-once="true">
              <div style="position: absolute;top: 0;right: 0%;width: 70%;">
                <v-img
                    alt="Fire pit"
                    style="box-shadow: 0 15px 46px rgba(0, 0, 0, .1)"
                    src="@/assets/media/images/facilities/fire.jpg"
                    aspect-ratio="1.1" cover/>
              </div>
              <div style="position: absolute;bottom: 3%;left: 54%;width: 35%;">
                <v-img
                    alt="Hill house pool at sunset"
                    style="box-shadow: 0 15px 46px rgba(0, 0, 0, .1)"
                    src="/hillhouse/media/images/gallery/resized/vila-prestige-hill-30-1920x1440.jpeg"
                    aspect-ratio="0.9" cover/>
              </div>
              <div style="position: absolute;bottom: 0;left: 3.8%;width: 50%;">
                <v-img style="box-shadow: 0 15px 46px rgba(0, 0, 0, .1)"
                       alt="Pool and terrace"
                       src="@/assets/media/images/facilities/terrace.jpg"
                       aspect-ratio="0.9" cover/>
              </div>
            </v-col>
            <v-col
                cols="12"
                class="px-0"
                :style="!$vuetify.display.smAndDown ? 'position: absolute;bottom: -120px;left:0' : ''"
                data-aos="fade-bottom"
                data-aos-once="true">
              <v-row :class="!$vuetify.display.smAndDown ? 'pl-7' : 'px-5'">
                <template v-for="item in items">
                  <v-col cols="12" sm="6" lg="3">
                    <div class="about-card px-8 py-6">
                      <v-row class="fill-height" align="center" no-gutters>
                        <v-icon :icon="item.icon" size="60px" color="grey-darken-2"></v-icon>
                        <div class="ml-8">
                      <span class="text-primary text-h4 font-weight-bold" v-html="item.value">

                      </span><br/>
                          <span class="font-weight-bold text-h6" v-html="item.title"></span>
                        </div>
                      </v-row>
                    </div>
                  </v-col>
                </template>
              </v-row>
            </v-col>
          </v-row>
        </div>
      </div>
    </v-container>
  </v-row>
</template>

<script setup>
import {ref, computed} from 'vue'
import {
  mdiAccountMultipleOutline,
  mdiToilet,
  mdiBedDoubleOutline,
  mdiAccountMultiplePlusOutline
} from '@mdi/js';
import HillSection from "@/components/global/hill-section";
import {useI18n} from "vue-i18n";

const {locale, t} = useI18n({useScope: 'global'})

const items = computed(() => {
  return [
    {
      value: '150',
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
      value: '3',
      title: t('home.about.toilets'),
      icon: mdiToilet
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