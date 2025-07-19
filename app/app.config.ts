import type { Nav } from '~/types/nav'
import { h } from 'vue'
import homepageConfig from '~~/homepage.config'

// 图标查询：https://yesicon.app/ph
// 图标插件：https://marketplace.visualstudio.com/items?itemName=antfu.iconify

export default defineAppConfig({
    ...homepageConfig,

    footer: {
        copyright: `© ${new Date().getFullYear()} 纸鹿本鹿 (L33Z22L11)`,
        message: h('a', { href: 'https://beian.miit.gov.cn/', target: '_blank', rel: 'noopener nofollow' }, '陕ICP备2025072742号-1'),
    },

    nav: [
        {
            title: '',
            items: [
                { icon: 'ph:house-duotone', text: '主页', url: '/' },
                { icon: 'ph:pen-nib-duotone', text: '文章', url: '/article' },
                // { icon: "ph:pen-nib-duotone", text: "文章", url: "https://blog.zhilu.cyou", external: true },
                // { icon: "ph:code-duotone", text: "项目", url: "/project" },
                { icon: 'ph:code-duotone', text: '项目', url: 'https://github.com/L33Z22L11/#user-33976233-pinned-items-reorder-form', external: true },
                { icon: 'ph:globe-duotone', text: '站点', url: '/site' },
                { icon: 'ph:files-duotone', text: '日志', url: '/log' },
            ],
        },
        {
            title: '社交',
            items: [
                { icon: 'basil:qq-outline', text: '群: 169994096', url: 'https://jq.qq.com/?_wv=1027&k=lQfNSeEd', external: true },
                { icon: 'ph:github-logo-duotone', text: 'Github', url: 'https://github.com/L33Z22L11', external: true },
                { icon: 'ph:telegram-logo-duotone', text: 'Telegram', url: 'https://t.me/L33Z22L11', external: true },
            ],
        },
    ] satisfies Nav,

    themes: {
        light: {
            icon: 'ph:sun-duotone',
            tip: '浅色模式',
        },
        system: {
            icon: 'ph:monitor-duotone',
            tip: '跟随系统',
        },
        dark: {
            icon: 'ph:moon-duotone',
            tip: '深色模式',
        },
    },
})
