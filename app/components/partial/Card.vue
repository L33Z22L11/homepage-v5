<script setup lang="ts">
import type { VNode } from 'vue'
import type { ButtonProps } from './Button.vue'

export interface CardProps {
	name: string
	badges?: Array<string>
	nameAlt?: string
	buttons: Array<ButtonProps>
	desc: string | VNode | (() => VNode)
}
defineProps<CardProps>()
</script>

<template>
<li class="z-card">
	<div class="z-card-title">
		<h3>{{ name }}</h3>
		<span v-if="nameAlt" class="z-card-name-alt">{{ nameAlt }}</span>
		<div v-if="badges" class="badges">
			<ZBadge v-for="(badge, badgeIndex) in badges" :key="badgeIndex">
				{{ badge }}
			</ZBadge>
		</div>
	</div>

	<div class="z-card-buttons">
		<ZButton v-for="(button, buttonIndex) in buttons" v-bind="button" :key="buttonIndex" />
	</div>
	<!-- FIXME: 水合不匹配 -->
	<p class="z-card-desc">
		<ZRender :content="desc" />
	</p>
</li>
</template>

<style lang="scss" scoped>
.z-card {
	display: grid;
	grid-template-rows: auto auto 1fr;
	gap: 1em;
	position: relative;
	padding: 2em 3%;
	border-radius: 0.5em;
}

.z-card-title {
	display: grid;
	align-content: center;
	gap: 2px;
	height: 4em;
	text-align: center;
	text-wrap: balance;

	h3 {
		font-size: 1.4em;
	}
}

.z-card-buttons {
	text-align: center;
}

.z-card-name-alt {
	position: absolute;
	opacity: 0.1;
	inset: 0 0 auto;
	mask: linear-gradient(#FFF, #FFF3);
	font-size: 2rem;
	font-weight: 900;
	text-align: center;
	z-index: -1;
}

.z-card-desc {
	padding: 0.8em 1em;
	border-radius: 0.5em;
	background-color: var(--c-bg-1);
	text-align: justify;
}
</style>
