import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Custom CSS
import './scss/custom.scss'

// Import all Bootstrap’s JS
import * as bootstrap from 'bootstrap'

createApp(App).use(router).mount('#app')