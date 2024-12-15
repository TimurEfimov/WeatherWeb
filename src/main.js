import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import store from './store/index'

const app = createApp(App)

app.mount('#app')
app.use(store)
