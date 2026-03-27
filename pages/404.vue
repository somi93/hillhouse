<template>
  <v-container style="min-height: 400px;padding: 140px 0;" class="text-center">
    <h1>404 - {{ $t('layout.notFound.title') }}</h1>
    <p>{{ $t('layout.notFound.description') }}</p>
    <h3 class="mt-5">{{ $t('layout.notFound.subtitle') }}</h3>
    <ul>
      <li>{{ $t('layout.notFound.item1') }}</li>
      <li>{{ $t('layout.notFound.item2') }}
        <router-link class="text-primary" :to="localePath('/')">{{$t('layout.notFound.here')}}</router-link>
        {{ $t('layout.notFound.item3') }}
      </li>
      <li>{{ $t('layout.notFound.item4') }}</li>
    </ul>
  </v-container>
</template>

<script setup>
import { useSeoPage } from '@/composables/useSeo'

const localePath = useLocalePath()

useSeoPage({
  path: '/404',
  title: {
    sr: '404 | Stranica nije pronađena',
    en: '404 | Page not found',
  },
  description: {
    sr: 'Tražena stranica ne postoji ili je premeštena.',
    en: 'The requested page does not exist or has been moved.',
  },
  noindex: true,
  canonical: false,
  alternates: false,
})
</script>

<style scope>
ul{
  list-style-type: none;
}
</style>