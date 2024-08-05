<script setup lang="ts">
import type { ButtonProps } from './Button.vue'

export interface CardProps {
    name: string
    badges?: Array<string>
    nameAlt?: string
    buttons: Array<ButtonProps>
    desc: string
}
defineProps<CardProps>()
</script>

<template>
    <li class="z-card">
        <div class="z-card-title">
            <h3 v-html="name" />
            <span v-if="nameAlt" class="z-card-name-alt">{{ nameAlt }}</span>
            <div v-if="badges" class="badges">
                <ZBadge v-for="(badge, badgeIndex) in badges" :key="badgeIndex">
                    {{ badge }}
                </ZBadge>
            </div>
        </div>

        <div class="z-card-buttons">
            <ZButton v-for="(button, buttonIndex) in buttons" v-bind="button" :key="buttonIndex" />
        </div>
        <ZRender :content="desc" tag="p" />
    </li>
</template>

<style lang="scss" scoped>
.z-card {
    display: grid;
    grid-template-rows: auto auto 1fr;
    gap: 1em;
    position: relative;
    min-width: 240px;
    padding: 2em 1em;
    border-radius: 0.5em;
}

.z-card-title {
    display: grid;
    align-content: center;
    gap: 2px;
    height: 4em;
    text-align: center;

    h3 {
        font-size: 1.4em;
    }
}

.z-card-buttons {
    text-align: center;
}

.z-card-name-alt {
    position: absolute;
    opacity: 0.1;
    inset: 0 0 auto;
    mask: linear-gradient(#fff, #fff3);
    font-size: 2rem;
    font-weight: 900;
    text-align: center;
    z-index: -1;
}

p {
    text-align: justify;
}
</style>
