import VueRouter from 'vue-router';

let routes = [
    {
        path: '/',
        component: require('./views/Home').default
    },
    {
        path: '/login',
        component: require('./views/auth/Login').default
    },
    {
        path: '/register',
        component: require('./views/auth/Register').default
    },
    {
        path: '/about',
        component: require('./views/About').default
    },
    {
<<<<<<< HEAD
        path: '/modal',
        component: require('./views/Slider').default
=======
        path: '/categories',
        component: require('./views/Categories').default
>>>>>>> ea25770692bb65eb84629fcc46dadc9fd94bd024
    },
];

export default new VueRouter({
    routes: routes,
    mode: 'history',
    linkActiveClass: 'is-active'
});
