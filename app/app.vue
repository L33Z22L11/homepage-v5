<script setup lang="ts">
const appConfig = useAppConfig()
useSeoMeta({
    ogType: 'profile',
    description: appConfig.description,
    ogImage: appConfig.author.avatar,
})
</script>

<template>
    <ZSidebar />
    <div class="content">
        <ZHeader />
        <main>
            <NuxtPage />
        </main>
    </div>
</template>

<!-- eslint-disable-next-line vue/enforce-style-attribute -->
<style lang="scss">
#z-root {
    display: flex;
    justify-content: center;
    height: 100vh;
    height: 100dvh;

    >.content {
        flex-grow: 1;
        overflow: auto;

        main {
            padding: 1rem 5vw;
        }
    }
}
</style>
