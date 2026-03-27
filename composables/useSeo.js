import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

export const SEO_SITE_URL = 'https://www.hillhouse.rs'
export const SEO_SITE_NAME = 'Hill House'

export const SEO_DEFAULT_IMAGE = {
  url: `${SEO_SITE_URL}/hillhouse/media/images/gallery/professional/vila-prestige-hill-15-1920x1438.jpeg`,
  width: 1920,
  height: 1438,
  type: 'image/jpeg',
  alt: 'Hill House luxury villas near Belgrade',
}

const ORGANIZATION_LOGO = {
  url: `${SEO_SITE_URL}/hillhouse/media/images/logo.png`,
  width: 994,
  height: 232,
}

const SOCIAL_PROFILES = [
  'https://www.instagram.com/hill_luxury_house',
  'https://www.facebook.com/hillhouselux',
]

const ORGANIZATION_ADDRESS = {
  '@type': 'PostalAddress',
  streetAddress: 'Varovnickih ratnika',
  addressLocality: 'Sepsin',
  addressRegion: 'Mladenovac',
  postalCode: '11433',
  addressCountry: 'RS',
}

function normalizePath(path = '/') {
  if (!path) {
    return '/'
  }

  const withLeadingSlash = path.startsWith('/') ? path : `/${path}`
  const normalized = withLeadingSlash.replace(/\/{2,}/g, '/')

  if (normalized.length > 1 && normalized.endsWith('/')) {
    return normalized.slice(0, -1)
  }

  return normalized
}

function resolveLocaleMeta(localeCode = 'sr') {
  return localeCode === 'en'
    ? { htmlLang: 'en-US', ogLocale: 'en_US' }
    : { htmlLang: 'sr-RS', ogLocale: 'sr_RS' }
}

function resolveLocalizedValue(value, localeCode) {
  if (typeof value === 'function') {
    return value(localeCode)
  }

  if (
    value &&
    typeof value === 'object' &&
    !Array.isArray(value) &&
    ('sr' in value || 'en' in value)
  ) {
    return value[localeCode] ?? value.sr ?? value.en
  }

  return value
}

function resolveImage(image) {
  const resolved = image
    ? typeof image === 'string'
      ? { url: image }
      : image
    : SEO_DEFAULT_IMAGE

  return {
    ...SEO_DEFAULT_IMAGE,
    ...resolved,
    url: resolved.url.startsWith('http') ? resolved.url : `${SEO_SITE_URL}${resolved.url}`,
  }
}

export function buildLocalizedPath(path = '/', localeCode = 'sr') {
  const normalized = normalizePath(path)

  if (localeCode === 'en') {
    return normalized === '/' ? '/en' : `/en${normalized}`
  }

  return normalized
}

export function buildAbsoluteUrl(path = '/', localeCode = 'sr') {
  return `${SEO_SITE_URL}${buildLocalizedPath(path, localeCode)}`
}

export function createOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SEO_SITE_URL}/#organization`,
    name: SEO_SITE_NAME,
    url: SEO_SITE_URL,
    logo: {
      '@type': 'ImageObject',
      url: ORGANIZATION_LOGO.url,
      width: ORGANIZATION_LOGO.width,
      height: ORGANIZATION_LOGO.height,
    },
    image: {
      '@type': 'ImageObject',
      url: SEO_DEFAULT_IMAGE.url,
      width: SEO_DEFAULT_IMAGE.width,
      height: SEO_DEFAULT_IMAGE.height,
    },
    sameAs: SOCIAL_PROFILES,
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+38169635632',
        contactType: 'customer support',
        areaServed: 'RS',
        availableLanguage: ['sr', 'en'],
      },
    ],
    address: ORGANIZATION_ADDRESS,
  }
}

export function createWebSiteSchema({ localeCode = 'sr', description, name = SEO_SITE_NAME } = {}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SEO_SITE_URL}/#website`,
    url: SEO_SITE_URL,
    name,
    inLanguage: resolveLocaleMeta(localeCode).htmlLang,
    description,
    publisher: {
      '@id': `${SEO_SITE_URL}/#organization`,
    },
  }
}

export function createBreadcrumbSchema(items = [], localeCode = 'sr') {
  const resolvedItems = items.filter(Boolean)
  const lastItem = resolvedItems[resolvedItems.length - 1]
  const breadcrumbId = lastItem
    ? `${buildAbsoluteUrl(lastItem.path ?? '/', localeCode)}#breadcrumb`
    : `${SEO_SITE_URL}/#breadcrumb`

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    '@id': breadcrumbId,
    itemListElement: resolvedItems.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url ?? buildAbsoluteUrl(item.path ?? '/', localeCode),
    })),
  }
}

export function createWebPageSchema({
  path,
  localeCode = 'sr',
  title,
  description,
  type = 'WebPage',
  image,
  breadcrumbItems,
} = {}) {
  const url = buildAbsoluteUrl(path, localeCode)
  const imageData = resolveImage(image)

  return {
    '@context': 'https://schema.org',
    '@type': type,
    '@id': `${url}#webpage`,
    url,
    name: title,
    description,
    inLanguage: resolveLocaleMeta(localeCode).htmlLang,
    isPartOf: {
      '@id': `${SEO_SITE_URL}/#website`,
    },
    about: {
      '@id': `${SEO_SITE_URL}/#organization`,
    },
    primaryImageOfPage: {
      '@type': 'ImageObject',
      url: imageData.url,
      width: imageData.width,
      height: imageData.height,
    },
    breadcrumb: breadcrumbItems?.length
      ? { '@id': `${url}#breadcrumb` }
      : undefined,
  }
}

export function createVillaBusinessSchema({
  name,
  path,
  localeCode = 'sr',
  description,
  image,
  geo,
  mapsLink,
  amenities = [],
  eventCapacity,
  sleepingCapacity,
} = {}) {
  const url = buildAbsoluteUrl(path, localeCode)
  const imageData = resolveImage(image)

  return {
    '@context': 'https://schema.org',
    '@type': 'LodgingBusiness',
    '@id': `${url}#business`,
    name,
    url,
    description,
    image: imageData.url,
    telephone: '+38169635632',
    address: ORGANIZATION_ADDRESS,
    geo: geo
      ? {
          '@type': 'GeoCoordinates',
          latitude: `${geo.latitude}`,
          longitude: `${geo.longitude}`,
        }
      : undefined,
    hasMap: mapsLink,
    sameAs: SOCIAL_PROFILES,
    amenityFeature: amenities.map((name) => ({
      '@type': 'LocationFeatureSpecification',
      name,
      value: true,
    })),
    maximumAttendeeCapacity: eventCapacity,
    numberOfAccommodationUnits: sleepingCapacity,
    priceRange: '$$$',
  }
}

export function useSeoPage(options) {
  const { locale } = useI18n({ useScope: 'global' })

  useHead(
    computed(() => {
      const localeCode = locale.value === 'en' ? 'en' : 'sr'
      const alternateLocaleCode = localeCode === 'en' ? 'sr' : 'en'
      const localeMeta = resolveLocaleMeta(localeCode)
      const alternateLocaleMeta = resolveLocaleMeta(alternateLocaleCode)
      const path = normalizePath(resolveLocalizedValue(options.path, localeCode) ?? '/')
      const title = resolveLocalizedValue(options.title, localeCode)
      const description = resolveLocalizedValue(options.description, localeCode)
      const keywords = resolveLocalizedValue(options.keywords, localeCode)
      const ogTitle = resolveLocalizedValue(options.ogTitle ?? options.title, localeCode)
      const ogDescription = resolveLocalizedValue(options.ogDescription ?? options.description, localeCode)
      const twitterTitle = resolveLocalizedValue(options.twitterTitle ?? options.ogTitle ?? options.title, localeCode)
      const twitterDescription = resolveLocalizedValue(
        options.twitterDescription ?? options.ogDescription ?? options.description,
        localeCode
      )
      const image = resolveImage(resolveLocalizedValue(options.image, localeCode))
      const schemas = (resolveLocalizedValue(options.schemas, localeCode) ?? []).filter(Boolean)
      const robots = options.noindex
        ? 'noindex, nofollow'
        : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
      const currentUrl = buildAbsoluteUrl(path, localeCode)
      const srUrl = buildAbsoluteUrl(path, 'sr')
      const enUrl = buildAbsoluteUrl(path, 'en')
      const includeCanonical = options.canonical !== false
      const includeAlternates = options.alternates !== false

      return {
        title,
        htmlAttrs: {
          lang: localeMeta.htmlLang,
        },
        link: [
          includeCanonical
            ? { rel: 'canonical', href: currentUrl }
            : null,
          includeAlternates
            ? { rel: 'alternate', hreflang: 'sr-RS', href: srUrl }
            : null,
          includeAlternates
            ? { rel: 'alternate', hreflang: 'en-US', href: enUrl }
            : null,
          includeAlternates
            ? { rel: 'alternate', hreflang: 'x-default', href: srUrl }
            : null,
        ].filter(Boolean),
        meta: [
          { name: 'description', content: description },
          { name: 'robots', content: robots },
          keywords ? { name: 'keywords', content: keywords } : null,
          { name: 'author', content: SEO_SITE_NAME },
          { name: 'publisher', content: SEO_SITE_NAME },
          { property: 'og:site_name', content: SEO_SITE_NAME },
          { property: 'og:type', content: options.type ?? 'website' },
          { property: 'og:title', content: ogTitle },
          { property: 'og:description', content: ogDescription },
          { property: 'og:url', content: currentUrl },
          { property: 'og:locale', content: localeMeta.ogLocale },
          { property: 'og:locale:alternate', content: alternateLocaleMeta.ogLocale },
          { property: 'og:image', content: image.url },
          { property: 'og:image:secure_url', content: image.url },
          { property: 'og:image:width', content: `${image.width}` },
          { property: 'og:image:height', content: `${image.height}` },
          { property: 'og:image:type', content: image.type },
          { property: 'og:image:alt', content: image.alt },
          { name: 'twitter:card', content: 'summary_large_image' },
          { name: 'twitter:title', content: twitterTitle },
          { name: 'twitter:description', content: twitterDescription },
          { name: 'twitter:image', content: image.url },
        ].filter(Boolean),
        script: schemas.map((schema, index) => ({
          type: 'application/ld+json',
          key: `${path.replace(/[^a-z0-9]+/gi, '-').replace(/(^-|-$)/g, '') || 'home'}-${localeCode}-${index}`,
          innerHTML: JSON.stringify(schema),
        })),
        __dangerouslyDisableSanitizers: schemas.length ? ['script'] : undefined,
      }
    })
  )
}