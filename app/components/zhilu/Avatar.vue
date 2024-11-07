<script setup lang="ts">
const appConfig = useAppConfig()
</script>

<template>
    <NuxtPicture
        class="avatar" :alt="`${appConfig.author.name} 的头像`"
        :src="appConfig.author.avatar"
    />
</template>

<!-- eslint-disable-next-line vue/block-lang -->
<style scoped>
:deep(img) {
    height: 1em;
    border-radius: 1em;
    color: var(--c-text-3);
    image-rendering: pixelated;
}
</style>
