<template>
  <div class="responsive-video-box" id="videoBox">
    <div class="responsive-video-overlay">
      <v-row
          class="fill-height flex-column px-5 px-md-0"
          justify="center"
          align="center">
        <h1
            class="text-primary text-body-2 font-weight-medium text-center text-md-left slider-welcome"
            v-html="$t('home.slider.welcome')">
        </h1>
        <span
            v-html="$t('home.slider.title')"
            :class="$vuetify.display.smAndDown ? 'text-h3' : 'text-h2'"
            class="text-white font-weight-medium text-center my-6"
            :style="[
                {
                  'line-height': $vuetify.display.smAndDown ? '1.3' : '1.4'
                }
            ]">
        </span>
        <v-btn
            color="primary"
            class="btn-reserve"
            flat
            width="300px"
            height="50px"
            href="tel:+38169635632"
            rel="noopener"
            target="_blank">
          {{ $t('home.slider.reserve') }}
        </v-btn>
      </v-row>
    </div>
    <mobile-video v-if="!$vuetify.display.smAndDown"></mobile-video>
    <desktop-video v-else></desktop-video>
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
}
</style>