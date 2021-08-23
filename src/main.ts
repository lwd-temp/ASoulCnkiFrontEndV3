import { createApp } from 'vue'
import App from '@/App.vue'
import router from './router'
import Element from './libs/element'
import 'tailwindcss/tailwind.css'
import '@/assets/css/fix-element.css'
import '@/assets/css/iconfont.css'
import '@/assets/css/unit-fixed.css'

createApp(App)
  .use(Element)
  .use(router)
  .mount('#app')
