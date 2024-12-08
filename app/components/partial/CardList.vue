<script setup lang="ts">
import type { CardProps } from './Card.vue'
import Autoplay from 'embla-carousel-autoplay'
import emblaCarouselVue from 'embla-carousel-vue'
import { WheelGesturesPlugin } from 'embla-carousel-wheel-gestures'

defineProps<{ dataList: CardProps[] }>()
const [emblaRef] = emblaCarouselVue({
    skipSnaps: true,
    loop: true,
}, [
    Autoplay({ stopOnInteraction: false, stopOnMouseEnter: true }),
    WheelGesturesPlugin(),
])
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
    mask: linear-gradient(to right, transparent, #fff var(--fadeout-width), #fff calc(100% - var(--fadeout-width)), transparent);
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
