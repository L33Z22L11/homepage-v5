<script setup>
const curYear = new Date().getFullYear();
const nav = [
    {
        title: '', list: [
            { icon: "ph:house-duotone", title: "主页", link: "/" },
            { icon: "ph:pen-nib-duotone", title: "文章", link: "/article" },
            { icon: "ph:code-duotone", title: "项目", link: "/project" },
            { icon: "ph:globe-duotone", title: "站点", link: "/site" },
            { icon: "ph:files-duotone", title: "日志", link: "/log" },
        ]
    }, {
        title: '社交', list: [
            { icon: "ri:qq-fill", title: "群: 169994096", link: "https://jq.qq.com/?_wv=1027&k=lQfNSeEd", external: true },
            { icon: "ph:github-logo-duotone", title: "Github", link: "https://github.com/L33Z22L11", external: true },
            { icon: "ph:telegram-logo-duotone", title: "Telegram", link: "https://t.me/L33Z22L11", external: true },
        ],
    }
]
</script>

<template>
    <aside id="z-sidebar-nav">
        <header class="aside-header">
            <ZLIcon /> 纸鹿本鹿
        </header>
        <nav class="aside-nav">
            <template v-for="group in nav">
                <h2 v-if="group.title">{{ group.title }}</h2>
                <ul>
                    <li v-for="item in group.list">
                        <NuxtLink :to="item.link" :target="item.external ? '_blank' : ''">
                            <Icon :name="item.icon" />
                            <span class="title">{{ item.title }}</span>
                            <Icon name="ph:arrow-up-right-duotone" v-if="item.external" />
                        </NuxtLink>
                    </li>
                </ul>
            </template>
        </nav>
        <footer class="aside-footer">
            <p>© 2019 - {{ curYear }} 纸鹿本鹿</p>
            <p>aka Zhilu, L33Z22L11</p>
        </footer>
    </aside>
</template>

<style scoped lang="scss">
#z-sidebar-nav {
    display: grid;
    grid-template-rows: auto 1fr auto;
    position: sticky;
    inset-block: 0;
    width: 240px;
    height: 100vh;
    height: 100dvh;
    border-right: 1px solid var(--c-primary-3);
    background-color: var(--c-primary-soft);
}

.aside-header {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding-inline: 1rem;
    border-bottom   : 1px solid var(--c-primary-3);
    font-weight: 600;
    line-height: 3rem;
}

.aside-nav {
    overflow: auto;
    padding: 0.5rem;

    h2 {
        margin: 2rem 0 1rem 1rem;
        font-size: 1em;
        font-weight: normal;
        color: var(--c-text-2);
    }

    li {
        display: grid;
        margin: 0.5rem 0;

        >a {
            display: grid;
            grid-template-columns: 1.2em 1fr auto;
            align-items: center;
            gap: 0.5rem;
            padding-inline: 1rem;
            border-radius: 0.5rem;
            line-height: 2.2em;
            transition: background-color 0.2s;

            &:hover,
            &.router-link-active {
                background-color: var(--c-primary-1);
                color: var(--c-text-revert-1);
            }

            .iconify {
                font-size: 1.2em;
            }

            .title {
                flex: 1;
            }
        }
    }
}

.aside-footer {
    padding: 0.5rem;
    border-top: 1px solid var(--c-primary-3);
    font-size: 0.8em;
    line-height: 1.5;
    text-align: center;
    color: var(--c-text-2);
}
</style>