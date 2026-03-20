<template>
  <v-app v-scroll="onScroll" style="max-width: 100vw; overflow: hidden">
    <hill-header v-if="!$vuetify.display.smAndDown"></hill-header>
    <hill-mobile-header v-else></hill-mobile-header>
    <v-main style="padding-top: 64px !important">
      <v-row
        v-if="!$vuetify.display.smAndDown"
        class="social-sharing"
        align="center"
        no-gutters
      >
        <div class="bg-primary">
          <v-row align="start" justify="center" class="flex-column" no-gutters>
            <SocialShare
              v-for="network in [
                'facebook',
                'whatsapp',
                'pinterest',
                'reddit',
                'twitter',
                'email',
                'linkedin',
              ]"
              :key="network"
              :network="network"
              :styled="true"
              :label="false"
              url="https://www.hillhouse.rs"
              class="rounded-0"
            />
          </v-row>
        </div>
      </v-row>
      <!--      <router-view></router-view>-->
      <nuxt-page></nuxt-page>
    </v-main>
    <v-progress-circular
      v-if="$route.name !== 'interactive-map'"
      :model-value="currentScroll"
      :size="72"
      :width="4"
      color="#FF8A00"
      style="bottom: 16px; right: 16px; z-index: 5; position: fixed"
    >
      <v-btn
        color="primary"
        class="btn-reserve"
        aria-label="Name"
        @click="scrollToTop"
        flat
        variant="flat"
        rounded="circle"
        height="64px"
        width="64px"
      >
        <v-icon size="28px" :icon="mdiChevronUp"></v-icon>
      </v-btn>
    </v-progress-circular>
    <hill-footer></hill-footer>
    <v-bottom-sheet
      :model-value="cookieNotAccepted"
      style="z-index: 1000000000000000000000"
    >
      <v-row
        class="bg-white pa-4"
        :class="$vuetify.display.smAndDown ? 'text-center' : ''"
        justify="center"
        no-gutters
        align="center"
      >
        Ovaj sajt koristi kolačiće kako bi vam pružio najbolje iskustvo.
        <v-btn
          variant="flat"
          @click="setCookies"
          :class="$vuetify.display.smAndDown ? 'mt-4 mr-2' : 'ml-4'"
          color="success"
          >Prihvati</v-btn
        >
        <v-btn
          variant="flat"
          @click="cookieNotAccepted = false"
          :class="$vuetify.display.smAndDown ? 'mt-4 ml-2' : 'ml-4'"
          color="error"
          >Odbij</v-btn
        >
      </v-row>
    </v-bottom-sheet>
  </v-app>
</template>

<script setup>
import HillHeader from "./components/header";
import HillMobileHeader from "./components/mobile-header";
import HillFooter from "./components/footer";
import { mdiChevronUp } from "@mdi/js";
import { ref, onMounted, watch } from "vue";

const currentScroll = ref(0);
const cookieNotAccepted = ref(false);
const scrollToTop = () => {
  window.scrollTo(0, 0);
};

onMounted(() => {
  const cookieAccepted = !!localStorage.getItem("cookiesAccepted");
  cookieNotAccepted.value = !cookieAccepted;
  if (cookieAccepted) {
    activateAnalytics();
  }
});

const activateAnalytics = () => {
  const { initialize } = useGtag();
  initialize("G-LMR22J78MP");
};

const setCookies = () => {
  localStorage.setItem("cookiesAccepted", "true");
  cookieNotAccepted.value = false;
  activateAnalytics();
};
watch(
  () => cookieNotAccepted,
  () => {
    if (!cookieNotAccepted.value) {
      function allConsentGranted() {
        console.log("accept");
        const { gtag } = useGtag();
        gtag("consent", "update", {
          ad_user_data: "granted",
          ad_personalization: "granted",
          ad_storage: "granted",
          analytics_storage: "granted",
        });
      }

      function consentGrantedAdStorage() {
        const { gtag } = useGtag();
        gtag("consent", "update", {
          ad_storage: "granted",
        });
      }

      // Invoke the consent function when a user interacts with your banner
      allConsentGranted(); // Or `allConsentGranted()`
    }
  }
);

const onScroll = () => {
  const h = document.documentElement;
  const b = document.body;
  const st = "scrollTop";
  const sh = "scrollHeight";

  // Get the current scroll position and content height
  const scrollPosition = h[st] || b[st];
  const contentHeight = h[sh] || b[sh];

  // Get the viewport height
  const viewportHeight = window.innerHeight;

  // Calculate the scrollable distance
  const scrollableDistance = contentHeight - viewportHeight;

  // Calculate the percentage scrolled
  const scrollPercent = Math.round((scrollPosition / scrollableDistance) * 100);

  // Ensure value is between 0 and 100
  currentScroll.value = Math.max(0, Math.min(100, scrollPercent));
};
</script>

<style>
.social-sharing {
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  z-index: 1331131313;
}
.social-sharing path {
  fill: #151515;
}
.social-sharing a:hover path {
  fill: #fff;
}
</style>
