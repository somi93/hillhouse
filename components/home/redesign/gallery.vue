<template>
  <section class="curated-gallery">
    <v-container>
      <div class="content-shell">
        <div class="section-copy section-copy--centered">
          <p class="section-eyebrow">{{ t('home.redesign.gallery.eyebrow') }}</p>
          <h2 class="section-title section-title--dark curated-gallery__title">
            {{ t('home.redesign.gallery.title') }}
          </h2>
          <p class="section-text section-text--warm section-text--wide curated-gallery__description">
            {{ t('home.redesign.gallery.description') }}
          </p>
        </div>
      </div>
    </v-container>

    <div class="curated-gallery__breakout">
      <div class="gallery-categories">
        <button
          v-for="category in categories"
          :key="category.id"
          type="button"
          :class="['gallery-category', category.className]"
          @click="openCategory(category.id)"
        >
          <v-img :src="category.cover" :alt="category.title" cover class="gallery-category__image"></v-img>
          <div class="gallery-category__overlay"></div>
          <div class="gallery-category__content">
            <p class="gallery-category__kicker">{{ category.kicker }}</p>
            <div class="gallery-category__title-row">
              <h3 class="gallery-category__title">{{ category.title }}</h3>
              <span class="gallery-category__arrow" aria-hidden="true">
                <v-icon :icon="mdiArrowRight" size="20"></v-icon>
              </span>
            </div>
          </div>
        </button>
      </div>
    </div>

    <v-dialog v-model="dialog" fullscreen scrim="rgba(8, 6, 5, 0.89)" class="gallery-dialog">
      <div v-if="selectedCategory" class="gallery-dialog__shell">
        <div class="gallery-dialog__topbar">
          <v-btn icon variant="text" class="gallery-dialog__close" @click="dialog = false">
            <v-icon :icon="mdiClose" size="24"></v-icon>
          </v-btn>
        </div>

        <div class="gallery-dialog__stage-shell">
          <div class="gallery-dialog__stage-wrap">
            <v-btn icon variant="text" class="gallery-dialog__nav gallery-dialog__nav--prev" @click="previousItem">
              <v-icon :icon="mdiChevronLeft" size="28"></v-icon>
            </v-btn>

            <div class="gallery-dialog__stage">
              <template v-if="activeItem?.type === 'video'">
                <video
                  :key="activeItem.src"
                  class="gallery-dialog__video"
                  :poster="activeItem.poster"
                  controls
                  playsinline
                  preload="metadata"
                >
                  <source :src="activeItem.src" type="video/mp4" />
                </video>
              </template>
              <v-img
                v-else-if="activeItem"
                :key="activeItem.src"
                :src="activeItem.src"
                :alt="activeItem.alt"
                contain
                class="gallery-dialog__media"
              ></v-img>
            </div>

            <v-btn icon variant="text" class="gallery-dialog__nav gallery-dialog__nav--next" @click="nextItem">
              <v-icon :icon="mdiChevronRight" size="28"></v-icon>
            </v-btn>
          </div>

          <div class="gallery-dialog__info">
            <v-btn
              v-if="canScrollThumbsLeft"
              icon
              variant="text"
              class="gallery-dialog__thumb-nav gallery-dialog__thumb-nav--prev"
              @click="scrollThumbs('prev')"
            >
              <v-icon :icon="mdiChevronLeft" size="20"></v-icon>
            </v-btn>

            <div ref="thumbsContainer" class="gallery-dialog__thumbs" @scroll="updateThumbScrollState">
              <button
                v-for="(item, index) in selectedCategory.items"
                :key="`${selectedCategory.id}-${index}`"
                type="button"
                :class="['gallery-dialog__thumb', { 'gallery-dialog__thumb--active': index === activeItemIndex }]"
                :data-thumb-index="index"
                @click="setItem(index)"
              >
                <v-img :src="item.thumb || item.poster || item.src" :alt="item.alt" cover class="gallery-dialog__thumb-image"></v-img>
                <span v-if="item.type === 'video'" class="gallery-dialog__thumb-badge">{{ t('home.redesign.gallery.videoBadge') }}</span>
              </button>
            </div>

            <v-btn
              v-if="canScrollThumbsRight"
              icon
              variant="text"
              class="gallery-dialog__thumb-nav gallery-dialog__thumb-nav--next"
              @click="scrollThumbs('next')"
            >
              <v-icon :icon="mdiChevronRight" size="20"></v-icon>
            </v-btn>
          </div>
        </div>
      </div>
    </v-dialog>
  </section>
</template>

<script setup>
import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { mdiArrowRight, mdiChevronLeft, mdiChevronRight, mdiClose } from '@mdi/js'
import { useI18n } from 'vue-i18n'

const { t } = useI18n({ useScope: 'global' })

const dialog = ref(false)
const selectedCategoryId = ref('events')
const activeItemIndex = ref(0)
const thumbsContainer = ref(null)
const canScrollThumbsLeft = ref(false)
const canScrollThumbsRight = ref(false)

const categories = computed(() => [
  {
    id: 'events',
    className: 'gallery-category--hero',
    kicker: t('home.redesign.gallery.category1Kicker'),
    title: t('home.redesign.gallery.category1Title'),
    text: t('home.redesign.gallery.category1Text'),
    cover: '/hillhouse/media/images/gallery/events/poolside-table-gold.jpg',
    items: [
      {
        type: 'image',
        src: '/hillhouse/media/images/gallery/events/poolside-table-gold.jpg',
        thumb: '/hillhouse/media/images/gallery/events/poolside-table-gold.jpg',
        alt: 'Elegant poolside table with gold chiavari chairs at Hill House',
      },
      {
        type: 'image',
        src: '/hillhouse/media/images/gallery/events/pool-view-table-gold.jpg',
        thumb: '/hillhouse/media/images/gallery/events/pool-view-table-gold.jpg',
        alt: 'Event table with pool view at Hill House',
      },
      {
        type: 'image',
        src: '/hillhouse/media/images/gallery/events/night-terrace-arch.jpg',
        thumb: '/hillhouse/media/images/gallery/events/night-terrace-arch.jpg',
        alt: 'Illuminated floral arch on terrace at night at Hill House',
      },
      {
        type: 'image',
        src: '/hillhouse/media/images/gallery/events/boho-ceremony-arch.jpg',
        thumb: '/hillhouse/media/images/gallery/events/boho-ceremony-arch.jpg',
        alt: 'Boho ceremony arch with pampas grass and macramé at Hill House',
      },
      {
        type: 'image',
        src: '/hillhouse/media/images/gallery/events/outdoor-reception-pool.jpg',
        thumb: '/hillhouse/media/images/gallery/events/outdoor-reception-pool.jpg',
        alt: 'Outdoor wedding reception with round tables by the pool at Hill House',
      },
      {
        type: 'image',
        src: '/hillhouse/media/images/gallery/events/pergola-dining-green.jpeg',
        thumb: '/hillhouse/media/images/gallery/events/pergola-dining-green.jpeg',
        alt: 'Outdoor pergola dining with green napkins at Hill House',
      },
    ],
  },
  {
    id: 'productions',
    className: 'gallery-category--tall',
    kicker: t('home.redesign.gallery.category2Kicker'),
    title: t('home.redesign.gallery.category2Title'),
    text: t('home.redesign.gallery.category2Text'),
    cover: '/hillhouse/media/images/gallery/productions/couple-shoot-poolside.jpg',
    items: [
      {
        type: 'image',
        src: '/hillhouse/media/images/gallery/productions/couple-shoot-poolside.jpg',
        thumb: '/hillhouse/media/images/gallery/productions/couple-shoot-poolside.jpg',
        alt: 'Couple photo shoot by the pool at Hill House',
      },
      {
        type: 'image',
        src: '/hillhouse/media/images/gallery/productions/pink-dress-terrace-shoot.jpg',
        thumb: '/hillhouse/media/images/gallery/productions/pink-dress-terrace-shoot.jpg',
        alt: 'Fashion shoot on the terrace at Hill House',
      },
    ],
  },
  {
    id: 'interior',
    className: 'gallery-category--portrait',
    kicker: t('home.redesign.gallery.category3Kicker'),
    title: t('home.redesign.gallery.category3Title'),
    text: t('home.redesign.gallery.category3Text'),
    cover: '/hillhouse/media/images/gallery/interior/bathroom-marble-gold.jpg',
    items: [
      {
        type: 'image',
        src: '/hillhouse/media/images/gallery/interior/bedroom-velvet-headboard.jpg',
        thumb: '/hillhouse/media/images/gallery/interior/bedroom-velvet-headboard.jpg',
        alt: 'Luxury bedroom with velvet headboard and pendant lighting at Hill House',
      },
      {
        type: 'image',
        src: '/hillhouse/media/images/gallery/interior/cinema-lounge-green-led.jpg',
        thumb: '/hillhouse/media/images/gallery/interior/cinema-lounge-green-led.jpg',
        alt: 'Cinema lounge with curved sofas and green LED ambiance at Hill House',
      },
      {
        type: 'image',
        src: '/hillhouse/media/images/gallery/interior/bathroom-marble-gold.jpg',
        thumb: '/hillhouse/media/images/gallery/interior/bathroom-marble-gold.jpg',
        alt: 'Marble bathroom with gold fixtures and round mirror at Hill House',
      },
      {
        type: 'image',
        src: '/hillhouse/media/images/gallery/interior/living-room-shelves.jpg',
        thumb: '/hillhouse/media/images/gallery/interior/living-room-shelves.jpg',
        alt: 'Living room with built-in shelves and TV wall at Hill House',
      },
      {
        type: 'image',
        src: '/hillhouse/media/images/gallery/interior/terrace-sunset-lounge.jpg',
        thumb: '/hillhouse/media/images/gallery/interior/terrace-sunset-lounge.jpg',
        alt: 'Lit terrace lounge at sunset with panoramic valley view at Hill House',
      },
      {
        type: 'image',
        src: '/hillhouse/media/images/gallery/interior/sauna-glass-door.jpeg',
        thumb: '/hillhouse/media/images/gallery/interior/sauna-glass-door.jpeg',
        alt: 'Private sauna with glass door and warm wood interior at Hill House',
      },
      {
        type: 'image',
        src: '/hillhouse/media/images/gallery/interior/spa-lounge-blue-led.jpeg',
        thumb: '/hillhouse/media/images/gallery/interior/spa-lounge-blue-led.jpeg',
        alt: 'Spa lounge with star ceiling, blue LED lighting and sauna at Hill House',
      },
      {
        type: 'image',
        src: '/hillhouse/media/images/gallery/interior/lower-lounge-staircase.jpeg',
        thumb: '/hillhouse/media/images/gallery/interior/lower-lounge-staircase.jpeg',
        alt: 'Lower level lounge with staircase and ambient LED lighting at Hill House',
      },
      {
        type: 'image',
        src: '/hillhouse/media/images/gallery/interior/dining-chandelier-roses.jpeg',
        thumb: '/hillhouse/media/images/gallery/interior/dining-chandelier-roses.jpeg',
        alt: 'Round dining table under chandelier with rose centerpiece at Hill House',
      },
      {
        type: 'image',
        src: '/hillhouse/media/images/gallery/interior/dining-white-florals.jpeg',
        thumb: '/hillhouse/media/images/gallery/interior/dining-white-florals.jpeg',
        alt: 'Dining room set with white chairs and floral centerpiece at Hill House',
      },
      {
        type: 'image',
        src: '/hillhouse/media/images/gallery/interior/dining-pink-setup.jpeg',
        thumb: '/hillhouse/media/images/gallery/interior/dining-pink-setup.jpeg',
        alt: 'Dining table set with pink napkins and floral runner at Hill House',
      },
      {
        type: 'image',
        src: '/hillhouse/media/images/gallery/interior/club-lounge-sofas.jpeg',
        thumb: '/hillhouse/media/images/gallery/interior/club-lounge-sofas.jpeg',
        alt: 'Club lounge with white modular sofas and LED ceiling at Hill House',
      },
      {
        type: 'image',
        src: '/hillhouse/media/images/gallery/interior/lounge-floral-table.jpeg',
        thumb: '/hillhouse/media/images/gallery/interior/lounge-floral-table.jpeg',
        alt: 'Lounge area with round marble table and floral arrangement at Hill House',
      },
      {
        type: 'image',
        src: '/hillhouse/media/images/gallery/interior/jacuzzi-with-food.jpeg',
        thumb: '/hillhouse/media/images/gallery/interior/jacuzzi-with-food.jpeg',
        alt: 'Indoor jacuzzi with food and drinks tray at Hill House',
      },
    ],
  },
  {
    id: 'outdoor',
    className: 'gallery-category--portrait',
    kicker: t('home.redesign.gallery.category4Kicker'),
    title: t('home.redesign.gallery.category4Title'),
    text: t('home.redesign.gallery.category4Text'),
    cover: '/hillhouse/media/images/gallery/outdoor/outdoor-covered-lounge.jpg',
    items: [
      {
        type: 'image',
        src: '/hillhouse/media/images/gallery/outdoor/outdoor-covered-lounge.jpg',
        thumb: '/hillhouse/media/images/gallery/outdoor/outdoor-covered-lounge.jpg',
        alt: 'Covered outdoor lounge terrace by the pool at Hill House',
      },
      {
        type: 'image',
        src: '/hillhouse/media/images/gallery/interior/lounge-sheer-curtains.jpg',
        thumb: '/hillhouse/media/images/gallery/interior/lounge-sheer-curtains.jpg',
        alt: 'Indoor lounge with sheer curtains and modern chairs at Hill House',
      },
      {
        type: 'image',
        src: '/hillhouse/media/images/facilities/telescope.jpg',
        thumb: '/hillhouse/media/images/facilities/telescope.jpg',
        alt: 'Outdoor terrace and telescope at Hill House',
      },
      {
        type: 'image',
        src: '/hillhouse/media/images/gallery/outdoor/pool-sunset-palms.jpeg',
        thumb: '/hillhouse/media/images/gallery/outdoor/pool-sunset-palms.jpeg',
        alt: 'Infinity pool at sunset with palm trees at Hill House',
      },
      {
        type: 'image',
        src: '/hillhouse/media/images/gallery/outdoor/pool-loungers-pergola.jpeg',
        thumb: '/hillhouse/media/images/gallery/outdoor/pool-loungers-pergola.jpeg',
        alt: 'Pool with sun loungers and pergola on a summer day at Hill House',
      },
      {
        type: 'image',
        src: '/hillhouse/media/images/gallery/outdoor/pool-palm-dusk.jpeg',
        thumb: '/hillhouse/media/images/gallery/outdoor/pool-palm-dusk.jpeg',
        alt: 'Pool and palm tree at dusk with outdoor seating at Hill House',
      },
      {
        type: 'image',
        src: '/hillhouse/media/images/gallery/outdoor/villa-pool-exterior.jpeg',
        thumb: '/hillhouse/media/images/gallery/outdoor/villa-pool-exterior.jpeg',
        alt: 'Villa exterior with pool and terrace seating at Hill House',
      },
      {
        type: 'image',
        src: '/hillhouse/media/images/gallery/outdoor/villa-garden-path.jpeg',
        thumb: '/hillhouse/media/images/gallery/outdoor/villa-garden-path.jpeg',
        alt: 'Villa exterior with garden path and pool area at Hill House',
      },
      {
        type: 'image',
        src: '/hillhouse/media/images/gallery/outdoor/garden-path-flowers.jpeg',
        thumb: '/hillhouse/media/images/gallery/outdoor/garden-path-flowers.jpeg',
        alt: 'Garden path lined with flowering plants at Hill House',
      },
    ],
  },
  {
    id: 'motion',
    className: 'gallery-category--portrait',
    kicker: t('home.redesign.gallery.category5Kicker'),
    title: t('home.redesign.gallery.category5Title'),
    text: t('home.redesign.gallery.category5Text'),
    cover: '/hillhouse/media/images/gallery/professional/vila-prestige-hill-15-1920x1438.jpeg',
    items: [
      {
        type: 'video',
        src: '/hillhouse/media/videos/overview.mp4',
        poster: '/hillhouse/media/images/gallery/professional/vila-prestige-hill-15-1920x1438.jpeg',
        thumb: '/hillhouse/media/images/gallery/professional/resized/vila-prestige-hill-15-1920x1438.jpeg',
        alt: 'Overview video of Hill House',
      },
    ],
  },
])

const selectedCategory = computed(
  () => categories.value.find((category) => category.id === selectedCategoryId.value) ?? categories.value[0]
)

const activeItem = computed(() => selectedCategory.value?.items?.[activeItemIndex.value] ?? null)

const openCategory = (categoryId) => {
  selectedCategoryId.value = categoryId
  activeItemIndex.value = 0
  dialog.value = true
}

const previousItem = () => {
  if (!selectedCategory.value?.items?.length) {
    return
  }

  activeItemIndex.value =
    activeItemIndex.value === 0 ? selectedCategory.value.items.length - 1 : activeItemIndex.value - 1
}

const nextItem = () => {
  if (!selectedCategory.value?.items?.length) {
    return
  }

  activeItemIndex.value =
    activeItemIndex.value === selectedCategory.value.items.length - 1 ? 0 : activeItemIndex.value + 1
}

const setItem = (index) => {
  activeItemIndex.value = index
}

const updateThumbScrollState = () => {
  const container = thumbsContainer.value

  if (!container) {
    canScrollThumbsLeft.value = false
    canScrollThumbsRight.value = false
    return
  }

  canScrollThumbsLeft.value = container.scrollLeft > 4
  canScrollThumbsRight.value = container.scrollLeft + container.clientWidth < container.scrollWidth - 4
}

const syncActiveThumbIntoView = () => {
  const container = thumbsContainer.value

  if (!container) {
    return
  }

  const activeThumb = container.querySelector(`[data-thumb-index="${activeItemIndex.value}"]`)

  if (!(activeThumb instanceof HTMLElement)) {
    updateThumbScrollState()
    return
  }

  activeThumb.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
  window.requestAnimationFrame(updateThumbScrollState)
}

const scrollThumbs = (direction) => {
  const container = thumbsContainer.value

  if (!container) {
    return
  }

  const offset = Math.max(container.clientWidth * 0.72, 220)

  container.scrollBy({
    left: direction === 'next' ? offset : -offset,
    behavior: 'smooth',
  })

  window.setTimeout(updateThumbScrollState, 220)
}

const isKeyboardBlockedTarget = (target) => {
  if (!(target instanceof HTMLElement)) {
    return false
  }

  return Boolean(target.closest('input, textarea, select, button, [contenteditable="true"], video'))
}

const handleGalleryKeydown = (event) => {
  if (!dialog.value || isKeyboardBlockedTarget(event.target)) {
    return
  }

  if (event.key === 'Escape') {
    event.preventDefault()
    dialog.value = false
    return
  }

  if (event.key === 'ArrowLeft') {
    event.preventDefault()
    previousItem()
    return
  }

  if (event.key === 'ArrowRight') {
    event.preventDefault()
    nextItem()
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleGalleryKeydown)
  window.addEventListener('resize', updateThumbScrollState)
})

onBeforeUnmount(() => {
  window.removeEventListener('keydown', handleGalleryKeydown)
  window.removeEventListener('resize', updateThumbScrollState)
})

watch([dialog, selectedCategoryId, activeItemIndex], async ([isOpen]) => {
  if (!isOpen) {
    return
  }

  await nextTick()
  syncActiveThumbIntoView()
})
</script>

<style scoped>
.curated-gallery {
  padding: 132px 0;
  padding-top: 0;
  background: #fff;
}

.curated-gallery__breakout {
  width: min(1640px, calc(100vw - 36px));
  margin: 0 auto;
}

.curated-gallery__title {
  max-width: 20ch;
  margin-left: auto;
  margin-right: auto;
}

.curated-gallery__description {
  max-width: 680px;
}

.gallery-categories {
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  grid-auto-rows: minmax(180px, auto);
  gap: 18px;
}

.gallery-category {
  position: relative;
  overflow: hidden;
  border: 0;
  border-radius: 12px;
  padding: 0;
  text-align: left;
  cursor: pointer;
  background: #201814;
  min-height: 240px;
  box-shadow: 0 18px 42px rgba(41, 28, 20, 0.12);
  transition: transform 0.45s ease, box-shadow 0.45s ease;
}

.gallery-category:hover {
  transform: translateY(-4px);
  box-shadow: 0 28px 54px rgba(41, 28, 20, 0.16);
}

.gallery-category--hero {
  grid-column: span 8;
  grid-row: span 2;
  min-height: 560px;
}

.gallery-category--tall {
  grid-column: span 4;
  grid-row: span 2;
  min-height: 560px;
}

.gallery-category--portrait {
  grid-column: span 4;
  min-height: 340px;
}

.gallery-category__image {
  position: absolute;
  inset: 0;
}

.gallery-category__overlay {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(180deg, rgba(18, 13, 10, 0.06) 0%, rgba(18, 13, 10, 0.5) 48%, rgba(18, 13, 10, 0.86) 100%),
    linear-gradient(90deg, rgba(18, 13, 10, 0.46) 0%, rgba(18, 13, 10, 0.12) 38%, rgba(18, 13, 10, 0.14) 100%);
}

.gallery-category__content {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  min-height: 100%;
  padding: 24px;
}

.gallery-category__kicker {
  color: rgba(214, 188, 149, 0.92);
  text-transform: uppercase;
  letter-spacing: 0.18em;
  font-size: 0.7rem;
  margin-bottom: 10px;
}

.gallery-category__title-row {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 14px;
}

.gallery-category__title {
  color: #fff;
  font-size: clamp(1.4rem, 2vw, 2rem);
  line-height: 1.06;
  margin: 0;
  max-width: 19ch;
  flex: 1;
}

.gallery-category--portrait .gallery-category__title,
.gallery-category--tall .gallery-category__title {
  max-width: 15ch;
}

.gallery-category__arrow {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  border: 1px solid rgba(214, 188, 149, 0.35);
  border-radius: 999px;
  color: rgba(214, 188, 149, 0.92);
  flex-shrink: 0;
  transform: translateX(0);
  transition: transform 0.25s ease, border-color 0.25s ease, background-color 0.25s ease;
}

.gallery-category:hover .gallery-category__arrow {
  transform: translateX(4px);
  border-color: rgba(214, 188, 149, 0.64);
  background: rgba(214, 188, 149, 0.08);
}

.gallery-category__text {
  color: rgba(255, 255, 255, 0.76);
  line-height: 1.68;
  max-width: 38ch;
  margin: 0 0 16px;
}

.gallery-category__hint {
  color: rgba(255, 255, 255, 0.92);
  font-size: 0.8rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.curated-gallery__action {
  display: flex;
  justify-content: center;
  margin-top: 36px;
}

.gallery-dialog :deep(.v-overlay__content) {
  width: 100vw;
  height: 100vh;
  max-width: 100vw;
  max-height: 100vh;
  margin: 0;
}

.gallery-dialog__shell {
  width: 100vw;
  height: 100vh;
  background: rgba(10, 8, 7, 0.85);
  color: #fff;
  border-radius: 0;
  padding: 0;
  position: relative;
  overflow: hidden;
}

.gallery-dialog__topbar {
  display: flex;
  justify-content: flex-end;
  gap: 20px;
  align-items: flex-start;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 3;
  padding: 18px 24px 30px;
  background: linear-gradient(180deg, rgba(8, 6, 5, 0.46) 0%, rgba(8, 6, 5, 0) 100%);
}

.gallery-dialog__close,
.gallery-dialog__nav {
  color: #fff;
}

.gallery-dialog__close {
  background: rgba(255, 255, 255, 0.03);
  align-self: flex-start;
}

.gallery-dialog__stage-shell {
  height: 100%;
}

.gallery-dialog__stage-wrap {
  position: relative;
  height: 100%;
}

.gallery-dialog__stage {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  background: transparent;
  border-radius: 0;
  overflow: hidden;
  padding: 74px 96px 132px;
}

.gallery-dialog__media,
.gallery-dialog__video {
  width: min(1480px, calc(100vw - 220px));
  height: calc(100vh - 210px);
  border-radius: 0;
}

.gallery-dialog__media :deep(img) {
  object-fit: contain;
}

.gallery-dialog__video {
  display: block;
  object-fit: contain;
  background: #0f0c0a;
}

.gallery-dialog__nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2;
  width: 52px;
  height: 52px;
  background: rgba(14, 10, 8, 0.12);
  backdrop-filter: blur(6px);
  opacity: 0.28;
  transition: opacity 0.25s ease, background-color 0.25s ease;
}

.gallery-dialog__stage-wrap:hover .gallery-dialog__nav {
  opacity: 0.78;
  background: rgba(14, 10, 8, 0.24);
}

.gallery-dialog__nav--prev {
  left: 18px;
}

.gallery-dialog__nav--next {
  right: 18px;
}

.gallery-dialog__info {
  position: absolute;
  left: 50%;
  bottom: 18px;
  transform: translateX(-50%);
  z-index: 3;
  width: min(1240px, calc(100vw - 120px));
  padding: 0 52px;
}

.gallery-dialog__thumbs {
  display: flex;
  gap: 10px;
  width: 100%;
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;
  scroll-behavior: smooth;
  padding: 8px;
  border-radius: 0;
  background: rgba(15, 12, 10, 0.22);
  backdrop-filter: blur(16px);
  scrollbar-width: none;
}

.gallery-dialog__thumb {
  position: relative;
  border: 0;
  border-radius: 0;
  overflow: hidden;
  padding: 0;
  background: rgba(255, 255, 255, 0.02);
  cursor: pointer;
  min-height: 76px;
  min-width: 132px;
  flex: 0 0 132px;
  opacity: 0.52;
  transition: opacity 0.25s ease, transform 0.25s ease;
}

.gallery-dialog__thumb-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 4;
  width: 38px;
  height: 38px;
  background: rgba(14, 10, 8, 0.32);
  backdrop-filter: blur(10px);
  color: #fff;
}

.gallery-dialog__thumb-nav--prev {
  left: 0;
}

.gallery-dialog__thumb-nav--next {
  right: 0;
}

.gallery-dialog__thumbs::-webkit-scrollbar {
  display: none;
}

.gallery-dialog__thumb--active {
  box-shadow: inset 0 -1px 0 rgba(214, 188, 149, 0.55);
  opacity: 1;
}

.gallery-dialog__thumb:hover {
  opacity: 0.82;
  transform: translateY(-2px);
}

.gallery-dialog__thumb-image {
  height: 76px;
}

.gallery-dialog__thumb-badge {
  position: absolute;
  right: 8px;
  bottom: 8px;
  padding: 3px 7px;
  border-radius: 999px;
  background: rgba(18, 13, 10, 0.78);
  color: #fff;
  font-size: 0.64rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

@media (max-width: 1366px) and (min-width: 961px) {
  .curated-gallery {
    padding: 112px 0 92px;
  }

  .curated-gallery__breakout {
    width: min(1320px, calc(100vw - 48px));
  }

  .gallery-categories {
    gap: 16px;
  }

  .gallery-category--hero,
  .gallery-category--tall {
    min-height: 460px;
  }

  .gallery-category--portrait {
    min-height: 290px;
  }

  .gallery-dialog__stage {
    padding: 66px 78px 116px;
  }

  .gallery-dialog__media,
  .gallery-dialog__video {
    width: min(1320px, calc(100vw - 180px));
    height: calc(100vh - 196px);
  }

  .gallery-dialog__info {
    width: min(1080px, calc(100vw - 88px));
  }
}

@media (max-height: 820px) and (min-width: 961px) {
  .gallery-dialog__stage {
    padding: 58px 72px 102px;
  }

  .gallery-dialog__media,
  .gallery-dialog__video {
    height: calc(100vh - 176px);
  }

  .gallery-dialog__info {
    bottom: 10px;
  }
}

@media (max-width: 1264px) {
  .curated-gallery__breakout {
    width: min(1280px, calc(100vw - 28px));
  }

  .gallery-category--hero,
  .gallery-category--tall,
  .gallery-category--portrait {
    grid-column: span 6;
    grid-row: span 1;
    min-height: 320px;
  }
}

@media (max-width: 960px) and (min-width: 600px) {
  .gallery-category--hero {
    grid-column: span 12;
    min-height: 380px;
  }

  .gallery-category--tall,
  .gallery-category--portrait {
    grid-column: span 6;
    grid-row: span 1;
    min-height: 280px;
  }
}

@media (max-width: 780px) {
  .curated-gallery {
    padding: 92px 0 76px;
  }

  .curated-gallery__breakout {
    width: calc(100vw - 24px);
  }

  .gallery-categories {
    gap: 16px;
  }

  .gallery-dialog__topbar {
    padding: 16px 18px;
  }

  .gallery-dialog__stage {
    padding: 76px 56px 112px;
  }

  .gallery-dialog__media,
  .gallery-dialog__video {
    width: min(100%, calc(100vw - 120px));
    height: calc(100vh - 228px);
  }

  .gallery-dialog__info {
    width: calc(100vw - 72px);
    bottom: 14px;
    padding: 0 44px;
  }
}

@media (max-width: 640px) {
  .curated-gallery {
    padding: 52px 0 48px;
  }

  .gallery-categories {
    grid-template-columns: 1fr;
    gap: 14px;
  }

  .gallery-category--hero,
  .gallery-category--tall,
  .gallery-category--portrait {
    grid-column: span 1;
    min-height: 248px;
  }

  .gallery-category__content {
    padding: 16px;
  }

  .gallery-category__text {
    max-width: 100%;
  }

  .curated-gallery__action {
    margin-top: 22px;
  }

  .gallery-dialog__topbar {
    padding: 12px 12px 0;
    align-items: flex-start;
  }

  .gallery-dialog__nav {
    width: 38px;
    height: 38px;
  }

  .gallery-dialog__nav--prev {
    left: 4px;
  }

  .gallery-dialog__nav--next {
    right: 4px;
  }

  .gallery-dialog__stage {
    padding: 62px 24px 98px;
  }

  .gallery-dialog__media,
  .gallery-dialog__video {
    width: calc(100vw - 48px);
    height: calc(100vh - 176px);
  }

  .gallery-dialog__info {
    width: calc(100vw - 24px);
    bottom: 8px;
    padding: 0 34px;
  }

  .gallery-dialog__thumbs {
    gap: 8px;
    padding: 6px;
  }

  .gallery-dialog__thumb-nav {
    width: 30px;
    height: 30px;
  }

  .gallery-dialog__thumb {
    min-width: 104px;
    min-height: 64px;
    flex-basis: 104px;
  }

  .gallery-dialog__thumb-image {
    height: 64px;
  }
}
</style>