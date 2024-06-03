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
    gap: 0.4em;
    margin-inline: 0.4em;
    padding-inline: 0.6em;
    border: 1px solid var(--c-bg-3);
    border-radius: 0.4em;
    box-shadow: 0.05em 0.1em 0.5em var(--c-bg-3);
    background-color: var(--c-bg-2);
    line-height: 2;
    vertical-align: middle;
    transition: background-color 0.2s;

    &:hover {
        background-color: var(--c-bg-3);
    }
}
</style>