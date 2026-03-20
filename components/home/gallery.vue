<template>
  <div style="background-color: #f6f6f6" class="pt-15 pb-15">
    <v-container>
      <div style="max-width: 1400px;margin: 0 auto;width: 100%">
        <hill-section>
          <template #title>
            {{ $t('home.gallery.title') }}
          </template>
          <template #description>
            {{ $t('home.gallery.description') }}
          </template>
        </hill-section>
        <v-row v-if="!loading">
          <v-col
              v-for="(photo, i) in images"
              :key="i"
              cols="12"
              :sm="photo.aspect !== '1' ? 12 : 6"
              :lg="photo.aspect !== '1' ? 6 : 3"
              data-aos="zoom-in"
              data-aos-once="true">
            <v-img cover :aspect-ratio="photo.aspect" :src="photo.src" :alt="photo.alt"></v-img>
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-btn
              :to="{name: 'gallery'}"
              color="primary"
              class="btn-reserve mt-6"
              flat
              width="300px"
              height="50px">
            {{ $t('layout.viewAll') }}
          </v-btn>
        </v-row>
      </div>
    </v-container>
  </div>
</template>

<script setup>
import {ref, computed} from 'vue'
import HillSection from "@/components/global/hill-section";
import {useDisplay} from 'vuetify'

const {lgAndUp, smAndDown} = useDisplay();
const loading = ref(true);
setTimeout(() => loading.value = false, 100);

const images = computed(() => {
  let images = [
    {
      src: smAndDown.value ? '/hillhouse/media/images/facilities/tablet/fire.jpg' : '/hillhouse/media/images/facilities/fire.jpg',
      alt: 'Fire pit',
      description: '',
      aspect: '1'
    },
    {
      src: smAndDown.value ? '/hillhouse/media/images/facilities/tablet/jacuzi.jpg' : '/hillhouse/media/images/facilities/jacuzi.jpg',
      alt: 'Inside jacuzzi',
      description: '',
      aspect: '1'
    },
    {
      src: smAndDown.value ? '/hillhouse/media/images/facilities/tablet/living.jpg' : '/hillhouse/media/images/facilities/living.jpg',
      alt: 'Inside spa and home theatre',
      description: '',
      aspect: '1'
    },
    {
      src: smAndDown.value ? '/hillhouse/media/images/facilities/tablet/pool.jpg' : '/hillhouse/media/images/facilities/pool.jpg',
      alt: 'Outdoor swimming pool in the sunset',
      description: '',
      aspect: '1'
    },
    {
      src: smAndDown.value ? '/hillhouse/media/images/facilities/tablet/sauna.jpg' : '/hillhouse/media/images/facilities/sauna.jpg',
      alt: 'Inside sauna',
      description: '',
      aspect: '1'
    },
    {
      src: smAndDown.value ? '/hillhouse/media/images/facilities/tablet/living2.jpg' : '/hillhouse/media/images/facilities/living2.jpg',
      alt: 'Living room with the sauna at the corner',
      description: '',
      aspect: '1'
    },
    {
      src: smAndDown.value ? '/hillhouse/media/images/facilities/tablet/living3.jpg' : '/hillhouse/media/images/facilities/living3.jpg',
      alt: 'Living room',
      description: '',
      aspect: '1'
    },
    {
      src: smAndDown.value ? '/hillhouse/media/images/facilities/tablet/terrace.jpg' : '/hillhouse/media/images/facilities/terrace.jpg',
      alt: 'Pool and terrace',
      description: '',
      aspect: '1'
    },
    {
      src: smAndDown.value ? '/hillhouse/media/images/facilities/tablet/jacuzi2.jpg' : '/hillhouse/media/images/facilities/jacuzi2.jpg',
      alt: '',
      description: '',
      aspect: '1'
    },
    {
      src: smAndDown.value ? '/hillhouse/media/images/facilities/tablet/pool2.jpg' : '/hillhouse/media/images/facilities/pool2.jpg',
      alt: 'Jacuzzi with led lights',
      description: '',
      aspect: '1'
    },
  ]
  const telescopePhoto = {
    src: smAndDown.value ? '/hillhouse/media/images/facilities/tablet/telescope.jpg' : '/hillhouse/media/images/facilities/telescope.jpg',
    alt: 'Terrace with sofa and telescope',
    description: '',
    aspect: '2.07'
  };
  if (lgAndUp.value) {
    images.splice(5, 0, telescopePhoto);
  } else {
    images.splice(6, 0, telescopePhoto);
  }
  return images;
})
</script>