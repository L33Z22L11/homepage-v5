<script setup>
const sidebarStore = useSidebarStore();
</script>

<template>
    <div id="z-header">
        <Icon name="ph:sidebar-duotone" id="toggle-sidebar" @click="sidebarStore.toggle" />
        <span id="headerText">{{ $route.meta.headerText }}</span>
    </div>
</template>

<style scoped lang="scss">
#z-header {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    position: sticky;
    top: 0;
    height: 48px;
    padding-inline: 1rem;
    background-color: var(--c-bg-a);
    backdrop-filter: blur(1rem);
    font-weight: 600;
    z-index: 1;
}

#toggle-sidebar {
    display: none;
    font-size: 1.5rem;
    cursor: pointer;

    @media (max-width: $breakpoint-mobile) {
        display: block;
    }
}
</style>