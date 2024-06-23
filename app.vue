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
    height: 100vh;
    height: 100dvh;

    >.content {
        flex: 1;
        overflow: auto;


        main {
            padding: 1rem 5vw;
        }
    }
}
</style>