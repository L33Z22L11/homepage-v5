<script setup lang="ts">
import { ZRawLink } from '#components'

export interface ButtonProps {
    icon?: string
    text?: string
    to?: string
    desc?: string
    primary?: boolean
}
defineProps<ButtonProps>()
</script>

<template>
    <component :is="to ? ZRawLink : 'button'" :to class="button" :class="{ primary }">
        <div class="button-main">
            <Icon v-if="icon" :name="icon" />
            <slot>{{ text }}</slot>
        </div>
        <div v-if="desc" class="button-desc">
            {{ desc }}
        </div>
    </component>
</template>

<style lang="scss" scoped>
.button {
    display: inline-block;
    padding: 0.4em 0.6em;
    border: 1px solid var(--c-bg-soft);
    border-radius: 0.5em;
    box-shadow: 0 2px 0.5em var(--ld-shadow);
    background-color: var(--c-bg-1);
    line-height: normal;
    vertical-align: middle;
    transition: filter 0.2s;
    cursor: pointer;

    &.primary {
        background-color: var(--c-primary);
        color: var(--c-bg);
    }

    &:hover {
        filter: contrast(0.9);
    }

    &:active {
        filter: contrast(0.8);
    }

    &:disabled {
        background-color: initial;
        color: revert;
        cursor: not-allowed;
    }

    & + .button {
        margin-left: 0.8em;
    }
}

.button-main {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.2em;
}

.button-desc {
    font-size: 0.75em;
    text-align: center;
    color: var(--c-text-2);
}
</style>
