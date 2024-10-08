<script setup lang="ts">
import tippy from 'tippy.js'
import 'tippy.js/dist/tippy.css'
import type { ThemeType, Themes } from '~/types/theme'

const colorMode = useColorMode()
const themeToggle = ref<Array<HTMLDivElement> | null>(null)

const themes: Themes = {
    light: {
        icon: 'ph:sun-duotone',
        tip: '浅色模式',
    },
    system: {
        icon: 'ph:monitor-duotone',
        tip: '跟随系统',
    },
    dark: {
        icon: 'ph:moon-duotone',
        tip: '深色模式',
    },
}

function toggleTheme(key: ThemeType) {
    colorMode.preference = key
}

onMounted(() => {
    themeToggle.value?.forEach((button, index) => {
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
            v-for="(themeData, key) in themes"
            :key="key"
            ref="themeToggle"
            :class="{ active: colorMode.preference === key }"
            @click="toggleTheme(key)"
        >
            <Icon :name="themeData.icon" />
        </button>
    </div>
</template>

<style scoped lang="scss">
.theme-toggle {
    display: flex;
    justify-content: center;
    gap: 3px;
    width: fit-content;
    margin: 0 auto;
    padding: 2px;
    border: 1px solid var(--c-border);
    border-radius: 1rem;
    background-color: var(--c-bg-3);
    font-size: 1rem;

    > button {
        display: grid;
        place-items: center;
        padding: 4px 1rem;
        border-radius: 1rem;
        background: none;
        color: currentcolor;
        transition: 0.1s;
        cursor: pointer;

        &:hover {
            background-color: var(--c-primary-soft);
            color: var(--c-text-1);
        }

        &.active {
            box-shadow: 0 0 0.5rem var(--c-border);
            background-color: var(--c-bg-1);
            color: var(--c-text-1);
            cursor: auto;
        }
    }
}
</style>
