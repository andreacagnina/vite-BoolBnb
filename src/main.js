import { createApp } from 'vue';
import 'bootstrap';
import '@fortawesome/fontawesome-free/css/all.min.css';
import App from './App.vue';
import { router } from './router';

createApp(App).use(router).mount('#app')
