<template>
  <drawer v-model="navDrawer"></drawer>
  <v-app-bar
      v-scroll="onScroll"
      :color="color"
      flat
      theme="dark"
      height="132px"
      style="height: 132px"
      density="prominent">
    <v-row justify="center" no-gutters>
      <v-col cols="12">
        <v-row no-gutters justify="space-between" align="center">
          <v-app-bar-nav-icon @click="navDrawer = !navDrawer"></v-app-bar-nav-icon>
          <div>
            <v-row no-gutters>
              <v-btn
                  size="small"
                  variant="text"
                  :color="locale === 'en' ? 'white' : 'primary'"
                  @click="changeLocale('sr')">
                Srpski
              </v-btn>
              <v-btn
                  size="small"
                  variant="text"
                  :color="locale === 'sr' ? 'white' : 'primary'"
                  @click="changeLocale('en')">
                English
              </v-btn>
            </v-row>
          </div>
        </v-row>
      </v-col>
      <router-link :to="{name: 'index'}">
        <img src="/hillhouse/media/images/logo5.png" alt="Hill house logo" style="height: 70px"/>
      </router-link>
    </v-row>
  </v-app-bar>
</template>

<script setup>
import {ref, reactive, computed, watch} from 'vue';
import {useRoute, useRouter} from 'vue-router'
import Drawer from "./drawer";
import {useI18n} from "vue-i18n";
const {locale} = useI18n({useScope: 'global'})

const route = useRoute();
const color = ref(route.name === 'index' ? 'rgba(0, 0, 0, .1)' : '#151515');
const navDrawer = ref(false);

const onScroll = () => {
  if (route.name === 'index') {
    var doc = document.documentElement;
    var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    const height = document.getElementById('videoBox').getBoundingClientRect().height;
    color.value = top >= (height - 132) ? '#151515' : 'rgba(0, 0, 0, .1)';
  } else {
    color.value = '#151515';
  }
}

const changeLocale = item => {
  locale.value = item;
}

watch(
    () => route.name,
    (name) => {
      color.value = name === 'index' ? 'rgba(0, 0, 0, .1)' : '#151515'
    },
    {
      immediate: true
    }
)
</script>