import type { NavGroup } from '~/types/nav'

const author = {
    name: '纸鹿本鹿',
    avatar: 'https://wsrv.nl/?url=github.com/L33Z22L11.png',
    email: 'hi@zhilu.cyou',
    homepage: 'https://zhilu.cyou',
}

export default {
    title: '纸鹿 (@L33Z22L11)',
    description: '纸鹿至麓不知路，支炉制露不止漉。',
    author,
    language: 'zh-CN',
    timezone: 'Asia/Shanghai',
    favicon: '/icon.png',
    url: 'https://zhilu.cyou',
    blogAtom: 'https://blog.zhilu.cyou/atom.xml',
    footer: {
        copyright: `© ${new Date().getFullYear()} 纸鹿本鹿`,
        message: 'aka Zhilu, L33Z22L11',
    },
    imageDomains: [
        'blog.zhilu.cyou',
        // '7.isyangs.cn',
    ],
    injectHeadLinks: [
        // { rel: 'stylesheet', href: '//s1.hdslb.com/bfs/static/jinkela/long/font/medium.css', media: 'none', onload: 'this.media="all"' },
    ],
    nav: <NavGroup[]> [
        {
            title: '',
            list: [
                { icon: 'ph:house-duotone', title: '主页', link: '/' },
                { icon: 'ph:pen-nib-duotone', title: '文章', link: '/article' },
                // { icon: "ph:pen-nib-duotone", title: "文章", link: "https://blog.zhilu.cyou", external: true },
                // { icon: "ph:code-duotone", title: "项目", link: "/project" },
                { icon: 'ph:code-duotone', title: '项目', link: 'https://github.com/L33Z22L11/#user-33976233-pinned-items-reorder-form', external: true },
                { icon: 'ph:globe-duotone', title: '站点', link: '/site' },
                { icon: 'ph:files-duotone', title: '日志', link: '/log' },
            ],
        },
        {
            title: '社交',
            list: [
                { icon: 'ri:qq-fill', title: '群: 169994096', link: 'https://jq.qq.com/?_wv=1027&k=lQfNSeEd', external: true },
                { icon: 'ph:github-logo-duotone', title: 'Github', link: 'https://github.com/L33Z22L11', external: true },
                { icon: 'ph:telegram-logo-duotone', title: 'Telegram', link: 'https://t.me/L33Z22L11', external: true },
            ],
        },
    ],
}
