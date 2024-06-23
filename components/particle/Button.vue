<script setup lang="ts">
const props = defineProps<{
    icon?: string,
    to?: string,
    desc?: string,
}>();
const isExternal = computed(() => props.to?.match(":"));
</script>

<template>
    <NuxtLink class="button" :to="to" :target="isExternal ? '_blank' : ''">
        <div class="button-main">
            <Icon v-if="icon" :name="icon"></Icon>
            <slot></slot>
        </div>
        <div class="button-desc">{{ desc }}</div>
    </NuxtLink>
</template>

<style scoped lang="scss">
.button {
    display: inline-block;
    align-items: center;
    padding: 0.4em 0.6em;
    border: 1px solid var(--c-border);
    border-radius: 0.4em;
    box-shadow: 0.05em 0.1em 0.5em var(--c-primary-soft);
    background-color: var(--c-bg-2);
    vertical-align: middle;
    transition: background-color 0.2s;
    
    & + & {
        margin-left: 0.8em;
    }

    &:hover {
        background-color: var(--c-bg-3);
    }
}



.button-main {
    display: grid;
    grid-template-columns: auto 1fr;
    place-items: center center;
    gap: 0.2em;

    .iconify {
        font-size: 1.2em;
    }
}

.button-desc {
    font-size: 0.75em;
    color: var(--c-text-2);
}
</style>