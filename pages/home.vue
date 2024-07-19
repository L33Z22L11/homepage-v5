<script setup lang="ts">
useHead({ title: '' })
definePageMeta({
    alias: ['/'],
    title: '主页',
})
</script>

<template>
    <ZLAvatar class="avatar" />
    <div class="wrapper">
        <ZField label="<span style='font-size: 3rem;'>👋</span>">
            <div>
                <h1 style="font-size: 3rem;">
                    你好，<br>我是<mark>纸鹿本鹿</mark>
                </h1>
                <p class="desc">
                    纸鹿至麓不知路，支炉制露不止漉。
                </p>
                <div>
                    <ZButton icon="ph:files-duotone" to="https://blog.zhilu.cyou/">
                        博客
                    </ZButton>
                    <ZButton icon="ph:github-logo-duotone" to="https://github.com/L33Z22L11">
                        GitHub
                    </ZButton>
                </div>
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
                自2024年6月1日开始重构，目前还在修缮中。<br>
                Built with Nuxt.js and KazariEX.
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
