<template>
  <v-navigation-drawer app v-model="model" color="#151515" class="pt-3">
    <router-link :to="{name: 'index'}">
      <v-row no-gutters justify="center">
        <img src="/hillhouse/media/images/logo5.png" alt="Hill house logo" style="width: 90%"/>
      </v-row>
    </router-link>
    <v-divider class="mt-3"></v-divider>
    <v-list density="comfortable">
      <template v-for="item in items">
        <v-list-item v-if="item.to" :to="item.to" link :title="item.title"></v-list-item>
        <v-list-item v-else @click="scrollTo(item.href)" link :title="item.title"></v-list-item>
      </template>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup>
import {useI18n} from "vue-i18n";
import {useRoute, useRouter} from 'vue-router'

const {locale, t} = useI18n({useScope: 'global'})
import {computed} from "vue";

const route = useRoute();
const router = useRouter();
const items = computed(() => {
  return [
    {
      title: t('layout.menu.home'),
      to: {name: 'index'}
    },
    {
      title: t('layout.menu.about'),
      href: "#about"
    },
    {
      title: t('layout.menu.facilities'),
      href: "#facilities"
    },
    {
      title: t('layout.menu.utilities'),
      href: "#utilities"
    },
    {
      title: t('layout.menu.testimonials'),
      href: "#testimonials"
    },
    {
      title: t('layout.menu.gallery'),
      to: {name: 'gallery'}
    },
    {
      title: t('layout.menu.pricing'),
      to: {name: 'pricing'}
    },
    {
      title: t('layout.menu.map'),
      href: '#map'
    },
  ]
})

const scrollTo = (target) => {
  if (route.name === 'index') {
    window.scrollTo({
      top: document.querySelector(target).offsetTop - 128,
      left: 0,
      behavior: "smooth",
    });
  } else {
    router.push({name: 'index', hash: target})
  }
}
</script>

<script>
import hasModel from "../../mixins/hasModel";

export default {
  mixins: [hasModel]
}
</script>