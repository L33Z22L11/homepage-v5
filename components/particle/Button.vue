<script setup lang="ts">
const props = defineProps<{ icon?: string, to?: string }>();
const isExternal = computed(() => props.to?.match(":"));
</script>

<template>
    <NuxtLink class="button" :to="to" :target="isExternal ? '_blank' : ''">
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
    border: 1px solid var(--c-bg-3);
    border-radius: 0.4rem;
    box-shadow: 1px 2px 4px var(--c-bg-2);
    background-color: var(--c-bg-2);
    line-height: 2;
    transition: background-color 0.2s;

    &:hover {
        background-color: var(--c-bg-3);
    }
}
</style>