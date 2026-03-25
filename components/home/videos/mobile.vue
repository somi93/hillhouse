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
    <source :src="heroVideo.src" type="video/mp4">
    Your browser does not support the video tag.
  </video>
</template>

<script setup>
const { heroVideo } = useVilla('hh1')
</script>