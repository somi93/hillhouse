<template>
  <section id="videoBox" class="hero-manifesto">
    <desktop-video v-if="$device.isDesktop"></desktop-video>
    <mobile-video v-else></mobile-video>
    <div class="hero-manifesto__overlay"></div>
    <div class="hero-manifesto__gradient"></div>


    <v-container class="hero-manifesto__container d-flex align-center">
      <div class="content-shell">
        <div class="hero-manifesto__copy">
          <p class="section-eyebrow section-eyebrow--light">
            {{ t("home.redesign.hero.eyebrow") }}
          </p>
          <h1 class="hero-manifesto__title">
            {{ t("home.redesign.hero.title") }}
          </h1>
          <p class="hero-manifesto__subtitle">
            {{ t("home.redesign.hero.subtitle") }}
          </p>

          <div class="hero-manifesto__actions d-flex flex-wrap align-center ga-4 mt-8">
            <v-btn
              color="primary"
              class="btn-reserve hero-manifesto__primary"
              flat
              height="52px"
              href="tel:+38169635632"
              rel="noopener"
              target="_blank"
            >
              {{ t("home.redesign.hero.primaryCta") }}
            </v-btn>
            <v-btn
              :to="{ name: 'gallery' }"
              variant="outlined"
              class="hero-manifesto__secondary"
              height="52px"
            >
              {{ t("home.redesign.hero.secondaryCta") }}
            </v-btn>
          </div>
        </div>
      </div>
    </v-container>

    <div class="hero-manifesto__trust-wrap">
      <div class="content-shell">
        <v-row class="hero-manifesto__trust-grid" no-gutters>
          <v-col
            v-for="(item, index) in trustItems"
            :key="item"
            cols="12"
            sm="6"
            lg="3"
            class="hero-manifesto__trust-col"
          >
            <v-sheet class="trust-tile d-flex flex-column justify-end" rounded="0">
              <span class="trust-tile__index">0{{ index + 1 }}</span>
              <p class="trust-tile__text mb-0">{{ item }}</p>
            </v-sheet>
          </v-col>
        </v-row>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from "vue";
import { useI18n } from "vue-i18n";
import DesktopVideo from "../videos/desktop";
import MobileVideo from "../videos/mobile";

const { t } = useI18n({ useScope: "global" });

const trustItems = computed(() => [
  t("home.redesign.hero.trust1"),
  t("home.redesign.hero.trust2"),
  t("home.redesign.hero.trust3"),
  t("home.redesign.hero.trust4"),
]);
</script>

<style scoped>
.hero-manifesto {
  position: relative;
  min-height: 100vh;
  margin-top: calc(-1 * var(--header-height-desktop));
  overflow: hidden;
  background: #111;
}

.hero-manifesto :deep(.responsive-video-box),
.hero-manifesto :deep(.responsive-video),
.hero-manifesto :deep(video) {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hero-manifesto :deep(.responsive-video-box) {
  height: 100%;
}

.hero-manifesto__overlay,
.hero-manifesto__gradient {
  position: absolute;
  inset: 0;
  z-index: 2;
}

.hero-manifesto__overlay {
  background: rgba(0, 0, 0, 0.38);
}

.hero-manifesto__gradient {
  background: linear-gradient(
    90deg,
    rgba(10, 10, 10, 0.82) 0%,
    rgba(10, 10, 10, 0.5) 34%,
    rgba(10, 10, 10, 0.16) 68%,
    rgba(10, 10, 10, 0.08) 100%
  );
}

.hero-manifesto__container {
  position: relative;
  z-index: 3;
  min-height: 100vh;
}

.hero-manifesto__copy {
  max-width: 1100px;
  padding: 146px 0 220px;
  padding-left: 34px;
  position: relative;
}

.hero-manifesto__copy:before {
  content: "";
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

.hero-manifesto__title {
  color: #fff;
  font-size: clamp(3rem, 5vw, 5.4rem);
  line-height: 0.94;
  max-width: 18ch;
  margin-bottom: 28px;
  text-wrap: balance;
}

.hero-manifesto__subtitle {
  color: rgba(255, 255, 255, 0.84);
  font-size: clamp(1rem, 1.15vw, 1.1rem);
  line-height: 1.74;
  max-width: 54ch;
}

.hero-manifesto__actions {
  margin-top: 38px !important;
}

.hero-manifesto__primary {
  min-width: 214px;
  padding: 0 28px;
  letter-spacing: 0.08em;
}

.hero-manifesto__secondary {
  min-width: 168px;
  border: 1px solid rgba(255, 255, 255, 0.28);
  color: rgba(255, 255, 255, 0.86);
  text-transform: none;
  backdrop-filter: blur(8px);
  background: rgba(18, 18, 18, 0.06);
  letter-spacing: 0.03em;
}

.hero-manifesto__secondary:hover {
  background: rgba(18, 18, 18, 0.16);
  border-color: rgba(255, 255, 255, 0.4);
}

.hero-manifesto__trust-wrap {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 24px;
  z-index: 3;
}

.hero-manifesto__trust-grid {
  margin: 0 -6px;
}

.hero-manifesto__trust-col {
  padding: 0 6px;
  margin-top: 12px;
}

.trust-tile {
  padding: 15px 18px;
  border: 1px solid rgba(255, 255, 255, 0.06);
  background: linear-gradient(180deg, rgba(14, 14, 14, 0.46) 0%, rgba(14, 14, 14, 0.34) 100%);
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

@media (max-width: 960px) {
  .hero-manifesto__copy {
    max-width: 760px;
    padding: 136px 0 206px;
    padding-left: 0;
  }

  .hero-manifesto__subtitle {
    max-width: 44ch;
  }

  .hero-manifesto__copy:before {
    display: none;
  }
}

@media (max-width: 640px) {
  .hero-manifesto {
    margin-top: calc(-1 * var(--header-height-mobile));
  }

  .hero-manifesto__copy {
    max-width: 100%;
    padding: 120px 0 228px;
  }

  .hero-manifesto__actions {
    margin-top: 30px !important;
  }

  .hero-manifesto__primary,
  .hero-manifesto__secondary {
    min-width: 0;
    width: 220px;
  }

  .hero-manifesto__title {
    max-width: 10.5ch;
    line-height: 0.98;
  }

  .hero-manifesto__trust-wrap {
    bottom: 18px;
  }

  .trust-tile {
    min-height: auto;
  }
}
</style>
