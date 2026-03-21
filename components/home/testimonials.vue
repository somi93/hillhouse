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
        <v-col cols="12" lg="5" class="text-center px-5 px-md-0">
          <v-row justify="center" align="center" no-gutters class="fill-height text-white flex-column">
            <p class="font-weight-medium text-center mb-8 text-uppercase testimonials-eyebrow"
               style="text-shadow: 1px 1px #000">
              {{ $t('home.testimonials.title') }}
            </p>
            <v-window v-model="activeIndex" style="width: 100%">
              <v-window-item v-for="(review, i) in reviews" :key="i">
                <p
                    :class="!$vuetify.display.smAndDown ? 'text-h5' : 'text-subtitle-1'"
                    class="text-center mb-6"
                    style="text-shadow: 1px 1px #000; font-style: italic; line-height: 1.7">
                  "{{ review.text }}"
                </p>
                <p class="text-subtitle-1 font-weight-bold text-center mb-4"
                   style="text-shadow: 1px 1px #000">
                  {{ review.author }}
                  <span class="text-primary"> - {{ review.source }}</span>
                </p>
                <v-rating readonly :model-value="5" density="compact" active-color="primary"></v-rating>
              </v-window-item>
            </v-window>
            <div class="testimonial-dots mt-6">
              <span
                  v-for="(_, i) in reviews"
                  :key="i"
                  :class="['dot', { 'dot-active': i === activeIndex }]"
                  @click="activeIndex = i">
              </span>
            </div>
          </v-row>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script setup>
import {ref, onMounted, onUnmounted} from 'vue';

const activeIndex = ref(0);

const reviews = [
  {
    text: 'Najbolji vikend odmor ikada! Vila je bila savrseno mesto za opustanje i beg od gradske vreve. Uzivali smo u prelepom ambijentu, udobnim smestajnim jedinicama i predivnom pogledu na prirodu. Sve je bilo cisto, uredjeno i dobro opremljeno. Definitivno se vracamo opet!',
    author: 'Jelena Aleksic',
    source: 'Weekendica'
  },
  {
    text: 'Proslavili smo ovde 30. rodjendan i bilo je neverovatno! Bazen, jacuzzi i sauna su bili savrseni za nase drustvo. Domacini su izuzetno ljubazni i pazljivi prema svakom detalju. Preporucujem svima koji zele nesto posebno!',
    author: 'Marko Nikolic',
    source: 'Google Reviews'
  },
  {
    text: 'Vila je predivna - fotografije ne odaju ni polovinu stvarne lepote. Dvoriste je ogromno, unutrasnjost moderna i elegantna. Kucni bioskop i spa su bili hit za nase goste. Definitivno cemo se vratiti!',
    author: 'Ana Petrovic',
    source: 'Booking.com'
  },
  {
    text: 'Idealno mesto za team building! Koristili smo vilu za korporativni retreat i sve je bilo besprekorno. Prirodno okruzenje i luksuzni sadrzaji su bili savrsena kombinacija za nas tim od 60 ljudi.',
    author: 'Stefan Jovanovic',
    source: 'Google Reviews'
  }
];

let timer = null;
onMounted(() => {
  timer = setInterval(() => {
    activeIndex.value = (activeIndex.value + 1) % reviews.length;
  }, 6000);
});
onUnmounted(() => clearInterval(timer));
</script>

<style>
/* #testimonials {
  height: 620px;
} */
/* 
@media (max-width: 992px) {
  #testimonials {
    height: 480px !important;
  }
} */

.testimonails-overlay {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .55);
  z-index: 1;
  position: absolute;
  left: 0;
  top: 0;
}

.testimonials-eyebrow {
  letter-spacing: 4px;
  font-size: 0.75rem;
}

.testimonial-dots {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 24px;
}

.dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.35);
  cursor: pointer;
  transition: background 0.3s ease, transform 0.3s ease;
}

.dot-active {
  background: #cfa975;
  transform: scale(1.3);
}
</style>