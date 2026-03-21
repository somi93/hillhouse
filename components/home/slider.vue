<template>
  <div class="responsive-video-box" id="videoBox">
    <div class="responsive-video-overlay">
      <v-row
          class="fill-height flex-column px-5 px-md-0"
          justify="center"
          align="center">
        <h1
            class="text-primary text-body-2 font-weight-light text-center slider-welcome"
            v-html="$t('home.slider.welcome')">
        </h1>
        <span
            v-html="$t('home.slider.title')"
            :class="$vuetify.display.smAndDown ? 'text-h3' : 'text-h2'"
            class="text-white text-center my-6 slider-title"
            :style="[
                {
                  'line-height': $vuetify.display.smAndDown ? '1.2' : '1.3'
                }
            ]">
        </span>
        <v-row no-gutters justify="center" class="ga-4 flex-wrap">
          <v-btn
              color="primary"
              class="btn-reserve"
              flat
              width="220px"
              height="50px"
              href="tel:+38169635632"
              rel="noopener"
              target="_blank">
            {{ $t('home.slider.reserve') }}
          </v-btn>
          <v-btn
              :to="{name: 'gallery'}"
              variant="outlined"
              color="white"
              width="220px"
              height="50px"
              style="border-color: rgba(255,255,255,0.6); text-transform: initial">
            {{ $t('layout.menu.gallery') }}
          </v-btn>
        </v-row>
      </v-row>
    </div>
    <desktop-video v-if="!$vuetify.display.smAndDown"></desktop-video>
    <mobile-video v-else></mobile-video>
  </div>
</template>

<script setup>
import DesktopVideo from './videos/desktop'
import MobileVideo from './videos/mobile'
</script>

<style>
.responsive-video-box {
  position: relative;
  height: calc(100vh - 64px);
  width: 100vw;
  z-index: 6;
}

.responsive-video-overlay {
  background-color: rgba(0, 0, 0, .55);
  z-index: 2;
}

.responsive-video, .responsive-video-overlay {
  width: 100%;
  height: 100vh;
  position: absolute;
  top: -64px;
  left: 0;
}

.responsive-video {
  object-fit: cover;
  z-index: 1;
}

.slider-welcome {
  display: flex;
  letter-spacing: 4px;
  text-transform: uppercase;
}

.slider-title {
  font-weight: 400;
}
</style>