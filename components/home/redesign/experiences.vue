<template>
  <section id="facilities" class="signature-experiences">
    <v-container>
      <div class="content-shell">
        <div class="section-copy section-copy--centered">
          <p class="section-eyebrow">{{ t('home.redesign.experiences.eyebrow') }}</p>
          <h2 class="section-title section-title--dark signature-experiences__title">
            {{ t('home.redesign.experiences.title') }}
          </h2>
          <p class="section-text section-text--warm section-text--wide signature-experiences__description">
            {{ t('home.redesign.experiences.description') }}
          </p>
        </div>

        <div class="experience-stack">
          <article v-for="experience in experiences" :key="experience.title" class="experience-panel">
            <v-row :class="experience.reverse ? 'flex-sm-row-reverse' : ''" align="center">
              <v-col cols="12" sm="6" md="7">
                <div class="experience-panel__image-wrap">
                  <v-img
                    :src="experience.image"
                    :alt="experience.alt"
                    aspect-ratio="1.45"
                    cover
                    class="experience-panel__image"
                  ></v-img>
                </div>
              </v-col>
              <v-col cols="12" sm="6" md="5">
                <div class="experience-panel__copy">
                  <p class="experience-panel__kicker">{{ experience.kicker }}</p>
                  <h3 class="experience-panel__title">{{ experience.title }}</h3>
                  <p class="experience-panel__text">{{ experience.text }}</p>
                </div>
              </v-col>
            </v-row>
          </article>
        </div>
      </div>
    </v-container>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const props = defineProps({ villa: { type: String, default: 'hh1' } })
const villaData = useVilla(props.villa)
const { t } = useI18n({ useScope: 'global' })

const experiences = computed(() =>
  villaData.experiences.map((e, i) => ({
    ...e,
    kicker: t(`home.redesign.experiences.item${i + 1}Kicker`),
    title:  t(`home.redesign.experiences.item${i + 1}Title`),
    text:   t(`home.redesign.experiences.item${i + 1}Text`),
  }))
)
</script>

<style scoped>
.signature-experiences {
  padding: 132px 0;
  background: linear-gradient(180deg, var(--surface-ivory) 0%, #efe6db 100%);
}

.signature-experiences__title {
  max-width: 17ch;
  margin-left: auto;
  margin-right: auto;
}

.signature-experiences__description {
  max-width: 640px;
}

.experience-stack {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.experience-panel {
  background: rgba(255, 255, 255, 0.84);
  border: 1px solid rgba(95, 90, 82, 0.08);
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 18px 46px rgba(48, 34, 22, 0.06);
}

.experience-panel__image-wrap {
  overflow: hidden;
}

.experience-panel__image {
  border-radius: 16px;
}

.experience-panel__copy {
  padding: 18px 14px;
}

.experience-panel__kicker {
  color: var(--brand-gold);
  text-transform: uppercase;
  letter-spacing: 0.18em;
  font-size: 0.72rem;
  margin-bottom: 12px;
}

.experience-panel__title {
  color: var(--brand-dark);
  font-size: clamp(1.8rem, 2.6vw, 2.8rem);
  line-height: 1.08;
  margin-bottom: 14px;
  max-width: 15ch;
}

.experience-panel__text {
  color: var(--text-warm);
  line-height: 1.72;
  max-width: 40ch;
}

.experience-panel:nth-child(even) {
  background: rgba(255, 251, 246, 0.9);
}

@media (max-width: 1366px) and (min-width: 961px) {
  .signature-experiences {
    padding: 112px 0 92px;
  }

  .experience-stack {
    gap: 22px;
  }

  .experience-panel {
    padding: 20px;
  }

  .experience-panel__copy {
    padding: 12px 6px;
  }

  .experience-panel__title {
    font-size: clamp(1.6rem, 2.1vw, 2.2rem);
  }
}

@media (max-width: 960px) and (min-width: 600px) {
  .signature-experiences {
    padding: 80px 0 60px;
  }

  .experience-stack {
    gap: 20px;
  }

  .experience-panel {
    padding: 20px;
  }

  .experience-panel__copy {
    padding: 14px 16px;
  }

  .experience-panel__title {
    font-size: clamp(1.4rem, 2.4vw, 1.9rem);
    max-width: 100%;
  }

  .experience-panel__text {
    max-width: 100%;
  }
}

@media (max-width: 599px) {
  .signature-experiences {
    padding: 60px 0 44px;
  }

  .experience-stack {
    gap: 16px;
  }

  .experience-panel {
    padding: 14px;
  }

  .experience-panel__copy {
    padding: 14px 6px 4px;
  }

  .experience-panel__title {
    max-width: 100%;
  }

  .experience-panel__text {
    max-width: 100%;
  }
}
</style>