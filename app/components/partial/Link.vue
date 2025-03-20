<script setup lang="ts">
const props = defineProps<{
    to: string
    text?: string
    icon?: string
    tip?: string
}>()

const tip = computed(() => (isExtLink(props.to) && getDomain(props.to)) || decodeURIComponent(props.to))
</script>

<template>
    <ZRawLink v-tip="tip" class="z-link" :to>
        <Icon v-if="icon" class="domain-icon" :name="icon" />
        <slot>{{ text }}</slot>
    </ZRawLink>
</template>

<style lang="scss" scoped>
// 消除空格并对齐到基线，同时保持图标垂直居中
.z-link {
    display: inline-flex;
    align-items: baseline;
    padding: 0 0.1em;
    background: linear-gradient(var(--c-primary-soft), var(--c-primary-soft)) no-repeat center bottom / 100% 0.1em;
    color: var(--c-primary);
    transition: all 0.2s;

    &:hover {
        border-radius: 0.3em;
        background-size: 100% 100%;
    }

    .domain-icon {
        align-self: center;
        margin-right: 0.1em;
    }
}
</style>
