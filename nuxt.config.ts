export default defineNuxtConfig({
    app: {
        rootId: 'z-root',
        head: {
            htmlAttrs: {
                lang: 'zh',
            },
            link: [
                {
                    rel: 'icon',
                    href: 'https://blog.zhilu.cyou/static/icon.png',
                },
            ],
            templateParams: {
                separator: '|',
            },
            titleTemplate: '%s %separator 纸鹿 (@L33Z22L11)',
        },
    },
    components: [
        { path: '~/components/particle', prefix: 'Z' },
        { path: '~/components/zhilu', prefix: 'ZL' },
        '~/components',
    ],
    css: [
        '@/assets/main.scss',
    ],
    devtools: { enabled: false },
    experimental: {
        viewTransition: true,
    },
    srcDir: './',
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@import "@/assets/variable.scss";',
                }
            }
        }
    },
    vue: {
        propsDestructure: true,
        runtimeCompiler: true
    },
    modules: [
        'nuxt-icon',
        'nuxt-simple-robots',
        'nuxt-site-config',
        '@nuxtjs/seo',
        '@nuxtjs/sitemap',
        '@pinia/nuxt',
    ],
    site: {
        url: 'https://zhilu.cyou',
    },
})
