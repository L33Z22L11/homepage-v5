<script setup lang="ts">
import type { ButtonProps } from './Button.vue';

export interface CardProps {
    name: string,
    badges?: Array<string>,
    nameAlt?: string,
    buttons: Array<ButtonProps>,
    desc: string
}
defineProps<CardProps>();
</script>

<template>
    <li class="z-card">
        <div class="z-card-title">
            <h3 v-html="name"></h3>
            <span v-if="nameAlt" class="z-card-name-alt">{{ nameAlt }}</span>
            <div v-if="badges" class="badges">
                <ZBadge v-for="badge in badges">{{ badge }}</ZBadge>
            </div>
        </div>

        <div class="z-card-buttons">
            <ZButton v-for="button in buttons" v-bind="button"></ZButton>
        </div>
        <ZRender :content="desc" tag="p"></ZRender>
    </li>
</template>

<style scoped>
.z-card {
    display: grid;
    grid-template-rows: auto auto 1fr;
    gap: 1em;
    min-width: 240px;
    padding: 2em 1em;
    border-radius: 0.5em;
}

.z-card-title {
    display: grid;
    align-content: center;
    gap: 2px;
    position: relative;
    height: 4em;
    text-align: center;
}

.z-card-buttons {
    text-align: center;
}

.z-card-name-alt {
    position: absolute;
    opacity: 0.1;
    inset: 0;
    font-size: 2em;
    font-weight: 900;
    text-align: center;
    z-index: -1;
}

p {
    text-align: justify;
}
</style>