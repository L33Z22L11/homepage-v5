import { directive } from 'vue-tippy'
import 'tippy.js/dist/tippy.css'

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.directive('tippy', directive)
})
