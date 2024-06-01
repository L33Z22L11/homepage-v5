export default defineNuxtConfig({
    modules: [
        // '@nuxt/image',
        'nuxt-icon',
    ],
    ssr: false,
    devtools: { enabled: false },
    css: [
        'assets/main.scss',
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
