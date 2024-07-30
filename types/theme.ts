export type ThemeType = 'auto' | 'light' | 'dark'
export type Themes = Record<ThemeType, {
    icon: string
    tip: string
}>
