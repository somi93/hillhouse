<template>
  <div
    ref="el"
    @click="$emit('openGallery')">
    <img :src="photo.resized"/>
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
