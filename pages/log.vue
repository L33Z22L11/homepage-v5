<script setup>
useHead({ title: '日志' });
definePageMeta({ headerText: '互联网上的活动记录' });
</script>

<template>
    <div class="wrapper">
        <table>
            <thead>
                <tr>
                    <th>日期</th>
                    <th>事件</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>2016-06-28</td>
                    <td>开始使用昵称 <code>纸鹿君_L33Z22L11</code> 在互联网上活跃</td>
                </tr>
                <tr>
                    <td>2017-09-08</td>
                    <td>
                        Logo：
                        <ZLIconOld /> PaperyDeer
                    </td>
                </tr>
                <tr>
                    <td>2019-03-01</td>
                    <td>
                        Logo：
                        <ZLIcon />
                    </td>
                </tr>
                <tr>
                    <td>2019-02-06</td>
                    <td>Slogan：<code>纸鹿山行云潜日，日潜云行山路止</code></td>
                </tr>
                <tr>
                    <td>2019-05-24</td>
                    <td>个人网站：<code>zhilu.fun</code> (域名已更换)</td>
                </tr>
                <tr>
                    <td>2019-12-27</td>
                    <td>Slogan：<code>纸鹿至麓不知路，支炉制露不止漉</code></td>
                </tr>
                <tr>
                    <td>2021-09-24</td>
                    <td>微信公众号：<code>纸鹿本鹿</code></td>
                </tr>
                <tr>
                    <td>2023-05-24</td>
                    <td>博客：<code>纸鹿摸鱼处</code> 升级至 Hexo</td>
                </tr>
                <tr>
                    <td>2024-02-17</td>
                    <td>个人网站：<code>纸鹿小站</code> 升级至 VitePress</td>
                </tr>
                <tr>
                    <td>2024-06-01</td>
                    <td>个人网站：<code>纸鹿小站</code> 升级至 Nuxt.js</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<style scoped lang="scss">
td { padding: 0.5rem 1rem; }
</style>