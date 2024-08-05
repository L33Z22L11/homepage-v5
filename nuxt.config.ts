import homepageConfig from './homepage.config'

export default defineNuxtConfig({
    app: {
        rootId: 'z-root',
        head: {
            htmlAttrs: {
                lang: homepageConfig.language,
            },
            link: [
                ...homepageConfig.injectHeadLinks,
                {
                    rel: 'icon',
                    href: homepageConfig.favicon,
                },
            ],
            templateParams: {
                separator: '|',
            },
            titleTemplate: `%s %separator ${homepageConfig.title}`,
        },
    },

    appConfig: homepageConfig,

    compatibilityDate: '2024-08-03',

    components: [
        { path: '~/components/partial', prefix: 'Z' },
        { path: '~/components/zhilu', prefix: 'ZL' },
        '~/components',
    ],

    css: [
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
                    additionalData: '@import "@/assets/variable.scss";',
                },
            },
        },
    },

    vue: {
        propsDestructure: true,
        runtimeCompiler: true,
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
        domains: homepageConfig.imageDomains,
        format: ['avif', 'webp'],
    },

    site: { url: homepageConfig.url },
})
