/**
 * theme.js
 *
 * @version 240731
 * @description 使主题更好地加载
 * @author 纸鹿本鹿 <hi@zhilu.cyou>
 * @license MIT
 */

const prefetchTheme = localStorage.getItem('theme') ?? 'auto'
document.documentElement.dataset.theme = prefetchTheme
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.theme-toggle > .active').classList.remove('active')
    document.querySelector(`.theme-toggle > .${prefetchTheme}`).classList.add('active')
})
