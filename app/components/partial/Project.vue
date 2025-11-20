<script setup lang="ts">
const props = defineProps<{
	title: string
	github?: string
	description?: string
}>()

interface Repo {
	id: number
	name: string
	repo: string
	description: string
	createdAt: string
	updatedAt: string
	pushedAt: string
	stars: number
	watchers: number
	forks: number
	defaultBranch: string
}

const repo = ref<Repo>({
	id: 0,
	name: '',
	repo: '',
	description: '',
	createdAt: '',
	updatedAt: '',
	pushedAt: '',
	stars: 0,
	watchers: 0,
	forks: 0,
	defaultBranch: '',
})

const author = computed(() => props.github?.split('/')[0] || '')
const authorAvatar = computed(() => getGhAvatar(author.value, { size: null }))

onMounted(async () => {
	if (!props.github)
		return
	repo.value = await $fetch<{ repo: Repo }>(`https://ungh.cc/repos/${props.github}`).then(res => res.repo)
})
</script>

<template>
<ZRawLink class="project" :to="`https://github.com/${github}`">
	<div class="project-title">
		{{ title }}
	</div>

	<div class="project-stats">
		<span>
			<Icon name="ri:star-line" />
			{{ repo.stars }}
		</span>

		<span>
			<Icon name="ri:git-fork-line" />
			{{ repo.forks }}
		</span>

		<ZDate v-if="repo.updatedAt" class="project-date" icon="ri:calendar-line" :date="repo.updatedAt" />
	</div>

	<div v-if="description" class="project-description">
		{{ description || repo.description }}
	</div>

	<NuxtImg class="project-author-avatar" :src="authorAvatar" :alt="author" />
</ZRawLink>
</template>

<style lang="scss" scoped>
.project {
	display: flex;
	flex-direction: column;
	gap: 0.5em;
	position: relative;
	overflow: hidden;
	overflow: clip;
	padding: 1rem;
	border: 1px solid var(--c-border);
	border-radius: 0.5rem;
	background-color: var(--c-bg-1);
	transition: background-color 0.2s;
	z-index: 0;

	&:hover {
		background-color: var(--c-bg-2);
	}

	.project-title {
		font-size: 1.2rem;
		font-weight: bold;
	}

	.project-author-avatar {
		position: absolute;
		opacity: 0.2;
		right: -1em;
		height: 110%;
		border-radius: 50%;
		z-index: -1;
	}

	.project-stats {
		display: flex;
		gap: 1em;
		font-size: 0.8em;
		color: var(--c-text-2);
	}

	.project-description {
		font-size: 0.8em;
		color: var(--c-text-2);
	}
}
</style>
