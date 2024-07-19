<script setup lang="ts">
defineProps<{ label?: string }>()
</script>

<template>
    <section class="z-field">
        <h2 v-html="label" />
        <slot />
    </section>
</template>

<style scoped lang="scss">
.z-field {
    display: grid;
    grid-template-columns: 120px 1fr;
    gap: 1rem 1.5rem;
    margin: 3em 0.5rem 1em;

    >:first-child {
        text-align: end;
    }

    @media (max-width: $breakpoint-mobile) {
        grid-template-columns: 1fr;

        >:first-child {
            text-align: start;
        }
    }
}
</style>
