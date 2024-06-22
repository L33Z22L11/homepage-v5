<script setup lang="ts">
defineProps<{
    dataList: Array<any>;
}>();
</script>

<!-- TODO: 监听滚轮，转换为横向滚动 -->

<template>
    <div class="z-card-container">
        <ZCard v-for="card in dataList" :key="index" :data="card" />
    </div>
</template>

<style scoped>
.z-card-container {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-evenly;
    gap: 1em;
    overflow-x: auto;

    >* {
        flex-shrink: 0;
    }
}
</style>