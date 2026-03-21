<template>
  <v-row justify="center" no-gutters>
    <v-overlay
        v-model="overlay"
        width="100%"
        content-class="bg-white"
        class="bg-white"
        style="z-index: 9999"
        opacity="1">
      <v-btn
          position="absolute"
          style="right: 24px;top: 24px"
          variant="outlined"
          color="#ccc"
          rounded="circle"
          size="40px"
          @click="overlay = false">
        <v-icon size="24px" color="#000" :icon="mdiClose"></v-icon>
      </v-btn>
      <v-row
          no-gutters
          style="height: 100vh;flex-wrap: nowrap"
          justify="space-between"
          class="px-8"
          align="center">
        <v-btn
            v-if="$device.isDesktop"
            variant="outlined"
            color="#ccc"
            rounded="circle"
            size="48px"
            @click="previousImage">
          <v-icon size="40px" color="#000" :icon="mdiChevronLeft"></v-icon>
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
            color="#ccc"
            rounded="circle"
            size="48px"
            @click="nextImage">
          <v-icon size="40px" color="#000" :icon="mdiChevronRight"></v-icon>
        </v-btn>
      </v-row>
      <div style="position: absolute;right: 0px;bottom: 24px;width: 100%" class="text-center text-caption">
        {{ imageIndex + 1 }}/{{ photos.length }}
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
@media (max-width: 992px) {
  .grid-wrapper {
    columns: 2;
  }
  .grid-wrapper > div {
    width: 100%;
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

</style>
