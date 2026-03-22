<template>
  <section id="videoBox" class="villa-hero">
    <div class="villa-hero__bg" :class="`villa-hero__bg--${villa}`"></div>
    <div class="villa-hero__overlay"></div>
    <div class="villa-hero__gradient"></div>

    <v-container class="villa-hero__container d-flex align-center">
      <div class="content-shell">
        <div class="villa-hero__copy">
          <p class="section-eyebrow section-eyebrow--light">
            {{ t(`home.redesign.villaHero.${villa}.eyebrow`) }}
          </p>
          <h1 class="villa-hero__title">
            {{ t(`home.redesign.villaHero.${villa}.title`) }}
          </h1>
          <p class="villa-hero__subtitle">
            {{ t(`home.redesign.villaHero.${villa}.subtitle`) }}
          </p>

          <div class="villa-hero__actions d-flex flex-wrap align-center ga-4 mt-8">
            <v-btn
              color="primary"
              class="btn-reserve villa-hero__primary"
              flat
              height="52px"
              href="tel:+38169635632"
              rel="noopener"
              target="_blank"
            >
              {{ t('home.redesign.villaHero.primaryCta') }}
            </v-btn>
            <v-btn
              :to="localePath('/pricing')"
              variant="outlined"
              class="villa-hero__secondary"
              height="52px"
            >
              {{ t('home.redesign.villaHero.secondaryCta') }}
            </v-btn>
          </div>
        </div>
      </div>
    </v-container>

    <div class="villa-hero__trust-wrap">
      <v-container>
        <div class="content-shell">
          <v-row class="villa-hero__trust-grid" no-gutters>
            <v-col
              v-for="(item, index) in trustItems"
              :key="item"
              cols="12"
              sm="6"
              md="3"
              class="villa-hero__trust-col"
            >
              <v-sheet class="trust-tile d-flex flex-column justify-end" rounded="0">
                <span class="trust-tile__index">0{{ index + 1 }}</span>
                <p class="trust-tile__text mb-0">{{ item }}</p>
              </v-sheet>
            </v-col>
          </v-row>
        </div>
      </v-container>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const props = defineProps({
  villa: {
    type: String,
    required: true, // 'hh1' | 'hh2'
  },
})

const { t } = useI18n({ useScope: 'global' })
const localePath = useLocalePath()

const trustItems = computed(() => [
  t(`home.redesign.villaHero.${props.villa}.trust1`),
  t(`home.redesign.villaHero.${props.villa}.trust2`),
  t(`home.redesign.villaHero.${props.villa}.trust3`),
  t(`home.redesign.villaHero.${props.villa}.trust4`),
])
</script>

<style scoped>
/* ─── Section ────────────────────────────────────────────────── */
.villa-hero {
  position: relative;
  overflow: hidden;
  margin-top: -104px;
}

/* ─── Background image ───────────────────────────────────────── */
.villa-hero__bg {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  z-index: 0;
}

.villa-hero__bg--hh1 {
  background-image: url('/hillhouse/media/images/gallery/professional/vila-prestige-hill-15-1920x1438.jpeg');
}

.villa-hero__bg--hh2 {
  background-image: url('/hillhouse2/media/images/landing.jpg');
}

/* ─── Overlays ───────────────────────────────────────────────── */
.villa-hero__overlay,
.villa-hero__gradient {
  position: absolute;
  inset: 0;
  z-index: 2;
}

.villa-hero__overlay {
  background: rgba(0, 0, 0, 0.38);
}

.villa-hero__gradient {
  background: linear-gradient(
    90deg,
    rgba(10, 10, 10, 0.82) 0%,
    rgba(10, 10, 10, 0.5) 34%,
    rgba(10, 10, 10, 0.16) 68%,
    rgba(10, 10, 10, 0.08) 100%
  );
}

/* ─── Container ──────────────────────────────────────────────── */
.villa-hero__container {
  position: relative;
  z-index: 3;
  min-height: 100svh;
}

.villa-hero__container :deep(.v-container__content) {
  width: 100%;
}

/* ─── Copy ───────────────────────────────────────────────────── */
.villa-hero__copy {
  max-width: 1100px;
  padding: 146px 0 220px;
  padding-left: 34px;
  position: relative;
}

.villa-hero__copy::before {
  content: '';
  position: absolute;
  left: 0;
  top: 152px;
  width: 2px;
  height: 168px;
  background: linear-gradient(
    180deg,
    rgba(207, 169, 117, 0.95) 0%,
    rgba(207, 169, 117, 0.16) 100%
  );
}

.section-eyebrow--light {
  color: rgba(214, 188, 149, 0.9);
  margin-bottom: 22px;
}

.villa-hero__title {
  font-family: 'Cormorant Garamond', Georgia, serif;
  color: #fff;
  font-size: clamp(3rem, 5vw, 5.4rem);
  line-height: 0.94;
  max-width: 18ch;
  margin-bottom: 28px;
  text-wrap: balance;
  font-weight: 300;
}

.villa-hero__subtitle {
  color: rgba(255, 255, 255, 0.84);
  font-size: clamp(1rem, 1.15vw, 1.1rem);
  line-height: 1.74;
  max-width: 54ch;
}

.villa-hero__primary {
  min-width: 214px;
  padding: 0 28px;
  letter-spacing: 0.08em;
}

.villa-hero__secondary {
  min-width: 168px;
  border: 1px solid rgba(255, 255, 255, 0.28);
  color: rgba(255, 255, 255, 0.86);
  text-transform: none;
  backdrop-filter: blur(8px);
  background: rgba(18, 18, 18, 0.06);
  letter-spacing: 0.03em;
}

.villa-hero__secondary:hover {
  background: rgba(18, 18, 18, 0.16);
  border-color: rgba(255, 255, 255, 0.4);
}

/* ─── Trust tiles ────────────────────────────────────────────── */
.villa-hero__trust-wrap {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 24px;
  z-index: 3;
}

.villa-hero__trust-grid {
  margin: 0 -6px;
}

.villa-hero__trust-col {
  padding: 0 6px;
  margin-top: 12px;
}

.trust-tile {
  padding: 15px 18px;
  border: 1px solid rgba(255, 255, 255, 0.06);
  background: linear-gradient(
    180deg,
    rgba(14, 14, 14, 0.46) 0%,
    rgba(14, 14, 14, 0.34) 100%
  );
  backdrop-filter: blur(10px);
  min-height: 84px;
  color: #fff;
}

.trust-tile__index {
  display: block;
  color: var(--brand-gold);
  font-size: 0.68rem;
  letter-spacing: 0.24em;
  margin-bottom: 10px;
}

.trust-tile__text {
  color: rgba(255, 255, 255, 0.88);
  font-size: 0.9rem;
  line-height: 1.32;
}

/* ─── Tablet ─────────────────────────────────────────────────── */
@media (max-width: 1366px) and (min-width: 961px) {
  .villa-hero__copy {
    max-width: 760px;
    padding: 118px 0 132px;
    padding-left: 22px;
  }

  .villa-hero__copy::before {
    top: 122px;
    height: 118px;
  }

  .villa-hero__title {
    font-size: clamp(2.55rem, 3.85vw, 4.05rem);
    max-width: 10ch;
    margin-bottom: 18px;
  }

  .villa-hero__subtitle {
    max-width: 44ch;
    font-size: 0.98rem;
    line-height: 1.58;
  }

  .villa-hero__trust-wrap { bottom: 10px; }

  .trust-tile {
    min-height: 68px;
    padding: 12px 13px;
  }

  .trust-tile__index { margin-bottom: 8px; }
  .trust-tile__text { font-size: 0.78rem; line-height: 1.26; }
}

/* ─── Mobile ─────────────────────────────────────────────────── */
@media (max-width: 767px) {
  .villa-hero {
    margin-top: -84px;
  }

  .villa-hero__copy {
    padding: 112px 0 180px;
    padding-left: 22px;
  }

  .villa-hero__copy::before {
    top: 118px;
    height: 80px;
  }

  .villa-hero__title { font-size: 2.6rem; }

  .villa-hero__trust-wrap { bottom: 0; }

  .trust-tile { min-height: 64px; padding: 10px 12px; }
}
</style>
