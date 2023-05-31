import { createRouter, createWebHistory } from 'vue-router';

import AppIntro from './pages/AppIntro.vue';
import AppHome from './pages/AppHome.vue';
import SingleCard from './pages/SingleCard.vue';


const router = createRouter({

    history: createWebHistory(),

    routes: [

        {
            path: '/',
            name: 'Intro',
            component: AppIntro ,
        },

        {
            path: '/home',
            name: 'home',
            component: AppHome ,
        },

        {
            path: '/card/:slug',
            name: 'singleCard',
            component: SingleCard ,
        }
    ]
});
export {router}