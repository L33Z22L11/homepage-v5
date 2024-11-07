<script setup lang="ts">
defineProps<{ label?: string }>()
</script>

<template>
    <section class="z-field">
        <h2 class="z-field-label" v-html="label" />
        <div>
            <slot />
        </div>
    </section>
</template>

<style lang="scss" scoped>
.z-field {
    display: grid;
    grid-template-columns: 120px 1fr;
    gap: 1rem 1.5rem;
    margin: 3em 0.5rem 1em;

    >.z-field-label {
        text-align: end;
    }

    @media (max-width: $breakpoint-mobile) {
        grid-template-columns: 1fr;

        >.z-field-label {
            text-align: start;
        }
    }
}
</style>
