import { createApp } from 'vue'
import App from './App.vue'

import '../../invoicefrontend/node_modules/bootstrap/dist/css/bootstrap.css'
import '../../invoicefrontend/node_modules/bootstrap-vue/dist/bootstrap-vue.css'
import router from './router'
import VuePaginator from 'vuejs-paginator';

createApp(App).use(router).use(VuePaginator).mount('#app')
