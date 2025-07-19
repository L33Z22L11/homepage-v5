<script setup lang="ts">
import type { CardProps } from '~/components/partial/Card.vue'
import { ZLink } from '#components'

useHead({ title: '站点' })
definePageMeta({ headerText: '一些网站' })

const toolSites: Array<CardProps> = [
    {
        name: 'CO导航',
        nameAlt: 'xupt-nav',
        buttons: [
            { icon: 'ph:planet-duotone', text: '访问', to: 'https://cooo.site' },
            { icon: 'ph:github-logo-duotone', text: 'GitHub', to: 'https://github.com/xupt-wiki/xupt-nav' },
        ],
        desc: '为西安邮电大学学生提供网址导航服务，于2023年2月7日开始运营，是“更适合西邮宝宝体质的网址导航”。',
    },
    {
        name: '考试时钟',
        nameAlt: 'ExamClock',
        buttons: [
            { icon: 'ph:planet-duotone', text: '访问', to: 'https://exam.thisis.host' },
            { icon: 'ph:github-logo-duotone', text: 'GitHub', to: 'https://github.com/L33Z22L11/ExamClock' },
        ],
        desc: '用于宝鸡中学校内考试，可以在大屏上展示科目信息、起止时间、考试进度，支持切换年级、文理科，于2021年4月1日上线并投入使用。',
    },
    {
        name: '西邮Wiki',
        nameAlt: 'xupt-wiki',
        buttons: [
            { icon: 'ph:planet-duotone', text: '访问', to: 'https://wiki.cooo.site' },
            { icon: 'ph:github-logo-duotone', text: 'GitHub', to: 'https://github.com/xupt-wiki/xupt-wiki' },
        ],
        desc: '西安邮电大学第三方公益校园生活百科，于2024年6月30立项。本人于2024年7月30日使用VitePress搭建，持续更新中。',
    },
    {
        name: '西邮Linux兴趣小组培养计划',
        nameAlt: 'Plan',
        buttons: [
            { icon: 'ph:planet-duotone', text: '访问', to: 'https://plan.xiyoulinux.com' },
            { icon: 'ph:github-logo-duotone', text: 'GitHub', to: 'https://github.com/xiyou-linuxer/Plan' },
        ],
        desc: '西邮Linux兴趣小组的培养计划，于2021年11月4日开源。本人于2024年3月20日使用MkDocs为此Plan构建网站，于2025年2月24日使用Nextra重构。',
    },

]

const orgSites: Array<CardProps> = [
    {
        name: '西邮Linux兴趣小组',
        nameAlt: 'Xiyou Linux Group',
        buttons: [
            { icon: 'ph:planet-duotone', text: '访问', to: 'https://xiyoulinux.com' },
        ],
        desc: '西安邮电大学计算机学院2006年9月建立的一个兴趣小组。本人于2022年10月22日成为其中一员，于2024年3月16日使用VitePress重建官网。',
    },
    {
        name: '野生技协',
        nameAlt: 'TECHYES',
        buttons: [
            { icon: 'ph:planet-duotone', text: '访问', to: 'https://thisis.host' },
        ],
        desc: () => h('div', [
            '宝鸡中学校内的一个自发性的技术协助组织、无门槛的技术交流群，旨在信息分享、交流与公开，于2020年7月20日对外开放，多个',
            h(ZLink, { to: 'https://thisis.host/site' }, '二级域名'),
            '为校友提供项目部署服务。官网于2021年8月8日建立，并于2024年2月3日升级为博客。',
        ]),
    },
    {
        name: '邮立方',
        nameAlt: 'Cube of Posts',
        buttons: [
            { icon: 'ph:planet-duotone', text: '访问', to: 'https://cop.cooo.site' },
        ],
        desc: () => h('div', [
            '西安邮电大学校内的Minecraft兴趣交流团体，',
            h(ZLink, { to: 'https://www.mualliance.cn/' }, 'Minecraft高校联盟(MUA)'),
            '成员，于2023年10月6日对外开放。官网于2024年1月1日建立，并于2024年2月10日升级为博客。',
        ]),
    },
    {
        name: '方块茶话会',
        nameAlt: 'Block Tea Reception',
        buttons: [
            { icon: 'ph:planet-duotone', text: '访问', to: 'https://btr.thisis.host/' },
        ],
        desc: () => h('div', [
            '宝鸡中学校内的Minecraft爱好群体，由',
            h(ZLink, { icon: 'ph:github-logo-duotone', to: 'https://github.com/guuguai/' }, '古古怪怪GuuGuai'),
            '于2020年7月17日建立。帮助文档网站于2022年6月12日建立，并于2024年2月21日迁移。',
        ]),
    },
    {
        name: '相侵相碍异家人',
        nameAlt: 'Alien Family Hub',
        buttons: [
            { icon: 'ph:planet-duotone', text: '访问', to: 'https://alienfamily.us.kg/' },
        ],
        desc: 'Hexo博客交流群“糖果屋”的群友组织的Minecraft服务器，于2024年7月18日建群。2025年2月2日创建了成员列表页面。',
    },
]
</script>

<template>
    <ZTitle>工具类站点</ZTitle>
    <ZCardList :data-list="toolSites" />
    <ZTitle>组织门户</ZTitle>
    <ZCardList :data-list="orgSites" />
</template>

<style lang="scss" scoped>
</style>
