<script setup lang="ts">
import type { CardProps } from '~/components/particle/Card.vue'

useHead({ title: '站点' })
definePageMeta({ headerText: '一些网站' })

const toolSites: Array<CardProps> = [
    {
        name: 'CO导航',
        nameAlt: 'XUPT-Nav',
        buttons: [
            { icon: 'ph:planet-duotone', text: '访问', to: 'https://cooo.site' },
            { icon: 'ph:github-logo-duotone', text: 'GitHub', to: 'https://github.com/L33Z22L11/XUPT-Nav' },
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
        name: '西邮&thinsp;Wiki',
        nameAlt: 'xupt-wiki',
        buttons: [
            { icon: 'ph:planet-duotone', text: '访问', to: 'https://wiki.cooo.site' },
            { icon: 'ph:github-logo-duotone', text: 'GitHub', to: 'https://github.com/xupt-wiki/xupt-wiki' },
        ],
        desc: '西安邮电大学第三方公益校园生活百科，于2024年6月30立项。本人于2024年7月30日使用 VitePress 搭建，持续更新中。',
    },
    {
        name: '西邮&thinsp;Linux&thinsp;兴趣小组<br>培养计划',
        nameAlt: 'Plan',
        buttons: [
            { icon: 'ph:planet-duotone', text: '访问', to: 'https://plan.xiyoulinux.com' },
            { icon: 'ph:github-logo-duotone', text: 'GitHub', to: 'https://github.com/xiyou-linuxer/Plan' },
        ],
        desc: '西邮&thinsp;Linux&thinsp;兴趣小组的培养计划，于2021年11月4日开源。本人于2024年3月20日使用 MkDocs 为此 Plan 构建网站。',
    },
    {
        name: '公众号 MD 编辑器',
        nameAlt: 'md4mp',
        badges: ['镜像'],
        buttons: [
            { icon: 'ph:planet-duotone', text: '访问', to: 'https://md.cooo.site' },
        ],
        desc: '好用的 Markdown 转微信公众号工具。<ZLink to="https://doocs.github.io/md/">源站</ZLink>加载速度较慢，本人于2024年6月18日重新使用 Cloudflare Pages 部署。',
    },
]

const orgSites: Array<CardProps> = [
    {
        name: '西邮&thinsp;Linux&thinsp;兴趣小组',
        nameAlt: 'Xiyou Linux Group',
        buttons: [
            { icon: 'ph:planet-duotone', text: '访问', to: 'https://xiyoulinux.com' },
        ],
        desc: '西安邮电大学计算机学院2006年9月建立的一个兴趣小组。本人于2022年10月22日成为其中一员，于2024年3月16日使用 VitePress 重建官网。',
    },
    {
        name: '野生技协',
        nameAlt: 'TECHYES',
        buttons: [
            { icon: 'ph:planet-duotone', text: '访问', to: 'https://thisis.host' },
        ],
        desc: '宝鸡中学校内的一个自发性的技术协助组织、无门槛的技术交流群，旨在信息分享、交流与公开，于2020年7月20日对外开放，多个 <ZLink to="https://thisis.host/site">二级域名</ZLink>为校友提供项目部署服务。官网于2021年8月8日建立，并于2024年2月3日升级为博客。',
    },
    {
        name: '邮立方',
        nameAlt: 'Cube of Posts',
        buttons: [
            { icon: 'ph:planet-duotone', text: '访问', to: 'https://cop.cooo.site' },
        ],
        desc: '西安邮电大学校内的 Minecraft 兴趣交流团体，<ZLink to="https://www.mualliance.cn/">Minecraft 高校联盟(MUA)</ZLink>成员，于2023年10月6日对外开放。官网于2024年1月1日建立，并于2024年2月10日升级为博客。',
    },
    {
        name: '方块茶话会',
        nameAlt: 'Block Tea Reception',
        buttons: [
            { icon: 'ph:planet-duotone', text: '访问', to: 'https://btr.thisis.host/' },
        ],
        desc: '宝鸡中学校内的 Minecraft 爱好群体，由 <ZLink icon="ph:github-logo-duotone" to="https://github.com/guuguai/">古古怪怪GuuGuai </ZLink> 于2020年7月17日建立。帮助文档网站于2022年6月12日建立，并于2024年2月21日迁移。',
    },
]
</script>

<template>
    <ZTitle>工具类站点</ZTitle>
    <ZCardList :data-list="toolSites" />

    <ZTitle>组织门户</ZTitle>
    <ZCardList :data-list="orgSites" />
</template>

<style scoped lang="scss">
</style>
