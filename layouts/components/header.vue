<template>
  <v-app-bar
      v-scroll="onScroll"
      :color="color"
      flat
      theme="dark"
      height="132px"
      style="height: 132px"
      density="prominent">
    <div style="position: absolute;right: 8px;top: 8px">
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
    </div>
    <v-row class="flex-column text-white" no-gutters>
      <div style="max-width: 1400px;width: 100%;margin: 0 auto;height: 132px;">
        <v-row no-gutters align="center" class="fill-height pb-2" justify="space-between">
          <v-col col="5" class="fill-height pt-8">
            <v-row no-gutters class="fill-height" align="space-between">
              <v-col cols="12" class="pl-4">
                <!--                <span class="text-caption text-uppercase">1250 WEST 6TH AVE, NEW YORK, NY 10036, Serbia</span><br/>-->
              </v-col>
              <v-col cols="12">
                <v-row class="fill-height" align="end" no-gutters>
                  <template v-for="(item, i) in menuLeft">
                    <v-btn
                        v-if="item.to"
                        :to="item.to"
                        style="text-transform: initial"
                        variant="text">
                      {{ item.title }}
                    </v-btn>
                    <v-btn
                        v-else
                        @click="scrollTo(item.href)"
                        style="text-transform: initial"
                        variant="text">
                      {{ item.title }}
                    </v-btn>
                  </template>
                </v-row>
              </v-col>
            </v-row>
          </v-col>
          <router-link :to="{name: 'index'}">
            <img src="/hillhouse/media/images/logo5.png" alt="Hill house logo" style="height: 80px"/>
          </router-link>
          <v-col col="5" class="fill-height pt-8">
            <v-row no-gutters class="fill-height" align="space-between">
              <v-col cols="12" align="end">
                <v-row class="fill-height" align="end" no-gutters justify="end">
                  <template v-for="(item, i) in menuRight">
                    <v-btn
                        v-if="item.to"
                        :to="item.to"
                        style="text-transform: initial"
                        variant="text">
                      {{ item.title }}
                    </v-btn>
                    <v-btn
                        v-else
                        @click="scrollTo(item.href)"
                        style="text-transform: initial"
                        variant="text">
                      {{ item.title }}
                    </v-btn>
                  </template>
                </v-row>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </div>
    </v-row>
  </v-app-bar>
</template>

<script setup>
import {ref, reactive, computed, watch} from 'vue';
import {useI18n} from 'vue-i18n';
import {useRoute, useRouter} from 'vue-router'

const route = useRoute();
const router = useRouter();
const color = ref(route.name === 'index' ? 'rgba(0, 0, 0, .1)' : '#151515');
const {locale, t} = useI18n({useScope: 'global'})

const menuLeft = computed(() => {
  return [
    {
      title: t('layout.menu.home'),
      to: {name: 'index'}
    },
    {
      title: t('layout.menu.about'),
      to: {name: 'about'}
    },
    {
      title: t('layout.menu.facilities'),
      href: "#facilities"
    },
    {
      title: t('layout.menu.utilities'),
      href: "#utilities"
    },
  ]
})

const menuRight = computed(() => {
  return [
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

const scrollTo = (target) => {
  if(route.name === 'index') {
    window.scrollTo({
      top: document.querySelector(target).offsetTop - 128,
      left: 0,
      behavior: "smooth",
    });
  } else {
    router.push({name: 'index', hash: target})
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