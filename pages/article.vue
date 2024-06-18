<script setup>
useHead({ title: '文章' });
definePageMeta({ headerText: '最近更新' });

const articles = ref([]);
const error = ref(null);

onMounted(async () => {
    try {
        const response = await fetch('https://blog.zhilu.cyou/atom.xml', { mode: 'cors' });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const xml = await response.text();
        const parser = new DOMParser();
        const doc = parser.parseFromString(xml, 'application/xml');
        const items = doc.querySelectorAll('entry');

        items.forEach(item => {
            const title = item.querySelector('title').textContent;
            const link = item.querySelector('link').getAttribute('href');
            const date = item.querySelector('updated').textContent;
            articles.value.push({ title, link, date });
        });
    } catch (err) {
        console.error(err);
        error.value = 'Failed to fetch articles';
    }
});
</script>

<template>
    <div>
        <h1>最近更新</h1>
        <template v-if="articles.length > 0">
            <ul>
                <li v-for="article in articles" :key="article.link">
                    <a :href="article.link">{{ article.title }}</a>
                    <span>{{ new Date(article.date).toLocaleDateString() }}</span>
                </li>
            </ul>
        </template>
        <template v-else-if="error">
            <p>{{ error }}</p>
        </template>
        <template v-else>
            <p>加载中...</p>
        </template>
        还没修好，先看看<ZButton to="https://blog.zhilu.cyou">博客</ZButton>喵。
    </div>
</template>
