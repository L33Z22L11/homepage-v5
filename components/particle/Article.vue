<script setup lang="ts">
defineProps<{ article: any }>();
</script>

<template>
    <a class="article-card" :href="article.link || article.id">
        <div class="article-header">
            <time :datetime="article.updated" v-if="article.tPublishedLabel !== article.tUpdatedLabel">
                {{ article.tUpdatedLabel }}</time>
            <time :datetime="article.published">{{ article.tPublishedLabel }}</time>
        </div>
        <h2 class="article-title">{{ article.title }}</h2>
        <p class="article-descrption">{{ article.summary }}</p>
    </a>
</template>

<style lang="scss" scoped>
.article-card {
    padding: 8px;
    border-radius: 8px;
    transition: all 0.2s;

    &:hover {
        background-color: var(--c-primary-soft);
    }

    >* {
        margin: 8px;
    }
}

.article-header {
    display: flex;
    gap: 0.8em;
    font-size: 0.8em;
    color: var(--c-text-2);

    >time + time {
        color: var(--c-text-3);
    }
}

.article-title {
    font-size: 1.2em;
    font-weight: normal;
}

.article-descrption {
    color: var(--c-text-2);
}

</style>