<template>
  <section
    id="videoBox"
    class="villa-selector"
    :aria-label="t('home.redesign.selector.ariaLabel')"
  >
    <h1 class="sr-only">{{ t('home.redesign.hero.title') }}</h1>
    <template v-for="(villa, i) in villas" :key="villa.id">
      <article
        class="vs-panel"
        :class="{ 'vs-panel--active': hovered === villa.id }"
        @mouseenter="hovered = villa.id"
        @mouseleave="hovered = null"
      >
        <div
          class="vs-panel__bg"
          :style="{
            backgroundImage: `url(${villa.images.selectorCard ?? villa.images.card})`,
            backgroundSize: villa.images.selectorCard ? '200% 100%' : 'cover',
            backgroundPosition: villa.images.selectorCard
              ? (villa.flip ? '100% 50%' : '0% 50%')
              : 'center center',
          }"
        ></div>
        <div class="vs-panel__overlay"></div>
        <div class="vs-panel__content" :class="{ 'vs-panel__content--flip': villa.flip }">
          <p class="vs-eyebrow">{{ t('home.redesign.selector.eyebrow') }}</p>
          <h2 class="vs-name">{{ villa.name }}</h2>
          <p class="vs-meta">
            <span>{{ t(`home.redesign.selector.${villa.id}.capacity`) }}</span>
            <span class="vs-dot">·</span>
            <span>{{ t(`home.redesign.selector.${villa.id}.price`) }}</span>
          </p>
          <NuxtLink :to="localePath(villa.slug)" class="vs-cta">
            {{ t('home.redesign.selector.cta') }}<span class="vs-cta__arr"> →</span>
          </NuxtLink>
        </div>
      </article>
    </template>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n({ useScope: 'global' })
const localePath = useLocalePath()
const hovered = ref(null)
const villas = useVillas()
</script>

<style scoped>
/* ─── Layout ─────────────────────────────────────────────────── */
.villa-selector {
  display: flex;
  gap: 50px;
  background: #fff;
  /* Fill entire viewport including behind the transparent header */
  height: 100svh;
  min-height: 560px;
  overflow: hidden;
  margin-top: -104px;
}

@media (max-width: 767px) {
  .villa-selector {
    margin-top: -84px;
    height: auto;
  }
}

/* ─── Panels ─────────────────────────────────────────────────── */
.vs-panel {
  flex: 1;
  position: relative;
  overflow: hidden;
  transition: flex 0.85s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
}

.vs-panel--active { flex: 1; }

/* Background */
.vs-panel__bg {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  transition: transform 0.85s cubic-bezier(0.4, 0, 0.2, 1);
}

.vs-panel__bg { transform: scale(1.04); }
.vs-panel--active .vs-panel__bg { transform: scale(1); }

/* image paths driven via :style in template — update in composables/useVillas.js */

/* Base tint + corner vignette in one layer */
.vs-panel__overlay {
  position: absolute;
  inset: 0;
  background:
    /* Base: uniform tint across entire image */
    linear-gradient(rgba(8, 6, 5, 0.22), rgba(8, 6, 5, 0.22)),
    /* Vignette: wider transparent centre, lighter edges */
    radial-gradient(
      ellipse 82% 74% at 50% 50%,
      transparent          0%,
      rgba(8, 6, 5, 0.07)  48%,
      rgba(8, 6, 5, 0.45)  74%,
      rgba(8, 6, 5, 0.82) 100%
    );
  transition: opacity 0.5s ease;
}

.vs-panel--active .vs-panel__overlay {
  opacity: 0.78;
}

/* Edge elements no longer needed — vignette handles the centre join */
.vs-panel__edge { display: none; }

/* ─── Content ────────────────────────────────────────────────── */
.vs-panel__content {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 60px 56px;
  /* No extra gradient needed — vignette already darkens the bottom */
  background: transparent;
  z-index: 2;
}

/* Right panel flips alignment to create symmetric layout */
.vs-panel__content--flip {
  text-align: right;
}

.vs-eyebrow {
  font-size: 10.5px;
  font-weight: 500;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: #cfa975;
  margin-bottom: 12px;
}

.vs-name {
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-size: clamp(2.4rem, 3.6vw, 3.9rem);
  font-weight: 300;
  color: #f5f0e8;
  letter-spacing: 0.02em;
  line-height: 1.05;
  margin-bottom: 14px;
}

.vs-meta {
  font-size: 13px;
  color: rgba(245, 240, 232, 0.62);
  letter-spacing: 0.05em;
  margin-bottom: 28px;
  display: flex;
  align-items: center;
  gap: 10px;
}

.vs-panel__content--flip .vs-meta {
  justify-content: flex-end;
}

.vs-dot {
  color: #cfa975;
  font-size: 20px;
  line-height: 0;
  position: relative;
  top: 2px;
}

.vs-cta {
  display: inline-flex;
  align-items: center;
  font-size: 11.5px;
  font-weight: 500;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #cfa975;
  text-decoration: none;
  border-bottom: 1px solid rgba(207, 169, 117, 0.35);
  padding-bottom: 3px;
  transition: border-color 0.25s ease;
}

.vs-cta:hover {
  border-color: #cfa975;
}

.vs-cta__arr {
  display: inline-block;
  transition: transform 0.3s ease;
}

.vs-cta:hover .vs-cta__arr {
  transform: translateX(5px);
}

/* ─── Touch / no-hover devices ───────────────────────────────── */
@media (hover: none) {
  .vs-panel { flex: 1 !important; }
  .vs-panel__bg { transform: none !important; }
  .vs-panel__overlay { background: rgba(8, 6, 5, 0.45) !important; }
}

/* ─── Mobile ─────────────────────────────────────────────────── */
@media (max-width: 767px) {
  .villa-selector {
    flex-direction: column;
    gap: 0;
    height: auto;
    max-height: none;
  }

  .vs-panel {
    flex: none !important;
    height: 50svh;
    min-height: 300px;
  }

  .vs-panel__content,
  .vs-panel__content--flip {
    padding: 32px 24px;
    text-align: left;
  }

  .vs-meta,
  .vs-panel__content--flip .vs-meta {
    justify-content: flex-start;
  }

  .vs-name { font-size: 2.1rem; }

  .vs-panel__edge--right,
  .vs-panel__edge--left { display: none; }
}

/* ─── Tablet landscape ───────────────────────────────────────── */
@media (min-width: 768px) and (max-width: 1199px) {
  .vs-panel__content { padding: 44px 40px; }
  .vs-name { font-size: 2.9rem; }
}
</style>
