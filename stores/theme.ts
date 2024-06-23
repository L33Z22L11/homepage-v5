export const useThemeStore = defineStore('theme', () => {
    const enumTheme = ref(0)
    const themeList = [
        'system',
        'dark',
        'light',
    ]
    const theme = computed(() => {
        return themeList[enumTheme.value]
    })

    const toggle = () => {
        enumTheme.value = (enumTheme.value + 1) % themeList.length
    }

    return {
        theme,
        toggle,
    }
})