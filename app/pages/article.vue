<script setup lang="ts">
useHead({ title: '文章' })
definePageMeta({ headerText: '最近更新' })

const { data, error, status } = useLazyFetch('/api/feed/blog')

const articles = computed(() => data.value.slice(0, 11))
</script>

<template>
    <ZTitle icon="👀">
        <span class="badge-text">来自博客
            <ZRawLink to="https://blog.zhilu.cyou"><mark>纸鹿摸鱼处</mark></ZRawLink>
            的文章
        </span>
    </ZTitle>

    <template v-if="status === 'pending'">
        <p>加载中…</p>
    </template>
    <template v-else-if="status === 'error'">
        <p>{{ error }}</p>
    </template>
    <div v-else class="article-list">
        <ZArticle v-for="article in articles" :key="article.id" v-bind="article" />
    </div>
    <div class="article-more">
        <ZRawLink to="https://blog.zhilu.cyou/">
            <Icon name="ph:navigation-arrow-duotone" />
            <span>访问</span>
        </ZRawLink>
        <ZRawLink to="https://blog.zhilu.cyou/link">
            <Icon name="ph:link-duotone" />
            <span>友链</span>
        </ZRawLink>
        <ZRawLink to="https://blog.zhilu.cyou/archive">
            <Icon name="ph:archive-duotone" />
            <span>归档</span>
        </ZRawLink>
    </div>
</template>

<style scoped lang="scss">
.article-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    gap: 8px;
}

.article-more {
    display: flex;
    justify-content: flex-end;
    gap: 8px;
    margin: 16px 0;
    font-size: min(2rem, 6vw);
    font-weight: bold;

    a {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        opacity: 0.2;
        padding: 0.3em 0.5em;
        border-radius: 8px;
        transition: all 0.2s;

        &:hover {
            opacity: 1;
            background-color: var(--c-primary-soft);
            color: var(--c-primary-1);
        }
    }
}
</style>
