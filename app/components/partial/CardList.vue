<script setup lang="ts">
import type { CardProps } from './Card.vue'
import Autoplay from 'embla-carousel-autoplay'
import emblaCarouselVue from 'embla-carousel-vue'
import { WheelGesturesPlugin } from 'embla-carousel-wheel-gestures'

defineProps<{ dataList: CardProps[] }>()
const [emblaRef, emblaApi] = emblaCarouselVue({
	containScroll: false,
	loop: true,
	skipSnaps: true,
}, [
	Autoplay({ stopOnInteraction: false, stopOnMouseEnter: true }),
	WheelGesturesPlugin(),
])

// 鼠标横向滚动 / Shift + 纵向滚轮事件
useEventListener(emblaRef, 'wheel', (e) => {
	const delta = e.deltaX + (e.shiftKey ? e.deltaY : 0)
	if (Math.abs(delta) < 80)
		return
	delta > 0 ? emblaApi.value?.scrollNext() : emblaApi.value?.scrollPrev()
}, { passive: true })
</script>

<template>
<div ref="emblaRef" class="embla">
	<ul class="z-card-container">
		<ZCard v-for="(card, cardIndex) in dataList" :key="cardIndex" v-bind="card" />
	</ul>
</div>
</template>

<style lang="scss" scoped>
.embla {
	--fadeout-width: 1.5rem;

	overflow: hidden;
	mask: linear-gradient(to right, transparent, #FFF var(--fadeout-width), #FFF calc(100% - var(--fadeout-width)), transparent);
	cursor: grab;
	user-select: none;
}

.z-card-container {
	display: flex;

	>* {
		flex-shrink: 0;
		width: max(20rem, 28%);
		max-width: 80%;
	}
}
</style>
