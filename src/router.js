import { createRouter, createWebHistory } from 'vue-router';

import home from './pages/home.vue';
import cards from './pages/cards.vue';
import singleProject from './pages/singleProject.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: home,
        },
        {
            path: '/cards',
            name: 'cards',
            component: cards,
        },
        {
            path: '/cards/:slug',
            name: 'singleProject',
            component: singleProject,
        }
    ]
});
export { router }