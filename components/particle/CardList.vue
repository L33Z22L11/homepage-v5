<script setup lang="ts">
import type { CardProps } from './Card.vue'

defineProps<{
    dataList: Array<CardProps>
}>()
</script>

<!-- TODO: 监听滚轮，转换为横向滚动 -->

<template>
    <ul class="z-card-container">
        <ZCard v-for="(card, cardIndex) in dataList" :key="cardIndex" v-bind="card" />
    </ul>
</template>

<style scoped>
.z-card-container {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-evenly;
    overflow-x: auto;
    animation: check;
    animation-timeline: scroll(x self);

    >* {
        flex: 1;
    }
}

@keyframes check {
    0% {
        mask: linear-gradient(to right, #fff 80%, transparent);
    }

    1%,
    99% {
        mask: linear-gradient(to right, transparent, #fff 20%, #fff 80%, transparent);
    }

    100% {
        mask: linear-gradient(to right, transparent, #fff 20%);
    }
}
</style>
