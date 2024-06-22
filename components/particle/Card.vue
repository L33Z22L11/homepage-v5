<script setup lang="ts">
defineProps<{
    data: Array<{
        name: string,
        badges?: Array<string>,
        nameAlt?: string,
        buttons: Array<{
            icon?: string,
            to?: string,
            text?: string
        }>,
        desc: string
    }>;
}>();
</script>

<template>
    <div class="z-card" :key="name">
        <div class="z-card-title">
            <h3 v-html="data.name"></h3>
            <span v-if="data.nameAlt" class="z-card-name-alt">{{ data.nameAlt }}</span>
            <div v-if="data.badges" class="badges">
                <ZBadge v-for="badge in data.badges">{{ badge }}</ZBadge>
            </div>
        </div>

        <div class="z-card-buttons">
            <template v-for="button in data.buttons" :key="btnIndex">
                <ZButton :icon="button.icon" :to="button.to">{{ button.text }}</ZButton>
            </template>
        </div>
        <ZRender :content="data.desc" tag="p"></ZRender>
    </div>
</template>

<style scoped>
.z-card {
    display: grid;
    grid-template-rows: auto auto 1fr;
    gap: 1em;
    max-width: 240px;
    padding: 2em 1em;
    border-radius: 0.5em;
}

.z-card-title {
    display: grid;
    align-content: center;
    gap: 2px;
    position: relative;
    height: 4em;
    text-align: center;
}

.z-card-buttons {
    text-align: center;
}

.z-card-name-alt {
    position: absolute;
    opacity: 0.1;
    inset: 0;
    font-size: 2em;
    font-weight: 900;
    text-align: center;
    z-index: -1;
}

p {
    text-align: justify;
}
</style>