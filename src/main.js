import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Croppa from 'vue-croppa'
import 'vue-croppa/dist/vue-croppa.css'

createApp(App).use(router).mount('#app')
Vue.use(Croppa)
