<template>
  <section class="villa-cards-section">
    <v-container>
      <div class="content-shell">
        <div class="section-copy section-copy--centered vc-header">
          <p class="section-eyebrow">{{ t('home.redesign.villaCards.eyebrow') }}</p>
          <h2 class="section-title section-title--dark vc-header__title">
            {{ t('home.redesign.villaCards.title') }}
          </h2>
        </div>

        <div class="vc-grid">
          <article v-for="villa in villas" :key="villa.id" class="vc-card">
            <div class="vc-card__image-wrap">
              <v-img
                :src="villa.images.card"
                :alt="t(`home.redesign.villaCards.${villa.id}.imageAlt`)"
                aspect-ratio="1.42"
                cover
                class="vc-card__image"
              />
              <div class="vc-card__image-overlay"></div>
            </div>
            <div class="vc-card__body">
              <p class="vc-card__eyebrow">{{ t(`home.redesign.villaCards.${villa.id}.eyebrow`) }}</p>
              <h3 class="vc-card__name">{{ villa.name }}</h3>
              <ul class="vc-card__features">
                <li v-for="f in getFeatures(villa.id)" :key="f" class="vc-card__feature">
                  <span class="vc-card__dot" aria-hidden="true"></span>{{ f }}
                </li>
              </ul>
              <div class="vc-card__footer">
                <p class="vc-card__price">
                  <span class="vc-card__price-from">{{ t('home.redesign.villaCards.from') }}</span>
                  <span class="vc-card__price-value">{{ t(`home.redesign.villaCards.${villa.id}.price`) }}</span>
                </p>
                <NuxtLink :to="localePath(villa.slug)" class="vc-card__cta">
                  {{ t('home.redesign.villaCards.cta') }}
                  <span class="vc-card__arr" aria-hidden="true">→</span>
                </NuxtLink>
              </div>
            </div>
          </article>
        </div>
      </div>
    </v-container>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n({ useScope: 'global' })
const localePath = useLocalePath()
const villas = useVillas()

function getFeatures (id) {
  return [1, 2, 3, 4].map(n => t(`home.redesign.villaCards.${id}.feature${n}`))
}
</script>

<style scoped>
/* ─── Section ────────────────────────────────────────────────── */
.villa-cards-section {
  padding: 108px 0 120px;
  background: #f9f7f4;
}

.vc-header { margin-bottom: 56px; }
.vc-header__title { max-width: 34ch; }

/* ─── Grid ───────────────────────────────────────────────────── */
.vc-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 28px;
}

@media (max-width: 767px) {
  .vc-grid { grid-template-columns: 1fr; gap: 24px; }
  .villa-cards-section { padding: 72px 0 80px; }
}

/* ─── Card ───────────────────────────────────────────────────── */
.vc-card {
  background: #fff;
  border: 1px solid rgba(0, 0, 0, 0.06);
  overflow: hidden;
  transition: box-shadow 0.3s ease, transform 0.3s ease;
}

.vc-card:hover {
  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.11);
  transform: translateY(-3px);
}

/* Image */
.vc-card__image-wrap {
  position: relative;
  overflow: hidden;
}

.vc-card__image {
  transition: transform 0.7s cubic-bezier(0.4, 0, 0.2, 1);
}

.vc-card:hover .vc-card__image { transform: scale(1.04); }

.vc-card__image-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(15, 13, 12, 0.18), transparent 50%);
  pointer-events: none;
}

/* Body */
.vc-card__body {
  padding: 28px 32px 32px;
}

.vc-card__eyebrow {
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: #cfa975;
  margin-bottom: 8px;
}

.vc-card__name {
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-size: clamp(1.9rem, 2.4vw, 2.6rem);
  font-weight: 300;
  color: #1a1714;
  letter-spacing: 0.01em;
  line-height: 1.1;
  margin-bottom: 20px;
}

/* Feature list */
.vc-card__features {
  list-style: none;
  padding: 0;
  margin: 0 0 24px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.vc-card__feature {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 0.875rem;
  color: rgba(26, 23, 20, 0.72);
  line-height: 1.4;
}

.vc-card__dot {
  flex-shrink: 0;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: #cfa975;
}

/* Footer */
.vc-card__footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 20px;
  border-top: 1px solid rgba(0, 0, 0, 0.07);
  gap: 16px;
}

.vc-card__price {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.vc-card__price-from {
  font-size: 10px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: rgba(26, 23, 20, 0.44);
}

.vc-card__price-value {
  font-size: 1.05rem;
  font-weight: 600;
  color: #1a1714;
  letter-spacing: 0.01em;
}

.vc-card__cta {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #cfa975;
  text-decoration: none;
  border-bottom: 1px solid rgba(207, 169, 117, 0.4);
  padding-bottom: 2px;
  white-space: nowrap;
  transition: border-color 0.2s ease;
}

.vc-card__cta:hover { border-color: #cfa975; }

.vc-card__arr {
  transition: transform 0.25s ease;
}

.vc-card__cta:hover .vc-card__arr { transform: translateX(4px); }
</style>
