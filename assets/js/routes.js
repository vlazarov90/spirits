import Vue from 'vue';
import VueRouter from 'vue-router';
import { store } from './store/store';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes:[
        {
            path:'/',
            name:'home',
            meta: {
                requiresAuth: true
            },
            component: () => import('./views/Home')
        },
        {
            path: '/register',
            name: 'register',
            component: () => import('./views/Public/Register')
        },
        {
            path: '/login',
            name: 'login',
            component: () =>  import('./views/Public/Login')
        }
    ]
});

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        let token = JSON.parse( localStorage.getItem('token') );
        if (!token) {
            next({ name: 'login' })
        } else {
            next()
        }
    } else {
        next()
    }
})

export default router;