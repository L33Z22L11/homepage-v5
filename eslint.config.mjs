import antfu from '@antfu/eslint-config'

export default antfu({
	stylistic: {
		indent: 'tab',
	},
	pnpm: true,
	// @keep-sorted
	rules: {
		'jsonc/indent': ['error', 2],
		'vue/block-lang': ['warn', {
			script: { lang: ['ts', 'tsx'] },
			style: { lang: ['scss'] },
		}],
		'vue/enforce-style-attribute': ['warn', { allow: ['scoped'] }],
		'vue/html-indent': ['error', 'tab', { baseIndent: 0 }],
		'vue/singleline-html-element-content-newline': ['error', {
			// @keep-sorted
			externalIgnores: ['ZLink', 'ZRawLink'],
		}],
		'yaml/indent': ['error', 2],
	},
}, {
	files: ['**/*.json'],
	rules: {
		'style/eol-last': ['warn', 'never'],
	},
})
