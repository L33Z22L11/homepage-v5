import antfu from '@antfu/eslint-config'

export default antfu({
    stylistic: {
        indent: 4,
    },
    pnpm: true,
    rules: {
        'jsonc/indent': ['error', 2],
        'vue/block-lang': ['warn', {
            script: { lang: ['ts', 'tsx'] },
            style: { lang: ['scss'] },
        }],
        'vue/enforce-style-attribute': ['warn', { allow: ['scoped'] }],
        'yaml/indent': ['error', 2],
    },
}, {
    files: ['*.json'],
    rules: {
        'style/eol-last': ['warn', 'never'],
    },
})
