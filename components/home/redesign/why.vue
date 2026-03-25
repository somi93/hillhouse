<template>
  <section id="about" class="why-hill-house">
    <v-container>
      <div class="content-shell">
        <div class="why-hill-house__layout">
          <div class="why-hill-house__content">
            <div class="section-copy why-hill-house__copy">
              <p class="section-eyebrow">{{ t("home.redesign.why.eyebrow") }}</p>
              <h2 class="section-title section-title--dark why-hill-house__title">
                {{ t(`home.redesign.why.${props.villa}.title`) }}
              </h2>
              <p class="section-text section-text--warm why-hill-house__text">
                {{ t(`home.redesign.why.${props.villa}.text`) }}
              </p>
              <v-btn
                :to="localePath(aboutPath)"
                color="primary"
                class="btn-reserve why-hill-house__cta"
                flat
                height="52px"
              >
                {{ t("home.redesign.why.cta") }}
              </v-btn>
            </div>
          </div>

          <div class="why-hill-house__media">
            <v-img
              :src="villaData.images.why"
              :alt="villaData.name + ' pool and terrace at sunset'"
              aspect-ratio="0.86"
              cover
              class="why-hill-house__image"
            ></v-img>
          </div>

          <aside class="why-hill-house__proof">
            <p class="why-hill-house__proof-intro">
              {{ t("home.redesign.why.proofIntro") }}
            </p>

            <div class="why-hill-house__stats">
              <article
                v-for="item in proofItems"
                :key="`${item.value}-${item.label}`"
                class="why-stat"
              >
                <p class="why-stat__value">{{ item.value }}</p>
                <p class="why-stat__label">{{ item.label }}</p>
              </article>
            </div>

            <p class="why-hill-house__proof-note">
              {{ t("home.redesign.why.proofNote") }}
            </p>
          </aside>
        </div>
      </div>
    </v-container>
  </section>
</template>

<script setup>
import { computed } from "vue";
import { useI18n } from "vue-i18n";

const props = defineProps({ villa: { type: String, default: "hh1" } });
const villaData = useVilla(props.villa);

const localePath = useLocalePath();
const { t } = useI18n({ useScope: "global" });

const aboutPath = computed(() =>
  props.villa === "hh2" ? "/hill-house-2/about" : "/hill-house-1/about"
);

const proofItems = computed(() => {
  const v = props.villa;
  return [
    {
      value: t(`home.redesign.why.${v}.proof1Value`),
      label: t(`home.redesign.why.${v}.proof1Label`),
    },
    {
      value: t(`home.redesign.why.${v}.proof2Value`),
      label: t(`home.redesign.why.${v}.proof2Label`),
    },
    {
      value: t(`home.redesign.why.${v}.proof3Value`),
      label: t(`home.redesign.why.${v}.proof3Label`),
    },
    {
      value: t(`home.redesign.why.${v}.proof4Value`),
      label: t(`home.redesign.why.${v}.proof4Label`),
    },
  ];
});
</script>

<style scoped>
.why-hill-house {
  position: relative;
  padding: 148px 0 132px;
  background: linear-gradient(180deg, #f7f2eb 0%, #f3ede3 100%);
}

.why-hill-house__layout {
  display: grid;
  grid-template-columns: minmax(0, 1.5fr) minmax(0, 1.18fr) minmax(250px, 0.64fr);
  gap: 16px;
  align-items: start;
}

.why-hill-house__content {
  max-width: 600px;
  padding-top: 16px;
  position: relative;
  z-index: 2;
}

.why-hill-house__copy {
  margin-bottom: 0;
}

.why-hill-house__title {
  max-width: 16ch;
  line-height: 1.02;
  margin-bottom: 24px;
}

.why-hill-house__text {
  max-width: 47ch;
}

.why-hill-house__cta {
  margin-top: 30px;
  min-width: 214px;
}

.why-hill-house__media {
  position: relative;
  padding-top: 14px;
  z-index: 1;
}

.why-hill-house__image {
  border-radius: 16px;
  top: -40px;
  overflow: hidden;
  box-shadow: 0 34px 78px rgba(30, 20, 12, 0.14);
}

.why-hill-house__proof {
  position: relative;
  padding: 28px 24px 22px;
  border-radius: 16px;
  background: linear-gradient(180deg, rgba(36, 28, 23, 0.9) 0%, rgba(50, 38, 31, 1) 100%);
  color: #f8f3ea;
  box-shadow: 0 20px 44px rgba(38, 28, 20, 0.12);
  overflow: hidden;
  margin-left: -82px;
  margin-top: 50px;
  z-index: 3;
}

.why-hill-house__proof::before {
  content: "";
  position: absolute;
  inset: 0 0 auto;
  height: 1px;
  background: linear-gradient(
    90deg,
    rgba(214, 188, 149, 0) 0%,
    rgba(214, 188, 149, 0.7) 50%,
    rgba(214, 188, 149, 0) 100%
  );
}

.why-hill-house__proof-intro {
  color: rgba(214, 188, 149, 0.9);
  font-size: 0.74rem;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  margin-bottom: 18px;
}

.why-hill-house__stats {
  display: grid;
  gap: 0;
}

.why-stat {
  padding: 16px 0;
}

.why-stat + .why-stat {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.why-stat__value {
  color: #fff;
  font-family: var(--font-heading);
  font-size: clamp(1.4rem, 2.1vw, 2rem);
  line-height: 1;
  margin: 0 0 6px;
}

.why-stat__label {
  color: rgba(248, 243, 234, 0.74);
  font-size: 0.9rem;
  line-height: 1.52;
  margin: 0;
}

.why-hill-house__proof-note {
  margin: 18px 0 0;
  padding-top: 18px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  color: rgba(248, 243, 234, 0.68);
  font-size: 0.9rem;
  line-height: 1.64;
}

@media (max-width: 1366px) and (min-width: 961px) {
  .why-hill-house {
    padding: 116px 0 98px;
  }

  .why-hill-house__layout {
    grid-template-columns: minmax(0, 1fr) minmax(0, 1.02fr);
    gap: 24px;
  }

  .why-hill-house__content {
    max-width: 520px;
  }

  .why-hill-house__image {
    top: -18px;
  }

  .why-hill-house__proof {
    grid-column: 1 / -1;
    margin-left: 0;
    margin-top: -12px;
    padding: 22px 20px 18px;
  }

  .why-hill-house__stats {
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 16px;
  }

  .why-stat {
    padding: 10px 0;
  }

  .why-stat + .why-stat {
    border-top: 0;
    border-left: 1px solid rgba(255, 255, 255, 0.1);
    padding-left: 16px;
  }

  .why-hill-house__proof-note {
    max-width: 62ch;
  }
}

@media (max-width: 1264px) {
  .why-hill-house__layout {
    grid-template-columns: minmax(0, 1fr) minmax(0, 1.18fr);
    gap: 32px;
  }

  .why-hill-house__title {
    max-width: 13.6ch;
  }

  .why-hill-house__proof {
    grid-column: 1 / -1;
    padding: 28px 26px 22px;
    margin-left: 0;
    margin-top: -34px;
  }

  .why-hill-house__stats {
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 18px;
  }

  .why-stat {
    padding: 12px 0;
  }

  .why-stat + .why-stat {
    border-top: 0;
    border-left: 1px solid rgba(255, 255, 255, 0.1);
    padding-left: 18px;
  }

  .why-hill-house__proof-note {
    max-width: 62ch;
  }
}

@media (max-width: 960px) and (min-width: 600px) {
  .why-hill-house {
    padding: 96px 0 80px;
  }

  .why-hill-house__layout {
    grid-template-columns: 1fr 1fr;
    gap: 24px;
    align-items: start;
  }

  .why-hill-house__content {
    max-width: 100%;
    padding-top: 0;
  }

  .why-hill-house__title {
    max-width: 13ch;
  }

  .why-hill-house__text {
    max-width: 100%;
  }

  .why-hill-house__media {
    padding-top: 0;
  }

  .why-hill-house__image {
    top: 0;
  }

  .why-hill-house__proof {
    grid-column: 1 / -1;
    margin-left: 0;
    margin-top: -16px;
    padding: 22px 22px 18px;
  }

  .why-hill-house__stats {
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 0 14px;
  }

  .why-stat {
    padding: 10px 0;
  }

  .why-stat + .why-stat {
    border-top: 0;
    border-left: 1px solid rgba(255, 255, 255, 0.1);
    padding-left: 14px;
  }

  .why-stat__value {
    font-size: clamp(1.2rem, 2.2vw, 1.65rem);
  }

  .why-stat__label {
    font-size: 0.82rem;
    line-height: 1.44;
  }

  .why-hill-house__proof-note {
    max-width: 100%;
    font-size: 0.86rem;
  }
}

@media (max-width: 599px) {
  .why-hill-house {
    padding: 72px 0 52px;
  }

  .why-hill-house__layout {
    grid-template-columns: 1fr;
    gap: 24px;
  }

  .why-hill-house__content {
    max-width: 100%;
    padding-top: 0;
  }

  .why-hill-house__title {
    max-width: 18ch;
  }

  .why-hill-house__text {
    max-width: 100%;
  }

  .why-hill-house__cta {
    margin-top: 22px;
    width: 100%;
    min-width: 0;
  }

  .why-hill-house__media {
    padding-top: 0;
  }

  .why-hill-house__image {
    top: 0;
  }

  .why-hill-house__proof {
    padding: 18px 16px 16px;
    margin-top: 0;
    margin-left: 0;
  }

  .why-hill-house__stats {
    grid-template-columns: 1fr;
  }

  .why-stat,
  .why-stat:nth-child(even) {
    padding-left: 0;
    border-left: 0;
  }

  .why-stat + .why-stat,
  .why-stat:nth-child(n + 3) {
    border-top: 1px solid rgba(255, 255, 255, 0.1);
  }
}
</style>
