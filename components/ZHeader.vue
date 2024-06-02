<script setup>

</script>

<template>
    <div id="z-header">
        {{ $route.meta.headerText }}
    </div>
</template>

<style scoped lang="scss">
#z-header {
    height: 3rem;
    padding-inline: 1rem;
    font-weight: 600;
    line-height: 3rem;
}
</style>