<template>
  <v-app-bar
    v-scroll="onScroll"
    flat
    theme="dark"
    :height="HEADER_HEIGHT"
    class="site-header"
    :class="isHeroState ? 'site-header--hero' : 'site-header--solid'"
  >
    <div class="content-shell site-header__shell">
      <div class="site-header__utility">
        <div class="site-header__locale">
          <v-btn
            size="x-small"
            variant="text"
            class="site-header__locale-btn"
            :class="locale === 'sr' ? 'site-header__locale-btn--active' : ''"
            @click="changeLocale('sr')"
          >
            SR
          </v-btn>
          <v-btn
            size="x-small"
            variant="text"
            class="site-header__locale-btn"
            :class="locale === 'en' ? 'site-header__locale-btn--active' : ''"
            @click="changeLocale('en')"
          >
            EN
          </v-btn>
        </div>
      </div>

      <div class="site-header__main">
        <nav class="site-header__nav site-header__nav--left">
          <template v-for="item in menuLeft" :key="item.title">
            <router-link
              v-if="item.to"
              :to="item.to"
              class="site-header__nav-link"
              :class="isRouteActive(item.to) ? 'site-header__nav-link--active' : ''"
            >
              {{ item.title }}
            </router-link>
            <button
              v-else
              type="button"
              class="site-header__nav-link"
              @click="scrollTo(item.href)"
            >
              {{ item.title }}
            </button>
          </template>
        </nav>

        <router-link :to="{ name: 'index' }" class="site-header__logo-link" aria-label="Hill House home">
          <img src="/hillhouse/media/images/logo5.png" alt="Hill House logo" class="site-header__logo" />
        </router-link>

        <nav class="site-header__nav site-header__nav--right">
          <template v-for="item in menuRight" :key="item.title">
            <router-link
              v-if="item.to"
              :to="item.to"
              class="site-header__nav-link"
              :class="isRouteActive(item.to) ? 'site-header__nav-link--active' : ''"
            >
              {{ item.title }}
            </router-link>
            <button
              v-else
              type="button"
              class="site-header__nav-link"
              @click="scrollTo(item.href)"
            >
              {{ item.title }}
            </button>
          </template>
        </nav>
      </div>
    </div>
  </v-app-bar>
</template>

<script setup>
import { computed, ref, watch } from "vue";
import { useI18n } from "vue-i18n";
import { useRoute, useRouter } from "vue-router";

const HEADER_HEIGHT = 104;

const route = useRoute();
const router = useRouter();
const isHeroState = ref(route.name === "index");
const { locale, t } = useI18n({ useScope: "global" });

const menuLeft = computed(() => [
  {
    title: t("layout.menu.home"),
    to: { name: "index" },
  },
  {
    title: t("layout.menu.about"),
    to: { name: "about" },
  },
  {
    title: t("layout.menu.facilities"),
    href: "#facilities",
  },
  {
    title: t("layout.menu.utilities"),
    href: "#utilities",
  },
]);

const menuRight = computed(() => [
  {
    title: t("layout.menu.testimonials"),
    href: "#testimonials",
  },
  {
    title: t("layout.menu.gallery"),
    to: { name: "gallery" },
  },
  {
    title: t("layout.menu.pricing"),
    to: { name: "pricing" },
  },
  {
    title: t("layout.menu.map"),
    href: "#map",
  },
]);

const onScroll = () => {
  if (route.name === "index") {
    const doc = document.documentElement;
    const top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    const hero = document.getElementById("videoBox");
    const height = hero ? hero.getBoundingClientRect().height : 0;
    isHeroState.value = top < height - HEADER_HEIGHT;
    return;
  }

  isHeroState.value = false;
};

const scrollTo = (target) => {
  if (route.name === "index") {
    const element = document.querySelector(target);
    if (!element) {
      return;
    }

    window.scrollTo({
      top: element.offsetTop - 112,
      left: 0,
      behavior: "smooth",
    });
    return;
  }

  router.push({ name: "index", hash: target });
};

const changeLocale = (value) => {
  locale.value = value;
};

const isRouteActive = (to) => route.name === to.name;

watch(
  () => route.name,
  (name) => {
    isHeroState.value = name === "index";
  },
  {
    immediate: true,
  }
);
</script>

<style scoped>
.site-header {
  backdrop-filter: blur(18px);
  transition: background 0.28s ease, border-color 0.28s ease, box-shadow 0.28s ease;
}

.site-header--hero {
  background: linear-gradient(180deg, rgba(8, 8, 8, 0.54) 0%, rgba(8, 8, 8, 0.36) 62%, rgba(8, 8, 8, 0.18) 100%) !important;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  box-shadow: none;
}

.site-header--solid {
  background: rgba(19, 19, 19, 0.86) !important;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: inset 0 -1px 0 rgba(255, 255, 255, 0.02);
}

.site-header__shell {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.site-header__utility {
  display: flex;
  justify-content: flex-end;
  padding-top: 10px;
}

.site-header__locale {
  display: inline-flex;
  align-items: center;
  gap: 2px;
  padding: 2px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(9, 9, 9, 0.18);
  border-radius: 999px;
}

.site-header__locale-btn {
  min-width: 34px;
  color: rgba(255, 255, 255, 0.5);
  letter-spacing: 0.16em;
  font-size: 0.58rem;
  border-radius: 999px;
}

.site-header__locale-btn--active {
  background: rgba(207, 169, 117, 0.2);
  color: #fff;
}

.site-header__main {
  flex: 1;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  gap: 24px;
  padding-bottom: 8px;
}

.site-header__nav {
  display: flex;
  align-items: center;
  gap: 18px;
}

.site-header__nav--left {
  justify-content: flex-start;
}

.site-header__nav--right {
  justify-content: flex-end;
}

.site-header__nav-link {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  border: 0;
  background: transparent;
  color: rgba(255, 255, 255, 0.76);
  letter-spacing: 0.07em;
  text-transform: none;
  font-size: 0.84rem;
  font-weight: 500;
  line-height: 1;
  min-height: 42px;
  text-decoration: none;
  transition: color 0.25s ease, opacity 0.25s ease;
  cursor: pointer;
}

.site-header__nav-link::after {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  bottom: -7px;
  height: 1px;
  background: linear-gradient(90deg, transparent 0%, rgba(207, 169, 117, 0.95) 20%, rgba(207, 169, 117, 0.95) 80%, transparent 100%);
  opacity: 0;
  transform: scaleX(0.55);
  transform-origin: center;
  transition: opacity 0.25s ease, transform 0.25s ease;
}

.site-header__nav-link:hover,
.site-header__nav-link:focus-visible,
.site-header__nav-link--active {
  color: #fff;
}

.site-header__nav-link:hover::after,
.site-header__nav-link:focus-visible::after,
.site-header__nav-link--active::after {
  opacity: 1;
  transform: scaleX(1);
}

.site-header__nav-link:focus-visible {
  outline: none;
}

.site-header__logo-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0 28px;
}

.site-header__logo {
  height: 68px;
  display: block;
}
</style>