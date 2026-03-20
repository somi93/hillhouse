// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

export default defineNuxtConfig({
    app: {
        head: {
            htmlAttrs: {
                lang: 'sr',
            },
            meta: [
                { charset: 'utf-8' }, // Set your desired charset
            ],
            link: [
                { rel: 'shortcut icon', type: "image/x-icon", href: 'https://www.hillhouse.rs/favicon.ico' }, // Replace with your favicon file type and name
            ],
        }
    },
    router: {
        base: `/hillhouse`,
        extendRoutes(routes) {
            let addAlias = (route) => {
                if (route.children && route.children.length) {
                    route.children.forEach(addAlias)
                }
                route.alias = (route.path + '/index.html').replace('//', '/')
            };
            routes.forEach(addAlias)
        },
        redirects: [
            { from: '^/http://(.*)', to: 'https://www.hillhouse.rs/$1', permanent: true }, // Redirect http to https with www
        ],
    },
    // devtools: { enabled: true },
    devServer: {
        port: 3004
    },
    css: ['~/assets/main.css'],
    build: {
        transpile: ['vuetify'],
    },
    modules: [
        'nuxt-aos',
        '@nuxtjs/device',
        '@nuxtjs/i18n',
        (_options, nuxt) => {
            nuxt.hooks.hook('vite:extendConfig', (config) => {
                // @ts-expect-error
                config.plugins.push(vuetify({ autoImport: true }))
            })
        },
        'nuxt-gtag',
        '@stefanobartoletti/nuxt-social-share'
    ],
    socialShare: {
        // module options
    },
    gtag: {
        id: 'G-LMR22J78MP',
        enabled: false,
        debug: true, // Enable to test in development mode
    },
    i18n: {
        vueI18n: './i18n.config.ts' // if you are using custom path, default
    },
    vite: {
        vue: {
            template: {
                transformAssetUrls,
            },
        },
    },
    generate: {
        dir: 'hillhouse',
    }
})
