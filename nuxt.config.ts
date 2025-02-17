import process from 'node:process'
import homepageConfig, { routeRules } from './homepage.config'

export default defineNuxtConfig({
    app: {
        rootId: 'z-root',
        head: {
            htmlAttrs: {
                lang: homepageConfig.language,
            },
            link: [
                { rel: 'icon', href: homepageConfig.favicon },
            ],
            meta: [
                { name: 'author', content: `${homepageConfig.author.name} <${homepageConfig.author.email}>` },
                { 'name': 'generator', 'data-github-repo': 'https://github.com/L33Z22L11/homepage-v5' },
            ],
            templateParams: {
                separator: '|',
            },
            titleTemplate: `%s %separator ${homepageConfig.title}`,
        },
    },

    compatibilityDate: '2024-08-03',

    components: [
        { path: '~/components/partial', prefix: 'Z' },
        '~/components',
    ],

    css: [
        '@/assets/color.scss',
        '@/assets/main.scss',
    ],

    // BUG: 3.14+ Windows 平台内存泄漏
    devtools: { enabled: false },

    experimental: {
        viewTransition: true,
    },

    features: {
        inlineStyles: false,
    },

    future: {
        compatibilityVersion: 4,
    },

    routeRules,

    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@use "@/assets/_variable.scss" as *;',
                    api: 'modern-compiler',
                },
            },
        },
        server: {
            allowedHosts: true,
        },
    },

    modules: [
        '@nuxt/icon',
        '@nuxt/image',
        '@nuxtjs/color-mode',
        '@nuxtjs/seo',
        '@pinia/nuxt',
        '@vueuse/nuxt',
    ],

    colorMode: {
        preference: 'system',
        fallback: 'light',
        classSuffix: '',
    },

    image: {
        // BUG: https://github.com/nuxt/image/issues/1353
        provider: process.env.NUXT_IMAGE_PROVIDER || undefined,
        domains: [],
        format: ['avif', 'webp'],
    },

    ogImage: {
        enabled: false,
    },

    site: {
        name: homepageConfig.title,
        url: homepageConfig.url,
    },
})
