<script setup lang="ts">
const appConfig = useAppConfig()
const sidebarStore = useSidebarStore()
</script>

<template>
    <aside id="z-sidebar" :class="{ show: sidebarStore.isOpen }">
        <header class="aside-header">
            <ZhiluIcon />
            <span>{{ appConfig.author.name }}</span>
            <Icon name="ph:x" class="close-sidebar" @click="sidebarStore.toggle()" />
        </header>
        <nav class="aside-nav">
            <template v-for="(group, groupIndex) in appConfig.nav" :key="groupIndex">
                <h2 v-if="group.title">
                    {{ group.title }}
                </h2>
                <menu>
                    <li v-for="(item, itemIndex) in group.items" :key="itemIndex">
                        <ZRawLink :to="item.url" class="aside-nav-item">
                            <Icon :name="item.icon" />
                            <span class="nav-text">{{ item.text }}</span>
                            <Icon v-if="item.external" class="external-tip" name="ph:arrow-up-right" />
                        </ZRawLink>
                    </li>
                </menu>
            </template>
        </nav>
        <footer class="aside-footer">
            <ZThemeToggle />
            <br>
            <p>{{ appConfig.footer.copyright }}<br>{{ appConfig.footer.message }}</p>
        </footer>
    </aside>
    <Transition>
        <div v-if="sidebarStore.isOpen" id="z-sidebar-bgmask" @click="sidebarStore.toggle()" />
    </Transition>
</template>

<style lang="scss" scoped>
#z-sidebar {
    display: grid;
    grid-template-rows: auto 1fr auto;
    position: sticky;
    min-width: 240px;
    border-right: 1px solid var(--c-border);
    background-color: var(--c-bg-1);
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
        width: 320px;
        min-width: auto;
        max-width: 100vw;
        box-shadow: 0 0 1rem var(--ld-shadow);
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
    font-weight: 600;
}

.aside-nav {
    overflow: auto;
    padding: 0.5rem;
    font-size: 0.9em;

    h2 {
        margin: 2rem 0 1rem 1rem;
        font-size: 1em;
        font-weight: normal;
        color: var(--c-text-2);
    }

    li {
        display: grid;
        margin: 6px 0;
    }
}

.aside-nav-item {
    display: flex;
    align-items: center;
    gap: 0.5em;
    padding: 0.5em 1em;
    border-radius: 0.5em;
    transition: all 0.2s;

    &:hover, &.router-link-active {
        background-color: var(--c-bg-soft);
        color: var(--c-text);
    }

    &.router-link-active::after {
        content: "⦁";
        width: 1em;
        text-align: center;
        color: var(--c-text-3);
    }

    .iconify {
        font-size: 1.5em;
    }

    .nav-text {
        flex-grow: 1;
    }

    .external-tip {
        opacity: 0.5;
        font-size: 1em;
    }
}

.aside-footer {
    padding: 0.5rem;
    font-size: 0.8em;
    line-height: 1.5;
    text-align: center;
    color: var(--c-text-2);
}
</style>
