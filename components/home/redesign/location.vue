<template>
  <section id="map" class="location-preview">
    <v-container>
      <div class="content-shell">
        <v-row align="start" class="location-preview__grid">
          <v-col cols="12" lg="5">
            <div class="section-copy section-copy--narrow location-preview__copy">
              <p class="section-eyebrow">{{ t("home.redesign.location.eyebrow") }}</p>
              <h2 class="section-title section-title--dark location-preview__title">
                {{ t("home.redesign.location.title") }}
              </h2>
              <p class="section-text section-text--warm location-preview__text">
                {{ t("home.redesign.location.text") }}
              </p>
              <div class="location-preview__facts">
                <span>{{ t("home.redesign.location.city") }}</span>
              </div>
              <a
                class="location-preview__link"
                href="https://maps.app.goo.gl/PfMhd9qvQKDM3NVc7"
                rel="noopener"
                target="_blank"
              >
                <span>{{ t("home.redesign.location.cta") }}</span>
                <v-icon :icon="mdiArrowTopRight" size="18"></v-icon>
              </a>
            </div>
          </v-col>
          <v-col cols="12" lg="7">
            <div class="location-preview__map-wrap">
              <iframe
                class="location-preview__map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11376.723479775781!2d20.70986718088739!3d44.531929042754896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4750bd1c824fd29b%3A0x8b1d2647713d9c1d!2sHILL%20LUXURY%20HOUSE%201!5e0!3m2!1ssr!2srs!4v1774090941905!5m2!1ssr!2srs"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
              <div class="location-preview__map-badge">
                <span>{{ t("home.redesign.location.city") }}</span>
              </div>
            </div>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </section>
</template>

<script setup>
import { mdiArrowTopRight } from "@mdi/js";
import { useI18n } from "vue-i18n";

const { t } = useI18n({ useScope: "global" });
</script>

<style scoped>
.location-preview {
  padding: 124px 0 92px;
  background: linear-gradient(180deg, #f7f1ea 0%, #f5eee5 100%);
}

.location-preview__grid {
  row-gap: 36px;
}

.location-preview__copy {
  margin-bottom: 0;
}

.location-preview__title {
  max-width: 16ch;
}

.location-preview__text {
  max-width: 44ch;
}

.location-preview__facts {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin: 28px 0 22px;
}

.location-preview__facts span {
  padding: 11px 16px;
  background: rgba(255, 255, 255, 0.74);
  border: 1px solid rgba(95, 90, 82, 0.08);
  color: var(--brand-dark);
  backdrop-filter: blur(8px);
}

.location-preview__link {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  color: var(--brand-gold);
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.16em;
  font-size: 0.8rem;
  transition: gap 0.2s ease, color 0.2s ease;
}

.location-preview__link:hover {
  gap: 14px;
}

.location-preview__map-wrap {
  position: relative;
  overflow: hidden;
  border-radius: 22px;
  border: 1px solid rgba(95, 90, 82, 0.08);
  box-shadow: 0 24px 52px rgba(36, 22, 13, 0.1);
  min-height: 468px;
  background: linear-gradient(180deg, #eee3d6 0%, #e7dacc 100%);
}

.location-preview__map {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  border: 0;
  filter: grayscale(0.88) saturate(0.72);
}

.location-preview__map-badge {
  position: absolute;
  left: 24px;
  bottom: 24px;
  z-index: 2;
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.location-preview__map-badge span {
  padding: 10px 14px;
  background: rgba(255, 253, 249, 0.86);
  color: var(--brand-dark);
  border: 1px solid rgba(95, 90, 82, 0.08);
  backdrop-filter: blur(10px);
  font-size: 0.82rem;
  letter-spacing: 0.08em;
}

@media (max-width: 960px) {
  .location-preview {
    padding: 104px 0 76px;
  }

  .location-preview__copy {
    max-width: 100%;
  }

  .location-preview__title {
    max-width: 13ch;
  }

  .location-preview__map-wrap {
    min-height: 420px;
  }
}

@media (max-width: 640px) {
  .location-preview {
    padding: 88px 0 60px;
  }

  .location-preview__map-wrap {
    min-height: 320px;
    border-radius: 18px;
  }

  .location-preview__map-badge {
    left: 12px;
    bottom: 12px;
    gap: 8px;
  }

  .location-preview__map-badge span {
    padding: 8px 12px;
    font-size: 0.76rem;
  }
}
</style>
