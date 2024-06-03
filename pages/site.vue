<script setup>
useHead({ title: '站点' });
definePageMeta({ headerText: '一些网站' });
</script>

<template>
    <div class="wrapper">
        <h2>工具类</h2>
        <h3>CO导航 | XUPT-Nav</h3>
        <div>
            <ZButton icon="ph:planet-duotone" to="https://cooo.site">访问</ZButton>
            <ZButton icon="ph:github-logo-duotone" to="https://github.com/L33Z22L11/XUPT-Nav">GitHub</ZButton>
        </div>
        <p>为西安邮电大学学生提供网址导航服务，于2023年2月7日开始运营，是“更适合西邮宝宝体质的网址导航”。</p>

        <h3>考试时钟 | ExamClock</h3>
        <div>
            <ZButton icon="ph:planet-duotone" to="https://exam.thisis.host">访问</ZButton>
            <ZButton icon="ph:github-logo-duotone" to="https://github.com/L33Z22L11/ExamClock">GitHub</ZButton>
        </div>
        <p>用于宝鸡中学校内考试，可以在大屏上展示科目信息、起止时间、考试进度，支持切换年级、文理科，于2021年4月1日上线并投入使用。</p>

        <h3>西邮 Linux 兴趣小组培养计划 | Plan</h3>
        <div>
            <ZButton icon="ph:planet-duotone" to="https://plan.xiyoulinux.com/">访问</ZButton>
            <ZButton icon="ph:github-logo-duotone" to="https://github.com/xiyou-linuxer/Plan">GitHub</ZButton>
        </div>
        <p>西邮 Linux 兴趣小组的培养计划，于2021年11月4日开源。本人于2024年3月20日使用 MkDocs 为此 Plan 构建网站。</p>

        <h3>Arch Linux 简明指南（镜像站） | ArchGuideMirror</h3>
        <div>
            <ZButton icon="ph:planet-duotone" to="https://arch.cooo.site">访问</ZButton>
        </div>
        <p>帮助新手快速上手 Arch Linux，包含安装、配置、维护等教程文档。<ZLink to="https://arch.icekylin.online">源站</ZLink>
            加载速度较慢，本人于2023年7月14日后重新使用 Cloudflare Pages 部署。</p>

        <h2>组织门户</h2>

        <h3>西邮 Linux 兴趣小组 | Xiyou Linux Group</h3>
        <div>
            <ZButton icon="ph:planet-duotone" to="https://xiyoulinux.com/">访问</ZButton>
        </div>
        <p>西安邮电大学计算机学院2006年9月建立的一个兴趣小组。本人于2022年10月22日成为其中一员，于2024年3月16日使用 VitePress 重建官网。</p>

        <h3>野生技协 | TECHYES</h3>
        <div>
            <ZButton icon="ph:planet-duotone" to="https://thisis.host">访问</ZButton>
        </div>
        <p>宝鸡中学校内的一个自发性的技术协助组织、无门槛的技术交流群，旨在信息分享、交流与公开，于2020年7月20日对外开放，多个 <ZLink to="https://thisis.host/site"> 二级域名
            </ZLink>为校友提供项目部署服务。官网于2021年8月8日建立，并于2024年2月3日升级为博客。</p>

        <h3>邮立方 | Cube of Posts</h3>
        <div>
            <ZButton icon="ph:planet-duotone" to="https://cop.cooo.site">访问</ZButton>
        </div>
        <p>西安邮电大学校内的 Minecraft 兴趣交流团体，[Minecraft 高校联盟
            (MUA)](https://www.mualliance.cn/)成员，于2023年10月6日对外开放。官网于2024年1月1日建立，并于2024年2月10日升级为博客。IMUcraft 协助建立的 <ZLink
                to="https://cop.imu.nm.cn/">邮立方皮肤站</ZLink> 于2024年2月20日上线。</p>

        <h3>方块茶话会 | Block Tea Reception</h3>
        <div>
            <ZButton icon="ph:planet-duotone" to="https://btr.thisis.host/">访问</ZButton>
        </div>
        <p>宝鸡中学校内的 Minecraft 爱好群体，由 <ZLink icon="ph:github-logo-duotone" to="https://github.com/guuguai/">古古怪怪GuuGuai
            </ZLink> 于2020年7月17日建立。帮助文档网站于2022年6月12日建立，并于2024年2月21日迁移。</p>
    </div>
</template>

<style scoped lang="scss">
.wrapper > * { margin-block: 1.5em 1em; }
</style>