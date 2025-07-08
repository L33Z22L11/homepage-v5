<script setup lang="ts">
useHead({ title: '' })
definePageMeta({
    alias: ['/'],
    title: '主页',
})
const appConfig = useAppConfig()
</script>

<template>
    <ZhiluAvatar class="avatar" />
    <div class="wrapper">
        <ZField>
            <template #label>
                <span style="font-size: 3rem;">👋</span>
            </template>
            <h1 style="font-size: 3rem;">
                你好，<br>我是<mark>{{ appConfig.author.name }}</mark>
            </h1>
            <p class="desc">
                {{ appConfig.subtitle }}
            </p>
            <div>
                <ZButton icon="ph:files-duotone" to="https://blog.zhilu.cyou/" primary>
                    博客
                </ZButton>
                <ZButton icon="ph:github-logo-duotone" to="https://github.com/L33Z22L11">
                    GitHub
                </ZButton>
            </div>
        </ZField>

        <ZField label="介绍">
            <p>
                <ZLink to="https://github.com/xiyou-linuxer">
                    西邮 Linux 兴趣小组
                </ZLink>成员，Windows 11 和 Arch
                Linux 用户。
            </p>
        </ZField>

        <ZField label="近期活动">
            <p>
                2024 年 7 月完善<ZLink to="https://wiki.cooo.site/">
                    西邮Wiki
                </ZLink>，8 月使用 Nuxt Content 重构了<ZLink to="https://blog.zhilu.cyou/">
                    个人博客
                </ZLink>，2025 年 3 月重构了西邮 Linux 兴趣小组博客后端，近期正在寻找前端秋招。
            </p>
        </ZField>

        <ZField label="关于主页">
            <p>
                自2024年6月1日开始重构，目前缓慢修缮中。
            </p>
            <p>
                感谢<ZBadge link="https://github.com/KazariEX">
                    KazariEX
                </ZBadge>
                <ZBadge link="https://github.com/isYangs">
                    isYangs
                </ZBadge>等众多朋友为个人主页提供帮助。<br>
                主页开源在<ZLink to="https://github.com/L33Z22L11/homepage-v5" icon="ph:github-logo-duotone">
                    L33Z22L11/homepage-v5
                </ZLink>上。
            </p>
            <p>
                欢迎使用、参考样式：<br>
                <ZBadge
                    img="https://image.m-c.top/?/images/2024/07/21/iyt3mhQCDe/b_a3f6e95501bcc4ce64c19c63a1211bcd.png"
                    link="https://oio.mckfs.com/"
                    text="Oiolosse MC服"
                />
                <ZBadge
                    img="https://bu.dusays.com/2024/07/13/66929d307adb9.png"
                    link="https://henrywhu.cn/"
                    text="Henry Moreau"
                />
                <ZBadge
                    img="https://api-space.tnxg.top/avatar?s=qq"
                    link="https://tnxg.top/"
                    text="天翔TNXG"
                />
                <ZBadge
                    img="https://ykc.im/icon.png"
                    link="https://ykc.im/"
                    text="York Chou"
                />
                <ZBadge
                    img="https://www.xxfer.cn/icon.png"
                    link="https://www.xxfer.cn/"
                    text="小李同学"
                />
                <ZBadge
                    img="https://q1.qlogo.cn/g?b=qq&nk=1043865083&s=2"
                    link="https://www.xlenco.top/"
                    text="Xlenco"
                />
                <ZBadge
                    img="https://www.mugzx.top/icon.png"
                    link="https://www.mugzx.top/"
                    text="Mugzx"
                />
                <ZBadge
                    img="https://cn.cravatar.com/avatar/1F6C8947D35A8186A1647009BA8BC5F2?size=256"
                    link="https://www.kemiao.online/"
                    text="克喵爱吃卤面"
                />
                <ZBadge
                    img="https://cd.ahhf45.top/img/IMG_0555.jpeg"
                    link="https://ahhf45.top/"
                    text="GreenRoc"
                />
            </p>
        </ZField>
    </div>
</template>

<style lang="scss" scoped>
.avatar {
    position: fixed;
    opacity: 0.2;
    top: 0;
    right: 20vw;
    margin-right: -0.4em;
    font-size: min(100vw, 60vh);
    z-index: -1;
}

.desc {
    margin: 1rem 0;
    font-size: 1.5rem;
    color: var(--c-text-2);
}
</style>
