export default defineNuxtConfig({
    modules: [
        // '@nuxt/image',
        'nuxt-icon',
    ],
    devtools: { enabled: false },
    css: [
        'assets/main.scss',
    ],
    components: [
        { path: '~/components/particle', prefix: 'Z' },
        { path: '~/components/zhilu', prefix: 'ZL' },
        '~/components'
    ],
    app: {
        rootId: "z-root",
        head: {
            titleTemplate: "%s %separator 纸鹿 (@L33Z22L11)",
            templateParams: {
                separator: "|",
            },
            link: [
                {
                    rel: "icon",
                    type: "image/x-icon",
                    href: "https://blog.zhilu.cyou/static/icon.png",
                },
            ],
        },
    }
})
