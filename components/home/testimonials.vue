<template>
  <div
      id="testimonials"
      style="width: 100%;position: relative">
    <v-img
        cover
        class="fill-height"
        alt="Guest next to the outdoor swimming pool"
        src="@/assets/media/images/facilities/testimonial.jpg">
    </v-img>
    <div class="testimonails-overlay">
      <v-row justify="center" no-gutters class="fill-height">
        <v-col cols="12" lg="4" class="text-center">
          <v-row justify="center" align="center" no-gutters class="fill-height text-white flex-column">
            <p class="font-weight-medium text-center mb-4" style="text-shadow: 1px 1px #000">
              {{ $t('home.testimonials.title') }}</p>
            <p
                :class="!$vuetify.display.smAndDown ? 'text-h5' : 'text-subtitle-1'"
                class="text-center mb-4"
                style="text-shadow: 1px 1px #000">
              “{{ $t('home.testimonials.text') }}”
            </p>
            <p class="text-subtitle-1 font-weight-bold text-center mb-4" style="text-shadow: 1px 1px #000">Jelena
              Aleksić
              – Weekendica</p>
            <v-rating
                readonly
                v-model="rating"
                density="compact"
                active-color="primary"
            ></v-rating>
          </v-row>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script setup>
import {ref} from 'vue';

const rating = ref(5);
</script>

<style>
#testimonials {
  height: 600px;
}

@media (max-width: 992px) {

  #testimonials {
    height: 340px !important;
  }
}

.testimonails-overlay {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .45);
  z-index: 1;
  position: absolute;
  left: 0;
  top: 0;
}
</style>