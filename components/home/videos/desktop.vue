<template>
  <video
    class="responsive-video"
    autoplay
    muted
    loop
    playsinline
    preload="none"
    :poster="heroVideo.poster"
  >
    <source :src="heroVideo.src" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
</template>

<script setup>
const props = defineProps({
  villa: {
    type: String,
    required: true, // 'hh1' | 'hh2'
    default: "hh1",
    validator: (v) => ["hh1", "hh2"].includes(v),
  },
});
const { heroVideo } = useVilla(props.villa);
</script>
