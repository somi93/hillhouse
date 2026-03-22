<template>
  <div class="sister-villa-strip">
    <v-container>
      <div class="content-shell">
        <NuxtLink
          class="sister-villa-strip__inner"
          :to="href"
          :aria-label="t(`home.redesign.sisterVilla.${target}.ariaLabel`)"
        >
          <span class="sister-villa-strip__eyebrow">{{ t('home.redesign.sisterVilla.eyebrow') }}</span>
          <span class="sister-villa-strip__divider" aria-hidden="true"></span>
          <span class="sister-villa-strip__title">{{ t(`home.redesign.sisterVilla.${target}.title`) }}</span>
          <span class="sister-villa-strip__cta">
            {{ t(`home.redesign.sisterVilla.${target}.cta`) }}
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" class="sister-villa-strip__arrow">
              <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </span>
        </NuxtLink>
      </div>
    </v-container>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const props = defineProps({
  target: {
    type: String,
    default: 'hh2', // 'hh1' | 'hh2'
  },
})

const { t } = useI18n({ useScope: 'global' })
const localePath = useLocalePath()

const href = computed(() =>
  props.target === 'hh1' ? localePath('/hill-house-1') : localePath('/hill-house-2')
)
</script>

<style scoped>
.sister-villa-strip {
  background: #0f0d0c;
  border-top: 1px solid rgba(178, 140, 89, 0.25);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.sister-villa-strip__inner {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px 0;
  text-decoration: none;
  cursor: pointer;
  transition: opacity 0.2s ease;
}

.sister-villa-strip__inner:hover {
  opacity: 0.8;
}

.sister-villa-strip__eyebrow {
  font-family: 'Inter', sans-serif;
  font-size: 0.62rem;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--brand-gold);
  white-space: nowrap;
  flex-shrink: 0;
}

.sister-villa-strip__divider {
  width: 1px;
  height: 14px;
  background: rgba(255, 255, 255, 0.15);
  flex-shrink: 0;
}

.sister-villa-strip__title {
  font-family: 'Inter', sans-serif;
  font-size: 0.82rem;
  color: rgba(255, 255, 255, 0.78);
  font-weight: 400;
  flex: 1;
  min-width: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.sister-villa-strip__cta {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-family: 'Inter', sans-serif;
  font-size: 0.78rem;
  font-weight: 600;
  color: var(--brand-gold);
  white-space: nowrap;
  flex-shrink: 0;
  letter-spacing: 0.02em;
}

.sister-villa-strip__arrow {
  transition: transform 0.2s ease;
}

.sister-villa-strip__inner:hover .sister-villa-strip__arrow {
  transform: translateX(3px);
}

@media (max-width: 479px) {
  .sister-villa-strip__title {
    display: none;
  }
  .sister-villa-strip__divider {
    display: none;
  }
}
</style>
