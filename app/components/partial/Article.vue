<script setup lang="ts">
import type FeedProps from '~/types/feed'
import { format, formatDistanceToNow } from 'date-fns'
import { zhCN } from 'date-fns/locale'

const props = defineProps<FeedProps>()

const dateLabel = getPostTime(props.published)
const updatedLabel = getPostTime(props.updated)
function getPostTime(date?: string | Date) {
    if (!date)
        return ''
    if (typeof date === 'string')
        date = new Date(date)
    const now = new Date()

    if (date.getTime() > now.getTime() - 1000 * 60 * 60 * 24 * 7)
        return formatDistanceToNow(date, { addSuffix: true, locale: zhCN })

    const formatStr = date.getFullYear() === now.getFullYear() ? 'M月d日' : 'yy年M月d日'
    return format(date, formatStr)
}
</script>

<template>
    <ZRawLink class="article-card" :to="link.$href || id">
        <div class="article-header">
            <time v-if="dateLabel !== updatedLabel" :datetime="updated">
                {{ updatedLabel }}</time>
            <time :datetime="published">{{ dateLabel }}</time>
        </div>
        <h2 class="article-title">
            {{ typeof title === 'string' ? title : title._ }}
        </h2>
        <p class="article-descrption">
            {{ typeof summary === 'string' ? summary : summary._ }}
        </p>
    </ZRawLink>
</template>

<style lang="scss" scoped>
.article-card {
    padding: 8px;
    border-radius: 8px;
    transition: all 0.2s;

    &:hover {
        background-color: var(--c-bg-soft);
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
