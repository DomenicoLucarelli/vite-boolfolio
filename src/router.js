import { createRouter, createWebHistory } from 'vue-router';

import AppIntro from './pages/AppIntro.vue';
import AppHome from './pages/AppHome.vue';
import Prova from './pages/Prova.vue';


const router = createRouter({

    history: createWebHistory(),

    routes: [

        {
            path: '/',
            name: 'Intro',
            component: AppIntro ,
        },

        {
            path: '/home/',
            name: 'home',
            component: AppHome ,
        },

        {
            path: '/prova/:posts/:title',
            name: 'prova',
            component: Prova ,
        }
    ]
});
export {router}