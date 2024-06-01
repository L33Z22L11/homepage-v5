<script setup lang="ts">
defineProps<{ icon?: string }>()
</script>

<template>
    <NuxtLink class="button">
        <Icon v-if="icon" :name="icon"></Icon>
        <slot></slot>
    </NuxtLink>
</template>

<style scoped lang="scss">
.button {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    margin-inline: 0.4rem;
    padding-inline: 0.6rem;
    border: 1px solid var(--c-primary-3);
    border-radius: 0.4rem;
    box-shadow: 1px 2px 4px var(--c-primary-soft);
    background-color: var(--c-primary-soft);
    line-height: 2;
    transition: background-color 0.2s;

    &:hover {
        background-color: var(--c-primary-3);
    }
}
</style>