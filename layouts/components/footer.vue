<template>
  <v-footer color="#151515" class="px-0">
    <v-container style="max-width: 1400px">
      <v-row>
        <v-col cols="12" lg="4" :class="!$vuetify.display.smAndDown ? 'pr-8' : ''">
          <p class="text-h4 mb-4">Hill House</p>
          <p class="text-body-2">{{ $t('layout.footer.description') }}</p>
        </v-col>
        <v-col cols="12" lg="4" :class="!$vuetify.display.smAndDown ? 'px-8' : ''">
          <p class="text-h5 mb-4">{{ $t('layout.footer.reachOut') }}</p>
          <p class="text-body-2">
            Email: <a href="mailto:hillluxuryhouse@gmail.com" class="text-white">hillluxuryhouse@gmail.com</a><br/>
            Tel: <a href="tel:+38169635632" class="text-white">069 635632</a><br/>
            Varovničkih ratnika, Šepšin, Serbia
          </p>
        </v-col>
        <v-col cols="12" lg="4" :class="!$vuetify.display.smAndDown ? 'pl-8' : ''">
          <p class="text-h5 mb-4">{{ $t('layout.footer.stayConnected') }}</p>
          <v-row no-gutters>
            <a class="mr-4" rel="noopener" href="https://www.instagram.com/hill_luxury_house/" target="_blank">
              <v-icon color="#fff" :icon="mdiInstagram" size="22px"></v-icon>
            </a>
            <a class="mr-4" rel="noopener" href="mailto:hillluxuryhouse@gmail.com" target="_blank">
              <v-icon color="#fff" :icon="mdiEmail" size="22px"></v-icon>
            </a>
          </v-row>
        </v-col>
      </v-row>
      <v-divider :class="!$vuetify.display.smAndDown ? 'my-12' : 'my-6'"></v-divider>
      <v-row
          :class="!$vuetify.display.smAndDown ? '' : 'flex-column'"
          :justify="!$vuetify.display.smAndDown ? 'space-between' : 'center'"
          align="center"
          class="px-2">
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
        <span
            class="text-body-2"
            :class="!$vuetify.display.smAndDown ? '' : 'mt-4'">
          Copyright © <a href="https://miloshpetrovic.com" target="_blank" class="text-primary">Enigma IT</a>. {{ $t('layout.footer.copyright') }}.
        </span>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script setup>
import {mdiFacebook, mdiInstagram, mdiEmail, mdiYoutube} from "@mdi/js";
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