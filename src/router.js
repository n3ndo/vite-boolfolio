import { createRouter, createWebHistory } from 'vue-router';

import home from './pages/home.vue';
import AppMain from './components/AppMain.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: home,
        },
        {
            path: '/AppMain',
            name: 'AppMain',
            component: AppMain,
        },
    ]
});
export { router }