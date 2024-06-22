<script setup lang="ts">
defineProps<{ label?: string }>();
</script>

<template>
    <section class="field-item">
        <h2 v-html="label"></h2>
        <slot></slot>

    </section>
</template>

<style scoped lang="scss">
.field-item {
    display: grid;
    grid-template-columns: 120px 1fr;
    gap: 1rem 2rem;
    margin-top: 3rem;

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