<template>
    <NuxtLink class="z-link">
        <slot></slot>
    </NuxtLink>
</template>

<style scoped>
.z-link {
    background: linear-gradient(var(--c-primary-3), var(--c-primary-3)) no-repeat center bottom / 100% 0.1em;
    text-decoration: none;
    color: var(--c-primary-1);
    transition: 0.2s;

    &:hover {
        border-radius: 0.3em;
        background: linear-gradient(var(--c-primary-3), var(--c-primary-3)) no-repeat center bottom / 100% 100%;
    }
}
</style>