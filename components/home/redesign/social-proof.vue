<template>
  <section id="testimonials" class="social-proof">
    <v-container>
      <div class="content-shell">
        <div class="section-copy section-copy--centered">
          <p class="section-eyebrow">{{ t('home.redesign.social.eyebrow') }}</p>
          <h2 class="section-title section-title--dark social-proof__title">
            {{ t('home.redesign.social.title') }}
          </h2>
        </div>

        <v-row align="stretch" class="social-proof__layout">
          <v-col cols="12" lg="7">
            <article class="proof-main-card">
              <p class="proof-main-card__quote">
                "{{ t('home.redesign.social.mainQuote') }}"
              </p>
              <div class="proof-main-card__meta">
                <span class="proof-main-card__author">{{ t('home.redesign.social.mainAuthor') }}</span>
                <a
                  class="proof-main-card__link"
                  href="https://maps.app.goo.gl/b6Nhu3q5jcdvw3bu8"
                  target="_blank"
                  rel="noopener noreferrer"
                  :aria-label="t('home.redesign.social.mainLinkLabel')"
                >
                  <v-icon :icon="mdiArrowTopRight" size="18"></v-icon>
                </a>
              </div>
            </article>
          </v-col>
          <v-col cols="12" lg="5">
            <div class="proof-side-cards">
              <article v-for="quote in supportingQuotes" :key="quote.author" class="proof-side-card">
                <p class="proof-side-card__quote">"{{ quote.text }}"</p>
                <div class="proof-side-card__meta">
                  <span class="proof-side-card__author">{{ quote.author }}</span>
                  <a
                    v-if="quote.link"
                    class="proof-side-card__link"
                    :href="quote.link"
                    target="_blank"
                    rel="noopener noreferrer"
                    :aria-label="t('home.redesign.social.linkLabel')"
                  >
                    <v-icon :icon="mdiArrowTopRight" size="16"></v-icon>
                  </a>
                </div>
              </article>
            </div>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { mdiArrowTopRight } from '@mdi/js'
import { useI18n } from 'vue-i18n'

const { t } = useI18n({ useScope: 'global' })

const supportingQuotes = computed(() => [
  {
    text: t('home.redesign.social.quote1'),
    author: t('home.redesign.social.author1'),
    source: t('home.redesign.social.source1'),
    link: 'https://maps.app.goo.gl/4FVsjBFPNzy8z88R7',
  },
  {
    text: t('home.redesign.social.quote2'),
    author: t('home.redesign.social.author2'),
    source: t('home.redesign.social.source2'),
    link: 'https://maps.app.goo.gl/8mqmuvW237B2mrVT6',
  },
])
</script>

<style scoped>
.social-proof {
  padding: 132px 0;
  background: linear-gradient(180deg, #f7f1ea 0%, #fff 100%);
}

.social-proof__title {
  max-width: 16ch;
}

.proof-main-card {
  height: 100%;
  padding: 44px 46px 38px;
  background: #fff;
  border-top: 2px solid rgba(178, 140, 89, 0.8);
  box-shadow: 0 28px 58px rgba(36, 22, 13, 0.08);
  position: relative;
}

.proof-main-card:before {
  content: "“";
  position: absolute;
  top: 16px;
  left: 20px;
  color: rgba(207, 169, 117, 0.12);
  font-family: var(--font-heading);
  font-size: 5rem;
  line-height: 1;
}

.proof-main-card__quote {
  color: var(--brand-dark);
  font-size: clamp(1.22rem, 1.7vw, 1.95rem);
  line-height: 1.62;
  margin-bottom: 26px;
  position: relative;
  max-width: 30ch;
}

.proof-main-card__meta {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  align-items: center;
}

.proof-main-card__author {
  color: var(--brand-dark);
  font-weight: 600;
}

.proof-main-card__link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  color: var(--brand-gold);
  text-decoration: none;
  border: 1px solid rgba(178, 140, 89, 0.22);
  border-radius: 999px;
  transition: color 0.2s ease, border-color 0.2s ease, background-color 0.2s ease, transform 0.2s ease;
}

.proof-main-card__link:hover {
  color: var(--brand-dark);
  border-color: rgba(178, 140, 89, 0.58);
  background: rgba(178, 140, 89, 0.08);
  transform: translateY(-1px);
}

.proof-side-cards {
  display: flex;
  flex-direction: column;
  gap: 18px;
  height: 100%;
}

.proof-side-card {
  flex: 1;
  padding: 28px 30px;
  background: #efe6db;
  border-left: 2px solid rgba(207, 169, 117, 0.54);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.proof-side-card__quote {
  color: var(--brand-dark);
  line-height: 1.72;
  margin-bottom: 22px;
  max-width: 40ch;
}

.proof-side-card__meta {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
}

.proof-side-card__author {
  color: var(--brand-dark);
  font-weight: 600;
}

.proof-side-card__link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 26px;
  height: 26px;
  color: var(--brand-gold);
  text-decoration: none;
  border: 1px solid rgba(178, 140, 89, 0.18);
  border-radius: 999px;
  transition: color 0.2s ease, border-color 0.2s ease, background-color 0.2s ease, transform 0.2s ease;
}

.proof-side-card__link:hover {
  color: var(--brand-dark);
  border-color: rgba(178, 140, 89, 0.48);
  background: rgba(178, 140, 89, 0.08);
  transform: translateY(-1px);
}

@media (max-width: 640px) {
  .proof-main-card,
  .proof-side-card {
    padding: 24px;
  }

  .proof-main-card__quote {
    max-width: 100%;
  }
}
</style>