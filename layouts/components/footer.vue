<template>
  <v-footer class="site-footer px-0">
    <v-container class="site-footer__container">
      <div class="site-footer__frame">
        <v-row justify="space-between" class="pb-15">
          <div>
            <p class="site-footer__eyebrow">{{ $t("layout.footer.brandEyebrow") }}</p>
            <h2 class="site-footer__title">Hill House</h2>
          </div>
          <div>
            <p class="site-footer__section-title">{{ $t("layout.footer.quickLinks") }}</p>
            <nav
              class="site-footer__nav"
              :aria-label="$t('layout.footer.navigationLabel')"
            >
              <template v-for="item in menuLeft" :key="item.title">
                <NuxtLink v-if="item.to" :to="item.to" class="site-footer__nav-link">
                  {{ item.title }}
                </NuxtLink>
                <button
                  v-else
                  type="button"
                  class="text-left site-footer__nav-link site-footer__nav-link--button"
                  @click="scrollTo(item.href)"
                >
                  {{ item.title }}
                </button>
              </template>
            </nav>
          </div>
          <div>
            <p class="site-footer__section-title">{{ $t("layout.footer.reachOut") }}</p>

            <div class="site-footer__stack">
              <a href="tel:+38169635632" class="site-footer__nav-link">+381 69 635 632</a>

              <a href="mailto:hillluxuryhouse@gmail.com" class="site-footer__nav-link">
                hillluxuryhouse@gmail.com
              </a>
              <span class="site-footer__nav-link">
                Varovničkih ratnika, Šepšin, Serbia
              </span>
            </div>
          </div>

          <div>
            <p class="site-footer__section-title">
              {{ $t("layout.footer.stayConnected") }}
            </p>

            <v-row no-gutters justify="end" class="site-footer__social-links">
              <a
                rel="noopener"
                href="https://www.instagram.com/hill_luxury_house/"
                target="_blank"
                class="site-footer__social-link"
                :aria-label="$t('layout.footer.instagram')"
              >
                <v-icon color="#fff" :icon="mdiInstagram" size="18"></v-icon>
              </a>
              <a
                rel="noopener"
                href="https://www.facebook.com/p/Hill-Luxury-House-100095113451685/"
                target="_blank"
                class="site-footer__social-link"
                :aria-label="$t('layout.footer.facebook')"
              >
                <v-icon color="#fff" :icon="mdiFacebook" size="18"></v-icon>
              </a>
              <a
                rel="noopener"
                href="https://wa.me/38169635632"
                target="_blank"
                class="site-footer__social-link"
                :aria-label="$t('layout.footer.whatsapp')"
              >
                <v-icon color="#fff" :icon="mdiWhatsapp" size="18"></v-icon>
              </a>
              <a
                rel="noopener"
                href="mailto:hillluxuryhouse@gmail.com"
                target="_blank"
                class="site-footer__social-link"
                :aria-label="$t('layout.footer.emailLabel')"
              >
                <v-icon color="#fff" :icon="mdiEmail" size="18"></v-icon>
              </a>
            </v-row>
          </div>
        </v-row>

        <div class="site-footer__bottom mt-15">
          <p class="site-footer__copyright">{{ $t("layout.footer.copyright") }}</p>
          <a
            href="https://miloshpetrovic.com"
            target="_blank"
            rel="noopener"
            class="site-footer__credits-link"
          >
            {{ $t("layout.footer.creditLabel") }}
          </a>
        </div>
      </div>
    </v-container>
  </v-footer>
</template>

<script setup>
import { mdiFacebook, mdiInstagram, mdiEmail, mdiWhatsapp } from "@mdi/js";
import { computed } from "vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n({ useScope: "global" });
const menuLeft = computed(() => {
  return [
    {
      title: "Hill House Luxury 1",
      to: { name: "index" },
    },
    {
      title: "Hill House Luxury 2",
      href: "#about",
    },
    {
      title: t("layout.menu.gallery"),
      to: { name: "gallery" },
    },
    {
      title: t("layout.menu.map"),
      href: "#map",
    },
  ];
});

const scrollTo = (target) => {
  const element = document.querySelector(target);

  if (!element) {
    return;
  }

  window.scrollTo({
    top: element.offsetTop - 128,
    left: 0,
    behavior: "smooth",
  });
};
</script>

<style scoped>
.site-footer {
  background: radial-gradient(
      circle at 14% 0%,
      rgba(207, 169, 117, 0.12),
      transparent 24%
    ),
    linear-gradient(180deg, #191715 0%, #131110 100%);
  color: #fff;
  padding: 88px 0 26px;
}

.site-footer__container {
  max-width: 1400px;
}

.site-footer__frame {
  display: grid;
  gap: 42px;
}

.site-footer__lead {
  display: grid;
  gap: 16px;
  max-width: 360px;
}

.site-footer__columns {
  display: grid;
  grid-template-columns: minmax(0, 1.2fr) minmax(200px, 0.72fr) minmax(160px, 0.56fr) minmax(
      220px,
      0.8fr
    );
  gap: 32px;
  padding-top: 12px;
  padding-bottom: 34px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.site-footer__column {
  min-width: 0;
}

.site-footer__eyebrow,
.site-footer__section-title {
  color: rgba(207, 169, 117, 0.92);
  text-transform: uppercase;
  letter-spacing: 0.18em;
  font-size: 0.74rem;
  margin-bottom: 16px;
}

.site-footer__title {
  color: #fff;
  font-size: clamp(2.2rem, 3vw, 3.2rem);
  line-height: 1.02;
  margin: 0;
}

.site-footer__description,
.site-footer__social-note {
  color: rgba(255, 255, 255, 0.68);
  line-height: 1.86;
  max-width: 34ch;
  margin: 0;
}

.site-footer__stack {
  display: grid;
  gap: 18px;
}

.site-footer__item {
  display: grid;
  gap: 6px;
}

.site-footer__label {
  color: rgba(207, 169, 117, 0.72);
  text-transform: uppercase;
  letter-spacing: 0.14em;
  font-size: 0.72rem;
}

.site-footer__value {
  color: #fff;
  text-decoration: none;
  line-height: 1.7;
}

.site-footer__nav {
  display: grid;
  gap: 12px;
}

.site-footer__social-links {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 20px;
}

.site-footer__social-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(255, 255, 255, 0.03);
  text-decoration: none;
  transition: transform 0.2s ease, border-color 0.2s ease, background-color 0.2s ease;
}

.site-footer__social-link:hover {
  transform: translateY(-2px);
  border-color: rgba(207, 169, 117, 0.48);
  background: rgba(207, 169, 117, 0.08);
}

.site-footer__bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 24px;
  padding-top: 2px;
}

.site-footer__nav-link {
  color: rgba(255, 255, 255, 0.66);
  text-decoration: none;
  background: none;
  border: 0;
  padding: 0;
  cursor: pointer;
  transition: color 0.2s ease;
}

.site-footer__nav-link:hover {
  color: #fff;
}

.site-footer__nav-link--button {
  font: inherit;
}

.site-footer__copyright {
  color: rgba(255, 255, 255, 0.54);
  margin: 0;
}

.site-footer__credits-link {
  color: rgba(207, 169, 117, 0.84);
  text-decoration: none;
}

@media (max-width: 1100px) {
  .site-footer__columns {
    grid-template-columns: 1fr;
  }

  .site-footer__bottom {
    flex-direction: column;
    align-items: flex-start;
  }
}

@media (max-width: 960px) {
  .site-footer {
    padding-top: 56px;
  }
}

@media (max-width: 640px) {
  .site-footer {
    padding: 72px 0 24px;
  }

  .site-footer__bottom {
    gap: 12px;
  }
}
</style>
