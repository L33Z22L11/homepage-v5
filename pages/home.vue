<script setup lang="ts">
useHead({ title: '' })
definePageMeta({
    alias: ['/'],
    title: '主页',
})
const appConfig = useAppConfig()
</script>

<template>
    <ZLAvatar class="avatar" />
    <div class="wrapper">
        <ZField label="<span style='font-size: 3rem;'>👋</span>">
            <h1 style="font-size: 3rem;">
                你好，<br>我是<mark>{{ appConfig.author.name }}</mark>
            </h1>
            <p class="desc">
                {{ appConfig.description }}
            </p>
            <div>
                <ZButton icon="ph:files-duotone" to="https://blog.zhilu.cyou/">
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
                    西邮&thinsp;Linux&thinsp;兴趣小组
                </ZLink> 成员，Windows 11 和 Arch Linux 用户。
            </p>
        </ZField>

        <ZField label="关于网站">
            <p>
                自2024年6月1日开始重构，目前还在修缮中。
            </p>
        </ZField>
        <ZField label="开源衍生">
            <p>
                感谢
                <ZBadge img="https://cdn.libravatar.org/avatar/ecb2ea87c4532f007838d86d02798f89" to="https://github.com/KazariEX">
                    KazariEX
                </ZBadge>
                和众多朋友的帮助。<br>
                网站开源在
                <ZLink to="https://github.com/L33Z22L11/ZhiluSite" icon="ph:github-logo-duotone">
                    L33Z22L11/ZhiluSite
                </ZLink>上。
            </p>
            <p>
                欢迎参考：<br>
                <ZBadge img="https://image.m-c.top/?/images/2024/07/21/iyt3mhQCDe/b_a3f6e95501bcc4ce64c19c63a1211bcd.png" to="https://oio.mckfs.com/" rel="nofollow" square>
                    Oiolosse MC 服务器
                </ZBadge>
                <ZBadge rel="nofollow" img="https://bu.dusays.com/2024/07/13/66929d307adb9.png" to="https://henrywhu.cn/">
                    Henry Moreau
                </ZBadge>
            </p>
        </ZField>
    </div>
</template>

<style scoped lang="scss">
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
