<script setup lang="ts">
import { format, formatDistanceToNow } from 'date-fns'
import { zhCN } from "date-fns/locale";

useHead({ title: '文章' });
definePageMeta({ headerText: '最近更新' });

const { data, error, status } = useLazyFetch('/api/feed/blog');

const articles = computed(() =>
    data.value.map((feed: any) => ({
        ...feed,
        tPublishedLabel: getPostTime(feed.published),
        tUpdatedLabel: getPostTime(feed.updated),
    })).slice(0, 11)
)

function getPostTime(date: Date) {
    const postDate = new Date(date);
    const now = new Date();
    if (postDate.getTime() > now.getTime() - 1000 * 60 * 60 * 24 * 7) {
        return formatDistanceToNow(postDate, { addSuffix: true, locale: zhCN });
    } else if (postDate.getFullYear() === now.getFullYear()) {
        return format(postDate, 'M月d日');
    } else {
        return format(postDate, 'yy年M月d日');
    }
}
</script>

<template>
    <p class="blog-header"><span>👀</span> <span class="text">来自博客
            <NuxtLink to="https://blog.zhilu.cyou"><mark>纸鹿摸鱼处</mark></NuxtLink>
            的文章
        </span></p>

    <template v-if="status === 'pending'">
        <p>加载中…</p>
    </template>
    <template v-else-if="status === 'error'">
        <p>{{ error }}</p>
    </template>
    <div v-else class="article-list">
        <a v-for="article in articles" :href="article.link" :key="link">
            <div class="article-header">
                <time :datetime="article.updated" v-if="article.tPublishedLabel !== article.tUpdatedLabel">
                    {{ article.tUpdatedLabel }}</time>
                <time :datetime="article.published">{{ article.tPublishedLabel }}</time>
            </div>
            <h2 class="article-title">{{ article.title }}</h2>
            <p class="article-descrption">{{ article.summary }}</p>
        </a>
    </div>

    <NuxtLink class="article-more" to="https://blog.zhilu.cyou/archives/">
        <span>归档</span>
        <Icon name="ph:arrow-circle-right-duotone" />
    </NuxtLink>
</template>

<style scoped lang="scss">
.blog-header {
    margin: 16px;
    font-size: 2rem;
    font-weight: bold;

    .text {
        display: inline-block;
        margin-block: 0.5em;
    }
}

.article-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    gap: 8px;

    >a {
        padding: 8px;
        border-radius: 8px;
        transition: all 0.2s;

        &:hover {
            background-color: var(--c-bg-3);
        }

        >* {
            margin: 8px;
        }
    }
}

.article-header {
    display: flex;
    gap: 0.8em;
    font-size: 0.6em;
    color: var(--c-text-a);

    >time + time {
        opacity: 0.5;
    }
}

.article-title {
    font-size: 1.2em;
    font-weight: normal;
}

.article-descrption {
    color: var(--c-text-a);
}

.article-more {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 0.5em;
    gap: 4px;
    opacity: 0.2;
    margin: 16px;
    padding: 8px;
    border-radius: 8px;
    font-size: 2rem;
    font-weight: bold;
    transition: all 0.2s;

    &:hover {
        opacity: 1;
        background-color: var(--c-primary-soft);
        color: var(--c-primary-1);
    }
}
</style>
