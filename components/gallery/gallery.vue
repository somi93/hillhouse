<template>
  <v-row justify="center" no-gutters>
    <v-overlay
        v-model="overlay"
        width="100%"
        content-class="gallery-overlay"
        class="gallery-overlay"
        style="z-index: 9999"
        opacity="1">
      <v-btn
          position="absolute"
          style="right: 24px;top: 24px"
          variant="outlined"
          color="rgba(255,255,255,0.18)"
          rounded="circle"
          size="40px"
          @click="overlay = false">
        <v-icon size="22px" color="#fff" :icon="mdiClose"></v-icon>
      </v-btn>
      <v-row
          no-gutters
          style="height: 100vh;flex-wrap: nowrap"
          justify="space-between"
          class="px-6"
          align="center">
        <v-btn
            v-if="$device.isDesktop"
            variant="outlined"
            color="rgba(255,255,255,0.18)"
            rounded="circle"
            size="48px"
            @click="previousImage">
          <v-icon size="32px" color="#fff" :icon="mdiChevronLeft"></v-icon>
        </v-btn>
        <v-col cols="12" lg="11">
          <gallery-overlay-item
              @nextImage="nextImage"
              @previousImage="previousImage"
              @setImage="imageIndex = $event"
              :current-index="imageIndex"
              :image="imageOverlay">
          </gallery-overlay-item>
        </v-col>
        <v-btn
            v-if="$device.isDesktop"
            variant="outlined"
            color="rgba(255,255,255,0.18)"
            rounded="circle"
            size="48px"
            @click="nextImage">
          <v-icon size="32px" color="#fff" :icon="mdiChevronRight"></v-icon>
        </v-btn>
      </v-row>
      <div class="gallery-overlay__counter">
        <span class="gallery-overlay__index">{{ imageIndex + 1 }}</span>
        <span class="gallery-overlay__sep">/</span>
        <span class="gallery-overlay__total">{{ photos.length }}</span>
      </div>
    </v-overlay>
    <v-col cols="12" lg="12" class="mt-8">
      <div class="grid-wrapper" ref="gallery">
        <template v-for="(photo, i) in photos" v-if="galleryWidth">
          <gallery-item
              :photo="photo"
              @openGallery="openGallery(i)"
              :width="galleryWidth">
          </gallery-item>
        </template>
      </div>
    </v-col>
  </v-row>
</template>

<script setup>
import {mdiChevronLeft, mdiChevronRight, mdiClose} from '@mdi/js'
</script>

<script>
import GalleryItem from './item'
import GalleryOverlayItem from './overlay-item'

export default {
  props: {
    photos: {
      type: Array,
      required: true
    }
  },
  components: {
    GalleryItem,
    GalleryOverlayItem
  },
  data: () => ({
    overlay: false,
    imageIndex: 0,
    galleryWidth: 0
  }),
  mounted() {
    const divide = this.isDesktop ? 4 : 1;
    this.galleryWidth = Math.ceil((this.$refs.gallery.getBoundingClientRect().width - 48) / divide);
    window.addEventListener("keydown", event => {
      if (event.defaultPrevented) {
        return; // Should do nothing if the default action has been cancelled
      }
      if (this.overlay) {
        if (event.keyCode === 37) {
          this.previousImage()
        } else if (event.keyCode === 39) {
          this.nextImage();
        } else if (event.keyCode === 27) {
          this.overlay = false
        }
      }
    }, true);
  },
  methods: {
    previousImage() {
      if (!this.imageIndex) this.imageIndex = this.photos.length - 1;
      else this.imageIndex--;
    },
    nextImage() {
      if (this.imageIndex === this.photos.length - 1) this.imageIndex = 0;
      else this.imageIndex++;
    },
    openGallery(index) {
      this.imageIndex = index;
      this.overlay = true;
    }
  },
  computed: {
    imageOverlay() {
      return this.photos[this.imageIndex];
    }
  }
}
</script>

<style>
.grid-wrapper {
  columns: 3;
  column-gap: 12px;
}
.grid-wrapper > div {
  display: inline-block;
  margin-bottom: 12px;
  width: 100%;
  position: relative;
}
.grid-wrapper > div img {
  width: 100%;
  border-radius: 8px;
  display: block;
}
@media (max-width: 992px) {
  .grid-wrapper { columns: 2; }
}
@media (max-width: 640px) {
  .grid-wrapper { columns: 1; }
}

/* Overlay */
.gallery-overlay {
  background: #0c0a09 !important;
}
.gallery-overlay__counter {
  position: absolute;
  bottom: 22px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: baseline;
  gap: 4px;
}
.gallery-overlay__index {
  font-family: var(--font-heading);
  font-size: 1.3rem;
  color: #fff;
  line-height: 1;
}
.gallery-overlay__sep {
  color: rgba(178, 140, 89, 0.6);
  font-size: 0.9rem;
}
.gallery-overlay__total {
  color: rgba(255, 255, 255, 0.45);
  font-size: 0.88rem;
}
</style>
