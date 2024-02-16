import { defineConfig, type DefaultTheme } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-Hans',
  title: '纸鹿小站',
  description: '',
  lastUpdated: true,
  cleanUrls: true,

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/icon.png',
    nav: nav(),

    sidebar: [
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/L33Z22L11' },
    ],

    externalLinkIcon: true,
    langMenuLabel: '切换语言',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    sidebarMenuLabel: '菜单',
    outline: { label: '目录' },
    returnToTopLabel: '返回顶部',
    editLink: {
      pattern: 'https://github.com/L33Z22L11/ZhiluSite/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页面'
    },
    lastUpdated: {
      text: '更新于',
      formatOptions: { dateStyle: 'short', timeStyle: 'medium' }
    },
    docFooter: { prev: '上一篇', next: '下一篇' },

    footer: {
      message: '',
      copyright: `© 2019-${new Date().getFullYear()} 纸鹿本鹿 / Zhilu / L33Z22L11`
    },
  },
  head: [
    ['link', { rel: 'icon', href: '/icon.png' }],
    ['link', { rel: 'stylesheet', href: '//s1.hdslb.com/bfs/static/jinkela/long/font/regular.css', media: 'none', onload: 'media="all"' }],
    ['link', { rel: 'stylesheet', href: '//s1.hdslb.com/bfs/static/jinkela/long/font/medium.css', media: 'none', onload: 'media="all"' }],
  ],
})

function nav(): DefaultTheme.NavItem[] {
  return [
    { text: '博客', link: 'https://blog.zhilu.cyou' },
    {
      text: '站点', items: [
        { text: 'CO导航', link: 'https://cooo.site' },
        { text: '考试时钟', link: 'https://exam.thisis.host' },
        { text: 'archlinux简明指南-镜像', link: 'https://arch.cooo.site/' },
        { text: '更多', link: '/site' },
      ]
    },
    {
      text: '社交',
      items: [
        { text: 'QQ群', link: 'https://jq.qq.com/?_wv=1027&k=lQfNSeEd' },
        { text: '哔哩哔哩', link: 'https://space.bilibili.com/108831145' },
        { text: '网易云音乐', link: 'https://music.163.com/#/user/home?id=444705789' },
        { text: 'Telegram', link: 'https://t.me/L33Z22L11' },
        { text: '邮箱', link: 'mailto:hi@zhilu.cyou' },
      ]
    },
    { text: '友链', link: 'https://blog.zhilu.cyou/link' },
  ]
}