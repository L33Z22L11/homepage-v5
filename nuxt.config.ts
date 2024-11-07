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
                // { rel: 'stylesheet', href: 'https://s1.hdslb.com/bfs/static/jinkela/long/font/medium.css', media: 'none', onload: 'this.media="all"' },
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

    vue: {
        propsDestructure: true,
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
        domains: [
            // 'blog.zhilu.cyou',
            // '7.isyangs.cn',
        ],
        format: ['avif', 'webp'],
    },

    site: {
        name: homepageConfig.title,
        url: homepageConfig.url,
    },
})
