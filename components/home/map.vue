<template>
  <div id="map" class="iframe-container">
    <iframe
        class="responsive-iframe"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d256653.6776667413!2d20.522075228443587!3d44.70635824599506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4750bd1c824fd29b%3A0x8b1d2647713d9c1d!2sHILL%20LUXURY%20HOUSE!5e0!3m2!1ssr!2srs!4v1709736317813!5m2!1ssr!2srs&z=1"
        width="600"
        height="450"
        style="border:0;"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade">
    </iframe>
  </div>
</template>

<style>

@media (max-width: 640px) {
  .iframe-container {
    padding-top: 75%; /* 16:9 Aspect Ratio */
  }
}
@media (min-width: 641px) {
  .iframe-container {
    padding-top: 50%; /* 16:9 Aspect Ratio */
  }
}
@media (min-width: 993px) {
  .iframe-container {
    padding-top: 25.25%; /* 16:9 Aspect Ratio */
  }
}
.iframe-container {
  position: relative;
  width: 100%;
  overflow: hidden;
}

.responsive-iframe {
  filter: grayscale(0.85);
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  border: none;
}
</style>