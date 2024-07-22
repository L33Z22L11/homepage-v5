<script setup lang="ts">
defineProps<{
    img?: string
    text?: string
}>()
</script>

<template>
    <ZRawLink class="badge" :class="{ 'badge-width-icon': img }">
        <img v-if="img" class="badge-icon" :src="img" alt="avatar">
        <span class="badge-text">
            {{ text }}
            <slot />
        </span>
    </ZRawLink>
</template>

<style scoped lang="scss">
.badge {
    display: inline-flex;
    align-items: center;
    border-radius: 4px;
    background-color: var(--c-bg-3);
    font-size: 0.9em;
    vertical-align: middle;
    color: var(--c-text-2);
    transition: all 0.2s;

    & + & {
        margin-left: 1em;
    }

    &[href]:hover {
        color: var(--c-text-1);
    }
}

.badge-width-icon {
    border-radius: 1em;
    font-size: 0.8em;

    .badge-icon {
        height: 1.8em;
        border-radius: 1em;
    }
}

.badge-text {
    margin: 0.2em 0.4em;
}
</style>
