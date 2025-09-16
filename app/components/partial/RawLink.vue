<script setup lang="ts">
const props = defineProps<{ to?: string }>()
const external = computed(() => isExtLink(props.to))
</script>

<template>
<a v-if="to === '#'" :href="to"><slot /></a>
<span v-else-if="to === undefined"><slot /></span>
<NuxtLink v-else :to :target="external ? '_blank' : undefined">
	<slot :external />
</NuxtLink>
</template>
