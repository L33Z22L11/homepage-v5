<template>
    <ZSidebar />
    <div class="content">
        <ZHeader />
        <main>
            <NuxtPage />
        </main>
    </div>
</template>

<style lang="scss">
#z-root {
    display: flex;

    >.content {
        flex: 1;

        main {
            padding: 1rem;
        }
    }
}
</style>