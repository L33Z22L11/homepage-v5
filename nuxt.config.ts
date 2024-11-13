import homepageConfig from './homepage.config'

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
                { name: 'author', content: homepageConfig.author.name },
                { name: 'color-scheme', content: 'light dark' },
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

    experimental: {
        viewTransition: true,
    },

    future: {
        compatibilityVersion: 4,
    },

    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@use "@/assets/_variable.scss" as *;',
                    api: 'modern-compiler',
                },
            },
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
