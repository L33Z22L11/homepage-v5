<script setup lang="ts">
import type FeedProps from '~/types/feed'

defineProps<FeedProps>()
</script>

<template>
<ZRawLink class="article-card" :to="link.$href || id">
	<div class="article-header">
		<ZDate v-if="updated && isTimeDiffSignificant(updated, published)" class="article-date" :date="updated" />
		<ZDate class="article-date" :date="published" />
	</div>
	<h2 class="article-title">
		{{ typeof title === 'string' ? title : title._ }}
	</h2>
	<p class="article-descrption">
		{{ typeof summary === 'string' ? summary : summary._ }}
	</p>
</ZRawLink>
</template>

<style lang="scss" scoped>
.article-card {
	padding: 8px;
	border-radius: 8px;
	transition: all 0.2s;

	&:hover {
		background-color: var(--c-bg-soft);
	}

	>* {
		margin: 8px;
	}
}

.article-header {
	display: flex;
	gap: 0.8em;
	font-size: 0.8em;
	color: var(--c-text-2);

	.article-date:nth-child(2) {
		color: var(--c-text-3);
	}
}

.article-title {
	font-size: 1.1em;
	font-weight: 550;
}

.article-descrption {
	color: var(--c-text-2);
}
</style>
