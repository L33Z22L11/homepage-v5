<script setup lang="ts">
useHead({ title: '项目' })
definePageMeta({ headerText: '参与的开源项目' })

const projects = [
	{
		title: 'blog-v3',
		github: 'L33Z22L11/blog-v3',
		description: '个人博客网站，收获 100 star，被多人使用',
	},
	{
		title: 'hexo-theme-stellar',
		github: 'xaoxuu/hexo-theme-stellar',
		description: '简洁优雅的 Hexo 主题',
	},
	{
		title: 'blog-feed',
		github: 'xiyou-linuxer/blog-feed',
		description: '使用 Nitro + MongoDB 搭建的博客订阅聚合 API',
	},
	{
		title: 'zhilu-cv',
		github: 'L33Z22L11/zhilu-cv',
		description: '个人简历，使用 Nuxt.js 构建',
	},
]
</script>

<template>
<section>
	<ZProject v-for="project in projects" :key="project.title" v-bind="project" />
</section>
</template>

<style lang="scss" scoped>
section {
	display: grid;
	grid-gap: 1rem;
	grid-template-columns: repeat(auto-fill, minmax(20em, 1fr));
}
</style>
