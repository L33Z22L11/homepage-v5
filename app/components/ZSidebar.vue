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
        <nav class="aside-nav scrollcheck-y">
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
            <p>{{ appConfig.footer.copyright }}<br>{{ appConfig.footer.message }}</p>
        </footer>
    </aside>
    <Transition>
        <div v-if="sidebarStore.isOpen" id="z-sidebar-bgmask" @click="sidebarStore.toggle()" />
    </Transition>
</template>

<style lang="scss" scoped>
#z-sidebar {
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    width: 240px;
    border-right: 1px solid var(--c-border);
    background-color: var(--c-bg-1);

    .close-sidebar {
        display: none;
        cursor: pointer;
    }

    @media (max-width: $breakpoint-mobile) {
        position: fixed;
        left: 0;
        width: 320px;
        height: 100%;
        max-width: 100%;
        box-shadow: 0 0 1rem var(--ld-shadow);
        transform: translateX(-100%);
        transition: transform 0.2s;
        z-index: 3;

        &.show {
            transform: none;

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
    transition: opacity 0.2s;
    z-index: 2;

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
    flex-grow: 1;
    overflow: auto;
    padding: 0 5%;
    font-size: 0.9em;

    h2 {
        margin: 2rem 0 1rem 1rem;
        font-size: 1em;
        font-weight: normal;
        color: var(--c-text-2);
    }

    li {
        margin: 0.5em 0;
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
    --gap: clamp(0.5rem, 3vh, 1rem);

    display: grid;
    gap: var(--gap);
    padding: var(--gap);
    font-size: 0.8em;
    text-align: center;
    color: var(--c-text-2);
}
</style>
