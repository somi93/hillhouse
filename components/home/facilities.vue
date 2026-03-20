<template>
  <v-container id="facilities" class="pt-15">
    <hill-section align="center">
      <template #title>
        {{ $t('home.facilities.title') }}
      </template>
      <template #description>
        {{ $t('home.facilities.paragraph1') }}
      </template>
      <div class="grid-wrapper" ref="gallery">
        <template v-for="(element, i) in elements">
          <div
              data-aos="flip-left"
              data-aos-once="true"
              class="facility-image"
              :style="[
                  {
                    'aspect-ratio': $vuetify.display.smAndDown ? 1 : element.aspectRatio
                  }
              ]"
              style="background-color: #2c3e50;width: 100%">
            <v-img v-if="element.img" cover height="100%" :src="element.img" :alt="element.alt">
              <v-row class="fill-height pl-4 pb-4" no-gutters align="end">
                <span class="text-h5 text-white" style="text-shadow: 1px 1px #333">{{ element.title }}</span>
              </v-row>
            </v-img>
          </div>
        </template>
      </div>
    </hill-section>
  </v-container>
</template>

<script setup>
import {computed} from 'vue'
import HillSection from "@/components/global/hill-section";
import {useI18n} from "vue-i18n";
import {useDisplay} from 'vuetify'

const {smAndDown} = useDisplay();
const {locale, t} = useI18n({useScope: 'global'})

const elements = computed(() => {
  return [
    {
      alt: "Pool and terrace view",
      aspectRatio: 1.81,
      img: smAndDown.value ? '/hillhouse/media/images/facilities/mobile/terrace.jpg' : '/hillhouse/media/images/facilities/terrace.jpg',
      title: 'Hill house'
    },
    {
      alt: 'Inside jacuzzi',
      aspectRatio: 0.9,
      img: smAndDown.value ? '/hillhouse/media/images/facilities/mobile/jacuzi.jpg' : '/hillhouse/media/images/facilities/jacuzi.jpg',
      title: t('home.facilities.jacuzzi')
    },
    {
      alt: 'Inside sauna',
      aspectRatio: 0.85,
      img: smAndDown.value ? '/hillhouse/media/images/facilities/mobile/sauna.jpg' : '/hillhouse/media/images/facilities/sauna.jpg',
      title: 'Sauna'
    },
    {
      alt: 'Fire pit',
      aspectRatio: 2.05,
      img: smAndDown.value ? '/hillhouse/media/images/facilities/mobile/fire.jpg' : '/hillhouse/media/images/facilities/fire.jpg',
      title: 'Fire Pit'
    },
    {
      alt: 'Outdoor pool',
      aspectRatio: 1.2,
      img: smAndDown.value ? '/hillhouse/media/images/facilities/mobile/pool.jpg' : '/hillhouse/media/images/facilities/pool.jpg',
      title: t('home.facilities.pool')
    },
    {
      alt: 'Inside spa and home theatre',
      aspectRatio: 1.2,
      img: smAndDown.value ? '/hillhouse/media/images/facilities/mobile/living.jpg' : '/hillhouse/media/images/facilities/living.jpg',
      title: t('home.facilities.spa')
    },
  ]
})
</script>

<style>

/* Main CSS */
.grid-wrapper > div {
  display: inline-block;
  margin-bottom: 16px;
  position: relative;
}

.grid-wrapper > div:before {
  border-radius: 5px;
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

.grid-wrapper > div img {
  width: 100%;
  border-radius: 5px;
}

.grid-wrapper {
  columns: 3;
  column-gap: 16px;
}

@media (max-width: 1200px) {
  .grid-wrapper {
    columns: 3;
  }
}

@media (max-width: 640px) {
  .grid-wrapper {
    columns: auto;
  }

  .grid-wrapper > div {
    width: 100%;
  }
}

@media (max-width: 992px) {

  .grid-wrapper {
    columns: 2;
  }

  .grid-wrapper > div {
    width: 100%;
  }
}

</style>