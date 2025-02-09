import { createRouter, createWebHistory } from 'vue-router';

// Импортируем компоненты (страницы)
import HomePage from '../views/HomePage.vue';
import DatePage from '../views/Tasks.vue';

const routes = [
    { path: '/', component: HomePage },
    { path: '/Tasks', component: DatePage }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
