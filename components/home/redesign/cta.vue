<template>
  <section class="reservation-cta">
    <v-container>
      <div class="content-shell reservation-cta__inner">
        <div class="reservation-cta__copy">
          <p class="section-eyebrow section-eyebrow--light">{{ t('home.redesign.cta.eyebrow') }}</p>
          <h2 class="section-title section-title--light reservation-cta__title">
            {{ t('home.redesign.cta.title') }}
          </h2>
          <p class="section-text section-text--light reservation-cta__text">
            {{ t('home.redesign.cta.text') }}
          </p>
        </div>
        <div class="reservation-cta__actions">
          <a class="reservation-cta__phone" href="tel:+38169635632">+381 69 635 632</a>
          <v-btn
            color="primary"
            class="btn-reserve"
            flat
            width="220px"
            height="52px"
            href="tel:+38169635632"
            rel="noopener"
            target="_blank"
          >
            {{ t('home.redesign.cta.primary') }}
          </v-btn>
          <v-btn
            :to="{ name: 'pricing' }"
            variant="outlined"
            class="reservation-cta__secondary"
            width="220px"
            height="52px"
          >
            {{ t('home.redesign.cta.secondary') }}
          </v-btn>
          <a class="reservation-cta__mail" href="mailto:hillluxuryhouse@gmail.com">
            {{ t('home.redesign.cta.tertiary') }}
          </a>
          <p class="reservation-cta__note">{{ t('home.redesign.cta.note') }}</p>
        </div>
      </div>
    </v-container>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n({ useScope: 'global' })
</script>

<style scoped>
.reservation-cta {
  padding: 124px 0;
  background:
    linear-gradient(135deg, rgba(207, 169, 117, 0.12), transparent 32%),
    #151515;
}

.reservation-cta__inner {
  display: grid;
  grid-template-columns: minmax(0, 1.3fr) minmax(320px, 0.7fr);
  gap: 32px;
  align-items: center;
}

.reservation-cta__title {
  max-width: 18ch;
}

.reservation-cta__text {
  max-width: 56ch;
}

.reservation-cta__actions {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 14px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  padding: 30px;
}

.reservation-cta__phone {
  color: #fff;
  font-family: var(--font-heading);
  font-size: 2rem;
  text-decoration: none;
}

.reservation-cta__secondary {
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.34);
  text-transform: none;
}

.reservation-cta__mail {
  color: var(--brand-gold);
  text-decoration: none;
}

.reservation-cta__note {
  color: rgba(255, 255, 255, 0.62);
  margin-top: 4px;
}

@media (max-width: 1264px) {
  .reservation-cta__inner {
    grid-template-columns: 1fr;
  }
}
</style>