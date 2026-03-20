// import this after install `@mdi/font` package
import '@mdi/font/css/materialdesignicons.css'

import 'vuetify/styles'
import {createVuetify} from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg'

export default defineNuxtPlugin((app) => {
    const vuetify = createVuetify({
        icons: {
            defaultSet: 'mdi',
            aliases,
            sets: {
                mdi,
            },
        },
        theme: {
            themes: {
                light: {
                    dark: false,
                    colors: {
                        primary: '#cfa975',
                        // secondary: '#F14A16',
                        secondary: '#e31e24',
                        accent: '#F3F6Fa'
                    }
                },
                dark: {
                    dark: true,
                    colors: {
                        primary: '#b99d75',
                        // secondary: '#F14A16',
                        secondary: '#e31e24',
                        accent: '#F3F6Fa'
                    }
                },
            },
        },
    })
    app.vueApp.use(vuetify)
})