<script setup lang="ts">
const sidebarStore = useSidebarStore()
</script>

<template>
    <div id="z-header">
        <button id="toggle-sidebar" aria-label="切换侧边栏" @click="sidebarStore.toggle">
            <Icon name="ph:sidebar-duotone" />
        </button>
        <span class="header-text">{{ $route.meta.headerText }}</span>
    </div>
</template>

<style lang="scss" scoped>
#z-header {
    display: flex;
    align-items: center;
    position: sticky;
    top: 0;
    height: 48px;
    padding: 0 0.5rem;
    background-color: var(--c-bg-a50);
    backdrop-filter: blur(1rem);
    font-weight: 600;
    z-index: 1;

    .header-text {
        flex-grow: 1;
        padding: 0 0.7em;
    }
}

#toggle-sidebar {
    display: none;
    padding: 0.2em;
    border-radius: 0.2em;
    font-size: 1.2em;

    &:hover {
        background-color: var(--c-bg-soft);
    }

    @media (max-width: $breakpoint-mobile) {
        display: block;
    }
}
</style>
