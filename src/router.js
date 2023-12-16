import { createRouter, createWebHistory } from 'vue-router';
import TheAuth from '@/pages/auth/TheAuth.vue';
import TheFormsList from '@/pages/forms-list/TheFormsList.vue';
import TheAddFields from '@/pages/add-fields/TheAddFields.vue';

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/auth', component: TheAuth, alias: '/' },
    { path: '/forms-list', component: TheFormsList },
    { path: '/add-fields', component: TheAddFields },
  ],
});
