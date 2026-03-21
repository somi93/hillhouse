<template>
  <v-navigation-drawer v-model="model" temporary location="left" class="site-drawer" color="#151515">
    <div class="site-drawer__header">
      <router-link :to="{ name: 'index' }" class="site-drawer__logo-link" @click="model = false">
        <img src="/hillhouse/media/images/logo5.png" alt="Hill House logo" class="site-drawer__logo" />
      </router-link>
      <div class="site-drawer__locale">
        <v-btn
          size="x-small"
          variant="text"
          class="site-drawer__locale-btn"
          :class="locale === 'sr' ? 'site-drawer__locale-btn--active' : ''"
          @click="changeLocale('sr')"
        >
          SR
        </v-btn>
        <v-btn
          size="x-small"
          variant="text"
          class="site-drawer__locale-btn"
          :class="locale === 'en' ? 'site-drawer__locale-btn--active' : ''"
          @click="changeLocale('en')"
        >
          EN
        </v-btn>
      </div>
    </div>

    <v-divider class="site-drawer__divider"></v-divider>

    <v-list nav class="site-drawer__list">
      <template v-for="item in items" :key="item.title">
        <v-list-item v-if="item.to" :to="item.to" class="site-drawer__item" @click="model = false">
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
        <v-list-item v-else class="site-drawer__item" @click="navigateToHash(item.href)">
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </template>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup>
import { computed } from "vue";
import { useI18n } from "vue-i18n";
import { useRoute, useRouter } from "vue-router";

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["update:modelValue"]);

const model = computed({
  get: () => props.modelValue,
  set: (value) => emit("update:modelValue", value),
});

const { locale, t } = useI18n({ useScope: "global" });
const route = useRoute();
const router = useRouter();

const items = computed(() => [
  {
    title: t("layout.menu.home"),
    to: { name: "index" },
  },
  {
    title: t("layout.menu.about"),
    href: "#about",
  },
  {
    title: t("layout.menu.facilities"),
    href: "#facilities",
  },
  {
    title: t("layout.menu.utilities"),
    href: "#utilities",
  },
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

const changeLocale = (value) => {
  locale.value = value;
};

const navigateToHash = (target) => {
  model.value = false;

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
</script>

<style scoped>
.site-drawer__header {
  padding: 18px 18px 16px;
}

.site-drawer__logo-link {
  display: flex;
  justify-content: center;
  margin-bottom: 16px;
}

.site-drawer__logo {
  width: 88%;
  display: block;
}

.site-drawer__locale {
  display: inline-flex;
  align-items: center;
  gap: 2px;
  padding: 2px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(255, 255, 255, 0.03);
}

.site-drawer__locale-btn {
  min-width: 38px;
  color: rgba(255, 255, 255, 0.65);
  letter-spacing: 0.16em;
  font-size: 0.64rem;
}

.site-drawer__locale-btn--active {
  background: rgba(207, 169, 117, 0.18);
  color: #fff;
}

.site-drawer__divider {
  opacity: 0.24;
}

.site-drawer__list {
  padding: 12px 10px 24px;
}

.site-drawer__item {
  color: #fff;
  min-height: 48px;
}
</style>