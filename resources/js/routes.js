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
        path: '/about',
        component: require('./views/About').default
    },
    {
        path: '/modal',
        component: require('./views/Slider').default
    },
];

export default new VueRouter({
    routes: routes,
    mode: 'history',
    linkActiveClass: 'is-active'
});
