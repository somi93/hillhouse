<template>
  <div class="gallery-item" ref="el" @click="$emit('openGallery')">
    <img :src="photo.resized" :alt="photo.alt || ''"/>
    <div class="gallery-item__overlay"></div>
  </div>
</template>

<script>
export default {
  props: {
    photo: {
      type: Object,
      required: true
    },
    width: {
      type: Number,
      required: false,
      default: 425
    }
  },
  computed: {
    height() {
      const dimensions = this.photo.params.dimensions;
      const height = dimensions.height;
      const width = dimensions.width;
      const aspect = height / width;
      return Math.floor(this.width * aspect);
    },
  }
}
</script>

<style>
.gallery-item {
  cursor: pointer;
  overflow: hidden;
  border-radius: 8px;
}
.gallery-item img {
  transition: transform 0.45s ease;
  width: 100%;
  display: block;
}
.gallery-item:hover img {
  transform: scale(1.04);
}
.gallery-item__overlay {
  position: absolute;
  inset: 0;
  background: rgba(12, 8, 5, 0);
  transition: background 0.3s ease;
  border-radius: 8px;
}
.gallery-item:hover .gallery-item__overlay {
  background: rgba(12, 8, 5, 0.22);
}
</style>
