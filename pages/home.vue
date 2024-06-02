<script setup>
useHead({ title: '' });
definePageMeta({
    alias: ['/'],
    title: '主页'
});
</script>

<template>
    <div class="wrapper">
        <section class="field-item">
            <h2 style="font-size: 3rem;">👋</h2>
            <div>
                <div class="avatar-line">
                    <h1>你好，<br>我是<mark>纸鹿本鹿</mark></h1>
                    <img class="avatar" src="https://cdn.libravatar.org/avatar/6790d5a0c7fbba6038a2bf4618cc24d9?s=512"
                        alt="Zhilu's Avatar (2023-06-22)">
                </div>
                <p class="desc">纸鹿至麓不知路，支炉制露不止漉。</p>
                <div>
                    <ZButton icon="ph:github-logo-duotone" to="https://github.com/L33Z22L11" target="_blank">GitHub
                    </ZButton>
                    <ZButton icon="ph:files-duotone" to="https://blog.zhilu.cyou/" target="_blank">博客</ZButton>
                </div>
            </div>

        </section>

        <section class="field-item">
            <h2>介绍</h2>
            <p>
                <ZLink to="https://github.com/xiyou-linuxer">西邮 Linux 兴趣小组</ZLink> 成员，Windows
                11 和 Arch Linux 用户。
            </p>
        </section>

        <section class="field-item">
            <h2>关于网站</h2>
            <p>
                还在修缮中。
                <br>
                Built with Nuxt.js and KazariEX.
            </p>
        </section>
    </div>
</template>

<style scoped lang="scss">
.field-item {
    display: grid;
    grid-template-columns: 120px 1fr;
    gap: 24px;

    & + & {
        margin-top: 3rem;
    }

    >:first-child {
        text-align: end;
    }
}

.desc {
    margin: 1rem 0;
    font-size: 1.5rem;
    color: var(--c-text-2);
}

.avatar-line {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 2em;

    .avatar {
        width: 120px;
        border-radius: 120px;
    }
}
</style>