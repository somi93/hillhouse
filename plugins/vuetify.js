// import this after install `@mdi/font` package
import '@mdi/font/css/materialdesignicons.css'

import 'vuetify/styles'
import {createVuetify} from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg'

const cormorant = {
    family: "'Cormorant Garamond', serif",
    weight: 400,
}

export default defineNuxtPlugin((app) => {
    const vuetify = createVuetify({
        defaults: {
            global: {
                fontFamily: "'Inter', sans-serif",
            },
        },
        display: {
            defaultTheme: 'light',
        },
        typography: {
            fontFamily: "'Inter', sans-serif",
            h1: cormorant,
            h2: cormorant,
            h3: cormorant,
            h4: cormorant,
            h5: cormorant,
            h6: cormorant,
        },
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
                        primary: '#b28c59',
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