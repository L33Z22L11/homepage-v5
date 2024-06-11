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
];
const sidebarStore = useSidebarStore();

</script>

<template>
    <aside id="z-sidebar" :class="{ show: sidebarStore.isOpen }">
        <header class="aside-header">
            <ZLIcon />
            <span>纸鹿本鹿</span>
            <Icon name="ph:x" class="close-sidebar" @click="sidebarStore.toggle()" />
        </header>
        <nav class="aside-nav">
            <template v-for="group in nav">
                <h2 v-if="group.title">{{ group.title }}</h2>
                <ul>
                    <li v-for="item in group.list">
                        <NuxtLink :to="item.link" :target="item.external ? '_blank' : ''">
                            <Icon :name="item.icon" />
                            <span class="title">{{ item.title }}</span>
                            <Icon class="external-tip" name="ph:arrow-up-right" v-if="item.external" />
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
    <Transition>
        <div id="z-sidebar-bgmask" @click="sidebarStore.toggle()" v-if="sidebarStore.isOpen"></div>
    </Transition>
</template>

<style scoped lang="scss">
#z-sidebar {
    display: grid;
    grid-template-rows: auto 1fr auto;
    position: sticky;
    height: 100vh;
    height: 100dvh;
    border-right: 1px solid var(--c-border);
    background-color: var(--c-bg-2);
    inset-block: 0;

    .close-sidebar {
        display: none;
        cursor: pointer;
    }
    
    &.v-enter-active,
    &.v-leave-active {
        transition: opacity 0.2s;
    }

    &.v-enter-from,
    &.v-leave-to {
        opacity: 0;
    }

    @media (max-width: $breakpoint-mobile) {
        position: fixed;
        left: -100vw;
        transition: left 0.2s;
        z-index: 3;

        &.show {
            left: 0;

            .close-sidebar {
                display: block;
            }
        }
    }
}

#z-sidebar-bgmask {
    position: fixed;
    inset: 0;
    backdrop-filter: contrast(0.8) brightness(0.9);
    z-index: 2;

    &.v-enter-active,
    &.v-leave-active {
        transition: opacity 0.2s;
    }

    &.v-enter-from,
    &.v-leave-to {
        opacity: 0;
    }

    @media (min-width: $breakpoint-mobile) {
        display: none;
    }
}

.aside-header {
    display: grid;
    grid-template-columns: 1.5rem 1fr auto;
    align-items: center;
    gap: 0.5rem;
    height: 48px;
    padding-inline: 1rem;
    border-bottom: 1px solid var(--c-border);
    font-weight: 600;
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
            grid-template-columns: 1.5rem 1fr auto;
            align-items: center;
            gap: 0.5rem;
            padding: 6px 12px;
            border-radius: 0.5rem;
            transition: background-color 0.2s, color 0.1s;

            &:hover,
            &.router-link-active {
                background-color: var(--c-bg-3);

                // color: var(--c-bg-1);
            }

            .iconify {
                font-size: 1.5rem;
            }

            .external-tip {
                opacity: 0.5;
                font-size: 1rem;
            }
        }
    }
}

.aside-footer {
    padding: 0.5rem;
    border-top: 1px solid var(--c-border);
    font-size: 0.8em;
    line-height: 1.5;
    text-align: center;
    color: var(--c-text-2);
}
</style>