import { createRouter, createWebHistory } from "vue-router";
import HelloWorld from './pages/HelloWorld.vue';
import PageNotFound from './pages/PageNotFound.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'homepage',
            component: HelloWorld
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'not-found',
            component: PageNotFound
        },
    ]
});

export { router };