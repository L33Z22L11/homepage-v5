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
    sidebar: sidebar(),
    socialLinks: [
      { icon: 'github', link: 'https://github.com/L33Z22L11' },
    ],

    externalLinkIcon: true,
    langMenuLabel: '切换语言',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    sidebarMenuLabel: '菜单',
    outline: { level: [2, 3], label: '目录' },
    returnToTopLabel: '返回顶部',
    editLink: {
      pattern: 'https://github.com/L33Z22L11/ZhiluSite/blame/main/docs/:path',
      text: '源代码'
    },
    lastUpdated: {
      text: '更新于',
      formatOptions: { dateStyle: 'short', timeStyle: 'medium' }
    },
    docFooter: { prev: '上一篇', next: '下一篇' },

    footer: {
      message: '',
      copyright: `© ${new Date().getFullYear()} 纸鹿本鹿 (Zhilu, L33Z22L11)`
    },
  },

  head: [
    ['link', { rel: 'icon', href: '/icon.png' }],
    // ['link', { rel: 'stylesheet', href: '//s1.hdslb.com/bfs/static/jinkela/long/font/regular.css', media: 'none', onload: 'media="all"' }],
    ['link', { rel: 'stylesheet', href: '//s1.hdslb.com/bfs/static/jinkela/long/font/medium.css', media: 'none', onload: 'media="all"' }],
    ['link', { rel: 'stylesheet', href: '//lib.baomitu.com/font-awesome/6.5.1/css/all.min.css', media: 'none', onload: 'media="all"' }],
  ],
})

function nav(): DefaultTheme.NavItem[] {
  return [
    { text: '博客', link: 'https://blog.zhilu.cyou' },
    {
      text: '站点', items: [
        {
          items: [
            { text: 'CO导航', link: 'https://cooo.site' },
            { text: '考试时钟', link: 'https://exam.thisis.host' },
            { text: 'Arch指南-镜像', link: 'https://arch.cooo.site/' },
          ]
        },
        { text: '更多', link: '/site' },
      ]
    },
    { text: '友链', link: 'https://blog.zhilu.cyou/link' },
    { text: '关于', link: '/about' },
  ]
}

function sidebar(): DefaultTheme.Sidebar {
  return [
    { text: '主页', link: '/' },
  ]
}