<template>
  <v-footer color="#151515" class="pt-12 pb-6">
    <v-container style="max-width: 1400px">
      <v-row>
        <v-col cols="12" lg="4" class="pr-8">
          <p class="text-h4 mb-4">Hill Luxury House</p>
          <p class="text-body-2">{{ $t('layout.footer.description') }}</p>
        </v-col>
        <v-col cols="12" lg="4" class="px-8">
          <p class="text-h5 mb-4">Reach out</p>
          <p class="text-body-2">
            Email: booking@cozystay.com<br/>
            Tel: +41 22 345 66 77<br/>
            Fax: +41 22 345 77 89<br/>
            Varovničkih ratnika, Šepšin, Serbia
          </p>
        </v-col>
        <v-col cols="12" lg="4" class="pl-8">
          <p class="text-h5 mb-4">{{ $t('layout.footer.stayConnected') }}</p>
          <v-row no-gutters>
            <a class="mr-3" rel="noopener" href="https://www.weekendica.com/vikendica/prestige-hill/" target="_blank">
              <weekendica-icon style="width: 34px"></weekendica-icon>
            </a>
            <a class="mr-4" rel="noopener" href="https://www.instagram.com/hill_luxury_house/" target="_blank">
              <v-icon color="#fff" :icon="mdiInstagram" size="22px"></v-icon>
            </a>
            <a class="mr-4" rel="noopener" href="https://www.instagram.com/hill_luxury_house/" target="_blank">
              <v-icon color="#fff" :icon="mdiEmail" size="22px"></v-icon>
            </a>
          </v-row>
        </v-col>
      </v-row>
      <v-divider class="my-12"></v-divider>
      <v-row justify="space-between" align="center" class="px-2">
        <div>
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
        </div>
        <span class="text-body-2">Copyright © Enigma IT. All rights reserved.</span>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script setup>
import {mdiFacebook, mdiInstagram, mdiEmail, mdiYoutube} from "@mdi/js";
import WeekendicaIcon from '@/components/icons/weekendica';
import {computed} from "vue";
import {useI18n} from "vue-i18n";

const {locale, t} = useI18n({useScope: 'global'})
const menuLeft = computed(() => {
  return [
    {
      title: t('layout.menu.home'),
      to: {name: 'index'}
    },
    {
      title: t('layout.menu.about'),
      href: '#about'
    },
    {
      title: t('layout.menu.gallery'),
      to: {name: 'gallery'}
    },
    {
      title: t('layout.menu.map'),
      href: '#map'
    },
  ]
})

const scrollTo = (target) => {
  window.scrollTo({
    top: document.querySelector(target).offsetTop - 128,
    left: 0,
    behavior: "smooth",
  });
}
</script>