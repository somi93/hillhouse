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
            :to="localePath('/pricing')"
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

const localePath = useLocalePath()
const { t } = useI18n({ useScope: 'global' })
</script>

<style scoped>
.reservation-cta {
  padding: 124px 0;
  background:
    radial-gradient(ellipse 60% 50% at 100% 100%, rgba(207, 169, 117, 0.09), transparent),
    linear-gradient(135deg, rgba(207, 169, 117, 0.11), transparent 36%),
    #151515;
}

.reservation-cta__inner {
  display: grid;
  grid-template-columns: minmax(0, 1.3fr) minmax(320px, 0.7fr);
  gap: 56px;
  align-items: center;
}

.reservation-cta__title {
  max-width: 18ch;
}

.reservation-cta__text {
  max-width: 52ch;
}

.reservation-cta__actions {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 14px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-top: 2px solid var(--brand-gold);
  border-radius: 14px;
  padding: 32px 28px;
  box-shadow: 0 24px 56px rgba(0, 0, 0, 0.32);
}

.reservation-cta__phone {
  color: #fff;
  font-family: var(--font-heading);
  font-size: 2rem;
  text-decoration: none;
  letter-spacing: 0.02em;
}

.reservation-cta__secondary {
  color: #fff !important;
  border: 1px solid rgba(255, 255, 255, 0.28) !important;
  text-transform: none;
}

.reservation-cta__mail {
  color: var(--brand-gold);
  text-decoration: none;
  font-size: 0.88rem;
  letter-spacing: 0.06em;
}

.reservation-cta__note {
  color: rgba(255, 255, 255, 0.48);
  font-size: 0.84rem;
  margin-top: 2px;
}

/* ── 1366px tablet-landscape ── */
@media (max-width: 1366px) and (min-width: 961px) {
  .reservation-cta {
    padding: 108px 0 88px;
  }

  .reservation-cta__inner {
    grid-template-columns: minmax(0, 1.1fr) minmax(280px, 0.9fr);
    gap: 40px;
  }

  .reservation-cta__actions {
    padding: 26px 24px;
    gap: 12px;
  }

  .reservation-cta__phone {
    font-size: 1.8rem;
  }
}

/* ── tablet portrait / iPad: keep 2-column until ~768px ── */
@media (max-width: 960px) and (min-width: 768px) {
  .reservation-cta {
    padding: 88px 0 72px;
  }

  .reservation-cta__inner {
    grid-template-columns: 1fr 280px;
    gap: 32px;
  }

  .reservation-cta__title {
    font-size: clamp(1.9rem, 3.8vw, 2.6rem);
    max-width: 20ch;
  }

  .reservation-cta__text {
    max-width: 44ch;
  }

  .reservation-cta__actions {
    align-self: stretch;
    padding: 24px 20px;
    gap: 12px;
  }

  .reservation-cta__phone {
    font-size: 1.55rem;
  }
}

/* ── single column below 768px ── */
@media (max-width: 767px) {
  .reservation-cta {
    padding: 80px 0 64px;
  }

  .reservation-cta__inner {
    grid-template-columns: 1fr;
    gap: 36px;
  }

  .reservation-cta__title {
    font-size: clamp(1.75rem, 5.8vw, 2.4rem);
    max-width: 22ch;
  }

  .reservation-cta__actions {
    align-items: stretch;
    padding: 26px 22px;
  }

  .reservation-cta__phone {
    font-size: 1.6rem;
  }

  .reservation-cta__actions :deep(.v-btn) {
    width: 100% !important;
    min-width: 0 !important;
  }
}

@media (max-width: 480px) {
  .reservation-cta {
    padding: 68px 0 52px;
  }

  .reservation-cta__actions {
    padding: 20px 16px;
    gap: 12px;
  }

  .reservation-cta__phone {
    font-size: 1.45rem;
  }
}
</style>