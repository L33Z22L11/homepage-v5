<script setup lang="ts">
defineProps<{
    text?: string;
}>();
</script>

<template>
    <span class="badge">
        {{ text }}
        <slot></slot>
    </span>
</template>

<style scoped lang="scss">
.badge {
    display: inline-block;
    padding: 2px 4px;
    border-radius: 4px;
    background-color: var(--c-primary-3);
    font-size: 0.9em;
    vertical-align: middle;
    color: var(--c-primary-1);
}
</style>