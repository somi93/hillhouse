<template>
  <drawer v-model="navDrawer"></drawer>
  <v-app-bar
    v-scroll="onScroll"
    flat
    theme="dark"
    :height="HEADER_HEIGHT"
    class="mobile-site-header"
    :class="isHeroState ? 'mobile-site-header--hero' : 'mobile-site-header--solid'"
  >
    <div class="content-shell mobile-site-header__shell">
      <v-btn
        icon
        variant="text"
        class="mobile-site-header__nav-btn"
        aria-label="Open navigation"
        @click="navDrawer = !navDrawer"
      >
        <v-icon :icon="mdiMenu" size="22"></v-icon>
      </v-btn>

      <router-link :to="localePath('/')" class="mobile-site-header__logo-link" aria-label="Hill House home">
        <img src="/hillhouse/media/images/logo.png" alt="Hill House logo" class="mobile-site-header__logo" />
      </router-link>

      <div class="mobile-site-header__locale">
        <v-btn
          size="x-small"
          variant="text"
          class="mobile-site-header__locale-btn"
          :class="locale === 'sr' ? 'mobile-site-header__locale-btn--active' : ''"
          @click="changeLocale('sr')"
        >
          SR
        </v-btn>
        <v-btn
          size="x-small"
          variant="text"
          class="mobile-site-header__locale-btn"
          :class="locale === 'en' ? 'mobile-site-header__locale-btn--active' : ''"
          @click="changeLocale('en')"
        >
          EN
        </v-btn>
      </div>
    </div>
  </v-app-bar>
</template>

<script setup>
import { mdiMenu } from "@mdi/js";
import { ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useI18n } from "vue-i18n";
import Drawer from "./drawer";

const HEADER_HEIGHT = 84;

const localePath = useLocalePath()
const switchLocalePath = useSwitchLocalePath()
const router = useRouter()
const { locale } = useI18n({ useScope: "global" });
const route = useRoute();
const isHeroState = ref(String(route.name ?? '').split('___')[0] === "index");
const navDrawer = ref(false);

const onScroll = () => {
  if (String(route.name ?? '').split('___')[0] === "index") {
    const doc = document.documentElement;
    const top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    const hero = document.getElementById("videoBox");
    const height = hero ? hero.getBoundingClientRect().height : 0;
    isHeroState.value = top < height - HEADER_HEIGHT;
    return;
  }

  isHeroState.value = false;
};

const changeLocale = (value) => {
  const path = switchLocalePath(value)
  if (path) router.push(path)
};

watch(
  () => route.name,
  (name) => {
    isHeroState.value = String(name ?? '').split('___')[0] === "index";
  },
  {
    immediate: true,
  }
);
</script>

<style scoped>
.mobile-site-header {
  backdrop-filter: blur(18px);
  transition: background 0.28s ease, border-color 0.28s ease;
}

.mobile-site-header--hero {
  background: linear-gradient(180deg, rgba(8, 8, 8, 0.52) 0%, rgba(8, 8, 8, 0.28) 100%) !important;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.mobile-site-header--solid {
  background: rgba(19, 19, 19, 0.86) !important;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.mobile-site-header__shell {
  height: 100%;
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 10px;
}

.mobile-site-header__nav-btn {
  color: #fff;
}

.mobile-site-header__logo-link {
  display: flex;
  justify-content: center;
}

.mobile-site-header__logo {
  height: 50px;
  display: block;
}

.mobile-site-header__locale {
  display: inline-flex;
  align-items: center;
  gap: 2px;
  padding: 2px;
  border: 1px solid rgba(255, 255, 255, 0.09);
  background: rgba(9, 9, 9, 0.18);
  border-radius: 999px;
}

.mobile-site-header__locale-btn {
  min-width: 34px;
  color: rgba(255, 255, 255, 0.52);
  letter-spacing: 0.14em;
  font-size: 0.58rem;
  border-radius: 999px;
}

.mobile-site-header__locale-btn--active {
  background: rgba(207, 169, 117, 0.18);
  color: #fff;
}
</style>