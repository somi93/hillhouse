<template>
  <section class="vcp-section" :aria-label="promoLabel">
    <v-container>
      <div class="content-shell">
        <div class="section-copy section-copy--centered vcp-header">
          <p class="section-eyebrow vcp-header__eyebrow">{{ t('home.redesign.villaCardPromo.eyebrow') }}</p>
          <h2 class="vcp-header__title">{{ t('home.redesign.villaCardPromo.title') }}</h2>
        </div>

        <article class="vcp-card">
          <div class="vcp-card__image-side">
            <v-img
              :src="villaData.images.card"
              :alt="t(`home.redesign.villaCards.${villa}.imageAlt`)"
              aspect-ratio="1.25"
              cover
              class="vcp-card__image"
            />
            <div class="vcp-card__image-overlay" aria-hidden="true"></div>
          </div>

          <div class="vcp-card__content-side">
            <p class="vcp-card__eyebrow">{{ t(`home.redesign.villaCards.${villa}.eyebrow`) }}</p>
            <h3 class="vcp-card__name">{{ villaData.name }}</h3>
            <ul class="vcp-card__features">
              <li v-for="f in features" :key="f" class="vcp-card__feature">
                <span class="vcp-card__dot" aria-hidden="true"></span>{{ f }}
              </li>
            </ul>
            <p class="vcp-card__price">
              <span class="vcp-card__price-from">{{ t('home.redesign.villaCards.from') }}</span>
              <span class="vcp-card__price-value">{{ t(`home.redesign.villaCards.${villa}.price`) }}</span>
            </p>
            <NuxtLink :to="localePath(villaData.slug)" class="vcp-cta">
              {{ t('home.redesign.villaCardPromo.cta') }}
              <span aria-hidden="true"> →</span>
            </NuxtLink>
          </div>
        </article>
      </div>
    </v-container>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const props = defineProps({
  villa: {
    type: String,
    required: true,
    validator: (v) => ['hh1', 'hh2'].includes(v),
  },
})

const { t } = useI18n({ useScope: 'global' })
const localePath = useLocalePath()
const villaData = useVilla(props.villa)

const features = computed(() => [
  t(`home.redesign.villaCards.${props.villa}.feature1`),
  t(`home.redesign.villaCards.${props.villa}.feature2`),
  t(`home.redesign.villaCards.${props.villa}.feature3`),
  t(`home.redesign.villaCards.${props.villa}.feature4`),
])

const promoLabel = computed(() =>
  t(`home.redesign.sisterVilla.${props.villa}.ariaLabel`)
)
</script>

<style scoped>
/* ─── Section ──────────────────────────────────────────────── */
.vcp-section {
  padding: 100px 0 112px;
  background:
    radial-gradient(circle at top left, rgba(207, 169, 117, 0.12), transparent 24%),
    linear-gradient(180deg, #f7f1ea 0%, #efe4d6 100%);
}

/* ─── Header ───────────────────────────────────────────────── */
.vcp-header {
  margin-bottom: 52px;
}

.vcp-header__eyebrow {
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: #cfa975;
  margin-bottom: 12px;
}

.vcp-header__title {
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-size: clamp(1.8rem, 2.6vw, 2.5rem);
  font-weight: 300;
  color: #241d18;
  letter-spacing: 0.01em;
  line-height: 1.15;
  margin: 0 auto;
  max-width: 14ch;
  text-align: center;
}

/* ─── Card ─────────────────────────────────────────────────── */
.vcp-card {
  display: grid;
  grid-template-columns: 55% 1fr;
  overflow: hidden;
  border: 1px solid rgba(117, 89, 52, 0.14);
  background: rgba(255, 251, 246, 0.88);
  transition: border-color 0.3s ease;
}

.vcp-card:hover {
  border-color: rgba(207, 169, 117, 0.42);
}

/* Image side */
.vcp-card__image-side {
  position: relative;
  overflow: hidden;
  min-height: 340px;
}

.vcp-card__image {
  height: 100%;
  transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.vcp-card:hover .vcp-card__image { transform: scale(1.04); }

.vcp-card__image-overlay {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

/* Content side */
.vcp-card__content-side {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 44px 48px;
}

.vcp-card__eyebrow {
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: #cfa975;
  margin-bottom: 10px;
}

.vcp-card__name {
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-size: clamp(2rem, 2.8vw, 2.8rem);
  font-weight: 300;
  color: #241d18;
  letter-spacing: 0.01em;
  line-height: 1.1;
  margin-bottom: 24px;
}

/* Features */
.vcp-card__features {
  list-style: none;
  padding: 0;
  margin: 0 0 28px;
  display: flex;
  flex-direction: column;
  gap: 9px;
}

.vcp-card__feature {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 0.875rem;
  color: rgba(36, 29, 24, 0.72);
  line-height: 1.4;
}

.vcp-card__dot {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: #cfa975;
  flex-shrink: 0;
}

/* Price */
.vcp-card__price {
  display: flex;
  align-items: baseline;
  gap: 6px;
  margin-bottom: 32px;
}

.vcp-card__price-from {
  font-size: 0.75rem;
  letter-spacing: 0.06em;
  color: rgba(36, 29, 24, 0.42);
  text-transform: uppercase;
}

.vcp-card__price-value {
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-size: 1.5rem;
  font-weight: 500;
  color: #cfa975;
  letter-spacing: 0.02em;
}

/* CTA */
.vcp-cta {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 13px 28px;
  background: #241d18;
  border: 1px solid rgba(207, 169, 117, 0.55);
  color: #f5ecdf;
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  text-decoration: none;
  transition: background 0.25s ease, border-color 0.25s ease, color 0.25s ease;
  align-self: flex-start;
}

.vcp-cta:hover {
  background: #cfa975;
  border-color: #cfa975;
  color: #1a1714;
}

/* ─── Responsive ───────────────────────────────────────────── */
@media (max-width: 959px) {
  .vcp-card {
    grid-template-columns: 1fr;
  }

  .vcp-card__image-side {
    min-height: 260px;
  }


  .vcp-card__content-side {
    padding: 36px 32px 40px;
  }
}

@media (max-width: 599px) {
  .vcp-section {
    padding: 72px 0 80px;
  }

  .vcp-card__content-side {
    padding: 28px 24px 32px;
  }

  .vcp-card__image-side {
    min-height: 220px;
  }
}
</style>
