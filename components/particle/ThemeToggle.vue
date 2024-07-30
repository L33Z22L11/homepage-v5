<script setup lang="ts">
import tippy from 'tippy.js'
import 'tippy.js/dist/tippy.css'
import type { ThemeType, Themes } from '~/types/theme'

useHead({ script: [{ src: '/scripts/theme.js' }] })

const theme = useLocalStorage<ThemeType>('theme', 'auto')
const themeToggle = ref<Array<HTMLDivElement> | null>()
const themes: Themes = {
    light: {
        icon: 'ph:sun-duotone',
        tip: '浅色模式',
    },
    auto: {
        icon: 'ph:monitor-duotone',
        tip: '跟随系统',
    },
    dark: {
        icon: 'ph:moon-duotone',
        tip: '深色模式',
    },
}

watch(theme, (value) => {
    document.documentElement.dataset.theme = value
}, {
    // by KazariEX
    immediate: import.meta.browser,
})

onMounted(() => {
    themeToggle.value!.forEach((button, index) => {
        const key = Object.keys(themes)[index] as ThemeType
        const tip = themes[key].tip
        tippy(button, {
            content: tip,
        })
    })
})
</script>

<template>
    <div class="theme-toggle">
        <button
            v-for="({ icon }, key) in themes"
            :key="key"
            ref="themeToggle"
            :class="[key, { active: theme === key }]"
            @click="theme = key"
        >
            <Icon :name="icon" />
        </button>
    </div>
</template>

<style scoped lang="scss">
.theme-toggle {
    display: flex;
    justify-content: center;
    gap: 3px;
    width: fit-content;
    margin: 1rem auto;
    padding: 2px;
    border: 1px solid var(--c-border);
    border-radius: 1rem;
    background-color: var(--c-bg-3);
    font-size: 1rem;

    >button {
        display: grid;
        place-items: center;
        padding: 4px 1rem;
        border-radius: 1rem;
        background: none;
        color: currentcolor;
        transition: 0.2s;

        // cursor: pointer;

        &.active, &:hover {
            background-color: var(--c-bg-1);
            color: var(--c-text-1);
        }
    }
}
</style>
