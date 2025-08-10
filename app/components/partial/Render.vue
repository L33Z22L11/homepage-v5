<script setup lang="ts">
defineProps<{
	content: string | VNode | (() => VNode)
}>()
</script>

<template>
<template v-if="typeof content === 'string'">
	{{ content }}
</template>
<component :is="content" v-else />
</template>
