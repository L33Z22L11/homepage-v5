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
        <ZField label="<span style='font-size: 3rem;'>👋</span>">
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
                <!-- eslint-disable-next-line vue/singleline-html-element-content-newline -->
                <ZLink to="https://github.com/xiyou-linuxer">西邮&thinsp;Linux&thinsp;兴趣小组</ZLink>成员，Windows 11 和 Arch Linux 用户。
            </p>
        </ZField>

        <ZField label="近期活动">
            <p>
                <!-- eslint-disable-next-line vue/singleline-html-element-content-newline -->
                7 月完善<ZLink to="https://wiki.cooo.site/">西邮Wiki</ZLink>，8 月使用 Nuxt Content 重构了<ZLink to="https://blog.zhilu.cyou/">个人博客</ZLink>，近期持续开发中。
            </p>
        </ZField>

        <ZField label="关于主页">
            <p>
                自2024年6月1日开始重构，目前缓慢修缮中。
            </p>
            <p>
                感谢
                <ZBadge link="https://github.com/KazariEX">
                    KazariEX
                </ZBadge> <ZBadge link="https://github.com/isYangs">
                    isYangs
                </ZBadge>
                等众多朋友为个人主页提供帮助。<br>
                <!-- eslint-disable-next-line vue/singleline-html-element-content-newline -->
                主页开源在<ZLink to="https://github.com/L33Z22L11/homepage-v5" icon="ph:github-logo-duotone">L33Z22L11/homepage-v5</ZLink>上。
            </p>
            <p>
                欢迎使用、参考样式：<br>
                <ZBadge rel="nofollow" img="https://image.m-c.top/?/images/2024/07/21/iyt3mhQCDe/b_a3f6e95501bcc4ce64c19c63a1211bcd.png" link="https://oio.mckfs.com/">
                    Oiolosse MC服
                </ZBadge> <ZBadge rel="nofollow" img="https://bu.dusays.com/2024/07/13/66929d307adb9.png" link="https://henrywhu.cn/">
                    Henry Moreau
                </ZBadge> <ZBadge rel="nofollow" img="https://api-space.tnxg.top/avatar?s=qq" link="https://tnxg.top/">
                    天翔TNXG
                </ZBadge> <ZBadge rel="nofollow" img="https://ykc.im/icon.png" link="https://ykc.im/">
                    York Chou
                </ZBadge>
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
