<script setup lang="ts">
const props = defineProps<{ to?: string }>();
const isExternal = computed(() => props.to?.match(":"));
</script>

<template>
    <NuxtLink class="z-link" :to="to" :target="isExternal ? '_blank' : ''">
        <slot></slot>
        <Icon class="external" v-if="isExternal" name="ph:arrow-up-right" />
    </NuxtLink>
</template>

<style scoped lang="scss">
.z-link {
    background: linear-gradient(var(--c-primary-3), var(--c-primary-3)) no-repeat center bottom / 100% 0.1em;
    text-decoration: none;
    color: var(--c-primary-1);
    transition: 0.2s;

    &:hover {
        border-radius: 0.3em;
        background-size: 100% 100%;
    }
}

.iconify.external {
    font-size: 0.8em;
    vertical-align: top;
}
</style>