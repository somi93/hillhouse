<template>
  <section id="utilities" class="occasion-scenarios">
    <v-container>
      <div class="content-shell">
        <div class="section-copy section-copy--centered">
          <p class="section-eyebrow section-eyebrow--light">{{ t('home.redesign.occasions.eyebrow') }}</p>
          <h2 class="section-title section-title--light">
            {{ t('home.redesign.occasions.title') }}
          </h2>
          <p class="section-text section-text--light section-text--wide">
            {{ t('home.redesign.occasions.description') }}
          </p>
        </div>

        <div class="occasion-grid">
          <article v-for="occasion in occasions" :key="occasion.number" class="occasion-card">
            <span class="occasion-card__number">{{ occasion.number }}</span>
            <h3 class="occasion-card__title">{{ occasion.title }}</h3>
            <p class="occasion-card__text">{{ occasion.text }}</p>
          </article>
        </div>
      </div>
    </v-container>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n({ useScope: 'global' })

const occasions = computed(() => [
  { number: '01', title: t('home.redesign.occasions.item1Title'), text: t('home.redesign.occasions.item1Text') },
  { number: '02', title: t('home.redesign.occasions.item2Title'), text: t('home.redesign.occasions.item2Text') },
  { number: '03', title: t('home.redesign.occasions.item3Title'), text: t('home.redesign.occasions.item3Text') },
  { number: '04', title: t('home.redesign.occasions.item4Title'), text: t('home.redesign.occasions.item4Text') },
])
</script>

<style scoped>
.occasion-scenarios {
  padding: 132px 0;
  background:
    radial-gradient(circle at top left, rgba(207, 169, 117, 0.18), transparent 28%),
    linear-gradient(180deg, #171412 0%, #0f0d0c 100%);
}

.occasion-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 20px;
}

.occasion-card {
  padding: 34px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  min-height: 220px;
}

.occasion-card__number {
  display: block;
  color: var(--brand-gold);
  font-family: var(--font-heading);
  font-size: 2rem;
  margin-bottom: 18px;
}

.occasion-card__title {
  color: #fff;
  font-size: 1.72rem;
  line-height: 1.1;
  margin-bottom: 14px;
  max-width: 25ch;
}

.occasion-card__text {
  color: rgba(255, 255, 255, 0.74);
  line-height: 1.75;
}

@media (max-width: 640px) {
  .occasion-grid {
    grid-template-columns: 1fr;
  }

  .occasion-card {
    padding: 24px;
  }
}
</style>