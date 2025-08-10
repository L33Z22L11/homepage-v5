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

	// 用于在主页展示下游引用
	fork: [
		{
			img: 'https://image.m-c.top/?/images/2024/07/21/iyt3mhQCDe/b_a3f6e95501bcc4ce64c19c63a1211bcd.png',
			link: 'https://oio.mckfs.com/',
			text: 'Oiolosse MC服',
		},
		{
			img: 'https://bu.dusays.com/2024/07/13/66929d307adb9.png',
			link: 'https://henrywhu.cn/',
			text: 'Henry Moreau',
		},
		{
			img: 'https://api-space.tnxg.top/avatar?s=qq',
			link: 'https://tnxg.top/',
			text: '天翔TNXG',
		},
		{
			img: 'https://ykc.im/icon.png',
			link: 'https://ykc.im/',
			text: 'York Chou',
		},
		{
			img: 'https://www.xxfer.cn/icon.png',
			link: 'https://www.xxfer.cn/',
			text: '小李同学',
		},
		{
			img: 'https://q1.qlogo.cn/g?b=qq&nk=1043865083&s=2',
			link: 'https://www.xlenco.top/',
			text: 'Xlenco',
		},
		{
			img: 'https://www.mugzx.top/icon.png',
			link: 'https://www.mugzx.top/',
			text: 'Mugzx',
		},
		{
			img: 'https://cn.cravatar.com/avatar/1F6C8947D35A8186A1647009BA8BC5F2?size=256',
			link: 'https://www.kemiao.online/',
			text: '克喵爱吃卤面',
		},
		{
			img: 'https://q1.qlogo.cn/g?b=qq&nk=3310149631&s=2',
			link: 'https://gr114.com/',
			text: 'GreenRoc',
		},
	],

	nav: [
		{
			title: '',
			items: [
				{ icon: 'ph:house-duotone', text: '主页', url: '/' },
				{ icon: 'ph:pen-nib-duotone', text: '文章', url: '/article' },
				// { icon: "ph:pen-nib-duotone", text: "文章", url: "https://blog.zhilu.cyou", external: true },
				{ icon: 'ph:code-duotone', text: '项目', url: '/project' },
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
