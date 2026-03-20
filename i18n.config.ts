import en from './locales/en.js'
import sr from './locales/sr.js'

export default defineI18nConfig(() => ({
    legacy: false,
    locale: 'sr',
    messages: {
        en,
        sr
    }
}))