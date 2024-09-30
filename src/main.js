import '../src/assets/scss2/all.scss'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
